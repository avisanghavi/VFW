"use client"

import { Play, TrendingUp, Target, Zap } from "lucide-react"

const PerformanceMediaAds = () => {
  const adExamples = [
    {
      id: 1,
      platform: "Instagram",
      industry: "Automotive/E-commerce",
      brand: "Tire Agent",
      originalVideo: "Product demos & reviews",
      adVariant: "Hook-driven highlights",
      performance: {
        roas: "8X ROAS",
        engagement: "Massive boost",
        conversions: "Hook-driven",
        results: "Proven ROI"
      },
      hook: "This one tire hack saved me $800 on my car...",
      cta: "Shop tires now",
      bgColor: "from-purple-500 to-purple-600",
      mockupBg: "bg-gradient-to-br from-purple-50 to-purple-100"
    },
    {
      id: 2,
      platform: "TikTok",
      industry: "Food & Beverage",
      brand: "DIG Restaurants",
      originalVideo: "Food prep & chef content",
      adVariant: "AI-selected moments",
      performance: {
        ctr: "400% CTR",
        performance: "vs manual cuts",
        conversions: "AI-optimized",
        results: "Outperformed"
      },
      hook: "Watch our chef create this farm-to-table masterpiece...",
      cta: "Order delivery",
      bgColor: "from-orange-500 to-orange-600",
      mockupBg: "bg-gradient-to-br from-orange-50 to-orange-100"
    },
    {
      id: 3,
      platform: "Instagram",
      industry: "Fitness/Membership",
      brand: "Fitness SF",
      originalVideo: "Member testimonials",
      adVariant: "Performance-optimized ads",
      performance: {
        cpl: "86% Cheaper",
        cac: "61% Drop",
        conversions: "Dramatic boost",
        roas: "2.5X ROAS"
      },
      hook: "POV: You finally found a gym that doesn't intimidate you",
      cta: "Start your journey",
      bgColor: "from-purple-500 to-orange-600",
      mockupBg: "bg-gradient-to-br from-purple-50 to-orange-50"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-6">
            <Play className="w-4 h-4 text-purple-600 mr-2" />
            <span className="text-sm font-semibold text-purple-600">Killer Ads Gallery</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mt-2 mb-4 text-gray-900">
            See the <span className="text-gradient">Actual Ads</span> That Convert
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real ads created by our AI from existing video content. Each one optimized for platform, audience, and performance.
          </p>
        </div>

        {/* Ads Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {adExamples.map((ad) => (
            <div key={ad.id} className={`${ad.mockupBg} rounded-3xl p-6 border border-white/50 shadow-lg`}>
              {/* Platform Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${ad.bgColor} text-white text-sm font-semibold`}>
                  {ad.platform}
                </div>
                <div className="text-sm text-gray-600">{ad.industry}</div>
              </div>

              {/* Mock Phone/Video Frame */}
              <div className="bg-black rounded-2xl p-2 mb-4 aspect-[9/16] max-w-48 mx-auto relative overflow-hidden">
                <div className="bg-gray-900 rounded-xl h-full flex items-center justify-center text-white text-center p-4">
                  <div>
                    <Play className="w-12 h-12 mx-auto mb-3 text-white/80" />
                    <div className="text-xs text-white/90 mb-2">{ad.hook}</div>
                    <div className="text-xs text-white/70">{ad.cta}</div>
                  </div>
                </div>
                {/* Performance overlay */}
                <div className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                  {Object.values(ad.performance)[0]}
                </div>
              </div>

              {/* Ad Details */}
              <div className="space-y-3">
                <div>
                  <div className="font-semibold text-gray-900 mb-1">{ad.brand}</div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">From:</span> {ad.originalVideo}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">To:</span> {ad.adVariant}
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-white/80 p-2 rounded-lg">
                    <div className="font-semibold text-purple-600">{Object.values(ad.performance)[0]}</div>
                    <div className="text-gray-600">{Object.keys(ad.performance)[0].toUpperCase()}</div>
                  </div>
                  <div className="bg-white/80 p-2 rounded-lg">
                    <div className="font-semibold text-orange-600">{Object.values(ad.performance)[1]}</div>
                    <div className="text-gray-600">{Object.keys(ad.performance)[1].toUpperCase()}</div>
                  </div>
                  <div className="bg-white/80 p-2 rounded-lg">
                    <div className="font-semibold text-purple-600">{Object.values(ad.performance)[2]}</div>
                    <div className="text-gray-600">{Object.keys(ad.performance)[2].toUpperCase()}</div>
                  </div>
                  <div className="bg-white/80 p-2 rounded-lg">
                    <div className="font-semibold text-orange-600">{Object.values(ad.performance)[3]}</div>
                    <div className="text-gray-600">{Object.keys(ad.performance)[3].toUpperCase()}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-2 text-purple-600">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">1 Video → 5+ Winning Ads</span>
            </div>
            <div className="flex items-center gap-2 text-orange-600">
              <Target className="w-5 h-5" />
              <span className="font-semibold">Platform Optimized</span>
            </div>
            <div className="flex items-center gap-2 text-purple-600">
              <Zap className="w-5 h-5" />
              <span className="font-semibold">Performance Tested</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PerformanceMediaAds
