export default function ResumeCVWebsiteDemo() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dian Permata</h1>
            <p className="mt-1 text-lg text-gray-500">Product Designer</p>
            <p className="mt-1 text-sm text-gray-400">dian.permata@email.com &middot; +62 812 3456 7890</p>
          </div>
          <div className="rounded-xl border-2 border-dashed border-gray-300 px-4 py-2 text-sm text-gray-400">
            Download PDF
          </div>
        </div>

        <hr className="my-6 border-gray-200" />

        <section>
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400">Profile</h2>
          <p className="mt-2 leading-relaxed text-gray-600">
            Product Designer dengan 4+ tahun pengalaman di perusahaan rintisan dan agensi digital. 
            Spesialis dalam UI/UX design, design systems, dan user research.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400">Pengalaman</h2>
          {[
            { role: 'Senior Product Designer', company: 'TechCorp Indonesia', period: '2023–Sekarang' },
            { role: 'UI/UX Designer', company: 'Digital Agency', period: '2021–2023' },
            { role: 'Junior Designer', company: 'StartupXYZ', period: '2020–2021' },
          ].map((exp) => (
            <div key={exp.role} className="mt-4">
              <h3 className="font-bold text-gray-900">{exp.role}</h3>
              <p className="text-sm text-gray-500">{exp.company} &middot; {exp.period}</p>
              <p className="mt-1 text-sm text-gray-500">
                Mendesain dan mengirimkan fitur produk yang berdampak pada pertumbuhan 30% engagement.
              </p>
            </div>
          ))}
        </section>

        <section className="mt-8">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400">Pendidikan</h2>
          <div className="mt-4">
            <h3 className="font-bold text-gray-900">S1 Desain Komunikasi Visual</h3>
            <p className="text-sm text-gray-500">Universitas Indonesia &middot; 2016–2020</p>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400">Skill</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {['Figma', 'Sketch', 'Adobe XD', 'User Research', 'Prototyping', 'Design System', 'HTML/CSS', 'Framer'].map((s) => (
              <span key={s} className="rounded-full bg-gray-100 px-4 py-1 text-sm text-gray-700">{s}</span>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
