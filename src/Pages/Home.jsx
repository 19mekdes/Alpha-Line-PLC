import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  ArrowRight, Phone, Mail, MapPin, ChevronLeft, ChevronRight, 
  Wifi, Zap, HardDrive, BarChart3, Play, Pause, 
  Shield, Award, Clock, Building2, CheckCircle, 
  TrendingUp, Users, Briefcase, Globe
} from 'lucide-react';

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const isAmharic = i18n.language === 'am';
  
  // High-quality working images
  const slides = [
    {
      id: 1,
      image: "https://i.pinimg.com/736x/de/9b/33/de9b33bb9ce4bef56fb7849820fdda6f.jpg",
      title: "Fiber Optic Installation",
    },
    {
      id: 2,
      image: "https://i.pinimg.com/736x/e6/f9/c4/e6f9c41107815abca4dc9b14d2929694.jpg",
      title: "Utility Pole Installation",
    },
    {
      id: 3,
      image: "https://i.pinimg.com/736x/7a/27/18/7a271867c5639635e548a8c22b64f5ab.jpg",
      title: "OSP Engineering",
    },
    {
      id: 4,
      image: "https://i.pinimg.com/736x/9f/78/1b/9f781be44c17fc2ae349f27e5e5d7bc6.jpg",
      title: "Power Infrastructure",
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    let loaded = 0;
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
      img.onload = () => {
        loaded++;
        if (loaded === slides.length) setImagesLoaded(true);
      };
      img.onerror = () => {
        loaded++;
        if (loaded === slides.length) setImagesLoaded(true);
      };
    });
  }, []);

  // Auto-play slideshow
  useEffect(() => {
    if (!isAutoPlaying || !imagesLoaded) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, imagesLoaded, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const stats = [
    { value: "50+", label: "Projects Completed", icon: Briefcase },
    { value: "25+", label: "Expert Engineers", icon: Users },
    { value: "10+", label: "Years Experience", icon: Clock },
    { value: "98%", label: "Client Satisfaction", icon: TrendingUp }
  ];

  const services = [
    { title: "Telecom Infrastructure", icon: <Wifi className="w-8 h-8" />, desc: "Fiber optic installation, OSP design (HLD/LLD), and tower maintenance" },
    { title: "Power & Utilities", icon: <Zap className="w-8 h-8" />, desc: "Utility pole installation, electrical power projects, and hardware supply" },
    { title: "Engineering Consultancy", icon: <BarChart3 className="w-8 h-8" />, desc: "Site surveys, AutoCAD documentation, and technical reporting" },
    { title: "Project Management", icon: <HardDrive className="w-8 h-8" />, desc: "Excavation, trenching, and infrastructure deployment in challenging terrains" }
  ];

  if (!imagesLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-12 h-12 border-3 border-safety-orange border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section - Clean Images (NO TEXT OVERLAY) */}
      <section className="relative h-screen overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Minimal Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index ? 'w-8 h-1 bg-white' : 'w-4 h-1 bg-white/50'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute bottom-6 right-4 z-20 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-all duration-300"
        >
          {isAutoPlaying ? <Pause className="w-3 h-3 text-white" /> : <Play className="w-3 h-3 text-white" />}
        </button>

        <div className="absolute top-6 left-6 z-20">
          <div className="flex items-center gap-2">
            <Building2 className="w-6 h-6 text-white drop-shadow-md" />
            <span className="text-white font-bold text-sm drop-shadow-md hidden sm:block">Alpha Line Engineering</span>
          </div>
        </div>
      </section>

      {/* TEXT SECTION - CLEAR READABLE BACKGROUND */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Tagline - Orange background for contrast */}
            <div className="inline-block px-4 py-2 bg-safety-orange text-white rounded-full text-sm font-semibold mb-6">
              
            </div>

            {/* Main Title - Dark, bold */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Alpha Line Engineering PLC
            </h1>

            {/* English Motto - Orange for emphasis */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-800 font-bold mb-3">
  "Connecting the World, Powering the Future"
</p>

            {/* Amharic Motto - Blue for contrast */}
            <p className="text-lg md:text-xl text-gray-800 font-semibold mb-6">
  "ዓለምን በማገናኘት፣ መጻኢውን በማብራት"
</p>

            {/* Description - Gray on white, easy to read */}
            <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Grade-1 engineering firm specializing in <span className="text-safety-orange font-semibold">Outside Plant (OSP) engineering</span> and <span className="text-safety-orange font-semibold">electrical power projects</span> across Ethiopia, including the challenging Afar-Afdera region.
            </p>
{/* CTA Buttons - Using Default Tailwind Colors */}
<div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Link
    to="/services"
    className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
  >
    Explore Our Services
    <ArrowRight className="ml-2 w-5 h-5" />
  </Link>
  <Link
    to="/contact"
    className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
  >
    Get a Quote
    <ArrowRight className="ml-2 w-5 h-5" />
  </Link>
</div>
           
          </div>
        </div>
      </section>

      

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive engineering solutions for telecom and power infrastructure</p>
            <div className="w-20 h-1 bg-safety-orange mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-safety-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-safety-orange">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* About Preview - Split Screen Layout */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* Text Content - Left Side */}
      <div className="text-center md:text-left">
        <span className="inline-block px-4 py-1 bg-safety-orange/10 text-safety-orange rounded-full text-sm font-semibold mb-4">
          About Us
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Ethiopia's Leading Engineering Firm
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Alpha Line Engineering PLC is a premier Grade-1 engineering firm headquartered in Addis Ababa, Ethiopia. We specialize in Outside Plant (OSP) engineering, telecom infrastructure, and electrical power projects.
        </p>
        <div className="flex flex-wrap gap-4 mb-6 justify-center md:justify-start">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-gray-700">ISO Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-gray-700">Grade-1 License</span>
          </div>
        </div>
        <Link 
          to="/about" 
          className="inline-flex items-center px-6 py-3 bg-safety-orange hover:bg-orange-700 text-white font-semibold rounded-lg transition-all duration-300"
        >
          Learn More About Us 
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
      
      {/* Image - Right Side */}
      <div className="rounded-2xl overflow-hidden shadow-xl">
        <img 
          src="https://i.pinimg.com/736x/40/2d/92/402d92407070d25e650ff6254b0a982a.jpg"
          alt="Engineering Team"
          className="w-full h-80 md:h-96 object-cover"
        />
      </div>
      
    </div>
  </div>
</section>

      {/* CTA Section - White Background */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      Ready to Start Your Infrastructure Project?
    </h2>
    <p className="text-xl mb-8 text-gray-600">
      Contact our team for a free consultation and quote
    </p>
    <Link 
  to="/contact" 
  className="inline-flex items-center justify-center px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
>
  Request a Quote
  
      <ArrowRight className="ml-2 w-5 h-5" />
    </Link>
  </div>
</section>
    </div>
  );
};

export default HomePage;