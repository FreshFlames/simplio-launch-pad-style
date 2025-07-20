import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 hover-glow">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Powered Business Solutions</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Transform Your Business</span>
            <span className="block text-primary hero-text">
              with AI Automation
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence to automate your most critical 
            business processes, saving time and reducing costs while boosting efficiency.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="font-semibold text-lg px-8 py-4 hover-glow">
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="font-semibold text-lg px-8 py-4">
              See Our Work
            </Button>
          </div>
          
          {/* Social Proof */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground">
              <span className="text-primary font-semibold">Trusted by 4000+ clients</span> worldwide
            </p>
            
            {/* Client Avatars */}
            <div className="flex -space-x-2 overflow-hidden">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="inline-block h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent ring-2 ring-background float-animation"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl float-animation"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl float-animation" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/10 rounded-full blur-lg float-animation" style={{ animationDelay: "2s" }}></div>
    </section>
  );
};

export default Hero;