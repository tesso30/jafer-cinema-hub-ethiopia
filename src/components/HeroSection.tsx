
import React from 'react';
import { Button } from "@/components/ui/button";

type Language = 'en' | 'am' | 'or';

interface HeroSectionProps {
  language: Language;
}

export default function HeroSection({ language }: HeroSectionProps) {
  const translations = {
    en: {
      title: "Discover Movies. Visit. Transfer Instantly.",
      subtitle: "Trending Films & Electronics Support at Your Fingertips",
      browseMovies: "Browse Movies",
      exploreServices: "Explore Services"
    },
    am: {
      title: "ፊልሞችን ያግኙ። ይጎብኙ። በፍጥነት ያስተላልፉ።",
      subtitle: "ተወዳጅ ፊልሞች እና የኤሌክትሮኒክስ ድጋፍ በእጅዎ",
      browseMovies: "ፊልሞችን ይመልከቱ",
      exploreServices: "አገልግሎቶችን ይመልከቱ"
    },
    or: {
      title: "Fiilmii Argadhu. Daawwadhu. Hatattamaan Dabarsuu.",
      subtitle: "Fiilmii Beekamaa fi Deeggarsa Ilektrooniksii Harkaa Keessanii",
      browseMovies: "Fiilmii Ilaali",
      exploreServices: "Tajaajila Daawwadhu"
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-hero-pattern bg-cover bg-center flex flex-col justify-center items-center text-white relative">
      <div className="absolute inset-0 bg-gradient-to-t from-jafer-dark to-transparent"></div>
      <div className="container mx-auto px-4 z-10 text-center max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
          {translations[language].title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {translations[language].subtitle}
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            onClick={() => scrollToSection('movies')}
            className="bg-jafer-gold hover:bg-jafer-darkgold text-black font-bold py-6 px-8 rounded-full"
            size="lg"
          >
            {translations[language].browseMovies}
          </Button>
          <Button 
            onClick={() => scrollToSection('services')}
            className="bg-jafer-red hover:bg-jafer-red/80 text-white font-bold py-6 px-8 rounded-full"
            variant="secondary"
            size="lg"
          >
            {translations[language].exploreServices}
          </Button>
        </div>
      </div>
    </section>
  );
}
