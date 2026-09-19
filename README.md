# bravojc.com — Portfolio

Portfolio de un full-stack .NET engineer, construido con Next.js, TypeScript y Tailwind CSS.

## Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Estilos:** Tailwind CSS 4 — los tokens del sistema viven en `app/globals.css`
- **Formularios:** react-hook-form, zod, Resend (formulario de contacto)
- **Contenido:** perfiles tipados (`content/profiles`) y casos de estudio (`content/projects`)
- **Despliegue:** Vercel

## Diseño

Sistema editorial: papel blanco, tinta `#111110` y un único acento rojo, una familia tipográfica
(Inter Tight) más monoespaciada (JetBrains Mono), retícula de 12 columnas visible y filas con
filetes en lugar de tarjetas. Solo modo claro, a propósito: imprime y exporta a PDF sin romperse.

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
- Los casos de estudio reales siguen en `content/projects/details.json` y se publican en `/work`.

## CV

Los PDF del CV se generan desde el perfil activo, así que no pueden contradecir a la web:

```bash
npm run cv:build                              # perfil activo → public/cv_eng_jean_2026.pdf y public/lebenslauf_jean_2026.pdf
npm run cv:build -- --profile saas-b2b        # CV de una variante
npm run cv:build -- --out-dir /tmp/cv         # sin tocar public/
```

- `content/cv/index.ts` — datos reales en inglés y alemán (experiencia, proyectos, formación, skills).
- `lib/cv-html.ts` — maqueta A4; el titular y el párrafo de perfil salen del perfil activo.
- `/cv/<lang>` — sirve ese HTML, útil para revisar cambios en el navegador antes de generar el PDF.
- El script busca Chromium (el de Playwright, `/usr/bin/chromium`, Chrome de macOS/Windows) o usa
  `CHROME_PATH`, e informa si algún PDF pasa de una página.

## Estructura

```
├── app/
│   ├── api/contact/         # API del formulario (Resend)
│   ├── cv/[lang]/           # HTML del CV por idioma (origen de los PDF)
│   ├── for/[slug]/          # Portada por perfil
│   ├── work/                # Índice y casos de estudio
│   ├── layout.tsx           # Layout raíz, metadatos y JSON-LD
│   └── page.tsx             # Portada del perfil activo
├── components/
│   ├── portfolio-page.tsx   # Compone la portada (la usan / y /for/<slug>)
│   ├── hero.tsx · stack.tsx · project-index.tsx · timeline.tsx · ctaFinal.tsx
│   ├── header.tsx · footer.tsx · grid-guides.tsx
│   └── ui/                  # Primitivas compartidas
├── content/
│   ├── profiles/            # Perfiles por candidatura
│   ├── cv/                  # Datos reales del CV (EN/DE)
│   └── projects/            # Casos de estudio
├── lib/
│   ├── cv-html.ts           # Maqueta A4 del CV
│   ├── projects.ts          # Transformación de los casos
│   └── utils.ts             # cn()
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
