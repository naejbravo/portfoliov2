export default function TagTech() {
    
    return(
    <ul className="mt-8 flex flex-wrap gap-2">
    {['Next.js','React','Tailwind','TypeScript','ASP.NET Core','PostgreSQL'].map(tag => (
        <li key={tag} className="text-xs rounded-full border border-neutral-300/70 dark:border-neutral-700 px-3 py-1 text-neutral-600 dark:text-neutral-300">{tag}</li>
    ))}
    </ul>)
}