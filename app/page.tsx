import CtaFinal from "@/components/ctaFinal"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import ProjectsSection from "@/components/projects"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <ScrollReveal>
        <h2 className="text-2xl font-semibold md:text-3xl text-center">Technical Profile</h2>
        <p className="mt-3 text-center text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          I build and operate B2B SaaS platforms end-to-end — from architecture and backend to deployment and monitoring.
        </p>
      </ScrollReveal>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <ScrollReveal delay={0.1} className="rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/50">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Backend & Architecture</h3>
          <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed">
            .NET 8/10, ASP.NET Core, Blazor (SSR + InteractiveServer), MVC, Razor, Entity Framework Core. Clean Architecture, multi-tenant systems, RBAC, REST APIs, background job processing.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2} className="rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/50">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Data & Infrastructure</h3>
          <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed">
            PostgreSQL, MySQL, SQL Server. Docker, Caddy, GCP, Azure, Terraform (IaC), GitHub Actions CI/CD, IIS/Windows Server. Structured logging with Serilog.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3} className="rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/50">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Specialization</h3>
          <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed">
            Document automation (OCR with PdfPig), digital signature workflows (OTP, certificate-based, PKI), audit trails, GDPR-compliant systems, AI-powered document classification, real-time notifications (SignalR).
          </p>
        </ScrollReveal>
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
