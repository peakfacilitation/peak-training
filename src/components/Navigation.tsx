import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import peakLogo from "@/assets/pta-logo-xs-white.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <img
              src={peakLogo}
              alt="Peak Facilitation Logo"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <span className={`font-bold text-xl transition-all duration-300 ${
              !isScrolled && "text-accent"
            }`}>Peak Training Academy</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className={`hover:text-accent transition-colors font-medium transition-all duration-300 ${
                !isScrolled && "text-accent hover:text-secondary"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("programs")}
              className={`hover:text-accent transition-colors font-medium transition-all duration-300 ${
                !isScrolled && "text-accent hover:text-secondary"
              }`}
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`hover:text-accent transition-colors font-medium transition-all duration-300 ${
                !isScrolled && "text-accent hover:text-secondary"
              }`}
            >
              Contact
            </button>
            <Button onClick={() => scrollToSection("contact")} size="lg" variant="hero">
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-accent"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden animate-fade-in mt-3 rounded-3xl border border-border/60 bg-background/90 px-6 py-7 shadow-xl backdrop-blur-md">
            <div className="flex flex-col gap-3 text-center">
              <button
                onClick={() => scrollToSection("about")}
                className="text-accent hover:text-primary transition-colors font-semibold"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("programs")}
                className="text-accent hover:text-primary transition-colors font-semibold"
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-accent hover:text-primary transition-colors font-semibold"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                size="lg"
                variant="hero"
                className="w-full rounded-2xl px-6 py-3 shadow-lg"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
