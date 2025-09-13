"use client"

import { Button } from "@/components/ui/button"
import { Users, Zap, Target, ArrowRight, CheckCircle, TrendingUp, Sparkles } from "lucide-react"

const HighlightsWorkflow = () => {
  const agents = [
    {
      number: "1",
      title: "Creator Sourcing",
      subtitle: "Sources authentic creators & content 24/7",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      description: "Find and manage UGC creators, influencers, and viral trends automatically",
      link: "/creator-sourcing"
    },
    {
      number: "2", 
      title: "Highlights",
      subtitle: "Extracts winning moments from any video",
      icon: Zap,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      description: "AI finds killer hooks, social proof, and CTAs in seconds",
      link: "/highlights",
      active: true
    },
    {
      number: "3",
      title: "Performance Media", 
      subtitle: "Converts content into profitable campaigns",
      icon: Target,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      description: "Create, test, and optimize high-converting ad campaigns",
      link: "/performance-media"
    }
  ]

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="container max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-orange-100 border border-purple-200 mb-6">
            <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
            <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide">Complete AI Ecosystem</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Highlights Powers the <span className="bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent">Middle Stage</span> of Revenue
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            VideoForce operates three AI agents that work together: <strong>Creator Sourcing</strong> finds authentic content, <strong>Highlights</strong> extracts the gold, and <strong>Performance Media</strong> scales what works. Each agent amplifies the others.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting line */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="hidden lg:block h-1 bg-gradient-to-r from-blue-200 via-purple-300 to-orange-200"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {agents.map((agent, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 z-10 w-12 h-12 rounded-full ${agent.active ? 'bg-gradient-to-r from-purple-600 to-orange-500' : 'bg-white border-2 ' + agent.borderColor} flex items-center justify-center shadow-lg`}>
                  <span className={`font-bold text-lg ${agent.active ? 'text-white' : agent.color}`}>
                    {agent.number}
                  </span>
                </div>

                {/* Card */}
                <div className={`${agent.active ? 'ring-2 ring-purple-400 ring-offset-2' : ''} bg-white rounded-2xl border-2 ${agent.borderColor} p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${agent.active ? 'scale-105' : 'hover:scale-102'}`}>
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 rounded-xl ${agent.bgColor} flex items-center justify-center mx-auto mb-4`}>
                      <agent.icon className={`w-8 h-8 ${agent.color}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{agent.title}</h3>
                    <p className={`text-sm font-medium ${agent.color} mb-3`}>{agent.subtitle}</p>
                    <p className="text-gray-600 text-sm">{agent.description}</p>
                  </div>

                  {agent.active ? (
                    <div className="space-y-3">
                      <div className={`${agent.bgColor} rounded-lg p-3 border ${agent.borderColor}`}>
                        <p className="text-sm font-semibold text-purple-700 flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          You are here - extracting gold!
                        </p>
                      </div>
                      <Button 
                        className="w-full bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        See Highlights in Action
                      </Button>
                    </div>
                  ) : (
                    <Button 
                      variant="outline" 
                      className={`w-full border-2 ${agent.borderColor} ${agent.color} hover:${agent.bgColor}`}
                      onClick={() => window.location.href = agent.link}
                    >
                      Explore {agent.title}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>

                {/* Arrow between steps (hidden on mobile) */}
                {index < agents.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Ready to see the complete VideoForce ecosystem in action?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white"
              onClick={() => window.location.href = '/book-call'}
            >
              Book Full Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-purple-500 text-purple-600 hover:bg-purple-50"
              onClick={() => window.location.href = '/'}
            >
              See All Agents
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HighlightsWorkflow

