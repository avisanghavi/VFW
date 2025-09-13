import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import BrandsSection from './components/BrandsSection'
import HowItWorks from './components/HowItWorks'
import AgentsSection from './components/AgentsSection'
import StatsSection from './components/StatsSection'
import SVMSection from './components/SVMSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <BrandsSection />
      <HowItWorks />
      <AgentsSection />
      <StatsSection />
      <SVMSection />
      <Footer />
    </div>
  )
}

export default App