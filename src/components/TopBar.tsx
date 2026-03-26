import { CheckCircle, Zap, Users, Clock } from "lucide-react";

const usps = [
  { icon: CheckCircle, text: "Personlig rådgivning" },
  { icon: Clock, text: "Skift elselskab på 2 min" },
  { icon: Users, text: "Sammenlign flere elselskaber" },
];

const TopBar = () => {
  return (
    <div className="bg-foreground text-primary-foreground/90 py-2 px-4 relative overflow-hidden">
      {/* Animated gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20" />
      
      <div className="container max-w-7xl relative z-10">
        <div className="flex items-center justify-center gap-6 md:gap-10">
          {usps.map((usp) => (
            <div key={usp.text} className="flex items-center gap-2">
              <usp.icon className="w-3.5 h-3.5 text-accent flex-shrink-0" />
              <span className="text-xs md:text-sm font-medium whitespace-nowrap">{usp.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
