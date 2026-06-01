const STEPS = [
  { num: 1, title: 'Pilih Paket', desc: 'Lihat-lihat dulu produk kami, pilih yang sesuai kebutuhanmu' },
  { num: 2, title: 'Isi Form', desc: 'Lengkapi data diri dan link CV (kalau order jasa)' },
  { num: 3, title: 'Submit', desc: 'Otomatis terhubung ke WhatsApp admin kami' },
  { num: 4, title: 'Konfirmasi & Bayar', desc: 'Admin konfirmasi pesananmu, lalu transfer ke rekening yang diberikan' },
  { num: 5, title: 'Proses', desc: 'Tim kami mulai mengerjakan pesananmu sesuai paket' },
  { num: 6, title: 'Terima Hasil', desc: 'File dikirim via WhatsApp atau Email' },
]

export default function HowToOrder() {
  return (
    <section id="cara-order" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="divider-gradient" />
      <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent/5 blur-3xl animate-float-delayed" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge border-primary/20 bg-primary-light text-primary mb-4">Cara Order</span>
          <h2 className="font-heading text-3xl font-bold text-text md:text-4xl">Gampang Banget, Tinggal Ikuti!</h2>
          <p className="mt-3 text-text-secondary">Cuma 6 langkah mudah, produk impian langsung jadi</p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/30 via-accent/20 to-transparent md:block" />

          <div className="grid gap-8 md:grid-cols-2">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                data-aos="fade-up"
                data-aos-delay={String(i * 100)}
                className={`flex flex-col items-center gap-3 rounded-xl border border-border bg-white p-6 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-md ${
                  i % 2 === 1 ? 'md:translate-y-12' : ''
                }`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-white shadow-md">
                  {step.num}
                </div>
                <h3 className="font-heading text-lg font-bold text-text">{step.title}</h3>
                <p className="text-sm text-text-secondary">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
