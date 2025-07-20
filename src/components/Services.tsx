import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Workflow, BarChart3, Zap, ArrowRight } from "lucide-react";
// Using placeholder images for now
const workflowImage = "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=800&fit=crop";
const chatbotImage = "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=800&fit=crop";
const analyticsImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=800&fit=crop";

const Services = () => {
  const services = [
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "We analyze your processes and implement tailored workflows to automate tasks and optimize operations efficiently.",
      image: workflowImage,
      features: ["Process Analysis", "Custom Workflows", "Task Automation", "Performance Optimization"]
    },
    {
      icon: Bot,
      title: "Customer Service Chatbots",
      description: "We understand your customer needs and build intelligent chatbots that provide 24/7 support and enhance user experience.",
      image: chatbotImage,
      features: ["24/7 Support", "Natural Language Processing", "Multi-platform Integration", "Learning Capabilities"]
    },
    {
      icon: BarChart3,
      title: "AI-Powered Analytics",
      description: "Transform your data into actionable insights with our advanced AI analytics solutions for better decision making.",
      image: analyticsImage,
      features: ["Predictive Analytics", "Real-time Insights", "Data Visualization", "Custom Dashboards"]
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Services</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Next-Gen <span className="text-primary hero-text">AI Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions tailored to meet your unique business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  isEven ? "" : "lg:grid-flow-dense"
                }`}
              >
                {/* Content */}
                <div className={isEven ? "" : "lg:col-start-2"}>
                  <Card className="hover-glow transition-all duration-300 bg-card/80 backdrop-blur-sm border-border/50">
                    <CardContent className="p-8">
                      {/* Icon */}
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 float-animation">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      
                      {/* Title & Description */}
                      <h3 className="text-3xl font-bold mb-4 text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Features */}
                      <ul className="space-y-2 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* CTA Button */}
                      <Button variant="outline" className="font-semibold">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Image */}
                <div className={isEven ? "" : "lg:col-start-1 lg:row-start-1"}>
                  <div className="relative overflow-hidden rounded-2xl hover-glow transition-all duration-300">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;