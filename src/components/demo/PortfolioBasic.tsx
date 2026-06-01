export default function PortfolioBasicDemo() {
  return (
    <div className="bg-white">
      <section className="flex min-h-[70vh] items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 px-4">
        <div className="max-w-2xl text-center text-white">
          <div className="mx-auto mb-6 h-24 w-24 rounded-full border-4 border-white/50 bg-white/10" />
          <h1 className="text-4xl font-bold md:text-5xl">Ahmad Rizki</h1>
          <p className="mt-3 text-lg text-white/80">Full-Stack Developer & UI Designer</p>
          <p className="mx-auto mt-6 max-w-md text-white/60">
            Membangun produk digital yang berdampak — dari frontend hingga backend.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <span className="rounded-lg border border-white/30 px-5 py-2 text-sm text-white/80">GitHub</span>
            <span className="rounded-lg border border-white/30 px-5 py-2 text-sm text-white/80">LinkedIn</span>
            <span className="rounded-lg border border-white/30 px-5 py-2 text-sm text-white/80">Email</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20">
        <h2 className="text-center text-2xl font-bold text-gray-900">Skill & Teknologi</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Figma', 'Git', 'Docker'].map((s) => (
            <div key={s} className="rounded-xl border bg-white p-4 text-center text-sm font-medium text-gray-700">
              {s}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-gray-900">Pengalaman</h2>
          {[
            { title: 'Frontend Developer', company: 'Tech Corp', year: '2024–Sekarang' },
            { title: 'Junior Developer', company: 'Startup XYZ', year: '2022–2024' },
          ].map((exp) => (
            <div key={exp.title} className="mt-6 rounded-xl border bg-white p-6">
              <h3 className="font-bold text-gray-900">{exp.title}</h3>
              <p className="text-sm text-gray-500">{exp.company} &middot; {exp.year}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 text-center text-sm text-gray-400">
        &copy; 2026 Ahmad Rizki. All rights reserved.
      </section>
    </div>
  )
}
