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

function formatTitle(name: string) {
  return name.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/\s+/g, " ").trim()
}

function flattenTechStack(techStack: RawProject["techStack"]) {
  const values = Object.values(techStack ?? {}).flat()
  const unique = new Set(values)
  return Array.from(unique)
}

function impactHighlights(impact: RawProject["impact"]) {
  if (!impact) return []
  const labelMap: Record<string, string> = {
    ops: "Operations",
    quality: "Quality",
    scalability: "Scalability",
  }
  return Object.entries(impact).map(([key, value]) => {
    const label = labelMap[key] ?? key
    return `${label}: ${value}`
  })
}

const coverMap: Record<
  string,
  {
    src: string
    alt: string
  }
> = {
  "webcaepro-cae-integral-management-platform": {
    src: "/window.svg",
    alt: "WebCAEpro - CAE Management Platform",
  },
  "webrrhhpro-hr-saas-multi-tenant-platform": {
    src: "/globe.svg",
    alt: "WebRRHHpro - HR SaaS Multi-tenant Platform",
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
  cover: {
    src: string
    alt: string
  }
}

export const projects: Project[] = details.projects.map((project) => {
  const rawName = project.displayName ?? formatTitle(project.projectName)
  const slugFromDisplay = slugify(rawName)
  const slugFromProjectName = slugify(project.projectName)
  const slug = slugFromDisplay || slugFromProjectName

  return {
    ...project,
    slug,
    title: rawName,
    techKeywords: flattenTechStack(project.techStack).slice(0, 6),
    impactHighlights: impactHighlights(project.impact),
    cover: coverMap[slug] ?? coverMap[slugFromProjectName] ?? defaultCover,
  }
})

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
