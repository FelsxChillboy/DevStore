'use client'

import { useState, useEffect, ReactNode } from 'react'

export default function LoadingScreen({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  if (!loading) return <>{children}</>

  return (
    <>
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white animate-in fade-in duration-300">
        <div className="flex flex-col items-center gap-6">
          <div className="h-16 w-16 animate-float">
            <svg viewBox="0 0 36 36" fill="none" className="h-full w-full">
              <rect width="36" height="36" rx="8" fill="#2563EB" />
              <path d="M14 11L9 18L14 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 11L27 18L22 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18 10L18 26" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1.5 3" />
            </svg>
          </div>
          <h1 className="font-heading text-3xl font-bold text-text">DevStore</h1>
        </div>
      </div>
      <div className="hidden">{children}</div>
    </>
  )
}
