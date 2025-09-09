const BrandsSection = () => {
  const brands = ["Build-A-Bear", "Crunch Fitness", "JBL", "DIG", "Tire Agent", "Coca-Cola", "Nike", "Samsung", "Amazon", "Microsoft"];

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            Trusted by brands achieving real results with authentic content + AI
          </h2>
          
          {/* Scrolling marquee container */}
          <div className="relative overflow-hidden mt-8">
            <div className="flex animate-scroll">
              {/* First set of brands */}
              {brands.map((brand, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-8 text-lg font-medium text-muted-foreground opacity-60 whitespace-nowrap"
                >
                  {brand}
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {brands.map((brand, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-8 text-lg font-medium text-muted-foreground opacity-60 whitespace-nowrap"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
