import React from 'react'

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-pink-100 to-orange-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              AI Agents that
              <br />
              Deliver <span className="gradient-text">Profitable</span>
              <br />
              <span className="gradient-text">Video Marketing</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Our AI Agents source authentic creators, extract high value video assets, 
              and run campaigns with winning ad formulas that are optimized 24/7—so you 
              stop wasting 90% of content and scale with proven ROAS.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-gradient px-8 py-4 rounded-full font-semibold text-lg">
                Get Started for FREE
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-gray-400 transition-colors">
                Learn More
              </button>
            </div>

            <p className="text-sm text-gray-500">
              No credit card required • 10 min free processing
            </p>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative bg-black rounded-[3rem] p-4 shadow-2xl">
                <div className="bg-blue-600 rounded-[2.5rem] aspect-[9/19] overflow-hidden">
                  {/* Phone Screen Content */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative">
                    {/* Simulated App Interface */}
                    <div className="absolute inset-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                      <div className="p-4 space-y-3">
                        <div className="h-3 bg-white/30 rounded-full w-3/4"></div>
                        <div className="h-3 bg-white/30 rounded-full w-1/2"></div>
                        <div className="mt-6 space-y-2">
                          <div className="h-2 bg-white/30 rounded w-full"></div>
                          <div className="h-2 bg-white/30 rounded w-4/5"></div>
                          <div className="h-2 bg-white/30 rounded w-3/5"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Element */}
                    <div className="absolute -bottom-2 -right-2 bg-white rounded-lg shadow-lg p-3">
                      <div className="w-8 h-8 bg-gradient-videofusion rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 border">
                <div className="text-xs font-semibold text-gray-600">AI Processing</div>
                <div className="text-lg font-bold text-videofusion-primary">94%</div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3 border">
                <div className="text-xs font-semibold text-gray-600">ROAS</div>
                <div className="text-lg font-bold text-videofusion-primary">8X</div>
              </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
              <div className="text-xs text-gray-400 uppercase tracking-wide mb-2">Scroll Down</div>
              <div className="w-px h-8 bg-gray-300 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
