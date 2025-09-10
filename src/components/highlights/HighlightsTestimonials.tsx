"use client"

import { Star, Quote, TrendingUp, Users, Zap } from "lucide-react"
import Image from "next/image"

const HighlightsTestimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Content Creator",
      company: "SarahStyles (2.3M followers)",
      content: "This is insane! I uploaded a 10-minute makeup tutorial and got 12 viral clips. My engagement went up 340% and I'm finally monetizing my content properly.",
      rating: 5,
      results: "340% engagement increase",
      avatar: "/logos/BAB_Logo.jpg"
    },
    {
      name: "Marcus Rodriguez",
      role: "Marketing Director",
      company: "FitnessFlex",
      content: "We were spending $15K/month on video editors. Now our AI extracts better clips in seconds. ROI improved 8x and our TikTok finally went viral.",
      rating: 5,
      results: "8X ROI improvement",
      avatar: "/logos/FitnessSF_Logo.png"
    },
    {
      name: "Emily Watson",
      role: "Agency Owner", 
      company: "Social Growth Co",
      content: "Game changer for our agency. We can now deliver viral content for 50+ clients without hiring more editors. Clients are seeing 5X more engagement.",
      rating: 5,
      results: "5X more engagement",
      avatar: "/logos/Dig_Logo.png"
    }
  ]

  const stats = [
    { icon: Users, number: "Beta", label: "Early Access Program", color: "purple" },
    { icon: TrendingUp, number: "AI-Powered", label: "Content Analysis", color: "orange" },
    { icon: Zap, number: "2-5min", label: "Processing Time", color: "purple" },
    { icon: Star, number: "Preview", label: "Coming Soon", color: "orange" }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${
                stat.color === 'purple' 
                  ? 'from-brand-purple/20 to-brand-purple/10' 
                  : 'from-brand-orange/20 to-brand-orange/10'
              } flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-8 h-8 ${
                  stat.color === 'purple' ? 'text-brand-purple' : 'text-brand-orange'
                }`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Creators Are Getting <span className="text-gradient">Insane Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See what happens when you stop editing manually and let AI find your viral moments
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-brand-purple/20 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  {testimonial.content}
                </p>
              </div>

              {/* Results Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full mb-6">
                <TrendingUp className="w-4 h-4 text-green-600 mr-2" />
                <span className="text-sm font-semibold text-green-900">{testimonial.results}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-brand-purple font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-brand-purple to-brand-orange rounded-3xl p-12 text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Join Them?
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Stop manually editing. Start creating viral content that actually converts. Get your first 10 minutes of processing completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-brand-purple rounded-2xl font-bold hover:bg-gray-100 transition-colors">
              Get 10 Minutes FREE
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-2xl font-bold hover:bg-white hover:text-brand-purple transition-colors">
              Watch Live Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HighlightsTestimonials
