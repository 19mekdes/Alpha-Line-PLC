import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Settings, 
  Cpu, 
  
  Zap,
  
  Wrench,
  X,
  
  Clock,
  Phone,
  Mail,
  ChevronDown,
  ChevronUp,
  Briefcase,
  Users,
  Shield,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import ServiceCard from '../components/ServiceCard';
// eslint-disable-next-line no-unused-vars
import StatBlock from '../components/StatBlock';
import { servicesData, companyInfo } from '../data/siteData';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [filter, setFilter] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Service categories
  const categories = [
    { id: 'all', name: 'All Services', icon: <Settings className="w-4 h-4" /> },
    { id: 'automation', name: 'Automation', icon: <Cpu className="w-4 h-4" /> },
    { id: 'programming', name: 'Programming', icon: <Settings className="w-4 h-4" /> },
    { id: 'electrical', name: 'Electrical', icon: <Zap className="w-4 h-4" /> },
    { id: 'support', name: 'Support', icon: <Wrench className="w-4 h-4" /> }
  ];

  // Filter services based on category
  const filteredServices = filter === 'all' 
    ? servicesData 
    : servicesData.filter(service => {
        if (filter === 'automation') return service.title.includes('Automation') || service.title.includes('SCADA');
        if (filter === 'programming') return service.title.includes('PLC') || service.title.includes('Programming');
        if (filter === 'electrical') return service.title.includes('Electrical') || service.title.includes('Control');
        if (filter === 'support') return service.title.includes('Support') || service.title.includes('Technical');
        return true;
      });

  // Service process steps
  const processSteps = [
    {
      step: 1,
      title: "Consultation",
      description: "We understand your requirements and assess your needs",
      icon: <Users className="w-6 h-6" />
    },
    {
      step: 2,
      title: "Proposal",
      description: "Detailed solution design and cost estimation",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      step: 3,
      title: "Implementation",
      description: "Professional execution with quality assurance",
      icon: <Settings className="w-6 h-6" />
    },
    {
      step: 4,
      title: "Testing & Commissioning",
      description: "Thorough testing and system optimization",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      step: 5,
      title: "Training & Handover",
      description: "Comprehensive training and documentation",
      icon: <Users className="w-6 h-6" />
    },
    {
      step: 6,
      title: "Support & Maintenance",
      description: "Ongoing technical support and maintenance",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  // FAQ Data
  const faqs = [
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including manufacturing, food and beverage, pharmaceuticals, automotive, textiles, water treatment, oil and gas, and renewable energy sectors."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project duration varies based on complexity and scope. Small projects may take 2-4 weeks, while large-scale industrial automation projects can take 3-6 months. We provide detailed timelines during the consultation phase."
    },
    {
      question: "Do you provide ongoing support after installation?",
      answer: "Yes, we offer comprehensive maintenance and support packages including 24/7 emergency support, preventive maintenance, remote diagnostics, and annual maintenance contracts (AMC)."
    },
    {
      question: "What PLC brands do you work with?",
      answer: "We work with all major PLC brands including Siemens (S7-1200, S7-1500), Allen-Bradley (ControlLogix, CompactLogix), Schneider Electric (Modicon), Mitsubishi, and Omron."
    },
    {
      question: "Do you offer training for our staff?",
      answer: "Absolutely! We provide comprehensive training programs for your operators and maintenance staff, including hands-on sessions, documentation, and ongoing support."
    },
    {
      question: "Are your solutions scalable for future expansion?",
      answer: "Yes, all our solutions are designed with scalability in mind. We use modular architectures that allow for easy expansion as your business grows."
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      
      {/* Hero Section */}
      <section 
        className="relative h-[50vh] min-h-100 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Our Engineering Services
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Comprehensive industrial automation and engineering solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Filter Section */}
      <section className="py-12 bg-gray-50 sticky top-16 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.icon}
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionLabel 
            title="What We Offer"
            subtitle="Our Expertise"
            description="Discover our comprehensive range of engineering services"
          />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.shortDesc}
                  longDescription={service.description}
                  icon={service.iconComponent}
                  image={service.image}
                  features={service.features}
                  specifications={service.specifications}
                  delay={index * 0.1}
                  onLearnMore={() => setSelectedService(service)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
          
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500">No services found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-linear-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <SectionLabel 
            title="Why Choose Alpha Line PLC?"
            subtitle="Our Advantages"
            description="What makes us the preferred engineering partner"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12" />,
                title: "25+ Years Experience",
                description: "Decades of proven expertise in industrial automation"
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Quality Assured",
                description: "ISO 9001:2023 certified processes and procedures"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Expert Team",
                description: "50+ certified professional engineers"
              },
              {
                icon: <Clock className="w-12 h-12" />,
                title: "24/7 Support",
                description: "Round-the-clock technical assistance"
              },
              {
                icon: <CheckCircle className="w-12 h-12" />,
                title: "Proven Track Record",
                description: "500+ successfully completed projects"
              },
              {
                icon: <Settings className="w-12 h-12" />,
                title: "Cutting-edge Solutions",
                description: "Latest technology and Industry 4.0 ready"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
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

      {/* Our Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionLabel 
            title="Our Service Process"
            subtitle="How We Work"
            description="A systematic approach to delivering engineering excellence"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                    <div className="text-blue-600">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {step.step < processSteps.length && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-blue-400">
                    <ChevronDown className="w-6 h-6 -rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionLabel 
            title="Frequently Asked Questions"
            subtitle="Common Queries"
            description="Find answers to common questions about our services"
          />
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full bg-white rounded-xl p-6 text-left shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    {expandedFaq === idx ? (
                      <ChevronUp className="w-5 h-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-blue-600" />
                    )}
                  </div>
                  <AnimatePresence>
                    {expandedFaq === idx && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4"
                      >
                        <p className="text-gray-600">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Contact our engineering team for a free consultation and quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Contact Our Team
              </Link>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-6 text-sm">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{companyInfo.phone}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{companyInfo.email}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" />
                <span>24/7 Technical Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: selectedService.image ? `url(${selectedService.image})` : 'none' }}>
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-600 p-3 rounded-xl">
                      {selectedService.iconComponent && <selectedService.iconComponent className="w-8 h-8 text-white" />}
                    </div>
                    <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {selectedService.description}
                </p>

                {/* Features */}
                {selectedService.features && selectedService.features.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3">Key Features:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedService.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Specifications */}
                {selectedService.specifications && Object.keys(selectedService.specifications).length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3">Technical Specifications:</h3>
                    <div className="bg-gray-50 rounded-xl p-4">
                      {Object.entries(selectedService.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-gray-200 last:border-0">
                          <span className="font-medium text-gray-700">{key}:</span>
                          <span className="text-gray-600">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="flex-1 px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Close
                  </button>
                  <Link
                    to="/contact"
                    onClick={() => setSelectedService(null)}
                    className="flex-1 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
                  >
                    Request This Service
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
};

export default ServicesPage;