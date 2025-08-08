import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustIndicatorsSection = () => {
  const certifications = [
    {
      title: "AWS Partner Network",
      description: "Certified AWS Solutions Provider with expertise in cloud architecture and migration services.",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=200&h=100&fit=crop",
      level: "Advanced Tier",
      validUntil: "2025"
    },
    {
      title: "Google Cloud Partner",
      description: "Authorized Google Cloud Platform partner specializing in enterprise cloud solutions.",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=200&h=100&fit=crop",
      level: "Premier Partner",
      validUntil: "2025"
    },
    {
      title: "Microsoft Azure Expert",
      description: "Microsoft certified partner with proven expertise in Azure cloud services and solutions.",
      logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&h=100&fit=crop",
      level: "Gold Partner",
      validUntil: "2024"
    },
    {
      title: "ISO 27001 Certified",
      description: "Information Security Management System certification ensuring highest security standards.",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
      level: "Certified",
      validUntil: "2025"
    }
  ];

  const businessRegistrations = [
    {
      title: "Company Registration",
      description: "Registered under the Companies Act, 2013 with the Ministry of Corporate Affairs, Government of India.",
      registrationNumber: "U72200GJ2018PTC103456",
      authority: "Registrar of Companies, Gujarat",
      icon: "FileText"
    },
    {
      title: "GST Registration",
      description: "Valid GST registration for all business operations across India with proper tax compliance.",
      registrationNumber: "24AABCR1234F1Z5",
      authority: "GST Department, Gujarat",
      icon: "Receipt"
    },
    {
      title: "MSME Registration",
      description: "Registered as a Micro, Small & Medium Enterprise with the Government of Gujarat.",
      registrationNumber: "UDYAM-GJ-24-0012345",
      authority: "MSME Development Institute",
      icon: "Award"
    },
    {
      title: "Professional Tax",
      description: "Valid professional tax registration for all employees and business operations in Gujarat.",
      registrationNumber: "PT-GJ-RAJ-2018-001234",
      authority: "Commercial Tax Department",
      icon: "CreditCard"
    }
  ];

  const securityCompliance = [
    {
      title: "Data Protection",
      description: "Comprehensive data protection policies compliant with Indian IT Act and international standards.",
      features: ["End-to-end encryption", "Regular security audits", "Access control systems", "Data backup protocols"],
      icon: "Shield",
      color: "blue"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous QA processes ensuring delivery of high-quality, bug-free solutions to all clients.",
      features: ["Automated testing", "Code review processes", "Performance monitoring", "User acceptance testing"],
      icon: "CheckCircle",
      color: "green"
    },
    {
      title: "Project Security",
      description: "Secure development practices and project management ensuring client confidentiality and IP protection.",
      features: ["NDA compliance", "Secure coding practices", "Version control", "IP protection protocols"],
      icon: "Lock",
      color: "red"
    },
    {
      title: "Infrastructure Security",
      description: "Secure infrastructure with regular monitoring, updates, and backup systems for business continuity.",
      features: ["24/7 monitoring", "Regular updates", "Disaster recovery", "Secure hosting"],
      icon: "Server",
      color: "purple"
    }
  ];

  const industryRecognitions = [
    {
      title: "Best IT Solutions Provider",
      organization: "Gujarat IT Association",
      year: "2023",
      description: "Recognized for outstanding contribution to Gujarat\'s IT ecosystem and innovative solutions delivery."
    },
    {
      title: "Emerging Tech Company",
      organization: "Rajkot Chamber of Commerce",
      year: "2022",
      description: "Awarded for rapid growth and significant contribution to the local technology sector."
    },
    {
      title: "Client Satisfaction Excellence",
      organization: "Indian Software Association",
      year: "2023",
      description: "Honored for maintaining 98% client satisfaction rate and long-term client relationships."
    },
    {
      title: "Innovation in Digital Solutions",
      organization: "Gujarat Technology Summit",
      year: "2023",
      description: "Recognized for innovative approach to digital transformation and emerging technology adoption."
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      red: 'from-red-500 to-red-600',
      purple: 'from-purple-500 to-purple-600'
    };
    return colors?.[color] || colors?.blue;
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trust &
            <span className="block text-gradient bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              Credibility Indicators
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our certifications, registrations, and industry recognitions demonstrate our commitment to excellence, security, and compliance with the highest industry standards.
          </p>
        </motion.div>

        {/* Technology Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Technology Partnerships & Certifications
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications?.map((cert, index) => (
              <motion.div
                key={cert?.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-brand-lg transition-all duration-300 group"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-12 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                    <Image
                      src={cert?.logo}
                      alt={cert?.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{cert?.title}</h4>
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {cert?.level}
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {cert?.description}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Valid Until:</span>
                  <span className="font-semibold text-gray-900">{cert?.validUntil}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Business Registrations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Legal Registrations & Compliance
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {businessRegistrations?.map((registration, index) => (
              <motion.div
                key={registration?.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-brand transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={registration?.icon} size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{registration?.title}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{registration?.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-500">Registration No:</span>
                        <span className="text-sm font-mono text-gray-900 bg-gray-100 px-2 py-1 rounded">
                          {registration?.registrationNumber}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-500">Authority:</span>
                        <span className="text-sm text-gray-700">{registration?.authority}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Security & Compliance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Security & Quality Standards
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityCompliance?.map((item, index) => (
              <motion.div
                key={item?.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-brand-lg transition-all duration-300 group"
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(item?.color)} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={item?.icon} size={24} className="text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{item?.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{item?.description}</p>
                </div>

                <div className="space-y-2">
                  {item?.features?.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getColorClasses(item?.color)}`}></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industry Recognitions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Industry Recognition & Awards</h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by leading industry organizations and associations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industryRecognitions?.map((recognition, index) => (
              <motion.div
                key={recognition?.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="text-xl font-bold">{recognition?.title}</h4>
                      <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full text-sm font-medium">
                        {recognition?.year}
                      </span>
                    </div>
                    <p className="text-gray-300 font-medium mb-3">{recognition?.organization}</p>
                    <p className="text-gray-400 leading-relaxed">{recognition?.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 mx-auto">
              <Icon name="Download" size={20} />
              <span>Download Certificates & Awards</span>
            </button>
          </div>
        </motion.div>

        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-12">Trust by Numbers</h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-white" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-2">100%</h4>
              <p className="text-gray-600">Security Compliance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={24} className="text-white" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-2">0</h4>
              <p className="text-gray-600">Security Breaches</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={24} className="text-white" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-2">15+</h4>
              <p className="text-gray-600">Certifications</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" size={24} className="text-white" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-2">98%</h4>
              <p className="text-gray-600">Client Retention</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustIndicatorsSection;