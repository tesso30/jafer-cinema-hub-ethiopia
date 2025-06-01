
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";
import { Language, moviesTranslations } from '@/utils/moviesTranslations';

interface CountrySelectorProps {
  language: Language;
  selectedCountry: string;
  onCountryChange: (country: string) => void;
}

export default function CountrySelector({
  language,
  selectedCountry,
  onCountryChange
}: CountrySelectorProps) {
  const translations = moviesTranslations[language];

  const countries = [
    { value: 'usa', label: translations.usa, flag: '🇺🇸' },
    { value: 'france', label: translations.france, flag: '🇫🇷' },
    { value: 'japan', label: translations.japan, flag: '🇯🇵' },
    { value: 'korea', label: translations.korea, flag: '🇰🇷' },
    { value: 'india', label: translations.india, flag: '🇮🇳' },
  ];

  const selectedCountryData = countries.find(c => c.value === selectedCountry);

  return (
    <div className="max-w-4xl mx-auto mb-6 sm:mb-8">
      <div className="flex items-center gap-3 mb-4">
        <Globe className="w-5 h-5 text-jafer-gold" />
        <h3 className="text-lg font-semibold text-white">{translations.selectCountry}</h3>
      </div>
      
      <Select value={selectedCountry} onValueChange={onCountryChange}>
        <SelectTrigger className="w-full sm:w-64 bg-black/40 border-gray-700 focus:border-jafer-gold text-white">
          <SelectValue>
            <div className="flex items-center gap-2">
              <span className="text-lg">{selectedCountryData?.flag}</span>
              <span>{selectedCountryData?.label}</span>
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-black/90 border-gray-700 text-white">
          {countries.map((country) => (
            <SelectItem 
              key={country.value} 
              value={country.value}
              className="hover:bg-jafer-gold/20 focus:bg-jafer-gold/20"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{country.flag}</span>
                <span>{country.label}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
