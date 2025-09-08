import { Button } from "@/components/ui/button";
import { Play, Sparkles, ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-orange-50/20"></div>
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-purple-200/50 shadow-sm">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">Patented AI Technology</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="text-gray-900">AI Agents That</span>
                <br />
                <span className="text-gradient">Deliver Profitable</span>
                <br />
                <span className="text-gradient">Video Marketing</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                Your growth agents work 24/7 to source authentic creators, extract high-value video assets, and run campaigns with winning ad formulas.
              </p>
            </div>

            {/* CTA Section */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="gradient" 
                  size="xl" 
                  className="group relative overflow-hidden"
                >
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Start Free with Highlights
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="xl"
                  className="border-gray-200 hover:border-purple-300 hover:bg-purple-50/50"
                >
                  Book a Demo
                </Button>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>No credit card required</span>
                </div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <span>Setup in 2 minutes</span>
              </div>
            </div>
          </div>

          {/* Right Content - Modern Demo Preview */}
          <div className="relative lg:pl-8">
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg animate-float opacity-90 flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
            
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg animate-float-delayed opacity-90 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>

            {/* Main Demo Card */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
              {/* Header */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    AI Growth Agents in Action
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Watch highlights being auto-extracted → Ad creation → Real-time ROAS optimization
                  </p>
                </div>
              </div>
              
              {/* Video Preview */}
              <div className="relative group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border-2 border-gray-200/50 flex items-center justify-center">
                  {/* Play Button */}
                  <div className="w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-purple-600 ml-1" fill="currentColor" />
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 text-white text-sm rounded-full backdrop-blur-sm">
                    2:30
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Stats Preview */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">8X</div>
                  <div className="text-xs text-gray-500">ROAS Achieved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">90%</div>
                  <div className="text-xs text-gray-500">Content Repurposed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">3X</div>
                  <div className="text-xs text-gray-500">Higher Engagement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;