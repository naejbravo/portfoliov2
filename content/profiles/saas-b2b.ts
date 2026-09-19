import { base } from "./base"
import type { Profile } from "./types"

/**
 * Variante para ofertas de producto B2B SaaS: mismo perfil, otro orden de énfasis
 * (arquitectura multi-tenant y dominio documental por delante; la parte de contenedores
 * y cloud pasa a segundo plano pero sigue presente). Contenido de plantilla.
 */
export const saasB2bProfile: Profile = {
  ...base,
  slug: "saas-b2b",
  label: "B2B SaaS — multi-tenant & document workflows",
  positioning: "Full-stack .NET Engineer — B2B SaaS, Multi-tenant & Document Workflows",

  statement: {
    lead: "I build",
    light: "multi-tenant B2B SaaS platforms on .NET",
    marked: "from architecture to the tenants running in production",
  },

  intro:
    "Full-stack .NET engineer specialised in B2B SaaS: multi-tenant architecture with data isolation, RBAC, document workflows and digital signatures, delivered as container images and operated on cloud infrastructure. Applied AI where it removes real work — OCR classification, extraction and retrieval.",

  stats: [
    { value: "3", label: "SaaS platforms in production" },
    { value: "6", label: "roles modelled across tenants" },
    { value: "95%", label: "paper removed from HR workflows" },
  ],

  stack: [
    {
      title: "SaaS Architecture",
      items: [
        { name: "Multi-tenant & data isolation", level: "advanced" },
        { name: "RBAC and permission models", level: "advanced" },
        { name: "Clean Architecture", level: "advanced" },
        { name: "Document workflows & audit trails", level: "advanced" },
        { name: "Digital signatures (OTP, SHA-256, PKI)", level: "advanced" },
      ],
    },
    {
      title: ".NET Solutions",
      items: [
        { name: "C# / .NET 8–10", level: "advanced" },
        { name: "ASP.NET Core & EF Core", level: "advanced" },
        { name: "Blazor Web App", level: "solid" },
        { name: "SignalR real-time", level: "solid" },
        { name: "Background job processing", level: "solid" },
      ],
    },
    {
      title: "Delivery & Operations",
      items: [
        { name: "Docker & GHCR images", level: "advanced" },
        { name: "GitHub Actions CI/CD", level: "solid" },
        { name: "GCP · Azure · OCI", level: "solid" },
        { name: "PostgreSQL / SQL Server", level: "solid" },
        { name: "OCR & applied AI", level: "solid" },
      ],
    },
  ],

  projects: [
    {
      id: "01",
      title: "Multi-tenant HR SaaS",
      summary: "Subdomain isolation, RBAC across 6 roles and OCR document classification.",
      year: "2026",
      detail:
        "Blazor and ASP.NET Core platform with tenant-scoped queries, three signature modes and an AI pipeline that classifies and extracts incoming HR documents. Removed 95% of paper and cut signature turnaround by 80%.",
      tech: [".NET 10", "PostgreSQL", "OCR"],
    },
    {
      id: "02",
      title: "Signature workflow with audit trail",
      summary: "GDPR-compliant validation with SHA-256 magic links and PDF stamping.",
      year: "2025",
      detail:
        "Every signature event is traceable end to end, with asynchronous PDF stamping and per-tenant retention rules. Full digital compliance on monthly timesheet validation.",
      tech: ["ASP.NET Core", "PKI", "PostgreSQL"],
    },
    {
      id: "03",
      title: "Three brands, one codebase",
      summary: "Multi-brand product with isolated databases and per-brand channels.",
      year: "2025",
      detail:
        "Runtime resolution of brand configuration, isolated databases, independent SMTP and WhatsApp channels and custom themes, all from a single deployed application.",
      tech: ["ASP.NET Core", "EF Core", "Docker"],
    },
    {
      id: "04",
      title: "Containerised delivery",
      summary: "Images published to GHCR and released with health-checked rollback.",
      year: "2026",
      detail:
        "Multi-architecture images built in CI, published to the GitHub Container Registry and deployed with Docker Compose behind a reverse proxy, with automatic revert when a health check fails.",
      tech: ["Docker", "GHCR", "GitHub Actions"],
    },
  ],

  experience: [
    {
      period: "2026 — Present",
      role: "Tech Lead & Full-stack .NET Developer",
      org: "Software company · Málaga (hybrid)",
      description:
        "Architecture and delivery of a multi-tenant SaaS platform: tenant isolation, permission model and document automation with OCR and digital signatures.",
    },
    {
      period: "2025 — Present",
      role: "Full-stack .NET Developer",
      org: "Software company · Málaga (hybrid)",
      description:
        "Workforce management platform with a GDPR-compliant signature workflow, REST API for mobile tracking and multi-brand support from one codebase.",
    },
    {
      period: "2022 — 2023",
      role: "Software Engineer",
      org: "Startup · Remote",
      description:
        "Responsive web platforms with Angular and JavaScript, plus GCP deployments in a fast-moving product team.",
    },
    {
      period: "Education",
      role: "Computer Science / Application Development",
      org: "Higher education · Spain",
      description:
        "Programming, databases and networks, followed by continuous self-directed study and real projects.",
    },
  ],
}
