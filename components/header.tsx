import Link from "next/link"

export default function Header() {
    return (
        <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 dark:bg-neutral-950/80 border-b border-neutral-200/60 dark:border-neutral-800/60">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
                <Link href="/" className="font-semibold tracking-tight text-lg">Jean Bravo</Link>
                <div className="flex items-center gap-6">
                    <nav className="hidden md:flex items-center gap-6 text-sm">
                        <a className="hover:opacity-80" href="#projects">Projects</a>
                        <a className="hover:opacity-80" href="#contact">Contact</a>
                    </nav>
                    <a href="/contact" className="inline-flex items-center rounded-xl border border-neutral-300/70 dark:border-neutral-700 px-3 py-1.5 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-900">Do you have something on mind?</a>
                </div>
            </div>
        </header>
    )};

