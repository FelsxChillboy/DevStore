import type { Metadata } from 'next'
import LoadingScreen from '@/components/layout/LoadingScreen'
import './globals.css'

export const metadata: Metadata = {
  title: 'DevStore — Digital Products Marketplace',
  description: 'Marketplace template digital, jasa pembuatan website, dan komponen UI siap pakai untuk mahasiswa dan UMKM.',
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            try {
              var theme = localStorage.getItem('theme');
              if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              }
            } catch(e) {}
          `,
        }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen antialiased">
        <LoadingScreen>{children}</LoadingScreen>
      </body>
    </html>
  )
}
