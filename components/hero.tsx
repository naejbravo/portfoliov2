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
            Backend .NET &amp; AI Engineer <span className="mx-1.5 opacity-50">·</span> Zürich, Málaga or remote
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Hi, I&apos;m <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Jean
            Bravo</span>.
          </h1>
          <p className="mt-5 max-w-prose text-lg text-neutral-600 dark:text-neutral-300">
            Backend .NET engineer building web applications with .NET 8–10: REST APIs, lightweight frontends and MySQL databases, delivered through GitHub Actions CI/CD. Background in systems administration (ASIR) — Linux servers, Oracle Cloud and Azure — and hands-on experience integrating AI into production apps.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href="/#experience"
              className="inline-flex items-center rounded-2xl bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-neutral-900"
            >
              View experience
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-2xl border border-neutral-300/70 px-5 py-2.5 text-sm font-medium transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-900"
            >
              Contact me
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
              href="/Jean-Bravo-CV-EN.pdf"
              className="inline-flex items-center gap-1.5 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
            >
              <FileText className="size-4" />
              CV (EN)
            </a>
            <a
              href="/Jean-Bravo-CV-DE.pdf"
              className="inline-flex items-center gap-1.5 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
            >
              <FileText className="size-4" />
              CV (DE)
            </a>
            <a
              href="/Jean-Bravo-CV-ES.pdf"
              className="inline-flex items-center gap-1.5 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors"
            >
              <FileText className="size-4" />
              CV (ES)
            </a>
          </div>

          <TagTech />
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="relative w-full max-w-sm md:w-80 lg:w-96 aspect-[3/4] flex-shrink-0" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 88%)', maskImage: 'linear-gradient(to bottom, black 75%, transparent 88%)' }}>
          <Image
            src="/perfil.png"
            alt="Jean Bravo - Backend .NET & AI Engineer"
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
