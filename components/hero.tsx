import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, FileText } from "lucide-react"
import TagTech from "./ui/tagsTech"
import { ScrollReveal } from "./ui/scroll-reveal"

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-12 pb-20 md:pt-20 md:pb-32" id="inicio">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <ScrollReveal className="flex-1 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            Software Engineer <span className="mx-1.5 opacity-50">·</span> B2B SaaS & Document Workflows
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Hi, I&apos;m <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Jean
            Bravo</span>.
          </h1>
          <p className="mt-5 max-w-prose text-lg text-neutral-600 dark:text-neutral-300">
            Full-stack .NET developer building B2B SaaS platforms for document workflows, digital signatures and operations automation. I work across ASP.NET Core, Blazor, PostgreSQL and cloud infrastructure, with a focus on multi-tenant systems, auditability and production delivery.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/work"
              className="inline-flex items-center rounded-2xl bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-neutral-900"
            >
              View projects
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-2xl border border-neutral-300/70 px-5 py-2.5 text-sm font-medium transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
            >
              Schedule a call
            </Link>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
            <a
              href="https://github.com/naejbravo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
            >
              <Github className="size-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jean-bravo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>
            <a
              href="/cv_eng_jean_2026.pdf"
              className="inline-flex items-center gap-1.5 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
            >
              <FileText className="size-4" />
              CV
            </a>
          </div>

          <TagTech />
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="relative w-full max-w-sm md:w-80 lg:w-96 aspect-[3/4] flex-shrink-0" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 88%)', maskImage: 'linear-gradient(to bottom, black 75%, transparent 88%)' }}>
          <Image
            src="/perfil.png"
            alt="Jean Bravo - Software Engineer"
            fill
            className="object-contain object-center drop-shadow-2xl"
            quality={100}
            priority
            unoptimized
          />
        </ScrollReveal>
      </div>
    </section>
  )
}
