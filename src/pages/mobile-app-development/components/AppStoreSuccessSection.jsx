import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const AppStoreSuccessSection = () => {
  const [activeMetric, setActiveMetric] = useState(0);

  const successMetrics = [
    {
      id: 'downloads',
      title: 'Total Downloads',
      value: '2.5M+',
      description: 'Combined downloads across all our client apps',
      icon: 'Download',
      color: 'from-blue-600 to-purple-600',
      details: [
        'iOS App Store: 1.2M downloads',
        'Google Play Store: 1.3M downloads',
        'Average monthly growth: 15%',
        'Peak download day: 25K downloads'
      ]
    },
    {
      id: 'ratings',
      title: 'Average Rating',
      value: '4.7★',
      description: 'Consistent high ratings across app stores',
      icon: 'Star',
      color: 'from-yellow-500 to-orange-500',
      details: [
        'iOS App Store average: 4.8★',
        'Google Play Store average: 4.6★',
        '92% of reviews are 4+ stars',
        'Average review response time: 2 hours'
      ]
    },
    {
      id: 'retention',
      title: 'User Retention',
      value: '78%',
      description: '30-day user retention rate',
      icon: 'Users',
      color: 'from-green-600 to-teal-600',
      details: [
        'Day 1 retention: 85%',
        'Day 7 retention: 82%',
        'Day 30 retention: 78%',
        'Day 90 retention: 65%'
      ]
    },
    {
      id: 'revenue',
      title: 'Revenue Generated',
      value: '₹15Cr+',
      description: 'Total revenue generated for clients',
      icon: 'TrendingUp',
      color: 'from-emerald-600 to-green-600',
      details: [
        'E-commerce apps: ₹8.5Cr',
        'Service apps: ₹4.2Cr',
        'Subscription apps: ₹2.3Cr',
        'Average monthly growth: 12%'
      ]
    }
  ];

  const featuredApps = [
    {
      name: 'ShopEasy Gujarat',
      category: 'E-commerce',
      downloads: '250K+',
      rating: '4.8★',
      revenue: '₹2.5Cr',
      description: 'Multi-vendor marketplace connecting local Gujarat businesses with customers',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop',
      features: ['Multi-language support', 'Local payment integration', 'Real-time tracking'],
      achievements: [
        'Featured in Google Play Store',
        'Top 10 Shopping App in Gujarat',
        '95% customer satisfaction'
      ]
    },
    {
      name: 'HealthCare+ Rajkot',
      category: 'Healthcare',
      downloads: '180K+',
      rating: '4.9★',
      revenue: '₹1.8Cr',
      description: 'Comprehensive healthcare platform connecting patients with doctors',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop',
      features: ['Telemedicine', 'Appointment booking', 'Medical records'],
      achievements: [
        'Healthcare Innovation Award 2023',
        'Partnership with 50+ hospitals',
        '24/7 emergency support'
      ]
    },
    {
      name: 'EduSmart Learning',
      category: 'Education',
      downloads: '320K+',
      rating: '4.7★',
      revenue: '₹1.9Cr',
      description: 'Interactive learning platform for students across Gujarat',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop',
      features: ['Video lectures', 'Interactive assignments', 'Progress tracking'],
      achievements: [
        'Used by 200+ schools',
        'Education Excellence Award',
        '85% improvement in test scores'
      ]
    }
  ];

  const asoStrategies = [
    {
      title: 'Keyword Optimization',
      description: 'Strategic keyword research and implementation for better discoverability',
      icon: 'Search',
      results: '+150% organic visibility'
    },
    {
      title: 'Visual Assets',
      description: 'Compelling screenshots, videos, and app icons that drive conversions',
      icon: 'Image',
      results: '+85% conversion rate'
    },
    {
      title: 'Review Management',
      description: 'Proactive review monitoring and response strategy',
      icon: 'MessageSquare',
      results: '+0.8 rating improvement'
    },
    {
      title: 'A/B Testing',
      description: 'Continuous testing of store listings for optimal performance',
      icon: 'BarChart3',
      results: '+65% download rate'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Award" size={16} />
            <span>App Store Success</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Proven Track Record of
            <span className="block text-gradient bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              App Store Success
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our apps consistently achieve high ratings, strong user retention, and significant revenue generation across both iOS App Store and Google Play Store.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {successMetrics?.map((metric, index) => (
            <div
              key={metric?.id}
              className={`cursor-pointer transition-all duration-300 ${
                activeMetric === index ? 'transform -translate-y-2' : 'hover:transform hover:-translate-y-1'
              }`}
              onClick={() => setActiveMetric(index)}
            >
              <div className={`p-8 bg-white rounded-2xl shadow-brand hover:shadow-brand-lg transition-all duration-300 border-2 ${
                activeMetric === index ? 'border-secondary' : 'border-transparent'
              }`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${metric?.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <Icon name={metric?.icon} size={28} color="white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{metric?.value}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{metric?.title}</h3>
                <p className="text-gray-600">{metric?.description}</p>
                
                {activeMetric === index && (
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="space-y-2">
                      {metric?.details?.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Apps */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Featured Success Stories</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore some of our most successful apps that have achieved remarkable performance in app stores
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredApps?.map((app, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-brand hover:shadow-brand-lg transition-all duration-300 overflow-hidden group">
                {/* App Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={app?.image}
                    alt={`${app?.name} app screenshot`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                    {app?.category}
                  </div>
                </div>

                {/* App Details */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{app?.name}</h4>
                  <p className="text-gray-600 mb-4">{app?.description}</p>

                  {/* App Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-secondary">{app?.downloads}</div>
                      <div className="text-xs text-gray-500">Downloads</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-secondary">{app?.rating}</div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-secondary">{app?.revenue}</div>
                      <div className="text-xs text-gray-500">Revenue</div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-gray-900 mb-2">Key Features</h5>
                    <div className="flex flex-wrap gap-2">
                      {app?.features?.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-gray-900 mb-2">Achievements</h5>
                    <div className="space-y-1">
                      {app?.achievements?.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                          <Icon name="Award" size={12} className="text-secondary flex-shrink-0" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    iconName="ExternalLink"
                    iconPosition="right"
                  >
                    View Case Study
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ASO Strategies */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 lg:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our App Store Optimization Strategy</h3>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              We don't just build apps – we ensure they succeed in the competitive app store environment with proven ASO techniques
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {asoStrategies?.map((strategy, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300">
                  <Icon name={strategy?.icon} size={32} />
                </div>
                <h4 className="text-xl font-bold mb-3">{strategy?.title}</h4>
                <p className="opacity-80 mb-4">{strategy?.description}</p>
                <div className="inline-flex items-center space-x-2 bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                  <Icon name="TrendingUp" size={14} />
                  <span>{strategy?.results}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* App Store Guidelines */}
        <div className="bg-white rounded-3xl shadow-brand-lg p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                App Store Compliance & Guidelines
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                We ensure your app meets all app store guidelines and requirements for smooth approval and ongoing compliance.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: 'iOS App Store Guidelines',
                    items: ['Human Interface Guidelines', 'App Review Guidelines', 'Privacy Requirements', 'Performance Standards']
                  },
                  {
                    title: 'Google Play Store Policies',
                    items: ['Content Policy', 'Developer Policy', 'Families Policy', 'Payments Policy']
                  }
                ]?.map((guideline, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{guideline?.title}</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {guideline?.items?.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center space-x-2">
                          <Icon name="CheckCircle" size={16} className="text-green-600 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              {/* Submission Process */}
              <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Our Submission Process</h4>
                <div className="space-y-4">
                  {[
                    'Pre-submission app review and testing',
                    'App store metadata optimization',
                    'Screenshot and video creation',
                    'Submission and review monitoring',
                    'Post-approval support and updates'
                  ]?.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Success Rate */}
              <div className="text-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl">
                <div className="text-4xl font-bold text-green-600 mb-2">98.5%</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">First-Time Approval Rate</div>
                <div className="text-sm text-gray-600">Average approval time: 2-3 days</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {/* Discuss Custom Solution Button */}
        <div className="text-center mt-8">
          <Button
            variant="default"
            size="lg"
            className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 shadow-brand-lg mb-4"
            iconName="MessageCircle"
            iconPosition="left"
            onClick={() => window.open('https://calendly.com/redhand-solution/30min', '_blank')}
          >
            Discuss Custom Solution
          </Button>
        </div>
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-secondary to-accent rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Launch Your Successful App?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's create an app that not only meets your business goals but also achieves outstanding performance in app stores.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-secondary hover:bg-gray-100"
                iconName="Calendar"
                iconPosition="left"
                onClick={() => window.open('https://calendly.com/redhand-solution/30min', '_blank')}
              >
                Schedule App Strategy Session
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
                iconName="Download"
                iconPosition="left"
              >
                Download Success Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppStoreSuccessSection;