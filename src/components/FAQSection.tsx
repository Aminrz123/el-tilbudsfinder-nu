import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container max-w-3xl">
        <h2 className="text-2xl font-bold text-foreground text-center mb-8">
          Ofte stillede spørgsmål
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-foreground hover:text-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
