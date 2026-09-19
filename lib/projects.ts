import details from "@/content/projects/details.json"

type RawProject = (typeof details.projects)[number]

function slugify(name: string) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase()
}

function flattenTechStack(techStack: RawProject["techStack"]) {
  const values = Object.values(techStack ?? {}).flat()
  const unique = new Set(values)
  return Array.from(unique)
}

function formatImpact(impact: RawProject["impact"]) {
  if (!impact) return []
  const labelMap: Record<string, string> = {
    ops: "Operations",
    quality: "Quality",
    scalability: "Scalability",
  }
  return Object.entries(impact).map(([key, value]) => `${labelMap[key] ?? key}: ${value}`)
}

const coverMap: Record<string, { src: string; alt: string }> = {
  "multi-tenant-saas-platform": {
    src: "/placeholder-cover.svg",
    alt: "Multi-tenant SaaS platform — cover placeholder",
  },
  "container-delivery-pipeline": {
    src: "/placeholder-cover.svg",
    alt: "Container delivery pipeline — cover placeholder",
  },
  "real-time-metrics-dashboard": {
    src: "/placeholder-cover.svg",
    alt: "Real-time metrics dashboard — cover placeholder",
  },
}

const defaultCover = {
  src: "/file.svg",
  alt: "Full-stack digital project",
}

export type Project = RawProject & {
  slug: string
  title: string
  techKeywords: string[]
  impactHighlights: string[]
  cover: { src: string; alt: string }
}

export const projects: Project[] = details.projects.map((project) => {
  const rawName = project.displayName ?? project.slug
  const slug = project.slug ?? slugify(rawName)

  return {
    ...project,
    slug,
    title: rawName,
    techKeywords: flattenTechStack(project.techStack).slice(0, 8),
    impactHighlights: formatImpact(project.impact),
    cover: coverMap[slug] ?? defaultCover,
  }
})

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
