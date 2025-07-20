import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Process />
      <Services />
      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
