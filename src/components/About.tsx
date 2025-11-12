const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            About Peak Training Academy
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Peak Training Academy is a professional leadership development initiative, born from the expertise and proven methodologies of <a href="https://peakfacilitation.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">Peak Facilitation</a>.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We specialize in intensive, practical training programs that move beyond theory to deliver real-world skills for today's leaders. Our approach combines evidence-based frameworks with personalized insights, helping you understand your unique strengths and lead with confidence through uncertainty.
          </p>
          <div className="grid md:grid-cols-3 gap-8 pt-12">
            <div className="space-y-3">
              <div className="text-5xl font-bold text-accent">2.5</div>
              <div className="text-lg font-semibold text-primary">Days of Intensive Training</div>
              <div className="text-muted-foreground">Deep, focused learning experiences</div>
            </div>
            <div className="space-y-3">
              <div className="text-5xl font-bold text-accent">∞</div>
              <div className="text-lg font-semibold text-primary">Proven Frameworks</div>
              <div className="text-muted-foreground">Evidence-based leadership models</div>
            </div>
            <div className="space-y-3">
              <div className="text-5xl font-bold text-accent">1:1</div>
              <div className="text-lg font-semibold text-primary">Personalized Insights</div>
              <div className="text-muted-foreground">Emergenetics profiling included</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
