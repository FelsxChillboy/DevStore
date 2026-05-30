import { Product } from '@/lib/utils'

export const templates: Product[] = [
  {
    id: 1,
    name: 'Portfolio Basic',
    category: 'template',
    price: 25000,
    features: ['1 halaman', 'Responsive mobile & desktop', 'HTML/CSS/JS murni', 'Tanpa revisi'],
    badge: 'Terlaris',
    badgeColor: 'bg-emerald-500',
    cardClass: 'border-blue-200/60 bg-gradient-to-br from-blue-50 to-white',
  },
  {
    id: 2,
    name: 'Portfolio Pro',
    category: 'template',
    price: 50000,
    features: ['Multi halaman (4-5)', 'Animasi premium AOS', 'Dark/Light mode', '1x revisi minor'],
    badge: 'Recommended',
    badgeColor: 'bg-blue-600 text-white',
    cardClass: 'border-blue-300/80 bg-gradient-to-br from-blue-100 to-white',
  },
  {
    id: 3,
    name: 'Portfolio Premium',
    category: 'template',
    price: 100000,
    features: ['Custom design sesuai brand', 'CMS sederhana (JSON-based)', 'SEO ready', '3x revisi'],
    badge: 'Best Value',
    badgeColor: 'bg-sky-600 text-white',
    cardClass: 'border-sky-200/60 bg-gradient-to-br from-sky-50 to-white',
  },
]

export const services: Product[] = [
  {
    id: 4,
    name: 'Jasa Portfolio Starter',
    category: 'service',
    price: 75000,
    features: ['Kirim CV → portfolio 1 halaman', 'Desain profesional', 'Hosting gratis 1 bulan', 'Pengerjaan 3 hari kerja'],
    badge: 'Hemat',
    badgeColor: 'bg-emerald-500',
    cardClass: 'border-blue-200/60 bg-gradient-to-br from-blue-50 to-white',
  },
  {
    id: 5,
    name: 'Jasa Portfolio Professional',
    category: 'service',
    price: 150000,
    features: ['CV → portfolio multi halaman', 'Foto profesional editing', 'Copywriting portfolio', 'Pengerjaan 5 hari kerja'],
    badge: 'Populer',
    badgeColor: 'bg-blue-600 text-white',
    cardClass: 'border-blue-300/80 bg-gradient-to-br from-blue-100 to-white',
  },
  {
    id: 6,
    name: 'Jasa Portfolio Executive',
    category: 'service',
    price: 250000,
    features: ['CV → portfolio premium', 'Domain .my.id 1 tahun', 'Hosting 1 tahun', 'Pengerjaan 7 hari kerja'],
    badge: 'Premium',
    badgeColor: 'bg-sky-600 text-white',
    cardClass: 'border-sky-200/60 bg-gradient-to-br from-sky-50 to-white',
  },
]

export const umkm: Product[] = [
  {
    id: 7,
    name: 'Template Website UMKM',
    category: 'umkm',
    priceDisplay: 'Rp50K–200K',
    price: 50000,
    tagline: 'Buat sekali, jual berkali-kali',
    badge: '3 Varian',
    badgeColor: 'bg-emerald-500',
    cardClass: 'border-sky-200/60 bg-gradient-to-br from-sky-50 to-white',
    previewUrls: [
      { name: 'Kuliner', url: '/templates/kuliner' },
      { name: 'Fashion', url: '/templates/fashion' },
      { name: 'Jasa', url: '/templates/jasa' },
    ],
    features: ['3 tema pilihan (Kuliner/Fashion/Jasa)', 'HTML+CSS+JS murni — zero dependency', 'Responsive mobile-first, siap pakai', 'Bisa langsung deploy ke Netlify/GitHub Pages'],
  },
  {
    id: 8,
    name: 'Jasa Landing Page UMKM',
    category: 'umkm',
    priceDisplay: 'Rp150K–500K',
    price: 150000,
    tagline: 'Waktu & skill',
    badge: 'Custom',
    badgeColor: 'bg-blue-600 text-white',
    cardClass: 'border-blue-300/80 bg-gradient-to-br from-blue-100 to-white',
    briefUrl: '/brief-form',
    features: ['3 paket: Starter Rp150K / Pro Rp300K / Premium Rp500K', 'Buatkan dari awal oleh tim DevStore', 'Dikerjakan 3–7 hari kerja sesuai paket', 'Termasuk deploy + domain (paket Premium)'],
  },
  {
    id: 9,
    name: 'Template PPT Presentasi',
    category: 'umkm',
    priceDisplay: 'Rp15K–75K',
    price: 15000,
    tagline: 'Buat sekali, jual berkali-kali',
    badge: '3 Tema',
    badgeColor: 'bg-sky-600 text-white',
    cardClass: 'border-blue-200/60 bg-gradient-to-br from-blue-50 to-white',
    features: ['3 tema: Akademik Rp15K / Proposal Rp25K / Pitch Rp35K', 'Bisa export ke PDF langsung dari browser', 'Cocok untuk sidang, bisnis, company profile'],
  },
]

export const allProducts = [...templates, ...services, ...umkm]

export function getProductById(id: number) {
  return allProducts.find(p => p.id === id)
}
