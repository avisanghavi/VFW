"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Video, TrendingUp, ArrowRight, Sparkles } from "lucide-react"
import Header from "@/components/Header"

export default function SignInClient() {
  const agents = [
    {
      id: "creator-sourcing",
      title: "Creator Sourcing",
      description: "Creator discovery and content sourcing platform",
      icon: Users,
      loginUrl: "https://cim.cipio.ai/auth/login",
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50"
    },
    {
      id: "highlights",
      title: "Highlights",
      description: "Video highlights extraction platform",
      icon: Video,
      loginUrl: "https://app.videofusion.io/auth/login",
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      id: "performance-marketing", 
      title: "Performance Marketing",
      description: "Media optimization and strategy consulting",
      icon: TrendingUp,
      loginUrl: "https://calendar.app.google/6fyJNyuifttccPer6",
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      isCalendar: true
    }
  ]

  const handleAgentSelection = (agent: typeof agents[0]) => {
    // Track analytics if needed
    window.open(agent.loginUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-orange-50/20">
      <Header />
      <main>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-40 w-72 h-72 bg-purple-200/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-orange-200/15 rounded-full blur-2xl"></div>
      </div>

      <div className="container relative z-10 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight mb-4 text-gray-900">
              Sign In to VideoForce.ai
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select your platform to continue
            </p>
          </div>

          {/* Agent Selection Cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {agents.map((agent) => {
              const IconComponent = agent.icon
              return (
                <Card 
                  key={agent.id}
                  className={`relative overflow-hidden border-2 hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105 bg-gradient-to-br ${agent.bgGradient}`}
                  onClick={() => handleAgentSelection(agent)}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <CardHeader className="relative z-10 text-center pb-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${agent.gradient} flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{agent.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed text-gray-600">
                      {agent.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <Button 
                      className={`w-full h-12 rounded-xl font-semibold bg-gradient-to-r ${agent.gradient} hover:shadow-lg transition-all duration-300`}
                      onClick={(e) => {
                        e.stopPropagation()
                        handleAgentSelection(agent)
                      }}
                    >
                      {agent.isCalendar ? 'Continue' : 'Sign In'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Footer Note */}
          <div className="text-center mt-12">
            <p className="text-gray-500">
              Need help? 
              <a href="/book-call" className="text-purple-600 hover:text-purple-700 font-medium ml-1">
                Contact support →
              </a>
            </p>
          </div>
        </div>
      </div>
      </main>
    </div>
  )
}
