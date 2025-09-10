import Image from "next/image"

const BrandsSection = () => {
  const logos = [
    { alt: 'Build-A-Bear', src: '/logos/BAB_Logo.jpg' },
    { alt: 'World Gym', src: '/logos/WorldGym_Logo.png' },
    { alt: 'DIG', src: '/logos/Dig_Logo.png' },
    { alt: 'Fitness SF', src: '/logos/FitnessSF_Logo.png' },
    { alt: 'Tire Agent', src: '/logos/TireAgent_Logo.png' },
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            Trusted by brands achieving real results with authentic content + AI
          </h2>
          
          {/* Scrolling marquee container */}
          <div className="relative overflow-hidden mt-8">
            <div className="flex animate-scroll">
              {logos.concat(logos).map((l, i) => (
                <div key={i} className="flex-shrink-0 mx-10 opacity-80">
                  <Image
                    src={l.src}
                    alt={l.alt}
                    width={120}
                    height={40}
                    className="h-8 md:h-10 object-contain"
                  />
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
