"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const HighlightsFeatures = () => {

  const pricingPlans = [
    {
      name: "Freemium",
      price: "Free",
      period: "forever",
      description: "Perfect for testing our AI technology",
      features: [
        "10 minutes video processing/month",
        "Patent-protected AI technology",
        "Upload MP4 & MOV files (up to 10MB each)",
        "1GB total cloud storage",
        "1 project workspace",
        "Smart content search & filters",
        "5 video exports per month"
      ],
      cta: "Start Free Forever",
      popular: true
    },
    {
      name: "Get Started",
      price: "$49",
      period: "month",
      description: "Ideal for content creators & small teams",
      features: [
        "100 minutes video processing/month",
        "Patent-protected AI algorithms",
        "Upload larger files (up to 100MB each)",
        "2GB total cloud storage",
        "Unlimited project workspaces",
        "Advanced NLP search & filters",
        "Unlimited video exports"
      ],
      cta: "Start 7-Day Free Trial",
      popular: false
    },
    {
      name: "Pro",
      price: "$99",
      period: "month", 
      description: "For agencies & professional creators",
      features: [
        "300 minutes video processing/month",
        "Exclusive patent-protected technology",
        "Large file uploads (up to 1GB each)",
        "50GB total cloud storage",
        "Unlimited project workspaces",
        "Professional NLP search & filters",
        "Unlimited exports in MP4 & XML"
      ],
      cta: "Start 14-Day Free Trial",
      popular: false
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container max-w-7xl">

        {/* Pricing Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Choose Your <span className="text-gradient">AI Video Plan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The only patent-protected AI video highlights technology. Process your videos, extract key moments, and export professional highlights - starting completely free forever.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-3xl p-8 shadow-lg border-2 transition-all hover:shadow-xl ${
                plan.popular 
                  ? 'border-purple-500 scale-105' 
                  : 'border-gray-200 hover:border-purple-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Free" && <span className="text-gray-500">/{plan.period}</span>}
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full h-12 rounded-xl font-semibold ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white'
                    : 'border-2 border-purple-500 text-purple-600 hover:bg-purple-50'
                }`}
                variant={plan.popular ? "default" : "outline"}
                onClick={() => window.open('https://app.videofusion.io/auth/sign-up', '_blank')}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Need a custom plan? Have questions?</p>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-purple-500 text-purple-600 hover:bg-purple-50"
            onClick={() => window.location.href = '/book-call'}
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HighlightsFeatures
