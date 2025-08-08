import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const MissionValuesSection = () => {
  const missionData = {
    title: "Our Mission",
    description: "Empowering businesses through innovative technology solutions",
    content: `At Red Hand Solutions, we believe that technology should be an enabler, not a barrier. Our mission is to democratize access to cutting-edge technology solutions for businesses across Gujarat and beyond.\n\nWe strive to bridge the gap between complex technology and practical business needs, ensuring that every client—from startups to enterprises—can leverage the power of digital transformation to achieve their goals.\n\nOur commitment extends beyond just delivering solutions; we aim to be long-term partners in our clients' success stories, providing ongoing support, innovation, and strategic guidance.`,
    icon: "Target"
  };

  const values = [
    {
      title: "Innovation",
      description: "Embracing cutting-edge technologies to deliver solutions that drive business growth and competitive advantage.",
      icon: "Lightbulb",
      color: "red",
      features: [
        "Latest technology adoption",
        "Creative problem-solving",
        "Continuous learning culture",
        "R&D investment"
      ]
    },
    {
      title: "Reliability",
      description: "Building trust through consistent delivery, transparent communication, and unwavering commitment to quality.",
      icon: "Shield",
      color: "blue",
      features: [
        "98% client satisfaction",
        "On-time project delivery",
        "24/7 technical support",
        "Quality assurance processes"
      ]
    },
    {
      title: "Partnership",
      description: "Fostering long-term relationships based on mutual respect, collaboration, and shared success.",
      icon: "Handshake",
      color: "green",
      features: [
        "Collaborative approach",
        "Client-centric solutions",
        "Long-term relationships",
        "Strategic consulting"
      ]
    },
    {
      title: "Growth",
      description: "Driving sustainable growth for our clients, our team, and the broader Gujarat tech ecosystem.",
      icon: "TrendingUp",
      color: "purple",
      features: [
        "Scalable solutions",
        "Team development",
        "Market expansion",
        "Community contribution"
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      red: 'from-red-500 to-red-600',
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600'
    };
    return colors?.[color] || colors?.red;
  };

  const getBgColorClasses = (color) => {
    const colors = {
      red: 'bg-red-50 border-red-200',
      blue: 'bg-blue-50 border-blue-200',
      green: 'bg-green-50 border-green-200',
      purple: 'bg-purple-50 border-purple-200'
    };
    return colors?.[color] || colors?.red;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-600/20 to-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Icon name={missionData?.icon} size={24} className="text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold">{missionData?.title}</h2>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-semibold text-gradient bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent mb-6">
                {missionData?.description}
              </h3>
              
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                {missionData?.content?.split('\n\n')?.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Core
            <span className="block text-gradient bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              Values
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These fundamental principles guide every decision we make and every solution we deliver, ensuring we stay true to our commitment to excellence.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values?.map((value, index) => (
            <motion.div
              key={value?.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`group relative bg-white rounded-2xl border-2 p-8 hover:shadow-brand-lg transition-all duration-300 ${getBgColorClasses(value?.color)}`}
            >
              <div className="text-center mb-6">
                <div className={`w-20 h-20 bg-gradient-to-r ${getColorClasses(value?.color)} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={value?.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value?.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value?.description}</p>
              </div>

              <div className="space-y-3">
                {value?.features?.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (featureIndex * 0.05), duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getColorClasses(value?.color)}`}></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${getColorClasses(value?.color)} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-2xl p-8 lg:p-12 border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Experience Our Values in Action?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our mission-driven approach can transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 justify-center"
                onClick={() => window.open('https://calendly.com/redhand-solution/30min', '_blank')}
              >
                <Icon name="Calendar" size={20} />
                <span>Schedule Consultation</span>
              </button>
              <button className="bg-white border-2 border-gray-300 hover:border-blue-600 text-gray-900 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 justify-center">
                <Icon name="Download" size={20} />
                <span>Download Company Profile</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionValuesSection;