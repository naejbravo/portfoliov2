import { siteLabel } from "@/lib/site"
import type { Profile } from "./types"

/**
 * Datos que no cambian entre variantes: identidad, contacto, ubicación y enlaces.
 *
 * ⚠ PLANTILLA: persona ficticia. Nombre, correo, teléfono, enlaces y foto son genéricos.
 * Al publicar contenido real, sustituye estos valores (o crea un perfil nuevo en
 * content/profiles/ y deja este como plantilla).
 */
export const base: Omit<Profile, "slug" | "label" | "statement" | "intro" | "stats" | "stack" | "projects" | "experience"> = {
  brand: {
    name: "Alex Rivera",
    role: "Full-stack .NET Engineer",
  },
  positioning: "Full-stack .NET Engineer — Cloud, Containers, Applied AI",
  availability: "Available for new projects",
  availabilityNote: "2026",
  meta: {
    location: "Madrid, ES · Zürich, CH",
    modality: "Remote · Hybrid · Relocation",
    languages: "Spanish (native) · English (professional)",
    timezone: "CET (UTC+01:00)",
  },
  contact: {
    email: "hola@ejemplo.com",
    phone: "+34 600 000 000",
    github: "https://github.com/usuario",
    linkedin: "https://linkedin.com/in/usuario",
    site: siteLabel,
    cvEn: "/cv_en.pdf",
    cvDe: "/cv_de.pdf",
  },
  photo: {
    src: "/placeholder-portrait.svg",
    alt: "Portrait placeholder",
  },
}
