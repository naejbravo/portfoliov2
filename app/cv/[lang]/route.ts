import { cvDe, cvEn, cvEnSpain, cvEs, type CvLanguage } from "@/content/cv"
import { getProfile } from "@/content/profiles"
import { renderCvHtml } from "@/lib/cv-html"

/**
 * Variantes servidas: los tres idiomas del CV y la versión inglesa para España
 * (`en-spain`), que solo cambia la línea de ubicación.
 */
export const cvVariants = {
  en: { cv: cvEn, lang: "en" as CvLanguage },
  de: { cv: cvDe, lang: "de" as CvLanguage },
  es: { cv: cvEs, lang: "es" as CvLanguage },
  "en-spain": { cv: cvEnSpain, lang: "en" as CvLanguage, docTitle: "Jean Bravo — CV (EN · Spain)" },
}

export type CvVariant = keyof typeof cvVariants

export const cvVariantKeys = Object.keys(cvVariants) as CvVariant[]

/**
 * El CV se renderiza en cada petición: así `next start` + PORTFOLIO_PROFILE genera el PDF
 * de cualquier variante sin recompilar.
 */
export const dynamic = "force-dynamic"

export function generateStaticParams() {
  return cvVariantKeys.map((lang) => ({ lang }))
}

/**
 * Sirve el HTML del CV (misma maqueta A4 que los PDF) para el perfil activo.
 * Lo usa `npm run cv:build` para imprimir los PDF, y sirve para revisarlo en el navegador.
 */
export async function GET(_request: Request, { params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params

  const variant = cvVariants[lang as CvVariant]
  if (!variant) {
    return new Response("Unsupported language", { status: 404 })
  }

  const html = renderCvHtml({
    profile: getProfile(),
    cv: variant.cv,
    lang: variant.lang,
    docTitle: "docTitle" in variant ? variant.docTitle : undefined,
  })

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
    },
  })
}
