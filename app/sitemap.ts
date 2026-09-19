import { MetadataRoute } from "next"

import { projects } from "@/lib/projects"
import { siteUrl } from "@/lib/site"

/**
 * Las variantes de /for/<slug> son material para candidaturas concretas: llevan
 * `noindex` en su metadata y aquí se excluyen del sitemap a propósito.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projects.map((project) => ({
    url: `${siteUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/work`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...projectUrls,
  ]
}
