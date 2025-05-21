
import React from 'react';
import { cn } from "@/lib/utils";
import { Tv, Gamepad, Speaker, Computer } from "lucide-react";

type Language = 'en' | 'am' | 'or';

interface ServicesSectionProps {
  language: Language;
}

export default function ServicesSection({ language }: ServicesSectionProps) {
  const translations = {
    en: {
      title: "Electronics Services",
      subtitle: "Professional setup and repair for all your electronic needs",
      tvService: {
        title: "TV Setup / Repair",
        description: "Installation, configuration, and repair services for all TV brands and satellite systems."
      },
      gameService: {
        title: "Game Console Support",
        description: "Setup, troubleshooting and repair for PlayStation, Xbox, and other gaming consoles."
      },
      speakerService: {
        title: "Speaker Setup",
        description: "Home theater installation, sound system configuration, and audio equipment repair."
      },
      computerService: {
        title: "PC/Device Troubleshooting",
        description: "Hardware and software fixes for computers, laptops and mobile devices."
      },
      pricing: "Prices available in-store. Contact us for more info."
    },
    am: {
      title: "የኤሌክትሮኒክስ አገልግሎቶች",
      subtitle: "ለሁሉም የኤሌክትሮኒክስ ፍላጎቶችዎ ሙያዊ ማስገጃ እና ጥገና",
      tvService: {
        title: "የቴሌቪዥን ማዋቀር / ጥገና",
        description: "ለሁሉም የቴሌቪዥን ብራንዶች እና የሳተላይት ስርዓቶች ማስገጃ፣ ውቅር እና የጥገና አገልግሎቶች።"
      },
      gameService: {
        title: "የጨዋታ ኮንሶል ድጋፍ",
        description: "ለፕሌይስቴሽን፣ ኤክስቦክስ እና ሌሎች የጨዋታ ኮንሶሎች ውቅር፣ አስተካክሎ እና ጥገና።"
      },
      speakerService: {
        title: "የድምጽ ማጉያ ማዋቀር",
        description: "የቤት ውስጥ ትያትር ማስገጃ፣ የድምጽ ስርዓት ውቅር እና የድምጽ መሳሪያዎች ጥገና።"
      },
      computerService: {
        title: "PC/መሳሪያ ችግር መፍታት",
        description: "ለኮምፒውተሮች፣ ላፕቶፖች እና ተንቀሳቃሽ መሳሪያዎች የሃርድዌር እና ሶፍትዌር ጥገናዎች።"
      },
      pricing: "ዋጋዎች በመደብሩ ይገኛሉ። ለበለጠ መረጃ ያግኙን።"
    },
    or: {
      title: "Tajaajila Elektrooniksii",
      subtitle: "Dhaabbii fi suphaa professionaala barbaachisummaa elektrooniksi keessaniif",
      tvService: {
        title: "Qopheessa / Suphaa TV",
        description: "Tajaajila dhaabbii, qindaa'ina, fi suphaa braandii fi sirna saatalaayitii TV hunda."
      },
      gameService: {
        title: "Deeggarsa Konsolii Geemii",
        description: "Qopheessa, qorannoo rakkoo fi suphaa PlayStation, Xbox, fi konsoolota taphaa biroo."
      },
      speakerService: {
        title: "Qophii Speekara",
        description: "Dhaabbii filmiiwwan manaa, qindaa'ina sirna sagalee, fi suphaa meeshaalee odio."
      },
      computerService: {
        title: "Qorannoo Rakkoo PC/Meeshaa",
        description: "Siriifata haardiweeraa fi softweeraaf kompiitarootaa, laaptoopii, fi meeshaalee moobaayilii."
      },
      pricing: "Gatiin duka'ana keessatti argama. Odeeffannoo dabalataa argachuuf nu qunnamaa."
    }
  };

  const ServiceCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
    <div className="bg-black/30 rounded-xl p-6 border border-gray-800 card-hover">
      <div className="flex flex-col items-center text-center">
        <div className="h-16 w-16 rounded-full bg-jafer-gold/20 flex items-center justify-center mb-4">
          <Icon className="h-8 w-8 text-jafer-gold" />
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );

  return (
    <section id="services" className="section-container">
      <h2 className="section-title gradient-text">{translations[language].title}</h2>
      <p className="section-subtitle">{translations[language].subtitle}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <ServiceCard
          icon={Tv}
          title={translations[language].tvService.title}
          description={translations[language].tvService.description}
        />
        <ServiceCard
          icon={Gamepad}
          title={translations[language].gameService.title}
          description={translations[language].gameService.description}
        />
        <ServiceCard
          icon={Speaker}
          title={translations[language].speakerService.title}
          description={translations[language].speakerService.description}
        />
        <ServiceCard
          icon={Computer}
          title={translations[language].computerService.title}
          description={translations[language].computerService.description}
        />
      </div>
      
      <p className="text-center text-jafer-gold font-medium text-lg">
        {translations[language].pricing}
      </p>
    </section>
  );
}
