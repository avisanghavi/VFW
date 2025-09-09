import { Button } from "@/components/ui/button";
import { Rocket, Brain, Shield, CheckCircle, TrendingUp, Sparkles, Zap, Crown } from "lucide-react";

const OfferingsSection = () => {
  const steps = [
    {
      number: "1",
      title: "AI Strategy Hub",
      subtitle: "Intelligent business transformation & planning",
      icon: Brain,
      features: [
        { icon: Brain, title: "Smart Analytics", description: "AI-powered business insights & forecasting" },
        { icon: TrendingUp, title: "Growth Optimization", description: "Data-driven scaling strategies" },
        { icon: Sparkles, title: "Market Intelligence", description: "Competitive analysis & opportunities" }
      ],
      highlights: [
        "Custom AI models for your business",
        "Real-time performance monitoring"
      ]
    },
    {
      number: "2", 
      title: "Automation Suite",
      subtitle: "Streamline operations with intelligent workflows",
      icon: Zap,
      features: [
        { icon: Rocket, title: "Process Automation", description: "Eliminate repetitive tasks instantly" },
        { icon: CheckCircle, title: "Quality Assurance", description: "AI-powered error detection & prevention" },
        { icon: Zap, title: "Smart Integrations", description: "Connect all your tools seamlessly" }
      ],
      highlights: [
        "FREE: 30-day trial with full features",
        "API: Enterprise-grade integrations"
      ]
    },
    {
      number: "3",
      title: "Premium Support", 
      subtitle: "White-glove service for enterprise success",
      icon: Crown,
      features: [
        { icon: Crown, title: "Dedicated Success Manager", description: "Personal expert for your growth journey" },
        { icon: Shield, title: "Priority Support", description: "24/7 enterprise-level assistance" },
        { icon: TrendingUp, title: "Custom Development", description: "Bespoke solutions for unique challenges" }
      ],
      highlights: [
        "99.9% uptime SLA guarantee",
        "Custom training & onboarding",
        "Advanced security & compliance"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-brand-purple uppercase tracking-wide">
            OUR SERVICES
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-4 mb-6">
            Complete Business Transformation Suite
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From strategic planning to full automation - everything you need to scale your business with AI-powered solutions.
          </p>
          
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-brand-purple rounded-full"></span>
              Trusted by 500+ businesses worldwide
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
                    Start Free Trial
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    30-day free trial
                  </p>
                </div>
              )}

              {/* Learn More for other steps */}
              {index !== 1 && (
                <Button variant="outline" className="w-full mt-6">
                  Get Started
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
