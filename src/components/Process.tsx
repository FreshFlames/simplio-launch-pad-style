import { Card, CardContent } from "@/components/ui/card";
import { Search, Code, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Discovery & Analysis",
      description: "We delve deep into your business processes to identify areas ready for automation. We engage with your team, analyze workflows, and pinpoint where AI can make the biggest impact."
    },
    {
      step: "02",
      icon: Code,
      title: "Development & Integration",
      description: "This is where we bring your tailored solutions to life. We'll design interfaces that fit seamlessly into your workflows, integrating advanced AI technology along the way."
    },
    {
      step: "03",
      icon: Rocket,
      title: "Deployment & Support",
      description: "We smoothly roll out the solutions into your workflow, provide thorough training, and offer ongoing support to keep things running smoothly. We're here for you every step of the way."
    }
  ];

  return (
    <section id="process" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our Proven <span className="text-primary hero-text">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to execution, see how we bring AI to life in your business
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card 
                key={index} 
                className="relative overflow-hidden hover-glow transition-all duration-300 bg-card/80 backdrop-blur-sm border-border/50"
              >
                <CardContent className="p-8">
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-primary/20">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 float-animation" style={{ animationDelay: `${index * 0.2}s` }}>
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Connecting Lines for Desktop */}
        <div className="hidden md:block relative mt-8">
          <div className="absolute top-1/2 left-1/3 w-1/3 h-px bg-gradient-to-r from-primary to-transparent transform -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-1/3 w-1/3 h-px bg-gradient-to-l from-primary to-transparent transform -translate-y-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default Process;