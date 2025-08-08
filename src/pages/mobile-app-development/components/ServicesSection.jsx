import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'native-ios',
      title: 'Native iOS Development',
      description: 'High-performance iOS apps built with Swift and SwiftUI for optimal user experience and App Store success.',
      features: [
        'Swift & SwiftUI development',
        'iOS Human Interface Guidelines',
        'Core Data & CloudKit integration',
        'App Store optimization',
        'Push notifications & in-app purchases',
        'Advanced iOS features (Face ID, ARKit)'
      ],
      technologies: ['Swift', 'SwiftUI', 'Xcode', 'Core Data', 'CloudKit'],
      pricing: '₹2,50,000 - ₹8,00,000',
      timeline: '12-20 weeks',
      icon: 'Apple',
      color: 'from-gray-600 to-gray-800'
    },
    {
      id: 'native-android',
      title: 'Native Android Development',
      description: 'Robust Android applications using Kotlin and Jetpack Compose for seamless performance across all Android devices.',
      features: [
        'Kotlin & Jetpack Compose',
        'Material Design implementation',
        'Room database & Firebase',
        'Google Play Store optimization',
        'Android-specific features',
        'Multi-device compatibility'
      ],
      technologies: ['Kotlin', 'Jetpack Compose', 'Android Studio', 'Room', 'Firebase'],
      pricing: '₹2,00,000 - ₹7,50,000',
      timeline: '10-18 weeks',
      icon: 'Smartphone',
      color: 'from-green-600 to-green-800'
    },
    {
      id: 'cross-platform',
      title: 'Cross-Platform Development',
      description: 'Cost-effective React Native solutions that deliver native performance across iOS and Android platforms.',
      features: [
        'React Native framework',
        'Single codebase for both platforms',
        'Native module integration',
        'Hot reload development',
        'Third-party library support',
        '90% code reusability'
      ],
      technologies: ['React Native', 'JavaScript', 'Redux', 'Expo', 'Metro'],
      pricing: '₹1,50,000 - ₹5,00,000',
      timeline: '8-14 weeks',
      icon: 'Layers',
      color: 'from-blue-600 to-purple-600'
    },
    {
      id: 'app-store-optimization',
      title: 'App Store Optimization',
      description: 'Complete ASO strategy to improve app visibility, increase downloads, and boost organic user acquisition.',
      features: [
        'Keyword research & optimization',
        'App title & description optimization',
        'Screenshot & video creation',
        'A/B testing for store listings',
        'Review management',
        'Competitor analysis'
      ],
      technologies: ['App Store Connect', 'Google Play Console', 'ASO Tools', 'Analytics'],
      pricing: '₹25,000 - ₹75,000/month',
      timeline: 'Ongoing',
      icon: 'TrendingUp',
      color: 'from-orange-600 to-red-600'
    },
    {
      id: 'maintenance-support',
      title: 'App Maintenance & Support',
      description: 'Comprehensive maintenance packages ensuring your app stays updated, secure, and performing optimally.',
      features: [
        'Regular updates & bug fixes',
        'OS compatibility updates',
        'Security patches',
        'Performance monitoring',
        'Feature enhancements',
        '24/7 technical support'
      ],
      technologies: ['Monitoring Tools', 'Analytics', 'Crash Reporting', 'CI/CD'],
      pricing: '₹15,000 - ₹50,000/month',
      timeline: 'Ongoing',
      icon: 'Settings',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 'ui-ux-design',
      title: 'Mobile UI/UX Design',
      description: 'User-centered design approach creating intuitive and engaging mobile experiences that drive user retention.',
      features: [
        'User research & personas',
        'Wireframing & prototyping',
        'Visual design & branding',
        'Usability testing',
        'Design system creation',
        'Accessibility compliance'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision'],
      pricing: '₹75,000 - ₹2,50,000',
      timeline: '4-8 weeks',
      icon: 'Palette',
      color: 'from-pink-600 to-rose-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Code" size={16} />
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete Mobile App
            <span className="block text-gradient bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Development Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From native iOS and Android development to cross-platform solutions, we provide end-to-end mobile app development services tailored for Gujarat businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 shadow-brand-lg"
              iconName="Calendar"
              iconPosition="left"
              onClick={() => window.open('https://calendly.com/redhand-solution/30min', '_blank')}
            >
              Schedule Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={() => window.open('https://calendly.com/redhand-solution/30min', '_blank')}
            >
              Free App Consultation
            </Button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services?.map((service, index) => (
            <div
              key={service?.id}
              className={`group cursor-pointer transition-all duration-300 ${
                activeService === index
                  ? 'transform -translate-y-2'
                  : 'hover:transform hover:-translate-y-1'
              }`}
              onClick={() => setActiveService(index)}
            >
              <div className={`relative p-8 bg-white rounded-2xl shadow-brand hover:shadow-brand-lg transition-all duration-300 border-2 ${
                activeService === index ? 'border-secondary' : 'border-transparent'
              }`}>
                {/* Service Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service?.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={service?.icon} size={28} color="white" />
                </div>

                {/* Service Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-secondary transition-colors">
                    {service?.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service?.description}
                  </p>

                  {/* Pricing & Timeline */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <div className="text-sm text-gray-500">Starting from</div>
                      <div className="font-bold text-secondary">{service?.pricing}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Timeline</div>
                      <div className="font-semibold text-gray-900">{service?.timeline}</div>
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {activeService === index && (
                    <div className="absolute top-4 right-4">
                      <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Service View */}
        <div className="bg-white rounded-3xl shadow-brand-lg p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Service Details */}
            <div className="space-y-8">
              <div>
                <div className={`inline-flex items-center space-x-3 bg-gradient-to-r ${services?.[activeService]?.color} text-white px-6 py-3 rounded-full mb-6`}>
                  <Icon name={services?.[activeService]?.icon} size={20} />
                  <span className="font-semibold">{services?.[activeService]?.title}</span>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {services?.[activeService]?.description}
                </p>
              </div>

              {/* Features List */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {services?.[activeService]?.features?.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {services?.[activeService]?.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Pricing & CTA */}
            <div className="space-y-8">
              {/* Pricing Card */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Investment Details</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Starting Price</span>
                    <span className="text-2xl font-bold text-secondary">{services?.[activeService]?.pricing}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Timeline</span>
                    <span className="font-semibold text-gray-900">{services?.[activeService]?.timeline}</span>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-500 mb-2">What's Included:</div>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Complete project documentation</li>
                      <li>• Source code & deployment</li>
                      <li>• 3 months free support</li>
                      <li>• App store submission</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <Button
                  variant="default"
                  size="lg"
                  fullWidth
                  className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white shadow-brand"
                  iconName="Calendar"
                  iconPosition="left"
                  onClick={() => window.open('https://calendly.com/redhand-solution/30min', '_blank')}
                >
                  Schedule Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  fullWidth
                  iconName="Download"
                  iconPosition="left"
                >
                  Download Service Brochure
                </Button>
              </div>

              {/* Contact Info */}
              <div className="text-center p-6 bg-gradient-to-r from-secondary/5 to-accent/5 rounded-xl">
                <div className="text-sm text-gray-600 mb-2">Need a custom quote?</div>
                <div className="font-semibold text-gray-900">Call: +91 6352412728</div>
                <div className="text-sm text-gray-600">Free consultation available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;