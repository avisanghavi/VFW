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
        { title: "Winning Ads", description: "Create & test high-converting campaigns" },
        { title: "Smart Media Buying", description: "AI-optimized bidding & placement" },
        { title: "24/7 Optimization", description: "Scale winners, kill losers automatically" }
      ],
      highlights: [
        "Optimizes real performance data, not assumptions",
        "Powered by our Small Video Model",
        "Multi-platform optimization"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-brand-purple uppercase tracking-wide">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-4 mb-6">
            From Content to Conversions - Fully Automated
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Source authentic creators. Extract winning moments. Scale profitable campaigns. All on autopilot.
          </p>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-brand-purple rounded-full"></span>
              Powered by U.S. Patent #12,347,462
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-brand-purple text-white flex items-center justify-center font-bold text-xl">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.subtitle}</p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-6">
                {step.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    {feature.icon ? (
                      <feature.icon className="w-5 h-5 text-brand-purple mt-1 flex-shrink-0" />
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-brand-purple/20 mt-1 flex-shrink-0" />
                    )}
                    <div>
                      <h4 className="font-semibold">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="space-y-2 mb-6">
                {step.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button for step 2 */}
              {index === 1 && (
                <div className="mt-6">
                  <Button variant="gradient" className="w-full">
                    Start Free with Highlights
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    No credit card required
                  </p>
                </div>
              )}

              {/* Learn More for other steps */}
              {index !== 1 && (
                <Button variant="outline" className="w-full mt-6">
                  Learn More
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;