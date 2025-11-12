const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Peak Training Academy</h3>
            <p className="text-primary-foreground/80">
              Professional leadership training designed for turbulent times.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#offerings" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Our Offerings
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://peakfacilitation.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Peak Facilitation
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <p className="text-primary-foreground/80">
              <a href="mailto:info@peaktrainingacademy.com" className="hover:text-accent transition-colors">
                info@peaktrainingacademy.com
              </a>
            </p>
            <p className="text-primary-foreground/80">
              <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                (123) 456-7890
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Peak Training Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
