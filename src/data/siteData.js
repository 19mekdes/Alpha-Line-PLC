// siteData.js - All content data for Alpha Line PLC website

import { 
  Settings, 
  Cpu, 
  Zap, 
   
  Wrench, 
  HardDrive,
  Factory,
  Users,
  Trophy,
  Clock,
  Briefcase,
  Award,
  
  Globe,
 
} from 'lucide-react';

// Company Information
export const companyInfo = {
  name: "Alpha Line PLC",
  fullName: "Alpha Line Private Limited Company",
  tagline: "Engineering Excellence Since 1995",
  description: "Leading engineering firm specializing in industrial automation, control systems, and engineering solutions for manufacturing and infrastructure sectors.",
  founded: 1995,
  employees: "50+",
  headquarters: "Addis Ababa, Ethiopia",
  email: "info@alphaline.com",
  phone: "+251 11 123 4567",
  phoneAlt: "+251 91 123 4567",
  fax: "+251 11 123 4568",
  address: "123 Engineering Road, Industrial Area, Addis Ababa, Ethiopia",
  website: "www.alphaline.com",
  socialMedia: {
    facebook: "https://facebook.com/alphalineplc",
    twitter: "https://twitter.com/alphalineplc",
    linkedin: "https://linkedin.com/company/alphalineplc",
    instagram: "https://instagram.com/alphalineplc",
    youtube: "https://youtube.com/alphalineplc"
  },
  workingHours: {
    weekdays: "8:00 AM - 6:00 PM",
    saturday: "9:00 AM - 1:00 PM",
    sunday: "Closed"
  }
};

// Navigation Links
export const navLinks = [
  { path: "/", name: "Home", icon: "Home" },
  { path: "/about", name: "About", icon: "Info" },
  { path: "/service", name: "Services", icon: "Settings" },
  { path: "/testimonial", name: "Testimonials", icon: "MessageCircle" },
  { path: "/contact", name: "Contact", icon: "Mail" }
];

// Hero Section Content
export const heroContent = {
  title: "Alpha Line PLC",
  subtitle: "Engineering Excellence Since 2026",
  description: "Delivering innovative engineering solutions for industrial automation, control systems, and infrastructure development across Ethiopia and beyond.",
  ctaText: "Explore Our Services",
  ctaLink: "/service",
  secondaryCta: "Contact Us",
  secondaryCtaLink: "/contact",
  backgroundImage: "https://i.pinimg.com/736x/76/d6/5c/76d65c3bb3c4950868f04322ddb96642.jpg"
};

// About Page Content
export const aboutContent = {
  title: "About Alpha Line PLC",
  subtitle: "Your Trusted Engineering Partner",
  description: "For over 2 years, Alpha Line PLC has been at the forefront of engineering innovation, providing cutting-edge industrial automation solutions to businesses across East Africa.",
  mission: "To revolutionize industrial automation through innovative engineering solutions that enhance productivity, safety, and sustainability.",
  vision: "To become the leading engineering solutions provider in Africa, recognized for excellence in automation and control systems.",
  
  aboutImage: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  
  coreValues: [
    {
      icon: "Target",
      title: "Excellence",
      description: "Commitment to highest quality standards in every project"
    },
    {
      icon: "Users",
      title: "Innovation",
      description: "Continuous improvement and cutting-edge solutions"
    },
    {
      icon: "Shield",
      title: "Integrity",
      description: "Transparent and ethical business practices"
    },
    {
      icon: "Globe",
      title: "Sustainability",
      description: "Environmentally responsible engineering solutions"
    }
  ],
  
  history: {
    founded: 1995,
    milestones: [
      { year: 1995, event: "Company founded in Addis Ababa" },
      { year: 2000, event: "Expanded to industrial automation services" },
      { year: 2005, event: "ISO 9001:2000 Certification" },
      { year: 2010, event: "Opened second branch in Adama" },
      { year: 2015, event: "Launched SCADA systems division" },
      { year: 2020, event: "Expanded to renewable energy sector" },
      { year: 2024, event: "Opened innovation lab for Industry 4.0" }
    ]
  }
};

// Services Data
export const servicesData = [
  {
    id: 1,
    title: "PLC Programming",
    shortDesc: "Professional PLC programming for all major brands including Siemens, Allen-Bradley, and Schneider Electric.",
    description: "Our expert team provides comprehensive PLC programming services for industrial automation systems. We work with all major PLC brands including Siemens (S7-1200, S7-1500), Allen-Bradley (ControlLogix, CompactLogix), Schneider Electric (Modicon), and Mitsubishi. Our services include ladder logic, structured text, function block diagrams, and sequential function charts.",
    icon: "Settings",
    iconComponent: Settings,
    image: "https://images.unsplash.com/photo-1581092335871-5d3c5c6b4e8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "All major PLC brands supported",
      "Ladder logic and structured text programming",
      "System integration and commissioning",
      "Remote programming support",
      "PLC upgrade and migration",
      "24/7 emergency support"
    ],
    specifications: {
      "Supported Brands": "Siemens, Allen-Bradley, Schneider, Mitsubishi",
      "Programming Languages": "Ladder, STL, FBD, SFC",
      "Response Time": "< 100ms",
      "Warranty": "12 months"
    }
  },
  {
    id: 2,
    title: "SCADA Systems",
    shortDesc: "Advanced SCADA system design and implementation for real-time monitoring and control.",
    description: "We design and implement cutting-edge SCADA (Supervisory Control and Data Acquisition) systems that provide real-time monitoring, data acquisition, and control capabilities for industrial processes. Our solutions include Wonderware, Ignition, WinCC, and Citect platforms.",
    icon: "Cpu",
    iconComponent: Cpu,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Real-time process monitoring",
      "Data logging and reporting",
      "Alarm management systems",
      "Remote access capabilities",
      "Historical data analysis",
      "Custom dashboard design"
    ],
    specifications: {
      "Platforms": "Wonderware, Ignition, WinCC, Citect",
      "Database": "SQL, Oracle, PostgreSQL",
      "Connectivity": "OPC UA, Modbus, MQTT",
      "Security": "SSL/TLS encryption"
    }
  },
  {
    id: 3,
    title: "Industrial Automation",
    shortDesc: "Complete industrial automation solutions from concept to commissioning.",
    description: "We provide end-to-end industrial automation solutions including system design, panel building, installation, commissioning, and ongoing support. Our solutions optimize production processes, reduce downtime, and improve overall equipment effectiveness (OEE).",
    icon: "Factory",
    iconComponent: Factory,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Complete system integration",
      "Control panel design and manufacturing",
      "Process optimization",
      "Energy management systems",
      "Predictive maintenance",
      "Training and documentation"
    ]
  },
  {
    id: 4,
    title: "Control Panel Design",
    shortDesc: "Custom control panel design and manufacturing meeting international standards.",
    description: "Our experienced engineers design and manufacture custom control panels for various industrial applications. All panels are designed according to IEC and NEC standards, ensuring safety, reliability, and ease of maintenance.",
    icon: "Zap",
    iconComponent: Zap,
    image: "https://images.unsplash.com/photo-1581092335871-5d3c5c6b4e8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Custom panel design",
      "UL/CE certified components",
      "Thermal management",
      "EMC compliant design",
      "Remote I/O solutions",
      "Turnkey installation"
    ]
  },
  {
    id: 5,
    title: "Electrical Engineering",
    shortDesc: "Comprehensive electrical engineering services for industrial facilities.",
    description: "Our electrical engineering team provides a wide range of services including power distribution design, lighting systems, motor control centers, and electrical safety audits for industrial facilities.",
    icon: "HardDrive",
    iconComponent: HardDrive,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "Power distribution design",
      "Motor control centers",
      "Electrical safety audits",
      "Short circuit analysis",
      "Load flow studies",
      "Protection coordination"
    ]
  },
  {
    id: 6,
    title: "Technical Support",
    shortDesc: "24/7 technical support and maintenance services for industrial systems.",
    description: "Our dedicated support team provides round-the-clock technical assistance, troubleshooting, and maintenance services to ensure your industrial systems operate at peak performance with minimal downtime.",
    icon: "Wrench",
    iconComponent: Wrench,
    image: "https://images.unsplash.com/photo-1581092335871-5d3c5c6b4e8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    features: [
      "24/7 emergency support",
      "Preventive maintenance",
      "Remote diagnostics",
      "On-site repairs",
      "Spare parts supply",
      "Annual maintenance contracts"
    ]
  }
];

// Statistics Data
export const statisticsData = [
  {
    icon: "Briefcase",
    iconComponent: Briefcase,
    value: 2,
    suffix: "+",
    label: "Projects Completed",
    color: "blue",
    description: "Successfully delivered projects"
  },
  {
    icon: "Users",
    iconComponent: Users,
    value: 3,
    suffix: "+",
    label: "Expert Engineers",
    color: "green",
    description: "Dedicated professionals"
  },
  {
    icon: "Trophy",
    iconComponent: Trophy,
    value: 1,
    suffix: "+",
    label: "Years of Excellence",
    color: "orange",
    description: "Industry experience"
  },
  
];



// Contact Page Content
export const contactContent = {
  title: "Get In Touch",
  subtitle: "We'd love to hear from you",
  description: "Have a project in mind or need technical support? Contact our team of engineering experts today.",
  
  contactInfo: [
    {
      icon: "MapPin",
      title: "Visit Us",
      details: companyInfo.address,
      link: "https://maps.google.com"
    },
    {
      icon: "Phone",
      title: "Call Us",
      details: `${companyInfo.phone}\n${companyInfo.phoneAlt}`,
      link: `tel:${companyInfo.phone}`
    },
    {
      icon: "Mail",
      title: "Email Us",
      details: companyInfo.email,
      link: `mailto:${companyInfo.email}`
    },
    {
      icon: "Clock",
      title: "Working Hours",
      details: `${companyInfo.workingHours.weekdays}\n${companyInfo.workingHours.saturday}`,
      link: null
    }
  ],
  
  contactForm: {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  },
  
  mapLocation: {
    latitude: 9.0320,
    longitude: 38.7468,
    zoom: 15
  }
};

// Footer Links
export const footerLinks = {
  quickLinks: [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/service" },
    { name: "Testimonials", path: "/testimonial" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" }
  ],
  
  services: [
    "PLC Programming",
    "SCADA Systems",
    "Industrial Automation",
    "Control Panel Design",
    "Electrical Engineering",
    "24/7 Technical Support"
  ],
  
  newsletter: {
    title: "Subscribe to Our Newsletter",
    description: "Stay updated with our latest projects and industry news."
  }
};

// SEO and Metadata
export const seoData = {
  home: {
    title: "Alpha Line PLC - Engineering Excellence Since 1995",
    description: "Leading engineering firm specializing in industrial automation, PLC programming, SCADA systems, and control solutions in Ethiopia.",
    keywords: "engineering, industrial automation, PLC programming, SCADA, control systems, Ethiopia"
  },
  about: {
    title: "About Alpha Line PLC - Our Story & Mission",
    description: "Learn about Alpha Line PLC's 25+ years of engineering excellence, our mission, vision, and commitment to industrial automation.",
    keywords: "about us, engineering company, mission, vision, history"
  },
  services: {
    title: "Our Engineering Services - Industrial Automation Solutions",
    description: "Comprehensive industrial automation services including PLC programming, SCADA systems, control panels, and 24/7 technical support.",
    keywords: "engineering services, PLC programming, SCADA systems, industrial automation"
  },
  testimonials: {
    title: "Client Testimonials - Success Stories",
    description: "Read what our clients say about Alpha Line PLC's engineering solutions and services.",
    keywords: "testimonials, client reviews, success stories"
  },
  contact: {
    title: "Contact Alpha Line PLC - Get in Touch",
    description: "Contact our engineering team for inquiries, support, or project consultations.",
    keywords: "contact, support, inquiry, engineering consultation"
  }
};

// Site Configuration
export const siteConfig = {
  siteName: "Alpha Line PLC",
  siteUrl: "https://www.alphaline.com",
  siteEmail: companyInfo.email,
  sitePhone: companyInfo.phone,
  address: companyInfo.address,
  enableAnimations: true,
  enableNewsletter: true,
  enableCookieConsent: false,
  theme: {
    primaryColor: "#3B82F6",
    secondaryColor: "#1E40AF",
    accentColor: "#10B981",
    fontFamily: "Inter, system-ui, sans-serif"
  }
};

// Export all data as default
export default {
  companyInfo,
  navLinks,
  heroContent,
  aboutContent,
  servicesData,
  statisticsData,
  testimonialsData,
  contactContent,
  footerLinks,
  seoData,
  siteConfig
};