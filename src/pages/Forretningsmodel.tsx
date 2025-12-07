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

        <h1 className="text-3xl font-bold text-foreground mb-8">Forretningsmodel</h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Net-Partner.dk er en online platform, der hjælper danske forbrugere med at finde 
            den bedste udbyder ved at indhente flere tilbud fra forskellige danske udbydere. 
            Platformens mål er at gøre det nemt og overskueligt for forbrugerne at sammenligne 
            og vælge den mest passende udbyder baseret på deres behov og præferencer.
          </p>

          <p>
            Net-Partner.dk tilbyder en enkel og brugervenlig løsning, der sparer tid og penge 
            for forbrugerne ved at automatisere processen med at modtage tilbud fra flere 
            leverandører. Dette skaber værdi ved at:
          </p>

          <ul className="space-y-3 pl-6">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-muted-foreground mt-2 shrink-0"></span>
              <span>Give forbrugerne adgang til konkurrencedygtige priser.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-muted-foreground mt-2 shrink-0"></span>
              <span>Sikre gennemsigtighed og overblik over markedet.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-muted-foreground mt-2 shrink-0"></span>
              <span>Tilbyde en nem og hurtig sammenligningsproces.</span>
            </li>
          </ul>

          <p>
            Net-Partner.dk modtager kommission, når en bruger tilmelder sig gennem platformen.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Forretningsmodel;
