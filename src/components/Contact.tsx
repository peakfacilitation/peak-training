import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">
              Ready to transform your leadership? Let's start the conversation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-accent/10 p-4">
                    <Mail className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <CardTitle className="text-lg">Email Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <a
                  href="mailto:info@peaktrainingacademy.com"
                  className="text-accent hover:underline font-semibold"
                >
                  info@peaktrainingacademy.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-accent/10 p-4">
                    <Phone className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <CardTitle className="text-lg">Call Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <a href="tel:+1234567890" className="text-accent hover:underline font-semibold">
                  (123) 456-7890
                </a>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-accent/10 p-4">
                    <MapPin className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <CardTitle className="text-lg">Visit Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">Location details coming soon</p>
              </CardContent>
            </Card>
          </div>

          <div id="register" className="text-center pt-8">
            <Card className="border-2 border-accent/20 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-primary">Ready to Register?</CardTitle>
                <CardDescription className="text-lg">
                  Invest in your leadership potential today
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Registration details and scheduling information will be available soon. Contact us to express your interest and be notified when registration opens.
                </p>
                <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto" asChild>
                  <a href="mailto:info@peaktrainingacademy.com?subject=Workshop Registration Interest">
                    Express Interest
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
