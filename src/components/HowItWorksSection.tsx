
import React from 'react';
import { cn } from "@/lib/utils";

type Language = 'en' | 'am' | 'or';

interface HowItWorksSectionProps {
  language: Language;
}

export default function HowItWorksSection({ language }: HowItWorksSectionProps) {
  const translations = {
    en: {
      title: "How It Works",
      subtitle: "Follow these simple steps to get your favorite movies and electronic services",
      steps: [
        {
          number: "01",
          title: "Browse movies on the site",
          description: "Explore our extensive collection of movies and find your favorites."
        },
        {
          number: "02",
          title: "Visit the store",
          description: "Come to our physical location with your storage device."
        },
        {
          number: "03",
          title: "Get selected movies transferred",
          description: "We'll quickly transfer your chosen movies to your device."
        },
        {
          number: "04",
          title: "Inquire about electronics services",
          description: "Ask our staff about available electronics services and support."
        }
      ]
    },
    am: {
      title: "እንዴት ይሰራል",
      subtitle: "የሚወዷቸውን ፊልሞች እና የኤሌክትሮኒክስ አገልግሎቶችን ለማግኘት እነዚህን ቀላል ደረጃዎች ይከተሉ",
      steps: [
        {
          number: "01",
          title: "በድረ-ገጹ ላይ ፊልሞችን ይመልከቱ",
          description: "ሰፊውን የፊልም ስብስብ ይመርምሩ እና የሚወዷቸውን ያግኙ።"
        },
        {
          number: "02",
          title: "መደብሩን ይጎብኙ",
          description: "ከማከማቻ መሳሪያዎ ጋር ወደ አካባቢያችን ይምጡ።"
        },
        {
          number: "03",
          title: "የተመረጡት ፊልሞች እንዲላኩ ያድርጉ",
          description: "የመረጧቸውን ፊልሞች በፍጥነት ወደ መሳሪያዎ እናስተላልፋለን።"
        },
        {
          number: "04",
          title: "ስለ ኤሌክትሮኒክስ አገልግሎቶች ይጠይቁ",
          description: "ሰራተኞቻችን ስላሉት የኤሌክትሮኒክስ አገልግሎቶች እና ድጋፍ ይጠይቁ።"
        }
      ]
    },
    or: {
      title: "Akkamitti Hojjeta",
      subtitle: "Fiilmii fi tajaajila elektrooniksii barbaaddu argachuuf tartiiba salphaa kana hordofi",
      steps: [
        {
          number: "01",
          title: "Marsariitii irratti fiilmii daawwadhu",
          description: "Sasaxilama fiilmii bal'aa keenya sakatta'i filannoo kee argadhu."
        },
        {
          number: "02",
          title: "Duka'ana daawwadhu",
          description: "Meeshaa kuusaa keessan waliin bakka teessuma qaamaa keenyatti koottu."
        },
        {
          number: "03",
          title: "Fiilmii filatte dabarsi",
          description: "Fiilmii ati filatte meeshaa keetti ariitiidhaan dabarfina."
        },
        {
          number: "04",
          title: "Tajaajila elektrooniksii gaafadhu",
          description: "Hojjattoota keenya tajaajila elektrooniksii fi deeggarsa jiru gaafadhu."
        }
      ]
    }
  };

  return (
    <section id="how-it-works" className="section-container bg-jafer-darker">
      <h2 className="section-title gradient-text">{translations[language].title}</h2>
      <p className="section-subtitle">{translations[language].subtitle}</p>
      
      <div className="max-w-4xl mx-auto">
        {translations[language].steps.map((step, index) => (
          <div 
            key={step.number}
            className={cn(
              "flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 last:mb-0",
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            )}
          >
            <div className="md:w-1/4 flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-jafer-gold/20 border border-jafer-gold flex items-center justify-center">
                <span className="text-2xl font-bold text-jafer-gold">{step.number}</span>
              </div>
            </div>
            <div className={cn(
              "flex-grow bg-black/30 rounded-xl p-6 border border-gray-800",
              index % 2 === 1 ? "text-right md:text-right" : "text-left md:text-left"
            )}>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
