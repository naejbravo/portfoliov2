import Image from "next/image"
import Link from "next/link"
import TagTech from "./ui/tagsTech"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center mx-auto max-w-6xl px-4 py-16" id="inicio">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="flex-1 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            Software Engineer
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Hi, I&apos;m <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Jean
            Bravo</span>.
          </h1>
          <p className="mt-5 max-w-prose text-lg text-neutral-600 dark:text-neutral-300">
            I specialize in B2B digital products. I work end-to-end: discovery, architecture design,
            implementation, and continuous deployment with Next.js, ASP.NET Core, and PostgreSQL.
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

          <TagTech />
        </div>

        <div className="relative w-full md:w-80 lg:w-96 aspect-[3/4] flex-shrink-0 overflow-hidden rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)]">
          <Image
            src="/perfil.jpeg"
            alt="Jean Bravo - Software Engineer"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
