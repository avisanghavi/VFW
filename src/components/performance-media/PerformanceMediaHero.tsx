"use client"

import { Button } from "@/components/ui/button"
import { TrendingUp, Zap, Target, RefreshCw, BarChart, Play, DollarSign } from "lucide-react"

const PerformanceMediaHero = () => {
  return (
    <section className="relative py-12 lg:py-16 flex items-center overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-orange-50/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-72 h-72 bg-purple-200/15 rounded-full blur-2xl will-change-transform"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-orange-200/15 rounded-full blur-2xl will-change-transform"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-purple-200/50 shadow-sm">
                <TrendingUp className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">Performance Media AI Agent</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">3X Your Sales.</span>
                <br />
                <span className="text-gradient">No More Ad Fatigue.</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Turn your existing video content into 5+ winning ads that actually convert. AI does the heavy lifting, you get authentic Ads that perform.
              </p>
            </div>

            {/* Customer Value Props */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/80 border border-gray-100">
                <DollarSign className="w-8 h-8 text-purple-600" />
                <div>
                  <div className="font-semibold">Boost Sales</div>
                  <div className="text-sm text-muted-foreground">3X average increase</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/80 border border-gray-100">
                <Zap className="w-8 h-8 text-orange-600" />
                <div>
                  <div className="font-semibold">Faster Results</div>
                  <div className="text-sm text-muted-foreground">74% quicker production</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/80 border border-gray-100">
                <TrendingUp className="w-8 h-8 text-purple-600" />
                <div>
                  <div className="font-semibold">No Content Fatigue</div>
                  <div className="text-sm text-muted-foreground">Maintain ROAS forever</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-start">
                 <Button 
                   size="lg" 
                   className="bg-gradient-to-r from-purple-600 to-orange-600 hover:opacity-90 text-white text-lg px-8 py-4 h-auto"
                   onClick={() => window.location.href = '/book-call'}
                 >
                <Play className="w-5 h-5 mr-2" />
                Book a Call
              </Button>
            </div>
          </div>

          {/* Right Content - Performance Preview */}
          <div className="relative lg:pl-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">What You Get</h3>
                <p className="text-sm text-gray-600">Real results from authentic video ads</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200">
                  <DollarSign className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-purple-900">Sales Growth</div>
                    <div className="text-sm text-purple-700">3X average boost from better ads</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200">
                  <Zap className="w-6 h-6 text-orange-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-orange-900">Faster Campaigns</div>
                    <div className="text-sm text-orange-700">74% faster than manual production</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200">
                  <TrendingUp className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-purple-900">Sustained Performance</div>
                    <div className="text-sm text-purple-700">No ad fatigue, maintain ROAS</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200">
                  <RefreshCw className="w-6 h-6 text-orange-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-orange-900">Always Fresh Content</div>
                    <div className="text-sm text-orange-700">1 video becomes 5+ winning variants</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PerformanceMediaHero
