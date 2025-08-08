import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MaintenancePackagesSection = () => {
  const [activePackage, setActivePackage] = useState(1);
  const [billingCycle, setBillingCycle] = useState('monthly');

  const maintenancePackages = [
    {
      id: 'basic',
      name: 'Basic Support',
      description: 'Essential maintenance for small apps with basic requirements',
      icon: 'Shield',
      color: 'from-blue-600 to-purple-600',
      pricing: {
        monthly: 15000,
        quarterly: 40000,
        yearly: 150000
      },
      features: [
        'Bug fixes and minor updates',
        'OS compatibility updates',
        'Basic performance monitoring',
        'Email support (48-hour response)',
        'Monthly performance reports',
        'App store update submissions'
      ],
      limitations: [
        'Up to 5 hours of development per month',
        'Basic analytics reporting',
        'Standard support hours (9 AM - 6 PM)'
      ],
      ideal: 'Small businesses, MVP apps, limited user base'
    },
    {
      id: 'professional',
      name: 'Professional Care',
      description: 'Comprehensive maintenance for growing businesses with active user base',
      icon: 'Settings',
      color: 'from-green-600 to-teal-600',
      pricing: {
        monthly: 35000,
        quarterly: 95000,
        yearly: 350000
      },
      features: [
        'Priority bug fixes and updates',
        'Feature enhancements',
        'Advanced performance monitoring',
        'Phone & email support (24-hour response)',
        'Bi-weekly performance reports',
        'Security patches and updates',
        'User analytics and insights',
        'App store optimization',
        'Third-party integration updates'
      ],
      limitations: [
        'Up to 15 hours of development per month',
        'Advanced analytics dashboard',
        'Extended support hours (8 AM - 8 PM)'
      ],
      ideal: 'Growing businesses, active user engagement, regular updates needed',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise Plus',
      description: 'Premium maintenance with dedicated support for mission-critical applications',
      icon: 'Crown',
      color: 'from-orange-600 to-red-600',
      pricing: {
        monthly: 65000,
        quarterly: 180000,
        yearly: 650000
      },
      features: [
        'Immediate bug fixes and updates',
        'Custom feature development',
        'Real-time performance monitoring',
        'Dedicated support manager',
        'Weekly performance reports',
        'Advanced security monitoring',
        'Custom analytics and reporting',
        'Priority app store submissions',
        'Server maintenance and scaling',
        'Disaster recovery planning',
        '24/7 emergency support',
        'Quarterly strategy sessions'
      ],
      limitations: [
        'Unlimited development hours',
        'Custom reporting and analytics',
        '24/7 premium support'
      ],
      ideal: 'Large enterprises, high-traffic apps, mission-critical applications'
    }
  ];

  const additionalServices = [
    {
      name: 'Emergency Support',
      description: 'Critical issue resolution outside business hours',
      price: '₹5,000/hour',
      icon: 'AlertTriangle'
    },
    {
      name: 'Feature Development',
      description: 'New feature development beyond package limits',
      price: '₹2,500/hour',
      icon: 'Plus'
    },
    {
      name: 'Performance Optimization',
      description: 'App speed and performance improvements',
      price: '₹25,000/project',
      icon: 'Zap'
    },
    {
      name: 'Security Audit',
      description: 'Comprehensive security assessment and fixes',
      price: '₹50,000/audit',
      icon: 'Lock'
    },
    {
      name: 'App Store Consultation',
      description: 'ASO strategy and implementation',
      price: '₹15,000/month',
      icon: 'TrendingUp'
    },
    {
      name: 'Analytics Setup',
      description: 'Advanced analytics and tracking implementation',
      price: '₹35,000/setup',
      icon: 'BarChart3'
    }
  ];

  const slaCommitments = [
    {
      category: 'Response Time',
      basic: '48 hours',
      professional: '24 hours',
      enterprise: '4 hours'
    },
    {
      category: 'Critical Bug Fix',
      basic: '5 business days',
      professional: '2 business days',
      enterprise: '24 hours'
    },
    {
      category: 'App Store Updates',
      basic: '7 business days',
      professional: '3 business days',
      enterprise: '1 business day'
    },
    {
      category: 'Uptime Guarantee',
      basic: '99.5%',
      professional: '99.8%',
      enterprise: '99.9%'
    }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    })?.format(price);
  };

  const getDiscountedPrice = (price, cycle) => {
    if (cycle === 'quarterly') return price * 0.9;
    if (cycle === 'yearly') return price * 0.8;
    return price;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Wrench" size={16} />
            <span>Maintenance & Support</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive App
            <span className="block text-gradient bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Maintenance Packages
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Keep your mobile app running smoothly with our comprehensive maintenance packages. From bug fixes to feature enhancements, we ensure your app stays current and performs optimally.
          </p>
        </div>

        {/* Billing Cycle Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-1 shadow-brand">
            <div className="flex">
              {[
                { key: 'monthly', label: 'Monthly' },
                { key: 'quarterly', label: 'Quarterly', badge: '10% OFF' },
                { key: 'yearly', label: 'Yearly', badge: '20% OFF' }
              ]?.map((cycle) => (
                <button
                  key={cycle?.key}
                  onClick={() => setBillingCycle(cycle?.key)}
                  className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    billingCycle === cycle?.key
                      ? 'bg-secondary text-white shadow-brand'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {cycle?.label}
                  {cycle?.badge && (
                    <span className="absolute -top-2 -right-2 bg-accent text-white text-xs px-2 py-1 rounded-full">
                      {cycle?.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Maintenance Packages */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {maintenancePackages?.map((pkg, index) => (
            <div
              key={pkg?.id}
              className={`relative bg-white rounded-3xl shadow-brand hover:shadow-brand-lg transition-all duration-300 overflow-hidden ${
                pkg?.popular ? 'ring-2 ring-secondary transform scale-105' : ''
              } ${activePackage === index ? 'ring-2 ring-accent' : ''}`}
              onClick={() => setActivePackage(index)}
            >
              {/* Popular Badge */}
              {pkg?.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-secondary text-white px-6 py-2 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Package Header */}
              <div className={`bg-gradient-to-r ${pkg?.color} p-8 text-white`}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Icon name={pkg?.icon} size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{pkg?.name}</h3>
                    <p className="opacity-90">{pkg?.description}</p>
                  </div>
                </div>

                {/* Pricing */}
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">
                    {formatPrice(getDiscountedPrice(pkg?.pricing?.[billingCycle], billingCycle))}
                  </div>
                  <div className="text-sm opacity-80">
                    per {billingCycle === 'yearly' ? 'year' : billingCycle === 'quarterly' ? 'quarter' : 'month'}
                  </div>
                  {billingCycle !== 'monthly' && (
                    <div className="text-sm opacity-70 line-through">
                      {formatPrice(pkg?.pricing?.[billingCycle])}
                    </div>
                  )}
                </div>
              </div>

              {/* Package Content */}
              <div className="p-8">
                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">What's Included</h4>
                  <div className="space-y-3">
                    {pkg?.features?.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Limitations */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Package Details</h4>
                  <div className="space-y-3">
                    {pkg?.limitations?.map((limitation, limitIndex) => (
                      <div key={limitIndex} className="flex items-start space-x-3">
                        <Icon name="Info" size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{limitation}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal For */}
                <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                  <h5 className="text-sm font-semibold text-gray-900 mb-2">Ideal For:</h5>
                  <p className="text-sm text-gray-600">{pkg?.ideal}</p>
                </div>

                {/* CTA Button */}
                <Button
                  variant={pkg?.popular ? "default" : "outline"}
                  size="lg"
                  fullWidth
                  className={pkg?.popular ? "bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white shadow-brand" : ""}
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Choose {pkg?.name}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* SLA Commitments */}
        <div className="bg-white rounded-3xl shadow-brand-lg p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Service Level Agreements</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We stand behind our maintenance services with clear SLA commitments and guaranteed response times
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Service Metric</th>
                  <th className="text-center py-4 px-6 font-semibold text-blue-600">Basic</th>
                  <th className="text-center py-4 px-6 font-semibold text-green-600">Professional</th>
                  <th className="text-center py-4 px-6 font-semibold text-orange-600">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {slaCommitments?.map((sla, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-900">{sla?.category}</td>
                    <td className="py-4 px-6 text-center text-gray-700">{sla?.basic}</td>
                    <td className="py-4 px-6 text-center text-gray-700">{sla?.professional}</td>
                    <td className="py-4 px-6 text-center text-gray-700">{sla?.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Extend your maintenance package with specialized services tailored to your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices?.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-brand hover:shadow-brand-lg transition-all duration-300 p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={service?.icon} size={20} color="white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{service?.name}</h4>
                    <p className="text-gray-600 text-sm mb-3">{service?.description}</p>
                    <div className="text-secondary font-bold">{service?.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Our Maintenance */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Why Choose Our Maintenance Services?</h3>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              We don't just fix bugs – we ensure your app evolves with your business and stays ahead of the competition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'Clock',
                title: 'Proactive Monitoring',
                description: 'We identify and fix issues before they impact your users'
              },
              {
                icon: 'Shield',
                title: 'Security First',
                description: 'Regular security updates and vulnerability assessments'
              },
              {
                icon: 'TrendingUp',
                title: 'Performance Optimization',
                description: 'Continuous improvements to app speed and efficiency'
              },
              {
                icon: 'Users',
                title: 'User Experience Focus',
                description: 'Regular UX improvements based on user feedback and analytics'
              }
            ]?.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit?.icon} size={24} />
                </div>
                <h4 className="text-lg font-semibold mb-3">{benefit?.title}</h4>
                <p className="text-sm opacity-80">{benefit?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-secondary/5 to-accent/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Maintenance Plan?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Every app is unique. Let's discuss your specific maintenance requirements and create a custom plan that fits your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white shadow-brand"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={() => window.open('https://calendly.com/redhand-solution/30min', '_blank')}
              >
                Discuss Custom Plan
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
              >
                Download Service Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenancePackagesSection;