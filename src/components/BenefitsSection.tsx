import { Check, Zap, Clock, Gift } from "lucide-react";

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
    <section className="py-20 md:py-28 px-4 bg-gradient-to-br from-accent/5 via-background to-primary/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Fordele
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Hvorfor Net-Partner.dk?
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
