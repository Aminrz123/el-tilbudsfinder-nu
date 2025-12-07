import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t border-border shadow-lg animate-in slide-in-from-bottom-4 duration-300">
      <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          Vi bruger cookies for at forbedre din oplevelse på vores hjemmeside. Ved at fortsætte accepterer du vores brug af cookies.
        </p>
        <div className="flex gap-3 shrink-0">
          <Button variant="outline" size="sm" onClick={handleReject}>
            Afvis
          </Button>
          <Button size="sm" onClick={handleAccept}>
            Acceptér
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
