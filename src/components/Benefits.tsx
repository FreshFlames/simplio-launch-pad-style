import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, DollarSign, Shield, Users, Lightbulb } from "lucide-react";

const Benefits = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "87%",
      label: "Increase in Efficiency",
      description: "Average productivity boost across all clients"
    },
    {
      icon: Clock,
      value: "3x",
      label: "Faster Processing",
      description: "Speed improvement in task completion"
    },
    {
      icon: DollarSign,
      value: "40%",
      label: "Cost Reduction",
      description: "Average savings on operational expenses"
    },
    {
      icon: Users,
      value: "4000+",
      label: "Happy Clients",
      description: "Businesses transformed worldwide"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Reliable & Secure",
      description: "Enterprise-grade security with 99.9% uptime guarantee. Your data is protected with industry-standard encryption."
    },
    {
      icon: Lightbulb,
      title: "Innovative Solutions",
      description: "Cutting-edge AI technology that adapts to your business needs and grows with your company."
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated team of AI specialists providing 24/7 support and continuous optimization."
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary hero-text">Simplio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of businesses that have transformed their operations with our AI solutions
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card 
                key={index} 
                className="text-center hover-glow transition-all duration-300 bg-card/80 backdrop-blur-sm border-border/50"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 float-animation" style={{ animationDelay: `${index * 0.1}s` }}>
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2 hero-text">
                    {stat.value}
                  </div>
                  <div className="font-semibold text-foreground mb-2">
                    {stat.label}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={index} 
                className="hover-glow transition-all duration-300 bg-card/80 backdrop-blur-sm border-border/50"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 float-animation" style={{ animationDelay: `${index * 0.2}s` }}>
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Testimonial Banner */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 backdrop-blur-sm border border-border/50">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-6 text-primary fill-current">
                    ⭐
                  </div>
                ))}
              </div>
              <blockquote className="text-2xl font-semibold text-foreground mb-4">
                "Simplio transformed our business operations completely. The AI automation saved us countless hours and significantly reduced our operational costs."
              </blockquote>
              <cite className="text-muted-foreground">
                — Sarah Johnson, CEO of TechCorp
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;