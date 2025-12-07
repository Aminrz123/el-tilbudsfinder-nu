import { Link } from "react-router-dom";
import { CheckCircle, ArrowLeft, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Success = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-accent/10 via-background to-primary/10 flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full text-center">
        {/* Success icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center animate-scale-in">
            <CheckCircle className="w-14 h-14 text-accent" strokeWidth={1.5} />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Tak for din henvendelse!
        </h1>

        {/* Description */}
        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
          Vi har modtaget dine oplysninger og sender dem videre til vores udvalgte 
          elleverandører. Du vil blive kontaktet inden for 1-2 hverdage med personlige 
          tilbud på el.
        </p>

        {/* What happens next */}
        <div className="bg-card rounded-2xl p-6 mb-8 border border-border/50 shadow-card text-left">
          <h2 className="font-semibold text-foreground mb-4">Hvad sker der nu?</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-accent mt-0.5 shrink-0" />
              <span>Du vil blive ringet op af vores samarbejdspartnere med tilbud</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-accent mt-0.5 shrink-0" />
              <span>Du modtager også tilbuddene på din e-mail</span>
            </li>
          </ul>
        </div>

        {/* Back button */}
        <Link to="/">
          <Button variant="outline" size="lg" className="rounded-xl">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tilbage til forsiden
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default Success;
