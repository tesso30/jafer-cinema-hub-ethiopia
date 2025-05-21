
import React from 'react';

type Language = 'en' | 'am' | 'or';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const translations = {
    en: {
      copyright: "© 2025 Jafer's Movie & Electronics. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    },
    am: {
      copyright: "© 2025 የጃፈር ፊልም እና ኤሌክትሮኒክስ። መብቱ በህግ የተጠበቀ ነው።",
      privacy: "የግላዊነት ፖሊሲ",
      terms: "የአገልግሎት ውሎች"
    },
    or: {
      copyright: "© 2025 Jafer's Fiilmii fi Elektrooniksii. Mirgi hundi seeraan kan eegame.",
      privacy: "Imaammata Dhuunfaa",
      terms: "Waliigaltee Tajaajilaa"
    }
  };

  return (
    <footer className="bg-jafer-darker py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">{translations[language].copyright}</p>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-jafer-gold">
              {translations[language].privacy}
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-jafer-gold">
              {translations[language].terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
