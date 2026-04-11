export default function TagTech() {

    return(
    <ul className="mt-8 flex flex-wrap gap-2">
    {['AI/ML', '.NET 8', '.NET 10', 'Blazor', 'Razor', 'MVC', 'PKI (EJBCA / SignServer)', 'Terraform', 'GCP', 'Azure', 'Docker', 'OCR'].map(tag => (
        <li key={tag} className="text-xs rounded-full border border-neutral-300/70 dark:border-neutral-700 px-3 py-1 text-neutral-600 dark:text-neutral-300">{tag}</li>
    ))}
    </ul>)
}