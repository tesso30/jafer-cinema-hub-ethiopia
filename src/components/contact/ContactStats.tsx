
import React from 'react';
import { Star } from "lucide-react";

type Language = 'en' | 'am' | 'or';

interface ContactStatsProps {
  language: Language;
}

const translations = {
  en: {
    stats: {
      customers: "10,000+",
      customersLabel: "Happy Customers",
      movies: "50,000+",
      moviesLabel: "Movies Available",
      experience: "10+",
      experienceLabel: "Years Experience",
      rating: "4.9/5",
      ratingLabel: "Customer Rating"
    }
  },
  am: {
    stats: {
      customers: "10,000+",
      customersLabel: "ደስተኛ ደንበኞች",
      movies: "50,000+",
      moviesLabel: "የሚገኙ ፊልሞች",
      experience: "10+",
      experienceLabel: "ዓመታት ልምድ",
      rating: "4.9/5",
      ratingLabel: "የደንበኛ ደረጃ"
    }
  },
  or: {
    stats: {
      customers: "10,000+",
      customersLabel: "Maamiltoota Gammadan",
      movies: "50,000+",
      moviesLabel: "Fiilmii Jiran",
      experience: "10+",
      experienceLabel: "Waggaawwan Muuxannoo",
      rating: "4.9/5",
      ratingLabel: "Madaallii Maamilaa"
    }
  }
};

export default function ContactStats({ language }: ContactStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
      <div className="text-center p-4 bg-black/30 rounded-xl border border-gray-800">
        <div className="text-2xl font-bold text-jafer-gold mb-1">{translations[language].stats.customers}</div>
        <div className="text-sm text-gray-400">{translations[language].stats.customersLabel}</div>
      </div>
      <div className="text-center p-4 bg-black/30 rounded-xl border border-gray-800">
        <div className="text-2xl font-bold text-jafer-gold mb-1">{translations[language].stats.movies}</div>
        <div className="text-sm text-gray-400">{translations[language].stats.moviesLabel}</div>
      </div>
      <div className="text-center p-4 bg-black/30 rounded-xl border border-gray-800">
        <div className="text-2xl font-bold text-jafer-gold mb-1">{translations[language].stats.experience}</div>
        <div className="text-sm text-gray-400">{translations[language].stats.experienceLabel}</div>
      </div>
      <div className="text-center p-4 bg-black/30 rounded-xl border border-gray-800">
        <div className="flex items-center justify-center gap-1 mb-1">
          <Star className="w-4 h-4 text-yellow-500" />
          <span className="text-2xl font-bold text-jafer-gold">{translations[language].stats.rating}</span>
        </div>
        <div className="text-sm text-gray-400">{translations[language].stats.ratingLabel}</div>
      </div>
    </div>
  );
}
