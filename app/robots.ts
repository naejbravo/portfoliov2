import { MetadataRoute } from "next"

import { siteUrl } from "@/lib/site"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Variantes por candidatura: no deben aparecer en buscadores.
        disallow: "/for/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
