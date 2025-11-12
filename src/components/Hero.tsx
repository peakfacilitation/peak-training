import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-leadership.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional leadership training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
            Transform Your<br />Leadership
            {/* in <span className="block text-accent mt-2">Turbulent Times</span> */}
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto">
            Professional leadership training designed to equip you with practical tools and self-awareness for leading through uncertainty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto" asChild>
              <a href="#programs">
                Explore Our Programs <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 h-auto bg-background/10 text-primary-foreground border-primary-foreground/30 hover:bg-background/20 hover:text-primary-foreground backdrop-blur-sm"
              asChild
            >
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
