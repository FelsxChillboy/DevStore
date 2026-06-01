export interface TemplatePreview {
  slug: string
  title: string
  description: string
  badge: string
  businessName: string
  tagline: string
  gradient: string
  features: string[]
  aboutTitle: string
  aboutText: string
  infoBoxes: string[]
  waText: string
}

export const templatePreviews: TemplatePreview[] = [
  {
    slug: 'kuliner',
    title: 'Template Website Kuliner',
    description: 'Template landing page untuk usaha kuliner — siap pakai dan responsive',
    badge: 'KULINER',
    businessName: 'Warung Tectonic',
    tagline: 'Cita rasa gunung berapi di lidah Anda',
    gradient: 'from-primary to-accent',
    features: ['🍜 Mie Goyang', '🍚 Nasi Guncang', '🥟 Siomay'],
    aboutTitle: 'Tentang Kami',
    aboutText: 'Warung Tectonic menyajikan hidangan khas Nusantara dengan sentuhan modern. Berdiri sejak 2023, kami berkomitmen menghadirkan cita rasa terbaik dari bahan-bahan segar pilihan.',
    infoBoxes: ['⏰ 08:00 - 22:00', '📍 Jakarta Pusat', '📞 0812-3456-7890', '⭐ 4.8 Rating'],
    waText: 'Halo DevStore, saya mau order template Kuliner',
  },
  {
    slug: 'fashion',
    title: 'Template Website Fashion',
    description: 'Template landing page untuk brand fashion — elegan dan modern',
    badge: 'FASHION',
    businessName: 'Velora Style',
    tagline: 'Elegan dalam setiap helai',
    gradient: 'from-pink-600 to-purple-600',
    features: ['👗 Dress', '🧥 Outer', '👠 Shoes'],
    aboutTitle: 'Koleksi Terbaru',
    aboutText: 'Velora Style menghadirkan koleksi fashion modern untuk wanita masa kini. Setiap produk dirancang dengan detail terbaik untuk menunjang penampilan elegan Anda.',
    infoBoxes: ['🕐 09:00 - 21:00', '📍 Jakarta Selatan', '📞 0812-3456-7891', '⭐ 4.9 Rating'],
    waText: 'Halo DevStore, saya mau order template Fashion',
  },
  {
    slug: 'jasa',
    title: 'Template Website Jasa',
    description: 'Template landing page untuk bisnis jasa — profesional dan terpercaya',
    badge: 'JASA',
    businessName: 'Nexus Service',
    tagline: 'Solusi tepat untuk bisnis Anda',
    gradient: 'from-emerald-600 to-teal-600',
    features: ['🔧 Perbaikan', '📋 Konsultasi', '🚀 Instalasi'],
    aboutTitle: 'Layanan Kami',
    aboutText: 'Nexus Service menyediakan berbagai layanan profesional untuk memenuhi kebutuhan bisnis Anda. Dengan tim berpengalaman, kami siap membantu menyelesaikan masalah Anda dengan cepat dan tepat.',
    infoBoxes: ['🕐 07:00 - 20:00', '📍 Jakarta Timur', '📞 0812-3456-7892', '⭐ 4.7 Rating'],
    waText: 'Halo DevStore, saya mau order template Jasa',
  },
]

export function getTemplateBySlug(slug: string): TemplatePreview | undefined {
  return templatePreviews.find((t) => t.slug === slug)
}
