import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 hero-bg">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Patented AI Agents That Deliver{" "}
                <span className="text-gradient">Profitable Video</span>{" "}
                <span className="text-gradient">Marketing</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Your growth agents, working 24/7 to source authentic creators, 
                extract high-value video assets, and run campaigns with winning 
                ad formulas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gradient" size="xl" className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                Start Free with Highlights
              </Button>
              <p className="text-sm text-muted-foreground self-center">
                No credit card required.
              </p>
            </div>
          </div>

          {/* Right Content - Demo Preview */}
          <div className="relative">
            <div className="card-elevated rounded-2xl p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✨</span>
                </div>
                <div>
                  <h3 className="font-semibold">See Our AI Growth Agents in Action</h3>
                  <p className="text-sm text-muted-foreground">
                    Watch highlights being auto-extracted → Ad creation → Real-time ROAS optimization
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-brand-purple/10 to-brand-orange/5 rounded-xl p-6 text-center">
                <p className="text-sm font-medium">[2-min platform demo animation]</p>
                <div className="mt-4 h-32 bg-gradient-to-r from-brand-purple/20 to-brand-orange/20 rounded-lg flex items-center justify-center">
                  <Play className="w-12 h-12 text-brand-purple" />
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