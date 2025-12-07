import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-foreground text-primary-foreground/80">
      <div className="container max-w-4xl text-center space-y-3">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
          <Link to="/brugerbetingelser" className="hover:text-primary-foreground underline transition-colors">
            Brugerbetingelser
          </Link>
          <span className="hidden sm:inline">•</span>
          <Link to="/forretningsmodel" className="hover:text-primary-foreground underline transition-colors">
            Forretningsmodel
          </Link>
          <span className="hidden sm:inline">•</span>
          <Link to="/privatlivspolitik" className="hover:text-primary-foreground underline transition-colors">
            Privatlivspolitik
          </Link>
          <span className="hidden sm:inline">•</span>
          <Link to="/cookiepolitik" className="hover:text-primary-foreground underline transition-colors">
            Cookiepolitik
          </Link>
          <span className="hidden sm:inline">•</span>
          <Link to="/afmeld" className="hover:text-primary-foreground underline transition-colors">
            Afmeld
          </Link>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Net-Partner.dk — Sammenlign elpriser gratis og uforpligtende
        </p>
      </div>
    </footer>
  );
};

export default Footer;
