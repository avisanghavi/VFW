"use client"

import { Button } from "@/components/ui/button"
import { Users, Zap, TrendingUp, Target, Sparkles, Clock, DollarSign } from "lucide-react"

const CreatorSourcingHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-orange-50/20"></div>
      <div className="absolute top-1/4 -left-40 w-72 h-72 bg-purple-200/15 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-orange-200/15 rounded-full blur-2xl"></div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-purple-200/50 shadow-sm">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">Patented AI Creator Discovery</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="text-gray-900">Lower Your CAC.</span>
                <br />
                <span className="text-gradient">Scale Your Reach.</span>
                <br />
                <span className="text-gradient">Own Content Forever.</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                VideoForce.ai sources authentic UGC, influencer, and viral/meme content from the right creators — powered by AI Agents that work 24/7 and our patented Search & Discovery engine.
              </p>
            </div>

            {/* CTA Section */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
         <Button 
           variant="gradient" 
           size="xl" 
           className="group relative overflow-hidden"
           onClick={() => window.location.href = '/book-call'}
         >
                  <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Book a Call
                  <Zap className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                
         <Button 
           variant="outline" 
           size="xl"
           className="border-gray-200 hover:border-purple-300 hover:bg-purple-50/50"
           onClick={() => window.open('https://app.videofusion.io/auth/sign-up', '_blank')}
         >
                  Start Free Trial
                </Button>
              </div>
              
              <div className="text-sm text-gray-500 text-center">
                <span>* Requires purchase of VideoForce.ai ad services. Creator compensation not included.</span>
              </div>
            </div>
          </div>

          {/* Right Content - Competitive Advantage */}
        <div className="relative lg:pl-6">
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/50">
              {/* Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Creator Sourcing Agent
                </h3>
                <p className="text-gray-600 text-sm">
                  AI Agent • Works 24/7
                </p>
              </div>
              
              {/* Competitive Advantages */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Lightning-Fast Discovery</h4>
                    <p className="text-sm text-gray-600">AI finds perfect creators in 24 hours, not weeks</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Viral Content Prediction</h4>
                    <p className="text-sm text-gray-600">Patented tech identifies viral potential before it peaks</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">ROI-Driven Matching</h4>
                    <p className="text-sm text-gray-600">Only creators with proven conversion rates</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Multi-Platform Intelligence</h4>
                    <p className="text-sm text-gray-600">TikTok, Instagram, YouTube, Twitter - all in one</p>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-6 pt-4 border-t border-gray-200/50 text-center">
                <div className="text-sm text-gray-500 mb-3">Trusted by brands achieving</div>
                <div className="text-2xl font-bold text-gradient">8X ROAS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreatorSourcingHero
