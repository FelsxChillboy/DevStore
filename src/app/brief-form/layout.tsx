import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Isi Brief Order Landing Page - DevStore',
  description: 'Lengkapi formulir brief untuk order landing page UMKM custom. Tim DevStore akan proses dalam 1x24 jam.',
  openGraph: {
    title: 'Isi Brief Order Landing Page - DevStore',
    description: 'Lengkapi formulir brief untuk order landing page UMKM custom. Tim DevStore akan proses dalam 1x24 jam.',
    type: 'website',
    siteName: 'DevStore',
  },
}

export default function BriefFormLayout({ children }: { children: React.ReactNode }) {
  return children
}
