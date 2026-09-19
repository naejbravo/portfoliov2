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
    present: "Present",
    location: "Spain",
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
  projects: [
    {
      title: "Hermes Agent Infrastructure — self-hosted AI agent stack",
      company: "Personal",
      period: "2026 – Present",
      bullets: [
        "Deployed and operate a 24/7 self-hosted AI agent (Hermes Agent, open source by Nous Research) on Oracle Cloud ARM64 — Docker, systemd, Cloudflare Tunnel, ~$5/month total cost.",
        "Persistent semantic memory with self-hosted Mem0 + Qdrant vector DB (hybrid semantic + keyword search); multi-model LLM routing via OpenRouter with automatic fallbacks across ~20 providers.",
        "Cloud browser automation (Browser Use API), multi-platform messaging gateway (Telegram, Slack) and cron-based scheduled automation.",
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
  languages: "Spanish — Native    English — Proficient (C1)",
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
  projects: [
    {
      title: "Hermes Agent Infrastructure — selbst gehosteter KI-Agent-Stack",
      company: "Privat",
      period: "2026 – Heute",
      bullets: [
        "Betreibt rund um die Uhr einen selbst gehosteten KI-Agenten (Hermes Agent, Open Source von Nous Research) auf Oracle Cloud ARM64 — Docker, systemd, Cloudflare Tunnel, ca. 5 USD/Monat Gesamtkosten.",
        "Persistenter semantischer Speicher mit selbst gehostetem Mem0 + Qdrant (hybride semantische und Stichwort-Suche); Multi-Modell-LLM-Routing über OpenRouter mit automatischen Fallbacks über ~20 Anbieter.",
        "Cloud-Browser-Automatisierung (Browser Use API), Messaging-Gateway für mehrere Plattformen (Telegram, Slack) und cron-basierte Automatisierung.",
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
  languages: "Spanisch — Muttersprache    Englisch — Verhandlungssicher (C1)",
}
