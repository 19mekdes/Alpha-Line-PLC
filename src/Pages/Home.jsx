import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Wifi,
  Zap,
  HardDrive,
  BarChart3,
  Play,
  Pause,
  Shield,
  Award,
  Clock,
  Building2,
  CheckCircle,
  TrendingUp,
  Users,
  Briefcase,
  Globe,
} from "lucide-react";

// Import local images
import image1 from '/images/image1.jpg';
import image5 from '/images/image5.jpg';
import image3 from '/images/image3.jpg';
import image4 from '/images/image4.jpg';
import aboutImage from '/images/about-team.jpg';

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const isAmharic = i18n.language === "am";

  // Local slides with imported images
  const slides = [
    {
      id: 1,
      image: image1,
      title: "Fiber Optic Installation",
    },
    {
      id: 2,
      image: image5,
      title: "Utility Pole Installation",
    },
    {
      id: 3,
      image: image3,
      title: "OSP Engineering",
    },
    {
      id: 4,
      image: image4,
      title: "Power Infrastructure",
    },
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
    { value: "50+", label: t('stats.projects'), icon: Briefcase },
    { value: "25+", label: t('stats.engineers'), icon: Users },
    { value: "10+", label: t('stats.experience'), icon: Clock },
    { value: "98%", label: t('stats.satisfaction'), icon: TrendingUp },
  ];

  const services = [
    {
      title: t('services.telecom.title'),
      icon: <Wifi className="w-8 h-8" />,
      desc: t('services.telecom.description'),
    },
    {
      title: t('services.power.title'),
      icon: <Zap className="w-8 h-8" />,
      desc: t('services.power.description'),
    },
    {
      title: t('services.consultancy.title'),
      icon: <BarChart3 className="w-8 h-8" />,
      desc: t('services.consultancy.description'),
    },
    {
      title: t('services.projectMgmt.title'),
      icon: <HardDrive className="w-8 h-8" />,
      desc: t('services.projectMgmt.description'),
    },
  ];

  if (!imagesLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-12 h-12 border-3 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
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
                currentSlide === index
                  ? "w-8 h-1 bg-white"
                  : "w-4 h-1 bg-white/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute bottom-6 right-4 z-20 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-all duration-300"
        >
          {isAutoPlaying ? (
            <Pause className="w-3 h-3 text-white" />
          ) : (
            <Play className="w-3 h-3 text-white" />
          )}
        </button>

        <div className="absolute top-6 left-6 z-20">
          <div className="flex items-center gap-2">
            <Building2 className="w-6 h-6 text-white drop-shadow-md" />
            <span className="text-white font-bold text-sm drop-shadow-md hidden sm:block">
              Alpha Line Engineering
            </span>
          </div>
        </div>
      </section>

      {/* TEXT SECTION - WITH TRANSLATIONS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Tagline */}
            <div className="inline-block px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-semibold mb-6">
              {t('hero.tagline')}
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              {t('hero.title')}
            </h1>

            {/* English Motto */}
            <p className="text-xl md:text-2xl lg:text-3xl text-orange-600 font-bold mb-3">
              {t('hero.motto')}
            </p>

            {/* Amharic Motto */}
            <p className="text-lg md:text-xl text-gray-700 font-semibold mb-6">
              {t('hero.mottoAmharic')}
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('hero.description')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                {t('hero.cta1')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                {t('hero.cta2')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('services.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('services.description')}
            </p>
            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-orange-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview with Local Image */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
                {t('about.subtitle')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('about.title')}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('about.profileDesc')}
              </p>
              
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-all duration-300"
              >
                {t('about.team')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutImage}
                alt="Engineering Team"
                className="w-full h-80 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Infrastructure Project?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact our team for a free consultation and quote
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
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