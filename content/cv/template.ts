/**
 * CV de PLANTILLA: misma estructura que el real, contenido inventado (persona ficticia).
 *
 * Es lo que se sirve por defecto, para que nada real salga publicado mientras se ajusta el
 * diseño. Guarda el tuyo en `real.ts` y sirve ese con `CV_CONTENT=real`.
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
    present: "Present",
    location: "Madrid, Spain (open to relocation)",
  },
  experience: [
    {
      title: "Tech Lead & Full-stack .NET Developer",
      company: "Software company",
      period: "2023 – Present",
      project: "Multi-tenant SaaS platform (Production)",
      bullets: [
        "Architected a multi-tenant SaaS platform (.NET, Blazor, PostgreSQL, Clean Architecture) with subdomain isolation, RBAC and data-layer tenant filtering across six roles.",
        "Built document classification (OCR, field extraction) and three-mode signature workflows (OTP, click, certificate), removing most of the paper handling from the process.",
        "Designed and operate the production infrastructure: Docker images published to GHCR, CI/CD, reverse proxy, real-time notifications and structured logging.",
      ],
    },
    {
      title: "Full-stack .NET Developer",
      company: "Digital consultancy",
      period: "2021 – 2023",
      project: "Workforce management platform",
      bullets: [
        "Implemented a GDPR-compliant signature workflow with signed links, audit trail and PDF stamping.",
        "Designed a REST API for mobile time tracking with encrypted keys and timezone-aware validation.",
        "Maintained a single codebase serving several business brands with isolated databases.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Product company",
      period: "2019 – 2021",
      bullets: [
        "Built responsive web interfaces with JavaScript and Angular in an agile team.",
        "Supported cloud deployments and worked directly with product and support teams.",
      ],
    },
  ],
  projects: [
    {
      title: "Container delivery pipeline — Docker, GHCR and automated rollback",
      company: "Personal",
      period: "2024 – Present",
      bullets: [
        "Multi-architecture images built in CI and published to a container registry, then released with Docker Compose behind a reverse proxy.",
        "Health checks used as the release gate, with automatic revert when a service fails after deployment.",
        "Pre-flight database backup and controlled migrations, so a rollback never needs a manual fix.",
      ],
    },
  ],
  education: [
    {
      title: "Full Stack Developer Program",
      detail: "Technology school, Madrid",
      period: "2020 – 2021",
    },
    {
      title: "Higher Technical Certificate (IT Systems)",
      detail: "Network administration, vocational college",
      period: "2017 – 2019",
    },
  ],
  skills: [
    {
      label: ".NET Solutions",
      items:
        "C#, .NET 8/10, ASP.NET Core, REST APIs, EF Core, Blazor, Clean Architecture, multi-tenant, RBAC, SignalR",
    },
    {
      label: "Cloud & Containers",
      items:
        "Docker, GHCR (container registry), Kubernetes (working knowledge), GCP, Azure, OCI, Terraform, GitHub Actions CI/CD, Linux/systemd",
    },
    {
      label: "Data",
      items: "PostgreSQL, MySQL, SQL Server, vector databases",
    },
    {
      label: "Applied AI",
      items:
        "LLM integrations, multi-model routing, RAG, semantic memory, browser automation, OCR document classification",
    },
    {
      label: "Security & Docs",
      items:
        "ASP.NET Identity, RBAC, JWT, digital signatures (OTP, hashed links, certificate), audit trails, GDPR",
    },
  ],
  languages: "Spanish — Native    English — Professional working proficiency",
}

export const cvDe: CvContent = {
  subtitle: "Full-stack .NET-Entwickler — Cloud, Container, Angewandte KI",
  profile:
    "Full-stack .NET-Entwickler, der Produktionssysteme end-to-end baut und betreibt: .NET- und Blazor-Lösungen, Multi-Tenant-Architekturen, Container-Images in einer Registry und Cloud-Infrastruktur mit IaC und CI/CD. Angewandte KI (LLM-Integrationen, RAG) als Zusatzfähigkeit, nicht als Aushängeschild.",
  labels: {
    profile: "Profil",
    experience: "Berufserfahrung",
    projects: "Projekte",
    education: "Ausbildung",
    skills: "Fähigkeiten",
    languages: "Sprachen",
    present: "Heute",
    location: "Spanien → Zürich (EU-Pass, kein Visum erforderlich)",
  },
  experience: [
    {
      title: "Tech Lead & Full-stack .NET Developer",
      company: "Softwareunternehmen",
      period: "2023 – Heute",
      project: "Multi-Tenant-SaaS-Plattform (Produktion)",
      bullets: [
        "Leitete Architektur und Entwicklung einer Multi-Tenant-SaaS-Plattform (.NET, Blazor, PostgreSQL, Clean Architecture) mit Subdomain-Isolierung, RBAC und Mandantenfilterung in der Datenschicht für sechs Rollen.",
        "Entwickelte Dokumentenklassifizierung (OCR, Feldextraktion) und Signatur-Workflows mit drei Modi (OTP, Klick, Zertifikat) und reduzierte die manuelle Papierarbeit deutlich.",
        "Betreibt die Produktionsinfrastruktur: Container-Images in einer Registry, CI/CD, Reverse Proxy, Echtzeit-Benachrichtigungen und strukturiertes Logging.",
      ],
    },
    {
      title: "Full-stack .NET Developer",
      company: "Digitalagentur",
      period: "2021 – 2023",
      project: "Personalmanagement-Plattform",
      bullets: [
        "Implementierte einen DSGVO-konformen Signatur-Workflow mit signierten Links, Audit-Trail und PDF-Stempelung.",
        "Entwarf eine REST-API für mobiles Zeiterfassungs-Tracking mit verschlüsselten Schlüsseln und zeitzonenbezogener Validierung.",
        "Betreute eine einzige Codebasis für mehrere Geschäftsmarken mit isolierten Datenbanken.",
      ],
    },
    {
      title: "Software-Ingenieur",
      company: "Produktunternehmen",
      period: "2019 – 2021",
      bullets: [
        "Entwicklung responsiver Web-Oberflächen mit JavaScript und Angular in einem agilen Team.",
        "Unterstützung von Cloud-Deployments und direkte Zusammenarbeit mit Produkt- und Supportteams.",
      ],
    },
  ],
  projects: [
    {
      title: "Container-Delivery-Pipeline — Docker, Registry und automatischer Rollback",
      company: "Privat",
      period: "2024 – Heute",
      bullets: [
        "Multi-Architektur-Images im CI gebaut und in eine Container-Registry veröffentlicht, danach Release über Docker Compose hinter einem Reverse Proxy.",
        "Health Checks als Release-Gate, mit automatischem Rollback, wenn ein Dienst nach dem Deployment nicht antwortet.",
        "Backup vor dem Release und kontrollierte Migrationen, damit ein Rollback keinen manuellen Eingriff braucht.",
      ],
    },
  ],
  education: [
    {
      title: "Full Stack Developer Program",
      detail: "Technologieschule, Madrid",
      period: "2020 – 2021",
    },
    {
      title: "Höherer technischer Abschluss (IT-Systeme)",
      detail: "Netzwerkadministration, Berufskolleg",
      period: "2017 – 2019",
    },
  ],
  skills: [
    {
      label: ".NET-Lösungen",
      items:
        "C#, .NET 8/10, ASP.NET Core, Blazor, REST-APIs, EF Core, Clean Architecture, Multi-Tenant, RBAC, SignalR",
    },
    {
      label: "Cloud & Container",
      items:
        "Docker, GHCR (Container Registry), Kubernetes (Grundkenntnisse), GCP, Azure, OCI, Terraform (IaC), GitHub Actions CI/CD, Linux/systemd",
    },
    {
      label: "Daten",
      items: "PostgreSQL, MySQL, SQL Server, Vektor-Datenbanken",
    },
    {
      label: "Dokumentenautomatisierung & KI",
      items:
        "OCR, PDF-Generierung, LLM-Integrationen, RAG, digitale Signaturen",
    },
    {
      label: "Sicherheit",
      items: "ASP.NET Identity, RBAC, JWT, Audit-Trails, DSGVO",
    },
  ],
  languages: "Spanisch — Muttersprache    Englisch — Verhandlungssicher",
}
