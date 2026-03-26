import { Zap, ArrowRight, TrendingDown, BarChart3, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-person.jpg";

const stats = [
  { value: "2 ud af 3", label: "Kan spare ved at skifte", icon: TrendingDown },
  { value: "30+", label: "Elaftaler sammenlignet", icon: BarChart3 },
  { value: "100%", label: "Gratis & uforpligtende", icon: Shield },
];

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center px-4 py-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover scale-105"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/40 to-primary/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>

      {/* Floating glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/15 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/60 backdrop-blur-md border border-primary/20 mb-8 animate-fade-up shadow-lg">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Gratis prissammenligning</span>
            </div>
            
            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground mb-6 leading-[1.05] tracking-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Find den billigste
              <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">elaftale i Danmark</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto lg:mx-0 mb-10 animate-fade-up leading-relaxed font-medium" style={{ animationDelay: "0.2s" }}>
              Vi sammenligner elselskaber for dig — helt gratis. Udfyld formularen og modtag de bedste tilbud.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button 
                variant="hero" 
                size="xl" 
                onClick={scrollToForm}
                className="group shadow-button text-lg px-10 py-7"
              >
                Sammenlign nu — gratis
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right: Stats cards */}
          <div className="hidden lg:flex flex-col gap-5 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative bg-card/70 backdrop-blur-lg rounded-2xl p-6 border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                style={{ animationDelay: `${0.4 + index * 0.15}s` }}
              >
                {/* Hover accent */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="text-3xl font-extrabold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                    <p className="text-sm text-foreground/70 font-medium mt-0.5">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile stats row */}
        <div className="grid grid-cols-3 gap-3 mt-12 lg:hidden animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {stats.map((stat) => (
            <div key={stat.label} className="bg-card/70 backdrop-blur-md rounded-xl p-4 border border-border/30 text-center">
              <span className="text-xl font-extrabold text-primary block">{stat.value}</span>
              <p className="text-xs text-foreground/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Partner logos */}
        <div className="mt-16 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest text-center mb-6">
            Udvalgte elselskaber du kan sammenligne
          </p>
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
            {["Norlys", "OK", "Vindstød", "Andel Energi", "EWII"].map((name) => (
              <div
                key={name}
                className="px-5 py-2.5 rounded-xl bg-card/50 backdrop-blur-sm border border-border/30 hover:bg-card/80 transition-all duration-300"
              >
                <span className="text-sm md:text-base font-bold text-foreground/50 hover:text-foreground/80 transition-colors">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
