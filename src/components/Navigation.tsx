import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">Peak Training Academy</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-accent transition-colors">
              About
            </a>
            <a href="#offerings" className="text-foreground hover:text-accent transition-colors">
              Offerings
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </a>
            <Button variant="hero" size="lg" asChild>
              <a href="#register">Register Now</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a
              href="#about"
              className="block text-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#offerings"
              className="block text-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Offerings
            </a>
            <a
              href="#contact"
              className="block text-foreground hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button variant="hero" size="lg" className="w-full" asChild>
              <a href="#register">Register Now</a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
