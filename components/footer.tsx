
export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-500 dark:text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} legend. Todos los derechos reservados.</p>
        <ul className="flex items-center gap-4">
          <li><a className="hover:opacity-80" href="/privacy">Privacidad</a></li>
          <li><a className="hover:opacity-80" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a className="hover:opacity-80" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  )
}