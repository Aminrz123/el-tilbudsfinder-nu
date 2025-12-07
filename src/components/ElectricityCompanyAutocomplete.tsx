import { useState, useEffect, useRef } from "react";

const danishElectricityCompanies = [
  "Andel",
  "Aura",
  "Barry",
  "b.energy",
  "Energi Fyn",
  "Energive",
  "Ewii",
  "GNP energy",
  "Jysk Energi",
  "Lokal-Energi",
  "Modstrøm",
  "Natur-Energi",
  "NettoPower",
  "Nordisk Energy",
  "Norlys",
  "NRGi",
  "OK",
  "Strømlinet",
  "Verdo",
  "Vindstød",
  "Ingen",
];

interface ElectricityCompanyAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const ElectricityCompanyAutocomplete = ({ 
  value, 
  onChange, 
  placeholder, 
  className 
}: ElectricityCompanyAutocompleteProps) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filterCompanies = (query: string) => {
    if (query.length < 1) {
      setSuggestions([]);
      setIsOpen(false);
      return;
    }

    const filtered = danishElectricityCompanies.filter((company) =>
      company.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filtered);
    setIsOpen(filtered.length > 0);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    filterCompanies(newValue);
  };

  const handleSelectSuggestion = (company: string) => {
    onChange(company);
    setIsOpen(false);
    setSuggestions([]);
  };

  const handleFocus = () => {
    if (value.length >= 1) {
      filterCompanies(value);
    } else {
      // Show all companies on focus if no input
      setSuggestions(danishElectricityCompanies.slice(0, 8));
      setIsOpen(true);
    }
  };

  return (
    <div ref={wrapperRef} className="relative">
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        onFocus={handleFocus}
        placeholder={placeholder}
        className={className}
      />

      {isOpen && suggestions.length > 0 && (
        <ul className="absolute z-50 w-full mt-1 bg-card border border-border rounded-xl shadow-lg overflow-hidden max-h-60 overflow-y-auto">
          {suggestions.map((company, index) => (
            <li
              key={index}
              onClick={() => handleSelectSuggestion(company)}
              className="px-4 py-3 cursor-pointer hover:bg-muted transition-colors text-sm text-foreground border-b border-border last:border-b-0"
            >
              {company}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ElectricityCompanyAutocomplete;
