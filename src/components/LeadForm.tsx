import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Zap, HelpCircle, Loader2, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import AddressAutocomplete from "@/components/AddressAutocomplete";
import ElectricityCompanyAutocomplete from "@/components/ElectricityCompanyAutocomplete";
import { supabase } from "@/integrations/supabase/client";

const LeadForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptDataShare, setAcceptDataShare] = useState(false);
  const [formData, setFormData] = useState({
    boligtype: "",
    personer: "",
    forbrug: "",
    nuvarendeSelskab: "",
    adresse: "",
    navn: "",
    email: "",
    telefon: "",
  });

  const handleNextStep = () => {
    // Validate step 1 fields
    if (!formData.boligtype || !formData.personer || !formData.forbrug || !formData.adresse) {
      toast.error("Udfyld venligst alle påkrævede felter");
      return;
    }
    setStep(2);
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate step 2 fields
    if (!formData.navn || !formData.email || !formData.telefon) {
      toast.error("Udfyld venligst alle påkrævede felter");
      return;
    }

    if (!acceptTerms || !acceptDataShare) {
      toast.error("Du skal acceptere begge betingelser for at fortsætte");
      return;
    }

    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-lead-email", {
        body: {
          ...formData,
          timestamp: new Date().toISOString(),
          source: "Net-Partner.dk",
        },
      });

      if (error) throw error;

      // Redirect to success page
      navigate("/tak");
    } catch (error) {
      console.error("Error sending lead:", error);
      toast.error("Der opstod en fejl. Prøv venligst igen.");
    } finally {
      setIsLoading(false);
    }
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="lead-form" className="py-16 md:py-24 px-4 gradient-hero">
      <div className="container max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Beregn dit elforbrug
          </h2>
          <p className="text-muted-foreground">
            Udfyld formularen og modtag personlige tilbud
          </p>
        </div>

        {/* Progress indicator */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${step >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
              1
            </div>
            <span className={`text-sm font-medium ${step >= 1 ? 'text-foreground' : 'text-muted-foreground'}`}>
              Boliginfo
            </span>
          </div>
          <div className={`w-12 h-0.5 ${step >= 2 ? 'bg-primary' : 'bg-muted'}`} />
          <div className="flex items-center gap-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${step >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
              2
            </div>
            <span className={`text-sm font-medium ${step >= 2 ? 'text-foreground' : 'text-muted-foreground'}`}>
              Kontaktinfo
            </span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl shadow-card p-8 md:p-10 border border-border/50"
        >
          {/* Step 1: Boliginfo */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Om din bolig og forbrug
              </h3>

              {/* Boligtype */}
              <div className="space-y-2">
                <Label htmlFor="boligtype" className="text-foreground font-medium">
                  Boligtype *
                </Label>
                <Select
                  value={formData.boligtype}
                  onValueChange={(value) => updateField("boligtype", value)}
                >
                  <SelectTrigger className="h-12 rounded-xl">
                    <SelectValue placeholder="Vælg boligtype" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="hus">Hus</SelectItem>
                    <SelectItem value="lejlighed">Lejlighed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Antal personer */}
              <div className="space-y-2">
                <Label htmlFor="personer" className="text-foreground font-medium">
                  Antal personer i husstanden *
                </Label>
                <Input
                  id="personer"
                  type="number"
                  min="1"
                  max="10"
                  placeholder="F.eks. 2"
                  value={formData.personer}
                  onChange={(e) => updateField("personer", e.target.value)}
                  className="h-12 rounded-xl"
                />
              </div>

              {/* Estimeret forbrug */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="forbrug" className="text-foreground font-medium">
                    Estimeret forbrug (kWh/år) *
                  </Label>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="w-4 h-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs bg-card text-foreground border-border">
                      <p>Gennemsnit: Lejlighed ca. 2.000 kWh, Hus ca. 4.000 kWh</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Input
                  id="forbrug"
                  type="number"
                  placeholder="F.eks. 4000"
                  value={formData.forbrug}
                  onChange={(e) => updateField("forbrug", e.target.value)}
                  className="h-12 rounded-xl"
                />
                <p className="text-sm text-muted-foreground">
                  Gennemsnit: Lejlighed 2.000 kWh, Hus 4.000 kWh
                </p>
              </div>

              {/* Nuværende elselskab */}
              <div className="space-y-2">
                <Label htmlFor="nuvarendeSelskab" className="text-foreground font-medium">
                  Nuværende elselskab (valgfrit)
                </Label>
                <ElectricityCompanyAutocomplete
                  value={formData.nuvarendeSelskab}
                  onChange={(value) => updateField("nuvarendeSelskab", value)}
                  placeholder="Begynd at skrive dit elselskab..."
                  className="flex h-12 w-full rounded-xl border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                />
              </div>

              {/* Adresse */}
              <div className="space-y-2">
                <Label htmlFor="adresse" className="text-foreground font-medium">
                  Adresse *
                </Label>
                <AddressAutocomplete
                  value={formData.adresse}
                  onChange={(value) => updateField("adresse", value)}
                  placeholder="Begynd at skrive din adresse..."
                  className="flex h-12 w-full rounded-xl border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                />
              </div>

              {/* Next button */}
              <Button
                type="button"
                variant="hero"
                size="xl"
                className="w-full mt-6"
                onClick={handleNextStep}
              >
                Næste
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          )}

          {/* Step 2: Kontaktinfo */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Dine kontaktoplysninger
              </h3>

              {/* Fulde navn */}
              <div className="space-y-2">
                <Label htmlFor="navn" className="text-foreground font-medium">
                  Fulde navn *
                </Label>
                <Input
                  id="navn"
                  type="text"
                  placeholder="Dit fulde navn"
                  value={formData.navn}
                  onChange={(e) => updateField("navn", e.target.value)}
                  className="h-12 rounded-xl"
                />
              </div>

              {/* E-mail */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">
                  E-mail *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="din@email.dk"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="h-12 rounded-xl"
                />
              </div>

              {/* Telefonnummer */}
              <div className="space-y-2">
                <Label htmlFor="telefon" className="text-foreground font-medium">
                  Telefonnummer *
                </Label>
                <Input
                  id="telefon"
                  type="tel"
                  placeholder="12 34 56 78"
                  value={formData.telefon}
                  onChange={(e) => updateField("telefon", e.target.value)}
                  className="h-12 rounded-xl"
                />
              </div>

              {/* Accept terms checkbox */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border/50">
                <Checkbox
                  id="acceptTerms"
                  checked={acceptTerms}
                  onCheckedChange={(checked) => setAcceptTerms(checked === true)}
                  className="h-6 w-6 mt-0.5"
                />
                <Label htmlFor="acceptTerms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  Jeg accepterer{" "}
                  <Dialog>
                    <DialogTrigger asChild>
                      <button type="button" className="underline hover:text-foreground transition-colors font-medium text-primary">
                        brugerbetingelserne
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-lg">
                      <DialogHeader>
                        <DialogTitle>Brugerbetingelser</DialogTitle>
                      </DialogHeader>
                      <div className="text-sm text-muted-foreground space-y-4 max-h-96 overflow-y-auto">
                        <p>Ved at benytte Net-Partner.dk accepterer du vores brugervilkår:</p>
                        <p>Net-Partner.dk er en gratis tjeneste, der sætter brugere i kontakt med udvalgte virksomheder.</p>
                        <p>Når du udfylder skemaet på Net-Partner.dk, informerer du virksomhederne om dine behov, så de kan sende dig passende tilbud. Derefter vil udvalgte virksomheder kontakte dig med tilbud, hvis vi finder nogen, der opfylder dine kriterier.</p>
                        <p>Du modtager også en bekræftelsesmail fra os med information om, hvilke virksomheder der har modtaget din henvendelse.</p>
                        <p>Medmindre andet er aftalt, vil virksomhederne kontakte dig via telefon, e-mail eller SMS. Efter dette foregår al kontakt direkte mellem dig og virksomhederne.</p>
                        <p>Du kan til enhver tid få dine oplysninger slettet, efter du har udfyldt skemaet. Kontakt os på <a href="mailto:kontakt@net-partner.dk" className="text-primary underline">kontakt@net-partner.dk</a>, så hjælper vi dig.</p>
                        <p>
                          <a href="/brugerbetingelser" className="text-primary underline hover:text-primary/80">
                            Læs de fulde brugerbetingelser her.
                          </a>
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                  {" "}og bekræfter, at personoplysningerne er korrekte.*
                </Label>
              </div>

              {/* Accept data share checkbox */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border/50">
                <Checkbox
                  id="acceptDataShare"
                  checked={acceptDataShare}
                  onCheckedChange={(checked) => setAcceptDataShare(checked === true)}
                  className="h-6 w-6 mt-0.5"
                />
                <Label htmlFor="acceptDataShare" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  Jeg samtykker til, at mine oplysninger må behandles af Net-Partner.dk og videregives til udvalgte el-leverandører. Tilbud formidles via telefon, mail eller sms, uafhængigt af om du er registreret på Robinsonlisten. Samtykket kan tilbagekaldes ved at skrive til{" "}
                  <a href="mailto:kontakt@net-partner.dk" className="text-primary underline hover:text-foreground transition-colors">
                    kontakt@net-partner.dk
                  </a>.*
                </Label>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-6">
                <Button
                  type="button"
                  variant="outline"
                  size="xl"
                  className="flex-1"
                  onClick={handlePrevStep}
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Tilbage
                </Button>
                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="flex-1"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Zap className="w-5 h-5" />
                  )}
                  {isLoading ? "Sender..." : "Sammenlign nu"}
                </Button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default LeadForm;
