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
              Net-Partner.dk er 100% gratis at bruge for forbrugere. Du betaler aldrig 
              noget for at modtage tilbud eller sammenligne elpriser gennem vores service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Sådan tjener vi penge</h2>
            <p>
              Vi modtager en formidlingsprovision fra de elleverandører, som vi samarbejder med. 
              Når du vælger at indgå en aftale med en leverandør, som du er blevet kontaktet af 
              gennem vores service, modtager vi en mindre kommission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Uafhængighed</h2>
            <p>
              Vores provision påvirker ikke de tilbud, du modtager. Leverandørerne konkurrerer 
              om at give dig det bedste tilbud, og du er altid fri til at vælge det tilbud, 
              der passer bedst til dine behov - eller slet ingen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">Gennemsigtighed</h2>
            <p>
              Vi tror på åbenhed. Derfor fortæller vi dig præcis, hvordan vores forretning 
              fungerer. Du skal vide, at vi har et kommercielt samarbejde med de leverandører, 
              der kontakter dig.
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
