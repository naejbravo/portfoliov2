/**
 * Contenido del CV.
 *
 * Por defecto se sirve la PLANTILLA (`template.ts`), para que mientras se ajusta el diseño
 * no haya datos personales publicados. El CV real vive en `real.ts` y se activa con:
 *
 *   CV_CONTENT=real npm run cv:build          # PDFs
 *   CV_CONTENT=real npm run start             # /cv/en, /cv/es y /cv/de en el navegador
 *
 * El bloque `Profile` del CV no se escribe aquí: se toma del perfil activo
 * (`profile.intro`), que es también el que titula el documento (`profile.positioning`).
 */

export * from "./types"

import type { CvContent, CvLanguage } from "./types"
import { cvDe as realDe, cvEn as realEn, cvEnSpain as realEnSpain, cvEs as realEs } from "./real"
import { cvDe as templateDe, cvEn as templateEn } from "./template"

const useReal = process.env.CV_CONTENT === "real"

export const cvEn: CvContent = useReal ? realEn : templateEn
export const cvDe: CvContent = useReal ? realDe : templateDe
/**
 * Variantes de España (sin Suiza ni visado). No tienen plantilla propia: mientras el
 * contenido real no esté activo se sirve la plantilla inglesa.
 */
export const cvEnSpain: CvContent = useReal ? realEnSpain : templateEn
export const cvEs: CvContent = useReal ? realEs : templateEn

const byLanguage: Record<CvLanguage, CvContent> = {
  en: cvEn,
  de: cvDe,
  es: cvEs,
}

export function getCv(lang: CvLanguage): CvContent {
  return byLanguage[lang] ?? cvEn
}
