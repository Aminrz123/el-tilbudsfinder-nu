import { Link } from "react-router-dom";
import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 bg-foreground overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/20 rounded-full blur-[80px]" />
      
      <div className="container max-w-4xl text-center space-y-6 relative z-10">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
            <Zap className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-primary-foreground">Net-Partner.dk</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          {[
            { to: "/brugerbetingelser", label: "Brugerbetingelser" },
            { to: "/forretningsmodel", label: "Forretningsmodel" },
            { to: "/privatlivspolitik", label: "Privatlivspolitik" },
            { to: "/cookiepolitik", label: "Cookiepolitik" },
            { to: "/afmeld", label: "Afmeld" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <div className="w-16 h-px bg-primary-foreground/20 mx-auto" />
        
        <p className="text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Net-Partner.dk — Sammenlign elpriser gratis og uforpligtende
        </p>
      </div>
    </footer>
  );
};

export default Footer;
