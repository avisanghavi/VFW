import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PlatformsHero from '@/components/platforms/PlatformsHero'
import WhoShouldIntegrate from '@/components/platforms/WhoShouldIntegrate'
import TechIntegration from '@/components/platforms/TechIntegration'
import SVMSection from '@/components/SVMSection'
import PlatformsCTA from '@/components/platforms/PlatformsCTA'

export const metadata: Metadata = {
  title: 'Partners - Highlights API & OEM Program',
  description:
    'Partner with VideoForce to integrate Highlights via REST API or MCP and help your users extract high‑converting moments from video.',
}

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PlatformsHero />
        <WhoShouldIntegrate />
        <SVMSection />
        <TechIntegration />
        <PlatformsCTA />
      </main>
      <Footer />
    </div>
  )
}


