export function formatPrice(price: number): string {
  return 'Rp ' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

export const WA_ADMIN = process.env.NEXT_PUBLIC_WA_ADMIN ?? '6289675635250'

export function buildWaUrl(message: string): string {
  return `https://wa.me/${WA_ADMIN}?text=${encodeURIComponent(message)}`
}

export type ProductCategory = 'template' | 'service' | 'umkm'

export interface Product {
  id: number
  slug: string
  name: string
  category: ProductCategory
  price: number
  priceDisplay?: string
  features: string[]
  badge: string
  badgeColor: string
  cardClass: string
  tagline?: string
  previewUrls?: { name: string; url: string }[]
  briefUrl?: string
  icon?: string
}
