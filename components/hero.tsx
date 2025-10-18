import Image from "next/image"
import Link from "next/link"
import TagTech from "./ui/tagsTech"

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 pb-14 md:pt-24 md:pb-20" id="inicio">
      <div className="grid items-center gap-10 md:grid-cols-[1.1fr,0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            Software Engineer
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Hi, I&apos;m <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Jean
            Bravo</span>. I design and build fast, maintainable web experiences.
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

        <div className="relative w-full overflow-hidden rounded-3xl border border-neutral-200 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)] dark:border-neutral-800">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-indigo-100 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900" />
          <div className="relative aspect-[4/3]">
            <Image
              src="/window.svg"
              alt="Dashboard with product metrics"
              fill
              className="object-contain p-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
