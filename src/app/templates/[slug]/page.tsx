import { notFound } from 'next/navigation'
import { getTemplateBySlug } from '@/data/template-previews'
import { WA_ADMIN } from '@/lib/utils'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'

export function generateStaticParams() {
  return [{ slug: 'kuliner' }, { slug: 'fashion' }, { slug: 'jasa' }]
}

export default function TemplatePreviewPage({ params }: { params: { slug: string } }) {
  const template = getTemplateBySlug(params.slug)
  if (!template) notFound()

  const waUrl = `https://wa.me/${WA_ADMIN}?text=${encodeURIComponent(template.waText)}`

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-muted pt-24">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="text-center mb-10">
            <span className="badge border-primary/20 bg-primary-light text-primary mb-4">Preview Template</span>
            <h1 className="font-heading text-3xl font-bold text-text md:text-4xl">{template.title}</h1>
            <p className="mt-2 text-text-secondary">{template.description}</p>
          </div>

          <div className="rounded-2xl border border-border bg-white shadow-lg overflow-hidden">
            <div className={`bg-gradient-to-r ${template.gradient} p-8 md:p-16 text-white text-center`}>
              <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold mb-3">{template.badge}</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold">{template.businessName}</h2>
              <p className="mt-3 text-lg text-white/80">{template.tagline}</p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                {template.features.map((f) => (
                  <span key={f} className="rounded-full bg-white/20 px-4 py-2 text-sm">{f}</span>
                ))}
              </div>
            </div>

            <div className="p-8 md:p-12 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-heading text-xl font-bold text-text mb-3">{template.aboutTitle}</h3>
                <p className="text-text-secondary leading-relaxed">{template.aboutText}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {template.infoBoxes.map((item) => (
                  <div key={item} className="rounded-xl border border-border bg-muted p-4 text-center text-sm font-medium text-text">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border bg-muted p-6 text-center">
              <p className="text-text-muted text-sm">Template ini akan dikustomisasi sesuai brand pesanan kamu</p>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4 inline-flex">
                Pesan Template Ini
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
