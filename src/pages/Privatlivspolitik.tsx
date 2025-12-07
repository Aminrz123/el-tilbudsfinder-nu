import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Privatlivspolitik = () => {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="container max-w-3xl">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tilbage til forsiden
          </Button>
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-8">Privatlivspolitik</h1>

        <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Dataansvarlig</h2>
            <p>
              Net-Partner.dk er dataansvarlig for behandlingen af de personoplysninger, 
              som vi modtager om dig. Du kan kontakte os via vores hjemmeside.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Hvilke oplysninger indsamler vi?</h2>
            <p>Vi indsamler følgende oplysninger, når du udfylder vores formular:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Navn</li>
              <li>E-mailadresse</li>
              <li>Telefonnummer</li>
              <li>Adresse</li>
              <li>Oplysninger om dit elforbrug</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Formål med behandlingen</h2>
            <p>Vi bruger dine oplysninger til at:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Formidle kontakt mellem dig og elleverandører</li>
              <li>Sende dine oplysninger til udvalgte leverandører, så de kan kontakte dig med tilbud</li>
              <li>Forbedre vores service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Deling af oplysninger</h2>
            <p>
              Vi deler dine oplysninger med de elleverandører, som du har givet samtykke til 
              at blive kontaktet af. Disse leverandører er: b.energy A/S, Velkommen A/S og Net-Partner.dk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Dine rettigheder</h2>
            <p>Du har ret til at:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Få indsigt i de oplysninger, vi har om dig</li>
              <li>Få rettet urigtige oplysninger</li>
              <li>Få slettet dine oplysninger</li>
              <li>Trække dit samtykke tilbage</li>
              <li>Klage til Datatilsynet</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Opbevaring</h2>
            <p>
              Vi opbevarer dine oplysninger så længe, det er nødvendigt for at opfylde 
              formålet med behandlingen, dog maksimalt 2 år efter din henvendelse.
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

export default Privatlivspolitik;
