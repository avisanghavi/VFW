import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="flex items-center" aria-label="VideoForce.ai Home">
          <div className="flex flex-col leading-tight">
            <span className="font-bold tracking-tight text-[22px] md:text-[28px] bg-gradient-to-r from-brand-purple to-brand-orange bg-clip-text text-transparent">VideoForce.ai</span>
            <span className="text-[10px] md:text-xs text-gray-500 mt-0.5">Where Human Creativity Meets AI Brilliance</span>
          </div>
        </a>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="/creator-sourcing" className="text-sm font-medium text-gray-700 hover:text-brand-purple transition-colors">
            Creator Sourcing
          </a>
          <a href="/highlights" className="text-sm font-medium text-gray-700 hover:text-brand-purple transition-colors">
            Highlights
          </a>
          <a href="#proof" className="text-sm font-medium text-gray-700 hover:text-brand-purple transition-colors">
            Performance Media
          </a>
          <a href="/partners" className="text-sm font-medium text-gray-700 hover:text-brand-purple transition-colors">
            Partners
          </a>
          <a href="#resources" className="text-sm font-medium text-gray-700 hover:text-brand-purple transition-colors">
            Resources
          </a>
          <a href="#about" className="text-sm font-medium text-gray-700 hover:text-brand-purple transition-colors">
            About Us
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-3">
          <a href="/highlights">
            <Button variant="gradient" size="lg" className="rounded-lg font-medium">
              Start Free
            </Button>
          </a>
          <Button variant="outline" size="lg" className="rounded-lg font-medium border-gray-300 text-gray-700 hover:bg-gray-50">
            Book a Demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;