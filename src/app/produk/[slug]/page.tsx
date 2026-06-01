import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { templates, services, umkm, getProductBySlug } from '@/data/products'
import { formatPrice, buildWaUrl } from '@/lib/utils'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { ProductJsonLd } from '@/components/ui/JsonLd'

export function generateStaticParams() {
  const all = [...templates, ...services, ...umkm]
  return all.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = getProductBySlug(params.slug)
  if (!product) return { title: 'Produk Tidak Ditemukan - DevStore' }

  const price = product.priceDisplay || `Rp ${product.price.toLocaleString('id-ID')}`
  const description = `${product.name} - ${product.features.slice(0, 2).join(', ')}. Harga ${price}. Pesan via WhatsApp.`

  const url = `https://dev-store-xi.vercel.app/produk/${product.slug}`

  return {
    title: `${product.name} - DevStore`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${product.name} - DevStore`,
      description,
      url,
      type: 'website',
      siteName: 'DevStore',
    },
  }
}

function getCategoryLabel(category: string) {
  switch (category) {
    case 'template': return { label: 'Template', color: 'bg-blue-100 text-blue-700 border-blue-300' }
    case 'service': return { label: 'Jasa', color: 'bg-sky-100 text-sky-700 border-sky-300' }
    case 'umkm': return { label: 'UMKM', color: 'bg-emerald-100 text-emerald-700 border-emerald-300' }
    default: return { label: category, color: 'bg-gray-100 text-gray-700 border-gray-300' }
  }
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  const cat = getCategoryLabel(product.category)
  const price = product.priceDisplay || formatPrice(product.price)
  const waUrl = buildWaUrl(`Halo DevStore, saya tertarik dengan ${product.name} (${price}). Mohon informasinya, terima kasih!`)

  return (
    <>
      <ProductJsonLd
        name={product.name}
        description={`${product.name} - ${product.features.slice(0, 2).join(', ')}`}
        price={price}
        category={cat.label}
        url={`https://dev-store-xi.vercel.app/produk/${product.slug}`}
      />
      <Navbar />
      <main className="min-h-screen bg-muted pt-24 pb-12">
        <div className="mx-auto max-w-4xl px-4">
          <Breadcrumb items={[
            { label: 'Produk', href: '/#produk' },
            { label: product.name },
          ]} />

          <div className={`rounded-2xl border p-8 md:p-10 ${product.cardClass}`}>
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`badge border ${cat.color}`}>{cat.label}</span>
                  <span className={`badge border-transparent ${product.badgeColor}`}>{product.badge}</span>
                </div>
                <h1 className="font-heading text-3xl font-bold text-text md:text-4xl">{product.name}</h1>
                {product.tagline && (
                  <p className="mt-2 italic text-text-muted">&ldquo;{product.tagline}&rdquo;</p>
                )}
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-primary">{price}</p>
              </div>
            </div>

            <ul className="mb-8 space-y-3">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-text-secondary">
                  <svg className="h-5 w-5 flex-shrink-0 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            {product.previewUrls && (
              <div className="mb-8 flex flex-wrap gap-2">
                {product.previewUrls.map((preview) => (
                  <Link
                    key={preview.name}
                    href={preview.url}
                    className="rounded-lg border border-border px-4 py-2 text-sm text-text-secondary transition-all hover:border-primary/30 hover:text-primary"
                  >
                    Preview {preview.name} &rarr;
                  </Link>
                ))}
              </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 text-center"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Pesan via WhatsApp
              </a>
              {product.briefUrl && (
                <Link href={product.briefUrl} className="btn-outline flex-1 text-center">
                  Isi Brief Order
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}