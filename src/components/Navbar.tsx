
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";
import LanguageSelector from './navbar/LanguageSelector';
import NavigationMenu from './navbar/NavigationMenu';
import MobileMenu from './navbar/MobileMenu';

type Language = 'en' | 'am' | 'or';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function Navbar({ language, setLanguage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
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
              className="h-8 md:h-10 w-8 md:w-10 rounded-full object-cover border-2 border-jafer-gold/20"
            />
          </a>
        </div>

        {isMobile ? (
          <div className="flex items-center gap-2">
            <LanguageSelector language={language} setLanguage={setLanguage} />
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
            <div className="hidden md:flex items-center gap-6">
              <NavigationMenu language={language} />
            </div>
            <LanguageSelector language={language} setLanguage={setLanguage} />
          </div>
        )}

        <MobileMenu
          isMenuOpen={isMenuOpen && isMobile}
          language={language}
          onMenuItemClick={handleMenuItemClick}
        />
      </div>
    </header>
  );
}
