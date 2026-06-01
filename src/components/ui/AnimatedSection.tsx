'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  animation?: string
  delay?: number
  duration?: number
}

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 800,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    async function initAOS() {
      const AOS = (await import('aos')).default
      await import('aos/dist/aos.css')
      AOS.init({
        duration,
        easing: 'ease-out-cubic',
        once: true,
        offset: 60,
        disable: 'mobile',
      })
    }
    initAOS()
  }, [duration])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.setAttribute('data-aos', animation)
    if (delay) el.setAttribute('data-aos-delay', String(delay))
  }, [animation, delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
