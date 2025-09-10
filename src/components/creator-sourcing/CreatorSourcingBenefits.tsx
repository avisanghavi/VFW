"use client"

import { Check, Clock, Shield, Target, TrendingUp, Users, Zap, DollarSign, Globe, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"

const CreatorSourcingBenefits = () => {
  const benefits = [
    {
      category: "Speed & Efficiency",
      icon: Clock,
      gradient: "from-purple-500 to-pink-500",
      items: [
        { feature: "24-Hour Creator Discovery", description: "Find perfect matches in hours, not weeks" },
        { feature: "Automated Outreach & Management", description: "AI handles initial contact and negotiations" },
        { feature: "Real-time Trend Detection", description: "Catch viral opportunities before they peak" },
        { feature: "Bulk Creator Processing", description: "Evaluate hundreds of creators simultaneously" }
      ]
    },
    {
      category: "Quality & Safety",
      icon: Shield,
      gradient: "from-green-500 to-teal-500",
      items: [
        { feature: "AI-Powered Authenticity Verification", description: "Eliminate fake followers and bot engagement" },
        { feature: "Brand Safety Scoring", description: "Ensure creators align with your brand values" },
        { feature: "Performance History Analysis", description: "Only work with creators who deliver results" },
        { feature: "Content Rights Management", description: "Automatic licensing and usage agreements" }
      ]
    },
    {
      category: "Intelligence & Insights",
      icon: Brain,
      gradient: "from-blue-500 to-cyan-500",
      items: [
        { feature: "94% Match Accuracy Prediction", description: "Patented AI predicts creator-brand success" },
        { feature: "Audience Overlap Analysis", description: "Find creators with your exact target audience" },
        { feature: "Viral Content Intelligence", description: "Identify content with viral potential" },
        { feature: "Cultural Context Understanding", description: "Ensure content resonates with local markets" }
      ]
    },
    {
      category: "ROI & Performance",
      icon: DollarSign,
      gradient: "from-orange-500 to-red-500",
      items: [
        { feature: "ROI-Driven Creator Selection", description: "Focus on creators with proven conversion rates" },
        { feature: "Cost Optimization", description: "Get maximum value from your creator budget" },
        { feature: "Performance Tracking", description: "Real-time campaign analytics and optimization" },
        { feature: "Multi-Platform Attribution", description: "Track results across all social platforms" }
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-brand-purple uppercase tracking-wide">
            COMPLETE SOLUTION
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-4 mb-6 text-gray-900">
            Everything You Need for <span className="text-gradient">Creator Success</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From discovery to campaign optimization, our patented AI technology handles every aspect of creator sourcing and management.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{benefit.category}</h3>
                  <p className="text-gray-600">Powered by patented AI technology</p>
                </div>
              </div>

              {/* Feature List */}
              <div className="space-y-4">
                {benefit.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <div className="mt-1">
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.feature}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-purple-600 to-orange-500 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">
            Transform Your Creator Marketing Strategy
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
            Stop wasting time with manual creator research. Our AI agents work 24/7 to find, vet, and manage the perfect creators for your brand, delivering measurable results and ROI.
          </p>
          
          {/* Key Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold mb-2">24hrs</div>
              <div className="text-sm opacity-90">Discovery Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">94%</div>
              <div className="text-sm opacity-90">Match Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50M+</div>
              <div className="text-sm opacity-90">Vetted Creators</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">8X</div>
              <div className="text-sm opacity-90">Average ROAS</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="xl" 
              className="bg-white text-purple-600 hover:bg-gray-100"
              onClick={() => window.open('https://app.videofusion.io/auth/sign-up', '_blank')}
            >
              <Users className="w-5 h-5" />
              Start Free Trial
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.location.href = '/book-call'}
            >
              <Zap className="w-5 h-5" />
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreatorSourcingBenefits
