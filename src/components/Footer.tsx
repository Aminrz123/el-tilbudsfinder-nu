import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-foreground text-primary-foreground/80">
      <div className="container max-w-4xl text-center space-y-3">
        <div className="flex items-center justify-center gap-4 text-sm">
          <Link to="/cookiepolitik" className="hover:text-primary-foreground underline transition-colors">
            Cookiepolitik
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
