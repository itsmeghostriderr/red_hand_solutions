import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const IndustrySolutionsSection = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industrySolutions = [
    {
      id: 'retail-ecommerce',
      title: 'Retail & E-commerce',
      subtitle: 'Digital Shopping Experiences',
      description: 'Transform your retail business with feature-rich e-commerce apps that drive sales and customer engagement across Gujarat\'s growing digital marketplace.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      icon: 'ShoppingBag',
      color: 'from-blue-600 to-purple-600',
      solutions: [
        {
          name: 'Multi-vendor Marketplace',
          description: 'Complete marketplace solution connecting local vendors with customers',
          features: ['Vendor onboarding', 'Commission management', 'Order tracking', 'Payment gateway']
        },
        {
          name: 'Inventory Management',
          description: 'Real-time inventory tracking and automated stock management',
          features: ['Stock alerts', 'Barcode scanning', 'Supplier integration', 'Analytics dashboard']
        },
        {
          name: 'Customer Loyalty Program',
          description: 'Reward system to increase customer retention and repeat purchases',
          features: ['Points system', 'Tier-based rewards', 'Referral bonuses', 'Personalized offers']
        }
      ],
      localFocus: [
        'Gujarati language support',
        'Local payment methods (UPI, Paytm)',
        'Regional shipping partners',
        'Festival-specific campaigns'
      ],
      successMetrics: {
        apps: '25+',
        revenue: '₹2.5Cr+',
        users: '1.2L+'
      }
    },
    {
      id: 'healthcare',
      title: 'Healthcare & Wellness',
      subtitle: 'Digital Health Solutions',
      description: 'Revolutionize healthcare delivery with comprehensive digital solutions that connect patients, doctors, and healthcare providers across Gujarat.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      icon: 'Heart',
      color: 'from-green-600 to-teal-600',
      solutions: [
        {
          name: 'Telemedicine Platform',
          description: 'Connect patients with doctors through secure video consultations',
          features: ['Video consultations', 'Prescription management', 'Medical records', 'Appointment scheduling']
        },
        {
          name: 'Hospital Management System',
          description: 'Comprehensive solution for hospital operations and patient management',
          features: ['Patient registration', 'Bed management', 'Billing system', 'Staff scheduling']
        },
        {
          name: 'Health Monitoring App',
          description: 'Personal health tracking with wearable device integration',
          features: ['Vital signs tracking', 'Medication reminders', 'Health reports', 'Emergency alerts']
        }
      ],
      localFocus: [
        'Multi-language support (Gujarati, Hindi)',
        'Integration with local hospitals',
        'Ayurvedic medicine support',
        'Rural healthcare connectivity'
      ],
      successMetrics: {
        apps: '15+',
        revenue: '₹1.8Cr+',
        users: '85K+'
      }
    },
    {
      id: 'logistics',
      title: 'Logistics & Transportation',
      subtitle: 'Smart Logistics Solutions',
      description: 'Optimize your logistics operations with intelligent tracking, route optimization, and fleet management solutions designed for Gujarat\'s transportation industry.',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop',
      icon: 'Truck',
      color: 'from-orange-600 to-red-600',
      solutions: [
        {
          name: 'Fleet Management System',
          description: 'Complete fleet tracking and management solution',
          features: ['GPS tracking', 'Fuel monitoring', 'Driver management', 'Route optimization']
        },
        {
          name: 'Delivery Management App',
          description: 'End-to-end delivery tracking and customer communication',
          features: ['Real-time tracking', 'Delivery confirmation', 'Customer notifications', 'Proof of delivery']
        },
        {
          name: 'Warehouse Management',
          description: 'Inventory and warehouse operations optimization',
          features: ['Inventory tracking', 'Order processing', 'Barcode scanning', 'Analytics reporting']
        }
      ],
      localFocus: [
        'Gujarat highway integration',
        'Local transport regulations',
        'Regional fuel price tracking',
        'Monsoon route planning'
      ],
      successMetrics: {
        apps: '20+',
        revenue: '₹3.2Cr+',
        users: '95K+'
      }
    },
    {
      id: 'education',
      title: 'Education & E-learning',
      subtitle: 'Digital Learning Platforms',
      description: 'Empower educational institutions and students with innovative e-learning solutions that make quality education accessible across Gujarat.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',
      icon: 'BookOpen',
      color: 'from-purple-600 to-pink-600',
      solutions: [
        {
          name: 'Learning Management System',
          description: 'Comprehensive platform for course management and student engagement',
          features: ['Course creation', 'Assignment management', 'Progress tracking', 'Discussion forums']
        },
        {
          name: 'Virtual Classroom',
          description: 'Interactive online classroom with real-time collaboration',
          features: ['Live streaming', 'Screen sharing', 'Interactive whiteboard', 'Recording capability']
        },
        {
          name: 'Student Information System',
          description: 'Complete student lifecycle management solution',
          features: ['Admission management', 'Grade tracking', 'Parent communication', 'Fee management']
        }
      ],
      localFocus: [
        'Gujarat board curriculum support',
        'Regional language content',
        'Local examination patterns',
        'Rural connectivity optimization'
      ],
      successMetrics: {
        apps: '18+',
        revenue: '₹2.1Cr+',
        users: '1.5L+'
      }
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing & Industry',
      subtitle: 'Industrial Automation',
      description: 'Digitize your manufacturing processes with IoT-enabled solutions, quality control systems, and production management apps for Gujarat\'s industrial sector.',
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&h=400&fit=crop',
      icon: 'Settings',
      color: 'from-gray-600 to-slate-600',
      solutions: [
        {
          name: 'Production Management',
          description: 'Real-time production monitoring and quality control',
          features: ['Production tracking', 'Quality metrics', 'Machine monitoring', 'Downtime analysis']
        },
        {
          name: 'Supply Chain Management',
          description: 'End-to-end supply chain visibility and optimization',
          features: ['Supplier management', 'Procurement tracking', 'Inventory optimization', 'Demand forecasting']
        },
        {
          name: 'Worker Safety & Compliance',
          description: 'Ensure workplace safety and regulatory compliance',
          features: ['Safety checklists', 'Incident reporting', 'Compliance tracking', 'Training management']
        }
      ],
      localFocus: [
        'Gujarat industrial policy compliance',
        'Local supplier integration',
        'Regional labor regulations',
        'Export documentation support'
      ],
      successMetrics: {
        apps: '12+',
        revenue: '₹4.5Cr+',
        users: '45K+'
      }
    },
    {
      id: 'fintech',
      title: 'FinTech & Banking',
      subtitle: 'Financial Technology Solutions',
      description: 'Build secure and compliant financial applications that serve Gujarat\'s growing fintech ecosystem with advanced security and user experience.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      icon: 'CreditCard',
      color: 'from-emerald-600 to-green-600',
      solutions: [
        {
          name: 'Digital Banking Platform',
          description: 'Complete digital banking solution with advanced security',
          features: ['Account management', 'Transaction history', 'Fund transfers', 'Bill payments']
        },
        {
          name: 'Investment Management',
          description: 'Portfolio management and investment tracking application',
          features: ['Portfolio tracking', 'Market analysis', 'Investment recommendations', 'Risk assessment']
        },
        {
          name: 'Loan Management System',
          description: 'End-to-end loan processing and management solution',
          features: ['Loan application', 'Credit scoring', 'Document verification', 'EMI tracking']
        }
      ],
      localFocus: [
        'RBI compliance and regulations',
        'Regional banking partnerships',
        'Local payment gateway integration',
        'Gujarati business community focus'
      ],
      successMetrics: {
        apps: '8+',
        revenue: '₹6.2Cr+',
        users: '2.3L+'
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Building" size={16} />
            <span>Industry Solutions</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tailored Solutions for
            <span className="block text-gradient bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Every Industry
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand the unique challenges of different industries and create specialized mobile app solutions that address specific business needs across Gujarat's diverse economy.
          </p>
        </div>

        {/* Industry Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {industrySolutions?.map((industry, index) => (
            <button
              key={industry?.id}
              onClick={() => setActiveIndustry(index)}
              className={`p-6 rounded-2xl transition-all duration-300 text-center ${
                activeIndustry === index
                  ? `bg-gradient-to-br ${industry?.color} text-white shadow-brand-lg transform scale-105`
                  : 'bg-white text-gray-600 hover:bg-gray-50 shadow-brand hover:shadow-brand-lg'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 ${
                activeIndustry === index ? 'bg-white/20' : 'bg-gray-100'
              }`}>
                <Icon 
                  name={industry?.icon} 
                  size={24} 
                  className={activeIndustry === index ? 'text-white' : 'text-gray-600'} 
                />
              </div>
              <div className={`text-sm font-medium ${
                activeIndustry === index ? 'text-white' : 'text-gray-900'
              }`}>
                {industry?.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active Industry Details */}
        <div className="bg-white rounded-3xl shadow-brand-lg overflow-hidden">
          {/* Industry Header */}
          <div className={`bg-gradient-to-r ${industrySolutions?.[activeIndustry]?.color} p-8 lg:p-12 text-white`}>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Icon name={industrySolutions?.[activeIndustry]?.icon} size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">{industrySolutions?.[activeIndustry]?.title}</h3>
                    <div className="text-xl opacity-90">{industrySolutions?.[activeIndustry]?.subtitle}</div>
                  </div>
                </div>
                <p className="text-lg opacity-90 leading-relaxed">
                  {industrySolutions?.[activeIndustry]?.description}
                </p>
              </div>
              
              {/* Success Metrics */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">{industrySolutions?.[activeIndustry]?.successMetrics?.apps}</div>
                  <div className="text-sm opacity-80">Apps Built</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">{industrySolutions?.[activeIndustry]?.successMetrics?.revenue}</div>
                  <div className="text-sm opacity-80">Revenue Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">{industrySolutions?.[activeIndustry]?.successMetrics?.users}</div>
                  <div className="text-sm opacity-80">Active Users</div>
                </div>
              </div>
            </div>
          </div>

          {/* Industry Content */}
          <div className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Solutions */}
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-8">Our Solutions</h4>
                <div className="space-y-8">
                  {industrySolutions?.[activeIndustry]?.solutions?.map((solution, index) => (
                    <div key={index} className="border-l-4 border-secondary pl-6">
                      <h5 className="text-xl font-bold text-gray-900 mb-2">{solution?.name}</h5>
                      <p className="text-gray-600 mb-4">{solution?.description}</p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {solution?.features?.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Local Focus & Image */}
              <div className="space-y-8">
                {/* Industry Image */}
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={industrySolutions?.[activeIndustry]?.image}
                    alt={`${industrySolutions?.[activeIndustry]?.title} solutions`}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-lg font-semibold">{industrySolutions?.[activeIndustry]?.title}</div>
                    <div className="text-sm opacity-80">Industry Solutions</div>
                  </div>
                </div>

                {/* Local Focus */}
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Gujarat Market Focus</h4>
                  <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl p-6">
                    <div className="space-y-4">
                      {industrySolutions?.[activeIndustry]?.localFocus?.map((focus, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Icon name="MapPin" size={12} className="text-secondary" />
                          </div>
                          <span className="text-gray-700">{focus}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="space-y-4">
                  <Button
                    variant="default"
                    size="lg"
                    fullWidth
                    className={`bg-gradient-to-r ${industrySolutions?.[activeIndustry]?.color} hover:opacity-90 text-white shadow-brand`}
                    iconName="Calendar"
                    iconPosition="left"
                    onClick={() => window.open('https://calendly.com/redhand-solution/30min', '_blank')}
                  >
                    Discuss Your Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Comparison */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Why Choose Industry-Specific Solutions?</h3>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Generic solutions don't address unique industry challenges. Our specialized approach ensures your app meets specific regulatory, operational, and user requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Target" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">Targeted Features</h4>
              <p className="opacity-80">
                Features designed specifically for your industry's workflow and user behavior patterns.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Shield" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">Compliance Ready</h4>
              <p className="opacity-80">
                Built-in compliance with industry regulations and local Gujarat business requirements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Icon name="TrendingUp" size={32} />
              </div>
              <h4 className="text-xl font-bold mb-3">Faster ROI</h4>
              <p className="opacity-80">
                Industry-specific solutions deliver faster adoption and better return on investment.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-secondary/5 to-accent/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don't See Your Industry Listed?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We work with businesses across all industries. Let's discuss how we can create a custom mobile app solution for your specific business needs.
            </p>
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white shadow-brand"
              iconName="MessageCircle"
              iconPosition="left"
            >
              Discuss Custom Solution
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutionsSection;