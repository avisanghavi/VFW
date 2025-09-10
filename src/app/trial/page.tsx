import type { Metadata } from 'next'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import TrialClient from './TrialClient'

export const metadata: Metadata = {
  title: 'Start Free Trial - VideoForce Highlights | VideoForce.ai',
  description: 'Start your free trial of VideoForce Highlights. Extract viral moments from your videos instantly with our AI-powered tool. No credit card required.',
  openGraph: {
    title: 'Start Free Trial - VideoForce Highlights | VideoForce.ai',
    description: 'Start your free trial of VideoForce Highlights. Extract viral moments from your videos instantly.',
    url: 'https://videoforce.ai/trial',
    type: 'website',
  },
}

export default function TrialPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <TrialClient />
      <Footer />
    </div>
  )
}
