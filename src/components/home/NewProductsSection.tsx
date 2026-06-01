'use client'

import Link from 'next/link'
import { newProducts } from '@/data/new-products'
import { formatPrice, Product } from '@/lib/utils'

function NewProductCard({ product }: { product: Product }) {
  const openModal = (id: number, type: string) => {
    window.dispatchEvent(new CustomEvent('open-modal', { detail: { id, type } }))
  }

  return (
    <div className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5 ${product.cardClass}`}>
      {product.image && (
        <Link href={`/produk/${product.slug}`} className="block aspect-video overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
      )}
      <div className="p-6">
      <div className="mb-4 flex items-start gap-3">
        {product.icon && (
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-light">
            <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d={product.icon} />
            </svg>
          </div>
        )}
        <div>
          <h3 className="font-heading text-xl font-bold text-text">{product.name}</h3>
          <span className="mt-1 inline-block rounded-full bg-primary-light px-3 py-1 text-sm font-bold text-primary">{formatPrice(product.price)}</span>
        </div>
      </div>


      {product.demoUrl && (
        <Link
          href={product.demoUrl}
          className="btn-outline mb-2 block w-full text-center text-sm"
        >
          Lihat Demo
        </Link>
      )}
      <button onClick={() => openModal(product.id, product.category)} className="btn-primary w-full text-sm">
        Pesan Sekarang
      </button>
      </div>
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
