// siteData.js - All content data for Alpha Line Engineering PLC

import { 
  Wifi, 
  Zap, 
  PenTool, 
  HardDrive,
  Factory,
  Users,
  Trophy,
  Clock,
  Briefcase,
  Award,
  Globe,
  Shield,
  Target,
  Eye,
  Handshake,
  TrendingUp
} from 'lucide-react';

// Company Information
export const companyInfo = {
  name: "Alpha Line Engineering PLC",
  fullName: "Alpha Line Engineering Private Limited Company",
  tagline: "Engineering Excellence Since 2015",
  description: "Leading engineering firm specializing in Outside Plant (OSP) engineering, telecom infrastructure, and electrical power projects across Ethiopia.",
  founded: 2015,
  employees: "25+",
  headquarters: "Addis Ababa, Ethiopia",
  email: "info@alphalineengineering.com",
  phone: "+251 11 123 4567",
  phoneAlt: "+251 91 123 4567",
  address: "Addis Ababa, Ethiopia",
  website: "www.alphalineengineering.com",
  socialMedia: {
    facebook: "https://facebook.com/alphalineengineering",
    twitter: "https://twitter.com/alphalineengineering",
    linkedin: "https://linkedin.com/company/alphalineengineering",
    instagram: "https://instagram.com/alphalineengineering"
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
  { path: "/services", name: "Services", icon: "Settings" },
  { path: "/projects", name: "Projects", icon: "Briefcase" },
  { path: "/partners", name: "Partners", icon: "Handshake" }
];

// Hero Section Content
export const heroContent = {
  title: "Alpha Line Engineering PLC",
  subtitle: "Engineering Excellence Since 2015",
  description: "Leading engineering firm specializing in Outside Plant (OSP) engineering, telecom infrastructure, and electrical power projects across Ethiopia.",
  ctaText: "Explore Our Services",
  ctaLink: "/services",
  secondaryCta: "Request a Quote",
  secondaryCtaLink: "/contact",
  backgroundImage: "/images/hero-bg.jpg"
};

// About Page Content
export const aboutContent = {
  title: "About Alpha Line Engineering PLC",
  subtitle: "Your Trusted Engineering Partner",
  description: "For over 10 years, Alpha Line Engineering PLC has been at the forefront of engineering innovation, providing cutting-edge infrastructure solutions to businesses across Ethiopia.",
  mission: "To deliver reliable, innovative infrastructure solutions that connect communities and power sustainable development across Ethiopia.",
  vision: "To become East Africa's leading engineering firm, recognized for technical excellence and commitment to infrastructure development.",
  
  aboutImage: "/images/about-team.jpg",
  
  coreValues: [
    {
      icon: "Target",
      title: "Reliability",
      description: "We deliver on our promises with consistent, high-quality results"
    },
    {
      icon: "Lightbulb",
      title: "Innovation",
      description: "Embracing cutting-edge technology and creative solutions"
    },
    {
      icon: "Shield",
      title: "Integrity",
      description: "Transparent and ethical business practices in all our dealings"
    },
    {
      icon: "Globe",
      title: "Sustainability",
      description: "Environmentally responsible engineering solutions for future generations"
    }
  ]
};

// Services Data
export const servicesData = [
  {
    id: 1,
    title: "Telecom Infrastructure",
    shortDesc: "Fiber optic installation, OSP design (HLD/LLD), and tower maintenance",
    description: "We provide end-to-end telecom infrastructure solutions ensuring reliable connectivity across Ethiopia. Our team specializes in fiber optic networks, communication tower maintenance, and OSP engineering.",
    icon: "Wifi",
    iconComponent: Wifi,
    image: "/images/services/telecom.jpg",
    features: [
      "Fiber Optic Installation (Aerial & Underground)",
      "OSP Design (HLD/LLD) using AutoCAD & GIS",
      "Tower Maintenance & Inspection",
      "Network Deployment & Integration",
      "Site Acquisition & Permitting",
      "Quality Testing & Commissioning"
    ]
  },
  {
    id: 2,
    title: "Power & Utilities",
    shortDesc: "Utility pole installation, electrical power projects, and hardware supply",
    description: "We deliver reliable power infrastructure solutions bringing electricity to communities and industries. From utility pole installation to complete electrical system design.",
    icon: "Zap",
    iconComponent: Zap,
    image: "/images/services/power.jpg",
    features: [
      "Utility Pole Installation (Wood, Concrete, Steel)",
      "Stay Rods & Pole Hardware Supply",
      "Electrical Power Projects (LV & MV)",
      "Transformer Installation",
      "Power Distribution Lines",
      "Rural Electrification Projects"
    ]
  },
  {
    id: 3,
    title: "Engineering Consultancy",
    shortDesc: "Site surveys, AutoCAD documentation, and technical reporting",
    description: "Our consultancy services provide the technical foundation for successful infrastructure projects. We conduct detailed site surveys and create precise AutoCAD documentation.",
    icon: "PenTool",
    iconComponent: PenTool,
    image: "/images/services/consultancy.jpg",
    features: [
      "Topographic & Route Surveys",
      "AutoCAD Design & Documentation",
      "Technical Reporting & Analysis",
      "Feasibility Studies",
      "Environmental Impact Assessment",
      "Project Cost Estimation"
    ]
  },
  {
    id: 4,
    title: "Project Management",
    shortDesc: "Excavation, trenching, and infrastructure deployment in challenging terrains",
    description: "We specialize in managing complex infrastructure projects in Ethiopia's most challenging environments, including the Afar-Afdera region.",
    icon: "HardDrive",
    iconComponent: HardDrive,
    image: "/images/services/project-management.jpg",
    features: [
      "Excavation & Trenching Services",
      "Infrastructure Deployment",
      "Project Planning & Scheduling",
      "Resource Management",
      "Quality Control & Safety",
      "Stakeholder Coordination"
    ]
  }
];

// Statistics Data
export const statisticsData = [
  {
    icon: "Briefcase",
    iconComponent: Briefcase,
    value: 50,
    suffix: "+",
    label: "Projects Completed",
    color: "blue",
    description: "Successfully delivered projects"
  },
  {
    icon: "Users",
    iconComponent: Users,
    value: 25,
    suffix: "+",
    label: "Expert Engineers",
    color: "green",
    description: "Dedicated professionals"
  },
  {
    icon: "Trophy",
    iconComponent: Trophy,
    value: 10,
    suffix: "+",
    label: "Years of Excellence",
    color: "orange",
    description: "Industry experience"
  },
  {
    icon: "TrendingUp",
    iconComponent: TrendingUp,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    color: "purple",
    description: "Happy clients"
  }
];

// Projects Data
export const projectsData = [
  {
    id: 1,
    title: "Afdera Utility Infrastructure Project",
    location: "Afar-Afdera Region, Ethiopia",
    category: "Power & Utilities",
    completed: "2024",
    description: "Complete utility infrastructure deployment including pole installation, fiber optic cabling, and electrical systems in the challenging Afar-Afdera region.",
    image: "/images/projects/afdera-main.jpg",
    stats: {
      fiberKm: "50+",
      utilityPoles: "200+",
      households: "5,000+"
    }
  },
  {
    id: 2,
    title: "Addis Ababa Fiber Optic Network",
    location: "Addis Ababa, Ethiopia",
    category: "Telecom Infrastructure",
    completed: "2023",
    description: "Design and implementation of fiber optic network infrastructure across key districts of Addis Ababa.",
    image: "/images/projects/addis-fiber.jpg",
    stats: {
      fiberKm: "80+",
      districts: "5",
      households: "100,000+"
    }
  }
];

// Partners Data
export const partnersData = [
  {
    name: "Bahir Dar Institute of Technology",
    category: "Strategic Partner",
    year: "2018",
    collaboration: ["Research & Development", "Student Internships", "Technical Workshops"]
  },
  {
    name: "Alpha Line Engineering PLC",
    category: "Parent Company",
    year: "2015",
    collaboration: ["Strategic Planning", "Resource Sharing", "Quality Control"]
  },
  {
    name: "AGT Engineering",
    category: "Technical Partner",
    year: "2019",
    collaboration: ["Infrastructure Projects", "Technical Consulting", "Quality Assurance"]
  },
  {
    name: "Ethio Telecom",
    category: "Government Partner",
    year: "2020",
    collaboration: ["Fiber Optic Networks", "Tower Installation", "Network Expansion"]
  }
];

// Contact Page Content
export const contactContent = {
  title: "Get In Touch",
  subtitle: "Request a Quote",
  description: "Contact our team for project inquiries and technical consultations",
  
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
  ]
};

// Footer Links
export const footerLinks = {
  quickLinks: [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Partners", path: "/partners" }
  ],
  
  services: [
    "Telecom Infrastructure",
    "Power & Utilities",
    "Engineering Consultancy",
    "Project Management"
  ]
};

// Export all data as default
export default {
  companyInfo,
  navLinks,
  heroContent,
  aboutContent,
  servicesData,
  statisticsData,
  projectsData,
  partnersData,
  contactContent,
  footerLinks
};