import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Wifi, Zap, BarChart3, HardDrive, CheckCircle, 
  ArrowRight, MapPin, Clock, Users, Shield, 
  FileText, PenTool, TowerControl, Cable, 
  Battery, Clipboard, Compass, Phone, Mail
} from 'lucide-react';
import SectionLabel from '../components/SectionLabel';

const ServicesPage = () => {
  const { t, i18n } = useTranslation();
  const isAmharic = i18n.language === 'am';
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 1,
      title: "Telecom Infrastructure",
      titleAm: "ቴሌኮም መሠረተ ልማት",
      icon: <Wifi className="w-8 h-8" />,
      iconBg: "bg-blue-100 text-blue-600",
      description: "Comprehensive fiber optic installation, OSP design (HLD/LLD), tower maintenance, and network deployment solutions.",
      descriptionAm: "አጠቃላይ የፋይበር ኦፕቲክ መትከል፣ የOSP ዲዛይን (HLD/LLD)፣ የማማ ጥገና እና የኔትወርክ መዘርጋት መፍትሄዎች።",
      longDescription: "We provide end-to-end telecom infrastructure solutions that ensure reliable connectivity. Our team specializes in designing and deploying fiber optic networks, maintaining communication towers, and implementing OSP (Outside Plant) engineering for telecom operators across Ethiopia.",
      features: [
        "Fiber Optic Installation (Aerial & Underground)",
        "OSP Design (HLD/LLD) using AutoCAD & GIS",
        "Tower Maintenance & Inspection",
        "Network Deployment & Integration",
        "Site Acquisition & Permitting",
        "Quality Testing & Commissioning"
      ],
      benefits: [
        "99.9% Network Uptime Guarantee",
        "24/7 Emergency Response",
        "ISO Certified Processes",
        "Experienced Engineering Team"
      ],
      image: "https://images.pexels.com/photos/3861969/engineer-working-on-fiber-optic-cable-3861969.jpg",
      process: [
        "Site Survey & Planning",
        "Route Design & Permitting",
        "Material Procurement",
        "Installation & Testing",
        "Handover & Maintenance"
      ],
      industries: [
        "Telecom Operators", "ISPs", "Government", 
        "Enterprise Networks", "Campus Networks"
      ]
    },
    {
      id: 2,
      title: "Power & Utilities",
      titleAm: "ሃይል እና መገልገያዎች",
      icon: <Zap className="w-8 h-8" />,
      iconBg: "bg-orange-100 text-orange-600",
      description: "Utility pole installation, electrical power projects, stay rods, pole hardware, and complete electrical system supply.",
      descriptionAm: "የመገልገያ ምሰሶ መትከል፣ የኤሌክትሪክ ሃይል ፕሮጀክቶች፣ የማቆያ ዘንጎች እና ሃርድዌር፣ እና የተሟላ የኤሌክትሪክ ስርዓት አቅርቦት።",
      longDescription: "We deliver reliable power infrastructure solutions that bring electricity to communities and industries. From utility pole installation to complete electrical system design, our team ensures safe and efficient power distribution across Ethiopia, including challenging terrains like the Afar region.",
      features: [
        "Utility Pole Installation (Wood, Concrete, Steel)",
        "Stay Rods & Pole Hardware Supply",
        "Electrical Power Projects (LV & MV)",
        "Transformer Installation",
        "Power Distribution Lines",
        "Rural Electrification Projects"
      ],
      benefits: [
        "High Quality Materials",
        "Safety Compliant Installation",
        "Experienced Crew",
        "On-Time Delivery"
      ],
      image: "https://images.pexels.com/photos/261855/pexels-photo-261855.jpeg",
      process: [
        "Site Assessment",
        "Material Sourcing",
        "Pole Installation",
        "Line Stringing",
        "Testing & Commissioning"
      ],
      industries: [
        "Utility Companies", "Industrial Parks", 
        "Construction Sites", "Rural Communities"
      ]
    },
    {
      id: 3,
      title: "Engineering Consultancy",
      titleAm: "የምህንድስና ማማከር",
      icon: <BarChart3 className="w-8 h-8" />,
      iconBg: "bg-green-100 text-green-600",
      description: "Professional site surveys, AutoCAD documentation, technical reporting, and feasibility studies.",
      descriptionAm: "ሙያዊ የቦታ ጥናት፣ የኦቶካድ ሰነድ፣ የቴክኒክ ዘገባ እና የአዋጭነት ጥናቶች።",
      longDescription: "Our consultancy services provide the technical foundation for successful infrastructure projects. We conduct detailed site surveys, create precise AutoCAD documentation, and deliver comprehensive technical reports that guide decision-making and project execution.",
      features: [
        "Topographic & Route Surveys",
        "AutoCAD Design & Documentation",
        "Technical Reporting & Analysis",
        "Feasibility Studies",
        "Environmental Impact Assessment",
        "Project Cost Estimation"
      ],
      benefits: [
        "Accurate Data Collection",
        "Industry Standard Documentation",
        "Experienced Surveyors",
        "Fast Turnaround"
      ],
      image: "https://images.pexels.com/photos/3861964/engineer-working-on-site-3861964.jpg",
      process: [
        "Client Consultation",
        "Field Survey",
        "Data Processing",
        "Design & Documentation",
        "Review & Delivery"
      ],
      industries: [
        "Telecom", "Power", "Construction",
        "Government Projects", "Private Developers"
      ]
    },
    {
      id: 4,
      title: "Project Management",
      titleAm: "የፕሮጀክት አስተዳደር",
      icon: <HardDrive className="w-8 h-8" />,
      iconBg: "bg-purple-100 text-purple-600",
      description: "Excavation, trenching, and infrastructure deployment in challenging terrains like the Afar-Afdera region.",
      descriptionAm: "በአስቸጋሪ ቦታዎች ላይ ቁፋሮ ፣ ጉድጓድ እና የመሠረተ ልማት አሰማራ ፣ እንደ አፋር-አፋዴራ ክልል።",
      longDescription: "We specialize in managing complex infrastructure projects in Ethiopia's most challenging environments. Our experienced project managers coordinate every aspect from excavation and trenching to final deployment, ensuring successful delivery even in extreme conditions like the Afar-Afdera region.",
      features: [
        "Excavation & Trenching Services",
        "Infrastructure Deployment",
        "Project Planning & Scheduling",
        "Resource Management",
        "Quality Control & Safety",
        "Stakeholder Coordination"
      ],
      benefits: [
        "Challenging Terrain Expertise",
        "End-to-End Project Management",
        "Local Workforce Integration",
        "Risk Mitigation"
      ],
      image: "https://images.pexels.com/photos/159298/gears-cogs-machining-technology-159298.jpeg",
      process: [
        "Project Planning",
        "Resource Mobilization",
        "Excavation & Trenching",
        "Infrastructure Installation",
        "Quality Assurance",
        "Project Handover"
      ],
      industries: [
        "Telecom Infrastructure", "Power Projects",
        "Road Construction", "Water Projects"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-r from-primary-blue to-deep-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Our Core Services
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                Comprehensive engineering solutions for telecom and power infrastructure
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionLabel 
            title="What We Offer"
            subtitle="Our Expertise"
            description="Detailed engineering services tailored to your project needs"
          />
          
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                  <div className={`absolute bottom-4 left-4 p-2 rounded-xl ${service.iconBg}`}>
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {isAmharic && service.titleAm ? service.titleAm : service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {isAmharic && service.descriptionAm ? service.descriptionAm : service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Key Features:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setActiveService(service.id)}
                    className="text-safety-orange font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Modal */}
      {activeService !== 0 && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={() => setActiveService(0)}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {services.filter(s => s.id === activeService).map(service => (
              <div key={service.id}>
                <div className="relative h-64 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                  <button 
                    onClick={() => setActiveService(0)}
                    className="absolute top-4 right-4 bg-black/50 p-2 rounded-full hover:bg-black/70"
                  >
                    ✕
                  </button>
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className={`p-3 rounded-xl ${service.iconBg}`}>
                      {service.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-white">
                      {isAmharic && service.titleAm ? service.titleAm : service.title}
                    </h2>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.longDescription}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-safety-orange" />
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5 text-safety-orange" />
                        Industries We Serve
                      </h3>
                      <ul className="space-y-2">
                        {service.industries.map((industry, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <Shield className="w-4 h-4 text-blue-500" />
                            <span>{industry}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-safety-orange" />
                      Our Process
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {service.process.map((step, i) => (
                        <div key={i} className="text-center">
                          <div className="w-8 h-8 bg-safety-orange text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                            {i + 1}
                          </div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-primary-blue/10 rounded-xl p-4">
                    <h3 className="font-semibold mb-2">Ready to get started?</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Contact our team to discuss your project requirements
                    </p>
                    <div className="flex gap-4">
                      <a href="/#quote" className="inline-flex items-center gap-2 px-4 py-2 bg-safety-orange text-white rounded-lg text-sm hover:bg-orange-700 transition">
                        Request a Quote <ArrowRight className="w-4 h-4" />
                      </a>
                      <a href="tel:+251111234567" className="inline-flex items-center gap-2 px-4 py-2 border border-safety-orange text-safety-orange rounded-lg text-sm hover:bg-safety-orange hover:text-white transition">
                        <Phone className="w-4 h-4" /> Call Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      )}

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SectionLabel 
            title="Why Choose Alpha Line Engineering?"
            subtitle="Our Advantages"
            description="What sets us apart from the competition"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-gray-600 dark:text-gray-400">25+ professional engineers with years of industry experience</p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
              <p className="text-gray-600 dark:text-gray-400">ISO-certified processes and international quality standards</p>
            </div>
            
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Nationwide Reach</h3>
              <p className="text-gray-600 dark:text-gray-400">Experience working in all regions including Afar-Afdera</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-primary-blue to-deep-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Contact our team to discuss your specific project requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#quote" className="inline-flex items-center px-8 py-3 bg-safety-orange hover:bg-orange-700 rounded-lg transition">
              Request a Quote <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="mailto:info@alphalineengineering.com" className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-primary-blue transition">
              <Mail className="mr-2 w-5 h-5" /> Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;