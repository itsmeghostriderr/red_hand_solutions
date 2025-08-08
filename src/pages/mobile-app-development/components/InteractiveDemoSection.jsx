import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const InteractiveDemoSection = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const demoApps = [
    {
      id: 'retail',
      title: 'Retail & E-commerce',
      subtitle: 'ShopEasy - Local Shopping App',
      description: 'Complete e-commerce solution with inventory management, payment gateway integration, and real-time order tracking for Rajkot retailers.',
      features: [
        'Product catalog management',
        'Secure payment integration',
        'Order tracking & notifications',
        'Customer reviews & ratings',
        'Inventory synchronization',
        'Multi-language support'
      ],
      metrics: {
        downloads: '50K+',
        rating: '4.7★',
        retention: '78%'
      },
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Razorpay'],
      mockupImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=800&fit=crop',
      color: 'from-blue-600 to-purple-600',
      icon: 'ShoppingBag'
    },
    {
      id: 'healthcare',
      title: 'Healthcare & Wellness',
      subtitle: 'HealthCare+ - Patient Management',
      description: 'Comprehensive healthcare app connecting patients with doctors, appointment scheduling, and telemedicine features for Gujarat healthcare providers.',
      features: [
        'Doctor appointment booking',
        'Telemedicine consultations',
        'Medical records management',
        'Prescription tracking',
        'Health monitoring',
        'Emergency services'
      ],
      metrics: {
        downloads: '25K+',
        rating: '4.9★',
        retention: '85%'
      },
      technologies: ['Flutter', 'Firebase', 'WebRTC', 'Cloud Functions'],
      mockupImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=800&fit=crop',
      color: 'from-green-600 to-teal-600',
      icon: 'Heart'
    },
    {
      id: 'logistics',
      title: 'Logistics & Delivery',
      subtitle: 'FastTrack - Delivery Management',
      description: 'Real-time delivery tracking and fleet management solution for logistics companies operating in Gujarat and surrounding regions.',
      features: [
        'Real-time GPS tracking',
        'Route optimization',
        'Delivery confirmation',
        'Fleet management',
        'Customer notifications',
        'Analytics dashboard'
      ],
      metrics: {
        downloads: '15K+',
        rating: '4.6★',
        retention: '72%'
      },
      technologies: ['React Native', 'Google Maps', 'Socket.io', 'Express.js'],
      mockupImage: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=800&fit=crop',
      color: 'from-orange-600 to-red-600',
      icon: 'Truck'
    },
    {
      id: 'education',
      title: 'Education & Learning',
      subtitle: 'EduSmart - Learning Platform',
      description: 'Interactive learning platform with video lectures, assignments, and progress tracking for educational institutions in Gujarat.',
      features: [
        'Video lecture streaming',
        'Interactive assignments',
        'Progress tracking',
        'Discussion forums',
        'Offline content access',
        'Parent-teacher communication'
      ],
      metrics: {
        downloads: '35K+',
        rating: '4.8★',
        retention: '80%'
      },
      technologies: ['React Native', 'AWS', 'GraphQL', 'Redis'],
      mockupImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=800&fit=crop',
      color: 'from-purple-600 to-pink-600',
      icon: 'BookOpen'
    }
  ];

  const handlePlayDemo = () => {
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Play" size={16} />
            <span>Interactive Demos</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Experience Our Apps
            <span className="block text-gradient bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Across Industries
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore interactive demos of mobile applications we've built for different industries, showcasing our expertise in creating user-centric solutions.
          </p>
        </div>

        {/* Demo Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {demoApps?.map((app, index) => (
            <button
              key={app?.id}
              onClick={() => setActiveDemo(index)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 ${
                activeDemo === index
                  ? `bg-gradient-to-r ${app?.color} text-white shadow-brand`
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <Icon name={app?.icon} size={20} />
              <span className="font-medium">{app?.title}</span>
            </button>
          ))}
        </div>

        {/* Main Demo Display */}
        <div className="bg-white rounded-3xl shadow-brand-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Side - App Mockup */}
            <div className={`relative bg-gradient-to-br ${demoApps?.[activeDemo]?.color} p-12 flex items-center justify-center`}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
              </div>

              {/* Phone Mockup */}
              <div className="relative z-10">
                <div className="w-72 h-[580px] bg-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-12 bg-gray-900 rounded-t-[2.5rem] flex items-center justify-between px-6 text-white text-sm">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                        <div className="w-6 h-2 bg-white rounded-sm"></div>
                      </div>
                    </div>

                    {/* App Content */}
                    <div className="pt-12 h-full overflow-hidden">
                      <Image
                        src={demoApps?.[activeDemo]?.mockupImage}
                        alt={`${demoApps?.[activeDemo]?.title} app mockup`}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button
                          onClick={handlePlayDemo}
                          className={`w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-brand-lg transition-all duration-300 ${
                            isPlaying ? 'scale-110 bg-secondary' : 'hover:scale-105'
                          }`}
                        >
                          <Icon 
                            name={isPlaying ? "Pause" : "Play"} 
                            size={32} 
                            className={isPlaying ? "text-white" : "text-secondary"} 
                          />
                        </button>
                      </div>

                      {/* Demo Status */}
                      {isPlaying && (
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-black/80 text-white px-4 py-2 rounded-lg text-sm">
                            <div className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                              <span>Live Demo Playing...</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center animate-float">
                  <Icon name="Star" size={20} className="text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center animate-pulse-slow">
                  <Icon name="Heart" size={20} className="text-white" />
                </div>
              </div>
            </div>

            {/* Right Side - App Details */}
            <div className="p-12">
              <div className="space-y-8">
                {/* App Header */}
                <div>
                  <div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${demoApps?.[activeDemo]?.color} text-white px-4 py-2 rounded-full text-sm font-medium mb-4`}>
                    <Icon name={demoApps?.[activeDemo]?.icon} size={16} />
                    <span>{demoApps?.[activeDemo]?.title}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {demoApps?.[activeDemo]?.subtitle}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {demoApps?.[activeDemo]?.description}
                  </p>
                </div>

                {/* App Metrics */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-secondary">{demoApps?.[activeDemo]?.metrics?.downloads}</div>
                    <div className="text-sm text-gray-600">Downloads</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-secondary">{demoApps?.[activeDemo]?.metrics?.rating}</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-secondary">{demoApps?.[activeDemo]?.metrics?.retention}</div>
                    <div className="text-sm text-gray-600">Retention</div>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {demoApps?.[activeDemo]?.features?.map((feature, index) => (
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
                    {demoApps?.[activeDemo]?.technologies?.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    variant="default"
                    className={`bg-gradient-to-r ${demoApps?.[activeDemo]?.color} hover:opacity-90 text-white shadow-brand`}
                    iconName="ExternalLink"
                    iconPosition="right"
                  >
                    View Full Case Study
                  </Button>
                  <Button
                    variant="outline"
                    iconName="MessageCircle"
                    iconPosition="left"
                    onClick={() => window.open('https://calendly.com/redhand-solution/30min', '_blank')}
                  >
                    Discuss Similar Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-secondary/5 to-accent/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Build Your App?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss your mobile app idea and create a solution that drives your business forward in the competitive Gujarat market.
            </p>
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white shadow-brand"
              iconName="Calendar"
              iconPosition="left"
              onClick={() => window.open('https://calendly.com/redhand-solution/30min', '_blank')}
            >
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemoSection;