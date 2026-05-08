import  { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Navigation,
  Calendar,
  Users,
  Award,
  MessageCircle,
  AlertCircle
} from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import { companyInfo } from '../data/siteData';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    // Simulate API call - Replace with actual API endpoint
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setSubmitError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Contact information items
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: companyInfo.address,
      link: `https://maps.google.com/?q=${encodeURIComponent(companyInfo.address)}`,
      linkText: "Get Directions",
      color: "blue"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: `${companyInfo.phone}\n${companyInfo.phoneAlt}`,
      link: `tel:${companyInfo.phone}`,
      linkText: "Call Now",
      color: "green"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: companyInfo.email,
      link: `mailto:${companyInfo.email}`,
      linkText: "Send Email",
      color: "purple"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: `${companyInfo.workingHours.weekdays}\n${companyInfo.workingHours.saturday}\n${companyInfo.workingHours.sunday}`,
      link: null,
      linkText: null,
      color: "orange"
    }
  ];

  // Social media links
  const socialMedia = [
    { icon: <Facebook className="w-5 h-5" />, name: "Facebook", url: companyInfo.socialMedia.facebook, color: "bg-blue-600" },
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", url: companyInfo.socialMedia.twitter, color: "bg-sky-500" },
    { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", url: companyInfo.socialMedia.linkedin, color: "bg-blue-700" },
    { icon: <Instagram className="w-5 h-5" />, name: "Instagram", url: companyInfo.socialMedia.instagram, color: "bg-pink-600" },
    { icon: <Youtube className="w-5 h-5" />, name: "YouTube", url: companyInfo.socialMedia.youtube, color: "bg-red-600" }
  ];

  // FAQ items
  const faqs = [
    {
      question: "How quickly can I expect a response?",
      answer: "We typically respond to all inquiries within 24 hours during business days."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we offer free initial consultations to understand your project requirements."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve clients throughout Ethiopia and East Africa, with remote support available globally."
    },
    {
      question: "Do you provide emergency support?",
      answer: "Yes, we offer 24/7 emergency technical support for our maintenance contract clients."
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      
      {/* Hero Section */}
      <section 
        className="relative h-[40vh] min-h-75 flex items-center justify-center bg-cover bg-center"
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
              Contact Us
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Get in touch with our engineering team for inquiries, support, or project consultations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-${info.color}-500`}
              >
                <div className={`text-${info.color}-600 mb-4`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                <div className="text-gray-600 mb-4 whitespace-pre-line">
                  {info.details}
                </div>
                {info.link && (
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center text-${info.color}-600 hover:text-${info.color}-700 font-semibold text-sm transition-colors`}
                  >
                    {info.linkText}
                    <Navigation className="w-4 h-4 ml-1" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionLabel 
                title="Send Us a Message"
                subtitle="Get In Touch"
                centered={false}
              />
              
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <div>
                    <h4 className="font-semibold text-green-800">Message Sent Successfully!</h4>
                    <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                </motion.div>
              )}
              
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-100 border border-red-400 rounded-lg flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <div>
                    <h4 className="font-semibold text-red-800">Error</h4>
                    <p className="text-red-700 text-sm">{submitError}</p>
                  </div>
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                      placeholder="+251 11 123 4567"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
                      placeholder="Project Inquiry"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
            
            {/* Map and Social Media */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
                <div className="h-64 bg-gray-200 relative">
                  <iframe
                    title="Company Location"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(companyInfo.address)}&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0"
                  />
                </div>
              </div>
              
              {/* Social Media Links */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <p className="text-gray-600 mb-4">
                  Follow us on social media for updates, projects, and industry news.
                </p>
                <div className="flex flex-wrap gap-3">
                  {socialMedia.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${social.color} text-white p-3 rounded-full hover:shadow-lg transition-all duration-300`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionLabel 
            title="Frequently Asked Questions"
            subtitle="Quick Answers"
            description="Common questions about our services and support"
          />
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-blue-600 mt-1">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: <Users className="w-12 h-12 mx-auto mb-4" />,
                title: "Expert Support",
                description: "Our team of experienced engineers is ready to assist you"
              },
              {
                icon: <Calendar className="w-12 h-12 mx-auto mb-4" />,
                title: "Free Consultation",
                description: "Schedule a free consultation to discuss your project"
              },
              {
                icon: <Award className="w-12 h-12 mx-auto mb-4" />,
                title: "Quality Guaranteed",
                description: "We stand behind our work with quality assurance"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                {item.icon}
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Support Banner */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-2">24/7 Emergency Support</h3>
              <p className="text-gray-300">For urgent technical issues, call our emergency hotline</p>
            </div>
            <a
              href={`tel:${companyInfo.phone}`}
              className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Emergency Hotline
            </a>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
};

export default ContactPage;