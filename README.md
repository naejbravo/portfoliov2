# bravojc.com — Portfolio

Portfolio de un full-stack .NET engineer: Next.js, TypeScript y Tailwind CSS, con un sistema
editorial (papel, tinta y un único acento rojo).

## Contenido: plantilla o real

El proyecto está montado para trabajar con **contenido de plantilla** (persona ficticia: Alex
Rivera) mientras se ajusta el diseño, y para publicar el real cambiando una variable. Nada real
se sirve por defecto.

| Qué | Plantilla (por defecto) | Real (guardado, no servido) | Cómo se activa |
|---|---|---|---|
| Identidad y contacto | `content/profiles/base.ts` | — | editar el fichero |
| Casos de estudio | `content/projects/details.json` | `content/projects/details.real.json` | intercambiar los dos ficheros |
| CV (experiencia, formación, skills) | `content/cv/template.ts` | `content/cv/real.ts` | `CV_CONTENT=real` |
| Foto, portadas, favicon, PDFs | `public/placeholder-*.svg`, `app/icon.svg` | `assets/real/` | copiar a su sitio |

Los textos de la portada (declaración, intro, stack, experiencia) salen del perfil activo, así que
no hay copy duplicado fuera de `content/profiles`.

## Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Estilos:** Tailwind CSS 4 — los tokens del sistema viven en `app/globals.css`
- **Formularios:** react-hook-form, zod, Resend (formulario de contacto)
- **Contenido:** perfiles tipados (`content/profiles`) y casos de estudio (`content/projects`)
- **Despliegue:** Vercel

## Diseño

Papel blanco, tinta `#111110` y un único acento rojo, una familia tipográfica (Inter Tight) más
monoespaciada (JetBrains Mono), retícula de 12 columnas visible y filas con filetes en lugar de
tarjetas. Solo modo claro, a propósito: imprime y exporta a PDF sin romperse.

Las clases de `app/globals.css` conservan los nombres del diseño original (`.hero-foot`, `.sec-head`,
`.row`, `.kv`, `.btn`…) para poder comparar estilos computados entre el diseño y la implementación.

## Perfiles por candidatura

```
content/profiles/
├── types.ts      # contrato del perfil
├── base.ts       # identidad, contacto y ubicación (compartido)
├── default.ts    # variante general
├── saas-b2b.ts   # variante para ofertas de producto B2B SaaS
└── index.ts      # registro y resolución
```

- **Añadir una variante:** copia un perfil existente, cambia `slug`, `label`, `positioning`,
  `statement`, `intro`, `stats`, `stack`, `projects` y `experience`, y regístralo en `index.ts`.
- **Servirla:** `/for/<slug>` (una página prerenderizada por perfil, misma maqueta que `/`) o
  `PORTFOLIO_PROFILE=<slug>` para que `/` la use (se resuelve en el build).
- Las variantes llevan `noindex` y están excluidas del sitemap y de `robots.txt`: son material para
  candidaturas concretas y no deben aparecer en buscadores.

## CV

Los PDF se generan desde el perfil activo, así que no pueden contradecir a la web:

```bash
npm run cv:build                        # perfil activo → public/cv_en.pdf y public/cv_de.pdf
npm run cv:build -- --profile saas-b2b  # CV de una variante
npm run cv:build -- --out-dir /tmp/cv   # sin tocar public/
CV_CONTENT=real npm run cv:build        # con los datos reales de content/cv/real.ts
```

- `content/cv/types.ts` — contrato; `template.ts` y `real.ts` lo cumplen, así que cambiar de uno a
  otro no toca ni la maqueta ni el generador.
- `lib/cv-html.ts` — maqueta A4; el titular y el párrafo de perfil salen del perfil activo.
- `/cv/<lang>` — sirve ese HTML, útil para revisar cambios en el navegador antes de generar el PDF.
- El script busca Chromium (el de Playwright, `/usr/bin/chromium`, Chrome de macOS/Windows) o usa
  `CHROME_PATH`, e informa si algún PDF pasa de una página.

## Metadatos

`lib/site.ts` es la única fuente del origen del sitio (`NEXT_PUBLIC_SITE_URL`, con
`https://ejemplo.com` como valor de plantilla) y lo consumen los metadatos de `app/layout.tsx`, el
sitemap, `robots.ts` y el dominio que muestra el CV.

## Estructura

```
├── app/
│   ├── api/contact/         # API del formulario (Resend)
│   ├── cv/[lang]/           # HTML del CV por idioma (origen de los PDF)
│   ├── for/[slug]/          # Portada por perfil (noindex)
│   ├── work/                # Índice y casos de estudio
│   ├── icon.svg             # Marca del sitio (plantilla)
│   ├── layout.tsx           # Layout raíz, metadatos y JSON-LD
│   ├── robots.ts            # robots.txt generado
│   └── sitemap.ts
├── components/
│   ├── portfolio-page.tsx   # Compone la portada (la usan / y /for/<slug>)
│   ├── hero.tsx · stack.tsx · project-index.tsx · timeline.tsx · ctaFinal.tsx
│   ├── header.tsx · footer.tsx · grid-guides.tsx
│   └── ui/                  # Primitivas compartidas
├── content/
│   ├── profiles/            # Perfiles por candidatura
│   ├── cv/                  # Contenido del CV: types, template y real
│   └── projects/            # Casos de estudio (plantilla y real)
├── assets/real/             # Material real retirado de public/ (foto, capturas, PDFs, favicon)
├── lib/
│   ├── cv-html.ts           # Maqueta A4 del CV
│   ├── projects.ts          # Transformación de los casos
│   └── site.ts              # Origen del sitio
├── scripts/build-cv.mjs     # Generador de los PDF del CV
└── public/                  # Assets y PDF generados
```

## Desarrollo

```bash
npm run dev        # Servidor de desarrollo (Turbopack)
npm run build      # Build de producción
npm run cv:build   # Regenera los PDF del CV desde el perfil activo
```

`npm run lint` está pendiente: `eslint.config.mjs` falla al validar la configuración (problema
previo, no de los archivos del proyecto).

## Autor

Jean Bravo — [bravojc.com](https://bravojc.com) — [github.com/naejbravo](https://github.com/naejbravo)
