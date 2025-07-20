import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      <div className="absolute top-10 left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl float-animation"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-accent/20 rounded-full blur-3xl float-animation" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 hover-glow">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Ready to Transform?</span>
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block">Ready to Revolutionize</span>
            <span className="block text-primary hero-text">
              Your Business?
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of businesses that have already transformed their operations 
            with our cutting-edge AI automation solutions.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="font-semibold text-lg px-8 py-4 hover-glow">
              Start Your AI Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="font-semibold text-lg px-8 py-4">
              Schedule a Demo
            </Button>
          </div>
          
          {/* Value Props */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">Free</div>
              <div className="text-muted-foreground">Consultation</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">30-Day</div>
              <div className="text-muted-foreground">Money Back Guarantee</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;