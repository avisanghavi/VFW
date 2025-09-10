import type { Metadata } from 'next'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import BookCallClient from './BookCallClient'

export const metadata: Metadata = {
  title: 'Book Strategy Call - VideoForce.ai',
  description: 'Book a strategy call with our video marketing experts. Discuss Performance Media, Creator Sourcing, Highlights, or Partnership opportunities.',
  openGraph: {
    title: 'Book Strategy Call - VideoForce.ai',
    description: 'Book a strategy call with our video marketing experts.',
    url: 'https://videoforce.ai/book-call',
    type: 'website',
  },
}

export default function BookCallPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BookCallClient />
      <Footer />
    </div>
  )
}
