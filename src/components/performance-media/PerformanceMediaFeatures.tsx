"use client"

import { RefreshCw, Target, BarChart, Zap, TrendingUp, DollarSign, Play, Sparkles, Brain, Gauge } from "lucide-react"

const PerformanceMediaFeatures = () => {
  const features = [
    {
      category: "Ad Remix Engine",
      icon: RefreshCw,
      gradient: "from-purple-500 to-purple-600",
      capabilities: [
        { title: "Winning Ad Formula", description: "Proprietary algorithm transforms 1 video into 5+ high-converting variants", icon: Sparkles },
        { title: "A/B Testing at Scale", description: "Automatically test multiple variants to find winning combinations", icon: TrendingUp },
        { title: "Content Fatigue Prevention", description: "Continuous refresh prevents ad burnout and maintains ROAS", icon: Gauge }
      ]
    },
    {
      category: "Smart Media Buying",
      icon: Target,
      gradient: "from-orange-500 to-orange-600",
      capabilities: [
        { title: "Cross-Platform Placement", description: "Intelligent budget allocation across Facebook, TikTok, YouTube, and more", icon: Target },
        { title: "Audience Intelligence", description: "AI-powered targeting based on performance data and lookalikes", icon: Brain },
        { title: "Real-Time Bidding", description: "Dynamic bid optimization to maximize reach within budget constraints", icon: Zap }
      ]
    },
    {
      category: "Performance Optimization",
      icon: BarChart,
      gradient: "from-purple-500 to-orange-500",
      capabilities: [
        { title: "24/7 Campaign Monitoring", description: "Continuous performance tracking and automatic adjustments", icon: BarChart },
        { title: "ROAS Optimization", description: "Machine learning algorithms maximize return on ad spend", icon: DollarSign },
        { title: "Creative Performance Analysis", description: "Deep insights into what makes ads convert", icon: Play }
      ]
    }
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-5xl font-bold mt-2 mb-4 text-gray-900">
            Your Performance Media Agent Works <span className="text-gradient">24/7</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our AI Agent handles the complete performance marketing cycle — from ad creation to media buying to optimization — delivering results while you sleep.
          </p>
        </div>

        {/* Three Main Categories */}
        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
              {/* Category Header */}
              <div className="text-center mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{feature.category}</h3>
              </div>

              {/* Capabilities List */}
              <div className="space-y-4">
                {feature.capabilities.map((capability, capIndex) => (
                  <div key={capIndex} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <capability.icon className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{capability.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Performance Stats */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-gray-600">Powered by AI + Human Creativity</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PerformanceMediaFeatures
