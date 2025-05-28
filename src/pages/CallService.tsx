
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, Clock, MapPin, Star } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Language = 'en' | 'am' | 'or';

const CallService = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<Language>('en');

  const translations = {
    en: {
      title: "Call Us Now",
      subtitle: "Get immediate assistance from our expert technicians",
      backToServices: "Back to Services",
      phone: "+251912340888",
      alternatePhone: "+251934340162",
      emergencyService: "Emergency Service Available",
      freeConsultation: "Free Phone Consultation",
      expertSupport: "Expert Technical Support",
      quickResponse: "Quick Response Time",
      availableHours: "Available Hours",
      mondayToSunday: "Monday - Sunday",
      hours: "8:00 AM - 10:00 PM",
      whyCallUs: "Why Call Us Directly?",
      reasons: [
        "Immediate technical support",
        "Free consultation and diagnosis",
        "Same-day service scheduling",
        "Emergency repair services",
        "Expert advice from certified technicians",
        "No waiting time for quotes"
      ],
      callNow: "Call Now",
      orCall: "or call"
    },
    am: {
      title: "አሁን ይደውሉልን",
      subtitle: "ከባለሙያ ቴክኒሺያኖቻችን ወዲያውኑ እርዳታ ያግኙ",
      backToServices: "ወደ አገልግሎቶች ተመለስ",
      phone: "+251912340888",
      alternatePhone: "+251934340162",
      emergencyService: "የአደጋ ጊዜ አገልግሎት አለ",
      freeConsultation: "ነፃ የስልክ ምክክር",
      expertSupport: "የባለሙያ ቴክኒካል ድጋፍ",
      quickResponse: "ፈጣን ምላሽ ጊዜ",
      availableHours: "የሚገኝባቸው ሰዓታት",
      mondayToSunday: "ሰኞ - እሁድ",
      hours: "8:00 ጥዋት - 10:00 ማታ",
      whyCallUs: "ለምን በቀጥታ ይደውሉልን?",
      reasons: [
        "ወዲያዊ ቴክኒካል ድጋፍ",
        "ነፃ ምክክር እና ምርመራ",
        "የቀን አገልግሎት መርሐ ግብር",
        "የአደጋ ጊዜ የጥገና አገልግሎቶች",
        "ከተመሰከሩ ቴክኒሺያኖች የባለሙያ ምክር",
        "ለግምት መጠበቂያ ጊዜ የለም"
      ],
      callNow: "አሁን ይደውሉ",
      orCall: "ወይም ይደውሉ"
    },
    or: {
      title: "Amma Nu Bilbilaa",
      subtitle: "Teknisheenota ogeeyyii keenya irraa gargaarsa hatattamaa argadhaa",
      backToServices: "Gara Tajaajilatti Deebi'i",
      phone: "+251912340888",
      alternatePhone: "+251934340162",
      emergencyService: "Tajaajila Balaa Ni Jira",
      freeConsultation: "Maridhaan Bilbilaa Bilisaa",
      expertSupport: "Deeggarsa Teeknikaa Ogeeyyii",
      quickResponse: "Yeroo Deebii Saffisaa",
      availableHours: "Sa'aatii Argaman",
      mondayToSunday: "Wiixata - Dilbata",
      hours: "8:00 ganama - 10:00 galgala",
      whyCallUs: "Maaliif Kallattiidhaan Nu Bilbiltuu?",
      reasons: [
        "Deeggarsa teeknikaa hatattamaa",
        "Maridhaa fi qorannoo bilisaa",
        "Sagantaa tajaajila guyyaa",
        "Tajaajila suphaa balaa",
        "Gorsa ogeeyyii teknisheenota ragaa qaban irraa",
        "Tilmaama argachuuf yeroo eegaa hin jiru"
      ],
      callNow: "Amma Bilbili",
      orCall: "ykn bilbili"
    }
  };

  return (
    <div className="min-h-screen bg-jafer-dark text-white">
      <Navbar language={language} setLanguage={setLanguage} />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-8 text-jafer-gold hover:text-jafer-darkgold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {translations[language].backToServices}
          </Button>

          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 gradient-text">{translations[language].title}</h1>
            <p className="text-xl text-gray-400">{translations[language].subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Call Options */}
            <div className="bg-black/30 rounded-xl p-8 border border-gray-800">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-jafer-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-10 h-10 text-jafer-gold" />
                </div>
                <h2 className="text-2xl font-bold mb-2">{translations[language].callNow}</h2>
              </div>

              <div className="space-y-4 mb-8">
                <Button 
                  className="w-full bg-jafer-gold text-black hover:bg-jafer-darkgold font-bold py-4 text-lg"
                  onClick={() => window.open(`tel:${translations[language].phone}`, '_self')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {translations[language].phone}
                </Button>

                <div className="text-center text-gray-400">
                  {translations[language].orCall}
                </div>

                <Button 
                  variant="outline"
                  className="w-full border-jafer-gold text-jafer-gold hover:bg-jafer-gold hover:text-black font-bold py-4 text-lg"
                  onClick={() => window.open(`tel:${translations[language].alternatePhone}`, '_self')}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {translations[language].alternatePhone}
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <Star className="w-6 h-6 text-jafer-gold mx-auto mb-2" />
                  <div className="text-sm font-medium">{translations[language].emergencyService}</div>
                </div>
                <div>
                  <Clock className="w-6 h-6 text-jafer-gold mx-auto mb-2" />
                  <div className="text-sm font-medium">{translations[language].freeConsultation}</div>
                </div>
              </div>
            </div>

            {/* Business Hours & Info */}
            <div className="space-y-6">
              <div className="bg-black/30 rounded-xl p-6 border border-gray-800">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-jafer-gold" />
                  <h3 className="text-xl font-semibold">{translations[language].availableHours}</h3>
                </div>
                <div className="text-gray-400">
                  <div className="font-medium">{translations[language].mondayToSunday}</div>
                  <div className="text-lg">{translations[language].hours}</div>
                </div>
              </div>

              <div className="bg-black/30 rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-jafer-gold">{translations[language].whyCallUs}</h3>
                <div className="space-y-3">
                  {translations[language].reasons.map((reason, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-jafer-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-400">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer language={language} />
    </div>
  );
};

export default CallService;
