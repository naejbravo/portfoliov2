import { ScrollReveal } from "./ui/scroll-reveal"

type SectionRowProps = {
  id: string
  label: string
  children: React.ReactNode
  last?: boolean
}

export default function SectionRow({ id, label, children, last = false }: SectionRowProps) {
  return (
    <section id={id} className={last ? "" : "border-b border-neutral-200 dark:border-neutral-800"}>
      <ScrollReveal className="mx-auto flex max-w-6xl flex-wrap gap-x-12 gap-y-6 px-6 py-16 md:py-20">
        <h2 className="flex-[1_1_200px] text-sm font-bold uppercase text-swiss dark:text-red-400">{label}</h2>
        <div className="min-w-0 flex-[999_1_560px]">{children}</div>
      </ScrollReveal>
    </section>
  )
}
