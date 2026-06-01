import Link from 'next/link'

export default function DemoShelf({
  children,
  productName,
  slug,
}: {
  children: React.ReactNode
  productName: string
  slug: string
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <Link
            href={`/produk/${slug}`}
            className="text-sm font-medium text-primary hover:underline"
          >
            &larr; Kembali ke {productName}
          </Link>
          <span className="text-xs text-text-muted">Live Demo &middot; DevStore</span>
        </div>
      </div>
      <div className="mx-auto">{children}</div>
    </div>
  )
}
