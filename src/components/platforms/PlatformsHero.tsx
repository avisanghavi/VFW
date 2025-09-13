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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
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

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/80 border border-gray-100">
                <Video className="w-8 h-8 text-blue-600" />
                <div>
                  <div className="font-semibold">Extract Highlights</div>
                  <div className="text-sm text-muted-foreground">Automatically from video</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/80 border border-gray-100">
                <TrendingUp className="w-8 h-8 text-green-600" />
                <div>
                  <div className="font-semibold">Scale Content</div>
                  <div className="text-sm text-muted-foreground">Multiple formats</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/80 border border-gray-100">
                <Zap className="w-8 h-8 text-purple-600" />
                <div>
                  <div className="font-semibold">API Ready</div>
                  <div className="text-sm text-muted-foreground">Easy integration</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-orange-600 hover:opacity-90 text-white text-lg px-8 py-4 h-auto"
                onClick={() => window.location.href = '/book-call'}
              >
                <Building className="w-5 h-5 mr-2" />
                Become a Partner
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white text-lg px-6 py-4 h-auto"
                onClick={() => window.open('https://app.videofusion.io/auth/sign-up', '_blank')}
              >
                Try Integration Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>


          </div>

          {/* Right Content - Integration Preview */}
          <div className="relative lg:pl-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Integration Benefits</h3>
                <p className="text-sm text-gray-600">What your customers experience</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200">
                  <Target className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-blue-900">Extract Viral Moments</div>
                    <div className="text-sm text-blue-700">Automatically from long-form content</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-green-50 to-green-100 border border-green-200">
                  <Zap className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-green-900">Multi-Platform Clips</div>
                    <div className="text-sm text-green-700">One video becomes many formats</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200">
                  <Star className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-purple-900">AI-Powered ROI</div>
                    <div className="text-sm text-purple-700">Optimize content performance</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200">
                  <Star className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-emerald-900">Easy Integration + Revenue Share</div>
                    <div className="text-sm text-emerald-700">White-label ready • API integration in minutes • Revenue sharing model available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
