export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-neutral-500 dark:text-neutral-400 sm:flex-row">
        <p>© {new Date().getFullYear()} Jean Bravo. Built with focus on experience and performance.</p>
        <ul className="flex items-center gap-4">
          <li>
            <a className="hover:opacity-80" href="mailto:naejbravo@gmail.com">
              naejbravo@gmail.com
            </a>
          </li>
          <li>
            <a
              className="hover:opacity-80"
              href="https://github.com/naejbravo"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="hover:opacity-80"
              href="https://www.linkedin.com/in/jean-bravo/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
