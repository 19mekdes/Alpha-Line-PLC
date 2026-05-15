import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About Us",
        services: "Services",
        projects: "Projects",
        partners: "Partners",
        quote: "Get Quote"
      },
      hero: {
        tagline: "Engineering Excellence Since 2018",
        motto: "Connecting the World, Powering the Future",
        mottoAmharic: "ዓለምን በማገናኘት፣ መጻኢውን በማብራት",
        title: "Alpha Line Engineering PLC",
        description: "Leading engineering firm specializing in Outside Plant (OSP) engineering and electrical power projects across Ethiopia.",
        cta1: "Explore Our Services",
        cta2: "Request a Quote"
      },
      about: {
        title: "About Alpha Line Engineering PLC",
        subtitle: "Who We Are",
        profile: "Company Profile",
        profileDesc: "Alpha Line Engineering PLC is a premier engineering firm headquartered in Addis Ababa, Ethiopia. We specialize in Outside Plant (OSP) engineering, telecom infrastructure, and electrical power projects.",
        mission: "Our Mission",
        missionText: "To deliver reliable, innovative infrastructure solutions that connect communities and power sustainable development across Ethiopia.",
        vision: "Our Vision",
        visionText: "To become East Africa's leading engineering firm, recognized for technical excellence and commitment to infrastructure development.",
        team: "Our Multidisciplinary Team",
        teamDesc: "Our team consists of highly skilled engineers, technical specialists, and project managers dedicated to excellence in every project we undertake."
      },
      services: {
        title: "Our Core Services",
        subtitle: "What We Offer",
        description: "Comprehensive engineering solutions for telecom and power infrastructure",
        telecom: {
          title: "Telecom Infrastructure",
          description: "Fiber optic installation, OSP design (HLD/LLD), tower maintenance, and comprehensive network deployment solutions.",
          features: ["Fiber Optic Installation", "OSP Design (HLD/LLD)", "Tower Maintenance", "Network Deployment"]
        },
        power: {
          title: "Power & Utilities",
          description: "Utility pole installation, electrical power projects, stay rods, pole hardware, and complete electrical system supply.",
          features: ["Utility Pole Installation", "Electrical Power Projects", "Stay Rods & Hardware", "Electrical System Supply"]
        },
        consultancy: {
          title: "Engineering Consultancy",
          description: "Professional site surveys, AutoCAD documentation, technical reporting, and feasibility studies.",
          features: ["Site Surveys", "AutoCAD Documentation", "Technical Reporting", "Feasibility Studies"]
        },
        projectMgmt: {
          title: "Project Management",
          description: "Excavation, trenching, and infrastructure deployment in challenging terrains including the Shashamane-Oromia region.",
          features: ["Excavation & Trenching", "Infrastructure Deployment", "Shashamane-Oromia Region Experience", "Quality Assurance"]
        }
      },
      projects: {
        title: "Our Projects",
        subtitle: "Recent Success Stories",
        description: "Showcasing our expertise in challenging environments",
        viewDetails: "View Details",
        beforeAfter: "Before & After",
        shashamane: {
          title: "Shashamane Utility Infrastructure Project",
          location: "Shashamane-Oromia Region, Ethiopia",
          challenge: "Extreme temperatures (45°C+), remote location, difficult accessibility, harsh terrain conditions",
          solution: "Specialized equipment deployment, local workforce training, phased implementation approach",
          result: "Successfully deployed 50+ km of fiber optic network and 200+ utility poles",
          timeline: "3 months"
        }
      },
      partners: {
        title: "Our Clients & Partners",
        subtitle: "Trusted Collaborations",
        description: "We are proud to work with leading institutions and organizations",
        bahirDar: "Bahir Dar Institute of Technology",
        alphaLine: "Alpha Line Engineering PLC",
        agt: "AGT Engineering",
        ethioTelecom: "Ethio Telecom",
        eeuc: "Ethiopian Electric Utility"
      },
      footer: {
        quickLinks: "Quick Links",
        ourServices: "Our Services",
        contactInfo: "Contact Info",
        copyright: "All rights reserved.",
        address: "Addis Ababa, Ethiopia",
        phone: "+251 33 70 8486",
        email: "info@alphalineengineering.com",
        hours: "Mon-Fri: 8:00 AM - 6:00 PM"
      }
    }
  },
  am: {
    translation: {
      nav: {
        home: "ዋና ገፅ",
        about: "ስለ እኛ",
        services: "አገልግሎቶች",
        projects: "ፕሮጀክቶች",
        partners: "አጋሮች",
        quote: "ዋጋ ጠይቅ"
      },
      hero: {
        tagline: "ከ2018 ጀምሮ የምህንድስና ልቀት",
        motto: "ዓለምን በማገናኘት፣ መጻኢውን በማብራት",
        mottoAmharic: "ዓለምን በማገናኘት፣ መጻኢውን በማብራት",
        title: "አልፋላይን ኢንጂነሪንግ ኃላ/የተ/የግ/ማህበር",
        description: "በኢትዮጵያ ውስጥ በውጭ እፅዋት (OSP) ኢንጂነሪንግ እና በኤሌክትሪክ ኃይል ፕሮጀክቶች ላይ የተካነ መሪ የምህንድስና ድርጅት።",
        cta1: "አገልግሎቶቻችንን ይመልከቱ",
        cta2: "ዋጋ ይጠይቁ"
      },
      about: {
        title: "ስለ አልፋላይን ኢንጂነሪንግ ኃላ/የተ/የግ/ማህበር",
        subtitle: "እኛ ማን ነን",
        profile: "የኩባንያ መገለጫ",
        profileDesc: "አልፋላይን ኢንጂነሪንግ ኃላ/የተ/የግ/ማህበር በአዲስ አበባ ፣ ኢትዮጵያ ውስጥ የሚገኝ ቀዳሚ የምህንድስና ድርጅት ነው።",
        mission: "ተልዕኳችን",
        missionText: "ማህበረሰቦችን የሚያገናኙ እና በኢትዮጵያ ዘላቂ ልማትን የሚያጎለብቱ አስተማማኝ እና አዳዲስ የመሠረተ ልማት መፍትሄዎችን መስጠት።",
        vision: "ራዕያችን",
        visionText: "ለቴክኒካል ልቀት እና ለመሠረተ ልማት ልማት ቁርጠኝነት እውቅና ያገኘ የምስራቅ አፍሪካ መሪ የምህንድስና ድርጅት መሆን።",
        team: "የእኛ ቡድን",
        teamDesc: "የእኛ ቡድን ከፍተኛ ችሎታ ያላቸው መሐንዲሶችን ፣ ቴክኒካል ባለሙያዎችን እና የፕሮጀክት አስተዳዳሪዎችን ያቀፈ ነው።"
      },
      services: {
        title: "ዋና አገልግሎቶቻችን",
        subtitle: "የምናቀርባቸው",
        description: "ለቴሌኮም እና ለኤሌክትሪክ መሠረተ ልማት አጠቃላይ የምህንድስና መፍትሄዎች",
        telecom: {
          title: "ቴሌኮም መሠረተ ልማት",
          description: "የፋይበር ኦፕቲክ መትከል፣ የOSP ዲዛይን (HLD/LLD)፣ የማማ ጥገና እና አጠቃላይ የኔትወርክ መዘርጋት መፍትሄዎች።"
        },
        power: {
          title: "ሃይል እና መገልገያዎች",
          description: "የመገልገያ ምሰሶ መትከል፣ የኤሌክትሪክ ሃይል ፕሮጀክቶች፣ የማቆያ ዘንጎች እና ሃርድዌር፣ እና የተሟላ የኤሌክትሪክ ስርዓት አቅርቦት።"
        }
      },
      projects: {
        title: "ፕሮጀክቶቻችን",
        subtitle: "የቅርብ ጊዜ የስኬት ታሪኮች",
        description: "በአስቸጋሪ አካባቢዎች ያለንን እውቀት በማሳየት ላይ"
      },
      partners: {
        title: "ደንበኞቻችን እና አጋሮቻችን",
        subtitle: "የታመኑ ትብብሮች",
        description: "ከመሪ ተቋማት እና ድርጅቶች ጋር በመሆን መስራታችን ኩራት ይሰማናል",
        bahirDar: "ባህር ዳር የቴክኖሎጂ ተቋም",
        alphaLine: "አልፋላይን ኢንጂነሪንግ ኃላ/የተ/የግ/ማህበር",
        agt: "ኤጂቲ ኢንጂነሪንግ",
        ethioTelecom: "ኢትዮ ቴሌኮም"
      },
      footer: {
        quickLinks: "ፈጣን አገናኞች",
        ourServices: "አገልግሎቶቻችን",
        contactInfo: "የእውቂያ መረጃ",
        copyright: "ሁሉም መብቶች ተጠብቀዋል።",
        address: "አዲስ አበባ፣ ኢትዮጵያ",
        phone: "+251 33 70 8486 ",
        email: "info@alphalineengineering.com",
        hours: "ሰኞ - አርብ፦ 8:00 ጠዋት - 6:00 ማታ"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;