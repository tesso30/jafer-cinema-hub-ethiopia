
import React from 'react';
import { Button } from "@/components/ui/button";
import { Play, Download } from "lucide-react";

type Language = 'en' | 'am' | 'or';

interface HeroSectionProps {
  language: Language;
}

export default function HeroSection({ language }: HeroSectionProps) {
  const translations = {
    en: {
      title: "Discover Movies. Visit. Transfer Instantly.",
      subtitle: "Your one-stop destination for the latest movies and professional electronics services. Experience entertainment like never before.",
      description: "Browse thousands of movies online, visit our store with your device, and get instant transfers. Plus, get expert help with all your electronic needs.",
      browseMovies: "Browse Movies",
      exploreServices: "Explore Services",
      watchPreview: "Watch Preview"
    },
    am: {
      title: "ፊልሞችን ያግኙ። ይጎብኙ። በፍጥነት ያስተላልፉ።",
      subtitle: "ለዘመናዊ ፊልሞች እና ሙያዊ የኤሌክትሮኒክስ አገልግሎቶች የእርስዎ ሙሉ መድረሻ። መዝናኛን በተለየ መንገድ ይለማመዱ።",
      description: "በሺዎች የሚቆጠሩ ፊልሞችን በመስመር ላይ ይመልከቱ፣ መሳሪያዎን ይዘው መደብራችንን ይጎብኙ፣ እና ፈጣን ስርጭት ያግኙ። በተጨማሪም ለሁሉም የኤሌክትሮኒክስ ፍላጎቶችዎ ባለሙያ እርዳታ ያግኙ።",
      browseMovies: "ፊልሞችን ይመልከቱ",
      exploreServices: "አገልግሎቶችን ይመልከቱ",
      watchPreview: "ቅድመ እይታ ይመልከቱ"
    },
    or: {
      title: "Fiilmii Argadhu. Daawwadhu. Hatattamaan Dabarsuu.",
      subtitle: "Fiilmii haaraa fi tajaajila elektrooniksii ogummaa argachuuf bakka tokkoo. Bashannanaa haala haaraatiin mudadhu.",
      description: "Fiilmii kumaatama marsariitii irratti ilaali, meeshaa keetiin duka'ana keenya daawwadhu, fi dabarsuu ariifataa argadhu. Dabalataan barbaachisummaa elektrooniksii hundaaf gargaarsa ogeeyyii argadhu.",
      browseMovies: "Fiilmii Ilaali",
      exploreServices: "Tajaajila Daawwadhu",
      watchPreview: "Mul'ata Dursaa Ilaali"
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-hero-pattern bg-cover bg-center flex flex-col justify-center items-center text-white relative overflow-hidden pt-20 md:pt-0">
      {/* Enhanced gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-jafer-dark via-jafer-dark/90 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-jafer-dark via-transparent to-jafer-dark/30"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-jafer-gold/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-jafer-red/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center max-w-5xl">
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight animate-fade-in bg-gradient-to-r from-white via-jafer-gold to-white bg-clip-text text-transparent">
          {translations[language].title}
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-300 mb-3 md:mb-4 animate-fade-in font-medium px-2" style={{ animationDelay: '0.2s' }}>
          {translations[language].subtitle}
        </p>
        
        <p className="text-base md:text-lg text-gray-400 mb-8 md:mb-10 max-w-3xl mx-auto animate-fade-in px-2" style={{ animationDelay: '0.3s' }}>
          {translations[language].description}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-6 md:mb-8 animate-fade-in px-4" style={{ animationDelay: '0.4s' }}>
          <Button 
            onClick={() => scrollToSection('movies')}
            className="bg-jafer-gold hover:bg-jafer-darkgold text-black font-bold py-4 md:py-6 px-6 md:px-8 rounded-full text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-jafer-gold/20"
            size="lg"
            aria-label={`${translations[language].browseMovies} - Navigate to movies section`}
          >
            <Download className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            {translations[language].browseMovies}
          </Button>
          
          <Button 
            onClick={() => scrollToSection('services')}
            className="bg-jafer-red hover:bg-jafer-red/80 text-white font-bold py-4 md:py-6 px-6 md:px-8 rounded-full text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-jafer-red/20"
            variant="secondary"
            size="lg"
            aria-label={`${translations[language].exploreServices} - Navigate to services section`}
          >
            {translations[language].exploreServices}
          </Button>
          
          <Button 
            onClick={() => scrollToSection('movies')}
            className="bg-transparent border-2 border-white/30 hover:border-white/60 text-white font-bold py-4 md:py-6 px-6 md:px-8 rounded-full text-base md:text-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
            variant="outline"
            size="lg"
            aria-label={`${translations[language].watchPreview} - View movie previews`}
          >
            <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" />
            {translations[language].watchPreview}
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce mt-4 md:mt-8" style={{ animationDelay: '0.6s' }}>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
