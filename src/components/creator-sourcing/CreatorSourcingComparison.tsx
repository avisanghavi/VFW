"use client"

import { Check, X, Zap, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"

const CreatorSourcingComparison = () => {
  const competitors = [
    { name: "UGC Factory", color: "text-gray-600" },
    { name: "Billo", color: "text-gray-600" },
    { name: "Grin", color: "text-gray-600" },
    { name: "MakeUGC", color: "text-gray-600" },
    { name: "Insense.pro", color: "text-gray-600" }
  ]

  const features = [
    {
      category: "Discovery Speed",
      items: [
        { feature: "AI-Powered Creator Discovery", videoforce: true, others: false },
        { feature: "24/7 Automated Sourcing", videoforce: true, others: false },
        { feature: "Real-time Trend Detection", videoforce: true, others: false },
        { feature: "Bulk Creator Outreach", videoforce: true, others: "limited" }
      ]
    },
    {
      category: "Quality & Vetting",
      items: [
        { feature: "Authenticity Verification", videoforce: true, others: "manual" },
        { feature: "Performance Prediction (94% accuracy)", videoforce: true, others: false },
        { feature: "Brand Safety Scoring", videoforce: true, others: "basic" },
        { feature: "Engagement Rate Analysis", videoforce: true, others: true }
      ]
    },
    {
      category: "Content Intelligence",
      items: [
        { feature: "Viral Content Prediction", videoforce: true, others: false },
        { feature: "Meme Trend Analysis", videoforce: true, others: false },
        { feature: "Multi-Platform Content Tracking", videoforce: true, others: "limited" },
        { feature: "Cultural Context Analysis", videoforce: true, others: false }
      ]
    },
    {
      category: "ROI & Performance",
      items: [
        { feature: "ROI-Driven Matching", videoforce: true, others: false },
        { feature: "Conversion Rate Optimization", videoforce: true, others: "basic" },
        { feature: "Performance Analytics", videoforce: true, others: true },
        { feature: "Cost Per Acquisition Tracking", videoforce: true, others: "limited" }
      ]
    }
  ]

  const renderCheckmark = (value: boolean | string) => {
    if (value === true) {
      return <Check className="w-5 h-5 text-green-500" />
    } else if (value === false) {
      return <X className="w-5 h-5 text-red-400" />
    } else if (value === "limited" || value === "basic" || value === "manual") {
      return <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center">
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
    }
    return <Check className="w-5 h-5 text-green-500" />
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-brand-purple uppercase tracking-wide">
            COMPETITIVE ANALYSIS
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-4 mb-6 text-gray-900">
            Why VideoForce.ai <span className="text-gradient">Dominates</span> Creator Sourcing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how our patented AI technology outperforms every major competitor in the creator sourcing space.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Header Row */}
          <div className="bg-gradient-to-r from-purple-600 to-orange-500 text-white p-6">
            <div className="grid grid-cols-7 gap-4 items-center">
              <div className="col-span-2">
                <h3 className="text-lg font-semibold">Features</h3>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Crown className="w-5 h-5 text-yellow-300" />
                  <span className="font-bold">VideoForce.ai</span>
                </div>
                <div className="text-xs opacity-90">Patented AI</div>
              </div>
              {competitors.map((competitor, index) => (
                <div key={index} className="text-center">
                  <div className="font-medium text-sm">{competitor.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Categories */}
          {features.map((category, categoryIndex) => (
            <div key={categoryIndex} className="border-b border-gray-100 last:border-b-0">
              {/* Category Header */}
              <div className="bg-gray-50 px-6 py-4">
                <h4 className="font-semibold text-gray-900">{category.category}</h4>
              </div>
              
              {/* Feature Rows */}
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="grid grid-cols-7 gap-4 items-center p-6 hover:bg-gray-50/50 transition-colors">
                  <div className="col-span-2">
                    <span className="text-gray-700">{item.feature}</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center">
                      {renderCheckmark(item.videoforce)}
                    </div>
                  </div>
                  {competitors.map((_, compIndex) => (
                    <div key={compIndex} className="text-center">
                      <div className="flex items-center justify-center">
                        {renderCheckmark(item.others)}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-8 mt-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-green-500" />
            <span>Full Feature</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-yellow-400 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            <span>Limited/Basic</span>
          </div>
          <div className="flex items-center gap-2">
            <X className="w-4 h-4 text-red-400" />
            <span>Not Available</span>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-orange-500 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Experience the VideoForce.ai Advantage
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join the brands that switched from UGC Factory, Billo, and Grin to achieve 10X faster creator sourcing and 8X ROAS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="xl" 
                className="bg-white text-purple-600 hover:bg-gray-100"
                onClick={() => window.open('https://app.videofusion.io/auth/sign-up', '_blank')}
              >
                <Zap className="w-5 h-5" />
                Start Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.location.href = '/book-call'}
              >
                Book a Call
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              No setup fees • Cancel anytime • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreatorSourcingComparison
