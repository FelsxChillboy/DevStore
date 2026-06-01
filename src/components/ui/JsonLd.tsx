export function OrgJsonLd() {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DevStore',
    url: 'https://dev-store-xi.vercel.app',
    description: 'Digital Products Marketplace — Template, komponen UI, dan jasa pembuatan website.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+62-896-7563-5250',
    },
    sameAs: ['https://www.instagram.com/arzjar_____'],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
}

export function WebSiteJsonLd() {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'DevStore',
    url: 'https://dev-store-xi.vercel.app',
    description: 'Marketplace template digital, jasa pembuatan website, dan komponen UI siap pakai untuk mahasiswa dan UMKM.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://dev-store-xi.vercel.app/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
}

export function ProductJsonLd({
  name,
  description,
  price,
  category,
  url,
}: {
  name: string
  description: string
  price: string
  category: string
  url: string
}) {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    url,
    category,
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: 'IDR',
      availability: 'https://schema.org/InStock',
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
}
