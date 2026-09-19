import { base } from "./base"
import type { Profile } from "./types"

/**
 * Perfil por defecto: plantilla con el énfasis general del perfil (soluciones .NET,
 * Docker y GHCR, cloud engineering, fullstack; IA aplicada como capacidad secundaria).
 * Es el que se sirve en `/` salvo que PORTFOLIO_PROFILE diga otra cosa.
 */
export const defaultProfile: Profile = {
  ...base,
  slug: "default",
  label: "General — .NET · Cloud · Containers",

  statement: {
    lead: "I design, build and run",
    light: "full-stack .NET solutions, Docker containers and cloud infrastructure",
    marked: "from the data model to the container registry",
  },

  intro:
    "Full-stack .NET engineer building and operating production systems end-to-end: solution and data-model design, ASP.NET Core and Blazor, container images published to GHCR, and cloud infrastructure on GCP, Azure and OCI with Terraform and CI/CD. Applied AI — LLM integrations and RAG — as a capability on top, not as the headline.",

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
  ],

  projects: [
    {
      id: "01",
      title: "Multi-tenant .NET platform",
      summary: "Approval and signature workflows with a full audit trail for 300 internal users.",
      year: "2025",
      detail:
        "ASP.NET Core and Blazor solution with tenant isolation, role-based permissions and PDF generation. Cut report turnaround from 40 to 15 minutes per case.",
      tech: [".NET 10", "Blazor", "PostgreSQL"],
    },
    {
      id: "02",
      title: "Container delivery pipeline",
      summary: "Images built in CI, published to GHCR and deployed with health-checked rollback.",
      year: "2026",
      detail:
        "Multi-architecture images built and pushed to the GitHub Container Registry, released with Docker Compose behind a reverse proxy and reverted automatically when a health check fails.",
      tech: ["Docker", "GHCR", "GitHub Actions"],
    },
    {
      id: "03",
      title: "Cloud infrastructure as code",
      summary: "Terraform-managed environments on GCP, Azure and OCI, wired to CI/CD.",
      year: "2026",
      detail:
        "Reproducible environments defined as code, with secrets management, structured logging and monitoring from the start. Traffic only switches after the health check passes.",
      tech: ["Terraform", "GCP", "Azure"],
    },
    {
      id: "04",
      title: "Full-stack product surface",
      summary: "TypeScript and React front end over a .NET API, with accessibility and design tokens.",
      year: "2025",
      detail:
        "Component design system, accessible states and type-safe API contracts. End-to-end tests cover the complete signature flow.",
      tech: ["TypeScript", "React", ".NET"],
    },
  ],

  experience: [
    {
      period: "2023 — Present",
      role: "Senior Software Engineer",
      org: "Software company · Hybrid",
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
  ],
}
