const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-foreground text-primary-foreground/80">
      <div className="container max-w-4xl text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Net-Partner.dk — Sammenlign elpriser gratis og uforpligtende
        </p>
      </div>
    </footer>
  );
};

export default Footer;
