import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Brugerbetingelser = () => {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="container max-w-3xl">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tilbage til forsiden
          </Button>
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-8">Brugerbetingelser</h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Ved at benytte Net-Partner.dk accepterer du disse brugerbetingelser. 
            Hvis du ikke accepterer betingelserne, bedes du undlade at bruge vores tjeneste.
          </p>

          <p>
            Net-Partner.dk er en gratis sammenligningsservice, der formidler kontakt 
            mellem forbrugere og elleverandører. Vi leverer ikke selv el, men hjælper 
            dig med at modtage tilbud fra udvalgte leverandører.
          </p>

          <p>
            Som bruger er du ansvarlig for at angive korrekte oplysninger i formularen. 
            Fejlagtige oplysninger kan resultere i tilbud, der ikke matcher dit faktiske forbrug.
          </p>

          <p>
            Eventuelle aftaler du indgår med en elleverandør, er udelukkende mellem 
            dig og den pågældende leverandør. Net-Partner.dk er ikke part i sådanne aftaler.
          </p>

          <p>
            Vi forbeholder os retten til at ændre disse betingelser. Ændringer 
            træder i kraft ved offentliggørelse på denne side.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Brugerbetingelser;
