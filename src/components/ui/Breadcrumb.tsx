import Link from 'next/link'

interface Crumb {
  label: string
  href?: string
}

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm text-text-secondary">
        <li>
          <Link href="/" className="transition-colors hover:text-primary">Beranda</Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <svg className="h-3 w-3 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-primary">{item.label}</Link>
            ) : (
              <span className="text-text-muted" aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
