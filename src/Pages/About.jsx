import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Shield, Target, Eye, Users, Award, MapPin, 
  Briefcase, CheckCircle, TrendingUp, Globe, 
  Clock, Phone, Mail, Calendar, BookOpen, 
  Lightbulb, Handshake, Rocket, Zap, BarChart3,
  Wifi, HardDrive, Building2, ArrowRight
} from 'lucide-react';

// Import local team images
// Place your team images in: public/images/team/
import team1 from '/images/team1.jpg';
import team2 from '/images/team2.jpg';
import team3 from '/images/team3.jpg';
import team4 from '/images/team4.jpg';


const AboutPage = () => {
  const { t, i18n } = useTranslation();
  const isAmharic = i18n.language === 'am';

  // Company statistics
  const stats = [
    { value: "2+", label: "Projects Completed", icon: Briefcase, color: "orange" },
    { value: "3+", label: "Expert Engineers", icon: Users, color: "blue" },
    { value: "1+", label: "Years Experience", icon: Clock, color: "orange" },
    { value: "98%", label: "Client Satisfaction", icon: TrendingUp, color: "blue" }
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
      icon: <Rocket className="w-8 h-8" />,
      title: "Excellence",
      titleAm: "ልቀት",
      description: "Striving for the highest standards in every project.",
      descriptionAm: "በእያንዳንዱ ፕሮጀክት ውስጥ ከፍተኛውን ደረጃ ለማሳካት መጣር።"
    }
  ];

  // Team members with LOCAL IMAGES
  const teamMembers = [
    {
      name: "Eng. Henok Badige",
      position: "General Manager",
      positionAm: "ዋና ሥራ አስፈፃሚ",
      specialty: "Infrastructure Engineering",
      specialtyAm: "መሠረተ ልማት ምህንድስና",
      experience: "4+ years",
      image: team1,
      alt: "Eng. Henok Badige "
    },
    {
      name: "Eng. Melkamu",
      position: "Technical Director",
      positionAm: "ቴክኒክ ዳይሬክተር",
      specialty: "Telecom & OSP",
      specialtyAm: "ቴሌኮም እና ኦኤስፒ",
      experience: "3+years",
      image: team2,
      alt: "Eng. Melkamu - Technical Director"
    },
    {
      name: "Eng. yigzaw",
      position: "Projects Manager",
      positionAm: "ፕሮጀክቶች አስተዳዳሪ",
      specialty: "Power & Utilities",
      specialtyAm: "ሃይል እና መገልገያዎች",
      experience: "2+ years",
      image: team3,
      alt: "Eng. yigzaw - Projects Manager"
    },
    {
      
  name: "Zenbu Badige",
  position: "Lead Finance Officer",
  positionAm: "ዋና ፋይናንስ ኃላፊ",
  specialty: "Financial Management & Accounting",
  specialtyAm: "የፋይናንስ አስተዳደር እና የሂሳብ አያያዝ",
  experience: "1+ years",
  image: team4,
  alt: "Zenbu Badige - Lead Finance Officer"
}
    
  ];

  // Expertise areas
  const expertiseAreas = [
    { name: "OSP Engineering", nameAm: "ኦኤስፒ ምህንድስና", icon: <Globe className="w-5 h-5" /> },
    { name: "Fiber Optic Installation", nameAm: "የፋይበር ኦፕቲክ መትከል", icon: <Wifi className="w-5 h-5" /> },
    { name: "Utility Pole Installation", nameAm: "የመገልገያ ምሰሶ መትከል", icon: <Zap className="w-5 h-5" /> },
    { name: "Power Distribution", nameAm: "የኤሌክትሪክ ማከፋፈያ", icon: <Zap className="w-5 h-5" /> },
    { name: "Site Survey & Design", nameAm: "የቦታ ጥናት እና ዲዛይን", icon: <MapPin className="w-5 h-5" /> },
    { name: "Project Management", nameAm: "የፕሮጀክት አስተዳደር", icon: <Briefcase className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {t('about.title')}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              {t('about.profileDesc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ethiopia's Leading Engineering Firm
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('about.profileDesc')}
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With our main office strategically located in Addis Ababa, we serve clients across all regions of Ethiopia, 
                including challenging terrains like the Shashemene-Oromia region.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Addis Ababa, Ethiopia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700">Est. 2018</span>
                </div>
              </div>

              
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                    <stat.icon className={`w-10 h-10 mx-auto mb-3 text-${stat.color}-500`} />
                    <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('about.mission')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.missionText')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{t('about.vision')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.visionText')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide our work and relationships</p>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-md transition-all border border-gray-200"
              >
                <div className="text-orange-500 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {isAmharic && value.titleAm ? value.titleAm : value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {isAmharic && value.descriptionAm ? value.descriptionAm : value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with LOCAL IMAGES */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('about.team')}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t('about.teamDesc')}</p>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all border border-gray-200"
              >
                {/* Team Member Image */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-linear-to-br from-blue-600 to-blue-800">
                  <img 
                    src={member.image} 
                    alt={member.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center"><Users class="w-10 h-10 text-white" /></div>';
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-orange-600 text-sm font-medium mb-2">
                  {isAmharic && member.positionAm ? member.positionAm : member.position}
                </p>
                <p className="text-gray-500 text-xs">
                  {isAmharic && member.specialtyAm ? member.specialtyAm : member.specialty}
                </p>
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-400">{member.experience}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Areas of Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Technical capabilities that set us apart</p>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {expertiseAreas.map((area, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all cursor-default"
              >
                {area.icon}
                {isAmharic && area.nameAm ? area.nameAm : area.name}
              </motion.span>
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
              Ready to Work With Ethiopia's Leading Engineering Firm?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Contact us to discuss your next infrastructure project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             
              <a
                href="tel:+251933708486"
                className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
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