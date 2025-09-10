"use client"

import Image from "next/image"

const PerformanceMediaProof = () => {
  // Main case study from CIPIO.ai
  const mainCaseStudy = {
    company: "Fitness SF",
    logo: "/logos/FitnessSF_Logo.png",
    challenge: "High cost per acquisition and declining ROAS on existing ad creative",
    solution: "AI-powered ad remixing and performance optimization across multiple platforms",
    quote: "VideoForce.ai dramatically lowered our CAC while boosting signups by 86%.",
    results: [
      { metric: "86%", label: "Cheaper Cost Per Lead", color: "text-green-600" },
      { metric: "61%", label: "Drop in CAC", color: "text-blue-600" },
      { metric: "2.5X", label: "ROAS Improvement", color: "text-purple-600" },
      { metric: "74%", label: "Faster Production", color: "text-orange-600" }
    ]
  }

  // Quick proof from other case studies
  const quickProofTiles = [
    {
      company: "Build-A-Bear",
      logo: "/logos/BAB_Logo.jpg",
      metric: "225%",
      label: "Views Growth",
      detail: "From 4M → 12.9M views",
      improvement: "60% CPV drop",
      color: "text-purple-600"
    },
    {
      company: "Museum of Ice Cream", 
      logo: "/logos/MOIC_Logo.png",
      metric: "Extended",
      label: "Content Usability",
      detail: "Maximized existing creator assets",
      improvement: "Cost savings achieved",
      color: "text-blue-600"
    },
    {
      company: "World Gym",
      logo: "/logos/WorldGym_Logo.png", 
      metric: "105%",
      label: "Online Joins Increase",
      detail: "6 creators → 104 new signups",
      improvement: "+142% comments",
      color: "text-green-600"
    }
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-brand-purple uppercase tracking-wide">
            PROVEN RESULTS
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-2 mb-4 text-gray-900">
            Real Brands, Real <span className="text-gradient">Performance</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how brands achieve exceptional performance with our AI Agent that remixes ads, buys media, and optimizes 24/7.
          </p>
        </div>

        {/* Main Case Study - Fitness SF Deep Dive */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-6 lg:p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Image
                  src={mainCaseStudy.logo}
                  alt={`${mainCaseStudy.company} logo`}
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{mainCaseStudy.company}</h3>
                  <p className="text-sm text-gray-600">Fitness & Wellness Chain</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Challenge</h4>
                  <p className="text-gray-700 text-sm">{mainCaseStudy.challenge}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">VideoForce.ai Solution</h4>
                  <p className="text-gray-700 text-sm">{mainCaseStudy.solution}</p>
                </div>
              </div>
              
              <blockquote className="text-lg font-medium text-gray-900 leading-relaxed bg-white/80 p-4 rounded-lg border-l-4 border-green-500">
                &quot;{mainCaseStudy.quote}&quot;
              </blockquote>
            </div>

            {/* Right: Results Grid */}
            <div className="grid grid-cols-2 gap-4">
              {mainCaseStudy.results.map((result, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className={`text-3xl font-bold ${result.color} mb-2`}>
                    {result.metric}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {result.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Proof Tiles */}
        <div className="grid md:grid-cols-3 gap-8">
          {quickProofTiles.map((tile, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src={tile.logo}
                  alt={`${tile.company} logo`}
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{tile.company}</h4>
                </div>
              </div>
              
              <div className="text-center">
                <div className={`text-4xl font-bold ${tile.color} mb-2`}>
                  {tile.metric}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {tile.label}
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  {tile.detail}
                </div>
                <div className="text-sm font-medium text-green-600">
                  {tile.improvement}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="text-center mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">3X</div>
              <div className="text-sm font-medium text-gray-700">Average Sales Boost</div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">74%</div>
              <div className="text-sm font-medium text-gray-700">Faster Production Time</div>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-sm font-medium text-gray-700">Performance Optimization</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PerformanceMediaProof

