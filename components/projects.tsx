// --- Datos de ejemplo (reemplaza por tus proyectos reales o por MDX) ---
const featured = [
  {
    slug: 'Delivery dashboard',
    title: 'Delivery dashboard',
    year: '2025',
    description: 'Automatic assign orders and generate reports. ASP.NET Core + React + PostgreSQL.',
    tags: ['ASP.NET Core','React','Ant Design','PostgreSQL'],
    href: '/work/delivery-dashboard',
    imageAlt: 'Delivery dashboard',
  },
  {
    slug: 'Notifications and sign documents',
    title: 'Notifications and sign documents',
    year: '2025',
    description: 'Document management, multiple signatures and auditing.',
    tags: ['.NET 8','QuestPDF','SignalR'],
    href: '/work/firma-notificaciones',
    imageAlt: 'Document signing and notifications',
  },
]

// --- Componentes internos ---
function ProjectCard({ title, year, description, tags, href, imageAlt }: {
  title: string
  year: string
  description: string
  tags: string[]
  href: string
  imageAlt: string
}) {
  return (
    <a href={href} className="group block rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
      <div className="relative aspect-[16/9] bg-neutral-100 dark:bg-neutral-900">
        {/* Aquí puedes usar next/image */}
        <div className="absolute inset-0 grid place-items-center text-neutral-400 text-sm">{imageAlt}</div>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold group-hover:opacity-90">{title}</h3>
          <span className="text-xs text-neutral-500 dark:text-neutral-400">{year}</span>
        </div>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{description}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <li key={t} className="text-[11px] rounded-full border border-neutral-300/70 dark:border-neutral-700 px-2.5 py-1 text-neutral-600 dark:text-neutral-300">{t}</li>
          ))}
        </ul>
      </div>
    </a>
  )
}

export default function ProjectsSection(){
    return (
        <section className="mx-auto max-w-6xl px-4 pb-16 md:pb-24" id="projects">
            <div className="flex items-end justify-between gap-4">
                <h2 className="text-2xl md:text-3xl font-semibold">Featured projects</h2>
                <a href="/work" className="text-sm underline underline-offset-4 hover:opacity-80">See all</a>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
                {featured.map((p) => (
                <ProjectCard key={p.slug} {...p} />
                ))}
            </div>
        </section>

    )
}