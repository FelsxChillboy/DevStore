'use client'

import { useState, useEffect, ReactNode } from 'react'

export default function LoadingScreen({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => setLoading(false), 600)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (!loading) return <>{children}</>

  return (
    <>
      <div
        className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-all duration-500 ${
          fadeOut ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          <div className="h-16 w-16 animate-float">
            <svg viewBox="0 0 36 36" fill="none" className="h-full w-full">
              <rect width="36" height="36" rx="8" fill="#2563EB" />
              <path d="M14 11L9 18L14 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 11L27 18L22 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18 10L18 26" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1.5 3" />
            </svg>
          </div>

          <div className="text-center">
            <h1 className="font-heading text-3xl font-bold text-text">DevStore</h1>
            <p className="mt-1 text-sm text-text-muted">Loading...</p>
          </div>

          <div className="h-2 w-48 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-primary transition-all duration-100 ease-linear"
              style={{ animation: 'progress 5s ease-in-out forwards' }}
            />
          </div>
        </div>
      </div>

      <div className={fadeOut ? '' : 'hidden'}>
        {children}
      </div>
    </>
  )
}
