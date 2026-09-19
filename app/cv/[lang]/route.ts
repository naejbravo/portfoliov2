import { cvDe, cvEn, type CvLanguage } from "@/content/cv"
import { getProfile } from "@/content/profiles"
import { renderCvHtml } from "@/lib/cv-html"

const languages: CvLanguage[] = ["en", "de"]

/**
 * El CV se renderiza en cada petición: así `next start` + PORTFOLIO_PROFILE genera el PDF
 * de cualquier variante sin recompilar.
 */
export const dynamic = "force-dynamic"

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }))
}

/**
 * Sirve el HTML del CV (misma maqueta A4 que los PDF) para el perfil activo.
 * Lo usa `npm run cv:build` para imprimir los PDF, y sirve para revisarlo en el navegador.
 */
export async function GET(_request: Request, { params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params

  if (!languages.includes(lang as CvLanguage)) {
    return new Response("Unsupported language", { status: 404 })
  }

  const cv = lang === "de" ? cvDe : cvEn
  const html = renderCvHtml({ profile: getProfile(), cv, lang: lang as CvLanguage })

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
    },
  })
}
