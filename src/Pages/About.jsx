// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Target, 
  Users, 
  Shield, 
  Globe,
  Calendar,
  MapPin,
  Award,
  TrendingUp,
  Briefcase,
  Heart,
  Lightbulb,
  Handshake,
  Rocket,
  Clock,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
// eslint-disable-next-line no-unused-vars
import StatBlock from '../components/StatBlock';
import { companyInfo, aboutContent,  } from '../data/siteData';

const AboutPage = () => {
  // Get mission and vision icons
  const coreValues = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission",
      description: aboutContent.mission,
      color: "blue"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Vision",
      description: aboutContent.vision,
      color: "green"
    }
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Commitment to highest quality standards in every project we undertake",
      color: "blue"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Continuous improvement and cutting-edge solutions for complex challenges",
      color: "purple"
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Integrity",
      description: "Transparent and ethical business practices in all our dealings",
      color: "green"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Sustainability",
      description: "Environmentally responsible engineering solutions for future generations",
      color: "orange"
    }
  ];

  const milestones = [
    { year: 1995, event: "Company founded in Addis Ababa, Ethiopia", icon: <Calendar className="w-5 h-5" /> },
    { year: 2000, event: "Expanded to industrial automation services", icon: <TrendingUp className="w-5 h-5" /> },
    { year: 2005, event: "ISO 9001:2000 Certification achieved", icon: <Award className="w-5 h-5" /> },
    { year: 2010, event: "Opened second branch in Adama", icon: <MapPin className="w-5 h-5" /> },
    { year: 2015, event: "Launched SCADA systems division", icon: <Rocket className="w-5 h-5" /> },
    { year: 2020, event: "Expanded to renewable energy sector", icon: <Globe className="w-5 h-5" /> },
    { year: 2024, event: "Opened innovation lab for Industry 4.0", icon: <Lightbulb className="w-5 h-5" /> }
  ];

  const teamStats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: "50+",
      label: "Expert Engineers",
      description: "Dedicated professionals"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      value: "500+",
      suffix: "+",
      label: "Projects Completed",
      description: "Successfully delivered"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: "25",
      suffix: "+",
      label: "Years Experience",
      description: "Industry expertise"
    },
    {
      icon: <Star className="w-6 h-6" />,
      value: "98",
      suffix: "%",
      label: "Client Satisfaction",
      description: "Happy customers"
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      
      {/* Hero Section */}
      <section 
        className="relative h-[50vh] min-h-100 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              About Alpha Line PLC
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              {companyInfo.tagline} - Your Trusted Partner in Engineering Excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionLabel 
                title="Our Story"
                subtitle="Who We Are"
                centered={false}
              />
              <p className="text-gray-700 mb-6 leading-relaxed">
                Founded in <span className="font-semibold text-blue-600">1995</span>, Alpha Line PLC has grown from a small engineering 
                consultancy to one of East Africa's leading providers of industrial automation and 
                engineering solutions. Our journey spans over <span className="font-semibold text-blue-600">25 years</span> of innovation, 
                excellence, and unwavering commitment to our clients.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Headquartered in <span className="font-semibold text-blue-600">Addis Ababa, Ethiopia</span>, we have successfully delivered 
                over <span className="font-semibold text-blue-600">500+ projects</span> across manufacturing, infrastructure, and energy sectors. 
                Our team of <span className="font-semibold text-blue-600">50+ expert engineers</span> combines deep technical knowledge with 
                practical experience to deliver solutions that drive operational excellence.
              </p>
              <p className="text-gray-700 leading-relaxed">
                As an <span className="font-semibold text-blue-600">ISO 9001:2023 certified</span> company, we adhere to the highest quality 
                standards in everything we do. Our commitment to continuous improvement and 
                customer satisfaction has made us the preferred engineering partner for leading 
                organizations across the region.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                    <div className="text-gray-700 font-semibold">Years of Excellence</div>
                  </div>
                  <div className="bg-green-50 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                    <div className="text-gray-700 font-semibold">Projects Completed</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-purple-50 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                    <div className="text-gray-700 font-semibold">Expert Engineers</div>
                  </div>
                  <div className="bg-orange-50 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
                    <div className="text-gray-700 font-semibold">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-linear-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <SectionLabel 
            title="Our Mission & Vision"
            subtitle="Purpose & Direction"
            description="Guiding principles that drive our engineering excellence"
          />
          
          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`text-${item.color}-600 mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionLabel 
            title="Our Core Values"
            subtitle="What We Stand For"
            description="The principles that shape our culture and guide our actions"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className={`text-${value.color}-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionLabel 
            title="Our Journey"
            subtitle="Company Timeline"
            description="Key milestones in our 25+ years of engineering excellence"
          />
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-300 h-full hidden md:block" />
            
            <div className="space-y-8">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center ${
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-6`}
                >
                  <div className="md:w-1/2">
                    <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                      idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-blue-600">{milestone.icon}</div>
                        <div className="text-2xl font-bold text-blue-600">{milestone.year}</div>
                      </div>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Statistics Section */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <SectionLabel 
            title="Our Team by Numbers"
            subtitle="Engineering Excellence"
            description="Meet the experts behind our success"
            light={true}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}{stat.suffix || ''}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-blue-200 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionLabel 
            title="Certifications & Accreditations"
            subtitle="Quality Assurance"
            description="Our commitment to international standards"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "ISO 9001:2023", description: "Quality Management", icon: <Award className="w-12 h-12" /> },
              { name: "ISO 14001", description: "Environmental Management", icon: <Globe className="w-12 h-12" /> },
              { name: "OHSAS 18001", description: "Health & Safety", icon: <Shield className="w-12 h-12" /> },
              { name: "CE Certified", description: "European Standards", icon: <CheckCircle className="w-12 h-12" /> }
            ].map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {cert.icon}
                </div>
                <h3 className="font-semibold mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Us in Building the Future
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Partner with Alpha Line PLC for innovative engineering solutions that drive success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/service"
                className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
};

export default AboutPage;

