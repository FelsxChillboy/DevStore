import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { getProductBySlug } from '@/data/products'
import DemoShelf from '@/components/demo/DemoShell'
import PortfolioBasicDemo from '@/components/demo/PortfolioBasic'
import PortfolioProDemo from '@/components/demo/PortfolioPro'
import PortfolioPremiumDemo from '@/components/demo/PortfolioPremium'
import DevKitComponentsDemo from '@/components/demo/DevKitComponents'
import ComingSoonTemplateDemo from '@/components/demo/ComingSoonTemplate'
import LinkInBioTemplateDemo from '@/components/demo/LinkInBioTemplate'
import ResumeCVWebsiteDemo from '@/components/demo/ResumeCVWebsite'

const demos: Record<string, { component: () => ReactNode; name: string }> = {
  'portfolio-basic': { component: PortfolioBasicDemo, name: 'Portfolio Basic' },
  'portfolio-pro': { component: PortfolioProDemo, name: 'Portfolio Pro' },
  'portfolio-premium': { component: PortfolioPremiumDemo, name: 'Portfolio Premium' },
  'devkit-components': { component: DevKitComponentsDemo, name: 'DevKit Components' },
  'coming-soon-template': { component: ComingSoonTemplateDemo, name: 'Coming Soon Template' },
  'link-in-bio-template': { component: LinkInBioTemplateDemo, name: 'Link-in-Bio Template' },
  'resume-cv-website': { component: ResumeCVWebsiteDemo, name: 'Resume/CV Website' },
}

export function generateStaticParams() {
  return Object.keys(demos).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const demo = demos[slug]
  if (!demo) return { title: 'Demo Tidak Ditemukan - DevStore' }

  return {
    title: `Demo ${demo.name} - DevStore`,
    description: `Lihat live demo ${demo.name} — template portfolio premium dari DevStore.`,
  }
}

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const demo = demos[slug]
  if (!demo) notFound()

  const DemoComponent = demo.component
  const product = getProductBySlug(slug)

  return (
    <DemoShelf productName={demo.name} slug={slug}>
      <DemoComponent />
    </DemoShelf>
  )
}
