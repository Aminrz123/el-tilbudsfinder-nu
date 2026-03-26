import { useState } from "react";
import { Zap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Fordele", href: "#benefits" },
  { label: "Sådan virker det", href: "#lead-form" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border/50 shadow-sm">
      <div className="container max-w-7xl flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center shadow-md">
            <Zap className="w-4.5 h-4.5 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <span className="text-lg font-bold text-foreground">Net-Partner</span>
            <span className="block text-[11px] text-muted-foreground -mt-0.5">Sammenlign elpriser</span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Button
            variant="hero"
            size="sm"
            className="hidden sm:inline-flex shadow-button"
            onClick={() => scrollTo("#lead-form")}
          >
            Få tilbud
          </Button>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-lg border-t border-border/50 px-4 pb-4 animate-fade-in">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-border/30 last:border-0"
            >
              {link.label}
            </button>
          ))}
          <Button
            variant="hero"
            size="sm"
            className="w-full mt-3 shadow-button"
            onClick={() => scrollTo("#lead-form")}
          >
            Få tilbud
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
