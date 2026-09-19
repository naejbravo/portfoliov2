/**
 * Contenido de la portada.
 *
 * Los cinco pilares del perfil mandan sobre este archivo: soluciones .NET, Docker y
 * registry (GHCR), cloud engineering y fullstack, con la IA aplicada como capacidad
 * secundaria. Lo editable vive aquí; los casos de estudio salen de content/projects/details.json.
 *
 * El ritmo de cada bloque (3 métricas, 3 columnas de 5 tecnologías, 4 filas de proyecto,
 * 4 hitos de trayectoria) es el del diseño: cambiarlo desajusta la comparación con el mockup.
 */

export type Level = "advanced" | "solid" | "working knowledge"

export type StackGroup = {
  title: string
  items: { name: string; level: Level }[]
}

export type ExperienceEntry = {
  period: string
  role: string
  org: string
  description: string
}

export const portfolio = {
  brand: {
    name: "Jean Bravo",
    role: "Full-stack .NET Engineer",
  },

  /* línea de posicionamiento única — la misma que deben contar CV y metadatos */
  positioning: "Full-stack .NET Engineer — Cloud, Containers, Applied AI",

  availability: "Available for new projects",
  availabilityNote: "2026",

  statement: {
    lead: "I design, build and run",
    light: "full-stack .NET solutions, Docker containers and cloud infrastructure",
    marked: "from the data model to the container registry",
  },

  intro:
    "Full-stack .NET engineer building and operating production systems end-to-end: solution and data-model design, ASP.NET Core and Blazor, container images published to GHCR, and cloud infrastructure on GCP, Azure and OCI with Terraform and CI/CD. Applied AI — LLM integrations and RAG — as a capability on top, not as the headline.",

  meta: {
    location: "Málaga, ES · Zürich, CH",
    modality: "Remote · Hybrid · Relocation",
    languages: "Spanish (native) · English (professional)",
    timezone: "CET (UTC+01:00)",
  },

  stats: [
    { value: "6", label: "years of experience" },
    { value: "20+", label: ".NET projects delivered" },
    { value: "3", label: "cloud platforms (GCP · Azure · OCI)" },
  ],

  stack: [
    {
      title: ".NET Solutions",
      items: [
        { name: "C# / .NET 8–10", level: "advanced" },
        { name: "ASP.NET Core", level: "advanced" },
        { name: "Entity Framework Core", level: "advanced" },
        { name: "Multi-tenant architecture & RBAC", level: "advanced" },
        { name: "Blazor & SignalR", level: "solid" },
      ],
    },
    {
      title: "Cloud & Containers",
      items: [
        { name: "Docker & Compose", level: "advanced" },
        { name: "GHCR container registry", level: "advanced" },
        { name: "Terraform (IaC)", level: "solid" },
        { name: "GitHub Actions CI/CD", level: "solid" },
        { name: "GCP · Azure · OCI", level: "solid" },
        { name: "Kubernetes", level: "working knowledge" },
      ],
    },
    {
      title: "Full-stack & Applied AI",
      items: [
        { name: "TypeScript / JavaScript", level: "advanced" },
        { name: "React", level: "solid" },
        { name: "CSS & design systems", level: "advanced" },
        { name: "PostgreSQL / SQL Server", level: "solid" },
        { name: "LLM integrations & RAG", level: "solid" },
      ],
    },
  ] satisfies StackGroup[],

  experience: [
    {
      period: "2023 — Present",
      role: "Senior Software Engineer",
      org: "Software company · Málaga (hybrid)",
      description:
        "Technical owner of three business modules. Data model design, internal APIs and the team's frontend style guide. Mentoring two junior developers.",
    },
    {
      period: "2021 — 2023",
      role: "Full-stack Developer",
      org: "Digital consultancy · Remote",
      description:
        "Custom applications for logistics and education clients. Integrations with ERPs, payment gateways and external services.",
    },
    {
      period: "2020 — 2021",
      role: "Junior Web Developer",
      org: "Product agency · Spain",
      description:
        "Corporate sites and online stores. First serious contact with interface detail and shipping on a deadline.",
    },
    {
      period: "Education",
      role: "Computer Science / Application Development",
      org: "Higher education · Spain",
      description:
        "Programming, databases and networks. Continuous learning since then through real projects and self-directed study.",
    },
  ] satisfies ExperienceEntry[],

  contact: {
    email: "naejbravo@gmail.com",
    github: "https://github.com/naejbravo",
    linkedin: "https://www.linkedin.com/in/jean-bravo/",
    cvEn: "/cv_eng_jean_2026.pdf",
    cvDe: "/lebenslauf_jean_2026.pdf",
  },

  photo: {
    src: "/perfil.png",
    alt: "Portrait of Jean Bravo",
  },
} as const
