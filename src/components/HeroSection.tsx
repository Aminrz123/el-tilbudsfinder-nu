import { Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      
      <div className="container max-w-3xl text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Gratis prissammenligning</span>
        </div>
        
        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Find den billigste
          <span className="block text-primary">elaftale</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Udfyld formularen på 2 minutter og modtag de bedste tilbud fra udvalgte elselskaber
        </p>
        
        {/* CTA Button */}
        <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button 
            variant="hero" 
            size="xl" 
            onClick={scrollToForm}
            className="group"
          >
            Start nu
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div className="flex items-center justify-center gap-6 mt-12 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span>100% gratis</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span>Uforpligtende</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span>På 2 min</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
