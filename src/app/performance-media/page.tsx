import type { Metadata } from 'next'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import PerformanceMediaHero from "@/components/performance-media/PerformanceMediaHero"
import PerformanceMediaFeatures from "@/components/performance-media/PerformanceMediaFeatures"
import PerformanceMediaAds from "@/components/performance-media/PerformanceMediaAds"
import SVMSection from "@/components/SVMSection"

export const metadata: Metadata = {
  title: 'Performance Media AI Agent | VideoForce.ai',
  description: '3X your sales, no more ad fatigue. Turn your existing video content into 5+ winning ads that actually convert. AI does the heavy lifting, you get authentic Ads that perform.',
  openGraph: {
    title: 'Performance Media AI Agent | VideoForce.ai',
    description: '3X your sales, no more ad fatigue. Turn your existing video content into 5+ winning ads that actually convert.',
    url: 'https://videoforce.ai/performance-media',
    type: 'website',
  },
}

export default function PerformanceMediaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PerformanceMediaHero />
        <PerformanceMediaFeatures />
        <PerformanceMediaAds />
        <SVMSection />
      </main>
      <Footer />
    </div>
  )
}
