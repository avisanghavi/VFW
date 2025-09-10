import Image from "next/image"

const HighlightsProof = () => {
  const results = [
    {
      company: "Tire Agent",
      metric: "8X",
      label: "ROAS with Highlights",
      details: "Extracted hooks drove massive engagement",
    },
    {
      company: "DIG Restaurants", 
      metric: "400%",
      label: "CTR Improvement",
      details: "AI-selected moments outperformed manual cuts",
    },
    {
      company: "World Gym",
      metric: "105%",
      label: "More Signups",
      details: "Testimonial highlights drove conversions",
    },
  ]

  const logos: Record<string, string> = {
    "Tire Agent": "/logos/TireAgent_Logo.png",
    "DIG Restaurants": "/logos/Dig_Logo.png", 
    "World Gym": "/logos/WorldGym_Logo.png",
  }

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Proven Results</span> from Highlights
          </h2>
          <p className="text-lg text-muted-foreground">
            See how extracted highlights drive real business outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <div key={index} className="bg-white border rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={logos[result.company]}
                  alt={`${result.company} logo`}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain rounded"
                />
                <span className="font-semibold">{result.company}</span>
              </div>
              
              <div className="mb-3">
                <div className="text-3xl font-bold text-gradient mb-1">{result.metric}</div>
                <div className="font-semibold text-foreground">{result.label}</div>
              </div>
              
              <p className="text-sm text-muted-foreground">{result.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HighlightsProof
