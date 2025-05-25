
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { ChevronRight, MousePointer, MapPin, Download, Headphones, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type Language = 'en' | 'am' | 'or';

interface HowItWorksSectionProps {
  language: Language;
}

export default function HowItWorksSection({ language }: HowItWorksSectionProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const translations = {
    en: {
      title: "How Our Service Works",
      subtitle: "A simple 4-step process to get your favorite movies and professional electronics services",
      steps: [
        {
          number: "01",
          title: "Browse & Discover",
          description: "Explore our extensive movie collection online. Search by genre, year, or title to find exactly what you want.",
          details: "Use our advanced filters to browse through thousands of movies. Create your wishlist and check availability.",
          icon: MousePointer
        },
        {
          number: "02",
          title: "Visit Our Store",
          description: "Come to our physical location with your storage device (USB, external drive, or phone).",
          details: "Bring any USB drive, external hard drive, or smartphone. Our store is conveniently located and easily accessible.",
          icon: MapPin
        },
        {
          number: "03",
          title: "Quick Transfer",
          description: "Our staff will quickly transfer your selected movies to your device using high-speed equipment.",
          details: "Professional transfer service with quality assurance. We ensure perfect file quality and fast transfer speeds.",
          icon: Download
        },
        {
          number: "04",
          title: "Electronics Support",
          description: "Get expert consultation and services for all your electronic devices and technical needs.",
          details: "Professional diagnosis, repair, and setup services. Our certified technicians handle all brands and models.",
          icon: Headphones
        }
      ],
      whyChoose: "Why Choose Our Process?",
      benefits: [
        "Fast and reliable service",
        "Professional quality assurance",
        "Expert technical support",
        "Convenient location",
        "Competitive pricing",
        "Customer satisfaction guarantee"
      ],
      getStarted: "Start Browsing Now",
      visitStore: "Visit Our Store",
      estimatedTime: "Estimated Time",
      timeRange: "5-30 minutes per visit"
    },
    am: {
      title: "አገልግሎታችን እንዴት እንደሚሰራ",
      subtitle: "የሚወዷቸውን ፊልሞች እና ሙያዊ የኤሌክትሮኒክስ አገልግሎቶችን ለማግኘት ቀላል የ4 ደረጃ ሂደት",
      steps: [
        {
          number: "01",
          title: "ይመልከቱ እና ያግኙ",
          description: "ሰፊውን የፊልም ስብስባችንን በመስመር ላይ ይመርምሩ። በዓይነት፣ በዓመት ወይም በርዕስ ፈልገው ከምፈልጉት ይፈልጉ።",
          details: "የተሻሻለ ማጣሪያዎችን ተጠቅመው በሺዎች የሚቆጠሩ ፊልሞችን ይመልከቱ። የፍላጎት ዝርዝርዎን ይፍጠሩ እና መኖሩን ያረጋግጡ።",
          icon: MousePointer
        },
        {
          number: "02",
          title: "መደብራችንን ይጎብኙ",
          description: "ከማከማቻ መሳሪያዎ (ዩኤስቢ፣ ውጫዊ ድራይቭ ወይም ቴሌፎን) ጋር ወደ አካባቢያችን ይምጡ።",
          details: "ማንኛውንም ዩኤስቢ ድራይቭ፣ ውጫዊ ሃርድ ድራይቭ ወይም ስማርትፎን ይዘው ይምጡ። መደብራችን በሚመች ቦታ ላይ ይገኛል እና በቀላሉ መድረስ ይቻላል።",
          icon: MapPin
        },
        {
          number: "03",
          title: "ፈጣን ማስተላለፍ",
          description: "ሰራተኞቻችን የተመረጧቸውን ፊልሞች በፍጥነት በከፍተኛ ፍጥነት መሳሪያዎች ወደ መሳሪያዎ ያስተላልፋሉ።",
          details: "የጥራት ማረጋገጫ ያለው ሙያዊ የማስተላለፍ አገልግሎት። ፍጹም የፋይል ጥራት እና ፈጣን የማስተላለፍ ፍጥነቶችን እናረጋግጣለን።",
          icon: Download
        },
        {
          number: "04",
          title: "የኤሌክትሮኒክስ ድጋፍ",
          description: "ለሁሉም የኤሌክትሮኒክስ መሳሪያዎችዎ እና ቴክኒካዊ ፍላጎቶችዎ ባለሙያ ምክክር እና አገልግሎቶች ያግኙ።",
          details: "ሙያዊ ምርመራ፣ ጥገና እና የማዋቀር አገልግሎቶች። የተመሰከረላቸው ቴክኒሺያኖቻችን ሁሉንም ብራንዶች እና ሞዴሎች ይይዛሉ።",
          icon: Headphones
        }
      ],
      whyChoose: "ለምን ሂደታችንን ይመርጣሉ?",
      benefits: [
        "ፈጣን እና አስተማማኝ አገልግሎት",
        "ሙያዊ የጥራት ማረጋገጫ",
        "ባለሙያ ቴክኒካዊ ድጋፍ",
        "ምቹ ቦታ",
        "ተወዳዳሪ ዋጋ",
        "የደንበኛ እርካታ ዋስትና"
      ],
      getStarted: "አሁን መመልከት ይጀምሩ",
      visitStore: "መደብራችንን ይጎብኙ",
      estimatedTime: "የሚገመተው ጊዜ",
      timeRange: "በእያንዳንዱ ጉብኝት 5-30 ደቂቃዎች"
    },
    or: {
      title: "Akkamitti Tajaajilli Keenya Hojjeta",
      subtitle: "Fiilmii fi tajaajila elektrooniksii ogummaa barbaaddu argachuuf adeemsa salphaa tartiiba 4",
      steps: [
        {
          number: "01",
          title: "Daawwadhu fi Argadhu",
          description: "Sasaaxilama fiilmii bal'aa keenya marsariitii irratti sakatta'i. Akaakuu, waggaa ykn mata-dureedhaan barbaadamee waan barbaaddu sirriitti argadhu.",
          details: "Gingilchaa fooyya'aa fayyadamuun fiilmii kumaatama sakatta'i. Tarree hawwii keetii uumiitii jiraachuu mirkaneessi.",
          icon: MousePointer
        },
        {
          number: "02",
          title: "Duka'ana Keenya Daawwadhu",
          description: "Meeshaa kuusaa keetiin (USB, drive alaantoo ykn bilbila) gara bakka qubannoo keenyaatti kottu.",
          details: "Drive USB kamiyyuu, hard drive alaantoo ykn smartphone fudhadhuutii kottu. Duka'ani keenya bakka mijaawaatti argamaatii salphaatti argamuu ni danda'ama.",
          icon: MapPin
        },
        {
          number: "03",
          title: "Dabarsuu Ariifataa",
          description: "Hojjattoonni keenya fiilmii ati filatte meeshaalee saffisa olaanaatiin ariitiidhaan gara meeshaa keetitti dabarsuu.",
          details: "Tajaajila dabarsuu ogummaa mirkaneessa qulqullina qabu. Qulqullina faayilii mudaa hin qabne fi saffisa dabarsuu ariifataa mirkaneessina.",
          icon: Download
        },
        {
          number: "04",
          title: "Deeggarsa Elektrooniksii",
          description: "Meeshaalee elektrooniksii keessan hundaa fi barbaachisummaa teeknikaa hundaaf gorsa ogeessaatii fi tajaajila argadhaa.",
          details: "Tajaajila qorannoo, suphaa fi qophii ogummaa. Tekniisheenota ragaa qaban keenya braandii fi moodeeloota hunda ni qabatu.",
          icon: Headphones
        }
      ],
      whyChoose: "Maaliif Adeemsa Keenya Filattu?",
      benefits: [
        "Tajaajila ariifataa fi amanamaa",
        "Mirkaneessa qulqullina ogummaa",
        "Deeggarsa teeknikaa ogeessaa",
        "Bakka mijaawaaj",
        "Gatii dorgommii",
        "Waadaa quubsaa maamilaa"
      ],
      getStarted: "Amma Daawwachuu Jalqabaa",
      visitStore: "Duka'ana Keenya Daawwadhu",
      estimatedTime: "Yeroo Tilmaamame",
      timeRange: "Daawwannaa tokkoof daqiiqaa 5-30"
    }
  };

  const StepCard = ({ step, index, isActive, onClick }: { 
    step: any, 
    index: number, 
    isActive: boolean, 
    onClick: () => void 
  }) => {
    const Icon = step.icon;
    const isEven = index % 2 === 1;

    return (
      <div 
        className={cn(
          "flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 last:mb-0 cursor-pointer group",
          isEven ? "md:flex-row-reverse" : ""
        )}
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onClick()}
        aria-label={`Step ${step.number}: ${step.title}`}
      >
        {/* Step number and icon */}
        <div className="md:w-1/4 flex-shrink-0 relative">
          <div className={cn(
            "w-24 h-24 rounded-full border-2 flex items-center justify-center relative transition-all duration-300",
            isActive 
              ? "bg-jafer-gold border-jafer-gold scale-110 shadow-lg shadow-jafer-gold/30" 
              : "bg-jafer-gold/20 border-jafer-gold group-hover:scale-105 group-hover:bg-jafer-gold/30"
          )}>
            <span className={cn(
              "text-2xl font-bold absolute top-1 right-1 w-8 h-8 rounded-full flex items-center justify-center text-xs",
              isActive ? "bg-jafer-dark text-jafer-gold" : "bg-jafer-gold text-jafer-dark"
            )}>
              {step.number}
            </span>
            <Icon className={cn(
              "h-8 w-8",
              isActive ? "text-jafer-dark" : "text-jafer-gold"
            )} />
          </div>
          
          {/* Connection line */}
          {index < translations[language].steps.length - 1 && (
            <div className="hidden md:block absolute top-24 left-1/2 w-0.5 h-16 bg-gradient-to-b from-jafer-gold/50 to-transparent transform -translate-x-1/2"></div>
          )}
        </div>

        {/* Step content */}
        <div className={cn(
          "flex-grow rounded-xl p-6 border transition-all duration-300",
          isActive 
            ? "bg-jafer-gold/10 border-jafer-gold shadow-lg shadow-jafer-gold/10" 
            : "bg-black/40 border-gray-800 group-hover:border-jafer-gold/50 group-hover:bg-black/60",
          isEven ? "text-right md:text-right" : "text-left md:text-left"
        )}>
          <div className="flex items-center gap-3 mb-3">
            {!isEven && <CheckCircle className="w-5 h-5 text-green-500" />}
            <h3 className="text-xl font-bold group-hover:text-jafer-gold transition-colors">
              {step.title}
            </h3>
            {isEven && <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />}
          </div>
          
          <p className="text-gray-400 mb-3 leading-relaxed">
            {step.description}
          </p>
          
          {isActive && (
            <div className="mt-4 p-4 bg-black/30 rounded-lg border border-jafer-gold/30 animate-fade-in">
              <p className="text-sm text-gray-300 leading-relaxed">
                {step.details}
              </p>
            </div>
          )}
          
          <div className={cn(
            "flex items-center gap-2 mt-3 text-sm text-jafer-gold",
            isEven ? "justify-end" : "justify-start"
          )}>
            {!isEven && <span>Learn more</span>}
            <ChevronRight className={cn(
              "w-4 h-4 transition-transform duration-300",
              isActive ? "rotate-90" : "group-hover:translate-x-1"
            )} />
            {isEven && <span>Learn more</span>}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="how-it-works" className="section-container bg-jafer-darker">
      <h2 className="section-title gradient-text">{translations[language].title}</h2>
      <p className="section-subtitle">{translations[language].subtitle}</p>
      
      {/* Time estimate */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-jafer-gold/20 rounded-full px-6 py-3 border border-jafer-gold/30">
          <span className="text-jafer-gold font-medium">{translations[language].estimatedTime}:</span>
          <span className="text-white font-bold">{translations[language].timeRange}</span>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto">
        {translations[language].steps.map((step, index) => (
          <StepCard
            key={step.number}
            step={step}
            index={index}
            isActive={activeStep === index}
            onClick={() => setActiveStep(activeStep === index ? null : index)}
          />
        ))}
      </div>

      {/* Why choose our process */}
      <div className="mt-16 bg-black/30 rounded-xl p-8 border border-gray-800">
        <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
          {translations[language].whyChoose}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {translations[language].benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-black/40 rounded-lg border border-gray-700">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              <span className="text-gray-300">{benefit}</span>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-jafer-gold text-black hover:bg-jafer-darkgold font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('movies')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {translations[language].getStarted}
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-jafer-gold text-jafer-gold hover:bg-jafer-gold hover:text-black font-bold py-3 px-8 rounded-full transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {translations[language].visitStore}
          </Button>
        </div>
      </div>
    </section>
  );
}
