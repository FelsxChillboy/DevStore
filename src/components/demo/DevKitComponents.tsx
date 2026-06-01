import { ReactNode } from 'react'

const previews: { name: string; icon: ReactNode; desc: string }[] = [
  { name: 'Navbar', icon: <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>, desc: 'Responsive navigation with mobile menu' },
  { name: 'Hero', icon: <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>, desc: 'Hero dengan gradient, animasi, CTA' },
  { name: 'Features', icon: <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, desc: 'Feature grid dengan ikon & animasi' },
  { name: 'Pricing', icon: <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, desc: 'Pricing table 3 tier + perbandingan' },
  { name: 'Team', icon: <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>, desc: 'Team cards with photo & role' },
  { name: 'Testimonials', icon: <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>, desc: 'Carousel testimonial client' },
  { name: 'FAQ', icon: <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" /></svg>, desc: 'Accordion FAQ with search' },
  { name: 'Footer', icon: <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>, desc: 'Multi-column footer + social' },
]

export default function DevKitComponentsDemo() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 px-4 py-20 text-center text-white">
        <p className="text-sm uppercase tracking-widest text-blue-200">UI Component Kit</p>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">20+ Komponen <span className="text-blue-200">Tailwind</span> Siap Pakai</h1>
        <p className="mx-auto mt-4 max-w-lg text-blue-100/70">Copy, paste, dan kustomisasi. Komponen siap pakai untuk project Next.js atau React kamu.</p>
        <div className="mt-8 flex justify-center gap-3">
          <span className="cursor-pointer rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-700 shadow-lg transition-all hover:bg-blue-50">Lihat Komponen</span>
          <span className="cursor-pointer rounded-lg border border-white/30 px-6 py-3 text-sm text-white/80 transition-colors hover:bg-white/10">Dokumentasi</span>
        </div>
        <img
          src="https://picsum.photos/seed/herodevkit/1200/400"
          alt="Component preview"
          className="mx-auto mt-10 max-w-4xl rounded-xl border border-white/20 shadow-2xl"
        />
      </section>

      {/* Component Grid */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-center text-2xl font-bold text-gray-900">Komponen Tersedia</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {previews.map((p) => (
            <div key={p.name} className="group rounded-xl border border-gray-200 p-5 text-center transition-all hover:border-blue-200 hover:shadow-md">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                {p.icon}
              </div>
              <p className="text-sm font-semibold text-gray-700">{p.name}</p>
              <p className="mt-1 text-xs text-gray-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Preview Pricing */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-gray-900">Preview Pricing</h2>
          <p className="mt-2 text-center text-sm text-gray-500">3 paket dengan fitur lengkap untuk setiap kebutuhan.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { name: 'Starter', price: 'Gratis', features: ['5 komponen', 'Basic styling', 'Docs PDF'], popular: false },
              { name: 'Pro', price: 'Rp35K', features: ['20+ komponen', 'Dark & Light mode', 'Responsive', 'Source code'], popular: true },
              { name: 'Enterprise', price: 'Custom', features: ['Semua komponen', 'Custom request', 'Priority support'], popular: false },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-xl border p-6 text-center transition-all hover:shadow-lg ${
                plan.popular
                  ? 'border-blue-200 bg-white shadow-lg shadow-blue-100 scale-105'
                  : 'border-gray-200 bg-white'
              }`}>
                {plan.popular && <p className="mb-2 text-xs font-semibold uppercase text-blue-600">Terpopuler</p>}
                <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-3xl font-bold text-primary">{plan.price}</p>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <svg className="h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`mt-6 w-full rounded-xl py-3 text-sm font-medium transition-all ${
                  plan.popular
                    ? 'bg-primary text-white shadow-md hover:bg-primary/90'
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}>
                  Pilih {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Siap Mempercepat Development?</h2>
        <p className="mt-2 text-gray-500">Dapatkan akses ke 20+ komponen siap pakai sekarang juga.</p>
        <button className="mt-6 rounded-xl bg-primary px-8 py-3 font-semibold text-white shadow-lg shadow-blue-200 transition-all hover:bg-primary/90">
          Download DevKit
        </button>
      </section>
    </div>
  )
}
