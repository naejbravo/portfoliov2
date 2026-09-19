/**
 * Contenido de la home — PLANTILLA.
 *
 * Todo el texto que se ve en la portada vive aquí: para pasar de plantilla a contenido real
 * basta editar este archivo (los casos de estudio de /work y los CV siguen en sus fuentes de siempre).
 *
 * Nota: el nombre y los enlaces de contacto son los reales del sitio (aparecen también en los
 * metadatos, los PDFs y /work). El copy de las secciones es genérico de plantilla.
 *
 * El ritmo de cada bloque (3 métricas, 3 columnas de 5 tecnologías, 4 filas de proyecto,
 * 4 hitos de trayectoria) es el del diseño: cambiarlo desajusta la comparación con el mockup.
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
    role: "Backend & AI Engineer",
  },

  availability: "Available for new projects",
  availabilityNote: "2026",

  statement: {
    lead: "I build",
    light: "backend systems, APIs and applied AI",
    marked: "engineered to outlast the trend",
  },

  intro:
    "Backend engineer working end-to-end: API architecture, data modelling, cloud deployment and AI-powered features. I move between the data model and the interface, and I ship with migrations, monitoring and a rollback plan in place.",

  meta: {
    location: "Málaga, ES · Zürich, CH",
    modality: "Remote · Hybrid · Relocation",
    languages: "Spanish (native) · English (professional)",
    timezone: "CET (UTC+01:00)",
  },

  stats: [
    { value: "6", label: "years of experience" },
    { value: "20+", label: "projects delivered" },
    { value: "2", label: "target markets" },
  ],

  stack: [
    {
      title: "Backend & APIs",
      items: [
        { name: ".NET 8 / 10", level: "advanced" },
        { name: "ASP.NET Core", level: "advanced" },
        { name: "REST APIs & EF Core", level: "advanced" },
        { name: "PostgreSQL / SQL Server", level: "solid" },
        { name: "Blazor & SignalR", level: "solid" },
      ],
    },
    {
      title: "Cloud & Infrastructure",
      items: [
        { name: "Docker & Compose", level: "solid" },
        { name: "Terraform (IaC)", level: "solid" },
        { name: "GCP / Azure / OCI", level: "solid" },
        { name: "GitHub Actions CI/CD", level: "solid" },
        { name: "Linux / systemd", level: "advanced" },
      ],
    },
    {
      title: "Applied AI",
      items: [
        { name: "LLM integrations & routing", level: "advanced" },
        { name: "RAG / vector databases", level: "solid" },
        { name: "Semantic memory (Mem0)", level: "working knowledge" },
        { name: "Agent infrastructure", level: "working knowledge" },
        { name: "Python", level: "solid" },
      ],
    },
  ] satisfies StackGroup[],

  projects: [
    {
      id: "01",
      title: "Document management platform",
      summary: "Approval flows, versioning and audit trail for 300 internal users.",
      year: "2025",
      detail:
        "Multi-tenant .NET application with an immutable history model, role-based permissions and PDF report generation. Cut report turnaround from 40 to 15 minutes per case.",
      tech: [".NET 8", "Blazor", "PostgreSQL"],
    },
    {
      id: "02",
      title: "Real-time metrics dashboard",
      summary: "Live dashboards with combinable filters and scheduled exports.",
      year: "2024",
      detail:
        "SignalR for data push, aggregations in SQL Server, Excel and PDF export, plus threshold alerting. Designed for always-on operations room screens.",
      tech: ["SignalR", "TypeScript", "MySQL"],
    },
    {
      id: "03",
      title: "Reproducible deployment pipeline",
      summary: "Multi-architecture build, controlled migrations and automatic rollback.",
      year: "2024",
      detail:
        "Deployment scripts with health verification, pre-flight backup and automatic revert. Took releases from 45 minutes to 6 and removed manual maintenance windows.",
      tech: ["Docker", "Linux", "Bash"],
    },
    {
      id: "04",
      title: "Third-party integrations",
      summary: "Payment gateways, ERP and external services over REST APIs.",
      year: "2023",
      detail:
        "Retry queues with exponential backoff, idempotent operations and full traceability of every call for support.",
      tech: ["REST", "Queues", "Idempotency"],
    },
  ] satisfies ProjectRow[],

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
