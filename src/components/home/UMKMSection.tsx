'use client'

import { umkm } from '@/data/products'
import { Product } from '@/lib/utils'
import Link from 'next/link'

function UMKMProductCard({ product }: { product: Product }) {
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
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-start gap-3">
          {product.icon && (
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-light">
              <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d={product.icon} />
              </svg>
            </div>
          )}
          <div>
            <h3 className="font-heading text-xl font-bold text-text">{product.name}</h3>
            <span className="mt-1 inline-block rounded-full bg-primary-light px-3 py-1 text-sm font-bold text-primary">{product.priceDisplay || product.price}</span>
          </div>
        </div>
        <span className={`badge border-transparent ${product.badgeColor}`}>{product.badge}</span>
      </div>

      {product.tagline && (
        <p className="mb-4 text-sm italic text-text-muted">&ldquo;{product.tagline}&rdquo;</p>
      )}

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

      {product.previewUrls && (
        <div className="mb-4 flex flex-wrap gap-2">
          {product.previewUrls.map((preview) => (
            <Link
              key={preview.name}
              href={preview.url}
              target="_blank"
              className="rounded-lg border border-border px-3 py-1.5 text-xs text-text-secondary transition-all hover:border-primary/30 hover:text-primary"
            >
              Preview {preview.name} &rarr;
            </Link>
          ))}
        </div>
      )}

      {product.demoUrl && (
        <Link
          href={product.demoUrl}
          className="btn-outline mb-2 block w-full text-center text-sm"
        >
          Lihat Demo
        </Link>
      )}
      {product.briefUrl ? (
        <div className="flex flex-col gap-2">
          <Link href={product.briefUrl} target="_blank" className="btn-accent w-full text-sm font-bold text-center">
            Isi Brief Order
          </Link>
          <button
            onClick={() => openModal(product.id, product.category)}
            className="btn-outline w-full text-sm text-center"
          >
            Hubungi CS
          </button>
        </div>
      ) : (
        <button onClick={() => openModal(product.id, product.category)} className="btn-primary w-full text-sm">
          Pesan via WA
        </button>
      )}
      </div>
    </div>
  )
}

export default function UMKMSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge border-primary/20 bg-primary-light text-primary mb-4">Layanan UMKM & Presentasi</span>
          <h2 className="font-heading text-3xl font-bold text-text md:text-4xl">Solusi untuk UMKM & Mahasiswa</h2>
          <p className="mt-3 text-text-secondary">Template website, jasa landing page, dan template presentasi siap pakai.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {umkm.map((product) => (
            <UMKMProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
