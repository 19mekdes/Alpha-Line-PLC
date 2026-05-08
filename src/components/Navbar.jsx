// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Factory } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/service', name: 'Services' },
    { path: '/testimonial', name: 'Testimonials' },
    { path: '/contact', name: 'Contact' },
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
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
          >
            <Factory className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Alpha Line<span className="text-blue-600 dark:text-blue-400"> PLC</span>
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">Engineering Excellence</span>
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
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/50'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Theme Toggle Button */}
            <ThemeToggle />
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 dark:text-white focus:outline-none p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
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
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg py-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-gray-700'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <span className="text-sm font-medium">{link.name}</span>
              </Link>
            ))}
            
            {/* Mobile CTA Button */}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block mx-4 mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium text-center transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;