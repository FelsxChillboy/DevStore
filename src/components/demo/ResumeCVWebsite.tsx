export default function ResumeCVWebsiteDemo() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-4 py-12">
        {/* Header */}
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <img
              src="https://i.pravatar.cc/100?u=dianresume"
              alt="Dian Permata"
              className="h-20 w-20 rounded-xl border-2 border-gray-200 object-cover shadow-sm"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dian Permata</h1>
              <p className="mt-1 text-lg text-gray-500">Product Designer</p>
              <p className="mt-1 text-sm text-gray-400">dian.permata@email.com &middot; +62 812 3456 7890</p>
            </div>
          </div>
          <div className="flex cursor-pointer items-center gap-2 rounded-xl border-2 border-dashed border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-500 transition-all hover:border-primary hover:text-primary">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            Download PDF
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* Profile */}
        <section>
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400">Profile</h2>
          <p className="mt-3 leading-relaxed text-gray-600">
            Product Designer dengan 4+ tahun pengalaman di perusahaan rintisan dan agensi digital.
            Spesialis dalam UI/UX design, design systems, dan user research.
          </p>
        </section>

        {/* Experience */}
        <section className="mt-10">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400">Pengalaman</h2>
          {[
            { role: 'Senior Product Designer', company: 'TechCorp Indonesia', period: '2023–Sekarang', img: 'https://picsum.photos/seed/techcorpdes/600/300' },
            { role: 'UI/UX Designer', company: 'Digital Agency', period: '2021–2023', img: 'https://picsum.photos/seed/digides/600/300' },
            { role: 'Junior Designer', company: 'StartupXYZ', period: '2020–2021', img: 'https://picsum.photos/seed/startupdes/600/300' },
          ].map((exp) => (
            <div key={exp.role} className="mt-6 overflow-hidden rounded-xl border border-gray-200 transition-all hover:shadow-md">
              <img src={exp.img} alt={exp.company} className="h-32 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-bold text-gray-900">{exp.role}</h3>
                <p className="text-sm text-gray-500">{exp.company} &middot; {exp.period}</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  Mendesain dan mengirimkan fitur produk yang berdampak pada pertumbuhan 30% engagement.
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="mt-10">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400">Pendidikan</h2>
          <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-bold text-gray-900">S1 Desain Komunikasi Visual</h3>
            <p className="text-sm text-gray-500">Universitas Indonesia &middot; 2016–2020 &middot; Cum Laude</p>
          </div>
        </section>

        {/* Skills */}
        <section className="mt-10">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400">Skill</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              { name: 'Figma', color: 'bg-purple-100 text-purple-700' },
              { name: 'Sketch', color: 'bg-yellow-100 text-yellow-700' },
              { name: 'Adobe XD', color: 'bg-pink-100 text-pink-700' },
              { name: 'User Research', color: 'bg-blue-100 text-blue-700' },
              { name: 'Prototyping', color: 'bg-green-100 text-green-700' },
              { name: 'Design System', color: 'bg-indigo-100 text-indigo-700' },
              { name: 'HTML/CSS', color: 'bg-orange-100 text-orange-700' },
              { name: 'Framer', color: 'bg-cyan-100 text-cyan-700' },
            ].map((s) => (
              <span key={s.name} className={`rounded-full px-4 py-1.5 text-sm font-medium ${s.color}`}>{s.name}</span>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
