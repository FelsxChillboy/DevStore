'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'

export default function TemplateKuliner() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-muted pt-24">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="text-center mb-10">
            <span className="badge border-primary/20 bg-primary-light text-primary mb-4">Preview Template</span>
            <h1 className="font-heading text-3xl font-bold text-text md:text-4xl">Template Website Kuliner</h1>
            <p className="mt-2 text-text-secondary">Template landing page untuk usaha kuliner — siap pakai dan responsive</p>
          </div>

          <div className="rounded-2xl border border-border bg-white shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-accent p-8 md:p-16 text-white text-center">
              <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold mb-3">KULINER</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold">Warung Tectonic</h2>
              <p className="mt-3 text-lg text-white/80">Cita rasa gunung berapi di lidah Anda</p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <span className="rounded-full bg-white/20 px-4 py-2 text-sm">🍜 Mie Goyang</span>
                <span className="rounded-full bg-white/20 px-4 py-2 text-sm">🍚 Nasi Guncang</span>
                <span className="rounded-full bg-white/20 px-4 py-2 text-sm">🥟 Siomay</span>
              </div>
            </div>

            <div className="p-8 md:p-12 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-heading text-xl font-bold text-text mb-3">Tentang Kami</h3>
                <p className="text-text-secondary leading-relaxed">
                  Warung Tectonic menyajikan hidangan khas Nusantara dengan sentuhan modern. 
                  Berdiri sejak 2023, kami berkomitmen menghadirkan cita rasa terbaik dari bahan-bahan segar pilihan.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['⏰ 08:00 - 22:00', '📍 Jakarta Pusat', '📞 0812-3456-7890', '⭐ 4.8 Rating'].map((item) => (
                  <div key={item} className="rounded-xl border border-border bg-muted p-4 text-center text-sm font-medium text-text">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border bg-muted p-6 text-center">
              <p className="text-text-muted text-sm">Template ini akan dikustomisasi sesuai brand pesanan kamu</p>
              <a
                href="https://wa.me/6289675635250?text=Halo%20DevStore%2C%20saya%20mau%20order%20template%20Kuliner"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-4 inline-flex"
              >
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
