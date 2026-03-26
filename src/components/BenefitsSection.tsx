import { Check, Zap, Clock, Gift } from "lucide-react";
import benefitsImage from "@/assets/benefits-people.jpg";

const benefits = [
  {
    title: "100% gratis",
    description: "Ingen skjulte gebyrer eller bindinger",
    icon: Gift,
  },
  {
    title: "Uforpligtende",
    description: "Du bestemmer selv, hvilket tilbud du vil vælge",
    icon: Check,
  },
  {
    title: "Hurtig proces",
    description: "Udfyld formularen på under 2 minutter",
    icon: Clock,
  },
  {
    title: "Personlige tilbud",
    description: "Få skræddersyede priser baseret på dit forbrug",
    icon: Zap,
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 md:py-28 px-4 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={benefitsImage}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/[0.97] via-background/95 to-background/[0.92]" />
      </div>

      {/* Glow effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="container max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Fordele
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Hvorfor Net-Partner.dk?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Vi gør det nemt at spare penge på din elregning
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative bg-card/80 backdrop-blur-sm rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 border border-border/50 overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <benefit.icon className="w-6 h-6 text-accent-foreground" strokeWidth={2} />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
