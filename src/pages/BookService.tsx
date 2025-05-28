
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Calendar, Clock, User, Phone, Mail, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Language = 'en' | 'am' | 'or';

const BookService = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [language, setLanguage] = useState<Language>('en');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: serviceId || '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const translations = {
    en: {
      bookService: "Book Service",
      backToServices: "Back to Services",
      personalInfo: "Personal Information",
      fullName: "Full Name",
      phoneNumber: "Phone Number",
      emailAddress: "Email Address",
      serviceDetails: "Service Details",
      selectService: "Select Service",
      preferredDate: "Preferred Date",
      preferredTime: "Preferred Time",
      additionalMessage: "Additional Message",
      submitBooking: "Submit Booking",
      morning: "Morning (8:00 - 12:00)",
      afternoon: "Afternoon (12:00 - 17:00)",
      evening: "Evening (17:00 - 21:00)",
      tvService: "TV Setup & Repair",
      dishService: "DISH Installation",
      jepasService: "Jepas Repair",
      mobileService: "Mobile Repair",
      bookingSubmitted: "Booking submitted successfully! We will contact you soon.",
      fillAllFields: "Please fill in all required fields."
    },
    am: {
      bookService: "አገልግሎት ይመዝግቡ",
      backToServices: "ወደ አገልግሎቶች ተመለስ",
      personalInfo: "የግል መረጃ",
      fullName: "ሙሉ ስም",
      phoneNumber: "ስልክ ቁጥር",
      emailAddress: "ኢሜይል አድራሻ",
      serviceDetails: "የአገልግሎት ዝርዝሮች",
      selectService: "አገልግሎት ይምረጡ",
      preferredDate: "የሚመረጥ ቀን",
      preferredTime: "የሚመረጥ ጊዜ",
      additionalMessage: "ተጨማሪ መልእክት",
      submitBooking: "ቦታ ማስያዝ ላክ",
      morning: "ጥዋት (8:00 - 12:00)",
      afternoon: "ከሰዓት በኋላ (12:00 - 17:00)",
      evening: "ማታ (17:00 - 21:00)",
      tvService: "የቴሌቪዥን ማዋቀር እና ጥገና",
      dishService: "DISH ማስገጃ",
      jepasService: "የጀፓስ ጥገና",
      mobileService: "የሞባይል ጥገና",
      bookingSubmitted: "ቦታ ማስያዝ በተሳካ ሁኔታ ተልኳል! በቅርቡ እናገኝዎታለን።",
      fillAllFields: "እባክዎ ሁሉንም አስፈላጊ መስኮች ይሙሉ።"
    },
    or: {
      bookService: "Tajaajila Galmeessi",
      backToServices: "Gara Tajaajilatti Deebi'i",
      personalInfo: "Odeeffannoo Dhuunfaa",
      fullName: "Maqaa Guutuu",
      phoneNumber: "Lakkoofsa Bilbilaa",
      emailAddress: "Teessoo Imeelii",
      serviceDetails: "Bal'ina Tajaajilaa",
      selectService: "Tajaajila Filadhu",
      preferredDate: "Guyyaa Filatamaa",
      preferredTime: "Yeroo Filatamaa",
      additionalMessage: "Ergaa Dabalataa",
      submitBooking: "Galmeessuu Ergi",
      morning: "Ganama (8:00 - 12:00)",
      afternoon: "Waaree (12:00 - 17:00)",
      evening: "Galgala (17:00 - 21:00)",
      tvService: "Qophii fi Suphaa TV",
      dishService: "Dhaabbii DISH",
      jepasService: "Suphaa Jepas",
      mobileService: "Suphaa Bilbilaa",
      bookingSubmitted: "Galmeessuun milkaa'inaan ergame! Yeroo dhiyootti si quunnamna.",
      fillAllFields: "Maaloo dirreewwan barbaachisoo hunda guuti."
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.service || !formData.preferredDate) {
      toast({
        title: translations[language].fillAllFields,
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log('Booking data:', formData);
    
    toast({
      title: translations[language].bookingSubmitted,
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: serviceId || '',
      preferredDate: '',
      preferredTime: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-jafer-dark text-white">
      <Navbar language={language} setLanguage={setLanguage} />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-8 text-jafer-gold hover:text-jafer-darkgold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {translations[language].backToServices}
          </Button>

          <h1 className="text-3xl font-bold mb-8 gradient-text">{translations[language].bookService}</h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="bg-black/30 rounded-xl p-6 border border-gray-800">
              <h2 className="text-xl font-semibold mb-6 text-jafer-gold flex items-center gap-2">
                <User className="w-5 h-5" />
                {translations[language].personalInfo}
              </h2>
              
              <div className="space-y-4">
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

                <div>
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

            {/* Service Details */}
            <div className="bg-black/30 rounded-xl p-6 border border-gray-800">
              <h2 className="text-xl font-semibold mb-6 text-jafer-gold flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                {translations[language].serviceDetails}
              </h2>
              
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
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {translations[language].preferredDate} *
                    </label>
                    <Input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                      className="bg-black/20 border-gray-700"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {translations[language].preferredTime}
                    </label>
                    <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                      <SelectTrigger className="bg-black/20 border-gray-700">
                        <SelectValue placeholder={translations[language].preferredTime} />
                      </SelectTrigger>
                      <SelectContent className="bg-black border-gray-700">
                        <SelectItem value="morning">{translations[language].morning}</SelectItem>
                        <SelectItem value="afternoon">{translations[language].afternoon}</SelectItem>
                        <SelectItem value="evening">{translations[language].evening}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{translations[language].additionalMessage}</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-black/20 border-gray-700"
                    rows={4}
                    placeholder="Tell us more about your service requirements..."
                  />
                </div>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-jafer-gold text-black hover:bg-jafer-darkgold font-bold py-3 text-lg"
            >
              {translations[language].submitBooking}
            </Button>
          </form>
        </div>
      </div>

      <Footer language={language} />
    </div>
  );
};

export default BookService;
