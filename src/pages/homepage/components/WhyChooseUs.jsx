import React from 'react';
import Icon from '../../../components/AppIcon';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Local Expertise",
      description: "Deep understanding of Gujarat\'s business landscape and market dynamics",
      icon: "MapPin",
      stats: "8+ Years in Gujarat",
      color: "from-blue-500 to-blue-600",
      benefits: [
        "Regional market knowledge",
        "Local compliance expertise",
        "Cultural understanding",
        "On-ground support"
      ]
    },
    {
      id: 2,
      title: "Global Standards",
      description: "International quality standards with cutting-edge technologies and best practices",
      icon: "Globe",
      stats: "ISO 9001 Certified",
      color: "from-green-500 to-green-600",
      benefits: [
        "Latest technology stack",
        "Industry best practices",
        "Quality assurance",
        "Scalable solutions"
      ]
    },
    {
      id: 3,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance for uninterrupted operations",
      icon: "Clock",
      stats: "99.9% Uptime",
      color: "from-purple-500 to-purple-600",
      benefits: [
        "Immediate response",
        "Proactive monitoring",
        "Regular maintenance",
        "Emergency support"
      ]
    },
    {
      id: 4,
      title: "Proven ROI",
      description: "Measurable business impact with transparent reporting and continuous optimization",
      icon: "TrendingUp",
      stats: "Average 250% ROI",
      color: "from-orange-500 to-orange-600",
      benefits: [
        "Performance tracking",
        "Regular reporting",
        "Optimization strategies",
        "Growth metrics"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="text-red-500">Red Hand Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The perfect blend of local expertise and global excellence that drives real business results
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features?.map((feature, index) => (
            <div
              key={feature?.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-brand hover:transform hover:scale-105"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature?.color} opacity-0 group-hover:opacity-10 transition-brand rounded-2xl`} />
              
              {/* Feature Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>

              {/* Feature Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature?.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-brand`}>
                <Icon name={feature?.icon} size={32} color="white" />
              </div>

              {/* Feature Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-400 transition-brand">
                  {feature?.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature?.description}
                </p>

                {/* Stats */}
                <div className="bg-white/10 rounded-lg p-3 mb-6">
                  <p className="text-red-400 font-semibold text-center">{feature?.stats}</p>
                </div>

                {/* Benefits List */}
                <div className="space-y-2">
                  {feature?.benefits?.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <Icon name="Check" size={14} className="text-green-400 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/0 to-red-600/0 group-hover:from-red-500/5 group-hover:to-red-600/5 transition-brand" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join 85+ successful businesses across Gujarat who trust Red Hand Solutions for their digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-brand hover:shadow-brand-lg transition-brand"
                onClick={() => window.open('https://calendly.com/redhand-solution/30min', '_blank')}
              >
                Get Free Consultation
              </button>
              <button className="border-2 border-white/20 text-white hover:bg-white hover:text-black px-8 py-4 rounded-xl font-semibold text-lg transition-brand">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;