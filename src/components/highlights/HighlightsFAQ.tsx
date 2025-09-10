"use client"

import { useState } from "react"
import { Plus, Minus, Zap, Clock, Upload, Target } from "lucide-react"

const HighlightsFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How does the AI identify viral moments?",
      answer: "Our patented Small Video Model (SVM) analyzes over 50 factors including emotional peaks, engagement patterns, visual composition, and speech cadence. It's trained on 3B+ viral posts to predict which moments will perform best on each platform.",
      icon: Target
    },
    {
      question: "What video formats can I upload?",
      answer: "We support all major video formats including MP4, MOV, AVI, and WebM. Maximum file size is 2GB for the free tier. Videos can be any length - our AI will find the best moments regardless of duration.",
      icon: Upload
    },
    {
      question: "How long does processing take?",
      answer: "Most videos process in under 60 seconds. Our AI works in real-time to identify hooks, social proof, and CTAs. You'll get multiple viral-ready clips optimized for TikTok, Reels, and YouTube Shorts instantly.",
      icon: Clock
    },
    {
      question: "Can I customize the extracted highlights?",
      answer: "Absolutely! While our AI does the heavy lifting, you have full control. Adjust clip lengths, choose different moments, add custom text overlays, and export in various formats (6s, 15s, 30s, 60s).",
      icon: Zap
    },
    {
      question: "What makes this different from other video editors?",
      answer: "Traditional editors require manual work. Our AI instantly identifies the exact moments that drive engagement and conversions. It's like having a viral content expert analyze every second of your video in real-time.",
      icon: Target
    },
    {
      question: "Is there really 10 minutes free processing?",
      answer: "Yes! No credit card required. Upload videos totaling up to 10 minutes and see our AI extract viral moments. Perfect for testing with a few key videos before upgrading.",
      icon: Zap
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about turning your videos into viral content
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-brand-purple/20 to-brand-orange/20 flex items-center justify-center">
                    <faq.icon className="w-5 h-5 text-brand-purple" />
                  </div>
                  <span className="font-semibold text-lg">{faq.question}</span>
                </div>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-brand-purple" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="pl-14 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-purple-50 to-orange-50 rounded-3xl border border-purple-100">
          <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-4">Get instant answers and see our AI in action</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-brand-purple to-brand-orange text-white rounded-xl font-semibold hover:opacity-90">
              Try Free Demo
            </button>
            <button className="px-6 py-3 border border-brand-purple text-brand-purple rounded-xl font-semibold hover:bg-brand-purple hover:text-white">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HighlightsFAQ
