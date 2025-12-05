import { Check } from "lucide-react";

const benefits = [
  {
    title: "100% gratis",
    description: "Ingen skjulte gebyrer eller bindinger",
  },
  {
    title: "Uforpligtende",
    description: "Du bestemmer selv, hvilket tilbud du vil vælge",
  },
  {
    title: "Hurtig proces",
    description: "Udfyld formularen på under 2 minutter",
  },
  {
    title: "Personlige tilbud",
    description: "Få skræddersyede priser baseret på dit forbrug",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-accent">
      <div className="container max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-accent-foreground mb-12">
          Hvorfor Net-Partner.dk?
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="flex items-start gap-4 bg-accent-foreground/10 backdrop-blur-sm rounded-xl p-6 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-foreground flex items-center justify-center">
                <Check className="w-5 h-5 text-accent" strokeWidth={3} />
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-accent-foreground mb-1">
                  {benefit.title}
                </h3>
                <p className="text-accent-foreground/80">
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
