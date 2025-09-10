"use client"

import { Button } from "@/components/ui/button";
import { Users, Zap, Target, CheckCircle, TrendingUp, Sparkles } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Creator Sourcing",
      subtitle: "Sources authentic creators & content 24/7",
      icon: Users,
      features: [
        { icon: Users, title: "UGC Creators", description: "Find, vet, and manage automatically" },
        { icon: TrendingUp, title: "Influencers", description: "Perfect brand matches" },
        { icon: Sparkles, title: "Viral Trends", description: "Adapt before they peak" }
      ],
      highlights: [
        "Automated outreach & management",
        "Content rights & licensing handled"
      ]
    },
    {
      number: "2", 
      title: "Highlights",
      subtitle: "Extracts profit-driving moments",
      icon: Zap,
      features: [
        { icon: Target, title: "Killer Hooks", description: "Stop-the-scroll moments" },
        { icon: CheckCircle, title: "Social Proof", description: "Testimonials & reviews" },
        { icon: Zap, title: "Strong CTAs", description: "Drive instant action" }
      ],
      highlights: [
        "FREE: 10 min/month processing",
        "API: Available for integration"
      ]
    },
    {
      number: "3",
      title: "Performance Media", 
      subtitle: "Converts authentic content into profitable campaigns",
      icon: Target,
      features: [
        { icon: Target, title: "Winning Ads", description: "Create & test high-converting campaigns" },
        { icon: TrendingUp, title: "Smart Media Buying", description: "AI-optimized bidding & placement" },
        { icon: Zap, title: "24/7 Optimization", description: "Scale winners, kill losers automatically" }
      ],
      highlights: [
        "Optimizes real performance data, not assumptions",
        "Powered by our Small Video Model",
        "Multi-platform optimization"
      ]
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container max-w-6xl">
        {/* Header section exactly like the image */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-brand-purple uppercase tracking-wide">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-4 mb-6 text-gray-900">
            From Content to Conversions - Fully Automated
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Source authentic creators. Extract winning moments. Scale profitable campaigns. All on autopilot.
          </p>
        </div>

        {/* Three columns with patent bar overlaid */}
        <div className="relative">
          {/* Patent bar positioned over the boxes */}
          <div className="absolute top-4 left-0 right-0 z-10">
            <div className="h-1 bg-gradient-to-r from-brand-purple to-brand-orange w-full"></div>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                Powered by U.S. Patent #12,347,462
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 pt-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              {/* Step header with number and title */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-brand-purple text-white flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                  </div>
                </div>
                <p className="text-sm font-medium" style={{color: index === 0 ? '#7C3AED' : index === 1 ? '#EA580C' : '#7C3AED'}}>
                  {step.subtitle}
                </p>
              </div>

              {/* Features list with icons */}
              <div className="space-y-3 mb-6">
                {step.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <feature.icon className="w-4 h-4 text-brand-purple" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                      <p className="text-xs text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Checkmark highlights */}
              <div className="space-y-2 mb-6">
                {step.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>


              {/* CTA Buttons */}
              {index === 1 ? (
                <div className="mt-6">
                  <Button 
                    variant="gradient" 
                    className="w-full"
                    onClick={() => window.open('https://app.videofusion.io/auth/sign-up', '_blank')}
                  >
                    🚀 Start Free with Highlights
                  </Button>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    No credit card required
                  </p>
                </div>
              ) : (
                <Button 
                  variant="outline" 
                  className="w-full mt-6 text-gray-700 border-gray-300 hover:bg-gray-50"
                  onClick={() => window.location.href = '/book-call'}
                >
                  Learn More
                </Button>
              )}
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;