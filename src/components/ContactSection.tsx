import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone } from "lucide-react";

type Language = 'en' | 'am' | 'or';

interface ContactSectionProps {
  language: Language;
}

export default function ContactSection({ language }: ContactSectionProps) {
  const translations = {
    en: {
      title: "Contact Us",
      subtitle: "Visit our store or get in touch with us for inquiries",
      address: "123 Cinema Street, Addis Ababa, Ethiopia",
      phone: "+251 91 234 5678",
      email: "info@jafersmovies.com",
      formTitle: "Send us a message",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Your message or movie request",
      sendMessage: "Send Message",
      callNow: "Call Now"
    },
    am: {
      title: "ያግኙን",
      subtitle: "መደብሩን ይጎብኙ ወይም ለጥያቄዎች ያናግሩን",
      address: "123 የሲኒማ መንገድ፣ አዲስ አበባ፣ ኢትዮጵያ",
      phone: "+251 91 234 5678",
      email: "info@jafersmovies.com",
      formTitle: "መልዕክት ይላኩልን",
      namePlaceholder: "ስምዎ",
      emailPlaceholder: "ኢሜይልዎ",
      messagePlaceholder: "መልዕክትዎ ወይም የፊልም ጥያቄዎ",
      sendMessage: "መልዕክት ላክ",
      callNow: "አሁን ይደውሉ"
    },
    or: {
      title: "Nu Quunnamaa",
      subtitle: "Duka'ana keenya daawwadhu ama gaaffii keetiif nu quunami",
      address: "123 Daandii Ciinimaa, Finfinnee, Itoophiyaa",
      phone: "+251 91 234 5678",
      email: "info@jafersmovies.com",
      formTitle: "Ergaa nuuf ergi",
      namePlaceholder: "Maqaa kee",
      emailPlaceholder: "Imeelii kee",
      messagePlaceholder: "Ergaa kee ykn gaaffii fiilmii",
      sendMessage: "Ergaa Ergi",
      callNow: "Amma Bilbili"
    }
  };

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title gradient-text">{translations[language].title}</h2>
      <p className="section-subtitle">{translations[language].subtitle}</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6063262218495!2d38.76714937447872!3d9.022033689148096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f56ae689e3f%3A0x115035626208ea8b!2sBest%20Friends!5e0!3m2!1sen!2sus!4v1716492455744!5m2!1sen!2sus"
            style={{ border: 0, borderRadius: '12px', width: '100%', height: '400px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          <div className="mt-8 space-y-4">
            <div className="flex flex-col">
              <span className="text-gray-400">{translations[language].address}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-400">{translations[language].phone}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-400">{translations[language].email}</span>
            </div>
            
            <Button className="flex items-center gap-2 rounded-full bg-jafer-red hover:bg-jafer-red/80">
              <Phone size={18} />
              <span>{translations[language].callNow}</span>
            </Button>
          </div>
        </div>
        
        <div className="bg-black/30 rounded-xl p-8 border border-gray-800">
          <h3 className="text-xl font-bold mb-6">{translations[language].formTitle}</h3>
          
          <form className="space-y-4">
            <div>
              <Input 
                placeholder={translations[language].namePlaceholder} 
                className="bg-black/50 border-gray-700"
              />
            </div>
            <div>
              <Input 
                type="email" 
                placeholder={translations[language].emailPlaceholder} 
                className="bg-black/50 border-gray-700"
              />
            </div>
            <div>
              <Textarea 
                placeholder={translations[language].messagePlaceholder} 
                rows={5} 
                className="bg-black/50 border-gray-700"
              />
            </div>
            <div>
              <Button className="w-full bg-jafer-gold text-black hover:bg-jafer-darkgold">
                {translations[language].sendMessage}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
