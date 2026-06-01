'use client'

import { useState, useEffect } from 'react'

function Countdown() {
  const target = new Date()
  target.setDate(target.getDate() + 30)

  const calc = () => {
    const d = target.getTime() - Date.now()
    if (d <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 }
    return {
      days: Math.floor(d / 86400000),
      hours: Math.floor((d % 86400000) / 3600000),
      mins: Math.floor((d % 3600000) / 60000),
      secs: Math.floor((d % 60000) / 1000),
    }
  }

  const [time, setTime] = useState(calc)

  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex gap-4 md:gap-8">
      {[
        { label: 'Hari', value: time.days },
        { label: 'Jam', value: time.hours },
        { label: 'Menit', value: time.mins },
        { label: 'Detik', value: time.secs },
      ].map((t) => (
        <div key={t.label} className="text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-2xl font-bold backdrop-blur md:h-20 md:w-20 md:text-3xl">
            {String(t.value).padStart(2, '0')}
          </div>
          <p className="mt-1 text-xs text-white/60">{t.label}</p>
        </div>
      ))}
    </div>
  )
}

export default function ComingSoonTemplateDemo() {
  const [email, setEmail] = useState('')

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 px-4">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 25% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)'
      }} />
      <div className="relative z-10 w-full max-w-lg text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 text-2xl">
          &#9733;
        </div>
        <h1 className="text-3xl font-bold text-white md:text-4xl">Something Amazing Is Coming</h1>
        <p className="mt-3 text-purple-200/70">Kami sedang membangun sesuatu yang luar biasa. Tinggalkan emailmu untuk notifikasi pertama.</p>
        <div className="mt-10 flex justify-center">
          <Countdown />
        </div>
        <div className="mx-auto mt-10 flex max-w-sm gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukkan email"
            className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-purple-400"
          />
          <button className="rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-purple-500/25">
            Daftar
          </button>
        </div>
        <p className="mt-4 text-xs text-white/30">No spam. Unsubscribe anytime.</p>
      </div>
    </div>
  )
}
