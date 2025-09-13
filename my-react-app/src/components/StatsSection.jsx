import React from 'react'

const StatsSection = () => {
  const stats = [
    {
      title: "TIRE AGENT",
      value: "8X",
      subtitle: "ROAS Achieved",
      description: "On $2,000 ad spend campaign Sept → Oct: $160K to $590K revenue (+268%)",
      bgColor: "bg-white",
      borderColor: "border-pink-300"
    },
    {
      title: "",
      value: "8X",
      subtitle: "ROAS Achieved",
      bgColor: "bg-pink-100",
      borderColor: "border-pink-300"
    },
    {
      title: "DIG INN",
      value: "400%",
      subtitle: "CTR Improvement",
      description: "0.2-0.3% → 1.4% top performer CPC: $5.38 → $1.87 over 3 months",
      bgColor: "bg-white",
      borderColor: "border-pink-300"
    },
    {
      title: "TIRE AGENT",
      value: "105%",
      subtitle: "More Online Signups",
      description: "8 community influencers activated, #1 sales month • 104 new clicks to signup",
      bgColor: "bg-pink-100",
      borderColor: "border-pink-300"
    },
    {
      title: "",
      value: "90%",
      subtitle: "Content Repurposed",
      bgColor: "bg-white",
      borderColor: "border-pink-300"
    }
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path 
            d="M0 400 Q300 200 600 400 T1200 400" 
            stroke="url(#statsGradient)" 
            strokeWidth="1" 
            fill="none"
            className="opacity-20"
          />
          <defs>
            <linearGradient id="statsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E91E63" />
              <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Real Creators Drive 
            <span className="gradient-text"> Real Performance</span>
          </h2>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className={`${stat.bgColor} rounded-2xl border-2 ${stat.borderColor} p-6 shadow-lg hover:shadow-xl transition-all`}>
              {stat.title && (
                <div className="text-xs font-bold text-gray-800 mb-2">{stat.title}</div>
              )}
              <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-gray-700 mb-3">
                {stat.subtitle}
              </div>
              {stat.description && (
                <p className="text-xs text-gray-600 leading-relaxed">
                  {stat.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
