import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import logo from "/Logo.jpg";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Simple 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Logo & Company - Column 1 */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <img
                src={logo}
                alt="Alpha Line Engineering Logo"
                className="w-10 h-10 object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = "none";
                }}
              />
              <div>
                <h3 className="font-bold text-lg">Alpha Line Engineering</h3>
                <p className="text-xs text-gray-400"> Engineering Firm</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              Specializing in OSP engineering, telecom, and power projects.
            </p>
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-3">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links - Column 2 */}
          <div className="text-center">
            <h4 className="font-semibold mb-3 text-orange-500">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <Link
                to="/"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                Services
              </Link>
              <Link
                to="/projects"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                Projects
              </Link>
              <Link
                to="/partners"
                className="text-gray-400 hover:text-orange-500 transition"
              >
                Partners
              </Link>
            </div>
          </div>

          {/* Contact Info - Column 3 */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-3 text-orange-500">Contact</h4>
            <div className="space-y-1 text-sm text-gray-400">
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Phone className="w-3 h-3" /> <span>+2519 3370 84 86</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Mail className="w-3 h-3" /> <span>henokbdg12@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <MapPin className="w-3 h-3" />{" "}
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-xs pt-6 mt-6 border-t border-gray-800">
          © {currentYear} Alpha Line Engineering PLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
