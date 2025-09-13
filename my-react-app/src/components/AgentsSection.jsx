import React from 'react'

const AgentsSection = () => {
  const agents = [
    {
      title: "Creator Sourcing",
      subtitle: "Sources authentic creators & content 24/7",
      features: [
        { icon: "👥", title: "UGC Creators", description: "Find, vet and manage automatically" },
        { icon: "📈", title: "Influencers", description: "Perfect brand matches" },
        { icon: "🔥", title: "Viral Trends", description: "Adapt before they peak" }
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Highlights",
      subtitle: "Extracts profit-driving moments with patented AI",
      features: [
        { icon: "🎯", title: "Killer Hooks", description: "Stop-the-scroll moments" },
        { icon: "⭐", title: "Social Proof", description: "Testimonials & reviews" },
        { icon: "⚡", title: "Strong CTAs", description: "Drive instant action" }
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Performance Media",
      subtitle: "Turning authentic content into profitable campaigns",
      features: [
        { icon: "🏆", title: "Winning Ads", description: "Create & test high-converting campaigns" },
        { icon: "🎯", title: "Smart Media Buying", description: "AI-optimized bidding & placement" },
        { icon: "📊", title: "24/7 Optimization", description: "Scale winners, kill losers automatically" }
      ],
      gradient: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Creator Sourcing */}
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-4">{agents[0].title}</h3>
                <p className="text-lg text-gray-600 mb-6">{agents[0].subtitle}</p>
                
                <div className="space-y-4">
                  {agents[0].features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="text-2xl">{feature.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className={`mt-6 bg-gradient-to-r ${agents[0].gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all`}>
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Tablet Mockup for Creator Sourcing */}
          <div className="order-1 lg:order-2">
            <div className="relative bg-black rounded-3xl p-4 shadow-2xl">
              <div className="bg-white rounded-2xl aspect-[4/3] p-6">
                <div className="text-sm text-gray-500 mb-4">HIGHLIGHTS</div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="h-20 bg-gray-100 rounded-lg"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-full"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="h-20 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Highlights and Performance Media */}
        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Highlights Tablet */}
          <div>
            <div className="relative bg-black rounded-3xl p-4 shadow-2xl">
              <div className="bg-white rounded-2xl aspect-[4/3] p-6">
                <div className="text-sm text-gray-500 mb-4">HIGHLIGHTS by Campaign</div>
                <div className="space-y-3">
                  <div className="h-16 bg-gray-100 rounded-lg"></div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-12 bg-gray-100 rounded"></div>
                    <div className="h-12 bg-gray-100 rounded"></div>
                  </div>
                </div>
                <button className="w-full mt-4 bg-gradient-videofusion text-white py-2 rounded-lg text-sm font-semibold">
                  Extract Highlights
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Highlights Info */}
          <div>
            <div>
              <h3 className="text-3xl font-bold mb-4">{agents[1].title}</h3>
              <p className="text-lg text-gray-600 mb-6">{agents[1].subtitle}</p>
              
              <div className="space-y-4">
                {agents[1].features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className={`mt-6 bg-gradient-to-r ${agents[1].gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all`}>
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Performance Media Section */}
        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Performance Media Info */}
          <div>
            <div>
              <h3 className="text-3xl font-bold mb-4">{agents[2].title}</h3>
              <p className="text-lg text-gray-600 mb-6">{agents[2].subtitle}</p>
              
              <div className="space-y-4">
                {agents[2].features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className={`mt-6 bg-gradient-to-r ${agents[2].gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all`}>
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Performance Media Tablet */}
          <div>
            <div className="relative bg-black rounded-3xl p-4 shadow-2xl">
              <div className="bg-white rounded-2xl aspect-[4/3] p-6">
                <div className="text-sm text-gray-500 mb-4">HIGHLIGHTS by Campaign</div>
                <div className="text-xs text-gray-400 mb-3">Campaign performance data, metrics and ROI insights...</div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="h-20 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg p-3">
                    <div className="text-xs text-orange-600 font-semibold">Video #1</div>
                    <div className="text-xs text-gray-500 mt-1">Performance: 95%</div>
                  </div>
                  <div className="h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-3">
                    <div className="text-xs text-purple-600 font-semibold">Video #2</div>
                    <div className="text-xs text-gray-500 mt-1">Performance: 87%</div>
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

export default AgentsSection
