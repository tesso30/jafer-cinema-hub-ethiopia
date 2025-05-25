
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Language = 'en' | 'am' | 'or';

interface ContactFormProps {
  language: Language;
}

const translations = {
  en: {
    formTitle: "Send Us a Message",
    namePlaceholder: "Your full name",
    emailPlaceholder: "Your email address",
    messagePlaceholder: "Tell us about your movie preferences or electronics service needs...",
    sendMessage: "Send Message",
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
    ]
  },
  am: {
    formTitle: "መልዕክት ይላኩልን",
    namePlaceholder: "ሙሉ ስምዎ",
    emailPlaceholder: "የኢሜይል አድራሻዎ",
    messagePlaceholder: "ስለ ፊልም ምርጫዎች ወይም የኤሌክትሮኒክስ አገልግሎት ፍላጎቶችዎ ይንገሩን...",
    sendMessage: "መልዕክት ላክ",
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
    ]
  },
  or: {
    formTitle: "Ergaa Nuuf Ergi",
    namePlaceholder: "Maqaa kee guutuu",
    emailPlaceholder: "Teessoo imeelii keetii",
    messagePlaceholder: "Waa'ee filannoo fiilmii keetii ykn barbaachisummaa tajaajila elektrooniksii nutti himi...",
    sendMessage: "Ergaa Ergi",
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
    ]
  }
};

export default function ContactForm({ language }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

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
  );
}
