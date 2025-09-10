import type { Metadata } from 'next'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CreatorSourcingHero from "@/components/creator-sourcing/CreatorSourcingHero"
import CreatorSourcingFeatures from "@/components/creator-sourcing/CreatorSourcingFeatures"
import CreatorSourcingProof from "@/components/creator-sourcing/CreatorSourcingProof"
import SVMSection from "@/components/SVMSection"

export const metadata: Metadata = {
  title: 'Creator Sourcing AI Agent | VideoForce.ai',
  description: 'Lower your CAC, scale your reach, own content forever. AI Agent sources authentic UGC, influencer, and viral content 24/7 with Patented Small Video Model.',
  openGraph: {
    title: 'Creator Sourcing AI Agent | VideoForce.ai',
    description: 'Lower your CAC, scale your reach, own content forever. AI Agent sources authentic UGC, influencer, and viral content 24/7.',
    url: 'https://videoforce.ai/creator-sourcing',
    type: 'website',
  },
}

export default function CreatorSourcingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <CreatorSourcingHero />
        <CreatorSourcingFeatures />
        <CreatorSourcingProof />
        <SVMSection />
      </main>
      <Footer />
    </div>
  )
}
