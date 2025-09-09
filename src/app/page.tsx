import type { Metadata } from 'next'
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import BrandsSection from "@/components/BrandsSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import ProofSection from "@/components/ProofSection"
import SVMSection from "@/components/SVMSection"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: 'VideoForce.ai - AI Agents for Profitable Video Marketing',
  description: 'Your growth agents work 24/7 to source authentic creators, extract high-value video assets, and run campaigns with winning ad formulas. Get 8X ROAS with AI-powered video marketing.',
  openGraph: {
    title: 'VideoForce.ai - AI Agents for Profitable Video Marketing',
    description: 'Your growth agents work 24/7 to source authentic creators, extract high-value video assets, and run campaigns with winning ad formulas.',
    url: 'https://videoforce.ai',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BrandsSection />
        <HowItWorksSection />
        <ProofSection />
        <SVMSection />
      </main>
      <Footer />
    </div>
  )
}
