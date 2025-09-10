"use client"

import { Quote } from "lucide-react"

const CreatorSourcingVoices = () => {
  const testimonials = [
    {
      quote: "This is no longer a test. We now have a scalable influencer engine that consistently delivers.",
      company: "Build-A-Bear",
      person: "Marketing Team"
    },
    {
      quote: "The numbers don't lie – the vast majority of online joins came from VideoForce.ai.",
      company: "World Gym",
      person: "Franchise Owner"
    },
    {
      quote: "VideoForce.ai dramatically lowered our CAC while boosting signups.",
      company: "Fitness SF",
      person: "Marketing Director"
    }
  ]

  return (
    <section className="py-12 bg-gradient-to-br from-purple-50 via-white to-orange-50">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-purple-200/50 shadow-sm mb-6">
            <Quote className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">Customer Voices</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900">
            What Our Customers <span className="text-gradient">Say</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real feedback from brands that transformed their creator sourcing with VideoForce.ai
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <Quote className="w-12 h-12 text-purple-200 mb-4" />
                <blockquote className="text-lg font-medium text-gray-900 leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <div className="font-semibold text-gray-900">{testimonial.company}</div>
                <div className="text-sm text-gray-600">{testimonial.person}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join These Success Stories
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              See why leading brands choose VideoForce.ai for their creator sourcing needs. 
              Get the same results with our proven AI-powered platform.
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-green-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Ready to get started? Book your demo today.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreatorSourcingVoices
