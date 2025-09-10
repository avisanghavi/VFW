import type { Metadata } from 'next'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Play, CheckCircle, ArrowRight } from "lucide-react"

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
      <main>
        <section className="relative py-16 lg:py-20 flex items-center overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-orange-50/20">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 -left-40 w-72 h-72 bg-purple-200/15 rounded-full blur-2xl will-change-transform"></div>
            <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-orange-200/15 rounded-full blur-2xl will-change-transform"></div>
          </div>

          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-purple-200/50 shadow-sm mb-8">
                <Play className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">Free Trial - No Credit Card Required</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-gray-900">Start Your</span>
                <br />
                <span className="text-gradient">Free Trial</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                Extract viral moments from your videos instantly. Get 10 minutes of free processing to see the magic in action.
              </p>

              {/* Benefits */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="flex items-center gap-3 p-4 bg-white/80 rounded-xl border border-gray-100">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <div className="text-left">
                    <div className="font-semibold">10 Minutes Free</div>
                    <div className="text-sm text-gray-600">No credit card needed</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/80 rounded-xl border border-gray-100">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                  <div className="text-left">
                    <div className="font-semibold">Instant Results</div>
                    <div className="text-sm text-gray-600">See highlights in 60 seconds</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/80 rounded-xl border border-gray-100">
                  <CheckCircle className="w-6 h-6 text-orange-600" />
                  <div className="text-left">
                    <div className="font-semibold">No Setup Required</div>
                    <div className="text-sm text-gray-600">Upload and go</div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-orange-600 hover:opacity-90 text-white text-xl px-12 py-6 h-auto"
                  onClick={() => window.open('https://app.videofusion.io/auth/sign-up', '_blank')}
                >
                  <Play className="w-6 h-6 mr-3" />
                  Start Free Trial Now
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
                <p className="text-sm text-gray-500">Free • No signup required • Instant access</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
