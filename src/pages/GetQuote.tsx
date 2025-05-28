
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Calculator, Phone, Mail, MessageCircle, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Language = 'en' | 'am' | 'or';

const GetQuote = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [language, setLanguage] = useState<Language>('en');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    description: '',
    urgency: ''
  });

  const translations = {
    en: {
      title: "Get Free Quote",
      subtitle: "Tell us about your service needs and get a personalized quote",
      backToServices: "Back to Services",
      personalInfo: "Personal Information",
      fullName: "Full Name",
      phoneNumber: "Phone Number",
      emailAddress: "Email Address",
      serviceInfo: "Service Information",
      selectService: "Select Service Type",
      serviceDescription: "Describe Your Service Needs",
      urgency: "How urgent is this service?",
      submitQuote: "Get My Free Quote",
      tvService: "TV Setup & Repair",
      dishService: "DISH Installation",
      jepasService: "Jepas Repair",
      mobileService: "Mobile Repair",
      generalService: "General Electronics",
      normalUrgency: "Normal (3-5 days)",
      urgentService: "Urgent (1-2 days)",
      emergencyService: "Emergency (Same day)",
      quoteSubmitted: "Quote request submitted successfully! We will contact you within 2 hours.",
      fillAllFields: "Please fill in all required fields.",
      whyGetQuote: "Why Get a Quote?",
      benefits: [
        "Transparent pricing with no hidden fees",
        "Detailed breakdown of service costs",
        "Professional assessment of your needs",
        "Compare different service options",
        "No obligation to proceed"
      ],
      callForImmediate: "Need immediate assistance? Call us now:",
      phone: "+251912340888"
    },
    am: {
      title: "ነፃ ግምት ያግኙ",
      subtitle: "የአገልግሎት ፍላጎትዎን ይንገሩን እና የተበጀ ግምት ያግኙ",
      backToServices: "ወደ አገልግሎቶች ተመለስ",
      personalInfo: "የግል መረጃ",
      fullName: "ሙሉ ስም",
      phoneNumber: "ስልክ ቁጥር",
      emailAddress: "ኢሜይል አድራሻ",
      serviceInfo: "የአገልግሎት መረጃ",
      selectService: "የአገልግሎት ዓይነት ይምረጡ",
      serviceDescription: "የአገልግሎት ፍላጎትዎን ይግለጹ",
      urgency: "ይህ አገልግሎት ምን ያህል አስቸኳይ ነው?",
      submitQuote: "የእኔን ነፃ ግምት ያግኙ",
      tvService: "የቴሌቪዥን ማዋቀር እና ጥገና",
      dishService: "DISH ማስገጃ",
      jepasService: "የጀፓስ ጥገና",
      mobileService: "የሞባይል ጥገና",
      generalService: "አጠቃላይ ኤሌክትሮኒክስ",
      normalUrgency: "መደበኛ (3-5 ቀናት)",
      urgentService: "አስቸኳይ (1-2 ቀናት)",
      emergencyService: "ድንገተኛ (በዚያው ቀን)",
      quoteSubmitted: "የግምት ጥያቄ በተሳካ ሁኔታ ተልኳል! በ2 ሰዓት ውስጥ እናገኝዎታለን።",
      fillAllFields: "እባክዎ ሁሉንም አስፈላጊ መስኮች ይሙሉ።",
      whyGetQuote: "ለምን ግምት ማግኘት?",
      benefits: [
        "ምንም የተደበቀ ክፍያ የሌለው ግልጽ ዋጋ",
        "የአገልግሎት ወጪዎች ዝርዝር መከፋፈል",
        "የእርስዎን ፍላጎት ሙያዊ ምዘና",
        "የተለያዩ የአገልግሎት አማራጮችን ያወዳድሩ",
        "ለመቀጠል ግዴታ የለም"
      ],
      callForImmediate: "ወዲያዊ እርዳታ ይፈልጋሉ? አሁን ይደውሉልን:",
      phone: "+251912340888"
    },
    or: {
      title: "Tilmaama Bilisaa Argadhaa",
      subtitle: "Fedhii tajaajila keessan nutti himaa tilmaama dhuunfaa argadhaa",
      backToServices: "Gara Tajaajilatti Deebi'i",
      personalInfo: "Odeeffannoo Dhuunfaa",
      fullName: "Maqaa Guutuu",
      phoneNumber: "Lakkoofsa Bilbilaa",
      emailAddress: "Teessoo Imeelii",
      serviceInfo: "Odeeffannoo Tajaajilaa",
      selectService: "Gosa Tajaajilaa Filadhu",
      serviceDescription: "Fedhii Tajaajila Keessan Ibsaa",
      urgency: "Tajaajilli kun hamma kam ariifataa dha?",
      submitQuote: "Tilmaama Bilisaa Koo Argadhu",
      tvService: "Qophii fi Suphaa TV",
      dishService: "Dhaabbii DISH",
      jepasService: "Suphaa Jepas",
      mobileService: "Suphaa Bilbilaa",
      generalService: "Elektrooniksii Waliigalaa",
      normalUrgency: "Haala idilee (Guyyaa 3-5)",
      urgentService: "Ariifachisaa (Guyyaa 1-2)",
      emergencyService: "Balaa (Guyyuma)",
      quoteSubmitted: "Gaaffiin tilmaamaa milkaa'inaan ergame! Sa'aatii 2 keessatti si quunnamna.",
      fillAllFields: "Maaloo dirreewwan barbaachisoo hunda guuti.",
      whyGetQuote: "Maaliif Tilmaama Argachuu?",
      benefits: [
        "Gatii ifa ta'e kaffaltii dhokaa malee",
        "Baasii tajaajilaa bal'inaan ramaduu",
        "Fedhii keessan madaallii ogummaa",
        "Filannoo tajaajila adda addaa wal bira qabuu",
        "Itti fufuuf dirqama hin jiru"
      ],
      callForImmediate: "Gargaarsa hatattamaa barbaadduu? Amma nu bilbilaa:",
      phone: "+251912340888"
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.service || !formData.description) {
      toast({
        title: translations[language].fillAllFields,
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log('Quote request data:', formData);
    
    toast({
      title: translations[language].quoteSubmitted,
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      description: '',
      urgency: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
            <h1 className="text-4xl font-bold mb-4 gradient-text flex items-center justify-center gap-3">
              <Calculator className="w-10 h-10" />
              {translations[language].title}
            </h1>
            <p className="text-xl text-gray-400">{translations[language].subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="bg-black/30 rounded-xl p-6 border border-gray-800">
                  <h2 className="text-xl font-semibold mb-6 text-jafer-gold flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    {translations[language].personalInfo}
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">{translations[language].fullName} *</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="bg-black/20 border-gray-700"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">{translations[language].phoneNumber} *</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="bg-black/20 border-gray-700"
                        required
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">{translations[language].emailAddress}</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-black/20 border-gray-700"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Information */}
                <div className="bg-black/30 rounded-xl p-6 border border-gray-800">
                  <h2 className="text-xl font-semibold mb-6 text-jafer-gold">{translations[language].serviceInfo}</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">{translations[language].selectService} *</label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="bg-black/20 border-gray-700">
                          <SelectValue placeholder={translations[language].selectService} />
                        </SelectTrigger>
                        <SelectContent className="bg-black border-gray-700">
                          <SelectItem value="tv">{translations[language].tvService}</SelectItem>
                          <SelectItem value="dish">{translations[language].dishService}</SelectItem>
                          <SelectItem value="jepas">{translations[language].jepasService}</SelectItem>
                          <SelectItem value="mobile">{translations[language].mobileService}</SelectItem>
                          <SelectItem value="general">{translations[language].generalService}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">{translations[language].serviceDescription} *</label>
                      <Textarea
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        className="bg-black/20 border-gray-700"
                        rows={4}
                        placeholder="Please describe your service needs in detail..."
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">{translations[language].urgency}</label>
                      <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                        <SelectTrigger className="bg-black/20 border-gray-700">
                          <SelectValue placeholder={translations[language].urgency} />
                        </SelectTrigger>
                        <SelectContent className="bg-black border-gray-700">
                          <SelectItem value="normal">{translations[language].normalUrgency}</SelectItem>
                          <SelectItem value="urgent">{translations[language].urgentService}</SelectItem>
                          <SelectItem value="emergency">{translations[language].emergencyService}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-jafer-gold text-black hover:bg-jafer-darkgold font-bold py-3 text-lg"
                >
                  {translations[language].submitQuote}
                </Button>
              </form>
            </div>

            <div className="space-y-6">
              {/* Why Get Quote */}
              <div className="bg-black/30 rounded-xl p-6 border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-jafer-gold">{translations[language].whyGetQuote}</h3>
                <div className="space-y-3">
                  {translations[language].benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-black/30 rounded-xl p-6 border border-gray-800">
                <h3 className="text-lg font-semibold mb-4">{translations[language].callForImmediate}</h3>
                <Button 
                  className="w-full bg-jafer-gold text-black hover:bg-jafer-darkgold font-bold"
                  onClick={() => window.open(`tel:${translations[language].phone}`, '_self')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {translations[language].phone}
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

export default GetQuote;
