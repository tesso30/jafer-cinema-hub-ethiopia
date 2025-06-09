
export type Language = 'en' | 'am' | 'or';

export const serviceTranslations = {
  en: {
    title: "Professional Electronics Services",
    subtitle: "Expert installation, repair, and support for all your electronic devices with certified technicians",
    tvService: {
      title: "TV Setup & Repair",
      description: "Complete installation, configuration, and repair services for all TV brands, satellite systems, and smart TV setup.",
      features: ["Free diagnosis", "Same-day service", "1-year warranty", "All brands supported"],
      duration: "30-90 minutes"
    },
    dishService: {
      title: "DISH Installation",
      description: "Professional DISH satellite installation and setup with optimal signal positioning, receiver configuration, and channel programming.",
      features: ["Signal optimization", "Multi-room setup", "HD/4K programming", "Professional mounting"],
      duration: "120-240 minutes"
    },
    jepasService: {
      title: "Jepas Repair",
      description: "Professional repair services for Jepas devices with expert troubleshooting, component replacement, and performance optimization.",
      features: ["Expert diagnosis", "Genuine parts", "Performance optimization", "Quality guarantee"],
      duration: "60-180 minutes"
    },
    mobileService: {
      title: "Mobile Repair",
      description: "Comprehensive smartphone and tablet repair services including screen replacement, battery issues, software problems, and hardware fixes.",
      features: ["Screen replacement", "Battery repair", "Software fixes", "Water damage recovery"],
      duration: "30-120 minutes"
    },
    features: {
      certified: "Certified Technicians",
      warranty: "Service Warranty",
      support: "24/7 Support",
      satisfaction: "100% Satisfaction"
    },
    getQuote: "Get Free Quote",
    viewDetails: "View Details",
    bookService: "Book Service",
    whyChooseUs: "Why Choose Our Services?",
    experience: "10+ Years Experience",
    customers: "5000+ Happy Customers",
    rating: "4.9/5 Average Rating"
  },
  am: {
    title: "ሙያዊ የኤሌክትሮኒክስ አገልግሎቶች",
    subtitle: "በተመሰከረላቸው ቴክኒሺያኖች ለሁሉም የኤሌክትሮኒክስ መሳሪያዎችዎ ባለሙያ ማስገጃ፣ ጥገና እና ድጋፍ",
    tvService: {
      title: "የቴሌቪዥን ማዋቀር እና ጥገና",
      description: "ለሁሉም የቴሌቪዥን ብራንዶች፣ የሳተላይት ስርዓቶች እና የስማርት ቲቪ ማዋቀር ሙሉ ማስገጃ፣ ውቅር እና የጥገና አገልግሎቶች።",
      features: ["ነፃ ምርመራ", "የቀን አገልግሎት", "1 ዓመት ዋስትና", "ሁሉም ብራንዶች ይደገፋሉ"],
      duration: "30-90 ደቂቃዎች"
    },
    dishService: {
      title: "DISH ማስገጃ",
      description: "ሙያዊ DISH ሳተላይት ማስገጃ እና ማዋቀር ከምርጥ ሲግናል አቀማመጥ፣ ተቀባይ ውቅር እና የቻናል ፕሮግራሚንግ ጋር።",
      features: ["የሲግናል ማመቻቸት", "የበርካታ ክፍል ማዋቀር", "HD/4K ፕሮግራሚንግ", "ሙያዊ ማስገጫ"],
      duration: "120-240 ደቂቃዎች"
    },
    jepasService: {
      title: "የጀፓስ ጥገና",
      description: "ለጀፓስ መሳሪያዎች ሙያዊ የጥገና አገልግሎቶች ከባለሙያ ችግር መፍታት፣ አካል መተካት እና የአፈጻጸም ማመቻቸት ጋር።",
      features: ["የባለሙያ ምርመራ", "ዋናውና ክፍሎች", "የአፈጻጸም ማመቻቸት", "የጥራት ዋስትና"],
      duration: "60-180 ደቂቃዎች"
    },
    mobileService: {
      title: "የሞባይል ጥገና",
      description: "ሙሉ የስማርትፎን እና ታብሌት የጥገና አገልግሎቶች የስክሪን መተካት፣ የባትሪ ችግሮች፣ የሶፍትዌር ችግሮች እና የሃርድዌር ጥገናዎችን ጨምሮ።",
      features: ["የስክሪን መተካት", "የባትሪ ጥገና", "የሶፍትዌር ጥገናዎች", "የውሃ ጉዳት ማገገሚያ"],
      duration: "30-120 ደቂቃዎች"
    },
    features: {
      certified: "የተመሰከረላቸው ቴክኒሺያኖች",
      warranty: "የአገልግሎት ዋስትና",
      support: "24/7 ድጋፍ",
      satisfaction: "100% እርካታ"
    },
    getQuote: "ነፃ ግምት ያግኙ",
    viewDetails: "ዝርዝሮችን ይመልከቱ",
    bookService: "አገልግሎት ይመዝግቡ",
    whyChooseUs: "የእኛን አገልግሎቶች ለምን ይመርጣሉ?",
    experience: "10+ ዓመታት ልምድ",
    customers: "5000+ ደስተኛ ደንበኞች",
    rating: "4.9/5 አማካይ ደረጃ"
  },
  or: {
    title: "Tajaajila Elektrooniksii Ogummaa",
    subtitle: "Dhaabbii, suphaa fi deeggarsa ogeeyyii meemshaaleewwan elektrooniksii keessan hundaaf teknisheeniiwwan ragaa qaban waliin",
    tvService: {
      title: "Qophii fi Suphaa TV",
      description: "Tajaajila dhaabbii, qindaa'ina fi suphaa guutuu braandii TV hunda, sirna saatalaayitii fi qophii TV ismaartiif.",
      features: ["Qorannoo bilisaa", "Tajaajila guyyaa", "Waadaa waggaa tokkoo", "Braandii hundi ni deeggarnama"],
      duration: "Daqiiqaa 30-90"
    },
    dishService: {
      title: "Dhaabbii DISH",
      description: "Dhaabbii fi qophii saatalaayitii DISH ogummaa mallattoo gaarii ta'e, qindaa'ina fudhattuu fi sagantaa chaanaalii waliin.",
      features: ["Fooyya'iinsa mallattoo", "Qophii kutaa hedduudhaa", "Sagantaa HD/4K", "Dhaabbii ogummaa"],
      duration: "Daqiiqaa 120-240"
    },
    jepasService: {
      title: "Suphaa Jepas",
      description: "Tajaajila suphaa ogummaa meeshaalee Jepas tiif qorannoo rakkoo ogeessaa, bakka bu'iinsa kutaa fi fooyya'iinsa raawwii waliin.",
      features: ["Qorannoo ogeessaa", "Kutaalee dhugaa", "Fooyya'iinsa raawwii", "Waadaa qulqullina"],
      duration: "Daqiiqaa 60-180"
    },
    mobileService: {
      title: "Suphaa Bilbilaa",
      description: "Tajaajila suphaa smartphone fi tablet bal'aa bakka bu'iinsa iskiriinii, dhimma baatirii, rakkoo sooftweeraa fi suphaa haardiweeraa dabalatee.",
      features: ["Bakka bu'iinsa iskiriinii", "Suphaa baatirii", "Suphaa sooftweeraa", "Deebisuu miidhaa bishaanii"],
      duration: "Daqiiqaa 30-120"
    },
    features: {
      certified: "Teknisheenota Ragaa Qaban",
      warranty: "Waadaa Tajaajilaa",
      support: "Deeggarsa 24/7",
      satisfaction: "Quubsaa 100%"
    },
    getQuote: "Tilmaama Bilisaa Argadhu",
    viewDetails: "Bal'inaan Ilaali",
    bookService: "Tajaajila Galmeessi",
    whyChooseUs: "Maaliif Tajaajila Keenya Filattu?",
    experience: "Muuxannoo Waggaa 10+",
    customers: "Maamiltoota Gammadan 5000+",
    rating: "Madaallii Giddugaleessaa 4.9/5"
  }
};
