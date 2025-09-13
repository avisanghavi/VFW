import React from 'react'

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold gradient-text">
              Videofusion
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-gray-900 font-medium">
                Growth Agent
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <a href="#platforms" className="text-gray-700 hover:text-gray-900 font-medium">
              Platforms
            </a>
            <a href="#resources" className="text-gray-700 hover:text-gray-900 font-medium">
              Resources
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium">
              About Us
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center">
            <button className="btn-gradient px-6 py-2 rounded-full font-semibold">
              Get Started →
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
