import CtaFinal from "@/components/ctaFinal"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import ProjectIndex from "@/components/project-index"
import Stack from "@/components/stack"
import Timeline from "@/components/timeline"
import type { Profile } from "@/content/profiles/types"

/**
 * Portada completa para un perfil dado. La usan `/` (perfil activo) y `/for/<slug>`
 * (variante concreta), así que no hay dos copias del mismo layout.
 */
export default function PortfolioPage({ profile }: { profile: Profile }) {
  return (
    <main>
      <Hero profile={profile} />
      <Stack profile={profile} />
      <ProjectIndex projects={profile.projects} />
      <Timeline profile={profile} />
      <CtaFinal profile={profile} />
      <Footer />
    </main>
  )
}
