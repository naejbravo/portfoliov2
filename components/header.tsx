import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/60 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:border-neutral-800/60 dark:bg-neutral-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Jean Bravo
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link className="hover:opacity-80" href="/#projects">
              Proyectos
            </Link>
            <Link className="hover:opacity-80" href="/#contact">
              Contacto
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
