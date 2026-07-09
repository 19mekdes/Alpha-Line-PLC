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

import image1 from "/images/image1.jpg";
import image5 from "/images/image5.jpg";
import image3 from "/images/image3.jpg";
import image4 from "/images/image4.jpg";
import aboutImage from "/images/about-team.jpg";

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const isAmharic = i18n.language === "am";

  // Local slides with imported images
  const slides = [
    {
      id: 1,
      image: image1,
      mobileImage: image1, 
      title: "Fiber Optic Installation",
    },
    {
      id: 2,
      image: image5,
      mobileImage: image5,
      title: "Utility Pole Installation",
    },
    {
      id: 3,
      image: image3,
      mobileImage: image3,
      title: "OSP Engineering",
    },
    {
      id: 4,
      image: image4,
      mobileImage: image4,
      title: "Power Infrastructure",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Preload images
  useEffect(() => {
    let loaded = 0;
    const imagesToLoad = slides.flatMap(slide => [slide.image, slide.mobileImage]);
    const uniqueImages = [...new Set(imagesToLoad)];
    
    uniqueImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loaded++;
        if (loaded === uniqueImages.length) setImagesLoaded(true);
      };
      img.onerror = () => {
        loaded++;
        if (loaded === uniqueImages.length) setImagesLoaded(true);
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
    { value: "50+", label: t("stats.projects"), icon: Briefcase },
    { value: "25+", label: t("stats.engineers"), icon: Users },
    { value: "10+", label: t("stats.experience"), icon: Clock },
    { value: "98%", label: t("stats.satisfaction"), icon: TrendingUp },
  ];

  const services = [
    {
      title: t("services.telecom.title"),
      icon: <Wifi className="w-8 h-8" />,
      desc: t("services.telecom.description"),
    },
    {
      title: t("services.power.title"),
      icon: <Zap className="w-8 h-8" />,
      desc: t("services.power.description"),
    },
    {
      title: t("services.consultancy.title"),
      icon: <BarChart3 className="w-8 h-8" />,
      desc: t("services.consultancy.description"),
    },
    {
      title: t("services.projectMgmt.title"),
      icon: <HardDrive className="w-8 h-8" />,
      desc: t("services.projectMgmt.description"),
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
      {/* Hero Section - Mobile Optimized */}
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
            {/* Responsive image with picture element */}
            <picture>
              {/* Mobile image (up to 768px) */}
              <source 
                media="(max-width: 768px)" 
                srcSet={slides[currentSlide].mobileImage}
              />
              {/* Desktop image */}
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: isMobile ? 'center 30%' : 'center' }}
              />
            </picture>
            {/* Light overlay for better visibility on mobile */}
            <div className="absolute inset-0 bg-black/20 md:bg-black/10" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows - Adjusted for mobile */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </button>

        {/* Slide Indicators - Bottom */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-1 md:gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 8000);
              }}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? "w-6 md:w-8 h-1 bg-white"
                  : "w-3 md:w-4 h-1 bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Play/Pause Button - Hidden on very small screens or smaller */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute bottom-4 right-2 md:bottom-6 md:right-4 z-20 w-6 h-6 md:w-8 md:h-8 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center transition-all duration-300"
          aria-label={isAutoPlaying ? "Pause" : "Play"}
        >
          {isAutoPlaying ? (
            <Pause className="w-3 h-3 md:w-4 md:h-4 text-white" />
          ) : (
            <Play className="w-3 h-3 md:w-4 md:h-4 text-white" />
          )}
        </button>

        {/* Logo - Smaller on mobile */}
        <div className="absolute top-3 left-3 md:top-6 md:left-6 z-20">
          <div className="flex items-center gap-1 md:gap-2">
            <Building2 className="w-5 h-5 md:w-6 md:h-6 text-white drop-shadow-md" />
            <span className="text-white font-bold text-xs md:text-sm drop-shadow-md hidden sm:inline-block">
              Alpha Line Engineering
            </span>
          </div>
        </div>
      </section>

      {/* TEXT SECTION - WITH TRANSLATIONS */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Tagline */}
            <div className="inline-block px-3 py-1 md:px-4 md:py-2 bg-orange-500 text-white rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6">
              {t("hero.tagline")}
            </div>

            {/* Main Title */}
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-3 md:mb-4">
              {t("hero.title")}
            </h1>

            {/* English Motto */}
            <p className="text-lg md:text-xl lg:text-3xl text-orange-600 font-bold mb-2 md:mb-3">
              {t("hero.motto")}
            </p>

            {/* Amharic Motto */}
            <p className="text-base md:text-lg lg:text-xl text-gray-700 font-semibold mb-4 md:mb-6">
              {t("hero.mottoAmharic")}
            </p>

            {/* Description */}
            <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
              {t("hero.description")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 sm:px-0">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-6 py-2 md:px-8 md:py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md text-sm md:text-base"
              >
                {t("hero.cta1")}
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Link>
              <a
                href="tel:+251933708486"
                className="inline-flex items-center justify-center px-6 py-2 md:px-8 md:py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md text-sm md:text-base"
              >
                {t("hero.cta2")}
                <Phone className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              {t("services.title")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base px-4">
              {t("services.description")}
            </p>
            <div className="w-16 md:w-20 h-1 bg-orange-500 mx-auto mt-3 md:mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 md:p-6 text-center hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 text-orange-600">
                  {service.icon}
                </div>
                <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview with Local Image */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left order-2 md:order-1">
              <span className="inline-block px-3 py-1 md:px-4 md:py-1 bg-orange-100 text-orange-600 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
                {t("about.subtitle")}
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                {t("about.title")}
              </h2>
              <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6 leading-relaxed px-4 md:px-0">
                {t("about.profileDesc")}
              </p>

              <Link
                to="/about"
                className="inline-flex items-center px-5 py-2 md:px-6 md:py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-all duration-300 text-sm md:text-base"
              >
                {t("about.team")}
                <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
              <img
                src={aboutImage}
                alt="Engineering Team"
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 px-4">
            Ready to Start Your Infrastructure Project?
          </h2>
          <p className="text-base md:text-xl mb-6 md:mb-8 text-blue-100 px-4">
            Contact our team for a free consultation and quote
          </p>
          <a
            href="tel:+251933708486"
            className="inline-flex items-center justify-center px-6 py-2 md:px-8 md:py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md text-sm md:text-base"
          >
            <Phone className="mr-2 w-4 h-4 md:w-5 md:h-5" />
            Request a Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;