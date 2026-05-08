import 'react';
import { Link } from 'react-router-dom';

import {
  Facebook,   // ✅ Use this
  Twitter,    // ✅ Use this
  Linkedin,   // ✅ Use this (note: lowercase 'i')
  Instagram,  // ✅ Use this
  MapPin,
  Phone,
  Mail,
  Clock,
  Factory
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Factory className="w-8 h-8 text-blue-400" />
              <h3 className="text-xl font-bold">Alpha Line PLC</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Leading engineering firm specializing in industrial automation, 
              control systems, and engineering solutions since 1995.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/service" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/testimonial" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Engineering Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Engineering Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">PLC Programming</li>
              <li className="text-gray-400 text-sm">SCADA Systems</li>
              <li className="text-gray-400 text-sm">Industrial Automation</li>
              <li className="text-gray-400 text-sm">Control Panel Design</li>
              <li className="text-gray-400 text-sm">Electrical Engineering</li>
              <li className="text-gray-400 text-sm">24/7 Technical Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <p className="text-gray-400 text-sm">
                  123 Engineering Road, Industrial Area<br />
                  Addis Ababa, Ethiopia
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <p className="text-gray-400 text-sm">+251 11 123 4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <p className="text-gray-400 text-sm">info@alphaline.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <p className="text-gray-400 text-sm">Mon-Fri: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm text-center">
              &copy; {currentYear} Alpha Line PLC. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm text-center mt-2 md:mt-0">
              Engineering Excellence | Industrial Automation Specialists
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;