import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Forretningsmodel = () => {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="container max-w-3xl">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tilbage til forsiden
          </Button>
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-8">Vores forretningsmodel</h1>

        <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Gratis for dig</h2>
            <p>
              Net-Partner.dk er 100% gratis at bruge. Du betaler aldrig for at modtage tilbud.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Uafhængighed</h2>
            <p>
              Leverandørerne konkurrerer om at give dig det bedste tilbud. Du er altid fri til at vælge - eller slet ingen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Sådan tjener vi penge</h2>
            <p>
              Vi modtager provision fra leverandører, når du indgår en aftale via vores service.
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

export default Forretningsmodel;
