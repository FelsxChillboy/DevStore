'use client'

import { useState } from 'react'
import { WA_ADMIN } from '@/lib/utils'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

type Paket = 'Starter - Rp150.000' | 'Professional - Rp300.000' | 'Premium - Rp500.000'

const PAKET_LIST: { label: string; value: Paket; sub: string }[] = [
  { label: 'Starter', value: 'Starter - Rp150.000', sub: 'Rp150K' },
  { label: 'Professional', value: 'Professional - Rp300.000', sub: 'Rp300K' },
  { label: 'Premium', value: 'Premium - Rp500.000', sub: 'Rp500K' },
]

export default function BriefFormPage() {
  const [form, setForm] = useState({
    nama: '', usaha: '', jenis: '', deskripsi: '', target: '',
    unggulan: '', warna: '', contoh: '', wa: '', alamat: '',
    foto: '', paket: '' as Paket | '', catatan: '',
  })
  const [submitting, setSubmitting] = useState(false)

  const update = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    const message = `ORDER LANDING PAGE DevStore

🧑 Nama: ${form.nama || '-'}
🏪 Nama Usaha: ${form.usaha || '-'}
📂 Jenis: ${form.jenis || '-'}
📝 Deskripsi: ${form.deskripsi || '-'}
🎯 Target Pelanggan: ${form.target || '-'}
⭐ Produk Unggulan: ${form.unggulan || '-'}
🎨 Warna Brand: ${form.warna || '-'}
🔗 Contoh Website: ${form.contoh || '-'}
📱 WA Bisnis: ${form.wa || '-'}
📍 Alamat: ${form.alamat || '-'}
🖼️ Link Foto: ${form.foto || '-'}
📦 Paket: ${form.paket || '-'}
📋 Catatan: ${form.catatan || '-'}

Mohon segera dikonfirmasi, terima kasih kak!`

    window.open(`https://wa.me/${WA_ADMIN}?text=${encodeURIComponent(message)}`, '_blank')
    setTimeout(() => setSubmitting(false), 3000)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-muted pt-24 pb-12">
        <div className="mx-auto max-w-2xl px-4">
          <div className="text-center mb-8">
            <span className="badge border-primary/20 bg-primary-light text-primary mb-4">Order Landing Page</span>
            <h1 className="font-heading text-3xl font-bold text-text">Isi Brief Pesananmu</h1>
            <p className="mt-2 text-text-secondary">Lengkapi form di bawah, tim kami akan proses dalam 1x24 jam</p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-white p-6 md:p-8 space-y-5">
            <Input label="Nama Pemilik Usaha" required value={form.nama} onChange={(v) => update('nama', v)} placeholder="Masukkan nama lengkap" />
            <Input label="Nama Usaha / Brand" required value={form.usaha} onChange={(v) => update('usaha', v)} placeholder="Nama toko, warung, atau brand kamu" />

            <div>
              <label className="input-label">Jenis Usaha <span className="text-red-500">*</span></label>
              <select className="input-field" required value={form.jenis} onChange={(e) => update('jenis', e.target.value)}>
                <option value="">Pilih jenis usaha</option>
                <option value="Kuliner">Kuliner / Makanan</option>
                <option value="Fashion">Fashion / Busana</option>
                <option value="Jasa">Jasa / Service</option>
                <option value="Toko Online">Toko Online</option>
                <option value="Lainnya">Lainnya</option>
              </select>
            </div>

            <Textarea label="Deskripsi Usaha" required value={form.deskripsi} onChange={(v) => update('deskripsi', v)} placeholder="Ceritakan tentang usaha kamu secara singkat" />
            <Input label="Target Pelanggan" value={form.target} onChange={(v) => update('target', v)} placeholder="Contoh: mahasiswa, ibu rumah tangga, pekerja kantoran" />
            <Textarea label="Produk / Layanan Unggulan" value={form.unggulan} onChange={(v) => update('unggulan', v)} placeholder="Sebutkan 3-5 produk/layanan terlaris kamu" />
            <Input label="Warna Favorit / Referensi Brand" value={form.warna} onChange={(v) => update('warna', v)} placeholder="Contoh: hijau tosca + putih, atau link referensi" />
            <Input label="Contoh Website yang Disukai (opsional)" value={form.contoh} onChange={(v) => update('contoh', v)} placeholder="https://contoh-website.com" />
            <Input label="Nomor WhatsApp Bisnis" required value={form.wa} onChange={(v) => update('wa', v)} placeholder="08xxxxxxxxxx" type="tel" />
            <Textarea label="Alamat / Lokasi Usaha" value={form.alamat} onChange={(v) => update('alamat', v)} placeholder="Alamat lengkap lokasi usaha" />
            <Input label="Link Foto Produk (Google Drive)" value={form.foto} onChange={(v) => update('foto', v)} placeholder="https://drive.google.com/..." type="url" />

            <div>
              <label className="input-label">Paket yang Dipilih <span className="text-red-500">*</span></label>
              <div className="flex gap-3 mt-1.5 flex-wrap">
                {PAKET_LIST.map((p) => (
                  <label
                    key={p.value}
                    className={`flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-3 text-sm transition-all ${
                      form.paket === p.value
                        ? 'border-primary bg-primary-light text-primary'
                        : 'border-border bg-white text-text-secondary hover:border-primary/40'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paket"
                      value={p.value}
                      checked={form.paket === p.value}
                      onChange={(e) => update('paket', e.target.value)}
                      className="sr-only"
                    />
                    <div>
                      <span className="font-medium">{p.label}</span>
                      <br />
                      <span className="text-xs text-text-muted">{p.sub}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <Textarea label="Catatan Tambahan" value={form.catatan} onChange={(v) => update('catatan', v)} placeholder="Ada request khusus?" />

            <button type="submit" disabled={submitting} className="btn-primary w-full text-base">
              {submitting ? 'Memproses...' : 'Kirim Brief → Hubungi WA Admin'}
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-text-muted">
            Dengan klik kirim, kamu akan diarahkan ke WhatsApp admin — tim kami akan konfirmasi maksimal 1x24 jam
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}

function Input({ label, value, onChange, placeholder, required, type = 'text' }: {
  label: string; value: string; onChange: (v: string) => void; placeholder: string; required?: boolean; type?: string
}) {
  return (
    <div>
      <label className="input-label">{label} {required && <span className="text-red-500">*</span>}</label>
      <input type={type} className="input-field" required={required} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
    </div>
  )
}

function Textarea({ label, value, onChange, placeholder, required }: {
  label: string; value: string; onChange: (v: string) => void; placeholder: string; required?: boolean
}) {
  return (
    <div>
      <label className="input-label">{label} {required && <span className="text-red-500">*</span>}</label>
      <textarea className="input-field" rows={3} required={required} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
    </div>
  )
}
