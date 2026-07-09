import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Building2,
  Handshake,
  Award,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  Globe,
  Briefcase,
  Heart,
  Target,
  TrendingUp,
  MapPin,
  Calendar,
  Phone,
  Mail,
  Send,
  Lock,
  FileText,
  Map,
  Download,
  Eye,
  ExternalLink,
} from "lucide-react";

const PartnersPage = () => {
  const { t, i18n } = useTranslation();
  const isAmharic = i18n.language === "am";
  const [showPortal, setShowPortal] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Partner Categories
  const partnerCategories = [
    {
      title: "Strategic Partners",
      titleAm: "ስልታዊ አጋሮች",
      icon: <Handshake className="w-8 h-8" />,
      partners: [
        {
          name: "Bahir Dar Institute of Technology",
          nameAm: "ባህር ዳር የቴክኖሎጂ ተቋም",
          description:
            "Academic partnership for research, innovation, and technical training programs.",
          descriptionAm: "ለምርምር፣ ለፈጠራ እና ለቴክኒክ ስልጠና ፕሮግራሞች የአካዳሚክ ትብብር።",
          year: "2018",
          collaboration: [
            "Research & Development",
            "Student Internships",
            "Technical Workshops",
            "Joint Projects",
          ],
        },
        {
          name: "Alpha Line Engineering PLC",
          nameAm: "አልፋላይን ኢንጂነሪንግ ኃላ/የተ/የግ/ማህበር",
          description:
            "Parent company providing strategic guidance and resource support.",
          descriptionAm: "ስልታዊ መመሪያ እና የሃብት ድጋፍ የሚሰጥ የወላጅ ኩባንያ።",
          year: "2018",
          collaboration: [
            "Strategic Planning",
            "Resource Sharing",
            "Quality Control",
            "Technical Oversight",
          ],
        },
      ],
    },
    {
      title: "Technical Partners",
      titleAm: "ቴክኒካል አጋሮች",
      icon: <Users className="w-8 h-8" />,
      partners: [
        {
          name: "AGT Engineering",
          nameAm: "ኤጂቲ ኢንጂነሪንግ",
          description:
            "Collaboration on large-scale infrastructure projects and technical consulting.",
          descriptionAm: "በትላልቅ የመሠረተ ልማት ፕሮጀክቶች እና የቴክኒክ ማማከር ላይ ትብብር።",
          year: "2018",
          collaboration: [
            "Infrastructure Projects",
            "Technical Consulting",
            "Quality Assurance",
            "Project Management",
          ],
        },
        {
          name: "Ethio Telecom",
          nameAm: "ኢትዮ ቴሌኮም",
          description:
            "Telecommunications infrastructure development partnership.",
          descriptionAm: "የቴሌኮሙኒኬሽን መሠረተ ልማት ልማት ትብብር።",
          year: "2026",
          collaboration: [
            "Fiber Optic Networks",
            "Tower Installation",
            "Infrastructure Maintenance",
            "Network Expansion",
          ],
        },
      ],
    },
  ];

  // Handle form input change
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Quote Request:", formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowQuoteForm(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  // Sample project data for tracking portal
  const projectData = {
    projectName: "Afdera Utility Infrastructure Project",
    status: "Completed",
    progress: 100,
    startDate: "March 2017",
    endDate: "March 2018",
    location: "Afar-Afdera Region",
    fiberDeployed: "50+ KM",
    utilityPoles: "200+",
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - White Background */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-700 mb-4">
              {isAmharic ? "ደንበኞቻችን እና አጋሮቻችን" : "Our Clients & Partners"}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {isAmharic
                ? "ከመሪ ተቋማት እና ድርጅቶች ጋር በመሆን መስራታችን ኩራት ይሰማናል"
                : "We are proud to work with leading institutions and organizations"}
            </p>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-6 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Partners Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {partnerCategories.map((category, catIdx) => (
            <div key={catIdx} className="mb-16 last:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="text-orange-500">{category.icon}</div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {isAmharic && category.titleAm
                    ? category.titleAm
                    : category.title}
                </h2>
                <div className="flex-1 h-px bg-gray-200 ml-4" />
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.partners.map((partner, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                        <Building2 className="w-8 h-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {isAmharic && partner.nameAm
                            ? partner.nameAm
                            : partner.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-orange-500">
                            Partner Since {partner.year}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">
                      {isAmharic && partner.descriptionAm
                        ? partner.descriptionAm
                        : partner.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Areas of Collaboration:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {partner.collaboration.map((item, i) => (
                          <span
                            key={i}
                            className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isAmharic ? "ቴክኒካል ባህሪያት" : "Technical Features"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isAmharic
                ? "ለደንበኞቻችን የላቀ አገልግሎት ለመስጠት"
                : "Enhanced tools for better client service"}
            </p>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Tracking Portal Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Lock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {isAmharic ? "የፕሮጀክት ክትትል ፖርታል" : "Project Tracking Portal"}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                {isAmharic
                  ? "የፕሮጀክት እድገትን እና የመስክ መረጃን ለመከታተል ደህንነቱ የተጠበቀ አካባቢ"
                  : "Secure area to track project progress and view field data"}
              </p>
              <button
                onClick={() => setShowPortal(!showPortal)}
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
              >
                <Eye className="w-4 h-4 mr-2" />
                {showPortal ? "Hide Demo" : "View Demo"}
              </button>

              {showPortal && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-4 p-4 bg-gray-100 rounded-lg"
                >
                  <h4 className="font-semibold mb-3">
                    Project: {projectData.projectName}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Status:</span>
                      <span className="text-green-600 font-semibold">
                        {projectData.status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Progress:</span>
                      <div className="w-32 bg-gray-300 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${projectData.progress}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fiber Deployed:</span>
                      <span>{projectData.fiberDeployed}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Utility Poles:</span>
                      <span>{projectData.utilityPoles}</span>
                    </div>
                    <button className="w-full mt-3 px-3 py-2 bg-blue-600 text-white rounded-lg text-sm flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" /> Download Excel Report
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Request for Quote Form Card - Always Visible */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Send className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {isAmharic ? "የዋጋ ጥያቄ ቅጽ" : "Request for Quote"}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                {isAmharic
                  ? "ለፕሮጀክትዎ ፈጣን ዋጋ ለማግኘት ቅጹን ይሙሉ"
                  : "Fill out the form to get a quick quote for your project"}
              </p>

              {/* FORM ALWAYS VISIBLE */}
              <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                {formSubmitted ? (
                  <div className="p-4 bg-green-100 text-green-700 rounded-lg text-center">
                    <CheckCircle className="w-6 h-6 mx-auto mb-2" />
                    {isAmharic
                      ? "ጥያቄዎ ተልኳል! በቅርቡ እንመልሳለን።"
                      : "Request sent! We'll get back to you soon."}
                  </div>
                ) : (
                  <>
                    <input
                      type="text"
                      name="name"
                      placeholder={isAmharic ? "ሙሉ ስም" : "Full Name"}
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900"
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder={isAmharic ? "ስልክ ቁጥር" : "Phone Number"}
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900"
                      required
                    />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900 cursor-pointer"
                      required
                    >
                      <option value="">
                        {isAmharic ? "አገልግሎት ይምረጡ" : "Select Service"}
                      </option>
                      <option value="Telecom Infrastructure">
                        {isAmharic ? "ቴሌኮም መሠረተ ልማት" : "Telecom Infrastructure"}
                      </option>
                      <option value="Power & Utilities">
                        {isAmharic ? "ሃይል እና መገልገያዎች" : "Power & Utilities"}
                      </option>
                      <option value="Engineering Consultancy">
                        {isAmharic ? "የምህንድስና ማማከር" : "Engineering Consultancy"}
                      </option>
                      <option value="Project Management">
                        {isAmharic ? "የፕሮጀክት አስተዳደር" : "Project Management"}
                      </option>
                    </select>
                    <textarea
                      name="message"
                      placeholder={
                        isAmharic ? "የፕሮጀክት ዝርዝሮች" : "Project Details"
                      }
                      rows="3"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-gray-900 resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      {isAmharic ? "ጥያቄ ላኩ" : "Send Request"}
                    </button>
                  </>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isAmharic ? "የትብብር ጥቅሞች" : "Why Partner With Us"}
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-10 h-10" />,
                title: "Technical Excellence",
                titleAm: "ቴክኒካል ልቀት",
                description:
                  "Access to cutting-edge engineering expertise and best practices",
              },
              {
                icon: <Target className="w-10 h-10" />,
                title: "Quality Assurance",
                titleAm: "የጥራት ማረጋገጫ",
                description:
                  "ISO-certified processes and international standards compliance",
              },
              {
                icon: <Globe className="w-10 h-10" />,
                title: "Nationwide Reach",
                titleAm: "ሀገር አቀፍ ተደራሽነት",
                description:
                  "Capability to execute projects across all regions of Ethiopia",
              },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <div className="text-orange-500 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {isAmharic && benefit.titleAm
                    ? benefit.titleAm
                    : benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isAmharic
                ? "ከእኛ ጋር ለመተባበር ፍላጎት አለዎት?"
                : "Interested in Partnering With Us?"}
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              {isAmharic
                ? "የኢትዮጵያን የመሠረተ ልማት ግንባታ አንድ ላይ እንስራ"
                : "Let's work together to build Ethiopia's infrastructure future"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowQuoteForm(true)}
                className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300"
              >
                {isAmharic ? "አጋር ይሁኑ" : "Become a Partner"}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <a
                href="mailto:henokbdg12@gmail.com"
                className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
              >
                <Mail className="mr-2 w-5 h-5" />
                {isAmharic ? "ኢሜይል ላኩ" : "Email Us"}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
