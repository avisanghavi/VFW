"use client"

import { Button } from "@/components/ui/button"
import { Users, Zap, TrendingUp, Target, Sparkles, Brain, Search, Shield, Clock, DollarSign, Globe, BarChart, Bot, Key } from "lucide-react"

const CreatorSourcingFeatures = () => {
  const features = [
    {
      category: "UGC Content",
      icon: Users,
      gradient: "from-purple-500 to-pink-500",
      capabilities: [
        {
          title: "AI-Powered Vetting",
          description: "Automatically verify creator authenticity, engagement rates, and brand safety",
          icon: Shield
        },
        {
          title: "Micro-Influencer Database", 
          description: "Access 3M+ vetted creators across all niches and demographics",
          icon: Search
        },
        {
          title: "Performance Prediction",
          description: "94% accuracy in predicting creator-brand match success",
          icon: Target
        }
      ]
    },
    {
      category: "Influencer Marketing",
      icon: TrendingUp,
      gradient: "from-orange-500 to-red-500",
      capabilities: [
        {
          title: "Smart Matching Algorithm",
          description: "Match brands with influencers based on audience overlap and conversion history",
          icon: Brain
        },
        {
          title: "ROI Optimization",
          description: "Only recommend influencers with proven track records in your industry",
          icon: DollarSign
        },
        {
          title: "Multi-Platform Reach",
          description: "TikTok, Instagram, YouTube, Twitter - unified influencer discovery",
          icon: Globe
        }
      ]
    },
    {
      category: "Viral MEME Content",
      icon: Sparkles,
      gradient: "from-blue-500 to-cyan-500",
      capabilities: [
        {
          title: "Trend Prediction Engine",
          description: "Identify viral trends 72 hours before they peak using Patented Small Video Model",
          icon: Clock
        },
        {
          title: "Meme Intelligence",
          description: "Track and adapt trending memes for brand-safe content creation",
          icon: Zap
        },
        {
          title: "Cultural Context Analysis",
          description: "Ensure memes align with brand values and target audience culture",
          icon: BarChart
        }
      ]
    }
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-5xl font-bold mt-2 mb-4 text-gray-900">
            Your Creator Sourcing Agent Works <span className="text-gradient">24/7</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our AI Agent delivers creators and content pipelines across UGC, Influencers, and Viral/Meme content — automated, authentic, and yours forever.
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

        {/* Patent Info */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            <span className="text-sm font-medium text-gray-600">Powered by U.S. Patent #12,347,462</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default CreatorSourcingFeatures
