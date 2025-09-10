"use client"

import { Button } from "@/components/ui/button"
import { Users, Zap, Clock, Shield, TrendingUp, Sparkles } from "lucide-react"

const CreatorSourcingCTA = () => {
  const benefits = [
    {
      icon: Clock,
      title: "24-Hour Discovery",
      description: "Find perfect creators in hours, not weeks"
    },
    {
      icon: Shield,
      title: "Brand Safety Guaranteed",
      description: "AI-powered vetting ensures brand alignment"
    },
    {
      icon: TrendingUp,
      title: "Proven ROI",
      description: "Average 8X ROAS from creator campaigns"
    }
  ]

  const competitors = ["UGC Factory", "Billo", "Grin", "MakeUGC", "Insense.pro"]

  return (
    <section className="py-12 bg-gradient-to-br from-purple-50 via-white to-orange-50">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-purple-200/50 shadow-sm mb-6">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">Ready to Switch?</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="text-gray-900">Deploy Your</span>
              <br />
              <span className="text-gradient">Creator Sourcing Agent</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
              Join the brands achieving exceptional ROI with our AI Agent that works 24/7 to source the perfect creators.
            </p>
          </div>

          {/* Value Proposition */}
          <div className="mb-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-3xl font-bold text-gradient mb-4">
                <Zap className="w-8 h-8" />
                VideoForce.ai
              </div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Your AI Agent combines Patented Small Video Model with proven creator sourcing expertise to deliver guaranteed results 24/7.
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  )
}

export default CreatorSourcingCTA
