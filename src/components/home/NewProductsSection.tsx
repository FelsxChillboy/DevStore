'use client'

import { newProducts } from '@/data/new-products'
import { formatPrice, Product } from '@/lib/utils'

function NewProductCard({ product }: { product: Product }) {
  const openModal = (id: number, type: string) => {
    window.dispatchEvent(new CustomEvent('open-modal', { detail: { id, type } }))
  }

  return (
    <div className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${product.cardClass}`}>
      <div className="absolute top-3 right-3">
        <span className={`badge border-transparent ${product.badgeColor}`}>{product.badge}</span>
      </div>

      <div className="mb-4">
        <h3 className="font-heading text-xl font-bold text-text">{product.name}</h3>
        <p className="mt-1 text-2xl font-bold text-primary">{formatPrice(product.price)}</p>
      </div>

      <ul className="mb-6 space-y-2">
        {product.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
            <svg className="h-4 w-4 flex-shrink-0 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <button onClick={() => openModal(product.id, product.category)} className="btn-primary w-full text-sm">
        Pesan Sekarang
      </button>
    </div>
  )
}

export default function NewProductsSection() {
  return (
    <section className="bg-muted py-20 md:py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge border-blue-300 bg-blue-100 text-blue-700 mb-4">Produk Baru</span>
          <h2 className="font-heading text-3xl font-bold text-text md:text-4xl">Digital Assets & Tools</h2>
          <p className="mt-3 text-text-secondary">Koleksi template dan komponen digital untuk mempercepat project-mu.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {newProducts.map((product) => (
            <NewProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
