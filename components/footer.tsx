export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-sm text-neutral-600 dark:text-neutral-400">
        <p>© {new Date().getFullYear()} Jean Bravo</p>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <li>
            <a className="hover:text-swiss" href="mailto:naejbravo@gmail.com">
              naejbravo@gmail.com
            </a>
          </li>
          <li>
            <a className="hover:text-swiss" href="https://github.com/naejbravo" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a className="hover:text-swiss" href="https://www.linkedin.com/in/jean-bravo/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
