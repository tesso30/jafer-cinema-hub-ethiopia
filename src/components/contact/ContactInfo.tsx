
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

type Language = 'en' | 'am' | 'or';

interface ContactInfoProps {
  language: Language;
}

const translations = {
  en: {
    address: "123 Cinema Street, Addis Ababa, Ethiopia",
    phone: "+251912340888",
    alternatePhone: "+251934340162",
    email: "jafer25dish@gmail.com",
    hours: "Mon-Sun: 8:00 AM - 10:00 PM",
    callNow: "Call Now",
    emailUs: "Email Us",
    directions: "Get Directions",
    businessHours: "Business Hours",
    phoneLabel: "Phone",
    emailLabel: "Email",
    addressLabel: "Address",
    or: "or"
  },
  am: {
    address: "123 የሲኒማ መንገድ፣ አዲስ አበባ፣ ኢትዮጵያ",
    phone: "+251912340888",
    alternatePhone: "+251934340162",
    email: "jafer25dish@gmail.com",
    hours: "ሰኞ-እሁድ: 8:00 ጥዋት - 10:00 ማታ",
    callNow: "አሁን ይደውሉ",
    emailUs: "ኢሜይል ይላኩ",
    directions: "አቅጣጫ ያግኙ",
    businessHours: "የስራ ሰዓታት",
    phoneLabel: "ስልክ",
    emailLabel: "ኢሜይል",
    addressLabel: "አድራሻ",
    or: "ወይም"
  },
  or: {
    address: "123 Daandii Ciinimaa, Finfinnee, Itoophiyaa",
    phone: "+251912340888",
    alternatePhone: "+251934340162",
    email: "jafer25dish@gmail.com",
    hours: "Wiixata-Dilbata: 8:00 ganama - 10:00 galgala",
    callNow: "Amma Bilbili",
    emailUs: "Imeelii Nuuf Ergi",
    directions: "Kallattii Argadhu",
    businessHours: "Sa'aatii Daldalaa",
    phoneLabel: "Bilbila",
    emailLabel: "Imeelii",
    addressLabel: "Teessoo",
    or: "ykn"
  }
};

export default function ContactInfo({ language }: ContactInfoProps) {
  return (
    <div className="space-y-6">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6063262218495!2d38.76714937447872!3d9.022033689148096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f56ae689e3f%3A0x115035626208ea8b!2sBest%20Friends!5e0!3m2!1sen!2sus!4v1716492455744!5m2!1sen!2sus"
        style={{ border: 0, borderRadius: '12px', width: '100%', height: '400px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Store Location Map"
      ></iframe>
      
      <div className="grid gap-4">
        {/* Address */}
        <div className="bg-black/30 rounded-xl p-6 border border-gray-800 hover:border-jafer-gold/50 transition-all duration-300 group">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-jafer-gold/20 rounded-full flex items-center justify-center group-hover:bg-jafer-gold/30 transition-colors">
              <MapPin className="w-6 h-6 text-jafer-gold" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white mb-1">{translations[language].addressLabel}</h3>
              <p className="text-gray-400 leading-relaxed">{translations[language].address}</p>
              <Button 
                variant="link" 
                className="text-jafer-gold hover:text-jafer-darkgold p-0 h-auto mt-2"
                onClick={() => window.open('https://maps.app.goo.gl/iDGvY7M2CrmNhRuG8', '_blank')}
              >
                {translations[language].directions} →
              </Button>
            </div>
          </div>
        </div>

        {/* Phone */}
        <div className="bg-black/30 rounded-xl p-6 border border-gray-800 hover:border-jafer-gold/50 transition-all duration-300 group">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-jafer-gold/20 rounded-full flex items-center justify-center group-hover:bg-jafer-gold/30 transition-colors">
              <Phone className="w-6 h-6 text-jafer-gold" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white mb-1">{translations[language].phoneLabel}</h3>
              <p className="text-gray-400">{translations[language].phone}</p>
              <p className="text-gray-400">{translations[language].or} {translations[language].alternatePhone}</p>
              <Button 
                variant="link" 
                className="text-jafer-gold hover:text-jafer-darkgold p-0 h-auto mt-2"
                onClick={() => window.open(`tel:${translations[language].phone}`, '_self')}
              >
                {translations[language].callNow} →
              </Button>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="bg-black/30 rounded-xl p-6 border border-gray-800 hover:border-jafer-gold/50 transition-all duration-300 group">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-jafer-gold/20 rounded-full flex items-center justify-center group-hover:bg-jafer-gold/30 transition-colors">
              <Mail className="w-6 h-6 text-jafer-gold" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white mb-1">{translations[language].emailLabel}</h3>
              <p className="text-gray-400">{translations[language].email}</p>
              <Button 
                variant="link" 
                className="text-jafer-gold hover:text-jafer-darkgold p-0 h-auto mt-2"
                onClick={() => window.open(`mailto:${translations[language].email}`, '_self')}
              >
                {translations[language].emailUs} →
              </Button>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="bg-black/30 rounded-xl p-6 border border-gray-800 hover:border-jafer-gold/50 transition-all duration-300 group">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-jafer-gold/20 rounded-full flex items-center justify-center group-hover:bg-jafer-gold/30 transition-colors">
              <Clock className="w-6 h-6 text-jafer-gold" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white mb-1">{translations[language].businessHours}</h3>
              <p className="text-gray-400">{translations[language].hours}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
