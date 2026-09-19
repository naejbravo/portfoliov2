import type { Metadata } from "next"
import { notFound } from "next/navigation"

import PortfolioPage from "@/components/portfolio-page"
import { getProfile, getProfileSlugs, isProfileSlug, profiles } from "@/content/profiles"

type PageParams = {
  params: Promise<{ slug: string }>
}

/**
 * Variante de la portada por candidatura: `/for/<slug>`.
 * Se prerenderiza una página por perfil registrado en content/profiles.
 */
export function generateStaticParams() {
  return getProfileSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params
  if (!isProfileSlug(slug)) return { title: "Profile not found" }

  const profile = profiles[slug]

  return {
    title: { absolute: `${profile.brand.name} · ${profile.positioning}` },
    description: profile.intro,
    // Página pensada para una candidatura concreta: no debe indexarse.
    robots: { index: false, follow: false },
  }
}

export default async function ProfilePage({ params }: PageParams) {
  const { slug } = await params
  if (!isProfileSlug(slug)) notFound()

  return <PortfolioPage profile={getProfile(slug)} />
}
