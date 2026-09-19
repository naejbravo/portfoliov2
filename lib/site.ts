/**
 * Origen del sitio: una sola fuente para metadatos, sitemap, robots y el CV.
 * En producción se define con NEXT_PUBLIC_SITE_URL; si no, se usa el dominio de plantilla.
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ejemplo.com"

/** El mismo origen sin protocolo, para mostrarlo en textos. */
export const siteLabel = siteUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")
