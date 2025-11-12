import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedWorkshop from "@/components/FeaturedWorkshop";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <FeaturedWorkshop />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
