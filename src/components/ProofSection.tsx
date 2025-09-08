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

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-brand-purple uppercase tracking-wide">
            PROOF IT WORKS
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mt-4 mb-6">
            Real Creators Drive <span className="text-gradient">Real Performance</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            2.6-8X ROAS • Up to 86% Cost Reduction • 400% CTR Improvement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <div key={index} className="card-elevated rounded-xl p-6 space-y-4">
              {/* Company & Icon */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-brand-purple to-brand-orange flex items-center justify-center">
                  <span className="text-white text-xs font-bold">
                    {result.company.split(' ')[0].charAt(0)}
                  </span>
                </div>
                <span className="font-semibold">{result.company}</span>
              </div>

              {/* Main Metric */}
              <div>
                <div className="text-4xl font-bold text-gradient mb-1">
                  {result.metric}
                </div>
                <div className="font-semibold text-foreground">
                  {result.label}
                </div>
              </div>

              {/* Details */}
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>{result.details}</p>
                <p className="font-medium">{result.subtitle}</p>
              </div>

              {/* Person Attribution */}
              {result.person && (
                <div className="pt-3 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    {result.person}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;