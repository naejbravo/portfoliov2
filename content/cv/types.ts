/**
 * Contrato del contenido del CV. Es igual para la plantilla y para el CV real, así que
 * cambiar de uno a otro no toca ni la maqueta ni el generador de PDF.
 */

export type CvLanguage = "en" | "de"

export type CvEntry = {
  title: string
  company: string
  period: string
  project?: string
  bullets: string[]
}

export type CvEducation = {
  title: string
  detail: string
  period: string
}

export type CvSkills = {
  label: string
  items: string
}

export type CvContent = {
  /** titular propio del idioma; si falta, se usa `profile.positioning` */
  subtitle?: string
  /** párrafo de perfil propio del idioma; si falta, se usa `profile.intro` */
  profile?: string
  labels: {
    profile: string
    experience: string
    projects: string
    education: string
    skills: string
    languages: string
    present: string
    location: string
  }
  experience: CvEntry[]
  projects: CvEntry[]
  education: CvEducation[]
  skills: CvSkills[]
  languages: string
}
