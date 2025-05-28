
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";

type Language = 'en' | 'am' | 'or';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function Navbar({ language, setLanguage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const translations = {
    en: {
      home: 'Home',
      movies: 'Movies',
      services: 'Services',
      howItWorks: 'How It Works',
      contact: 'Contact'
    },
    am: {
      home: 'መነሻ',
      movies: 'ፊልሞች',
      services: 'አገልግሎቶች',
      howItWorks: 'እንዴት ይሰራል',
      contact: 'ያግኙን'
    },
    or: {
      home: 'Mana',
      movies: 'Fiilmii',
      services: 'Tajaajila',
      howItWorks: 'Akkamitti Hojjeta',
      contact: 'Nu Quunnamaa'
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-black/80 backdrop-blur-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img 
              src="/lovable-uploads/948eca0f-816c-48f3-b336-4a008276039c.png" 
              alt="Jafe Movies & Electronics Logo" 
              className="h-8 md:h-10 w-auto"
            />
          </a>
        </div>

        {isMobile ? (
          <div className="flex items-center gap-2">
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
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-white hover:text-jafer-gold transition-colors"
              >
                {translations[language].home}
              </button>
              <button 
                onClick={() => scrollToSection('movies')} 
                className="text-white hover:text-jafer-gold transition-colors"
              >
                {translations[language].movies}
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-white hover:text-jafer-gold transition-colors"
              >
                {translations[language].services}
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')} 
                className="text-white hover:text-jafer-gold transition-colors"
              >
                {translations[language].howItWorks}
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-white hover:text-jafer-gold transition-colors"
              >
                {translations[language].contact}
              </button>
            </nav>
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
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && isMobile && (
          <div className="fixed inset-0 top-16 bg-black/95 flex flex-col items-center pt-10 animate-fade-in">
            <nav className="flex flex-col items-center gap-6 text-lg">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-white hover:text-jafer-gold transition-colors"
              >
                {translations[language].home}
              </button>
              <button 
                onClick={() => scrollToSection('movies')} 
                className="text-white hover:text-jafer-gold transition-colors"
              >
                {translations[language].movies}
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-white hover:text-jafer-gold transition-colors"
              >
                {translations[language].services}
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')} 
                className="text-white hover:text-jafer-gold transition-colors"
              >
                {translations[language].howItWorks}
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-white hover:text-jafer-gold transition-colors"
              >
                {translations[language].contact}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
