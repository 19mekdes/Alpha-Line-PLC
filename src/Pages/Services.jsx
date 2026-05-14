import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Wifi,
  Zap,
  PenTool,
  HardDrive,
  CheckCircle,
  ArrowRight,
  MapPin,
  Clock,
  Users,
  Shield,
  Phone,
  Mail,
  Globe,
  Award,
  TrendingUp,
  Briefcase,
  Ruler,
  Cable,
  Settings,
} from "lucide-react";

const ServicesPage = () => {
  const { t, i18n } = useTranslation();
  const isAmharic = i18n.language === "am";
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Telecom Infrastructure",
      titleAm: "ቴሌኮም መሠረተ ልማት",
      shortDesc:
        "Fiber optic installation, OSP design (HLD/LLD), and tower maintenance",
      shortDescAm: "የፋይበር ኦፕቲክ መትከል፣ የOSP ዲዛይን (HLD/LLD) እና የማማ ጥገና",
      description:
        "We provide end-to-end telecom infrastructure solutions ensuring reliable connectivity across Ethiopia. Our team specializes in fiber optic networks, communication tower maintenance, and OSP engineering for telecom operators and government institutions.",
      longDescription:
        "With years of experience in Ethiopia's telecommunications sector, Alpha Line Engineering PLC delivers comprehensive infrastructure solutions that form the backbone of modern communication networks. Our expertise spans from initial site surveys to final commissioning, ensuring seamless integration with existing systems. We work in both urban and remote areas, including challenging terrains like the Afar region, bringing connectivity to underserved communities.",
      icon: <Wifi className="w-10 h-10" />,
      iconBg: "bg-blue-100 text-blue-600",
      image:
        "https://i.pinimg.com/736x/0d/63/a4/0d63a4192b787c026faf34860f99be06.jpg",
      features: [
        "Fiber Optic Installation (Aerial & Underground)",
        "OSP Design (HLD/LLD) using AutoCAD & GIS",
        "Tower Maintenance & Inspection",
        "Network Deployment & Integration",
        "Site Acquisition & Permitting",
        "Quality Testing & Commissioning",
      ],
      process: [
        "Site Survey",
        "Route Design",
        "Installation",
        "Testing",
        "Handover",
      ],
      industries: [
        "Telecom Operators",
        "ISPs",
        "Government",
        "Enterprise Networks",
      ],
    },
    {
      id: 2,
      title: "Power & Utilities",
      titleAm: "ሃይል እና መገልገያዎች",
      shortDesc:
        "Utility pole installation, electrical power projects, and hardware supply",
      shortDescAm: "የመገልገያ ምሰሶ መትከል፣ የኤሌክትሪክ ሃይል ፕሮጀክቶች እና ሃርድዌር አቅርቦት",
      description:
        "We deliver reliable power infrastructure solutions bringing electricity to communities and industries. From utility pole installation to complete electrical system design, we ensure safe and efficient power distribution across Ethiopia.",
      longDescription:
        "Access to reliable electricity is fundamental for development. Alpha Line Engineering PLC is committed to expanding Ethiopia's power infrastructure through high-quality installation and maintenance services. Our team has successfully completed projects in remote areas, including the Afar-Afdera region, overcoming extreme temperatures and difficult terrain. We supply premium hardware components including stay rods, pole hardware, transformers, and complete electrical systems.",
      icon: <Zap className="w-10 h-10" />,
      iconBg: "bg-orange-100 text-orange-600",
      image:
        "https://i.pinimg.com/1200x/02/28/38/02283884538fcfb566a7db60d2d010d8.jpg",
      features: [
        "Utility Pole Installation (Wood, Concrete, Steel)",
        "Stay Rods & Pole Hardware Supply",
        "Electrical Power Projects (LV & MV)",
        "Transformer Installation",
        "Power Distribution Lines",
        "Rural Electrification Projects",
      ],
      process: [
        "Site Assessment",
        "Material Sourcing",
        "Pole Installation",
        "Line Stringing",
        "Commissioning",
      ],
      industries: [
        "Utility Companies",
        "Industrial Parks",
        "Construction Sites",
        "Rural Communities",
      ],
    },
    {
      id: 3,
      title: "Engineering Consultancy",
      titleAm: "የምህንድስና ማማከር",
      shortDesc: "Site surveys, AutoCAD documentation, and technical reporting",
      shortDescAm: "የቦታ ጥናት፣ የኦቶካድ ሰነድ እና የቴክኒክ ሪፖርት",
      description:
        "Our consultancy services provide the technical foundation for successful infrastructure projects. We conduct detailed site surveys, create precise AutoCAD documentation, and deliver comprehensive technical reports.",
      longDescription:
        "Before any successful infrastructure project begins, thorough planning and accurate documentation are essential. Our engineering consultancy team brings decades of combined experience to every project, ensuring that your investment is backed by solid data and professional analysis. We use the latest surveying equipment and software to deliver precise measurements, detailed designs, and actionable recommendations for telecom and power projects.",
      icon: <PenTool className="w-10 h-10" />,
      iconBg: "bg-green-100 text-green-600",
      image:
        "https://i.pinimg.com/736x/c2/9b/74/c29b74924d035a5dafcbf55130f34cae.jpg",
      features: [
        "Topographic & Route Surveys",
        "AutoCAD Design & Documentation",
        "Technical Reporting & Analysis",
        "Feasibility Studies",
        "Environmental Impact Assessment",
        "Project Cost Estimation",
      ],
      process: [
        "Consultation",
        "Field Survey",
        "Data Processing",
        "Design",
        "Delivery",
      ],
      industries: [
        "Telecom",
        "Power",
        "Construction",
        "Government",
        "Private Developers",
      ],
    },
    {
      id: 4,
      title: "Project Management",
      titleAm: "የፕሮጀክት አስተዳደር",
      shortDesc:
        "Excavation, trenching, and infrastructure deployment in challenging terrains",
      shortDescAm: "በአስቸጋሪ ቦታዎች ላይ ቁፋሮ ፣ ጉድጓድ እና የመሠረተ ልማት አሰማራ",
      description:
        "We specialize in managing complex infrastructure projects in Ethiopia's most challenging environments, including the Afar-Afdera region with extreme temperatures and difficult terrain.",
      longDescription:
        "Project management in challenging environments requires specialized expertise, careful planning, and adaptive strategies. Alpha Line Engineering PLC has proven experience delivering successful projects in the Afar-Afdera region, where temperatures exceed 45°C and terrain is extremely difficult. Our project managers coordinate every aspect from excavation and trenching to final deployment, ensuring successful delivery even under the most demanding conditions.",
      icon: <HardDrive className="w-10 h-10" />,
      iconBg: "bg-purple-100 text-purple-600",
      image:
        "https://i.pinimg.com/1200x/0d/ec/bd/0decbd31360c91cc39239912c36b1aca.jpg",
      features: [
        "Excavation & Trenching Services",
        "Infrastructure Deployment",
        "Project Planning & Scheduling",
        "Resource Management",
        "Quality Control & Safety",
        "Stakeholder Coordination",
      ],
      process: [
        "Planning",
        "Mobilization",
        "Excavation",
        "Installation",
        "Handover",
      ],
      industries: [
        "Telecom Infrastructure",
        "Power Projects",
        "Road Construction",
        "Water Projects",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - White Background with Blue Text */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-700 mb-4">
              {isAmharic ? "ዋና አገልግሎቶቻችን" : "Our Core Services"}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {isAmharic
                ? "ለቴሌኮም እና ለኤሌክትሪክ መሠረተ ልማት አጠቃላይ የምህንድስና መፍትሄዎች"
                : "Comprehensive engineering solutions for telecom and power infrastructure across Ethiopia"}
            </p>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-6 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Services Grid - White Background */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group border border-gray-100"
                onClick={() => setActiveService(service)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                  <div
                    className={`absolute bottom-4 left-4 p-2 rounded-xl ${service.iconBg}`}
                  >
                    {service.icon}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 line-clamp-1">
                    {isAmharic && service.titleAm
                      ? service.titleAm
                      : service.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                    {isAmharic && service.shortDescAm
                      ? service.shortDescAm
                      : service.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {service.features.slice(0, 2).map((feature, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        {feature.length > 20
                          ? feature.substring(0, 20) + "..."
                          : feature}
                      </span>
                    ))}
                  </div>
                  <button className="text-orange-500 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    {isAmharic ? "ተጨማሪ ይወቁ" : "Learn More"}{" "}
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {isAmharic
                ? "የአገልግሎት አሰጣጥ ሂደታችን"
                : "Our Service Delivery Process"}
            </h2>
            <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                step: "01",
                title: isAmharic ? "ምክክር" : "Consultation",
                desc: isAmharic
                  ? "ፍላጎቶችዎን እንገነዘባለን"
                  : "Understanding your needs",
              },
              {
                step: "02",
                title: isAmharic ? "የቦታ ጥናት" : "Site Survey",
                desc: isAmharic ? "ዝርዝር የቦታ ምርመራ" : "Detailed site assessment",
              },
              {
                step: "03",
                title: isAmharic ? "ንድፍ እና እቅድ" : "Design & Planning",
                desc: isAmharic ? "የኦቶካድ ሰነድ" : "AutoCAD documentation",
              },
              {
                step: "04",
                title: isAmharic ? "ትግበራ" : "Implementation",
                desc: isAmharic ? "ሙያዊ አፈጻጸም" : "Professional execution",
              },
              {
                step: "05",
                title: isAmharic ? "ሙከራ" : "Testing",
                desc: isAmharic ? "ጥራት ማረጋገጫ" : "Quality assurance",
              },
              {
                step: "06",
                title: isAmharic ? "ድጋፍ" : "Support",
                desc: isAmharic ? "ቀጣይ እርዳታ" : "Ongoing maintenance",
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
              >
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-orange-600 font-bold text-sm">
                    {step.step}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-xs">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Orange Button */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {isAmharic
                ? "የምህንድስና መፍትሄ ይፈልጋሉ?"
                : "Need a Custom Engineering Solution?"}
            </h2>
            <p className="text-gray-500 mb-6">
              {isAmharic
                ? "የፕሮጀክት ፍላጎቶችዎን ለመወያየት ቡድናችንን ያግኙ"
                : "Contact our team to discuss your specific project requirements"}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300"
            >
              {isAmharic ? "ዋጋ ይጠይቁ" : "Request a Quote"}{" "}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {activeService && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setActiveService(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-xl ${activeService.iconBg}`}>
                  {activeService.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  {isAmharic && activeService.titleAm
                    ? activeService.titleAm
                    : activeService.title}
                </h2>
              </div>
              <button
                onClick={() => setActiveService(null)}
                className="p-2 hover:bg-gray-100 rounded-lg text-gray-500"
              >
                ✕
              </button>
            </div>

            <div className="p-5">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />

              <p className="text-gray-700 mb-5 text-sm leading-relaxed">
                {isAmharic
                  ? activeService.longDescriptionAm ||
                    activeService.longDescription ||
                    activeService.description
                  : activeService.longDescription || activeService.description}
              </p>

              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <h3 className="font-bold text-md mb-2 flex items-center gap-2 text-gray-800">
                    <CheckCircle className="w-4 h-4 text-green-500" />{" "}
                    {isAmharic ? "ቁልፍ ባህሪያት" : "Key Features"}
                  </h3>
                  <ul className="space-y-1">
                    {activeService.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-600 text-xs"
                      >
                        <CheckCircle className="w-3 h-3 text-green-500" />{" "}
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-md mb-2 flex items-center gap-2 text-gray-800">
                    <Users className="w-4 h-4 text-blue-500" />{" "}
                    {isAmharic ? "የምንሰራላቸው ዘርፎች" : "Industries We Serve"}
                  </h3>
                  <ul className="space-y-1">
                    {activeService.industries.map((industry, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-600 text-xs"
                      >
                        <Shield className="w-3 h-3 text-blue-500" /> {industry}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 mb-5">
                <h3 className="font-bold text-sm mb-2 text-gray-800">
                  {isAmharic ? "ሂደታችን" : "Our Process"}
                </h3>
                <div className="grid grid-cols-5 gap-2 text-center text-xs">
                  {activeService.process.map((step, i) => (
                    <div key={i}>
                      <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-1 text-xs">
                        {i + 1}
                      </div>
                      <span className="text-gray-500 text-xs">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                onClick={() => setActiveService(null)}
                className="block w-full text-center px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all text-sm"
              >
                {isAmharic ? "ይህን አገልግሎት ይጠይቁ" : "Request This Service"}{" "}
                <ArrowRight className="inline ml-1 w-3 h-3" />
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
