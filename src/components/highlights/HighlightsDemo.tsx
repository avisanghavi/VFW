"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const HighlightsDemo = () => {
  const [currentIndex, setCurrentIndex] = useState(1)
  
  const videoCards = [
    {
      title: "CPG Brand Case Study",
      description: "1 product demo → 15 viral clips",
      videoPlaceholder: "Video placeholder 1",
      category: "Results",
      metric: "5X engagement boost"
    },
    {
      title: "E-commerce Success", 
      description: "90% faster content creation",
      videoPlaceholder: "Video placeholder 2",
      category: "ROI Impact",
      metric: "200% conversion lift"
    },
    {
      title: "Agency Transformation",
      description: "Multi-channel optimization at scale",
      videoPlaceholder: "Video placeholder 3", 
      category: "Efficiency",
      metric: "10hrs → 30min"
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videoCards.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videoCards.length) % videoCards.length)
  }

  return (
    <section className="py-12 bg-white">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            See Real <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">ROI Results</span> From Our Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <strong>Consumer brands are seeing 5X higher engagement</strong> and saving 90% of their editing time. See how our Patented Small Video Model transforms single videos into multi-channel revenue drivers.
          </p>
        </div>

        {/* Video Cards Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-8">
            {/* Left Arrow */}
            <Button
              variant="ghost"
              size="lg" 
              onClick={prevSlide}
              className="rounded-full p-3 hover:bg-gray-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            {/* Video Cards */}
            <div className="flex gap-6 items-center">
              {videoCards.map((card, index) => {
                const isCenter = index === currentIndex
                const isVisible = Math.abs(index - currentIndex) <= 1 || 
                  (currentIndex === 0 && index === videoCards.length - 1) ||
                  (currentIndex === videoCards.length - 1 && index === 0)
                
                if (!isVisible) return null

                return (
                  <div
                    key={index}
                    className={`transition-all duration-300 ${
                      isCenter 
                        ? 'scale-100 opacity-100 z-10' 
                        : 'scale-90 opacity-60 z-0'
                    }`}
                  >
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden" style={{ width: '320px', height: '400px' }}>
                      {/* Video Area */}
                      <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2">
                            <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
                          </div>
                          <div className="text-sm text-gray-500">Video Preview</div>
                        </div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs">
                          {card.category}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{card.description}</p>
                        <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                          <p className="text-green-700 font-semibold text-sm">📈 {card.metric}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Right Arrow */}
            <Button
              variant="ghost"
              size="lg"
              onClick={nextSlide} 
              className="rounded-full p-3 hover:bg-gray-100"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {videoCards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-purple-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HighlightsDemo
