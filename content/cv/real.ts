/**
 * CV REAL (contenido factual: experiencia, proyectos, formación y skills verdaderos).
 *
 * No se sirve por defecto: para publicarlo hay que arrancar con `CV_CONTENT=real`
 * (y también en el generador: `CV_CONTENT=real npm run cv:build`).
 */

import type { CvContent } from "./types"

export const cvEn: CvContent = {
  labels: {
    profile: "Profile",
    experience: "Experience",
    projects: "Projects",
    education: "Education",
    skills: "Skills",
    languages: "Languages",
    interests: "Interests",
    present: "Present",
    location: "Spain → Zürich (EU passport, no visa required)",
  },
  experience: [
    {
      title: "Tech Lead & Full-stack .NET Developer",
      company: "HumanTech Software",
      period: "Jan 2026 – Present",
      project: "WebRRHHpro — Multi-tenant HR SaaS (Production)",
      bullets: [
        "Architected multi-tenant SaaS platform (.NET 10, Blazor, PostgreSQL, Clean Architecture) with subdomain isolation, RBAC and EF Core global query filters across 6 roles.",
        "Built AI-powered document classification (OCR, field extraction, auto-categorization) and 3-mode signature workflows (OTP, click, certificate). Reduced paper processes by 95% and signature turnaround by 80%.",
        "Designed and operate production infrastructure on GCP: Docker images published to GHCR, GitHub Actions CI/CD, Caddy, SignalR and Serilog.",
      ],
    },
    {
      title: "Full-stack .NET Developer",
      company: "HumanTech Software",
      period: "May 2025 – Present",
      project: "WebCAEpro — Workforce management (Multi-tenant)",
      bullets: [
        "Built GDPR-compliant signature workflow with SHA-256 magic links, audit trail and PDF stamping — 100% digital compliance.",
        "Designed REST API for mobile time tracking with encrypted API keys and timezone-aware validation.",
        "Architected single codebase serving 3 business brands with isolated databases and independent SMTP/WhatsApp channels.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Correcto · Startup",
      period: "May 2022 – May 2023",
      bullets: [
        "Built responsive web platforms with Angular and JavaScript in an agile startup environment.",
        "GCP deployments and cross-functional teamwork using Jira.",
      ],
    },
  ],
  education: [
    {
      title: "Full Stack Developer Program",
      detail: "Upgrade Hub, Madrid",
      period: "2021 – 2022",
    },
    {
      title: "Higher Technical Certificate (ASIR)",
      detail: "Network Admin, IES Fuengirola N°1",
      period: "2018 – 2020",
    },
  ],
  skills: [
    {
      label: ".NET Solutions",
      items:
        "C# 14, .NET 8/10, ASP.NET Core, REST APIs, EF Core, Blazor, Clean Architecture, multi-tenant, RBAC, SignalR",
    },
    {
      label: "Cloud & Containers",
      items:
        "Docker, GHCR (container registry), Kubernetes (working knowledge), GCP, Azure, OCI, Terraform, GitHub Actions CI/CD, Caddy, Cloudflare Tunnel, Linux/systemd",
    },
    {
      label: "Data",
      items: "PostgreSQL, MySQL, SQL Server, Qdrant (vector DB)",
    },
    {
      label: "Applied AI",
      items:
        "LLM integrations, multi-model routing (OpenRouter), RAG, semantic memory (Mem0), browser automation (Browser Use), OCR document classification",
    },
    {
      label: "Security & Docs",
      items:
        "ASP.NET Identity, RBAC, JWT, digital signatures (OTP, SHA-256, certificate), audit trails, GDPR",
    },
  ],
  languages: "Spanish — Native    English — B2    German — A1 (learning)",
  interests: "Team sports · Volunteering",
}

/**
 * Variante inglesa para ofertas en España: mismo historial y mismas competencias que
 * `cvEn`, sin la línea de Suiza ni el pasaporte UE. La ubicación es la real y la
 * disponibilidad es inmediata.
 */
export const cvEnSpain: CvContent = {
  ...cvEn,
  labels: {
    ...cvEn.labels,
    location: "Málaga, Spain · available immediately",
  },
}

/**
 * CV en español para el mercado español: sin referencias a Suiza, Zúrich ni visado.
 * Titular, perfil y competencias propios del idioma; el historial es el mismo.
 */
export const cvEs: CvContent = {
  subtitle: "Ingeniero .NET full-stack — Cloud, Contenedores, IA aplicada",
  profile:
    "Ingeniero .NET full-stack que construye y opera sistemas en producción de principio a fin: diseño de soluciones y modelos de datos, ASP.NET Core y Blazor, imágenes de contenedor publicadas en GHCR e infraestructura cloud en GCP, Azure y OCI con Terraform y CI/CD. IA aplicada — integraciones LLM y RAG — como capacidad adicional, no como titular.",
  labels: {
    profile: "Perfil",
    experience: "Experiencia profesional",
    projects: "Proyectos",
    education: "Formación",
    skills: "Competencias",
    languages: "Idiomas",
    interests: "Intereses",
    present: "Actualidad",
    location: "Málaga, España · Incorporación inmediata",
  },
  experience: [
    {
      title: "Tech Lead & Full-stack .NET Developer",
      company: "HumanTech Software",
      period: "ene 2026 – actualidad",
      project: "WebRRHHpro — SaaS de RRHH multi-tenant (producción)",
      bullets: [
        "Diseñé y desarrollé una plataforma SaaS multi-tenant (.NET 10, Blazor, PostgreSQL, Clean Architecture) con aislamiento por subdominio, RBAC y filtros globales de EF Core para 6 roles.",
        "Implementé clasificación documental con IA (OCR, extracción de campos, autocategorización) y flujos de firma en 3 modos (OTP, clic, certificado). Reduje un 95 % los procesos en papel y un 80 % el tiempo de firma.",
        "Diseñé y opero la infraestructura de producción en GCP: imágenes Docker publicadas en GHCR, CI/CD con GitHub Actions, Caddy, SignalR y Serilog.",
      ],
    },
    {
      title: "Desarrollador Full-stack .NET",
      company: "HumanTech Software",
      period: "may 2025 – actualidad",
      project: "WebCAEpro — Gestión de personal (multi-tenant)",
      bullets: [
        "Implementé un flujo de firma digital conforme al RGPD con enlaces mágicos SHA-256, trazabilidad de auditoría y estampado de PDF — 100 % de cumplimiento digital.",
        "Diseñé una API REST para el registro horario móvil con claves de API cifradas y validación por zona horaria.",
        "Diseñé una única base de código para 3 marcas de negocio, con bases de datos aisladas y canales independientes de SMTP/WhatsApp.",
      ],
    },
    {
      title: "Ingeniero de Software",
      company: "Correcto · Startup",
      period: "may 2022 – may 2023",
      bullets: [
        "Desarrollé plataformas web responsivas con Angular y JavaScript en un entorno startup ágil.",
        "Gestioné despliegues en GCP y trabajé con equipos multidisciplinares usando Jira.",
      ],
    },
  ],
  education: [
    {
      title: "Programa Full Stack Developer",
      detail: "Upgrade Hub, Madrid",
      period: "2021 – 2022",
    },
    {
      title: "Técnico Superior en Administración de Sistemas Informáticos en Red (ASIR)",
      detail: "IES Fuengirola N°1",
      period: "2018 – 2020",
    },
  ],
  skills: [
    {
      label: ".NET",
      items:
        "C# 14, .NET 8/10, ASP.NET Core, APIs REST, EF Core, Blazor, Clean Architecture, multi-tenant, RBAC, SignalR",
    },
    {
      label: "Cloud y contenedores",
      items:
        "Docker, GHCR (registro de contenedores), Kubernetes (nociones), GCP, Azure, OCI, Terraform, CI/CD con GitHub Actions, Caddy, Cloudflare Tunnel, Linux/systemd",
    },
    {
      label: "Datos",
      items: "PostgreSQL, MySQL, SQL Server, Qdrant (base de datos vectorial)",
    },
    {
      label: "IA aplicada",
      items:
        "Integraciones LLM, enrutado multi-modelo (OpenRouter), RAG, memoria semántica (Mem0), automatización de navegador (Browser Use), clasificación documental con OCR",
    },
    {
      label: "Seguridad y documentos",
      items:
        "ASP.NET Identity, RBAC, JWT, firmas digitales (OTP, SHA-256, certificado), auditoría, RGPD",
    },
  ],
  languages: "Español — Nativo    Inglés — B2    Alemán — A1 (en curso)",
  interests: "Deporte en equipo · Voluntariado",
}

export const cvDe: CvContent = {
  subtitle: "Full-stack .NET-Entwickler — Cloud, Container, Angewandte KI",
  profile:
    "Full-stack .NET-Entwickler, der Produktionssysteme end-to-end baut und betreibt: .NET- und Blazor-Lösungen, Multi-Tenant-Architekturen, Docker-Images in der GHCR-Registry und Cloud-Infrastruktur auf GCP, Azure und OCI mit Terraform und CI/CD. Angewandte KI (LLM-Integrationen, RAG) als Zusatzfähigkeit, nicht als Aushängeschild.",
  labels: {
    profile: "Profil",
    experience: "Berufserfahrung",
    projects: "Projekte",
    education: "Ausbildung",
    skills: "Fähigkeiten",
    languages: "Sprachen",
    interests: "Interessen",
    present: "Heute",
    location: "Spanien → Zürich (EU-Pass, kein Visum erforderlich)",
  },
  experience: [
    {
      title: "Tech Lead & Full-stack .NET Developer",
      company: "HumanTech Software",
      period: "01/2026 – Heute",
      project: "WebRRHHpro — Multi-Tenant HR-SaaS (Produktion)",
      bullets: [
        "Leitete Architektur und Entwicklung einer Multi-Tenant-SaaS-Plattform (.NET 10, Blazor Web App, PostgreSQL, Clean Architecture) mit Subdomain-Isolierung, RBAC und globalen EF-Core-Query-Filtern für 6 Rollen.",
        "Entwickelte OCR-basierte Dokumentenklassifizierung und 3-Modi-Signatur-Workflows (OTP, Klick-Signatur, zertifikatsbasiert), reduzierte papierbasierte HR-Prozesse um 95 % und Signatur-Durchlaufzeiten um 80 %.",
        "Lieferte Produktionsinfrastruktur auf GCP: Docker-Images in der GHCR-Registry, GitHub Actions CI/CD, Caddy, SignalR-Echtzeit-Benachrichtigungen und Serilog-Logging mit tenant-bezogener Observability.",
      ],
    },
    {
      title: "Full-stack .NET Developer",
      company: "HumanTech Software",
      period: "05/2025 – Heute",
      project: "WebCAEpro — Personalmanagement-Plattform",
      bullets: [
        "Implementierte DSGVO-konformen digitalen Signatur-Workflow für monatliche Zeiterfassungsvalidierung mit SHA-256-Magic-Links, Audit-Trail und PDF-Stempelung — 100 % digitale Compliance erreicht.",
        "Entwarf REST-API für gleichzeitiges mobiles Zeiterfassungs-Tracking mit verschlüsselten API-Schlüsseln, täglichen Operationslimits und zeitzonenbezogener Validierung.",
        "Erweiterte eine einzige Codebasis zur Unterstützung von 3 Geschäftsmarken mit isolierten Datenbanken, unabhängigen SMTP/WhatsApp-Kanälen und gebrandeten Themes.",
      ],
    },
    {
      title: "Software-Ingenieur",
      company: "Correcto · Startup",
      period: "05/2022 – 05/2023",
      bullets: [
        "Entwicklung responsiver Webplattformen mit Angular und JavaScript in einem schnelllebigen Startup-Umfeld.",
        "Verwaltung von GCP-Deployments und Zusammenarbeit in cross-funktionalen Teams mit Jira und Agile/Scrum.",
      ],
    },
  ],
  education: [
    {
      title: "Full Stack Developer Program",
      detail: "Upgrade Hub, Madrid",
      period: "2021 – 2022",
    },
    {
      title: "Higher Technical Certificate (ASIR)",
      detail: "Netzwerk-Systemadministration, IES Fuengirola N°1",
      period: "2018 – 2020",
    },
  ],
  skills: [
    {
      label: ".NET-Lösungen",
      items:
        "C# 14, .NET 8/10, ASP.NET Core, Blazor Web App, ASP.NET MVC, Razor, EF Core, Clean Architecture, REST-APIs",
    },
    {
      label: "Cloud & Container",
      items:
        "Docker, GHCR (Container Registry), Kubernetes (Grundkenntnisse), GCP, Azure, OCI, Terraform (IaC), GitHub Actions CI/CD, Caddy, Linux/systemd, Serilog",
    },
    {
      label: "Daten",
      items: "PostgreSQL, MySQL, SQL Server, Qdrant (Vector DB)",
    },
    {
      label: "Dokumentenautomatisierung & KI",
      items:
        "PdfPig (OCR), QuestPDF, PdfSharpCore, ChromeHtmlToPdf, LLM-Integrationen, RAG, digitale Signaturen, PKI (EJBCA / SignServer)",
    },
    {
      label: "Sicherheit",
      items: "ASP.NET Identity, RBAC, JWT, Audit-Trails, DSGVO",
    },
  ],
  languages: "Spanisch — Muttersprache    Englisch — B2    Deutsch — A1 (Grundkenntnisse)",
  interests: "Mannschaftssport · Ehrenamt",
}
