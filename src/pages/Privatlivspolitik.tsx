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

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Net-Partner.dk er dataansvarlig for behandlingen af de personoplysninger, 
            som vi modtager om dig. Du kan kontakte os via vores hjemmeside.
          </p>

          <p>
            Når du udfylder vores formular, indsamler vi følgende oplysninger:
          </p>

          <ul className="space-y-3 pl-6">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-muted-foreground mt-2 shrink-0"></span>
              <span>Navn, e-mailadresse og telefonnummer</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-muted-foreground mt-2 shrink-0"></span>
              <span>Adresse og oplysninger om dit elforbrug</span>
            </li>
          </ul>

          <p>
            Vi bruger dine oplysninger til at formidle kontakt mellem dig og elleverandører, 
            så de kan kontakte dig med tilbud. Vi deler dine oplysninger med de leverandører, 
            som du har givet samtykke til.
          </p>

          <p>
            Du har ret til at få indsigt i, rette eller slette dine oplysninger. Du kan også 
            trække dit samtykke tilbage eller klage til Datatilsynet.
          </p>

          <p>
            Vi opbevarer dine oplysninger så længe det er nødvendigt, dog maksimalt 2 år 
            efter din henvendelse.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Privatlivspolitik;
