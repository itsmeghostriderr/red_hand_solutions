import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToAction = () => {
  const benefits = [
    "Free consultation & project assessment",
    "Custom solution tailored to your needs", 
    "Transparent pricing with no hidden costs",
    "Dedicated project manager assigned",
    "24/7 support throughout development",
    "Post-launch maintenance & optimization"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-red-100 leading-relaxed">
                Join 85+ successful businesses across Gujarat who chose Red Hand Solutions for their digital transformation journey. Let's discuss how we can accelerate your growth.
              </p>
            </div>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={14} color="white" />
                  </div>
                  <span className="text-red-100 text-sm leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-white text-red-600 hover:bg-red-50 shadow-brand-lg px-8 py-4 text-lg font-semibold w-full sm:w-auto"
                iconName="Calendar"
                iconPosition="left"
                iconSize={20}
                onClick={() => window.open('https://calendly.com/redhand-solution/30min', '_blank')}
              >
                Get Free Consultation
              </Button>
              <Link to="/portfolio">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold w-full sm:w-auto transition-brand"
                  iconName="Eye"
                  iconPosition="left"
                  iconSize={20}
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Contact Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Get in Touch Today</h3>
            
            <div className="space-y-6">
              {/* Contact Methods */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Icon name="Phone" size={24} color="white" />
                  </div>
                  <div>
                    <p className="font-semibold">Call Us Now</p>
                    <p className="text-red-100">+91 6352412728</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Icon name="Mail" size={24} color="white" />
                  </div>
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-red-100">redhand.solution@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Icon name="MapPin" size={24} color="white" />
                  </div>
                  <div>
                    <p className="font-semibold">Visit Our Office</p>
                    <p className="text-red-100">Rajkot, Gujarat, India</p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-white/10 rounded-xl p-4 border border-white/20">
                <div className="flex items-center space-x-3 mb-2">
                  <Icon name="Clock" size={20} color="white" />
                  <span className="font-semibold">Quick Response Guarantee</span>
                </div>
                <p className="text-red-100 text-sm">
                  We respond to all inquiries within 2 hours during business hours and provide project estimates within 24 hours.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-between pt-4 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold">85+</div>
                  <div className="text-red-100 text-xs">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">150+</div>
                  <div className="text-red-100 text-xs">Projects Done</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">99%</div>
                  <div className="text-red-100 text-xs">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;