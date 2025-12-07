import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Afmeld = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Fejl",
        description: "Indtast venligst din e-mailadresse",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Afmeldt",
      description: "Du er nu afmeldt vores nyhedsbrev og vil ikke modtage flere henvendelser.",
    });
    
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="container max-w-3xl">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tilbage til forsiden
          </Button>
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-8">Afmeld</h1>

        <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
          <section>
            <p>
              Ønsker du ikke længere at modtage henvendelser fra os eller vores 
              samarbejdspartnere? Indtast din e-mailadresse herunder, så fjerner 
              vi dig fra vores lister.
            </p>
          </section>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            <div className="space-y-2">
              <Label htmlFor="email">E-mailadresse</Label>
              <Input
                id="email"
                type="email"
                placeholder="din@email.dk"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Afmelder..." : "Afmeld mig"}
            </Button>
          </form>

          <section className="pt-6">
            <h2 className="text-xl font-semibold text-foreground mb-3">Bemærk</h2>
            <p>
              Når du afmelder dig, vil du ikke længere modtage tilbud fra 
              elleverandører via Net-Partner.dk. Dette påvirker ikke eventuelle 
              aftaler, du allerede har indgået direkte med en leverandør.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Afmeld;
