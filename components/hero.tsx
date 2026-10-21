import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "./ui/scroll-reveal"

export default function Hero() {
  return (
    <section className="border-b-2 border-neutral-900 dark:border-neutral-100" id="inicio">
      <div className="mx-auto flex max-w-6xl flex-wrap items-end gap-12 px-6 pt-16 pb-14 md:pt-24 md:pb-16">
        <ScrollReveal className="flex min-w-0 flex-[999_1_520px] flex-col gap-5">
          <p className="text-sm font-semibold text-swiss dark:text-red-400">
            Backend .NET &amp; AI Engineer · Zürich, Málaga or remote
          </p>
          <h1 className="text-6xl font-bold leading-[0.95] tracking-tighter sm:text-7xl md:text-8xl">Jean Bravo</h1>
          <p className="max-w-2xl text-lg text-neutral-700 dark:text-neutral-300">
            Backend .NET engineer building web applications with .NET 8–10: REST APIs, lightweight frontends and MySQL databases, delivered through GitHub Actions CI/CD. Background in systems administration (ASIR) — Linux servers, Oracle Cloud and Azure — and hands-on experience integrating AI into production apps.
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="inline-flex min-h-11 items-center rounded-sm bg-neutral-900 px-6 text-sm font-semibold text-white transition hover:bg-swiss dark:bg-white dark:text-neutral-900"
            >
              Contact me
            </Link>
            <Link
              href="/#cv"
              className="inline-flex min-h-11 items-center rounded-sm border border-neutral-900 px-6 text-sm font-semibold transition hover:bg-neutral-100 dark:border-neutral-100 dark:hover:bg-neutral-900"
            >
              Download CV
            </Link>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-neutral-600 dark:text-neutral-400">
            <span>EU passport — no visa required</span>
            <a className="hover:text-swiss" href="mailto:naejbravo@gmail.com">naejbravo@gmail.com</a>
            <a className="hover:text-swiss" href="https://linkedin.com/in/jean-bravo" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="hover:text-swiss" href="https://github.com/naejbravo" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="relative aspect-[3/4] w-full max-w-[300px] flex-[1_1_240px]">
          <Image
            src="/perfil.png"
            alt="Jean Bravo - Backend .NET & AI Engineer"
            fill
            className="rounded-sm object-cover object-top"
            quality={100}
            priority
            unoptimized
          />
        </ScrollReveal>
      </div>
    </section>
  )
}
