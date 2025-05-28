
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { Tv, Smartphone, Wrench, Star, Clock, Users, CheckCircle, Satellite } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

type Language = 'en' | 'am' | 'or';

interface ServicesSectionProps {
  language: Language;
}

export default function ServicesSection({ language }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const navigate = useNavigate();

  const translations = {
    en: {
      title: "Professional Electronics Services",
      subtitle: "Expert installation, repair, and support for all your electronic devices with certified technicians",
      tvService: {
        title: "TV Setup & Repair",
        description: "Complete installation, configuration, and repair services for all TV brands, satellite systems, and smart TV setup.",
        features: ["Free diagnosis", "Same-day service", "1-year warranty", "All brands supported"],
        duration: "30-90 minutes"
      },
      dishService: {
        title: "DISH Installation",
        description: "Professional DISH satellite installation and setup with optimal signal positioning, receiver configuration, and channel programming.",
        features: ["Signal optimization", "Multi-room setup", "HD/4K programming", "Professional mounting"],
        duration: "120-240 minutes"
      },
      jepasService: {
        title: "Jepas Repair",
        description: "Professional repair services for Jepas devices with expert troubleshooting, component replacement, and performance optimization.",
        features: ["Expert diagnosis", "Genuine parts", "Performance optimization", "Quality guarantee"],
        duration: "60-180 minutes"
      },
      mobileService: {
        title: "Mobile Repair",
        description: "Comprehensive smartphone and tablet repair services including screen replacement, battery issues, software problems, and hardware fixes.",
        features: ["Screen replacement", "Battery repair", "Software fixes", "Water damage recovery"],
        duration: "30-120 minutes"
      },
      features: {
        certified: "Certified Technicians",
        warranty: "Service Warranty",
        support: "24/7 Support",
        satisfaction: "100% Satisfaction"
      },
      getQuote: "Get Free Quote",
      viewDetails: "View Details",
      bookService: "Book Service",
      whyChooseUs: "Why Choose Our Services?",
      experience: "10+ Years Experience",
      customers: "5000+ Happy Customers",
      rating: "4.9/5 Average Rating"
    },
    am: {
      title: "ሙያዊ የኤሌክትሮኒክስ አገልግሎቶች",
      subtitle: "በተመሰከረላቸው ቴክኒሺያኖች ለሁሉም የኤሌክትሮኒክስ መሳሪያዎችዎ ባለሙያ ማስገጃ፣ ጥገና እና ድጋፍ",
      tvService: {
        title: "የቴሌቪዥን ማዋቀር እና ጥገና",
        description: "ለሁሉም የቴሌቪዥን ብራንዶች፣ የሳተላይት ስርዓቶች እና የስማርት ቲቪ ማዋቀር ሙሉ ማስገጃ፣ ውቅር እና የጥገና አገልግሎቶች።",
        features: ["ነፃ ምርመራ", "የቀን አገልግሎት", "1 ዓመት ዋስትና", "ሁሉም ብራንዶች ይደገፋሉ"],
        duration: "30-90 ደቂቃዎች"
      },
      dishService: {
        title: "DISH ማስገጃ",
        description: "ሙያዊ DISH ሳተላይት ማስገጃ እና ማዋቀር ከምርጥ ሲግናል አቀማመጥ፣ ተቀባይ ውቅር እና የቻናል ፕሮግራሚንግ ጋር።",
        features: ["የሲግናል ማመቻቸት", "የበርካታ ክፍል ማዋቀር", "HD/4K ፕሮግራሚንግ", "ሙያዊ ማስገጫ"],
        duration: "120-240 ደቂቃዎች"
      },
      jepasService: {
        title: "የጀፓስ ጥገና",
        description: "ለጀፓስ መሳሪያዎች ሙያዊ የጥገና አገልግሎቶች ከባለሙያ ችግር መፍታት፣ አካል መተካት እና የአፈጻጸም ማመቻቸት ጋር።",
        features: ["የባለሙያ ምርመራ", "ዋናውና ክፍሎች", "የአፈጻጸም ማመቻቸት", "የጥራት ዋስትና"],
        duration: "60-180 ደቂቃዎች"
      },
      mobileService: {
        title: "የሞባይል ጥገና",
        description: "ሙሉ የስማርትፎን እና ታብሌት የጥገና አገልግሎቶች የስክሪን መተካት፣ የባትሪ ችግሮች፣ የሶፍትዌር ችግሮች እና የሃርድዌር ጥገናዎችን ጨምሮ።",
        features: ["የስክሪን መተካት", "የባትሪ ጥገና", "የሶፍትዌር ጥገናዎች", "የውሃ ጉዳት ማገገሚያ"],
        duration: "30-120 ደቂቃዎች"
      },
      features: {
        certified: "የተመሰከረላቸው ቴክኒሺያኖች",
        warranty: "የአገልግሎት ዋስትና",
        support: "24/7 ድጋፍ",
        satisfaction: "100% እርካታ"
      },
      getQuote: "ነፃ ግምት ያግኙ",
      viewDetails: "ዝርዝሮችን ይመልከቱ",
      bookService: "አገልግሎት ይመዝግቡ",
      whyChooseUs: "የእኛን አገልግሎቶች ለምን ይመርጣሉ?",
      experience: "10+ ዓመታት ልምድ",
      customers: "5000+ ደስተኛ ደንበኞች",
      rating: "4.9/5 አማካይ ደረጃ"
    },
    or: {
      title: "Tajaajila Elektrooniksii Ogummaa",
      subtitle: "Dhaabbii, suphaa fi deeggarsa ogeeyyii meemshaaleewwan elektrooniksii keessan hundaaf teknisheeniiwwan ragaa qaban waliin",
      tvService: {
        title: "Qophii fi Suphaa TV",
        description: "Tajaajila dhaabbii, qindaa'ina fi suphaa guutuu braandii TV hunda, sirna saatalaayitii fi qophii TV ismaartiif.",
        features: ["Qorannoo bilisaa", "Tajaajila guyyaa", "Waadaa waggaa tokkoo", "Braandii hundi ni deeggarnama"],
        duration: "Daqiiqaa 30-90"
      },
      dishService: {
        title: "Dhaabbii DISH",
        description: "Dhaabbii fi qophii saatalaayitii DISH ogummaa mallattoo gaarii ta'e, qindaa'ina fudhattuu fi sagantaa chaanaalii waliin.",
        features: ["Fooyya'iinsa mallattoo", "Qophii kutaa hedduudhaa", "Sagantaa HD/4K", "Dhaabbii ogummaa"],
        duration: "Daqiiqaa 120-240"
      },
      jepasService: {
        title: "Suphaa Jepas",
        description: "Tajaajila suphaa ogummaa meeshaalee Jepas tiif qorannoo rakkoo ogeessaa, bakka bu'iinsa kutaa fi fooyya'iinsa raawwii waliin.",
        features: ["Qorannoo ogeessaa", "Kutaalee dhugaa", "Fooyya'iinsa raawwii", "Waadaa qulqullina"],
        duration: "Daqiiqaa 60-180"
      },
      mobileService: {
        title: "Suphaa Bilbilaa",
        description: "Tajaajila suphaa smartphone fi tablet bal'aa bakka bu'iinsa iskiriinii, dhimma baatirii, rakkoo sooftweeraa fi suphaa haardiweeraa dabalatee.",
        features: ["Bakka bu'iinsa iskiriinii", "Suphaa baatirii", "Suphaa sooftweeraa", "Deebisuu miidhaa bishaanii"],
        duration: "Daqiiqaa 30-120"
      },
      features: {
        certified: "Teknisheenota Ragaa Qaban",
        warranty: "Waadaa Tajaajilaa",
        support: "Deeggarsa 24/7",
        satisfaction: "Quubsaa 100%"
      },
      getQuote: "Tilmaama Bilisaa Argadhu",
      viewDetails: "Bal'inaan Ilaali",
      bookService: "Tajaajila Galmeessi",
      whyChooseUs: "Maaliif Tajaajila Keenya Filattu?",
      experience: "Muuxannoo Waggaa 10+",
      customers: "Maamiltoota Gammadan 5000+",
      rating: "Madaallii Giddugaleessaa 4.9/5"
    }
  };

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

  const ServiceCard = ({ service, isSelected, onClick }: { 
    service: typeof services[0], 
    isSelected: boolean, 
    onClick: () => void 
  }) => {
    const serviceData = translations[language][service.key as keyof typeof translations[typeof language]] as any;
    const Icon = service.icon;

    return (
      <div 
        className={cn(
          "bg-black/40 rounded-xl p-6 border border-gray-800 cursor-pointer transition-all duration-300 hover:shadow-lg group",
          isSelected 
            ? "border-jafer-gold shadow-jafer-gold/20 transform scale-105" 
            : "hover:border-jafer-gold/50 hover:shadow-jafer-gold/10 hover:-translate-y-1"
        )}
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onClick()}
        aria-label={`Select ${serviceData.title} service`}
      >
        <div className="flex flex-col items-center text-center">
          <div className={cn(
            "h-20 w-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300",
            service.bgColor,
            isSelected ? "scale-110" : "group-hover:scale-105"
          )}>
            <Icon className={cn("h-10 w-10", service.color)} />
          </div>
          
          <h3 className="text-xl font-bold mb-3 group-hover:text-jafer-gold transition-colors">
            {serviceData.title}
          </h3>
          
          <p className="text-gray-400 mb-4 text-sm leading-relaxed">
            {serviceData.description}
          </p>

          <div className="space-y-2 mb-4 w-full">
            {serviceData.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="w-full space-y-2 mb-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400 flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Duration:
              </span>
              <span className="text-jafer-gold font-medium">{serviceData.duration}</span>
            </div>
          </div>

          <div className="flex gap-2 w-full">
            <Button 
              size="sm" 
              variant="outline" 
              className="flex-1 border-jafer-gold text-jafer-gold hover:bg-jafer-gold hover:text-black transition-all duration-300"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/service/${service.id}`);
              }}
            >
              {translations[language].viewDetails}
            </Button>
            <Button 
              size="sm" 
              className="flex-1 bg-jafer-gold text-black hover:bg-jafer-darkgold transition-all duration-300"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/book/${service.id}`);
              }}
            >
              {translations[language].bookService}
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="section-container">
      <h2 className="section-title gradient-text">{translations[language].title}</h2>
      <p className="section-subtitle">{translations[language].subtitle}</p>
      
      {/* Trust indicators */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-jafer-gold/20 rounded-full mx-auto mb-3">
            <Users className="w-8 h-8 text-jafer-gold" />
          </div>
          <div className="text-lg font-bold text-white">{translations[language].experience}</div>
          <div className="text-sm text-gray-400">{translations[language].features.certified}</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-jafer-gold/20 rounded-full mx-auto mb-3">
            <Star className="w-8 h-8 text-jafer-gold" />
          </div>
          <div className="text-lg font-bold text-white">{translations[language].rating}</div>
          <div className="text-sm text-gray-400">{translations[language].features.satisfaction}</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-jafer-gold/20 rounded-full mx-auto mb-3">
            <CheckCircle className="w-8 h-8 text-jafer-gold" />
          </div>
          <div className="text-lg font-bold text-white">{translations[language].customers}</div>
          <div className="text-sm text-gray-400">{translations[language].features.warranty}</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-jafer-gold/20 rounded-full mx-auto mb-3">
            <Clock className="w-8 h-8 text-jafer-gold" />
          </div>
          <div className="text-lg font-bold text-white">24/7</div>
          <div className="text-sm text-gray-400">{translations[language].features.support}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {services.map((service) => (
          <ServiceCard
            key={service.key}
            service={service}
            isSelected={selectedService === service.key}
            onClick={() => setSelectedService(selectedService === service.key ? null : service.key)}
          />
        ))}
      </div>
      
      <div className="text-center bg-black/30 rounded-xl p-8 border border-gray-800">
        <h3 className="text-2xl font-bold mb-4 gradient-text">{translations[language].whyChooseUs}</h3>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Professional service with certified technicians, comprehensive warranty, and 24/7 support for all your electronic needs.
        </p>
        <Button 
          size="lg"
          className="bg-jafer-gold text-black hover:bg-jafer-darkgold font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
        >
          {translations[language].getQuote}
        </Button>
      </div>
    </section>
  );
}
