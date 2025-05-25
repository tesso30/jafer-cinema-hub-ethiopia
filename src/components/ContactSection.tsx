
import React from 'react';
import ContactStats from './contact/ContactStats';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';

type Language = 'en' | 'am' | 'or';

interface ContactSectionProps {
  language: Language;
}

const translations = {
  en: {
    title: "Get In Touch With Us",
    subtitle: "Visit our store, send us a message, or call us directly. We're here to help with all your movie and electronics needs.",
  },
  am: {
    title: "ከእኛ ጋር ይገናኙ",
    subtitle: "መደብራችንን ይጎብኙ፣ መልዕክት ይላኩልን ወይም በቀጥታ ይደውሉልን። ለሁሉም የፊልም እና የኤሌክትሮኒክስ ፍላጎቶችዎ እዚህ ነን።",
  },
  or: {
    title: "Nu Quunnamaa",
    subtitle: "Duka'ana keenya daawwadhu, ergaa nuuf ergi ykn kallattiin nu bilbili. Barbaachisummaa fiilmii fi elektrooniksii keessan hundaaf asii jirra.",
  }
};

export default function ContactSection({ language }: ContactSectionProps) {
  return (
    <section id="contact" className="section-container">
      <h2 className="section-title gradient-text">{translations[language].title}</h2>
      <p className="section-subtitle">{translations[language].subtitle}</p>
      
      {/* Stats section */}
      <ContactStats language={language} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Map and contact info */}
        <ContactInfo language={language} />
        
        {/* Contact form */}
        <ContactForm language={language} />
      </div>
    </section>
  );
}
