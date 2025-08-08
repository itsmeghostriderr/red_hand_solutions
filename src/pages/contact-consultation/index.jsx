import React from 'react';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import ConsultationForm from './components/ConsultationForm';
import QuoteCalculator from './components/QuoteCalculator';
import OfficeLocation from './components/OfficeLocation';
import FAQSection from './components/FAQSection';

const ContactConsultation = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <ContactHero />
      {/* Contact Methods */}
      <ContactMethods />
      {/* Consultation Form */}
      <ConsultationForm />
      {/* Quote Calculator */}
      <QuoteCalculator />
      {/* Office Location */}
      <OfficeLocation />
      {/* FAQ Section */}
      <FAQSection />
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join 500+ satisfied clients who have transformed their businesses with our innovative solutions. Your success story starts with a simple conversation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="tel:+919876543210"
                className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white px-8 py-3 rounded-lg font-medium transition-brand inline-flex items-center space-x-2"
              >
                <span>📞</span>
                <span>Call Now: +91 6352412728</span>
              </a>
              <a
                href="mailto:redhand.solution@gmail.com"
                className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-brand inline-flex items-center space-x-2"
              >
                <span>✉️</span>
                <span>redhand.solution@gmail.com</span>
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-gray-400 text-sm">
                © {new Date()?.getFullYear()} Red Hand Solutions. All rights reserved. | Rajkot, Gujarat, India
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactConsultation;