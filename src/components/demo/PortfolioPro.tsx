'use client'

import { useState } from 'react'

const pages = ['Home', 'About', 'Portfolio', 'Skills', 'Contact'] as const

const projects = [
  { title: 'E-Commerce App', cat: 'web', desc: 'React &middot; Tailwind &middot; Node.js', img: 'https://picsum.photos/seed/ecommerce/600/400' },
  { title: 'Dashboard CMS', cat: 'web', desc: 'Next.js &middot; TypeScript &middot; PostgreSQL', img: 'https://picsum.photos/seed/dashboard/600/400' },
  { title: 'Portfolio Builder', cat: 'mobile', desc: 'React &middot; Framer &middot; Supabase', img: 'https://picsum.photos/seed/portfoliobuilder/600/400' },
]

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Framer Motion', level: 75 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'PostgreSQL', level: 78 },
      { name: 'GraphQL', level: 70 },
      { name: 'Docker', level: 65 },
    ],
  },
  {
    name: 'Design',
    skills: [
      { name: 'Figma', level: 90 },
      { name: 'UI/UX Design', level: 82 },
      { name: 'Design System', level: 76 },
      { name: 'Prototyping', level: 88 },
    ],
  },
]

const experiences = [
  { role: 'Senior Frontend Engineer', company: 'TechCorp Inc.', period: '2024–Sekarang', desc: 'Memimpin pengembangan design system komponen yang digunakan oleh 5 tim produk.' },
  { role: 'Frontend Developer', company: 'Startup XYZ', period: '2022–2024', desc: 'Membangun dashboard analytics real-time dengan Next.js dan WebSocket.' },
  { role: 'Junior Developer', company: 'Digital Agency', period: '2021–2022', desc: 'Mengembangkan 20+ landing page untuk klien enterprise.' },
  { role: 'Freelance Web Developer', company: 'Self-employed', period: '2020–2021', desc: 'Mengerjakan berbagai project website untuk UMKM dan personal brand.' },
]

export default function PortfolioProDemo() {
  const [page, setPage] = useState<(typeof pages)[number]>('Home')
  const [dark, setDark] = useState(false)
  const [filter, setFilter] = useState('all')
  const [animating, setAnimating] = useState(false)
  const [skillAnims, setSkillAnims] = useState(false)

  const isDark = dark
  const bg = isDark ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'
  const cardBg = isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
  const sectionBg = isDark ? 'bg-gray-900' : 'bg-gray-50'
  const muted = isDark ? 'text-gray-400' : 'text-gray-500'

  function navigate(to: (typeof pages)[number]) {
    if (to === page) return
    setAnimating(true)
    setTimeout(() => {
      setPage(to)
      setAnimating(false)
    }, 150)
  }

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.cat === filter)

  return (
    <div className={`${bg} min-h-screen transition-colors duration-300`}>
      {/* Navbar */}
      <header className={`sticky top-0 z-40 border-b ${isDark ? 'border-gray-800 bg-gray-950/90' : 'border-gray-200 bg-white/90'} backdrop-blur-md`}>
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <span className="text-lg font-bold text-primary">Portfolio.</span>
          <nav className="hidden items-center gap-1 md:flex">
            {pages.map((p) => (
              <button
                key={p}
                onClick={() => navigate(p)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  page === p
                    ? 'bg-primary text-white shadow-sm'
                    : `${isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'}`
                }`}
              >
                {p}
              </button>
            ))}
          </nav>
          <button
            onClick={() => setDark(!dark)}
            className={`rounded-lg border px-3 py-1.5 text-xs transition-all ${
              isDark ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-600 hover:bg-gray-100'
            }`}
          >
            {dark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </header>

      {/* Page content */}
      <div className={`transition-opacity duration-200 ${animating ? 'opacity-0' : 'opacity-100'}`}>
        {page === 'Home' && (
          <section className="flex min-h-[85vh] items-center justify-center px-4">
            <div className="mx-auto max-w-3xl text-center">
              <img
                src="https://i.pravatar.cc/160?u=farhanpro"
                alt="Farhan"
                className="mx-auto mb-6 h-32 w-32 rounded-full border-4 border-primary/30 object-cover shadow-lg"
              />
              <p className={`text-sm uppercase tracking-[0.2em] ${muted}`}>Full-Stack Developer</p>
              <h1 className="mt-3 text-4xl font-bold md:text-6xl">
                Hai, Saya <span className="text-primary">Farhan</span>
              </h1>
              <p className={`mx-auto mt-4 max-w-xl leading-relaxed ${muted}`}>
                Saya membangun produk digital modern dengan React, Next.js, dan TypeScript.
                Spesialisasi di frontend performance dan developer experience.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => navigate('Portfolio')}
                  className="rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40"
                >
                  Lihat Portfolio
                </button>
                <button
                  onClick={() => navigate('Contact')}
                  className={`rounded-xl border px-8 py-3 text-sm font-medium transition-all ${
                    isDark ? 'border-gray-700 text-gray-300 hover:bg-gray-800' : 'border-gray-300 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Hubungi Saya
                </button>
              </div>
              <div className="mt-12 flex justify-center gap-6">
                {['GitHub', 'LinkedIn', 'Dribbble', 'Email'].map((s) => (
                  <span key={s} className={`text-sm font-medium ${muted} hover:text-primary cursor-pointer transition-colors`}>{s}</span>
                ))}
              </div>
            </div>
          </section>
        )}

        {page === 'About' && (
          <section className="px-4 py-16">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-center text-3xl font-bold">Tentang Saya</h2>
              <p className={`mt-3 text-center leading-relaxed ${muted}`}>
                Berpengalaman 5+ tahun di dunia web development. Dari freelance sampai lead engineer —
                saya selalu fokus pada kualitas code dan user experience.
              </p>

              <div className="mt-12 space-y-6">
                {experiences.map((exp, i) => (
                  <div
                    key={exp.role}
                    className={`group relative rounded-xl border p-6 transition-all hover:shadow-md ${cardBg}`}
                  >
                    <div className="absolute -left-3 top-6 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                      {i + 1}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold">{exp.role}</h3>
                      <p className={`text-sm ${muted}`}>{exp.company} &middot; {exp.period}</p>
                      <p className={`mt-2 text-sm leading-relaxed ${muted}`}>{exp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={`mt-12 rounded-xl border p-6 text-center ${cardBg}`}>
                <p className={`text-sm ${muted}`}>Pendidikan</p>
                <h3 className="mt-1 font-bold">S1 Teknik Informatika</h3>
                <p className={`text-sm ${muted}`}>Universitas Indonesia &middot; 2016–2020 &middot; Cum Laude</p>
              </div>
            </div>
          </section>
        )}

        {page === 'Portfolio' && (
          <section className="px-4 py-16">
            <div className="mx-auto max-w-5xl">
              <h2 className="text-center text-3xl font-bold">Portfolio</h2>
              <p className={`mt-2 text-center ${muted}`}>Beberapa project yang pernah saya kerjakan.</p>

              <div className="mt-8 flex justify-center gap-2">
                {[
                  { label: 'Semua', value: 'all' },
                  { label: 'Web App', value: 'web' },
                  { label: 'Mobile', value: 'mobile' },
                ].map((c) => (
                  <button
                    key={c.value}
                    onClick={() => setFilter(c.value)}
                    className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                      filter === c.value
                        ? 'bg-primary text-white shadow-sm'
                        : `${isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {(filter === 'all' ? projects : filteredProjects).map((p) => (
                  <div key={p.title} className={`group rounded-xl border overflow-hidden transition-all hover:shadow-lg ${cardBg}`}>
                    <div className="h-48 overflow-hidden">
                      <img
                        src={p.img}
                        alt={p.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold">{p.title}</h3>
                      <p className={`mt-1 text-sm ${muted}`} dangerouslySetInnerHTML={{ __html: p.desc }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {page === 'Skills' && (
          <section className="px-4 py-16">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-center text-3xl font-bold">Keahlian</h2>
              <p className={`mt-2 text-center ${muted}`}>Teknologi dan tools yang saya kuasai.</p>

              <div className="mt-10 space-y-10">
                {skillCategories.map((cat) => (
                  <div key={cat.name}>
                    <h3 className="mb-4 text-lg font-bold text-primary">{cat.name}</h3>
                    <div className="space-y-4">
                      {cat.skills.map((skill) => (
                        <div key={skill.name}>
                          <div className="mb-1.5 flex justify-between text-sm">
                            <span className="font-medium">{skill.name}</span>
                            <span className={muted}>{skill.level}%</span>
                          </div>
                          <div className={`h-2.5 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}>
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-primary to-blue-400 transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {page === 'Contact' && (
          <section className="px-4 py-16">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-3xl font-bold">Hubungi Saya</h2>
              <p className={`mt-2 ${muted}`}>Ada project atau kesempatan kerja? Yuk diskusi!</p>

              <div className="mt-10 space-y-4 text-left">
                <div>
                  <label className={`mb-1 block text-sm font-medium ${muted}`}>Nama</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-primary/30 ${
                      isDark ? 'border-gray-700 bg-gray-800 text-white' : 'border-gray-300 bg-white text-gray-900'
                    }`}
                    readOnly
                  />
                </div>
                <div>
                  <label className={`mb-1 block text-sm font-medium ${muted}`}>Email</label>
                  <input
                    type="email"
                    placeholder="john@email.com"
                    className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-primary/30 ${
                      isDark ? 'border-gray-700 bg-gray-800 text-white' : 'border-gray-300 bg-white text-gray-900'
                    }`}
                    readOnly
                  />
                </div>
                <div>
                  <label className={`mb-1 block text-sm font-medium ${muted}`}>Pesan</label>
                  <textarea
                    rows={4}
                    placeholder="Tulis pesanmu di sini..."
                    className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-primary/30 ${
                      isDark ? 'border-gray-700 bg-gray-800 text-white' : 'border-gray-300 bg-white text-gray-900'
                    }`}
                    readOnly
                  />
                </div>
                <button className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-xl">
                  Kirim Pesan
                </button>
              </div>

              <div className={`mt-8 flex justify-center gap-4 text-sm ${muted}`}>
                <span>farhan@email.com</span>
                <span>&middot;</span>
                <span>+62 812 3456 7890</span>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer className={`border-t px-4 py-6 text-center text-sm ${muted} ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        &copy; 2026 Farhan &middot; All rights reserved &middot; Built with Next.js & Tailwind CSS
      </footer>
    </div>
  )
}
