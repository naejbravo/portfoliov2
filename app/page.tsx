import CtaFinal from "@/components/ctaFinal"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import ProjectsSection from "@/components/projects"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const skillGroups = [
  { title: "Backend", items: "C#, .NET 8–10, ASP.NET Core, REST APIs, Entity Framework Core, Blazor, Clean Architecture, unit testing (xUnit)" },
  { title: "Databases", items: "MySQL, PostgreSQL" },
  { title: "DevOps & Cloud", items: "Git, GitHub Actions CI/CD, Docker, Linux, Oracle Cloud (OCI), Azure, GCP" },
  { title: "AI & Documents", items: "LLM integrations, OCR document classification, PDF generation (QuestPDF), digital signatures, GDPR" },
  { title: "Ways of working", items: "Scrum, code reviews" },
]

function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24" id="skills">
      <ScrollReveal>
        <h2 className="text-2xl font-semibold md:text-3xl text-center">Technical Profile</h2>
        <p className="mt-3 text-center text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          Backend .NET applications from API to deployment, with a systems administration background and AI integrated where it adds value.
        </p>
      </ScrollReveal>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <ScrollReveal key={group.title} delay={0.1 * (i + 1)} className="rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/50">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">{group.title}</h3>
            <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed">{group.items}</p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <main className="bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <CtaFinal />
      <Footer />
    </main>
  )
}
