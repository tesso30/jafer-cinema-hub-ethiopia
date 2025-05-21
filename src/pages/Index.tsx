
import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MoviesSection from "../components/MoviesSection";
import ServicesSection from "../components/ServicesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

type Language = 'en' | 'am' | 'or';

const Index = () => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <div className="min-h-screen bg-jafer-dark text-white">
      <Navbar language={language} setLanguage={setLanguage} />
      <HeroSection language={language} />
      <MoviesSection language={language} />
      <ServicesSection language={language} />
      <HowItWorksSection language={language} />
      <ContactSection language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Index;
