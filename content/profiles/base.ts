import type { Profile } from "./types"

/**
 * Datos que no cambian entre variantes: identidad, contacto, ubicación y enlaces.
 * Todo lo que sí cambia por candidatura vive en cada perfil.
 */
export const base: Omit<Profile, "slug" | "label" | "statement" | "intro" | "stats" | "stack" | "projects" | "experience"> = {
  brand: {
    name: "Jean Bravo",
    role: "Full-stack .NET Engineer",
  },
  positioning: "Full-stack .NET Engineer — Cloud, Containers, Applied AI",
  availability: "Available for new projects",
  availabilityNote: "2026",
  meta: {
    location: "Málaga, ES · Zürich, CH",
    modality: "Remote · Hybrid · Relocation",
    languages: "Spanish (native) · English (professional)",
    timezone: "CET (UTC+01:00)",
  },
  contact: {
    email: "naejbravo@gmail.com",
    phone: "+34 677 750 689",
    github: "https://github.com/naejbravo",
    linkedin: "https://www.linkedin.com/in/jean-bravo/",
    cvEn: "/cv_eng_jean_2026.pdf",
    cvDe: "/lebenslauf_jean_2026.pdf",
  },
  photo: {
    src: "/perfil.png",
    alt: "Portrait of Jean Bravo",
  },
}
