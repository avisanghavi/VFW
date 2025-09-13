"use client"

import { Button } from "@/components/ui/button"
import { Check, Zap, Upload, Clock, Star, ArrowRight, Sparkles } from "lucide-react"

const HighlightsPricing = () => {
  const plans = [
    {
      name: "Freemium",
      price: "$0",
      period: "forever",
      description: "Perfect for testing our AI technology",
      features: [
        "10 minutes video processing/month",
        "Patented Small Video Model",
        "Upload MP4 & MOV files (up to 10MB each)",
        "1GB secure cloud storage",
        "1 project workspace to organize content",
        "Smart content search & AI-powered filters",
        "5 professional video exports per month"
      ],
      cta: "Start Free Forever",
      popular: false,
      highlight: false
    },
    {
      name: "Get Started",
      price: "$49",
      period: "per month",
      description: "Ideal for content creators & small teams",
      features: [
        "100 minutes video processing/month",
        "Patented Small Video Model",
        "Upload larger files (up to 100MB each)",
        "2GB secure cloud storage",
        "Unlimited project workspaces",
        "Advanced NLP search & content filters",
        "Unlimited professional video exports",
        "Priority email support"
      ],
      cta: "Start 7-Day Free Trial",
      popular: true,
      highlight: true
    },
    {
      name: "Pro",
      price: "$99",
      period: "per month",
      description: "For agencies & professional creators", 
      features: [
        "300 minutes video processing/month",
        "Patented Small Video Model",
        "Large file uploads (up to 1GB each)",
        "50GB secure cloud storage",
        "Unlimited project workspaces",
        "Professional NLP search & filters",
        "Unlimited exports in MP4 & XML formats",
        "Priority support & account management"
      ],
      cta: "Start 14-Day Free Trial",
      popular: false,
      highlight: false
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 mb-6">
            <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
            <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide">Simple Pricing</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Choose Your <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">AI Video Plan</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The only Patented Small Video Model for highlights in the market. Upload your videos, let our AI find the best moments, and export professional highlights - starting completely free.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-3xl p-8 ${
                plan.highlight 
                  ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-2xl scale-105 border-0' 
                  : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className={`text-4xl font-bold ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlight ? 'text-purple-100' : 'text-gray-500'}`}>
                    /{plan.period}
                  </span>
                </div>
                <p className={`text-sm ${plan.highlight ? 'text-purple-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                      plan.highlight ? 'text-green-300' : 'text-green-500'
                    }`} />
                    <span className={`text-sm ${plan.highlight ? 'text-purple-100' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.highlight 
                    ? 'bg-white text-purple-600 hover:bg-gray-100' 
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                } rounded-xl py-3 font-semibold`}
                onClick={() => window.open('https://app.videofusion.io/auth/sign-up', '_blank')}
              >
                {plan.name === "Free" ? <Upload className="w-4 h-4 mr-2" /> : <Zap className="w-4 h-4 mr-2" />}
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Clock className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="font-semibold text-gray-900 mb-1">Cancel Anytime</div>
              <div className="text-sm text-gray-600">No long-term commitments</div>
            </div>
            <div>
              <Zap className="w-8 h-8 text-pink-600 mx-auto mb-3" />
              <div className="font-semibold text-gray-900 mb-1">Instant Results</div>
              <div className="text-sm text-gray-600">Videos processed in under 60 seconds</div>
            </div>
            <div>
              <Star className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <div className="font-semibold text-gray-900 mb-1">14-Day Money Back</div>
              <div className="text-sm text-gray-600">100% satisfaction guarantee</div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg px-12 py-4 h-auto rounded-2xl shadow-xl"
            onClick={() => window.open('https://app.videofusion.io/auth/sign-up', '_blank')}
          >
            <Upload className="w-5 h-5 mr-3" />
            Start Free Trial - Test Our AI Today
            <ArrowRight className="w-5 h-5 ml-3" />
          </Button>
          <p className="text-sm text-gray-500 mt-4">The only Patented Small Video Model technology - Try risk-free with 10 minutes of processing</p>
        </div>
      </div>
    </section>
  )
}

export default HighlightsPricing
