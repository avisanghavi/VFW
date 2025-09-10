"use client"

import { Button } from "@/components/ui/button"
import { Play, Zap, Target, CheckCircle, ArrowRight, Sparkles, Clock, Users, TrendingUp } from "lucide-react"

const HighlightsHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-orange-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-brand-purple/20 to-brand-orange/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-brand-orange/20 to-brand-purple/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-brand-purple/10 to-brand-orange/10 border border-brand-purple/20">
                <Sparkles className="w-4 h-4 text-brand-purple mr-2" />
                <span className="text-sm font-semibold text-brand-purple">⚡ Patent-Protected AI Technology</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Turn <span className="text-gradient">$200B</span> in Unused Video Content Into <span className="text-gradient">Revenue</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                <strong>90% of video content sits unused</strong> costing brands millions. Our patent-protected AI instantly extracts revenue-driving moments—hooks, social proof, CTAs—and multiplies your ROI across every marketing channel.
              </p>
            </div>

            {/* ROI-Focused Benefits */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/80 border border-gray-100 hover:shadow-lg transition-shadow">
                <TrendingUp className="w-8 h-8 text-green-600" />
                <div>
                  <div className="font-semibold text-green-600">5X More Viral</div>
                  <div className="text-sm text-muted-foreground">Higher engagement rates</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/80 border border-gray-100 hover:shadow-lg transition-shadow">
                <Clock className="w-8 h-8 text-blue-600" />
                <div>
                  <div className="font-semibold text-blue-600">90% Time Saved</div>
                  <div className="text-sm text-muted-foreground">2-5min vs hours of editing</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/80 border border-gray-100 hover:shadow-lg transition-shadow">
                <Users className="w-8 h-8 text-purple-600" />
                <div>
                  <div className="font-semibold text-purple-600">Multi-Channel ROI</div>
                  <div className="text-sm text-muted-foreground">One video → All platforms</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-brand-purple to-brand-orange hover:opacity-90 text-white shadow-xl text-lg px-8 py-4 h-auto">
                <Play className="w-5 h-5 mr-2" />
                Start FREE Forever - No Credit Card
              </Button>
              <Button variant="outline" size="lg" className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white text-lg px-6 py-4 h-auto">
                See Live ROI Examples
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Patent-Protected Technology</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Instant Results</span>
              </div>
            </div>

          </div>

          {/* Right Content - Demo Preview */}
          <div className="relative lg:pl-8">
            {/* Main Demo Card */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
              {/* Demo Video Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <Play className="w-16 h-16 text-brand-purple mx-auto mb-4" />
                  <div className="font-semibold text-gray-700">Watch AI Extract Viral Moments</div>
                  <div className="text-sm text-gray-500">See how we turn 5 min → 15 viral clips</div>
                </div>
                
                {/* Live indicator */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  LIVE DEMO
                </div>
              </div>

              {/* Sample Extracted Highlights */}
              <div className="space-y-3">
                <div className="text-sm font-semibold text-gray-700 mb-3">⚡ AI Found These Viral Moments:</div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-50 border border-purple-200">
                  <div className="w-2 h-2 bg-brand-purple rounded-full animate-pulse"></div>
                  <div className="text-sm">&ldquo;Wait until you see what happens next...&rdquo; <span className="text-green-600 font-medium">(Hook - 0:03)</span></div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-orange-50 border border-orange-200">
                  <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse"></div>
                  <div className="text-sm">&ldquo;This changed everything for our business&rdquo; <span className="text-green-600 font-medium">(Social Proof - 1:24)</span></div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-50 border border-purple-200">
                  <div className="w-2 h-2 bg-brand-purple rounded-full animate-pulse"></div>
                  <div className="text-sm">&ldquo;Get started today and see results tomorrow&rdquo; <span className="text-green-600 font-medium">(CTA - 2:45)</span></div>
                </div>
              </div>
            </div>

            {/* Floating ROI Stats */}
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border">
              <div className="text-2xl font-bold text-green-600">90%</div>
              <div className="text-sm text-gray-600">Time Saved</div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border">
              <div className="text-2xl font-bold text-blue-600">$200B</div>
              <div className="text-sm text-gray-600">Market Size</div>
            </div>

            <div className="absolute top-1/2 -right-8 bg-white rounded-2xl shadow-xl p-4 border">
              <div className="text-2xl font-bold text-purple-600">Patent</div>
              <div className="text-sm text-gray-600">Protected</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HighlightsHero
