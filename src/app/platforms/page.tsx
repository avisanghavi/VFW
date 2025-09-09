import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PlatformsHero from '@/components/platforms/PlatformsHero'
import ValueProps from '@/components/platforms/ValueProps'
import WhoShouldIntegrate from '@/components/platforms/WhoShouldIntegrate'
import PartnerStacks from '@/components/platforms/PartnerStacks'
import TechIntegration from '@/components/platforms/TechIntegration'
import PlatformsCTA from '@/components/platforms/PlatformsCTA'

export const metadata: Metadata = {
  title: 'Partners - Highlights API & OEM Program (moved)',
  description:
    'This route moved to /partners.',
}

export default function PlatformsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PlatformsHero />
        <ValueProps />
        <WhoShouldIntegrate />
        <PartnerStacks />
        <TechIntegration />
        <PlatformsCTA />
      </main>
      <Footer />
    </div>
  )
}


