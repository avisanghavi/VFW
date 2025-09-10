"use client"

import { Key, Bot, Compass, TrendingUp, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

const CreatorSourcingDifferentiators = () => {
  const differentiators = [
    {
      icon: Key,
      title: "Perpetual Rights",
      description: "Use every asset forever across any channel",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Bot,
      title: "AI Agents (24/7)",
      description: "Automation runs briefs, approvals, compliance, and payments around the clock",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Compass,
      title: "Patented Small Video Model",
      description: "Find creators by content style, audience match, and brand fit — not just follower counts",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: TrendingUp,
      title: "Always-On Pipelines",
      description: "Continuous stream of fresh creator content, not one-off campaigns",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Shield,
      title: "Brand-Safe Quality Control",
      description: "Every piece is vetted against your standards before delivery",
      gradient: "from-indigo-500 to-purple-500"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
            Why VideoForce.ai is <span className="text-gradient">Different</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Other platforms give you a creator directory. VideoForce.ai gives you a content engine.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* First two in top row */}
          {differentiators.slice(0, 2).map((diff, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${diff.gradient} flex items-center justify-center mb-6`}>
                <diff.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{diff.title}</h3>
              <p className="text-gray-600 leading-relaxed">{diff.description}</p>
            </div>
          ))}
          
          {/* Third item spans full width on mobile, centered on desktop */}
          <div className="lg:col-start-2 bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${differentiators[2].gradient} flex items-center justify-center mb-6`}>
              {(() => {
                const IconComponent = differentiators[2].icon;
                return <IconComponent className="w-8 h-8 text-white" />;
              })()}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{differentiators[2].title}</h3>
            <p className="text-gray-600 leading-relaxed">{differentiators[2].description}</p>
          </div>
        </div>

        {/* Bottom row - 2 items */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {differentiators.slice(3, 5).map((diff, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${diff.gradient} flex items-center justify-center mb-6`}>
                <diff.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{diff.title}</h3>
              <p className="text-gray-600 leading-relaxed">{diff.description}</p>
            </div>
          ))}
        </div>

        {/* Value Proposition Summary */}
        <div className="bg-gradient-to-r from-purple-600 to-orange-500 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">
            Stop Renting Creators. Start Owning Your Creator Pipeline.
          </h3>
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-2">Save Money</div>
              <div className="text-sm opacity-90">Lower CAC with perpetual rights</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Save Time</div>
              <div className="text-sm opacity-90">AI automates creator ops</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Build Assets</div>
              <div className="text-sm opacity-90">Content stays yours forever</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Drive Growth</div>
              <div className="text-sm opacity-90">Authentic content = higher ROI</div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="xl" 
              className="bg-white text-purple-600 hover:bg-gray-100"
              onClick={() => window.location.href = '/book-call'}
            >
              Book a Call
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.open('https://app.videofusion.io/auth/sign-up', '_blank')}
            >
              Start Free Trial
            </Button>
          </div>
          <p className="text-sm opacity-75 mt-4">
            Free trial • No commitment required
          </p>
        </div>
      </div>
    </section>
  )
}

export default CreatorSourcingDifferentiators
