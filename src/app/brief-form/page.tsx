'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { buildWaUrl } from '@/lib/utils'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const briefSchema = z.object({
  nama: z.string().min(1, 'Nama wajib diisi'),
  usaha: z.string().min(1, 'Nama usaha wajib diisi'),
  jenis: z.string().min(1, 'Pilih jenis usaha'),
  deskripsi: z.string().min(1, 'Deskripsi wajib diisi'),
  target: z.string().optional(),
  unggulan: z.string().optional(),
  warna: z.string().optional(),
  contoh: z.string().optional(),
  wa: z.string().min(1, 'Nomor WhatsApp wajib diisi'),
  alamat: z.string().optional(),
  foto: z.string().optional(),
  paket: z.string().min(1, 'Pilih paket'),
  catatan: z.string().optional(),
})

type BriefForm = z.infer<typeof briefSchema>

const PAKET_LIST = [
  { label: 'Starter', value: 'Starter - Rp150.000', sub: 'Rp150K' },
  { label: 'Professional', value: 'Professional - Rp300.000', sub: 'Rp300K' },
  { label: 'Premium', value: 'Premium - Rp500.000', sub: 'Rp500K' },
]

export default function BriefFormPage() {
  const [submitting, setSubmitting] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm<BriefForm>({
    resolver: zodResolver(briefSchema),
  })

  const onSubmit = (data: BriefForm) => {
    setSubmitting(true)

    const message = `ORDER LANDING PAGE DevStore

🧑 Nama: ${data.nama}
🏪 Nama Usaha: ${data.usaha}
📂 Jenis: ${data.jenis}
📝 Deskripsi: ${data.deskripsi}
🎯 Target Pelanggan: ${data.target || '-'}
⭐ Produk Unggulan: ${data.unggulan || '-'}
🎨 Warna Brand: ${data.warna || '-'}
🔗 Contoh Website: ${data.contoh || '-'}
📱 WA Bisnis: ${data.wa}
📍 Alamat: ${data.alamat || '-'}
🖼️ Link Foto: ${data.foto || '-'}
📦 Paket: ${data.paket}
📋 Catatan: ${data.catatan || '-'}

Mohon segera dikonfirmasi, terima kasih kak!`

    window.open(buildWaUrl(message), '_blank')
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

          <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl border border-border bg-white p-6 md:p-8 space-y-5">
            <Input label="Nama Pemilik Usaha" required error={errors.nama?.message} placeholder="Masukkan nama lengkap" {...register('nama')} />
            <Input label="Nama Usaha / Brand" required error={errors.usaha?.message} placeholder="Nama toko, warung, atau brand kamu" {...register('usaha')} />

            <div>
              <label className="input-label">Jenis Usaha <span className="text-red-500">*</span></label>
              <select className="input-field" {...register('jenis')}>
                <option value="">Pilih jenis usaha</option>
                <option value="Kuliner">Kuliner / Makanan</option>
                <option value="Fashion">Fashion / Busana</option>
                <option value="Jasa">Jasa / Service</option>
                <option value="Toko Online">Toko Online</option>
                <option value="Lainnya">Lainnya</option>
              </select>
              {errors.jenis && <p className="mt-1 text-xs text-red-500">{errors.jenis.message}</p>}
            </div>

            <Textarea label="Deskripsi Usaha" required error={errors.deskripsi?.message} placeholder="Ceritakan tentang usaha kamu secara singkat" {...register('deskripsi')} />
            <Input label="Target Pelanggan" placeholder="Contoh: mahasiswa, ibu rumah tangga, pekerja kantoran" {...register('target')} />
            <Textarea label="Produk / Layanan Unggulan" placeholder="Sebutkan 3-5 produk/layanan terlaris kamu" {...register('unggulan')} />
            <Input label="Warna Favorit / Referensi Brand" placeholder="Contoh: hijau tosca + putih, atau link referensi" {...register('warna')} />
            <Input label="Contoh Website yang Disukai (opsional)" placeholder="https://contoh-website.com" {...register('contoh')} />
            <Input label="Nomor WhatsApp Bisnis" required error={errors.wa?.message} placeholder="08xxxxxxxxxx" type="tel" {...register('wa')} />
            <Textarea label="Alamat / Lokasi Usaha" placeholder="Alamat lengkap lokasi usaha" {...register('alamat')} />
            <Input label="Link Foto Produk (Google Drive)" placeholder="https://drive.google.com/..." type="url" {...register('foto')} />

            <div>
              <label className="input-label">Paket yang Dipilih <span className="text-red-500">*</span></label>
              <div className="flex gap-3 mt-1.5 flex-wrap">
                {PAKET_LIST.map((p) => (
                  <label
                    key={p.value}
                    className="flex cursor-pointer items-center gap-2 rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-secondary transition-all hover:border-primary/40 has-checked:border-primary has-checked:bg-primary-light has-checked:text-primary"
                  >
                    <input
                      type="radio"
                      value={p.value}
                      className="sr-only"
                      {...register('paket')}
                    />
                    <div>
                      <span className="font-medium">{p.label}</span>
                      <br />
                      <span className="text-xs text-text-muted">{p.sub}</span>
                    </div>
                  </label>
                ))}
              </div>
              {errors.paket && <p className="mt-1 text-xs text-red-500">{errors.paket.message}</p>}
            </div>

            <Textarea label="Catatan Tambahan" placeholder="Ada request khusus?" {...register('catatan')} />

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

function Input({ label, placeholder, type = 'text', required, error, ...props }: {
  label: string; placeholder: string; type?: string; required?: boolean; error?: string
  [key: string]: unknown
}) {
  return (
    <div>
      <label className="input-label">{label} {required && <span className="text-red-500">*</span>}</label>
      <input type={type} className="input-field" placeholder={placeholder} {...props} />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
}

function Textarea({ label, placeholder, required, error, ...props }: {
  label: string; placeholder: string; required?: boolean; error?: string
  [key: string]: unknown
}) {
  return (
    <div>
      <label className="input-label">{label} {required && <span className="text-red-500">*</span>}</label>
      <textarea className="input-field" rows={3} placeholder={placeholder} {...props} />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
}
