import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Heart, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white/90 dark:bg-[#06070B] border-t border-gray-200 dark:border-white/10 text-gray-900 dark:text-white py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 space-y-5 text-left">
            <div className="flex items-center space-x-3">
              <img
                src="/assets/images/RHS Logo (Edited).png"
                alt="Red Hand Solutions Logo"
                className="w-12 h-12 object-contain rounded-xl shadow-md bg-white p-1 border border-gray-200/50"
                style={{ maxWidth: '48px', maxHeight: '48px' }}
              />
              <div>
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Red Hand Solutions
                </h3>
                <p className="text-xs font-semibold text-red-600 dark:text-red-400">
                  Digital Innovation Catalyst
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-md">
              Gujarat's premier digital transformation catalyst, delivering cutting-edge software, mobile applications, cloud solutions, and digital strategy with local understanding and global engineering standards.
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/[0.06] flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-red-600 hover:text-white transition-all duration-200 shadow-sm"
                aria-label="Facebook"
              >
                <span className="font-bold text-sm">f</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/[0.06] flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-red-600 hover:text-white transition-all duration-200 shadow-sm"
                aria-label="Twitter"
              >
                <span className="font-bold text-sm">t</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/[0.06] flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-red-600 hover:text-white transition-all duration-200 shadow-sm"
                aria-label="LinkedIn"
              >
                <span className="font-bold text-sm">in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about-us" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors inline-flex items-center gap-1">
                  About Us <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
              <li>
                <Link to="/services-overview" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors inline-flex items-center gap-1">
                  Services Overview <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors inline-flex items-center gap-1">
                  Portfolio <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
              <li>
                <Link to="/mobile-app-development" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors inline-flex items-center gap-1">
                  Mobile App Development <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
              <li>
                <Link to="/contact-consultation" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors inline-flex items-center gap-1">
                  Contact & Consultation <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-left space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              Contact Info
            </h4>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <p className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a href="tel:+916352412728" className="hover:text-red-600 dark:hover:text-red-400 transition-colors font-medium">
                  +91 6352412728
                </a>
              </p>
              <p className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <a href="mailto:redhand.solution@gmail.com" className="hover:text-red-600 dark:hover:text-red-400 transition-colors font-medium">
                  redhand.solution@gmail.com
                </a>
              </p>
              <p className="flex items-center space-x-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span>Rajkot, Gujarat, India</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-gray-500 dark:text-gray-400 gap-4">
          <p>© {new Date()?.getFullYear()} Red Hand Solutions. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> in Rajkot, Gujarat
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
