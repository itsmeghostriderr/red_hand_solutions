import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicesPreview from './components/ServicesPreview';
import ClientTestimonials from './components/ClientTestimonials';
import WhyChooseUs from './components/WhyChooseUs';
import TechnologyStack from './components/TechnologyStack';
import CallToAction from './components/CallToAction';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Red Hand Solutions - Your Success, Our Innovation | Premier IT Solutions Gujarat</title>
        <meta name="description" content="Gujarat's premier digital transformation catalyst. Red Hand Solutions delivers cutting-edge web development, mobile apps, cloud solutions & digital marketing with local expertise and global standards." />
        <meta name="keywords" content="IT solutions Gujarat, web development Rajkot, mobile app development, digital transformation, Red Hand Solutions, software company Gujarat" />
        <meta property="og:title" content="Red Hand Solutions - Your Success, Our Innovation" />
        <meta property="og:description" content="Transform your business with Gujarat's leading IT solutions provider. 150+ projects, 85+ happy clients, 8+ years of excellence." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/homepage" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          {/* Hero Section with Particle Animation */}
          <HeroSection />

          {/* Interactive Services Preview */}
          <ServicesPreview />

          {/* Client Testimonials Carousel */}
          <ClientTestimonials />

          {/* Why Choose Us Section */}
          <WhyChooseUs />

          {/* Technology Stack Visualization */}
          <TechnologyStack />

          {/* Call to Action Section */}
          <CallToAction />
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="/assets/images/RHS Logo (Edited).png"
                  alt="Red Hand Solutions Logo"
                  className="w-12 h-12 object-contain rounded-lg shadow-brand bg-white"
                  style={{ maxWidth: '48px', maxHeight: '48px' }}
                />
                <div>
                  <h3 className="text-xl font-bold">Red Hand Solutions</h3>
                  <p className="text-gray-400 text-sm">Digital Innovation</p>
                </div>
              </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Gujarat's premier digital transformation catalyst, delivering cutting-edge solutions with local understanding and global standards.
                </p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-brand cursor-pointer">
                    <span className="text-white">f</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-brand cursor-pointer">
                    <span className="text-white">t</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-brand cursor-pointer">
                    <span className="text-white">in</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/about-us" className="text-gray-300 hover:text-red-400 transition-brand">About Us</a></li>
                  <li><a href="/services-overview" className="text-gray-300 hover:text-red-400 transition-brand">Services</a></li>
                  <li><a href="/portfolio" className="text-gray-300 hover:text-red-400 transition-brand">Portfolio</a></li>
                  <li><a href="/contact-consultation" className="text-gray-300 hover:text-red-400 transition-brand">Contact</a></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <div className="space-y-3">
                  <p className="text-gray-300 text-sm">+91 6352412728</p>
                  <p className="text-gray-300 text-sm">redhand.solution@gmail.com</p>
                  <p className="text-gray-300 text-sm">Rajkot, Gujarat, India</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © {new Date()?.getFullYear()} Red Hand Solutions. All rights reserved. | Crafted with ❤️ in Gujarat
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;