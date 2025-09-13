import React from 'react'

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-videofusion text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            HOW IT WORKS
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            From Content to Conversions - <span className="gradient-text">Fully Automated</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Source authentic creators. Extract winning moments. Scale profitable campaigns. All on autopilot.
          </p>
        </div>

        {/* Main Dashboard/Tablet Mockup */}
        <div className="relative max-w-4xl mx-auto">
          {/* Curved connection lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 800 400" fill="none">
              <path 
                d="M100 200 Q400 100 700 200" 
                stroke="url(#gradient1)" 
                strokeWidth="2" 
                fill="none"
                className="opacity-30"
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E91E63" />
                  <stop offset="100%" stopColor="#FF6B35" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Central Tablet */}
          <div className="relative bg-black rounded-3xl p-6 shadow-2xl max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl aspect-[4/3] p-6">
              <div className="text-center mb-6">
                <div className="text-sm text-gray-500 mb-2">My Content</div>
                <div className="w-full h-24 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="text-xs text-gray-500">Upload Content</div>
                  <div className="h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg border-2 border-dashed border-purple-300 flex items-center justify-center">
                    <span className="text-purple-600 text-xs">Drop files here</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-gray-500">AI Analysis</div>
                  <div className="h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-videofusion-primary rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button className="w-full bg-gradient-videofusion text-white py-2 rounded-lg text-sm font-semibold">
                  Process with AI
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
