
import React from 'react';

type Language = 'en' | 'am' | 'or';

interface NavigationMenuProps {
  language: Language;
  isMobile?: boolean;
  onMenuItemClick?: () => void;
}

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

export default function NavigationMenu({ language, isMobile = false, onMenuItemClick }: NavigationMenuProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onMenuItemClick?.();
    }
  };

  const menuItems = [
    { key: 'home', id: 'home' },
    { key: 'movies', id: 'movies' },
    { key: 'services', id: 'services' },
    { key: 'howItWorks', id: 'how-it-works' },
    { key: 'contact', id: 'contact' }
  ];

  const baseClasses = "text-white hover:text-jafer-gold transition-colors";
  const mobileClasses = isMobile ? "text-lg" : "";

  return (
    <nav className={`flex ${isMobile ? 'flex-col' : ''} items-center gap-6`}>
      {menuItems.map((item) => (
        <button 
          key={item.key}
          onClick={() => scrollToSection(item.id)} 
          className={`${baseClasses} ${mobileClasses}`}
        >
          {translations[language][item.key as keyof typeof translations[typeof language]]}
        </button>
      ))}
    </nav>
  );
}
