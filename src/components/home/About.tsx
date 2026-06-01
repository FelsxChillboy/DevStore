import { WA_ADMIN } from '@/lib/utils'

export default function About() {
  const waUrl = `https://wa.me/${WA_ADMIN}?text=Halo%20DevStore%2C%20saya%20mau%20tanya%20tentang%20produk`

  return (
    <section id="tentang" className="relative overflow-hidden bg-muted py-20 md:py-28">
      <div className="divider-gradient" />
      <div className="pointer-events-none absolute inset-0 pattern-dots opacity-50" />
      <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-accent/5 blur-3xl animate-float" />
      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-primary/5 blur-3xl animate-float-delayed" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="badge border-primary/20 bg-primary-light text-primary mb-4">Tentang DevStore</span>
            <h2 className="font-heading text-3xl font-bold text-text md:text-4xl">
              Digital Products Marketplace untuk{' '}
              <span className="gradient-text">Semua Kalangan</span>
            </h2>
            <p className="mt-4 leading-relaxed text-text-secondary">
              DevStore adalah platform digital marketplace yang menyediakan template siap pakai, komponen UI premium, dan jasa pembuatan website. Kami hadir untuk membantu mahasiswa, developer, dan pelaku UMKM memiliki produk digital profesional dengan harga terjangkau.
            </p>
            <p className="mt-4 leading-relaxed text-text-secondary">
              Dengan tagline <strong className="text-primary">&ldquo;Build Faster. Ship Smarter.&rdquo;</strong>, kami berkomitmen untuk menyediakan solusi digital berkualitas tinggi yang bisa langsung digunakan.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-text-secondary">Misi: Membantu setiap orang memiliki produk digital profesional</span>
            </div>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hubungi Kami
            </a>
          </div>
          <div className="flex justify-center">
            <div className="flex h-72 w-72 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-light to-white shadow-lg">
              <svg viewBox="0 0 36 36" fill="none" className="h-36 w-36 animate-float">
                <rect width="36" height="36" rx="8" fill="#2563EB" />
                <path d="M14 11L9 18L14 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 11L27 18L22 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 10L18 26" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1.5 3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
