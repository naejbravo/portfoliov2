// app/page.tsx
// Home de portafolio minimalista: Hero + Proyectos destacados + CTA
// - Tailwind CSS
// - Sin dependencias externas
// - Accesible y listo para SEO
import CtaFinal from "@/components/ctaFinal"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import ProjectsSection from "@/components/projects"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Hero />
      <ProjectsSection/>
      <CtaFinal/>
      <Footer />
    </main>
  )
}
