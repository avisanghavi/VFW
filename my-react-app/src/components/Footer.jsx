import React from 'react'

const Footer = () => {
  const awards = [
    "Best UGC Content Creation",
    "AI-Powered Performance Marketing Agents", 
    "Top 10 Influencer Marketing"
  ]

  const footerLinks = {
    COMPANY: ["About Us", "Careers", "Press", "Contact"],
    "GROWTH AGENTS": ["Creator Sourcing", "Highlights", "Performance Media", "API/MCP Docs"],
    RESOURCES: ["Blog", "Case Studies", "Guides", "Webinars"],
    LEGAL: ["Privacy Policy", "Terms of Service", "Security", "Compliance"],
    "FOLLOW US": ["Instagram", "LinkedIn", "Twitter", "TikTok"]
  }

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background pattern with video thumbnails */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 gap-2 p-4">
          {Array.from({length: 60}).map((_, i) => (
            <div key={i} className="aspect-video bg-gradient-to-br from-pink-600 to-purple-600 rounded-sm"></div>
          ))}
        </div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Logo */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Videofusion
            </h2>
          </div>

          {/* Footer Links */}
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold text-white mb-4">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Awards Section */}
          <div className="text-center mb-8">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {awards.map((award, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-videofusion rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🏆</span>
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-semibold">{award}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-gray-700">
            <p className="text-sm text-gray-400">
              Copyright ©videofusion.io 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
