// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  
  Shield,
  Clock,
  Award,
  ChevronRight
} from 'lucide-react';
import useScrolled from '../hooks/useScrolled';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import StatBlock from '../components/StatBlock';
import SectionLabel from '../components/SectionLabel';
import { servicesData, testimonialsData, statisticsData, companyInfo } from '../data/siteData';

const HomePage = () => {
  // eslint-disable-next-line no-unused-vars
  const { scrolled } = useScrolled();

  // Get first 3 services for homepage
  const featuredServices = servicesData.slice(0, 3);
  
  // Get first 3 testimonials for homepage
  const featuredTestimonials = testimonialsData.slice(0, 3);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      
      {/* Hero Section - FIXED */}
<section 
  className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
  style={{
    backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://i.pinimg.com/736x/76/d6/5c/76d65c3bb3c4950868f04322ddb96642.jpg')"
  }}
>
  {/* Removed the extra overlay div that was making it darker */}
  
  <div className="container mx-auto px-4 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center text-white max-w-4xl mx-auto"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="inline-block mb-4 px-4 py-1 bg-blue-600 rounded-full text-sm font-semibold"
      >
        {companyInfo.tagline}
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg"
      >
        {companyInfo.name}
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg md:text-xl mb-8 text-gray-100 drop-shadow-md"
      >
        {companyInfo.description}
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Link
          to="/service"
          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Explore Our Services
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold rounded-lg transition-all duration-300"
        >
          Get a Quote
        </Link>
      </motion.div>
    </motion.div>
  </div>
  
  {/* Scroll Indicator */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1, duration: 1 }}
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
  >
    <div className="animate-bounce">
      <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
      </div>
    </div>
  </motion.div>
</section>
      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionLabel 
            title="Our Impact in Numbers"
            subtitle="Company Statistics"
            description="Delivering excellence through measurable results"
          />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {statisticsData.slice(0, 4).map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <StatBlock
                  icon={stat.iconComponent}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  color={stat.color}
                  description={stat.description}
                  delay={index * 0.1}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionLabel 
            title="Our Engineering Services"
            subtitle="What We Offer"
            description="Comprehensive industrial automation and engineering solutions tailored to your needs"
          />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredServices.map((service, index) => (
              <motion.div key={service.id} variants={itemVariants}>
                <ServiceCard
                  title={service.title}
                  description={service.shortDesc}
                  icon={service.iconComponent}
                  image={service.image}
                  features={service.features.slice(0, 3)}
                  delay={index * 0.1}
                />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/service"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              View All Services
              <ChevronRight className="ml-1 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section - White Background with Black Text */}
<section className="py-20 bg-white text-gray-900">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Side - Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Engineering Team"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
        </div>
        
        {/* Experience Badge */}
        <div className="absolute -bottom-6 -right-6 bg-blue-600 rounded-xl p-6 shadow-xl">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">25+</div>
            <div className="text-sm text-blue-100">Years of Excellence</div>
          </div>
        </div>
      </motion.div>
      
      {/* Right Side - Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <SectionLabel 
          title="About Alpha Line PLC"
          subtitle="Who We Are"
          centered={false}
        />
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          For over 25 years, Alpha Line PLC has been at the forefront of engineering innovation, 
          providing cutting-edge industrial automation solutions to businesses across East Africa. 
          Our commitment to excellence and customer satisfaction has made us a trusted partner 
          for leading manufacturing and industrial companies.
        </p>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          We specialize in PLC programming, SCADA systems, industrial automation, and control panel 
          design, delivering turnkey solutions that optimize productivity and reduce operational costs.
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Expert Team</h4>
              <p className="text-sm text-gray-500">50+ Professional Engineers</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Quality Assured</h4>
              <p className="text-sm text-gray-500">ISO 9001:2023 Certified</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">24/7 Support</h4>
              <p className="text-sm text-gray-500">Round-the-clock Service</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800">Fast Delivery</h4>
              <p className="text-sm text-gray-500">On-time Project Completion</p>
            </div>
          </div>
        </div>
        
        <Link
          to="/about"
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
        >
          Learn More About Us
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </motion.div>
    </div>
  </div>
</section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionLabel 
            title="Why Choose Alpha Line PLC?"
            subtitle="Our Advantages"
            description="What sets us apart from the competition"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Quality Assurance",
                description: "All our solutions meet international quality standards and are thoroughly tested before delivery."
              },
              {
                icon: <Clock className="w-12 h-12" />,
                title: "Timely Delivery",
                description: "We pride ourselves on completing projects on time and within budget, every time."
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Expert Team",
                description: "Our engineers are certified professionals with years of industry experience."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionLabel 
            title="What Our Clients Say"
            subtitle="Testimonials"
            description="Real feedback from our satisfied customers"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                position={testimonial.position}
                company={testimonial.company}
                content={testimonial.content}
                rating={testimonial.rating}
                image={testimonial.image}
                date={testimonial.date}
                delay={index * 0.1}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/testimonial"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Read More Testimonials
              <ChevronRight className="ml-1 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Engineering Project?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
};

export default HomePage;