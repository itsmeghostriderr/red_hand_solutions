import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const ServicesPreview = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies",
      icon: "Globe",
      features: ["React & Next.js", "E-commerce Solutions", "Progressive Web Apps", "API Integration"],
      color: "from-blue-500 to-blue-600",
      link: "/services-overview"
    },
    {
      id: 2,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: "Smartphone",
      features: ["React Native", "Flutter Development", "Native iOS/Android", "App Store Optimization"],
      color: "from-green-500 to-green-600",
      link: "/mobile-app-development"
    },
    {
      id: 3,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions",
      icon: "Cloud",
      features: ["AWS & Azure", "DevOps & CI/CD", "Microservices", "Database Management"],
      color: "from-purple-500 to-purple-600",
      link: "/services-overview"
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Data-driven digital marketing strategies to grow your business",
      icon: "TrendingUp",
      features: ["SEO Optimization", "Social Media Marketing", "PPC Campaigns", "Analytics & Reporting"],
      color: "from-orange-500 to-orange-600",
      link: "/services-overview"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-red-600">Core Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to transform your business and accelerate growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services?.map((service) => (
            <div
              key={service?.id}
              className="group relative bg-white rounded-2xl p-8 shadow-brand hover:shadow-brand-lg transition-brand cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredService(service?.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service?.color} opacity-0 group-hover:opacity-5 transition-brand`} />
              
              {/* Service Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service?.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-brand`}>
                <Icon name={service?.icon} size={32} color="white" />
              </div>

              {/* Service Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-brand">
                  {service?.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service?.description}
                </p>

                {/* Features List */}
                <div className={`space-y-2 mb-6 transition-brand ${
                  hoveredService === service?.id ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'
                } overflow-hidden`}>
                  {service?.features?.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <Icon name="Check" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <Link
                  to={service?.link}
                  className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-brand"
                >
                  <span>Learn More</span>
                  <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-brand" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center mt-12">
          <Link to="/services-overview">
            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-brand hover:shadow-brand-lg transition-brand">
              View All Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;