'use client'

import { useEffect, useRef, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
}

export default function AnimatedSection({ children, className = '', delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let observer: IntersectionObserver | null = null
    const el = ref.current
    if (!el) return

    const initAOS = async () => {
      const AOS = (await import('aos')).default
      await import('aos/dist/aos.css')

      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 80,
      })

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.setAttribute('data-aos', 'fade-up')
              entry.target.setAttribute('data-aos-delay', String(delay))
            }
          })
        },
        { threshold: 0.1 }
      )

      observer.observe(el)
    }

    initAOS()

    return () => {
      observer?.disconnect()
    }
  }, [delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
