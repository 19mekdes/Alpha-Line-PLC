import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Shield, Target, Eye, Users, Award, MapPin, 
  Briefcase, CheckCircle, TrendingUp, Globe, 
  Clock, Phone, Mail, Calendar, BookOpen, 
  Lightbulb, Handshake, Rocket, Zap, BarChart3
} from 'lucide-react';
import SectionLabel from '../components/SectionLabel';

const AboutPage = () => {
  const { t, i18n } = useTranslation();
  const isAmharic = i18n.language === 'am';

  // Company stats
  const stats = [
    { value: "10+", label: "Years of Excellence", icon: Award, color: "safety-orange" },
    { value: "50+", label: "Projects Completed", icon: Briefcase, color: "primary-blue" },
    { value: "25+", label: "Expert Engineers", icon: Users, color: "safety-orange" },
    { value: "98%", label: "Client Satisfaction", icon: TrendingUp, color: "primary-blue" }
  ];

  // Core values
  const coreValues = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Reliability",
      titleAm: "አስተማማኝነት",
      description: "We deliver on our promises with consistent, high-quality results.",
      descriptionAm: "ቃል ኪዳናችንን በተከታታይ እና ከፍተኛ ጥራት ባለው ውጤት እንፈጽማለን።"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      titleAm: "ፈጠራ",
      description: "Embracing cutting-edge technology and creative solutions.",
      descriptionAm: "ዘመናዊ ቴክኖሎጂ እና የፈጠራ መፍትሄዎችን እንጠቀማለን።"
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Integrity",
      titleAm: "ታማኝነት",
      description: "Transparent, ethical practices in all our dealings.",
      descriptionAm: "በሁሉም ግንኙነቶቻችን ውስጥ ግልጽ እና ስነምግባር ያለው አሰራር።"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Excellence",
      titleAm: "ልቀት",
      description: "Striving for the highest standards in every project.",
      descriptionAm: "በእያንዳንዱ ፕሮጀክት ውስጥ ከፍተኛውን ደረጃ ለማሳካት መጣር።"
    }
  ];

  // Team members
  const teamMembers = [
    {
      name: "Eng. Tekle Berhan",
      position: "Chief Executive Officer",
      positionAm: "ዋና ሥራ አስፈፃሚ",
      specialty: "Infrastructure Engineering",
      specialtyAm: "መሠረተ ልማት ምህንድስና",
      experience: "20+ years",
      image: null,
      icon: <Users className="w-8 h-8" />
    },
    {
      name: "Eng. Almaz Desta",
      position: "Technical Director",
      positionAm: "ቴክኒክ ዳይሬክተር",
      specialty: "Telecom & OSP",
      specialtyAm: "ቴሌኮም እና ኦኤስፒ",
      experience: "15+ years",
      image: null,
      icon: <Users className="w-8 h-8" />
    },
    {
      name: "Eng. Worku Alemayehu",
      position: "Projects Manager",
      positionAm: "ፕሮጀክቶች አስተዳዳሪ",
      specialty: "Power & Utilities",
      specialtyAm: "ሃይል እና መገልገያዎች",
      experience: "12+ years",
      image: null,
      icon: <Users className="w-8 h-8" />
    },
    {
      name: "Eng. Marta Getachew",
      position: "Lead Design Engineer",
      positionAm: "ዋና ዲዛይን መሐንዲስ",
      specialty: "AutoCAD & Documentation",
      specialtyAm: "ኦቶካድ እና ሰነድ",
      experience: "10+ years",
      image: null,
      icon: <Users className="w-8 h-8" />
    }
  ];

  // Expertise areas
  const expertiseAreas = [
    { name: "OSP Engineering", nameAm: "ኦኤስፒ ምህንድስና", icon: <Globe className="w-5 h-5" /> },
    { name: "Fiber Optic Installation", nameAm: "የፋይበር ኦፕቲክ መትከል", icon: <Zap className="w-5 h-5" /> },
    { name: "Utility Pole Installation", nameAm: "የመገልገያ ምሰሶ መትከል", icon: <BarChart3 className="w-5 h-5" /> },
    { name: "Power Distribution", nameAm: "የኤሌክትሪክ ማከፋፈያ", icon: <Zap className="w-5 h-5" /> },
    { name: "Site Survey & Design", nameAm: "የቦታ ጥናት እና ዲዛይን", icon: <MapPin className="w-5 h-5" /> },
    { name: "Project Management", nameAm: "የፕሮጀክት አስተዳደር", icon: <Briefcase className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-blue to-deep-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1 bg-safety-orange rounded-full text-sm font-semibold mb-4">
                Grade-1 Engineering Firm
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {t('about.title')}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
                {t('about.profileDesc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SectionLabel 
                title={t('about.profile')}
                subtitle={t('about.subtitle')}
                centered={false}
              />
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {t('about.profileDesc')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                With our main office strategically located in Addis Ababa, we serve clients across all regions of Ethiopia, 
                including challenging terrains like the Afar-Afdera region. Our commitment to quality and safety, combined 
                with our technical expertise, makes us the preferred partner for infrastructure development projects.
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-safety-orange" />
                  <span className="text-gray-700 dark:text-gray-300">Addis Ababa, Ethiopia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-safety-orange" />
                  <span className="text-gray-700 dark:text-gray-300">Est. 2015</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-primary-blue/10 text-primary-blue rounded-full text-sm">ISO Certified</span>
                <span className="px-3 py-1 bg-safety-orange/10 text-safety-orange rounded-full text-sm">Grade-1 License</span>
                <span className="px-3 py-1 bg-green-500/10 text-green-600 rounded-full text-sm">24/7 Support</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center">
                  <stat.icon className={`w-10 h-10 mx-auto mb-3 text-${stat.color}`} />
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-safety-orange/10 rounded-2xl flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-safety-orange" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{t('about.mission')}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('about.missionText')}
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mb-4">
                <Eye className="w-8 h-8 text-primary-blue" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{t('about.vision')}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('about.visionText')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionLabel 
            title="Our Core Values"
            subtitle="What Drives Us"
            description="The principles that guide our work and relationships"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-lg transition-all"
              >
                <div className="text-safety-orange mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {isAmharic && value.titleAm ? value.titleAm : value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {isAmharic && value.descriptionAm ? value.descriptionAm : value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SectionLabel 
            title={t('about.team')}
            subtitle="Our People"
            description="Meet the experts behind our success"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary-blue to-deep-blue rounded-full flex items-center justify-center">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full rounded-full object-cover" />
                  ) : (
                    <Users className="w-10 h-10 text-white" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-safety-orange text-sm font-medium mb-2">
                  {isAmharic && member.positionAm ? member.positionAm : member.position}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs mb-3">
                  {isAmharic && member.specialtyAm ? member.specialtyAm : member.specialty}
                </p>
                <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  <span>{member.experience}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Team Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('about.teamDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionLabel 
            title="Areas of Expertise"
            subtitle="Technical Capabilities"
            description="Specialized skills that set us apart"
          />
          <div className="flex flex-wrap justify-center gap-3">
            {expertiseAreas.map((area, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:bg-safety-orange hover:text-white transition-all cursor-default"
              >
                {area.icon}
                {isAmharic && area.nameAm ? area.nameAm : area.name}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-blue to-deep-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work With Ethiopia's Leading Engineering Firm?
            </h2>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
              Contact us to discuss your next infrastructure project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#quote"
                className="inline-flex items-center px-6 py-3 bg-safety-orange hover:bg-orange-700 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Request a Quote
              </a>
              <a
                href="tel:+251111234567"
                className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-primary-blue text-white font-semibold rounded-lg transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;