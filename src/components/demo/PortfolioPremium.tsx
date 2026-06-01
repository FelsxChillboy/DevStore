'use client'

import { useState } from 'react'

const projects = [
  { title: 'ShopVerse', cat: 'web', desc: 'Platform e-commerce multi-vendor', img: 'https://picsum.photos/seed/shopverse/600/400' },
  { title: 'TaskFlow', cat: 'web', desc: 'Aplikasi manajemen proyek real-time', img: 'https://picsum.photos/seed/taskflow/600/400' },
  { title: 'BrandKit', cat: 'design', desc: 'Sistem desain komponen reusable', img: 'https://picsum.photos/seed/brandkit/600/400' },
  { title: 'ChatSync', cat: 'mobile', desc: 'Aplikasi chat dengan end-to-end encryption', img: 'https://picsum.photos/seed/chatsync/600/400' },
  { title: 'DataViz', cat: 'web', desc: 'Dashboard visualisasi data interaktif', img: 'https://picsum.photos/seed/dataviz/600/400' },
  { title: 'LogoTech', cat: 'design', desc: 'Branding & identitas visual startup', img: 'https://picsum.photos/seed/logotech/600/400' },
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
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 px-4 py-24 text-center text-white">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "url('https://picsum.photos/seed/herobackground/1600/900')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
        <div className="relative z-10 mx-auto max-w-3xl">
          <img
            src="https://i.pravatar.cc/160?u=rakapremium"
            alt="Raka"
            className="mx-auto mb-6 h-28 w-28 rounded-full border-4 border-purple-300/50 object-cover shadow-xl shadow-purple-500/20"
          />
          <p className="text-sm uppercase tracking-[0.2em] text-purple-300">Creative Developer</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Hai, Saya <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Raka</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-purple-200/80">
            Saya membangun produk digital yang indah dan fungsional. Spesialisasi di frontend engineering dan UI/UX design.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <span className="cursor-pointer rounded-full bg-white px-6 py-2 text-sm font-semibold text-purple-900 transition-all hover:bg-white/90">Projects</span>
            <span className="cursor-pointer rounded-full border border-white/30 px-6 py-2 text-sm text-white/80 transition-colors hover:bg-white/10">Contact</span>
          </div>
        </div>
      </section>

      {/* Portfolio Grid with filter */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold text-gray-900">Project Terkini</h2>
        <p className="mt-2 text-center text-gray-500">Kumpulan project yang sudah saya kerjakan.</p>

        <div className="mb-8 mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c.value}
              onClick={() => setFilter(c.value)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                filter === c.value
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <div key={p.title} className="group overflow-hidden rounded-xl border border-gray-200 transition-all hover:border-purple-200 hover:shadow-lg hover:shadow-purple-100">
              <div className="h-48 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-purple-50 to-indigo-50 px-4 py-12">
        <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-8 text-center">
          {[
            { label: 'Project Selesai', value: '50+' },
            { label: 'Happy Clients', value: '30+' },
            { label: 'Tahun Pengalaman', value: '5+' },
            { label: 'Tech Stack', value: '15+' },
          ].map((s) => (
            <div key={s.label} className="min-w-[120px]">
              <p className="text-3xl font-bold text-purple-700">{s.value}</p>
              <p className="mt-1 text-sm text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold text-gray-900">Tertarik Bekerja Sama?</h2>
          <p className="mt-3 text-gray-500">Kirim pesan dan mari diskusikan projectmu.</p>
          <div className="mx-auto mt-6">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email kamu"
                className="flex-1 rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
                readOnly
              />
              <button className="rounded-xl bg-purple-600 px-6 py-3 text-sm font-medium text-white shadow-md shadow-purple-200 transition-all hover:bg-purple-700">
                Kirim
              </button>
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-4 text-sm text-gray-400">
            <span className="hover:text-purple-600 cursor-pointer">GitHub</span>
            <span className="hover:text-purple-600 cursor-pointer">LinkedIn</span>
            <span className="hover:text-purple-600 cursor-pointer">Dribbble</span>
            <span className="hover:text-purple-600 cursor-pointer">Email</span>
          </div>
        </div>
      </section>
    </div>
  )
}
