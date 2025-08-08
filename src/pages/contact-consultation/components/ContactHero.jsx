import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-gray-900 to-secondary pt-24 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-accent/30 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-secondary/40 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Icon name="Zap" size={16} color="#E53E3E" />
            <span className="text-white text-sm font-medium">Free Consultation Available</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Let's Transform Your
            <span className="block text-gradient bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Digital Vision
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to elevate your business with cutting-edge technology? Our expert team in Rajkot is here to guide you through every step of your digital transformation journey.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24h</div>
              <div className="text-gray-400 text-sm">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400 text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white shadow-brand-lg px-8 py-4"
              iconName="Calendar"
              iconPosition="left"
              iconSize={20}
          onClick={() => window.open('https://calendly.com/redhand-solution/30min', '_blank')}
            >
              Schedule Free Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4"
              iconName="Phone"
              iconPosition="left"
              iconSize={20}
            >
              Call Now: +91 6352412728
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center space-x-8 mt-12 opacity-70">
            <div className="flex items-center space-x-2 text-white text-sm">
              <Icon name="Shield" size={16} />
              <span>100% Secure</span>
            </div>
            <div className="flex items-center space-x-2 text-white text-sm">
              <Icon name="Clock" size={16} />
              <span>Quick Response</span>
            </div>
            <div className="flex items-center space-x-2 text-white text-sm">
              <Icon name="Award" size={16} />
              <span>Certified Experts</span>
            </div>
            <div className="flex items-center space-x-2 text-white text-sm">
              <Icon name="MapPin" size={16} />
              <span>Rajkot Based</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;