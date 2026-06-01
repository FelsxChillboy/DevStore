'use client'

import { useState } from 'react'

export default function PortfolioProDemo() {
  const [dark, setDark] = useState(false)

  const bg = dark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
  const sectionBg = dark ? 'bg-gray-800' : 'bg-gray-50'
  const cardBg = dark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
  const textMuted = dark ? 'text-gray-400' : 'text-gray-500'

  return (
    <div className={`${bg} min-h-screen transition-colors`}>
      <header className={`sticky top-0 z-40 border-b ${dark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'}`}>
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <span className="font-bold text-primary">Portfolio.</span>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            {['Home', 'About', 'Portfolio', 'Skills', 'Contact'].map((l) => (
              <span key={l} className={`cursor-pointer ${dark ? 'text-gray-300' : 'text-gray-600'} hover:text-primary`}>{l}</span>
            ))}
          </nav>
          <button
            onClick={() => setDark(!dark)}
            className={`rounded-lg border px-3 py-1 text-xs ${dark ? 'border-gray-600 text-gray-300' : 'border-gray-300 text-gray-600'}`}
          >
            {dark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </header>

      <section className="flex min-h-[60vh] items-center justify-center px-4 text-center">
        <div>
          <p className={`text-sm uppercase tracking-widest ${textMuted}`}>Full-Stack Developer</p>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">Membangun <span className="text-primary">Produk Digital</span></h1>
          <p className={`mx-auto mt-4 max-w-lg ${textMuted}`}>Berpengalaman dalam React, Next.js, dan Node.js. Suka mengubah ide menjadi solusi nyata.</p>
          <div className="mt-8 flex justify-center gap-3">
            <span className="rounded-lg bg-primary px-6 py-2 text-sm font-medium text-white">Lihat Portfolio</span>
            <span className={`rounded-lg border px-6 py-2 text-sm font-medium ${dark ? 'border-gray-600' : 'border-gray-300'}`}>Hubungi Saya</span>
          </div>
        </div>
      </section>

      <section className={`${sectionBg} px-4 py-16`}>
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold">Portfolio</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {['E-Commerce App', 'Dashboard CMS', 'Portfolio Builder'].map((p) => (
              <div key={p} className={`rounded-xl border p-5 ${cardBg}`}>
                <div className={`mb-3 h-32 rounded-lg ${dark ? 'bg-gray-600' : 'bg-gray-200'}`} />
                <h3 className="font-bold">{p}</h3>
                <p className={`mt-1 text-sm ${textMuted}`}>React &middot; Tailwind &middot; Node.js</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold">Skill</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL', 'GraphQL', 'Docker', 'AWS', 'Figma'].map((s) => (
              <span key={s} className={`rounded-full border px-4 py-1 text-sm ${cardBg}`}>{s}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
