export default function DevKitComponentsDemo() {
  const sections = ['Navbar', 'Hero', 'Features', 'Pricing', 'Team', 'Testimonials', 'FAQ', 'Footer']

  return (
    <div className="bg-white min-h-screen">
      <header className="border-b bg-white px-4 py-3">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <span className="font-bold text-primary">DevKit</span>
          <nav className="flex gap-4 text-sm text-gray-600">
            {sections.slice(0, 4).map((s) => (
              <span key={s} className="cursor-pointer hover:text-primary">{s}</span>
            ))}
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 px-4 py-20 text-center text-white">
        <p className="text-sm uppercase tracking-widest text-blue-200">UI Component Kit</p>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">20+ Komponen <span className="text-blue-200">Tailwind</span> Siap Pakai</h1>
        <p className="mx-auto mt-4 max-w-lg text-blue-100/70">Copy, paste, dan kustomisasi. Komponen siap pakai untuk project Next.js atau React kamu.</p>
        <div className="mt-8 flex justify-center gap-3">
          <span className="rounded-lg bg-white px-6 py-2 text-sm font-semibold text-blue-700">Lihat Komponen</span>
          <span className="rounded-lg border border-white/30 px-6 py-2 text-sm text-white/80">Dokumentasi</span>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-center text-2xl font-bold text-gray-900">Komponen Tersedia</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {sections.map((s) => (
            <div key={s} className="rounded-xl border border-gray-200 p-5 text-center transition-all hover:border-blue-200 hover:shadow-sm">
              <div className="mx-auto mb-2 h-10 w-10 rounded-lg bg-blue-100" />
              <p className="text-sm font-medium text-gray-700">{s}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-gray-900">Preview Pricing</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { name: 'Starter', price: 'Gratis', features: ['5 komponen', 'Basic styling', 'Docs PDF'] },
              { name: 'Pro', price: 'Rp35K', features: ['20+ komponen', 'Dark & Light mode', 'Responsive', 'Source code'] },
              { name: 'Enterprise', price: 'Custom', features: ['Semua komponen', 'Custom request', 'Priority support'] },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-xl border p-6 text-center ${plan.name === 'Pro' ? 'border-blue-200 bg-white shadow-lg shadow-blue-100' : 'border-gray-200 bg-white'}`}>
                {plan.name === 'Pro' && <p className="mb-2 text-xs font-semibold uppercase text-blue-600">Terpopuler</p>}
                <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-2xl font-bold text-primary">{plan.price}</p>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="text-sm text-gray-600">{f}</li>
                  ))}
                </ul>
                <button className={`mt-6 w-full rounded-lg py-2 text-sm font-medium ${plan.name === 'Pro' ? 'bg-primary text-white' : 'border border-gray-300 text-gray-700'}`}>
                  Pilih {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
