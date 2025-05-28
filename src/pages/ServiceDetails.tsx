
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Star, CheckCircle, Phone } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Language = 'en' | 'am' | 'or';

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [language, setLanguage] = React.useState<Language>('en');

  const translations = {
    en: {
      backToServices: "Back to Services",
      bookService: "Book This Service",
      callNow: "Call Now",
      features: "What's Included",
      duration: "Service Duration",
      pricing: "Pricing",
      whyChooseUs: "Why Choose Us",
      contactUs: "Contact us for a free quote",
      phone: "+251912340888"
    },
    am: {
      backToServices: "ወደ አገልግሎቶች ተመለስ",
      bookService: "ይህን አገልግሎት ይመዝግቡ",
      callNow: "አሁን ይደውሉ",
      features: "የተከተተ",
      duration: "የአገልግሎት ጊዜ",
      pricing: "ዋጋ",
      whyChooseUs: "ለምን እኛን ይመርጣሉ",
      contactUs: "ለነፃ ግምት ያግኙን",
      phone: "+251912340888"
    },
    or: {
      backToServices: "Gara Tajaajilatti Deebi'i",
      bookService: "Tajaajila Kana Galmeessi",
      callNow: "Amma Bilbili",
      features: "Waan Dabalatame",
      duration: "Yeroo Tajaajilaa",
      pricing: "Gatii",
      whyChooseUs: "Maaliif Nu Filattu",
      contactUs: "Tilmaama bilisaaf nu quunnamaa",
      phone: "+251912340888"
    }
  };

  const serviceDetails = {
    tv: {
      en: {
        title: "TV Setup & Repair",
        description: "Complete installation, configuration, and repair services for all TV brands, satellite systems, and smart TV setup.",
        features: ["Free diagnosis", "Same-day service", "1-year warranty", "All brands supported", "Professional mounting", "Cable management"],
        duration: "30-90 minutes",
        pricing: "Starting from 500 ETB"
      },
      am: {
        title: "የቴሌቪዥን ማዋቀር እና ጥገና",
        description: "ለሁሉም የቴሌቪዥን ብራንዶች፣ የሳተላይት ስርዓቶች እና የስማርት ቲቪ ማዋቀር ሙሉ ማስገጃ፣ ውቅር እና የጥገና አገልግሎቶች።",
        features: ["ነፃ ምርመራ", "የቀን አገልግሎት", "1 ዓመት ዋስትና", "ሁሉም ብራንዶች ይደገፋሉ", "ሙያዊ ማስገጫ", "የኬብል አደረጃጀት"],
        duration: "30-90 ደቂቃዎች",
        pricing: "ከ500 ብር ጀምሮ"
      },
      or: {
        title: "Qophii fi Suphaa TV",
        description: "Tajaajila dhaabbii, qindaa'ina fi suphaa guutuu braandii TV hunda, sirna saatalaayitii fi qophii TV ismaartiif.",
        features: ["Qorannoo bilisaa", "Tajaajila guyyaa", "Waadaa waggaa tokkoo", "Braandii hundi ni deeggarnama", "Dhaabbii ogummaa", "Bulchiinsa keebilii"],
        duration: "Daqiiqaa 30-90",
        pricing: "Birrii 500 irraa eegalee"
      }
    },
    dish: {
      en: {
        title: "DISH Installation",
        description: "Professional DISH satellite installation and setup with optimal signal positioning, receiver configuration, and channel programming.",
        features: ["Signal optimization", "Multi-room setup", "HD/4K programming", "Professional mounting", "Weather protection", "Signal testing"],
        duration: "120-240 minutes",
        pricing: "Starting from 1200 ETB"
      },
      am: {
        title: "DISH ማስገጃ",
        description: "ሙያዊ DISH ሳተላይት ማስገጃ እና ማዋቀር ከምርጥ ሲግናል አቀማመጥ፣ ተቀባይ ውቅር እና የቻናል ፕሮግራሚንግ ጋር።",
        features: ["የሲግናል ማመቻቸት", "የበርካታ ክፍል ማዋቀር", "HD/4K ፕሮግራሚንግ", "ሙያዊ ማስገጫ", "የአየር ሁኔታ ጥበቃ", "የሲግናል ምርመራ"],
        duration: "120-240 ደቂቃዎች",
        pricing: "ከ1200 ብር ጀምሮ"
      },
      or: {
        title: "Dhaabbii DISH",
        description: "Dhaabbii fi qophii saatalaayitii DISH ogummaa mallattoo gaarii ta'e, qindaa'ina fudhattuu fi sagantaa chaanaalii waliin.",
        features: ["Fooyya'iinsa mallattoo", "Qophii kutaa hedduudhaa", "Sagantaa HD/4K", "Dhaabbii ogummaa", "Eegumsa haala qilleensaa", "Qorannoo mallattoo"],
        duration: "Daqiiqaa 120-240",
        pricing: "Birrii 1200 irraa eegalee"
      }
    },
    jepas: {
      en: {
        title: "Jepas Repair",
        description: "Professional repair services for Jepas devices with expert troubleshooting, component replacement, and performance optimization.",
        features: ["Expert diagnosis", "Genuine parts", "Performance optimization", "Quality guarantee", "Data recovery", "Preventive maintenance"],
        duration: "60-180 minutes",
        pricing: "Starting from 300 ETB"
      },
      am: {
        title: "የጀፓስ ጥገና",
        description: "ለጀፓስ መሳሪያዎች ሙያዊ የጥገና አገልግሎቶች ከባለሙያ ችግር መፍታት፣ አካል መተካት እና የአፈጻጸም ማመቻቸት ጋር።",
        features: ["የባለሙያ ምርመራ", "ዋናውና ክፍሎች", "የአፈጻጸም ማመቻቸት", "የጥራት ዋስትና", "የመረጃ ማገገሚያ", "መከላከያ ጥገና"],
        duration: "60-180 ደቂቃዎች",
        pricing: "ከ300 ብር ጀምሮ"
      },
      or: {
        title: "Suphaa Jepas",
        description: "Tajaajila suphaa ogummaa meeshaalee Jepas tiif qorannoo rakkoo ogeessaa, bakka bu'iinsa kutaa fi fooyya'iinsa raawwii waliin.",
        features: ["Qorannoo ogeessaa", "Kutaalee dhugaa", "Fooyya'iinsa raawwii", "Waadaa qulqullina", "Deebisuu deetaa", "Kunuunsa ittisaa"],
        duration: "Daqiiqaa 60-180",
        pricing: "Birrii 300 irraa eegalee"
      }
    },
    mobile: {
      en: {
        title: "Mobile Repair",
        description: "Comprehensive smartphone and tablet repair services including screen replacement, battery issues, software problems, and hardware fixes.",
        features: ["Screen replacement", "Battery repair", "Software fixes", "Water damage recovery", "Data backup", "Warranty service"],
        duration: "30-120 minutes",
        pricing: "Starting from 200 ETB"
      },
      am: {
        title: "የሞባይል ጥገና",
        description: "ሙሉ የስማርትፎን እና ታብሌት የጥገና አገልግሎቶች የስክሪን መተካት፣ የባትሪ ችግሮች፣ የሶፍትዌር ችግሮች እና የሃርድዌር ጥገናዎችን ጨምሮ።",
        features: ["የስክሪን መተካት", "የባትሪ ጥገና", "የሶፍትዌር ጥገናዎች", "የውሃ ጉዳት ማገገሚያ", "የመረጃ ምትኬ", "የዋስትና አገልግሎት"],
        duration: "30-120 ደቂቃዎች",
        pricing: "ከ200 ብር ጀምሮ"
      },
      or: {
        title: "Suphaa Bilbilaa",
        description: "Tajaajila suphaa smartphone fi tablet bal'aa bakka bu'iinsa iskiriinii, dhimma baatirii, rakkoo sooftweeraa fi suphaa haardiweeraa dabalatee.",
        features: ["Bakka bu'iinsa iskiriinii", "Suphaa baatirii", "Suphaa sooftweeraa", "Deebisuu miidhaa bishaanii", "Backup deetaa", "Tajaajila waadaa"],
        duration: "Daqiiqaa 30-120",
        pricing: "Birrii 200 irraa eegalee"
      }
    }
  };

  const service = serviceDetails[serviceId as keyof typeof serviceDetails];
  if (!service) {
    return <div>Service not found</div>;
  }

  const currentService = service[language];

  return (
    <div className="min-h-screen bg-jafer-dark text-white">
      <Navbar language={language} setLanguage={setLanguage} />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-8 text-jafer-gold hover:text-jafer-darkgold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {translations[language].backToServices}
          </Button>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl font-bold mb-6 gradient-text">{currentService.title}</h1>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">{currentService.description}</p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-jafer-gold">{translations[language].features}</h3>
                <div className="space-y-3">
                  {currentService.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-black/30 rounded-xl p-6 border border-gray-800">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-jafer-gold" />
                    <h4 className="font-semibold">{translations[language].duration}</h4>
                  </div>
                  <p className="text-gray-400">{currentService.duration}</p>
                </div>

                <div className="bg-black/30 rounded-xl p-6 border border-gray-800">
                  <div className="flex items-center gap-3 mb-2">
                    <Star className="w-5 h-5 text-jafer-gold" />
                    <h4 className="font-semibold">{translations[language].pricing}</h4>
                  </div>
                  <p className="text-gray-400">{currentService.pricing}</p>
                </div>
              </div>
            </div>

            <div className="bg-black/30 rounded-xl p-8 border border-gray-800 h-fit">
              <h3 className="text-2xl font-bold mb-6 gradient-text">{translations[language].bookService}</h3>
              <p className="text-gray-400 mb-6">{translations[language].contactUs}</p>
              
              <div className="space-y-4">
                <Button 
                  className="w-full bg-jafer-gold text-black hover:bg-jafer-darkgold font-bold py-3"
                  onClick={() => window.open(`tel:${translations[language].phone}`, '_self')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {translations[language].callNow}
                </Button>

                <Button 
                  variant="outline"
                  className="w-full border-jafer-gold text-jafer-gold hover:bg-jafer-gold hover:text-black"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      navigate('/', { replace: true });
                      setTimeout(() => {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                  }}
                >
                  {translations[language].contactUs}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer language={language} />
    </div>
  );
};

export default ServiceDetails;
