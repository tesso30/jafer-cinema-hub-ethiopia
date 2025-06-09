
import React from 'react';
import { Button } from "@/components/ui/button";

type Language = 'en' | 'am' | 'or';

interface LanguageSelectorProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function LanguageSelector({ language, setLanguage }: LanguageSelectorProps) {
  return (
    <div className="flex gap-1">
      <Button
        variant={language === 'en' ? 'default' : 'outline'} 
        size="sm"
        onClick={() => setLanguage('en')}
        className="h-8 w-8 rounded-full p-0"
      >
        EN
      </Button>
      <Button
        variant={language === 'am' ? 'default' : 'outline'} 
        size="sm"
        onClick={() => setLanguage('am')}
        className="h-8 w-8 rounded-full p-0"
      >
        አማ
      </Button>
      <Button
        variant={language === 'or' ? 'default' : 'outline'} 
        size="sm"
        onClick={() => setLanguage('or')}
        className="h-8 w-8 rounded-full p-0"
      >
        OR
      </Button>
    </div>
  );
}
