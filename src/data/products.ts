import { Product } from '@/lib/utils'
import { productPreview } from '@/lib/placeholder'
import { newProducts } from './new-products'

export const templates: Product[] = [
  {
    id: 1,
    slug: 'portfolio-basic',
    name: 'Portfolio Basic',
    category: 'template',
    image: productPreview('Portfolio Basic', 'template'),
    price: 25000,
    features: ['1 halaman', 'Responsive mobile & desktop', 'HTML/CSS/JS murni', 'Tanpa revisi'],
    badge: 'Terlaris',
    badgeColor: 'bg-emerald-500',
    cardClass: 'border-blue-200/60 bg-gradient-to-br from-blue-50 to-white',
    icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z',
  },
  {
    id: 2,
    slug: 'portfolio-pro',
    name: 'Portfolio Pro',
    category: 'template',
    image: productPreview('Portfolio Pro', 'template'),
    price: 50000,
    features: ['Multi halaman (4-5)', 'Animasi premium AOS', 'Dark/Light mode', '1x revisi minor'],
    badge: 'Recommended',
    badgeColor: 'bg-blue-600 text-white',
    cardClass: 'border-blue-300/80 bg-gradient-to-br from-blue-100 to-white',
    icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z',
  },
  {
    id: 3,
    slug: 'portfolio-premium',
    name: 'Portfolio Premium',
    category: 'template',
    image: productPreview('Portfolio Premium', 'template'),
    price: 100000,
    features: ['Custom design sesuai brand', 'CMS sederhana (JSON-based)', 'SEO ready', '3x revisi'],
    badge: 'Best Value',
    badgeColor: 'bg-sky-600 text-white',
    cardClass: 'border-sky-200/60 bg-gradient-to-br from-sky-50 to-white',
    icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z',
  },
]

export const services: Product[] = [
  {
    id: 4,
    slug: 'jasa-portfolio-starter',
    name: 'Jasa Portfolio Starter',
    category: 'service',
    image: productPreview('Jasa Portfolio Starter', 'service'),
    price: 75000,
    features: ['Kirim CV → portfolio 1 halaman', 'Desain profesional', 'Hosting gratis 1 bulan', 'Pengerjaan 3 hari kerja'],
    badge: 'Hemat',
    badgeColor: 'bg-emerald-500',
    cardClass: 'border-blue-200/60 bg-gradient-to-br from-blue-50 to-white',
    icon: 'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z',
  },
  {
    id: 5,
    slug: 'jasa-portfolio-professional',
    name: 'Jasa Portfolio Professional',
    category: 'service',
    image: productPreview('Jasa Portfolio Professional', 'service'),
    price: 150000,
    features: ['CV → portfolio multi halaman', 'Foto profesional editing', 'Copywriting portfolio', 'Pengerjaan 5 hari kerja'],
    badge: 'Populer',
    badgeColor: 'bg-blue-600 text-white',
    cardClass: 'border-blue-300/80 bg-gradient-to-br from-blue-100 to-white',
    icon: 'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z',
  },
  {
    id: 6,
    slug: 'jasa-portfolio-executive',
    name: 'Jasa Portfolio Executive',
    category: 'service',
    image: productPreview('Jasa Portfolio Executive', 'service'),
    price: 250000,
    features: ['CV → portfolio premium', 'Domain .my.id 1 tahun', 'Hosting 1 tahun', 'Pengerjaan 7 hari kerja'],
    badge: 'Premium',
    badgeColor: 'bg-sky-600 text-white',
    cardClass: 'border-sky-200/60 bg-gradient-to-br from-sky-50 to-white',
    icon: 'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z',
  },
]

export const umkm: Product[] = [
  {
    id: 7,
    slug: 'template-website-umkm',
    name: 'Template Website UMKM',
    category: 'umkm',
    image: productPreview('Template Website UMKM', 'umkm'),
    priceDisplay: 'Rp50K–200K',
    price: 50000,
    tagline: 'Buat sekali, jual berkali-kali',
    badge: '3 Varian',
    badgeColor: 'bg-emerald-500',
    cardClass: 'border-sky-200/60 bg-gradient-to-br from-sky-50 to-white',
    icon: 'M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z',
    previewUrls: [
      { name: 'Kuliner', url: '/templates/kuliner' },
      { name: 'Fashion', url: '/templates/fashion' },
      { name: 'Jasa', url: '/templates/jasa' },
    ],
    features: ['3 tema pilihan (Kuliner/Fashion/Jasa)', 'HTML+CSS+JS murni — zero dependency', 'Responsive mobile-first, siap pakai', 'Bisa langsung deploy ke Netlify/GitHub Pages'],
  },
  {
    id: 8,
    slug: 'jasa-landing-page-umkm',
    name: 'Jasa Landing Page UMKM',
    category: 'umkm',
    image: productPreview('Jasa Landing Page UMKM', 'umkm'),
    priceDisplay: 'Rp150K–500K',
    price: 150000,
    tagline: 'Waktu & skill',
    badge: 'Custom',
    badgeColor: 'bg-blue-600 text-white',
    cardClass: 'border-blue-300/80 bg-gradient-to-br from-blue-100 to-white',
    icon: 'M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z',
    briefUrl: '/brief-form',
    features: ['3 paket: Starter Rp150K / Pro Rp300K / Premium Rp500K', 'Buatkan dari awal oleh tim DevStore', 'Dikerjakan 3–7 hari kerja sesuai paket', 'Termasuk deploy + domain (paket Premium)'],
  },
  {
    id: 9,
    slug: 'template-ppt-presentasi',
    name: 'Template PPT Presentasi',
    category: 'umkm',
    image: productPreview('Template PPT Presentasi', 'umkm'),
    priceDisplay: 'Rp15K–75K',
    price: 15000,
    tagline: 'Buat sekali, jual berkali-kali',
    badge: '3 Tema',
    badgeColor: 'bg-sky-600 text-white',
    cardClass: 'border-blue-200/60 bg-gradient-to-br from-blue-50 to-white',
    icon: 'M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z',
    features: ['3 tema: Akademik Rp15K / Proposal Rp25K / Pitch Rp35K', 'Bisa export ke PDF langsung dari browser', 'Cocok untuk sidang, bisnis, company profile'],
  },
]

export const allProducts = [...templates, ...services, ...umkm, ...newProducts]

export function getProductById(id: number) {
  return allProducts.find(p => p.id === id)
}

export function getProductBySlug(slug: string) {
  return allProducts.find(p => p.slug === slug)
}
