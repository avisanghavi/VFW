"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Share2, Mail, FileText, Video, Megaphone, TrendingUp, Users, Target, MessageSquare, Star, ArrowRight, Play } from "lucide-react"

const HighlightsUseCases = () => {
  const useCases = [
    {
      icon: ShoppingBag,
      title: "Product Detail Pages (PDPs)",
      description: "Build trust and drive conversions with customer testimonials",
      elements: ["Social Proof", "Solutions"],
      stats: "95% of consumers read reviews before purchasing",
      examples: [
        {
          brand: "Apple",
          description: "Clearly outlines product features and solutions (battery life, camera quality, etc.) addressing consumer pain points."
        }
      ],
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: Share2,
      title: "Social Media",
      description: "Capture attention and build authenticity with compelling content",
      elements: ["Hooks", "Social Proof"],
      stats: "60% of consumers view UGC as the most genuine content",
      examples: [
        {
          brand: "Nike",
          description: "Uses powerful visual storytelling and bold headlines to capture attention on Instagram and Twitter."
        },
        {
          brand: "Gymshark",
          description: "Shares influencer-generated Social Proof clips on TikTok, enhancing trust among target audiences."
        }
      ],
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600"
    },
    {
      icon: Megaphone,
      title: "Paid Advertisements",
      description: "Maximize ad performance with strong hooks and clear CTAs",
      elements: ["Hooks", "CTAs"],
      stats: "Strong opening hooks significantly increase ad effectiveness",
      examples: [
        {
          brand: "Dollar Shave Club",
          description: "Captured attention with humorous opening lines, drastically increasing viewer retention."
        },
        {
          brand: "HelloFresh",
          description: "Uses clear CTAs like 'Get 16 Free Meals' to drive immediate action through video ads."
        }
      ],
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-600"
    },
    {
      icon: Mail,
      title: "Emails & Newsletters",
      description: "Boost open rates and engagement with effective hooks and proof",
      elements: ["Hooks", "Social Proof", "CTAs"],
      stats: "88% of consumers trust online reviews as personal recommendations",
      examples: [
        {
          brand: "Sephora",
          description: "Integrates engaging Hook clips from influencer tutorials, boosting open and click-through rates."
        },
        {
          brand: "Warby Parker",
          description: "Integrates customer success stories in emails, reinforcing credibility and driving engagement."
        }
      ],
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600"
    },
    {
      icon: FileText,
      title: "Blog Content",
      description: "Establish thought leadership with problem-solving content",
      elements: ["Problems", "Solutions", "Social Proof"],
      stats: "Content addressing pain points builds long-term trust",
      examples: [
        {
          brand: "Patagonia",
          description: "Embeds Problem and Solution clips in sustainability blogs, establishing brand authority."
        }
      ],
      color: "bg-teal-50 border-teal-200",
      iconColor: "text-teal-600"
    },
    {
      icon: TrendingUp,
      title: "Social Shopping",
      description: "Drive immediate purchases with social proof and urgency",
      elements: ["Social Proof", "CTAs"],
      stats: "55% of shoppers rely on social media for purchase decisions",
      examples: [
        {
          brand: "Fenty Beauty",
          description: "Uses influencer Social Proof highlights on TikTok Shop, increasing trust and purchase intent."
        },
        {
          brand: "Fashion Nova",
          description: "Employs immediate-action CTAs like 'Shop Now—Selling Fast!' driving rapid conversions."
        }
      ],
      color: "bg-pink-50 border-pink-200",
      iconColor: "text-pink-600"
    },
    {
      icon: Video,
      title: "Live Shopping (Coming Soon)",
      description: "Create urgency and drive instant purchases during live events",
      elements: ["Social Proof", "CTAs"],
      stats: "Real-time demonstrations significantly boost viewer trust",
      examples: [
        {
          brand: "Rare Beauty",
          description: "Uses authentic influencer testimonials during TikTok livestreams, boosting conversions."
        },
        {
          brand: "Fanatics Live",
          description: "Incorporates urgency-driven CTAs during live sports merchandise drops."
        }
      ],
      color: "bg-indigo-50 border-indigo-200",
      iconColor: "text-indigo-600"
    }
  ]

  const contentElements = [
    {
      name: "Hooks",
      description: "Captivating openings that grab attention in the first few seconds",
      icon: Target,
      stat: "Strong opening hooks significantly increase ad effectiveness and conversions",
      channels: ["Social Media", "Paid Ads", "Emails", "Newsletters"]
    },
    {
      name: "Social Proof",
      description: "Customer testimonials, reviews, and authentic endorsements",
      icon: Users,
      stat: "95% of consumers read reviews before purchasing, 60% view UGC as most genuine content",
      channels: ["PDPs", "Social Media", "Live Commerce", "Social Shopping", "Blog Content"]
    },
    {
      name: "CTAs",
      description: "Clear, compelling calls-to-action that drive immediate behavior",
      icon: ArrowRight,
      stat: "Clear CTAs guide audiences towards desired actions and drive immediate conversions",
      channels: ["Paid Ads", "Emails", "Social Shopping", "Live Shopping"]
    },
    {
      name: "Problems & Solutions",
      description: "Content that identifies pain points and offers clear solutions",
      icon: MessageSquare,
      stat: "Problem-solving content positions brands as thought leaders and builds long-term trust",
      channels: ["PDPs", "Blog Content", "Social Media"]
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 mb-6">
            <TrendingUp className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Marketing Applications</span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Leverage Content Elements Across 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Marketing Channels</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Brands invest over <strong>$200 billion annually</strong> in influencer marketing, UGC, and branded video—yet 90% of video content remains underutilized due to manual editing inefficiencies. Our patent-protected AI automatically extracts the right elements for each channel.
          </p>
        </div>

        {/* Content Elements Overview */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Key Content Elements We Extract</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentElements.map((element, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <element.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <CardTitle className="text-xl mb-2">{element.name}</CardTitle>
                  <CardDescription className="text-sm mb-4">{element.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-3">
                      <p className="text-xs font-semibold text-blue-800 flex items-center justify-center">
                        <Star className="w-3 h-3 mr-1" />
                        {element.stat}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide text-center">Best for:</p>
                      <div className="flex flex-wrap gap-1.5 justify-center">
                        {element.channels.map((channel, channelIndex) => (
                          <Badge key={channelIndex} variant="secondary" className="text-xs px-2 py-1">
                            {channel}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Conversion CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Unlock Your Video ROI?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join brands saving 90% of editing time while increasing engagement by 5X
            </p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4 h-auto rounded-xl shadow-lg">
              <Play className="w-5 h-5 mr-2" />
              Start Your Free Trial Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-sm mt-4 opacity-75">Patent-protected technology • No credit card required • Instant access</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HighlightsUseCases
