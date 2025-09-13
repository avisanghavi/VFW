import React from 'react'

const SVMSection = () => {
  const features = [
    {
      title: "Predicts authentic content with 94% accuracy",
      icon: "🧠"
    },
    {
      title: "Validated and backed by against 3B+ viral posts",
      icon: "✅"
    },
    {
      title: "Spots creative fatigue early to keep campaigns effective",
      icon: "📊"
    },
    {
      title: "Competitive intelligence, seamlessly built in",
      icon: "⚙️"
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with video thumbnails pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
        {/* Simulated video thumbnails background */}
        <div className="absolute inset-0 opacity-30">
          <div className="grid grid-cols-8 md:grid-cols-12 lg:grid-cols-16 gap-2 p-4">
            {Array.from({length: 96}).map((_, i) => (
              <div key={i} className="aspect-video bg-gradient-to-br from-purple-400 to-pink-400 rounded opacity-60"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Small Video Model (SVM)
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Predicts which authentic content will convert before you spend on ads.
            </p>
            <p className="text-sm text-white/70 mb-12">
              Powered by patented Highlights extraction
            </p>

            {/* Feature Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 text-left">
                  <div className="bg-white/20 rounded-lg p-3 flex-shrink-0">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <p className="text-white font-medium">{feature.title}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="btn-gradient px-8 py-4 rounded-full font-semibold text-lg">
              Get Started for FREE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SVMSection
