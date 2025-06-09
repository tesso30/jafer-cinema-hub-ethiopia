
import React, { useState } from 'react';
import { Tv, Smartphone, Wrench, Satellite } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { serviceTranslations, Language } from '@/utils/serviceTranslations';
import ServiceCard from './services/ServiceCard';
import TrustIndicators from './services/TrustIndicators';

interface ServicesSectionProps {
  language: Language;
}

export default function ServicesSection({ language }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const navigate = useNavigate();
  const translations = serviceTranslations[language];

  const services = [
    {
      key: 'tvService',
      id: 'tv',
      icon: Tv,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/20'
    },
    {
      key: 'dishService',
      id: 'dish',
      icon: Satellite,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/20'
    },
    {
      key: 'jepasService',
      id: 'jepas',
      icon: Wrench,
      color: 'text-green-400',
      bgColor: 'bg-green-400/20'
    },
    {
      key: 'mobileService',
      id: 'mobile',
      icon: Smartphone,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/20'
    }
  ];

  return (
    <section id="services" className="section-container">
      <h2 className="section-title gradient-text">{translations.title}</h2>
      <p className="section-subtitle">{translations.subtitle}</p>
      
      <TrustIndicators translations={translations} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {services.map((service) => {
          const serviceData = translations[service.key as keyof typeof translations] as any;
          return (
            <ServiceCard
              key={service.key}
              service={service}
              serviceData={serviceData}
              translations={translations}
              isSelected={selectedService === service.key}
              onClick={() => setSelectedService(selectedService === service.key ? null : service.key)}
            />
          );
        })}
      </div>
      
      <div className="text-center bg-black/30 rounded-xl p-8 border border-gray-800">
        <h3 className="text-2xl font-bold mb-4 gradient-text">{translations.whyChooseUs}</h3>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Professional service with certified technicians, comprehensive warranty, and 24/7 support for all your electronic needs.
        </p>
        <Button 
          size="lg"
          className="bg-jafer-gold text-black hover:bg-jafer-darkgold font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
          onClick={() => navigate('/quote')}
        >
          {translations.getQuote}
        </Button>
      </div>
    </section>
  );
}
