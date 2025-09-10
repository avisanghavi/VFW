"use client"

import Image from "next/image"
import { TrendingUp, Users, Clock, DollarSign, Target, Zap } from "lucide-react"

const CreatorSourcingProof = () => {
  const mainCaseStudy = {
    company: "Build-A-Bear",
    logo: "/logos/BAB_Logo.jpg",
    industry: "Retail & Toys",
    subtitle: "From Test to Scalable Creator Engine (Deep Dive)",
    challenge: "Transform from one-off creator tests to a scalable, cost-efficient influencer engine",
    solution: "AI-powered creator discovery and perpetual rights management across 18 vetted creators",
    results: [
      { metric: "225%", label: "Views Growth", details: "4M → 8.9M → 12.9M views" },
      { metric: "60%", label: "CPV Drop", details: "$0.010 → $0.004 cost per view" },
      { metric: "64%", label: "CPE Reduction", details: "$0.14 → $0.05 cost per engagement" },
      { metric: "61%", label: "Success Rate", details: "11 of 18 creators delivered 3%+ ER" }
    ],
    quote: "This is no longer a test. Build-A-Bear now has a scalable, cost-efficient influencer engine — one that consistently delivers.",
    person: "Build-A-Bear Marketing Team"
  }

  const quickProofTiles = [
    {
      company: "World Gym / Fitness SF",
      logo: "/logos/WorldGym_Logo.png",
      metric: "105%",
      label: "Online Joins Increase",
      details: "6 creators → 104 new signups in one month",
      subDetails: "+105% online joins, +142% comments"
    },
    {
      company: "Museum of Ice Cream",
      logo: "/logos/MOIC_Logo.png",
      metric: "Extended",
      label: "Content Usability",
      details: "Extended usability of existing creator assets",
      subDetails: "We saved costs and extended content life."
    },
    {
      company: "Fitness SF",
      logo: "/logos/FitnessSF_Logo.png",
      metric: "86%",
      label: "Cheaper Cost Per Lead",
      details: "61% drop in CAC, 2.5x ROAS",
      subDetails: "VideoForce.ai dramatically lowered our CAC while boosting signups"
    }
  ]

  const stats = [
    {
      icon: Clock,
      metric: "24 Hours",
      label: "Average Discovery Time",
      comparison: "vs 2-3 weeks with competitors",
      color: "text-purple-600"
    },
    {
      icon: Users,
      metric: "50M+",
      label: "Vetted Creators",
      comparison: "Across all platforms & niches",
      color: "text-orange-600"
    },
    {
      icon: Target,
      metric: "94%",
      label: "Match Accuracy",
      comparison: "Patented AI prediction",
      color: "text-green-600"
    },
    {
      icon: DollarSign,
      metric: "8X",
      label: "Average ROAS",
      comparison: "From creator campaigns",
      color: "text-blue-600"
    }
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-brand-purple uppercase tracking-wide">
            PROVEN RESULTS
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-2 mb-4 text-gray-900">
            Real Brands, Real <span className="text-gradient">ROI</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how brands achieve exceptional ROI and growth with our patented creator sourcing technology.
          </p>
        </div>

        {/* Main Case Study - Build-A-Bear Deep Dive */}
        <div className="bg-gradient-to-r from-purple-50 to-orange-50 rounded-3xl p-6 lg:p-8 mb-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Company Info */}
                <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Image
                  src={mainCaseStudy.logo}
                  alt={`${mainCaseStudy.company} logo`}
                  width={60}
                  height={60}
                  className="w-15 h-15 object-contain rounded-lg"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{mainCaseStudy.company}</h3>
                  <p className="text-purple-600 font-medium">{mainCaseStudy.subtitle}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                  <p className="text-gray-600">{mainCaseStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">VideoForce.ai Solution</h4>
                  <p className="text-gray-600">{mainCaseStudy.solution}</p>
                </div>
              </div>

                <blockquote className="border-l-4 border-purple-500 pl-6 italic text-gray-700">
                  &quot;{mainCaseStudy.quote}&quot;
                  <footer className="text-sm text-gray-500 mt-2">— {mainCaseStudy.person}</footer>
                </blockquote>
            </div>

            {/* Right: Results Grid */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                {mainCaseStudy.results.map((result, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-gradient mb-2">{result.metric}</div>
                    <div className="text-sm font-semibold text-gray-900 mb-1">{result.label}</div>
                    <div className="text-xs text-gray-600">{result.details}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <div className="flex items-center justify-center gap-2 text-sm text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span className="font-medium">Scalable Creator Engine Established</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Proof Tiles */}
        <div className="grid md:grid-cols-3 gap-8">
          {quickProofTiles.map((tile, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src={tile.logo}
                  alt={`${tile.company} logo`}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain rounded"
                />
                <h3 className="font-bold text-gray-900">{tile.company}</h3>
              </div>
              
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-gradient mb-2">{tile.metric}</div>
                <div className="text-lg font-semibold text-gray-900">{tile.label}</div>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600">
                <p className="font-medium">{tile.details}</p>
                <p className="italic">&quot;{tile.subDetails}&quot;</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default CreatorSourcingProof
