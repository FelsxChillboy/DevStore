'use client'

import { useState } from 'react'

const projects = [
  { title: 'ShopVerse', cat: 'web', desc: 'Platform e-commerce multi-vendor' },
  { title: 'TaskFlow', cat: 'web', desc: 'Aplikasi manajemen proyek real-time' },
  { title: 'BrandKit', cat: 'design', desc: 'Sistem desain komponen reusable' },
  { title: 'ChatSync', cat: 'mobile', desc: 'Aplikasi chat dengan end-to-end encryption' },
  { title: 'DataViz', cat: 'web', desc: 'Dashboard visualisasi data interaktif' },
  { title: 'LogoTech', cat: 'design', desc: 'Branding & identitas visual startup' },
]

const categories = [
  { label: 'Semua', value: 'all' },
  { label: 'Web App', value: 'web' },
  { label: 'Design', value: 'design' },
  { label: 'Mobile', value: 'mobile' },
]

export default function PortfolioPremiumDemo() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.cat === filter)

  return (
    <div className="bg-white min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 px-4 py-24 text-center text-white">
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-purple-300">Creative Developer</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Hai, Saya <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Raka</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-purple-200/80">
            Saya membangun produk digital yang indah dan fungsional. Spesialisasi di frontend engineering dan UI/UX design.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <span className="rounded-full bg-white px-6 py-2 text-sm font-semibold text-purple-900">Projects</span>
            <span className="rounded-full border border-white/30 px-6 py-2 text-sm text-white/80">Contact</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c.value}
              onClick={() => setFilter(c.value)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                filter === c.value
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <div key={p.title} className="group rounded-xl border border-gray-200 p-5 transition-all hover:border-purple-200 hover:shadow-lg hover:shadow-purple-100">
              <div className="mb-3 h-36 rounded-lg bg-gradient-to-br from-purple-100 to-indigo-100" />
              <h3 className="font-bold text-gray-900">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-gray-900">Tertarik Bekerja Sama?</h2>
          <p className="mt-3 text-gray-500">Kirim pesan dan mari diskusikan projectmu.</p>
          <div className="mx-auto mt-6 max-w-md">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email kamu"
                className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-purple-400"
                readOnly
              />
              <button className="rounded-xl bg-purple-600 px-6 py-3 text-sm font-medium text-white">Kirim</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
