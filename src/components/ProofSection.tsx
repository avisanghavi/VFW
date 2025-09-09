"use client"

import { useMemo, useState } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"

const ProofSection = () => {
  const results = [
    {
      company: "Tire Agent",
      metric: "8X",
      label: "ROAS Achieved",
      details: "On $2,000 ad spend campaign",
      subtitle: "Sept → Oct: $16K to $350K revenue (+268%)",
      person: null
    },
    {
      company: "DIG Restaurants", 
      metric: "400%",
      label: "CTR Improvement",
      details: "0.2-0.3% → 1.4% top performer",
      subtitle: "CPC: $5.38 → $1.87 over 3 months",
      person: null
    },
    {
      company: "Museum of Ice Cream",
      metric: "12%",
      label: "Lower Cost Per Purchase", 
      details: "67% of purchases, 38% of spend",
      subtitle: "Top ad: 57% more purchases vs highest spender",
      person: "Erin Levison\nChief Commercial & Marketing Officer"
    },
    {
      company: "World Gym",
      metric: "105%",
      label: "More Online Signups",
      details: "8 community influencers activated",
      subtitle: "#1 sales month + 104 new clicks to signup",
      person: "AJ Noshirvan\nFranchise Owner"
    },
    {
      company: "Fitness SF", 
      metric: "86%",
      label: "Cheaper Cost Per Lead",
      details: "91% decrease cost per new member",
      subtitle: "2.6X ROAS for new membership campaigns",
      person: "Troy Macfarland\nMarketing Director, Fitness SF"
    },
    {
      company: "Build-A-Bear",
      metric: "3X", 
      label: "Higher Engagement",
      details: "+15% brand engagement overall",
      subtitle: "+142% increase in post comments",
      person: null
    }
  ];

  const videos: { src: string; caption: string }[] = [
    { src: "https://videos.pexels.com/video-files/2795731/2795731-uhd_2560_1440_30fps.mp4", caption: "Blogs + PDPs turned intent into action" },
    { src: "https://videos.pexels.com/video-files/4131955/4131955-uhd_2560_1440_24fps.mp4", caption: "Social proof via TikTok & Meta shops" },
    { src: "https://videos.pexels.com/video-files/5696409/5696409-uhd_2560_1440_24fps.mp4", caption: "UGC highlights → ad-ready variants" },
  ]

  const [api, setApi] = useState<CarouselApi | null>(null)
  const [selected, setSelected] = useState(0)

  // Company → logo path mapping (place logos into public/logos)
  const logos: Record<string, string> = {
    "Tire Agent": "/logos/TireAgent_Logo.png",
    "DIG Restaurants": "/logos/Dig_Logo.png",
    "World Gym": "/logos/WorldGym_Logo.png",
    "Fitness SF": "/logos/FitnessSF_Logo.png",
    "Build-A-Bear": "/logos/BAB_Logo.jpg",
    "Museum of Ice Cream": "/logos/MOIC_Logo.png",
  }

  const renderBrand = useMemo(() => {
    return (company: string) => {
      const src = logos[company]
      if (src) {
        return (
          <img
            src={src}
            alt={`${company} logo`}
            className="w-8 h-8 object-contain rounded"
          />
        )
      }
      return (
        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-brand-purple to-brand-orange flex items-center justify-center">
          <span className="text-white text-xs font-bold">{company.split(' ')[0].charAt(0)}</span>
        </div>
      )
    }
  }, [])

  // Track selected slide for subtle scale/opacity effects
  if (api && api.selectedScrollSnap() !== selected) {
    setSelected(api.selectedScrollSnap())
  }

  return (
    <section id="proof" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-brand-purple uppercase tracking-wide">PROOF IT WORKS</span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-4 mb-3">Real Creators Drive <span className="text-gradient">Real Performance</span></h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">2.6-8X ROAS • Up to 86% Cost Reduction • 400% CTR Improvement</p>
        </div>


        {/* Six video cards with details pinned at the bottom */}
        {(() => {
          const videoByIndex: Record<number, string> = {
            0: "https://videos.pexels.com/video-files/2795731/2795731-uhd_2560_1440_30fps.mp4",
            1: "https://videos.pexels.com/video-files/4131955/4131955-uhd_2560_1440_24fps.mp4",
            2: "https://videos.pexels.com/video-files/5696409/5696409-uhd_2560_1440_24fps.mp4",
            3: "https://videos.pexels.com/video-files/853904/853904-hd_1920_1080_24fps.mp4",
            4: "https://videos.pexels.com/video-files/5532771/5532771-uhd_2560_1440_24fps.mp4",
            5: "https://videos.pexels.com/video-files/6290490/6290490-uhd_2560_1440_30fps.mp4",
          };

          return (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {results.map((result, index) => (
                <div key={index} className="rounded-xl border bg-white overflow-hidden flex flex-col">
                  <div className="aspect-video bg-gray-100">
                    <video
                      className="h-full w-full object-cover"
                      src={videoByIndex[index]}
                      preload="metadata"
                      controlsList="nodownload noplaybackrate"
                      aria-label={`${result.company} proof video`}
                      playsInline
                      muted
                      loop
                      controls
                    />
                  </div>
                  {/* Bottom content */}
                  <div className="p-6 border-t">
                    <div className="flex items-center gap-3">
                      {renderBrand(result.company)}
                      <span className="font-semibold">{result.company}</span>
                    </div>
                    <div className="mt-3">
                      <div className="text-3xl font-bold text-gradient mb-1">{result.metric}</div>
                      <div className="font-semibold text-foreground">{result.label}</div>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground mt-2">
                      <p>{result.details}</p>
                      <p className="font-medium">{result.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );
        })()}
      </div>
    </section>
  );
};

export default ProofSection;