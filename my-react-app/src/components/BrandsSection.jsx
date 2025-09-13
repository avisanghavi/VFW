import React from 'react'

const BrandsSection = () => {
  const brands = [
    'EXPONENTIAL',
    'GE',
    'QUIZE',
    'angeltheory',
    'PERSONAL',
    'EXPONENTIAL',
    'GE'
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Trusted by brands achieving real results with authentic content + AI
          </h2>
        </div>

        {/* Animated Brand Logos */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="flex-shrink-0 mx-8 opacity-60 hover:opacity-100 transition-opacity">
                <div className="h-12 w-32 bg-gray-300 rounded flex items-center justify-center">
                  <span className="text-gray-600 font-semibold text-sm">{brand}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Content Examples */}
        <div className="mt-16 relative">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left Content Cards */}
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-md p-4 border border-purple-200">
                <div className="w-8 h-8 bg-purple-500 rounded mb-2"></div>
                <div className="text-xs text-purple-600 font-semibold">AI INTEL</div>
                <div className="text-sm font-medium">A VIDEO SHOWS</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 ml-8">
                <div className="text-xs text-gray-500 mb-2">HIGHLIGHTS by Campaign</div>
                <div className="space-y-2">
                  <div className="h-16 bg-gray-100 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            </div>

            {/* Center - Main Dashboard */}
            <div className="bg-white rounded-xl shadow-lg p-6 border">
              <div className="text-center mb-6">
                <div className="text-sm text-gray-500 mb-2">My Content</div>
                <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-xs text-gray-500">Video Performance</div>
                <div className="flex space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="h-16 w-16 bg-gray-100 rounded"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content Cards */}
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-md p-4 mr-8">
                <div className="text-xs text-gray-500 mb-2">HIGHLIGHTS: Top Comments</div>
                <div className="space-y-2">
                  <div className="h-12 bg-gray-100 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 border border-purple-200">
                <div className="text-xs text-purple-600 font-semibold mb-2">REAL PERSON</div>
                <div className="h-16 bg-gray-100 rounded mb-2"></div>
                <div className="text-sm font-medium">Performance data</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandsSection
