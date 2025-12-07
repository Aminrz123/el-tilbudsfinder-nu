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

        <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Accept af betingelser</h2>
            <p>
              Ved at benytte Net-Partner.dk accepterer du disse brugerbetingelser. 
              Hvis du ikke accepterer betingelserne, bedes du undlade at bruge vores tjeneste.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Tjenestens formål</h2>
            <p>
              Net-Partner.dk er en gratis sammenligningsservice, der formidler kontakt 
              mellem forbrugere og elleverandører. Vi leverer ikke selv el, men hjælper 
              dig med at modtage tilbud fra udvalgte leverandører.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Brugerens ansvar</h2>
            <p>
              Du er ansvarlig for at angive korrekte oplysninger i formularen. 
              Fejlagtige oplysninger kan resultere i tilbud, der ikke matcher dit faktiske forbrug.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Aftaler med leverandører</h2>
            <p>
              Eventuelle aftaler du indgår med en elleverandør, er udelukkende mellem 
              dig og den pågældende leverandør. Net-Partner.dk er ikke part i sådanne aftaler.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Ændringer</h2>
            <p>
              Vi forbeholder os retten til at ændre disse betingelser. Ændringer 
              træder i kraft ved offentliggørelse på denne side.
            </p>
          </section>

          <section className="pt-4 border-t border-border">
            <p className="text-xs">
              Sidst opdateret: {new Date().toLocaleDateString('da-DK')}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Brugerbetingelser;
