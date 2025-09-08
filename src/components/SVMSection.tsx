import { Button } from "@/components/ui/button";
import { Brain, BarChart, Zap, Target } from "lucide-react";

const SVMSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Predicts authentic content performance with 94% accuracy",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: BarChart, 
      title: "Validates against 3B+ viral posts",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Catches creative fatigue early", 
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Target,
      title: "Competitive intelligence built-in",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-brand-purple uppercase tracking-wide">
            PROPRIETARY TECHNOLOGY
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-4 mb-6">
            Small Video Model (SVM)
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Predicts which authentic content will convert before you spend on ads
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Powered by patented Highlights extraction • Validates real content performance vs synthetic AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="card-elevated rounded-xl p-6 text-center space-y-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mx-auto`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <p className="font-medium leading-snug">
                {feature.title}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="gradient" size="xl" className="mb-4">
            Start Free with Highlights
          </Button>
          <p className="text-sm text-muted-foreground">
            No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SVMSection;