import { Trophy, Award, Medal } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "COMPANY",
      links: [
        "About Us",
        "Careers", 
        "Press",
        "Contact"
      ]
    },
    {
      title: "GROWTH AGENTS",
      links: [
        "Creator Sourcing",
        "Highlights",
        "Performance Media",
        "API/MCP Docs"
      ]
    },
    {
      title: "RESOURCES", 
      links: [
        "Blog",
        "Case Studies",
        "Guides",
        "Webinars"
      ]
    },
    {
      title: "LEGAL",
      links: [
        "Privacy Policy",
        "Terms of Service", 
        "Security",
        "Compliance"
      ]
    }
  ];

  const awards = [
    {
      icon: Trophy,
      title: "Service Provider 2024 - Western USA"
    },
    {
      icon: Award,
      title: "Solutions Provider - MarTech Outlook"
    },
    {
      icon: Medal,
      title: "ADI Awards 2025"
    }
  ];

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container">
        {/* Recognition Banner */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-sm text-orange-400 mb-6">
            <span>🔥</span>
            <span>VideoForce.ai recognized by Microsoft CEO Satya Nadella and OpenAI CEO Sam Altman at Ignite Conference for pioneering Azure AI Partnership adoption</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-4 flex items-center gap-3">
                <award.icon className="w-8 h-8 text-orange-400" />
                <span className="text-sm font-medium">{award.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Brand & Social */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gradient mb-2">VideoForce.ai</h2>
            <p className="text-gray-400 text-sm">Where Human Creativity Meets AI Brilliance™</p>
            
            <div className="flex items-center justify-center gap-4 mt-4">
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                MICROSOFT PARTNER
              </span>
              <span className="text-xs text-gray-400">Startup Pegasus Program</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-6">
            {["LinkedIn", "Instagram", "TikTok", "Twitter", "YouTube"].map((social, index) => (
              <a key={index} href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                {social}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-xs text-gray-500">
            © 2025 VideoForce.ai Inc. All rights reserved | U.S. Patent #12,347,462
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;