import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="gradient-hero min-h-[70vh] flex items-center justify-center px-4 py-16 md:py-24">
      <div className="container max-w-4xl text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-8 animate-pulse-soft">
          <Zap className="w-10 h-10 text-primary" strokeWidth={2.5} />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight animate-fade-up">
          Sammenlign elpriser og få de bedste tilbud
        </h1>
        
        <p className="text-xl md:text-2xl font-semibold text-primary mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Gratis og uforpligtende
        </p>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Udfyld vores simple elberegner, og bliv kontaktet af udvalgte elselskaber med deres bedste tilbud. Det er hurtigt, nemt og helt gratis.
        </p>
        
        <Button 
          variant="hero" 
          size="xl" 
          onClick={scrollToForm}
          className="animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Zap className="w-5 h-5" />
          Start beregning
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
