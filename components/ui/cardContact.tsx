import { ContactForm } from "./contactForm"

export default function CardContact() {
  const descriptionId = "contact-section-description"

  return (
    <div className="flex flex-col gap-6">
      <p className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
        Open to Backend .NET roles in Zürich, Málaga or remote.
      </p>
      <p id={descriptionId} className="max-w-2xl text-neutral-700 dark:text-neutral-300">
        Available immediately. EU passport — no visa required in Switzerland or the EU.
      </p>
      <div className="max-w-2xl">
        <ContactForm descriptionId={descriptionId} />
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Or write directly to{" "}
        <a className="underline decoration-dotted underline-offset-4 hover:text-swiss" href="mailto:naejbravo@gmail.com">
          naejbravo@gmail.com
        </a>
        .
      </p>
    </div>
  )
}
