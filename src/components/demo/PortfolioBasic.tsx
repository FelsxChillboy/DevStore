export default function PortfolioBasicDemo() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="flex min-h-[70vh] items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 px-4">
        <div className="max-w-2xl text-center text-white">
          <img
            src="https://i.pravatar.cc/160?u=ahmadbasic"
            alt="Ahmad Rizki"
            className="mx-auto mb-6 h-28 w-28 rounded-full border-4 border-white/50 object-cover shadow-lg"
          />
          <h1 className="text-4xl font-bold md:text-5xl">Ahmad Rizki</h1>
          <p className="mt-3 text-lg text-white/80">Full-Stack Developer & UI Designer</p>
          <p className="mx-auto mt-6 max-w-md text-white/60">
            Membangun produk digital yang berdampak — dari frontend hingga backend.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <span className="cursor-pointer rounded-lg border border-white/30 px-5 py-2 text-sm text-white/80 transition-colors hover:bg-white/10">GitHub</span>
            <span className="cursor-pointer rounded-lg border border-white/30 px-5 py-2 text-sm text-white/80 transition-colors hover:bg-white/10">LinkedIn</span>
            <span className="cursor-pointer rounded-lg border border-white/30 px-5 py-2 text-sm text-white/80 transition-colors hover:bg-white/10">Email</span>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-4xl px-4 py-20">
        <h2 className="text-center text-2xl font-bold text-gray-900">Skill & Teknologi</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { name: 'React / Next.js', img: 'https://picsum.photos/seed/reacticon/100/100' },
            { name: 'TypeScript', img: 'https://picsum.photos/seed/tsicon/100/100' },
            { name: 'Tailwind CSS', img: 'https://picsum.photos/seed/tailwindicon/100/100' },
            { name: 'Node.js', img: 'https://picsum.photos/seed/nodeicon/100/100' },
            { name: 'PostgreSQL', img: 'https://picsum.photos/seed/postgresicon/100/100' },
            { name: 'Figma', img: 'https://picsum.photos/seed/figmaicon/100/100' },
            { name: 'Git', img: 'https://picsum.photos/seed/giticon/100/100' },
            { name: 'Docker', img: 'https://picsum.photos/seed/dockericon/100/100' },
          ].map((s) => (
            <div key={s.name} className="rounded-xl border bg-white p-4 text-center transition-all hover:border-blue-200 hover:shadow-sm">
              <img src={s.img} alt={s.name} className="mx-auto mb-3 h-10 w-10 rounded-lg object-cover" />
              <span className="text-sm font-medium text-gray-700">{s.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="bg-gray-50 px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-gray-900">Pengalaman</h2>
          {[
            { title: 'Frontend Developer', company: 'Tech Corp', year: '2024–Sekarang', img: 'https://picsum.photos/seed/techcorp/800/400' },
            { title: 'Junior Developer', company: 'Startup XYZ', year: '2022–2024', img: 'https://picsum.photos/seed/startupxyz/800/400' },
          ].map((exp) => (
            <div key={exp.title} className="mt-6 overflow-hidden rounded-xl border bg-white transition-all hover:shadow-md">
              <img src={exp.img} alt={exp.company} className="h-40 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-gray-900">{exp.title}</h3>
                <p className="text-sm text-gray-500">{exp.company} &middot; {exp.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-16 text-center text-white">
        <h2 className="text-2xl font-bold">Tertarik Bekerja Sama?</h2>
        <p className="mt-2 text-white/70">Hubungi saya untuk diskusi project atau peluang kerja.</p>
        <div className="mt-6 flex justify-center gap-3">
          <span className="cursor-pointer rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition-all hover:bg-blue-50">Email Saya</span>
          <span className="cursor-pointer rounded-lg border border-white/30 px-6 py-3 text-sm text-white/80 transition-colors hover:bg-white/10">Download CV</span>
        </div>
      </section>

      {/* Footer */}
      <section className="px-4 py-12 text-center text-sm text-gray-400">
        &copy; 2026 Ahmad Rizki. All rights reserved.
      </section>
    </div>
  )
}
