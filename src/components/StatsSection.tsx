const StatsSection = () => {
  const stats = [
    {
      value: "8X",
      label: "ROAS Achieved",
      gradient: "from-brand-purple to-brand-purple-light"
    },
    {
      value: "90%",
      label: "Content Repurposed",
      gradient: "from-brand-orange to-brand-orange-light"
    },
    {
      value: "3X",
      label: "Higher Engagement",
      gradient: "from-brand-purple to-brand-orange"
    }
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className={`text-6xl lg:text-7xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <p className="text-lg font-medium text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Trusted by brands achieving real results with authentic content + AI
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["Build-A-Bear", "Crunch Fitness", "JBL", "DIG", "Tire Agent", "Coca-Cola", "Build-A-Bear", "Crunch"].map((brand, index) => (
              <span key={index} className="text-lg font-medium text-muted-foreground">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;