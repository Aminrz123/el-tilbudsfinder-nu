import { FileText, Search, Phone } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "1",
    title: "Udfyld formularen",
    description: "Indtast dine oplysninger om bolig, forbrug og kontaktinfo",
  },
  {
    icon: Search,
    number: "2",
    title: "Vi finder de bedste tilbud",
    description: "Udvalgte elselskaber modtager dine oplysninger og udarbejder tilbud",
  },
  {
    icon: Phone,
    number: "3",
    title: "Bliv kontaktet",
    description: "Du bliver kontaktet direkte af elselskaberne med deres bedste priser",
  },
];

const StepsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="container max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Sådan fungerer det
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Tre simple trin til et bedre eltilbud
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-card border-2 border-primary rounded-full flex items-center justify-center text-sm font-bold text-primary">
                    {step.number}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
