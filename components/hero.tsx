import Image from "next/image"
import Link from "next/link"

import { portfolio } from "@/content/portfolio/placeholder"

/**
 * Hero editorial: declaración tipográfica grande, retícula visible de tres columnas
 * y la foto reducida a un apunte dentro de la columna de metadatos.
 */
export default function Hero() {
  const { contact, meta, photo, statement } = portfolio

  const metaRows = [
    { label: "Location", value: meta.location },
    { label: "Modality", value: meta.modality },
    { label: "Languages", value: meta.languages },
  ]

  const directLinks = [
    { label: contact.email.replace(/^mailto:/, ""), href: `mailto:${contact.email}`, external: false },
    { label: "github.com/naejbravo ↗", href: contact.github, external: true },
    { label: "linkedin/in/jean-bravo ↗", href: contact.linkedin, external: true },
    { label: "CV — English (PDF) ↓", href: contact.cvEn, external: false },
    { label: "Lebenslauf — Deutsch (PDF) ↓", href: contact.cvDe, external: false },
  ]

  return (
    <section id="profile" className="border-b border-border">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
        <div className="mono-label flex flex-wrap items-center gap-x-4 gap-y-2 pt-10 text-brand md:pt-14">
          <span>01 — Profile</span>
          <span className="h-px min-w-8 flex-1 bg-border" aria-hidden="true" />
          <span className="flex items-center gap-2">
            <span className="inline-block size-1.5 rounded-full bg-brand" aria-hidden="true" />
            {portfolio.availability} · {portfolio.availabilityNote}
          </span>
        </div>

        <h1 className="display mt-10 max-w-[20ch] text-[2.2rem] font-medium sm:text-[3.2rem] md:mt-14 md:text-[4.4rem]">
          {statement.lead}{" "}
          <span className="font-light text-muted-foreground">{statement.light}</span>{" "}
          <span className="marker">{statement.marked}</span>.
        </h1>

        <div className="mt-14 grid gap-10 border-t border-foreground md:mt-20 md:grid-cols-[1.55fr_1fr_1fr] md:gap-10">
          <div className="pt-8">
            <p className="max-w-[46ch] text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
              {portfolio.intro}
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {portfolio.stats.map((stat) => (
                <div key={stat.label}>
                  <dd className="display text-2xl font-medium md:text-3xl">{stat.value}</dd>
                  <dt className="mono-label mt-2 text-[0.62rem] text-muted-foreground">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="pt-8 md:border-l md:border-border md:pl-8">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={260}
              height={320}
              priority
              unoptimized
              className="h-28 w-auto border border-border object-contain"
            />
            <dl className="mt-7 space-y-4">
              {metaRows.map((row) => (
                <div key={row.label}>
                  <dt className="mono-label text-[0.62rem] text-muted-foreground">{row.label}</dt>
                  <dd className="mt-1 text-sm">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="pt-8 md:border-l md:border-border md:pl-8">
            <div className="flex flex-wrap gap-3">
              <Link
                href="/work"
                className="inline-flex items-center border border-foreground bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:border-brand hover:bg-brand"
              >
                View projects →
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center border border-foreground px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
              >
                Get in touch
              </Link>
            </div>

            <ul className="mt-8 space-y-2.5">
              {directLinks.map((link) => (
                <li key={link.href} className="mono-label text-[0.66rem] text-muted-foreground">
                  <a
                    href={link.href}
                    className="transition-colors hover:text-brand"
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
