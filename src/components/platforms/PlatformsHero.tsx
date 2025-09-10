"use client"

import { Button } from "@/components/ui/button"
import { TrendingUp, Users, DollarSign, ArrowRight, Sparkles, Building, Star, Target, Zap, Video } from "lucide-react"

export default function PlatformsHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-brand-purple/20 to-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-brand-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-brand-orange/10 to-brand-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-brand-purple/10 border border-blue-500/20">
                <Building className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-sm font-semibold text-blue-600">Partner Integration</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Give Your Customers <span className="text-gradient">10X More Power</span> from Their Videos
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Integrate VideoForce Highlights to help your customers maximize their video content ROI. Our enterprise-grade AI identifies high-converting moments and enables scalable content repurposing across marketing channels.
              </p>
            </div>

            {/* Customer Value Props */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/80 border border-gray-100 hover:shadow-lg transition-shadow">
                <Video className="w-8 h-8 text-blue-600" />
                <div>
                  <div className="font-semibold">10X Content</div>
                  <div className="text-sm text-muted-foreground">From every video</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/80 border border-gray-100 hover:shadow-lg transition-shadow">
                <TrendingUp className="w-8 h-8 text-green-600" />
                <div>
                  <div className="font-semibold">5X Engagement</div>
                  <div className="text-sm text-muted-foreground">Higher performance</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/80 border border-gray-100 hover:shadow-lg transition-shadow">
                <Zap className="w-8 h-8 text-purple-600" />
                <div>
                  <div className="font-semibold">Hours → Minutes</div>
                  <div className="text-sm text-muted-foreground">Processing time</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-brand-purple hover:opacity-90 text-white text-lg px-8 py-4 h-auto">
                <Building className="w-5 h-5 mr-2" />
                Partner with VideoForce
              </Button>
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-lg px-6 py-4 h-auto">
                See Integration Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Highlights Differentiator */}
            <div className="flex items-center gap-3 p-6 rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200">
              <Sparkles className="w-8 h-8 text-purple-600" />
              <div>
                <div className="font-bold text-purple-900 text-lg">Exclusive VideoForce Highlights Technology</div>
                <div className="text-sm text-purple-700 mt-1">The only patent-protected AI specifically designed for video content extraction • 3X more accurate than general LLMs • Instantly finds hooks, social proof, and CTAs</div>
              </div>
            </div>

            {/* Partner Benefits */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200">
              <Star className="w-6 h-6 text-emerald-600" />
              <div>
                <div className="font-semibold text-emerald-900">Easy Integration + Revenue Share</div>
                <div className="text-sm text-emerald-700">White-label ready • API integration in minutes • Revenue sharing model available</div>
              </div>
            </div>
          </div>

          {/* Right Content - Customer Value Demonstration */}
          <div className="relative lg:pl-8">
            {/* Main Value Card */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
              {/* Customer Success Metrics */}
              <div className="space-y-6 mb-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What Your Customers Get:</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-lg bg-blue-50 border border-blue-200">
                    <div className="text-3xl font-bold text-blue-600 mb-1">10X</div>
                    <div className="text-sm text-blue-700">More Content</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-green-50 border border-green-200">
                    <div className="text-3xl font-bold text-green-600 mb-1">5X</div>
                    <div className="text-sm text-green-700">Engagement</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-purple-50 border border-purple-200">
                    <div className="text-3xl font-bold text-purple-600 mb-1">API</div>
                    <div className="text-sm text-purple-700">Ready</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-orange-50 border border-orange-200">
                    <div className="text-3xl font-bold text-orange-600 mb-1">Patent</div>
                    <div className="text-sm text-orange-700">Protected</div>
                  </div>
                </div>
              </div>

              {/* Customer Benefits */}
              <div className="space-y-3">
                <div className="text-sm font-semibold text-gray-700 mb-3">Customer Benefits:</div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-200">
                  <Target className="w-4 h-4 text-blue-600" />
                  <div className="text-sm">Extract viral moments automatically from long-form videos</div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-200">
                  <Zap className="w-4 h-4 text-green-600" />
                  <div className="text-sm">Turn one video into multiple platform-specific clips</div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-purple-50 border border-purple-200">
                  <Star className="w-4 h-4 text-purple-600" />
                  <div className="text-sm">Increase video ROI with AI-powered optimization</div>
                </div>
              </div>
            </div>

            {/* Floating Customer Value Stats */}
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border">
              <div className="text-2xl font-bold text-blue-600">10X</div>
              <div className="text-sm text-gray-600">Content</div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border">
              <div className="text-2xl font-bold text-green-600">5X</div>
              <div className="text-sm text-gray-600">Engagement</div>
            </div>

            <div className="absolute top-1/2 -right-8 bg-white rounded-2xl shadow-xl p-4 border">
              <div className="text-2xl font-bold text-purple-600">AI</div>
              <div className="text-sm text-gray-600">Highlights</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
