import Link from "next/link"

import { portfolio } from "@/content/portfolio/placeholder"

/**
 * Footer en tinta: cierra la página con el email en grande y los enlaces en
 * monoespaciada. Un solo bloque oscuro, sin adornos.
 */
export default function Footer() {
  const { contact, brand } = portfolio

  const links = [
    { label: "GitHub", href: contact.github, external: true },
    { label: "LinkedIn", href: contact.linkedin, external: true },
    { label: "CV — English (PDF)", href: contact.cvEn, external: false },
    { label: "Lebenslauf — Deutsch (PDF)", href: contact.cvDe, external: false },
  ]

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-end md:gap-16">
          <div>
            <p className="mono-label text-background/60">Let&apos;s work together</p>
            <a
              href={`mailto:${contact.email}`}
              className="display mt-5 inline-block text-2xl font-medium underline decoration-brand decoration-2 underline-offset-8 transition-colors hover:text-brand hover:decoration-background sm:text-4xl md:text-5xl"
            >
              {contact.email}
            </a>
          </div>

          <ul className="mono-label space-y-3 text-[0.66rem] text-background/70">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-background"
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {link.label} ↗
                </a>
              </li>
            ))}
            <li className="text-background/50">Málaga, España · CET (UTC+01:00)</li>
          </ul>
        </div>

        <div className="mono-label mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6 text-[0.62rem] text-background/50">
          <span>
            © {new Date().getFullYear()} {brand.name} · {brand.role}
          </span>
          <Link href="/" className="transition-colors hover:text-background">
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  )
}
