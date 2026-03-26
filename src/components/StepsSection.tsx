import { FileText, Search, Phone, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Udfyld formularen",
    description: "Indtast dine oplysninger på under 2 minutter",
  },
  {
    icon: Search,
    number: "02",
    title: "Vi finder tilbud",
    description: "Elselskaber udarbejder skræddersyede tilbud til dig",
  },
  {
    icon: Phone,
    number: "03",
    title: "Bliv kontaktet",
    description: "Du modtager de bedste priser direkte",
  },
];

const StepsSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-background relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/8 text-primary text-sm font-medium mb-4">
            Så nemt er det
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Sådan fungerer det
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-full h-[2px]">
                  <div className="w-full h-full bg-gradient-to-r from-primary/30 to-primary/5" />
                  <ArrowRight className="absolute -right-2 -top-[7px] w-4 h-4 text-primary/30" />
                </div>
              )}
              
              <div className="relative bg-card rounded-2xl p-8 border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Background number */}
                <span className="absolute -bottom-4 -right-2 text-[120px] font-black text-primary/[0.04] leading-none select-none">
                  {step.number}
                </span>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
