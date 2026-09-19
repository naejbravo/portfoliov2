/**
 * Tipos del perfil. Un perfil es todo lo que la portada necesita para pintarse: sirve
 * tanto para la web como para el CV, que se genera desde el mismo objeto.
 */

export type Level = "advanced" | "solid" | "working knowledge"

export type StackGroup = {
  title: string
  items: { name: string; level: Level }[]
}

export type ProjectRow = {
  id: string
  title: string
  summary: string
  year: string
  detail: string
  tech: string[]
  href?: string
}

export type ExperienceEntry = {
  period: string
  role: string
  org: string
  description: string
}

export type Profile = {
  /** slug del perfil; se usa en /for/<slug> y en el nombre del CV generado */
  slug: string
  /** etiqueta corta para el selector */
  label: string
  brand: {
    name: string
    role: string
  }
  /** línea de posicionamiento única: web, metadatos y subtítulo del CV */
  positioning: string
  availability: string
  availabilityNote: string
  statement: {
    lead: string
    light: string
    marked: string
  }
  intro: string
  meta: {
    location: string
    modality: string
    languages: string
    timezone: string
  }
  stats: { value: string; label: string }[]
  stack: StackGroup[]
  projects: ProjectRow[]
  experience: ExperienceEntry[]
  contact: {
    email: string
    phone: string
    github: string
    linkedin: string
    cvEn: string
    cvDe: string
  }
  photo: {
    src: string
    alt: string
  }
}
