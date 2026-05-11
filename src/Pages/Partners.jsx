import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
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
  TrendingUp
} from 'lucide-react';
import SectionLabel from '../components/SectionLabel';

const PartnersPage = () => {
  const { t, i18n } = useTranslation();
  const isAmharic = i18n.language === 'am';
  const partnerCategories = [
    {
      title: "Strategic Partners",
      titleAm: "ስልታዊ አጋሮች",
      icon: <Handshake className="w-8 h-8" />,
      partners: [
        {
          name: "Bahir Dar Institute of Technology",
          nameAm: "ባህር ዳር የቴክኖሎጂ ተቋም",
          logo: null,
          description: "Academic partnership for research, innovation, and technical training programs.",
          descriptionAm: "ለምርምር፣ ለፈጠራ እና ለቴክኒክ ስልጠና ፕሮግራሞች የአካዳሚክ ትብብር።",
          year: "2018",
          collaboration: ["Research & Development", "Student Internships", "Technical Workshops", "Joint Projects"]
        },
        {
          name: "Alpha Line Engineering PLC",
          nameAm: "አልፋ መስመር ኢንጂነሪንግ ኃላፊነቱ የተወሰነ የግል ማህበር",
          logo: null,
          description: "Parent company providing strategic guidance and resource support.",
          descriptionAm: "ስልታዊ መመሪያ እና የሃብት ድጋፍ የሚሰጥ የወላጅ ኩባንያ።",
          year: "2015",
          collaboration: ["Strategic Planning", "Resource Sharing", "Quality Control", "Technical Oversight"]
        }
      ]
    },
    {
      title: "Technical Partners",
      titleAm: "ቴክኒካል አጋሮች",
      icon: <Users className="w-8 h-8" />,
      partners: [
        {
          name: "AGT Engineering",
          nameAm: "ኤጂቲ ኢንጂነሪንግ",
          logo: null,
          description: "Collaboration on large-scale infrastructure projects and technical consulting.",
          descriptionAm: "በትላልቅ የመሠረተ ልማት ፕሮጀክቶች እና የቴክኒክ ማማከር ላይ ትብብር።",
          year: "2019",
          collaboration: ["Infrastructure Projects", "Technical Consulting", "Quality Assurance", "Project Management"]
        }
      ]
    },
    {
      title: "Government & Public Sector",
      titleAm: "መንግስታዊ እና የህዝብ ዘርፍ",
      icon: <Building2 className="w-8 h-8" />,
      partners: [
        {
          name: "Ethio Telecom",
          nameAm: "ኢትዮ ቴሌኮም",
          logo: null,
          description: "Telecommunications infrastructure development and fiber optic network deployment.",
          descriptionAm: "የቴሌኮሙኒኬሽን መሠረተ ልማት ልማት እና የፋይበር ኦፕቲክ ኔትወርክ መዘርጋት።",
          year: "2020",
          collaboration: ["Fiber Optic Networks", "Tower Installation", "Infrastructure Maintenance", "Network Expansion"]
        },
        {
          name: "EEUC (Ethiopian Electric Utility)",
          nameAm: "ኢትዮጵያ ኤሌክትሪክ አገልግሎት",
          logo: null,
          description: "Power distribution and utility pole installation projects across Ethiopia.",
          descriptionAm: "በኢትዮጵያ ውስጥ የኤሌክትሪክ ማከፋፈያ እና የመገልገያ ምሰሶ መትከል ፕሮጀክቶች።",
          year: "2021",
          collaboration: ["Power Distribution", "Utility Pole Installation", "Grid Expansion", "Rural Electrification"]
        }
      ]
    }
  ];

  // Testimonials from Partners
  const partnerTestimonials = [
    {
      name: "Dr. Tekle Berhan",
      position: "Director, Bahir Dar Institute of Technology",
      content: "Alpha Line Engineering has been an exceptional partner in our research and training initiatives. Their technical expertise and commitment to quality are outstanding.",
      rating: 5
    },
    {
      name: "Ato Worku Alemayehu",
      position: "Project Manager, Ethio Telecom",
      content: "Working with Alpha Line Engineering on our fiber optic expansion has been a great experience. They deliver on time and maintain high quality standards.",
      rating: 5
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Technical Excellence",
      titleAm: "ቴክኒካል ልቀት",
      description: "Access to cutting-edge engineering expertise and best practices"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Quality Assurance",
      titleAm: "የጥራት ማረጋገጫ",
      description: "ISO-certified processes and international standards compliance"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Nationwide Reach",
      titleAm: "ሀገር አቀፍ ተደራሽነት",
      description: "Capability to execute projects across all regions of Ethiopia"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-r from-primary-blue to-deep-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Our Partners & Collaborators
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
              Building strong relationships with leading institutions to deliver excellence in infrastructure development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {partnerCategories.map((category, catIdx) => (
            <div key={catIdx} className="mb-16 last:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="text-safety-orange">
                  {category.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  {isAmharic && category.titleAm ? category.titleAm : category.title}
                </h2>
                <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700 ml-4" />
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.partners.map((partner, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-primary-blue/10 rounded-xl flex items-center justify-center shrink-0">
                        {partner.logo ? (
                          <img src={partner.logo} alt={partner.name} className="w-12 h-12 object-contain" />
                        ) : (
                          <Building2 className="w-8 h-8 text-primary-blue" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {isAmharic && partner.nameAm ? partner.nameAm : partner.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-safety-orange">Partner Since {partner.year}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {isAmharic && partner.descriptionAm ? partner.descriptionAm : partner.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Areas of Collaboration:</h4>
                      <div className="flex flex-wrap gap-2">
                        {partner.collaboration.map((item, i) => (
                          <span key={i} className="text-xs bg-primary-blue/10 text-primary-blue dark:text-blue-400 px-2 py-1 rounded-full">
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SectionLabel 
            title="Why Partner With Us"
            subtitle="Collaboration Benefits"
            description="What makes Alpha Line Engineering a trusted partner"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-safety-orange mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {isAmharic && benefit.titleAm ? benefit.titleAm : benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionLabel 
            title="What Our Partners Say"
            subtitle="Testimonials"
            description="Feedback from our valued collaborators"
          />
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {partnerTestimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic mb-4">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-blue rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20 bg-linear-to-r from-primary-blue to-deep-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in Partnering With Us?
            </h2>
            <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
              Let's work together to build Ethiopia's infrastructure future
            </p>
            <a
              href="mailto:partners@alphalineengineering.com"
              className="inline-flex items-center px-8 py-3 bg-safety-orange hover:bg-orange-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Become a Partner
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default PartnersPage;