import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const CookiePolicy = () => {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="container max-w-3xl">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tilbage til forsiden
          </Button>
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-8">Cookiepolitik</h1>

        <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Hvad er cookies?</h2>
            <p>
              Cookies er små tekstfiler, der gemmes på din computer, tablet eller smartphone, 
              når du besøger vores hjemmeside. Cookies hjælper os med at huske dine præferencer 
              og forbedre din oplevelse på vores side.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Hvilke cookies bruger vi?</h2>
            
            <div className="bg-muted/50 rounded-lg p-4 mb-4">
              <h3 className="font-medium text-foreground mb-2">Nødvendige cookies</h3>
              <p className="text-sm">
                Disse cookies er essentielle for at hjemmesiden kan fungere korrekt. 
                De kan ikke slås fra.
              </p>
              <ul className="list-disc list-inside mt-2 text-sm">
                <li><strong>cookie-consent</strong> - Gemmer dit cookie-samtykke valg</li>
              </ul>
            </div>

            <div className="bg-muted/50 rounded-lg p-4 mb-4">
              <h3 className="font-medium text-foreground mb-2">Funktionelle cookies</h3>
              <p className="text-sm">
                Disse cookies hjælper os med at huske dine valg og præferencer for at 
                give dig en bedre brugeroplevelse.
              </p>
            </div>

            <div className="bg-muted/50 rounded-lg p-4">
              <h3 className="font-medium text-foreground mb-2">Analytiske cookies</h3>
              <p className="text-sm">
                Disse cookies hjælper os med at forstå, hvordan besøgende bruger vores 
                hjemmeside, så vi kan forbedre den.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Sådan administrerer du cookies</h2>
            <p>
              Du kan til enhver tid slette cookies fra din browser eller ændre dine 
              cookie-indstillinger. De fleste browsere giver dig mulighed for at:
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Se hvilke cookies der er gemt</li>
              <li>Slette alle eller udvalgte cookies</li>
              <li>Blokere tredjepartscookies</li>
              <li>Blokere alle cookies</li>
            </ul>
            <p className="mt-2">
              Bemærk at hvis du blokerer alle cookies, kan visse funktioner på 
              hjemmesiden muligvis ikke fungere korrekt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Kontakt</h2>
            <p>
              Har du spørgsmål til vores brug af cookies, er du velkommen til at 
              kontakte os på Net-Partner.dk.
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

export default CookiePolicy;
