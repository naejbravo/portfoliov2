import { defaultProfile } from "./default"
import type { Profile } from "./types"

/**
 * Variante REAL: identidad, contacto, foto y ubicación de Jean (recuperados del histórico).
 *
 * No se sirve por defecto. Existe para generar el CV real
 * (`CV_CONTENT=real PORTFOLIO_PROFILE=real npm run cv:build`) y para /for/real (noindex).
 * El contenido de portada de esta variante sigue siendo el genérico hasta que se escriba el
 * contenido real del sitio; lo único real aquí es la identidad y el contacto.
 */
export const realProfile: Profile = {
  ...defaultProfile,
  slug: "real",
  label: "Real — Jean Bravo (noindex)",
  brand: {
    name: "Jean Bravo",
    role: "Full-stack .NET Engineer",
  },
  positioning: "Full-stack .NET Engineer — Cloud, Containers, Applied AI",
  meta: {
    location: "Málaga, ES · Zürich, CH",
    modality: "Remote · Hybrid · Relocation",
    languages: "Spanish (native) · English (B2) · German (A1)",
    timezone: "CET (UTC+01:00)",
  },
  contact: {
    email: "naejbravo@gmail.com",
    phone: "+34 677 750 689",
    github: "https://github.com/naejbravo",
    linkedin: "https://www.linkedin.com/in/jean-bravo/",
    site: "bravojc.com",
    cvEn: "/cv_eng_jean_2026.pdf",
    cvDe: "/lebenslauf_jean_2026.pdf",
  },
  photo: {
    src: "/perfil.jpg",
    alt: "Portrait of Jean Bravo",
  },
}
