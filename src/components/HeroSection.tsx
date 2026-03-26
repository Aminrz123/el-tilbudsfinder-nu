import { Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-person.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover scale-105"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/50 to-primary/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
      </div>

      {/* Floating glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/15 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container max-w-3xl text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/60 backdrop-blur-md border border-primary/20 mb-8 animate-fade-up shadow-lg">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-primary">Gratis prissammenligning</span>
        </div>
        
        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-foreground mb-6 leading-[1.05] tracking-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Find den billigste
          <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">elaftale</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 animate-fade-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
          Udfyld formularen på 2 minutter og modtag de bedste tilbud fra udvalgte elselskaber
        </p>
        
        {/* CTA Button */}
        <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button 
            variant="hero" 
            size="xl" 
            onClick={scrollToForm}
            className="group shadow-button text-lg px-10 py-7"
          >
            Start nu
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div className="flex items-center justify-center gap-8 mt-14 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {[
            "100% gratis",
            "Uforpligtende", 
            "På 2 min"
          ].map((text) => (
            <div key={text} className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/30">
              <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_hsl(var(--accent))]" />
              <span className="text-sm font-medium text-foreground/80">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
