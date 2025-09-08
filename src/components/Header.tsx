import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-gradient">VideoForce.ai</span>
          <span className="text-sm text-muted-foreground">Where Human Creativity Meets AI Brilliance</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#creator-sourcing" className="text-sm font-medium text-foreground hover:text-brand-purple transition-smooth">
            Creator Sourcing
          </a>
          <a href="#highlights" className="text-sm font-medium text-foreground hover:text-brand-purple transition-smooth">
            Highlights
          </a>
          <a href="#performance-media" className="text-sm font-medium text-foreground hover:text-brand-purple transition-smooth">
            Performance Media
          </a>
          <a href="#partners" className="text-sm font-medium text-foreground hover:text-brand-purple transition-smooth">
            Partners
          </a>
          <a href="#resources" className="text-sm font-medium text-foreground hover:text-brand-purple transition-smooth">
            Resources
          </a>
          <a href="#about" className="text-sm font-medium text-foreground hover:text-brand-purple transition-smooth">
            About Us
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-4">
          <Button variant="gradient" size="lg" className="hidden sm:inline-flex">
            Start Free
          </Button>
          <Button variant="brand-outline" size="lg">
            Book a Demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;