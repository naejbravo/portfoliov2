import TagTech from "./ui/tagsTech";

export default function Hero() {
    return (
        <section className="mx-auto max-w-6xl px-4 pt-16 pb-14 md:pt-24 md:pb-20">
            <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
                <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">Portafolio</p>
                    <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                    I build <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">fast and maintaninable</span> apps.
                    </h1>
                    <p className="mt-5 text-lg text-neutral-600 dark:text-neutral-300 max-w-prose">
                    Full-stack developer focused on DX, performance, and accessibility. I work with Next.js, ASP.NET Core, and PostgreSQL. I like well-designed systems and clear workflows.
                    </p>
                    <div className="mt-7 flex flex-wrap items-center gap-3">
                    <a href="/work" className="inline-flex items-center rounded-2xl px-5 py-2.5 text-sm font-medium bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90">
                        View projects
                    </a>
                    <a href="/contact" className="inline-flex items-center rounded-2xl px-5 py-2.5 text-sm font-medium border border-neutral-300/70 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-900">
                        Contact
                    </a>
                    </div>
                    {/* Aquí se pueden agregar las etiquetas de tecnologías */}
                    <TagTech />


                </div>

            {/* Imagen/Mockup - reemplaza por una captura de tu proyecto */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800" />
                    <div className="absolute inset-0 grid place-items-center">
                    <div className="text-center">
                        <div className="text-sm text-neutral-500 dark:text-neutral-400">Attach here you image</div>
                        <div className="mt-1 text-xs text-neutral-400 dark:text-neutral-500">/public/images/cover-home.jpg</div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}