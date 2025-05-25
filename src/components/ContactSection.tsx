import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Language = 'en' | 'am' | 'or';

interface ContactSectionProps {
  language: Language;
}

export default function ContactSection({ language }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const translations = {
    en: {
      title: "Get In Touch With Us",
      subtitle: "Visit our store, send us a message, or call us directly. We're here to help with all your movie and electronics needs.",
      address: "123 Cinema Street, Addis Ababa, Ethiopia",
      phone: "+251912340888",
      email: "jafer@gmail.com",
      hours: "Mon-Sun: 8:00 AM - 10:00 PM",
      formTitle: "Send Us a Message",
      namePlaceholder: "Your full name",
      emailPlaceholder: "Your email address",
      messagePlaceholder: "Tell us about your movie preferences or electronics service needs...",
      sendMessage: "Send Message",
      callNow: "Call Now",
      emailUs: "Email Us",
      directions: "Get Directions",
      businessHours: "Business Hours",
      quickContact: "Quick Contact",
      validation: {
        nameRequired: "Name is required",
        emailRequired: "Email is required",
        emailInvalid: "Please enter a valid email",
        messageRequired: "Message is required"
      },
      success: "Message sent successfully! We'll get back to you soon.",
      error: "Failed to send message. Please try again.",
      features: [
        "Free consultation",
        "Same-day service",
        "Expert technicians",
        "Quality guarantee"
      ],
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
      title: "ከእኛ ጋር ይገናኙ",
      subtitle: "መደብራችንን ይጎብኙ፣ መልዕክት ይላኩልን ወይም በቀጥታ ይደውሉልን። ለሁሉም የፊልም እና የኤሌክትሮኒክስ ፍላጎቶችዎ እዚህ ነን።",
      address: "123 የሲኒማ መንገድ፣ አዲስ አበባ፣ ኢትዮጵያ",
      phone: "+251912340888",
      email: "jafer@gmail.com",
      hours: "ሰኞ-እሁድ: 8:00 ጥዋት - 10:00 ማታ",
      formTitle: "መልዕክት ይላኩልን",
      namePlaceholder: "ሙሉ ስምዎ",
      emailPlaceholder: "የኢሜይል አድራሻዎ",
      messagePlaceholder: "ስለ ፊልም ምርጫዎች ወይም የኤሌክትሮኒክስ አገልግሎት ፍላጎቶችዎ ይንገሩን...",
      sendMessage: "መልዕክት ላክ",
      callNow: "አሁን ይደውሉ",
      emailUs: "ኢሜይል ይላኩ",
      directions: "አቅጣጫ ያግኙ",
      businessHours: "የስራ ሰዓታት",
      quickContact: "ፈጣን ግንኙነት",
      validation: {
        nameRequired: "ስም ያስፈልጋል",
        emailRequired: "ኢሜይል ያስፈልጋል",
        emailInvalid: "እባክዎ ትክክለኛ ኢሜይል ያስገቡ",
        messageRequired: "መልዕክት ያስፈልጋል"
      },
      success: "መልዕክት በተሳካ ሁኔታ ተላከ! በቅርቡ እናገናኝዎታለን።",
      error: "መልዕክት መላክ አልተሳካም። እባክዎ እንደገና ይሞክሩ።",
      features: [
        "ነፃ ምክክር",
        "የቀን አገልግሎት",
        "ባለሙያ ቴክኒሺያኖች",
        "የጥራት ዋስትና"
      ],
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
      title: "Nu Quunnamaa",
      subtitle: "Duka'ana keenya daawwadhu, ergaa nuuf ergi ykn kallattiin nu bilbili. Barbaachisummaa fiilmii fi elektrooniksii keessan hundaaf asii jirra.",
      address: "123 Daandii Ciinimaa, Finfinnee, Itoophiyaa",
      phone: "+251912340888",
      email: "jafer@gmail.com",
      hours: "Wiixata-Dilbata: 8:00 ganama - 10:00 galgala",
      formTitle: "Ergaa Nuuf Ergi",
      namePlaceholder: "Maqaa kee guutuu",
      emailPlaceholder: "Teessoo imeelii keetii",
      messagePlaceholder: "Waa'ee filannoo fiilmii keetii ykn barbaachisummaa tajaajila elektrooniksii nutti himi...",
      sendMessage: "Ergaa Ergi",
      callNow: "Amma Bilbili",
      emailUs: "Imeelii Nuuf Ergi",
      directions: "Kallattii Argadhu",
      businessHours: "Sa'aatii Daldalaa",
      quickContact: "Quunnamtii Ariifataa",
      validation: {
        nameRequired: "Maqaan barbaachisaadha",
        emailRequired: "Imeeliin barbaachisaadha",
        emailInvalid: "Maaloo imeelii sirrii galchi",
        messageRequired: "Ergaan barbaachisaadha"
      },
      success: "Ergaan milkaa'inaan ergame! Yeroo dhiyootti si quunnamnama.",
      error: "Ergaa erguu dadhabne. Maaloo irra deebi'ii yaali.",
      features: [
        "Gorsaa bilisaa",
        "Tajaajila guyyaa",
        "Teknisheenota ogeeyyii",
        "Waadaa qulqullina"
      ],
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

  const validateForm = () => {
    const errors = [];
    
    if (!formData.name.trim()) {
      errors.push(translations[language].validation.nameRequired);
    }
    
    if (!formData.email.trim()) {
      errors.push(translations[language].validation.emailRequired);
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push(translations[language].validation.emailInvalid);
    }
    
    if (!formData.message.trim()) {
      errors.push(translations[language].validation.messageRequired);
    }
    
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (errors.length > 0) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: errors[0]
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: translations[language].success,
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: translations[language].error
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title gradient-text">{translations[language].title}</h2>
      <p className="section-subtitle">{translations[language].subtitle}</p>
      
      {/* Stats section */}
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
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Map and contact info */}
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
            {/* Contact info cards */}
            <div className="bg-black/30 rounded-xl p-6 border border-gray-800 hover:border-jafer-gold/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-jafer-gold/20 rounded-full flex items-center justify-center group-hover:bg-jafer-gold/30 transition-colors">
                  <MapPin className="w-6 h-6 text-jafer-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-1">Address</h3>
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

            <div className="bg-black/30 rounded-xl p-6 border border-gray-800 hover:border-jafer-gold/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-jafer-gold/20 rounded-full flex items-center justify-center group-hover:bg-jafer-gold/30 transition-colors">
                  <Phone className="w-6 h-6 text-jafer-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-1">Phone</h3>
                  <p className="text-gray-400">{translations[language].phone}</p>
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

            <div className="bg-black/30 rounded-xl p-6 border border-gray-800 hover:border-jafer-gold/50 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-jafer-gold/20 rounded-full flex items-center justify-center group-hover:bg-jafer-gold/30 transition-colors">
                  <Mail className="w-6 h-6 text-jafer-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-1">Email</h3>
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
        
        {/* Contact form */}
        <div className="bg-black/30 rounded-xl p-8 border border-gray-800">
          <h3 className="text-2xl font-bold mb-6 gradient-text">{translations[language].formTitle}</h3>
          
          {/* Features */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {translations[language].features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input 
                placeholder={translations[language].namePlaceholder} 
                className="bg-black/50 border-gray-700 focus:border-jafer-gold h-12"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                aria-label={translations[language].namePlaceholder}
              />
            </div>
            
            <div>
              <Input 
                type="email" 
                placeholder={translations[language].emailPlaceholder} 
                className="bg-black/50 border-gray-700 focus:border-jafer-gold h-12"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                aria-label={translations[language].emailPlaceholder}
              />
            </div>
            
            <div>
              <Textarea 
                placeholder={translations[language].messagePlaceholder} 
                rows={5} 
                className="bg-black/50 border-gray-700 focus:border-jafer-gold resize-none"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                required
                aria-label={translations[language].messagePlaceholder}
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-jafer-gold text-black hover:bg-jafer-darkgold h-12 text-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                  Sending...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  {translations[language].sendMessage}
                </div>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
