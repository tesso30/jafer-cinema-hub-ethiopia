
import React from 'react';
import { Users, Star, CheckCircle, Clock } from "lucide-react";

type Language = 'en' | 'am' | 'or';

interface TrustIndicatorsProps {
  translations: {
    experience: string;
    customers: string;
    rating: string;
    features: {
      certified: string;
      warranty: string;
      support: string;
      satisfaction: string;
    };
  };
}

export default function TrustIndicators({ translations }: TrustIndicatorsProps) {
  const indicators = [
    {
      icon: Users,
      title: translations.experience,
      subtitle: translations.features.certified
    },
    {
      icon: Star,
      title: translations.rating,
      subtitle: translations.features.satisfaction
    },
    {
      icon: CheckCircle,
      title: translations.customers,
      subtitle: translations.features.warranty
    },
    {
      icon: Clock,
      title: "24/7",
      subtitle: translations.features.support
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
      {indicators.map((indicator, index) => {
        const Icon = indicator.icon;
        return (
          <div key={index} className="text-center">
            <div className="flex items-center justify-center w-16 h-16 bg-jafer-gold/20 rounded-full mx-auto mb-3">
              <Icon className="w-8 h-8 text-jafer-gold" />
            </div>
            <div className="text-lg font-bold text-white">{indicator.title}</div>
            <div className="text-sm text-gray-400">{indicator.subtitle}</div>
          </div>
        );
      })}
    </div>
  );
}
