import CtaFinal from "@/components/ctaFinal"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import ProjectIndex from "@/components/project-index"
import Stack from "@/components/stack"
import Timeline from "@/components/timeline"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stack />
      <ProjectIndex />
      <Timeline />
      <CtaFinal />
      <Footer />
    </main>
  )
}
