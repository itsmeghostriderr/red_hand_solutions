import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles for animation
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 5
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-red-900">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3Ccircle%20cx%3D%2227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3Ccircle%20cx%3D%2247%22%20cy%3D%227%22%20r%3D%221%22/%3E%3Ccircle%20cx%3D%227%22%20cy%3D%2227%22%20r%3D%221%22/%3E%3Ccircle%20cx%3D%2227%22%20cy%3D%2227%22%20r%3D%221%22/%3E%3Ccircle%20cx%3D%2247%22%20cy%3D%2227%22%20r%3D%221%22/%3E%3Ccircle%20cx%3D%227%22%20cy%3D%2247%22%20r%3D%221%22/%3E%3Ccircle%20cx%3D%2227%22%20cy%3D%2247%22%20r%3D%221%22/%3E%3Ccircle%20cx%3D%2247%22%20cy%3D%2247%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse-slow"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-red-500 rounded-full opacity-20 animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block">Your Success,</span>
              <span className="block bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                Our Innovation
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Gujarat's premier digital transformation catalyst, delivering cutting-edge solutions with local understanding and global standards.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact-consultation">
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-brand-lg px-8 py-4 text-lg font-semibold"
                iconName="Rocket"
                iconPosition="left"
                iconSize={20}
              >
                Start Your Digital Journey
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold transition-brand"
                iconName="TrendingUp"
                iconPosition="left"
                iconSize={20}
              >
                View Our Impact
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-700">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-red-500 mb-2">150+</div>
              <div className="text-gray-300 text-sm sm:text-base">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-red-500 mb-2">85+</div>
              <div className="text-gray-300 text-sm sm:text-base">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-red-500 mb-2">8+</div>
              <div className="text-gray-300 text-sm sm:text-base">Years in Gujarat</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} color="white" className="opacity-60" />
      </div>
    </section>
  );
};

export default HeroSection;