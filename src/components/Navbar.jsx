import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Phone, Mail } from 'lucide-react';
import logo from '/Logo.jpg';  

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'am' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const navLinks = [
    { path: '/', name: t('nav.home') },
    { path: '/about', name: t('nav.about') },
    { path: '/services', name: t('nav.services') },
    { path: '/projects', name: t('nav.projects') },
    { path: '/partners', name: t('nav.partners') },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolling 
        ? 'bg-white dark:bg-gray-900 shadow-lg py-2' 
        : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo with Image */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={logo} 
              alt="Alpha Line Engineering Logo" 
              className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                ALPHA LINE ENGINEERING PLC
              </span>
              
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-safety-orange dark:text-safety-orange bg-orange-50 dark:bg-orange-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:text-safety-orange dark:hover:text-safety-orange hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ml-2"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{i18n.language === 'en' ? 'አማርኛ' : 'English'}</span>
            </button>
            
            {/* Quote Button */}
            <a
              href="/#quote"
              className="ml-4 px-6 py-2 bg-safety-orange hover:bg-orange-700 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              {t('nav.quote')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg py-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-safety-orange bg-orange-50 dark:bg-orange-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:text-safety-orange dark:hover:text-safety-orange hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <span className="text-sm font-medium">{link.name}</span>
              </Link>
            ))}
            
            {/* Mobile Quote Button */}
            <a
              href="/#quote"
              onClick={() => setIsOpen(false)}
              className="block mx-4 mt-3 px-4 py-3 bg-safety-orange hover:bg-orange-700 text-white rounded-lg text-sm font-medium text-center transition-all duration-300"
            >
              {t('nav.quote')}
            </a>
            
            {/* Mobile Contact Info */}
            <div className="px-4 pt-4 pb-2 mt-2 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Need help? Contact us:</p>
              <div className="flex items-center gap-4 text-xs">
                <a href="tel:+251111234567" className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-safety-orange">
                  <Phone className="w-3 h-3" />
                  Call
                </a>
                <a href="mailto:info@alphalineengineering.com" className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-safety-orange">
                  <Mail className="w-3 h-3" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;