import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ClientTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Patel",
      company: "Gujarat Textiles Ltd",
      location: "Rajkot",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      testimonial: `Red Hand Solutions transformed our entire business operations with their custom ERP system. Our efficiency increased by 40% and we saved ₹2.5 lakhs annually on manual processes.`,
      rating: 5,
      project: "Custom ERP Development",
      result: "40% efficiency increase"
    },
    {
      id: 2,
      name: "Priya Sharma",
      company: "Ahmedabad Fashion Hub",
      location: "Ahmedabad",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      testimonial: `Their e-commerce platform helped us reach customers across Gujarat. Online sales grew by 300% in just 6 months. The team understood our local market perfectly.`,
      rating: 5,
      project: "E-commerce Platform",
      result: "300% sales growth"
    },
    {
      id: 3,
      name: "Amit Mehta",
      company: "Surat Diamond Exports",
      location: "Surat",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      testimonial: `The mobile app they developed for our diamond catalog revolutionized how we showcase products to international clients. Export inquiries increased by 250%.`,
      rating: 5,
      project: "Mobile App Development",
      result: "250% inquiry increase"
    },
    {
      id: 4,
      name: "Neha Joshi",
      company: "Vadodara Healthcare",
      location: "Vadodara",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      testimonial: `Their patient management system streamlined our operations completely. Appointment scheduling became 80% more efficient and patient satisfaction scores improved significantly.`,
      rating: 5,
      project: "Healthcare Management System",
      result: "80% efficiency improvement"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials?.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentClient = testimonials?.[currentTestimonial];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-red-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from Gujarat businesses that transformed with our solutions
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12 shadow-brand">
          {/* Quote Icon */}
          <div className="absolute top-8 left-8 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
            <Icon name="Quote" size={24} color="white" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Client Info */}
            <div className="text-center lg:text-left">
              <div className="relative inline-block mb-6">
                <Image
                  src={currentClient?.image}
                  alt={currentClient?.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto lg:mx-0"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Icon name="Check" size={16} color="white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{currentClient?.name}</h3>
              <p className="text-red-600 font-semibold mb-1">{currentClient?.company}</p>
              <p className="text-gray-500 text-sm mb-4">{currentClient?.location}</p>
              
              {/* Rating */}
              <div className="flex justify-center lg:justify-start mb-4">
                {[...Array(currentClient?.rating)]?.map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Project Details */}
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <p className="text-sm text-gray-600 mb-1">Project:</p>
                <p className="font-semibold text-gray-900 mb-2">{currentClient?.project}</p>
                <p className="text-sm text-gray-600 mb-1">Result:</p>
                <p className="font-semibold text-green-600">{currentClient?.result}</p>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="lg:col-span-2">
              <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                "{currentClient?.testimonial}"
              </blockquote>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {testimonials?.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-brand ${
                        index === currentTestimonial ? 'bg-red-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 bg-white rounded-full shadow-brand flex items-center justify-center hover:bg-red-50 transition-brand"
                  >
                    <Icon name="ChevronLeft" size={20} className="text-red-600" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 bg-white rounded-full shadow-brand flex items-center justify-center hover:bg-red-50 transition-brand"
                  >
                    <Icon name="ChevronRight" size={20} className="text-red-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div className="mt-16">
          <p className="text-center text-gray-500 mb-8">Trusted by leading businesses across Gujarat</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {testimonials?.map((client, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 rounded-lg p-4 h-16 flex items-center justify-center">
                  <span className="font-bold text-gray-600 text-sm">{client?.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;