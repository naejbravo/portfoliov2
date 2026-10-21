import { Card } from "@/components/ui/card"
import { ContactForm } from "./contactForm"

export default function CardContact() {
  const descriptionId = "contact-section-description"

  return (
    <Card className="mx-auto w-full max-w-6xl rounded-3xl border border-neutral-200/80 bg-neutral-50/70 p-6 shadow-sm dark:border-neutral-800/70 dark:bg-neutral-900 md:p-12">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)]">
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold md:text-3xl">Open to Backend .NET roles</h2>
          <p id={descriptionId} className="text-base text-neutral-600 dark:text-neutral-300">
            I&apos;m looking for a full-time Backend .NET role where I can build APIs, run them in production and
            bring AI into real products. If you&apos;re hiring, I&apos;d be glad to talk.
          </p>
          <dl className="grid gap-3 text-sm text-neutral-600 dark:text-neutral-300 md:grid-cols-2">
            <div>
              <dt className="font-semibold text-neutral-800 dark:text-neutral-100">Availability</dt>
              <dd>Zürich, Málaga or remote. Available immediately.</dd>
            </div>
            <div>
              <dt className="font-semibold text-neutral-800 dark:text-neutral-100">Work permit</dt>
              <dd>EU passport — no visa required in Switzerland or the EU.</dd>
            </div>
            <div>
              <dt className="font-semibold text-neutral-800 dark:text-neutral-100">Specialty</dt>
              <dd>Backend .NET and REST APIs, MySQL and PostgreSQL, Docker and CI/CD, and AI integrated into production apps.</dd>
            </div>
            <div>
              <dt className="font-semibold text-neutral-800 dark:text-neutral-100">Languages</dt>
              <dd>Spanish (native), English (B2), German (A1, learning).</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm dark:border-neutral-800/70 dark:bg-neutral-950">
          <ContactForm descriptionId={descriptionId} />
          <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
            You can also write directly to{" "}
            <a className="underline decoration-dotted underline-offset-4" href="mailto:naejbravo@gmail.com">
              naejbravo@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </Card>
  )
}
