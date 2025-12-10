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

        <h1 className="text-3xl font-bold text-foreground mb-4">Brugerbetingelser for net-partner.dk</h1>
        <p className="text-muted-foreground mb-8">Senest opdateret: [indsæt dato]</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Betingelser for brug af net-partner.dk</h2>
            <div className="space-y-2">
              <p>1.1 Ved at benytte net-partner.dk accepterer du disse betingelser.</p>
              <p>1.2 Hvis du ikke kan acceptere betingelserne, må tjenesten ikke anvendes.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">2. Hvordan vores tjeneste fungerer</h2>
            <div className="space-y-2">
              <p>2.1 net-partner.dk formidler kontakt mellem brugere og udvalgte serviceudbydere ("serviceydere"). Tjenesten er gratis for brugerne.</p>
              <p>2.2 Når du indsender oplysninger på net-partner.dk, videreformidler vi disse til relevante serviceydere med henblik på at indhente tilbud.</p>
              <p>2.3 Du kan herefter blive kontaktet via e-mail, SMS eller telefon af net-partner.dk eller af de serviceydere, der matcher din forespørgsel. Efter første kontakt foregår dialogen direkte mellem dig og serviceyderen.</p>
              <p>2.4 Ønsker du at afmelde tjenesten, kan dette gøres på <Link to="/afmeld" className="text-primary underline hover:text-primary/80">afmeldingssiden</Link> eller ved kontakt til <a href="mailto:kontakt@net-partner.dk" className="text-primary underline hover:text-primary/80">kontakt@net-partner.dk</a>.</p>
              <p>2.5 Hvis det ikke er muligt at finde flere egnede serviceydere til din forespørgsel, kan du modtage færre tilbud end forventet.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. Brug af net-partner.dk</h2>
            <div className="space-y-2">
              <p>3.1 Det er ikke tilladt at udgive sig for at være net-partner.dk, vores medarbejdere eller vores serviceydere uden skriftlig tilladelse.</p>
              <p>3.2 Det er forbudt at forsøge at tilgå ikke-offentlige områder af tjenesten, herunder andres oplysninger eller interne systemer.</p>
              <p>3.3 Handlinger som hacking, misbrug af data, indsendelse af falske henvendelser eller anden forstyrrelse af tjenestens drift kan medføre spærring af adgangen.</p>
              <p>3.4 Det er ikke tilladt at udgive sig for at være en anden person eller handle på vegne af andre uden lovligt grundlag.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Ansvar og forholdet til serviceyderne</h2>
            <div className="space-y-2">
              <p>4.1 net-partner.dk er alene formidler og deltager ikke i udarbejdelsen af tilbud eller levering af ydelser.</p>
              <p>4.2 Serviceyderne er uafhængige virksomheder. net-partner.dk kan ikke garantere, at du modtager tilbud.</p>
              <p>4.3 Aftaler mellem dig og serviceydere er net-partner.dk uvedkommende. Vi er ikke ansvarlige for:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>om aftalen opfyldes</li>
                <li>kvaliteten af de leverede ydelser</li>
                <li>lovlighed, egnethed, priser eller leveringstid</li>
                <li>tab, skader eller omkostninger, der udspringer af aftaler med serviceydere.</li>
              </ul>
              <p>4.4 net-partner.dk forbeholder sig ret til at stoppe samarbejde med serviceydere, der ikke lever op til vores krav om kvalitet og ordentlighed.</p>
              <p>4.5 net-partner.dk er ikke ansvarlig for manglende opfyldelse af forpligtelser, der skyldes force majeure-forhold uden for vores kontrol.</p>
              <p>4.6 net-partner.dk bærer intet ansvar for skattemæssige eller afgiftsmæssige forhold hos brugere eller serviceydere.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">5. Immaterielle rettigheder</h2>
            <div className="space-y-2">
              <p>5.1 Alle rettigheder til net-partner.dk, herunder navn, logo, design, domæne, tekst og alt øvrigt materiale, tilhører net-partner.dk.</p>
              <p>5.2 Brug af tjenesten giver ingen licens eller ret til at anvende vores eller tredjemands immaterielle rettigheder.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">6. Kommunikation</h2>
            <div className="space-y-2">
              <p>6.1 Kommunikation i forbindelse med brug af net-partner.dk foregår elektronisk.</p>
              <p>6.2 Brugere tilmeldes ikke nyhedsbreve, medmindre dette aktivt vælges.</p>
              <p>6.3 Hvis oplyste kontaktinformationer er fejlagtige, kan de blive korrigeret ud fra offentligt tilgængelige oplysninger, når dette er nødvendigt for at håndtere forespørgslen.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">7. Privatlivspolitik</h2>
            <div className="space-y-2">
              <p>7.1 Brug af net-partner.dk er omfattet af vores <Link to="/privatlivspolitik" className="text-primary underline hover:text-primary/80">privatlivspolitik</Link> og GDPR-praksis.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">8. Ændringer af betingelserne</h2>
            <div className="space-y-2">
              <p>8.1 net-partner.dk kan til enhver tid ændre betingelserne uden forudgående varsel.</p>
              <p>8.2 Fortsat brug af tjenesten anses som accept af de opdaterede betingelser.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">9. Lovvalg og tvister</h2>
            <div className="space-y-2">
              <p>9.1 Brug af net-partner.dk er underlagt dansk ret.</p>
              <p>9.2 Tvister skal behandles ved de danske domstole med Retten som værneting i første instans.</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Brugerbetingelser;
