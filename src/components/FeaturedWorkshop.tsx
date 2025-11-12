import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Calendar, Users, Brain } from "lucide-react";
import workshopBg from "@/assets/workshop-bg.jpg";

const FeaturedWorkshop = () => {
  return (
    <section id="programs" className="py-24 bg-background relative">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <img src={workshopBg} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Featured Workshop</h2>
            <p className="text-xl text-muted-foreground">Intensive, practical leadership training</p>
          </div>

          {/* Main Workshop Card */}
          <Card className="border-2 border-accent/20 shadow-xl">
            <CardHeader className="space-y-4 pb-8">
              <div className="space-y-2">
                <CardTitle className="text-3xl md:text-4xl font-bold text-primary">
                  Rising to the Occasion:
                  <span className="block text-accent mt-1">Leadership In Turbulent Times</span>
                </CardTitle>
                <CardDescription className="text-lg flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span className="font-semibold">A 2.5-Day Intensive Workshop</span>
                </CardDescription>
              </div>
              <p className="text-lg text-muted-foreground">
                This workshop moves beyond theory to equip you with the practical tools and self-awareness needed to lead effectively through uncertainty.
              </p>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* What You Will Gain */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">What You Will Gain</h3>
                <p className="text-muted-foreground">You will leave this workshop with the ability to:</p>
                <ul className="space-y-3">
                  {[
                    "Lead up, down, and out by mastering the skills to effectively influence direct reports, supervisors, and external partners.",
                    "Make hard but informed decisions using structured, proven models to move forward with confidence.",
                    "Understand and manage risk by identifying and assessing different types of risk at multiple levels.",
                    "Engage in constructive conflict and influence effectively, even without formal authority.",
                    "Set clear priorities and confidently manage the tradeoffs that come with them.",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Your Leadership Journey */}
              <div className="space-y-6 pt-6 border-t border-border">
                <h3 className="text-2xl font-bold text-primary">Your 2.5-Day Leadership Journey</h3>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-secondary border-none">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-accent/10 p-3">
                          <Brain className="h-6 w-6 text-accent" />
                        </div>
                        <CardTitle className="text-xl">Day 1</CardTitle>
                      </div>
                      <CardDescription className="font-semibold text-primary pt-2">
                        Know Yourself & the Leadership Landscape
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      The journey starts with you. Using the Emergenetics profile, you'll gain a deep understanding of your personal thinking and behavioral preferences. We will then explore proven leadership models, giving you a new landscape for understanding your own strengths, blind spots, and how your style lands with others.
                    </CardContent>
                  </Card>

                  <Card className="bg-secondary border-none">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-accent/10 p-3">
                          <CheckCircle2 className="h-6 w-6 text-accent" />
                        </div>
                        <CardTitle className="text-xl">Day 2</CardTitle>
                      </div>
                      <CardDescription className="font-semibold text-primary pt-2">
                        Build Your Toolkit
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      We dive into practical, proven models you can use immediately. You will learn and apply frameworks for structured decision-making, risk assessment, conflict resolution, influencing without authority, and situational leadership.
                    </CardContent>
                  </Card>

                  <Card className="bg-secondary border-none">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-accent/10 p-3">
                          <Users className="h-6 w-6 text-accent" />
                        </div>
                        <CardTitle className="text-xl">Day 3</CardTitle>
                      </div>
                      <CardDescription className="font-semibold text-primary pt-2">
                        Apply What You Know
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-muted-foreground">
                      This is where it all comes together. Interested participants will workshop a real-world challenge through a structured peer consultancy, gaining the focused insights of the group. All participants will provide support and share insights from their own experiences, applying the lessons from Days 1 and 2.
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Foundation */}
              <div className="space-y-4 pt-6 border-t border-border">
                <h3 className="text-2xl font-bold text-primary">
                  Our Foundation: The Emergenetics® Profile
                </h3>
                <p className="text-muted-foreground text-lg">
                  This workshop is built on the foundation of the <a href="https://emergenetics.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold" >Emergenetics</a> Profile, a powerful tool revealing how you prefer to think and behave. We don't just teach you <em>a way</em>; we help you find <em>your way</em> by aligning proven leadership methods with your innate strengths.
                </p>
              </div>

              {/* CTA */}
              {/* <div className="flex flex-col items-center gap-4 pt-8">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto" asChild>
                  <a href="#register">Register Now - Secure Your Spot</a>
                </Button>
                <p className="text-sm text-muted-foreground text-center max-w-2xl">
                  <strong>Important Next Step:</strong> Upon registration, you will receive an email with a link to complete your confidential Emergenetics Profile through a brief online assessment.
                </p>
              </div> */}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkshop;
