import { useState } from "react";
import { Zap, HelpCircle, Loader2 } from "lucide-react";
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

const N8N_WEBHOOK_URL = "https://netpartner.app.n8n.cloud/webhook/60e4a428-1fb5-4e03-8af3-43eb3dc184d8";

const LeadForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [acceptContact, setAcceptContact] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.boligtype || !formData.personer || !formData.forbrug || !formData.adresse || !formData.navn || !formData.email || !formData.telefon) {
      toast.error("Udfyld venligst alle påkrævede felter");
      return;
    }

    if (!acceptContact) {
      toast.error("Du skal acceptere at blive kontaktet for at fortsætte");
      return;
    }

    setIsLoading(true);

    try {
      await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: "Net-Partner.dk",
        }),
      });

      toast.success("Tak for din henvendelse! Du vil snart blive kontaktet med tilbud.");
      
      // Reset form
      setFormData({
        boligtype: "",
        personer: "",
        forbrug: "",
        nuvarendeSelskab: "",
        adresse: "",
        navn: "",
        email: "",
        telefon: "",
      });
    } catch (error) {
      console.error("Error sending to n8n:", error);
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

        <form
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl shadow-card p-8 md:p-10 border border-border/50"
        >
          <div className="space-y-6">
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
              <Input
                id="nuvarendeSelskab"
                type="text"
                placeholder="F.eks. Ørsted, EWII, Norlys..."
                value={formData.nuvarendeSelskab}
                onChange={(e) => updateField("nuvarendeSelskab", e.target.value)}
                className="h-12 rounded-xl"
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

            {/* Kontaktoplysninger sektion */}
            <div className="pt-6 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Kontaktoplysninger
              </h3>

              <div className="space-y-4">
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
              </div>
            </div>

            {/* Submit button */}
            <Button variant="hero" size="xl" type="submit" className="w-full mt-6" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Zap className="w-5 h-5" />
              )}
              {isLoading ? "Sender..." : "Sammenlign nu"}
            </Button>

            {/* Accept checkbox */}
            <div className="flex items-start gap-4 mt-4 p-4 rounded-xl bg-muted/50 border border-border/50">
              <Checkbox
                id="acceptContact"
                checked={acceptContact}
                onCheckedChange={(checked) => setAcceptContact(checked === true)}
                className="h-6 w-6 mt-0.5"
              />
              <Label htmlFor="acceptContact" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                Jeg giver samtykke til Net-Partner.dk's privatlivspolitik. Samtidig giver jeg samtykke til at blive kontaktet af Net-Partner.dk's udvalgte el-leverandører via e-mail/telefon med tilbud på el. Jeg kan til enhver tid trække mit samtykke tilbage ved at klikke her. Jeg bekræfter, at jeg er over 18 år gammel.*
              </Label>
            </div>

            {/* Policy links */}
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mt-4">
              <Dialog>
                <DialogTrigger asChild>
                  <button type="button" className="underline hover:text-foreground transition-colors">
                    Handelsbetingelser
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-lg">
                  <DialogHeader>
                    <DialogTitle>Handelsbetingelser</DialogTitle>
                  </DialogHeader>
                  <div className="text-sm text-muted-foreground space-y-4 max-h-96 overflow-y-auto">
                    <p>Indsæt dine handelsbetingelser her...</p>
                  </div>
                </DialogContent>
              </Dialog>
              <span>•</span>
              <Dialog>
                <DialogTrigger asChild>
                  <button type="button" className="underline hover:text-foreground transition-colors">
                    Vilkår og betingelser
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-lg">
                  <DialogHeader>
                    <DialogTitle>Vilkår og betingelser</DialogTitle>
                  </DialogHeader>
                  <div className="text-sm text-muted-foreground space-y-4 max-h-96 overflow-y-auto">
                    <p>Indsæt dine vilkår og betingelser her...</p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

          </div>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;
