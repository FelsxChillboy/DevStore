'use client'

import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { getProductById } from '@/data/products'
import { formatPrice, buildWaUrl, Product } from '@/lib/utils'

const orderSchema = z.object({
  name: z.string().min(1, 'Nama lengkap wajib diisi'),
  wa: z.string().min(1, 'Nomor WhatsApp wajib diisi'),
  email: z.string().optional(),
  cvLink: z.string().optional(),
  description: z.string().optional(),
  notes: z.string().optional(),
})

type FormData = z.infer<typeof orderSchema>

export default function OrderModal() {
  const [open, setOpen] = useState(false)
  const [productId, setProductId] = useState<number | null>(null)
  const [productType, setProductType] = useState<string>('template')
  const [submitting, setSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const isService = productType === 'service'

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(orderSchema),
  })

  const product: Product | null = productId ? getProductById(productId) ?? null : null

  const openModal = useCallback((e: Event) => {
    const detail = (e as CustomEvent).detail
    setProductId(detail.id)
    setProductType(detail.type)
    reset()
    setOpen(true)
  }, [reset])

  useEffect(() => {
    window.addEventListener('open-modal', openModal)
    return () => window.removeEventListener('open-modal', openModal)
  }, [openModal])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const productPrice = product
    ? product.priceDisplay || formatPrice(product.price)
    : ''

  const onSubmit = (data: FormData) => {
    if (!product) return

    if (isService && (!data.email || !data.cvLink)) {
      alert('Harap isi Email dan Link CV untuk order jasa!')
      return
    }

    const message = isService
      ? `Halo DevStore! Saya ingin ORDER JASA PORTFOLIO:

📦 Paket: ${product.name}
💰 Harga: ${productPrice}
👤 Nama: ${data.name}
📱 WA: ${data.wa}
📧 Email: ${data.email || '-'}
📎 Link CV: ${data.cvLink || '-'}
📝 Deskripsi: ${data.description || '-'}
📋 Catatan: ${data.notes || '-'}

Mohon segera dikonfirmasi, terima kasih!`
      : `Halo DevStore, saya ingin order:

📦 Produk: ${product.name}
💰 Harga: ${productPrice}
👤 Nama: ${data.name}
📱 WA: ${data.wa}
📝 Catatan: ${data.notes || '-'}

Mohon konfirmasinya, terima kasih!`

    setSubmitting(true)
    window.open(buildWaUrl(message), '_blank')
    setSubmitting(false)
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      setOpen(false)
    }, 3000)
  }

  if (!open) return null

  return createPortal(
    <div>
      <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}>
        <div className="modal-content animate-in fade-in zoom-in duration-300">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 rounded-lg p-1 text-text-muted transition-colors hover:text-text"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="mb-6">
            <h3 className="font-heading text-2xl font-bold text-text">
              {product ? `Order ${product.name}` : 'Order'}
            </h3>
            <p className="mt-1 text-sm text-text-secondary">{productPrice}</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="input-label">Nama Lengkap <span className="text-red-500">*</span></label>
              <input id="name" type="text" className="input-field" placeholder="Masukkan nama lengkap" {...register('name')} />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="wa" className="input-label">Nomor WhatsApp <span className="text-red-500">*</span></label>
              <input id="wa" type="tel" className="input-field" placeholder="08xxxxxxxxxx" {...register('wa')} />
              {errors.wa && <p className="mt-1 text-xs text-red-500">{errors.wa.message}</p>}
            </div>

            {isService && (
              <>
                <div>
                  <label htmlFor="email" className="input-label">Email <span className="text-red-500">*</span></label>
                  <input id="email" type="email" className="input-field" placeholder="contoh@email.com" {...register('email')} />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="cvLink" className="input-label">Link CV / Google Drive <span className="text-red-500">*</span></label>
                  <input id="cvLink" type="url" className="input-field" placeholder="https://drive.google.com/..." {...register('cvLink')} />
                  {errors.cvLink && <p className="mt-1 text-xs text-red-500">{errors.cvLink.message}</p>}
                  <p className="mt-1 text-xs text-text-muted">Upload CV ke Google Drive dulu, lalu paste link-nya di sini</p>
                </div>
                <div>
                  <label htmlFor="description" className="input-label">Deskripsi Singkat</label>
                  <textarea id="description" className="input-field" rows={3} placeholder="Jurusan / semester / pengalaman organisasi / dll" {...register('description')} />
                </div>
              </>
            )}

            <div>
              <label htmlFor="notes" className="input-label">Catatan Tambahan</label>
              <textarea id="notes" className="input-field" rows={2} placeholder="Ada request khusus?" {...register('notes')} />
            </div>

            <button type="submit" disabled={submitting} className="btn-primary w-full text-base">
              {submitting ? 'Memproses...' : 'Submit & Hubungi WA'}
            </button>
            <p className="text-center text-xs text-text-muted">Dengan klik submit, kamu akan diarahkan ke WhatsApp admin</p>
          </form>
        </div>
      </div>

      {showSuccess && (
        <div className="toast">
          <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="font-medium">Pesanan terkirim!</p>
            <p className="text-sm text-white/80">Kami akan menghubungi Anda segera</p>
          </div>
        </div>
      )}
    </div>,
    document.body
  )
}
