#!/usr/bin/env node
/**
 * Genera los PDF del CV a partir del contenido del proyecto.
 *
 * Uso:
 *   npm run cv:build                    # perfil activo (PORTFOLIO_PROFILE o "default")
 *   npm run cv:build -- --profile saas-b2b
 *   npm run cv:build -- --url http://localhost:3000   # usa un servidor ya levantado
 *
 * Cómo funciona: arranca el servidor de producción, pide /cv/<lang> (la maqueta A4 servida
 * con los datos del perfil), la imprime a PDF con el Chromium local y apaga el servidor.
 * No necesita dependencias extra: usa el binario de Chromium que ya exista en la máquina.
 */

import { spawn, spawnSync } from "node:child_process"
import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync, unlinkSync } from "node:fs"
import { dirname, join, relative, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const here = dirname(fileURLToPath(import.meta.url))
const root = resolve(here, "..")

const args = process.argv.slice(2)
const flag = (name) => {
  const index = args.indexOf(name)
  return index >= 0 ? args[index + 1] : undefined
}

const profileSlug = flag("--profile") ?? process.env.PORTFOLIO_PROFILE ?? "default"
const externalUrl = flag("--url")
const port = Number(flag("--port") ?? 3199)
const outDir = resolve(root, flag("--out-dir") ?? "public")

const OUTPUTS = [
  { lang: "en", file: "cv_en.pdf" },
  { lang: "de", file: "cv_de.pdf" },
  { lang: "es", file: "cv_es.pdf" },
  { lang: "en-spain", file: "cv_en_spain.pdf" },
]

const cvSource = process.env.CV_CONTENT === "real" ? "real" : "template"

/**
 * La foto real vive en `assets/real/` y NO en `public/`: el sitio desplegado no debe servir la
 * identidad real (commit debab08). Pero el CV la pide como `/perfil.jpg`, así que hay que
 * dejarla en `public/` mientras dura la impresión y retirarla al terminar.
 *
 * Si se olvida, Chromium pinta el icono de imagen rota y el PDF sale sin foto: pasó el 19-oct-2026.
 */
const PHOTO_TARGET = resolve(root, "public/perfil.jpg")
const PHOTO_SOURCES = ["assets/real/cv-perfil.jpg", "assets/real/perfil.jpg"].map((p) => resolve(root, p))
let stagedPhoto = false

function stagePhoto() {
  if (cvSource !== "real" || existsSync(PHOTO_TARGET)) return
  const source = PHOTO_SOURCES.find((candidate) => existsSync(candidate))
  if (!source) {
    process.stdout.write(
      "⚠ No encuentro la foto del CV (assets/real/cv-perfil.jpg). El PDF saldrá sin foto.\n",
    )
    return
  }
  copyFileSync(source, PHOTO_TARGET)
  stagedPhoto = true
  process.stdout.write(`▸ foto del CV preparada desde ${relative(root, source)}\n`)
}

function cleanupPhoto() {
  if (!stagedPhoto || !existsSync(PHOTO_TARGET)) return
  unlinkSync(PHOTO_TARGET)
  process.stdout.write("▸ foto retirada de public/ (no se sirve en la web desplegada)\n")
}

const CHROMIUM_CANDIDATES = [
  process.env.CHROME_PATH,
  // Chromium de Playwright: no va confinado, así que puede escribir fuera de $HOME
  process.env.HOME ? join(process.env.HOME, ".cache/ms-playwright") : undefined,
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  process.env.PROGRAMFILES
    ? join(process.env.PROGRAMFILES, "Google/Chrome/Application/chrome.exe")
    : undefined,
  process.env["PROGRAMFILES(X86)"]
    ? join(process.env["PROGRAMFILES(X86)"], "Google/Chrome/Application/chrome.exe")
    : undefined,
  process.env.LOCALAPPDATA
    ? join(process.env.LOCALAPPDATA, "Google/Chrome/Application/chrome.exe")
    : undefined,
].filter(Boolean)

function findChromium() {
  for (const candidate of CHROMIUM_CANDIDATES) {
    if (!existsSync(candidate)) continue
    if (statSync(candidate).isFile()) return candidate
    // ~/.cache/ms-playwright: busca el Chromium más reciente (Linux o Windows)
    const versions = spawnSync(
      "bash",
      [
        "-lc",
        `ls -d ${candidate}/chromium-*/chrome-linux/chrome ${candidate}/chromium-*/chrome-win/chrome.exe 2>/dev/null | sort -V | tail -1`,
      ],
      { encoding: "utf8" },
    )
    const found = versions.stdout.trim()
    if (found) return found
  }
  throw new Error(
    `No encuentro Chromium. Define CHROME_PATH o instala uno de: ${CHROMIUM_CANDIDATES.join(", ")}`,
  )
}

async function waitForServer(url, timeoutMs = 45_000) {
  const deadline = Date.now() + timeoutMs
  while (Date.now() < deadline) {
    try {
      const response = await fetch(url)
      if (response.ok) return
    } catch {
      // todavía no escucha
    }
    await new Promise((r) => setTimeout(r, 500))
  }
  throw new Error(`El servidor no respondió en ${url} a tiempo`)
}

function printToPdf(chromium, url, output) {
  mkdirSync(dirname(output), { recursive: true })
  const result = spawnSync(
    chromium,
    ["--headless", "--no-sandbox", "--disable-gpu", "--no-pdf-header-footer", `--print-to-pdf=${output}`, url],
    { encoding: "utf8" },
  )
  if (!existsSync(output)) {
    throw new Error(
      `Chromium no generó ${output}: ${result.stderr || result.stdout}\n` +
        "Si usas un Chromium instalado como snap, no puede escribir fuera de tu carpeta personal: " +
        "apunta CHROME_PATH a un binario no confinado.",
    )
  }
}

function pdfInfo(path) {
  const text = spawnSync("pdftotext", [path, "-"], { encoding: "utf8" })
  if (text.error || typeof text.stdout !== "string") return { pages: null, chars: null }
  const pages = text.stdout.split("\f").filter((chunk) => chunk.trim().length > 0).length
  return { pages, chars: text.stdout.replace(/\s+/g, " ").trim().length }
}

/**
 * Cuenta las imágenes de más de 100 px incrustadas en el PDF. Sirve para detectar que la foto
 * no se cargó: Chromium imprime entonces un icono roto de 14x16 px en lugar de la retratada.
 */
function pdfPhotos(path) {
  const out = spawnSync("pdfimages", ["-list", path], { encoding: "utf8" })
  if (out.error || typeof out.stdout !== "string") return null
  return out.stdout
    .split("\n")
    .slice(2)
    .map((line) => line.trim().split(/\s+/))
    .filter((cols) => cols.length > 4 && /^\d+$/.test(cols[3]) && /^\d+$/.test(cols[4]))
    .map((cols) => ({ w: Number(cols[3]), h: Number(cols[4]) }))
    .filter((img) => img.w > 100 && img.h > 100)
}

async function main() {
  const chromium = findChromium()
  mkdirSync(outDir, { recursive: true })

  stagePhoto()
  let server
  const baseUrl = externalUrl ?? `http://127.0.0.1:${port}`

  if (!externalUrl) {
    process.stdout.write(`▸ arrancando servidor de producción en ${baseUrl} (perfil: ${profileSlug}, CV: ${cvSource})\n`)
    server = spawn(join(root, "node_modules/.bin/next"), ["start", "--port", String(port)], {
      cwd: root,
      env: { ...process.env, PORTFOLIO_PROFILE: profileSlug },
      stdio: "ignore",
      detached: false,
    })
    await waitForServer(`${baseUrl}/cv/en`)
  } else {
    process.stdout.write(`▸ usando servidor existente en ${baseUrl}\n`)
  }

  try {
    for (const { lang, file } of OUTPUTS) {
      const output = join(outDir, file)
      printToPdf(chromium, `${baseUrl}/cv/${lang}`, output)
      const { pages, chars } = pdfInfo(output)
      const photos = pdfPhotos(output)
      const size = (statSync(output).size / 1024).toFixed(0)
      const pageNote = pages ? `${pages} página(s)` : "páginas: n/d"
      process.stdout.write(`✓ ${file} — ${pageNote}, ${chars ?? "?"} caracteres, ${size} KB\n`)
      if (pages && pages > 1) {
        process.stdout.write(`  ⚠ ${file} ocupa más de una página: revisa el contenido o el tamaño de fuente\n`)
      }
      if (photos && photos.length === 0) {
        process.stdout.write(`  ⚠ ${file} no lleva la foto incrustada: revisa public/perfil.jpg\n`)
      }
    }
    process.stdout.write(`\nPDF generados en ${outDir} desde el perfil "${profileSlug}" y el CV "${cvSource}".\n`)
  } finally {
    if (server) {
      server.kill("SIGTERM")
      await new Promise((r) => setTimeout(r, 800))
      if (!server.killed) server.kill("SIGKILL")
    }
    cleanupPhoto()
  }
}

main().catch((error) => {
  process.stderr.write(`✗ ${error.message}\n`)
  process.exit(1)
})
