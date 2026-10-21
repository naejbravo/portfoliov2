export default function TagTech() {
  return (
    <ul className="mt-8 flex flex-wrap gap-2">
      {['C#', '.NET 8–10', 'ASP.NET Core', 'REST APIs', 'MySQL', 'PostgreSQL', 'Docker', 'GitHub Actions', 'Linux', 'Azure', 'Oracle Cloud', 'LLM Integrations'].map(tag => (
        <li key={tag} className="text-xs rounded-full border border-neutral-300/70 dark:border-neutral-700 px-3 py-1 text-neutral-600 dark:text-neutral-300">{tag}</li>
      ))}
    </ul>
  )
}
