"use client"

import { AlertTriangle, Clock, DollarSign, Users, Zap } from "lucide-react"

const CreatorSourcingProblem = () => {
  const problems = [
    {
      icon: Clock,
      title: "Manual sourcing is slow",
      description: "Teams spend weeks finding the right creators instead of creating content"
    },
    {
      icon: DollarSign,
      title: "Rights expire quickly",
      description: "Content becomes worthless after 30-90 days, turning assets into expenses"
    },
    {
      icon: AlertTriangle,
      title: "Campaigns stall",
      description: "Teams can't keep content pipelines full, causing marketing gaps"
    },
    {
      icon: Users,
      title: "Manual management burns out teams",
      description: "Briefs, approvals, and payments handled by hand drain resources"
    }
  ]

  return (
    <section className="py-12 bg-red-50/30">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full mb-6">
            <AlertTriangle className="w-4 h-4 text-red-600" />
            <span className="text-sm font-medium text-red-700">The Problem</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
            Content Sourcing Today is <span className="text-red-600">Broken</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Manual creator sourcing is slow, expensive, and inconsistent. Most brands are stuck in outdated processes that waste time and money.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-red-100">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <problem.icon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{problem.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Impact Statement */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-12 shadow-lg border border-red-100">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                The Result? Wasted Budgets and Missed Opportunities
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Brands spend 70% of their time on creator operations instead of strategy. Content expires before ROI is realized. Teams burn out managing manual processes.
              </p>
              <div className="flex items-center justify-center">
                <Zap className="w-6 h-6 text-orange-500 mr-2" />
                <span className="text-lg font-semibold text-gray-900">There&apos;s a better way.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreatorSourcingProblem
