"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Clock, CheckCircle } from "lucide-react"

export default function BookCallClient() {
  return (
    <main>
      <section className="relative py-16 lg:py-20 flex items-center overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-orange-50/20">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-40 w-72 h-72 bg-purple-200/15 rounded-full blur-2xl will-change-transform"></div>
          <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-orange-200/15 rounded-full blur-2xl will-change-transform"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-purple-200/50 shadow-sm">
                <Calendar className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-gray-700">Free Strategy Call</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gray-900">Book Your</span>
                  <br />
                  <span className="text-gradient">Strategy Call</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Discuss how VideoForce.ai can help grow your business with AI-powered video marketing. Get a custom strategy for your specific needs.
                </p>
              </div>

              {/* What You'll Get */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">What you&apos;ll get in this call:</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Custom video marketing strategy for your goals</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">ROI projections and growth opportunities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Live demo of our AI solutions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">Next steps and implementation roadmap</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Booking Form */}
            <div className="relative lg:pl-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Schedule Your Call</h3>
                  <p className="text-gray-600">Tell us what you&apos;d like to discuss</p>
                </div>

                {/* Interest Areas */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-900">I&apos;m interested in:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <input type="checkbox" id="performance" className="rounded border-purple-300" />
                      <label htmlFor="performance" className="text-sm font-medium text-gray-900">Performance Media</label>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg border border-orange-200">
                      <input type="checkbox" id="creators" className="rounded border-orange-300" />
                      <label htmlFor="creators" className="text-sm font-medium text-gray-900">Creator Sourcing</label>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <input type="checkbox" id="highlights" className="rounded border-purple-300" />
                      <label htmlFor="highlights" className="text-sm font-medium text-gray-900">Highlights AI</label>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg border border-orange-200">
                      <input type="checkbox" id="partnerships" className="rounded border-orange-300" />
                      <label htmlFor="partnerships" className="text-sm font-medium text-gray-900">Partnerships</label>
                    </div>
                  </div>
                </div>

                {/* Call Duration Options */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 text-center">Choose your call duration:</h4>
                  
                  <div className="space-y-3">
                    {/* 15 Minute Call */}
                    <div className="border-2 border-purple-200 rounded-xl p-4 hover:border-purple-400 transition-colors">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-3 mb-3">
                          <Clock className="w-5 h-5 text-purple-600" />
                          <div>
                            <h5 className="text-lg font-bold text-gray-900">Quick Strategy Call</h5>
                            <p className="text-sm text-purple-600 font-semibold">15 minutes</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">Perfect for initial discussion and quick questions</p>
                        <Button 
                          size="sm" 
                          className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                          onClick={() => window.open('https://calendar.app.google/6fyJNyuifttccPer6', '_blank')}
                        >
                          <Calendar className="w-4 h-4 mr-2" />
                          Book 15 Min Call
                        </Button>
                      </div>
                    </div>

                    {/* 30 Minute Call */}
                    <div className="border-2 border-orange-200 rounded-xl p-4 hover:border-orange-400 transition-colors">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-3 mb-3">
                          <Clock className="w-5 h-5 text-orange-600" />
                          <div>
                            <h5 className="text-lg font-bold text-gray-900">Deep Dive Strategy</h5>
                            <p className="text-sm text-orange-600 font-semibold">30 minutes</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">Comprehensive discussion with demo and custom strategy</p>
                        <Button 
                          size="sm" 
                          className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                          onClick={() => window.open('https://calendar.app.google/6fyJNyuifttccPer6', '_blank')}
                        >
                          <Calendar className="w-4 h-4 mr-2" />
                          Book 30 Min Call
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-center text-sm text-gray-500 mt-4">
                  No commitment required • Free consultation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

