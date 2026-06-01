import type { MetadataRoute } from 'next'
import { templates, services, umkm } from '@/data/products'
import { templatePreviews } from '@/data/template-previews'

const siteUrl = 'https://dev-store-xi.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: siteUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${siteUrl}/brief-form`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
  ]

  const productPages = [...templates, ...services, ...umkm].map((p) => ({
    url: `${siteUrl}/produk/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const templatePages = templatePreviews.map((t) => ({
    url: `${siteUrl}/templates/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...productPages, ...templatePages]
}
