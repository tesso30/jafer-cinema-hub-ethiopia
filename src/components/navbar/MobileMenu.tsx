
import React from 'react';
import NavigationMenu from './NavigationMenu';

type Language = 'en' | 'am' | 'or';

interface MobileMenuProps {
  isMenuOpen: boolean;
  language: Language;
  onMenuItemClick: () => void;
}

export default function MobileMenu({ isMenuOpen, language, onMenuItemClick }: MobileMenuProps) {
  if (!isMenuOpen) return null;

  return (
    <div className="fixed inset-0 top-16 bg-black/95 flex flex-col items-center pt-10 animate-fade-in">
      <NavigationMenu language={language} isMobile onMenuItemClick={onMenuItemClick} />
    </div>
  );
}
