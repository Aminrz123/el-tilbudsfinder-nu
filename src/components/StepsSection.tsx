import { FileText, Search, Phone } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "1",
    title: "Udfyld formularen",
    description: "Indtast dine oplysninger",
  },
  {
    icon: Search,
    number: "2",
    title: "Vi finder tilbud",
    description: "Elselskaber udarbejder tilbud",
  },
  {
    icon: Phone,
    number: "3",
    title: "Bliv kontaktet",
    description: "Du modtager de bedste priser",
  },
];

const StepsSection = () => {
  return (
    <section className="py-12 md:py-16 px-4 bg-background">
      <div className="container max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
          Sådan fungerer det
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-4">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-card border border-primary rounded-full flex items-center justify-center text-xs font-semibold text-primary">
                  {step.number}
                </span>
              </div>
              
              <h3 className="text-base font-semibold text-foreground mb-1">
                {step.title}
              </h3>
              
              <p className="text-sm text-muted-foreground max-w-[160px]">
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
