import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";

const faqItems = [
  {
    question: "Koster det noget at bruge jeres service?",
    answer: "Nej, det er helt gratis og uforpligtende at sammenligne elpriser gennem os. Du betaler ikke noget for at modtage tilbud fra elleverandører."
  },
  {
    question: "Hvordan virker sammenligningstjenesten?",
    answer: "Du udfylder en kort formular med dine kontaktoplysninger og dit elforbrug. Herefter sender vi dine oplysninger til udvalgte elleverandører, som kontakter dig med deres bedste tilbud."
  },
  {
    question: "Hvad bør jeg kigge efter i tilbuddene?",
    answer: "Se på prisen per kWh, eventuelle faste abonnementsgebyrer, bindingsperiode, opsigelsesvarsel og om strømmen kommer fra grønne energikilder. Sammenlign det samlede billede - ikke kun kWh-prisen."
  },
  {
    question: "Kan jeg fortryde mit valg af elleverandør?",
    answer: "Ja, du kan altid skifte elleverandør igen, hvis du finder et bedre tilbud eller er utilfreds. De fleste aftaler har en opsigelsesperiode, men du er aldrig låst fast."
  },
  {
    question: "Hvornår får jeg tilbud efter jeg har udfyldt formularen?",
    answer: "Du kan forvente at blive kontaktet samme dag eller inden for 1-2 hverdage. Leverandørerne er hurtige til at reagere på nye henvendelser."
  }
];

const FAQSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    });
    
    const existing = document.getElementById("faq-schema");
    if (existing) existing.remove();
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById("faq-schema");
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, []);

  return (
    <section className="py-20 md:py-28 px-4 relative overflow-hidden bg-background">
      {/* Decorative */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container max-w-3xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 text-primary text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4" />
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Ofte stillede spørgsmål
          </h2>
        </div>
        
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 shadow-card p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                <AccordionTrigger className="text-left text-foreground hover:text-primary py-5 text-base font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
