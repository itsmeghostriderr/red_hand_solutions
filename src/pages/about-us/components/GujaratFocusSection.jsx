import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const GujaratFocusSection = () => {
  const gujaratInsights = [
    {
      title: "Textile Industry Digitization",
      description: "Helped 15+ textile manufacturers in Surat and Ahmedabad implement ERP systems and e-commerce platforms, resulting in 40% increase in operational efficiency.",
      icon: "Shirt",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      stats: { clients: "15+", efficiency: "40%", location: "Surat & Ahmedabad" }
    },
    {
      title: "Chemical Industry Solutions",
      description: "Developed specialized inventory management and compliance tracking systems for chemical companies in Vadodara, ensuring regulatory compliance and safety standards.",
      icon: "Flask",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=400&fit=crop",
      stats: { clients: "8+", compliance: "100%", location: "Vadodara" }
    },
    {
      title: "Manufacturing Automation",
      description: "Implemented IoT-based monitoring systems and automated quality control processes for manufacturing units across Gujarat, reducing production costs by 25%.",
      icon: "Settings",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop",
      stats: { clients: "20+", savings: "25%", location: "Gujarat Wide" }
    }
  ];

  const localAdvantages = [
    {
      title: "Local Business Understanding",
      description: "Deep knowledge of Gujarat's business culture, regulatory environment, and market dynamics enables us to provide contextually relevant solutions.",
      icon: "MapPin",
      color: "red"
    },
    {
      title: "Regional Language Support",
      description: "Our team is fluent in Gujarati and Hindi, ensuring clear communication and better understanding of client requirements.",
      icon: "MessageCircle",
      color: "blue"
    },
    {
      title: "On-site Presence",
      description: "Based in Rajkot with easy access to major Gujarat cities, we provide prompt on-site support and face-to-face consultations.",
      icon: "MapPin",
      color: "green"
    },
    {
      title: "Local Partnerships",
      description: "Strong relationships with local vendors, suppliers, and service providers ensure cost-effective and timely project delivery.",
      icon: "Handshake",
      color: "purple"
    }
  ];

  const communityInitiatives = [
    {
      title: "Gujarat Tech Meetups",
      description: "Organizing monthly tech meetups in Rajkot and Ahmedabad to foster knowledge sharing and networking among local developers.",
      participants: "500+",
      frequency: "Monthly"
    },
    {
      title: "Startup Mentorship Program",
      description: "Providing free technical consultation and mentorship to early-stage startups in Gujarat\'s emerging tech ecosystem.",
      startups: "25+",
      hours: "200+"
    },
    {
      title: "Student Internship Program",
      description: "Offering internships and training programs to computer science students from local universities and colleges.",
      students: "50+",
      placements: "80%"
    },
    {
      title: "Digital Literacy Workshops",
      description: "Conducting workshops for small business owners to help them understand and adopt digital technologies.",
      workshops: "30+",
      businesses: "300+"
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
            Deep Roots in
            <span className="block text-gradient bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              Gujarat's Business Landscape
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our understanding of Gujarat's diverse industries and business culture enables us to deliver solutions that truly resonate with local market needs and drive meaningful growth.
          </p>
        </motion.div>

        {/* Industry Case Studies */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 text-center mb-12"
          >
            Industry Success Stories
          </motion.h3>

          <div className="space-y-12">
            {gujaratInsights?.map((insight, index) => (
              <motion.div
                key={insight?.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={insight?.image}
                      alt={insight?.title}
                      className="w-full h-64 lg:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="grid grid-cols-3 gap-4 text-white">
                        <div className="text-center">
                          <p className="text-2xl font-bold">{insight?.stats?.clients}</p>
                          <p className="text-sm opacity-90">Clients</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold">{insight?.stats?.efficiency || insight?.stats?.compliance || insight?.stats?.savings}</p>
                          <p className="text-sm opacity-90">{insight?.stats?.efficiency ? 'Efficiency' : insight?.stats?.compliance ? 'Compliance' : 'Cost Savings'}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-semibold">{insight?.stats?.location}</p>
                          <p className="text-xs opacity-90">Location</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex items-center justify-center">
                      <Icon name={insight?.icon} size={24} className="text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">{insight?.title}</h4>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {insight?.description}
                  </p>
                  <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
                    <Icon name="ExternalLink" size={16} />
                    <span>View Case Study</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Local Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Local Expertise Matters
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {localAdvantages?.map((advantage, index) => (
              <motion.div
                key={advantage?.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${getColorClasses(advantage?.color)} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={advantage?.icon} size={28} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{advantage?.title}</h4>
                <p className="text-gray-600 leading-relaxed">{advantage?.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Initiatives */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Contributing to Gujarat's Tech Ecosystem</h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Beyond business, we're committed to nurturing Gujarat's technology community through various initiatives and programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {communityInitiatives?.map((initiative, index) => (
              <motion.div
                key={initiative?.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <h4 className="text-xl font-bold mb-3">{initiative?.title}</h4>
                <p className="text-gray-300 mb-4 leading-relaxed">{initiative?.description}</p>
                <div className="flex space-x-6">
                  {initiative?.participants && (
                    <div>
                      <p className="text-2xl font-bold text-red-400">{initiative?.participants}</p>
                      <p className="text-sm text-gray-400">Participants</p>
                    </div>
                  )}
                  {initiative?.startups && (
                    <div>
                      <p className="text-2xl font-bold text-blue-400">{initiative?.startups}</p>
                      <p className="text-sm text-gray-400">Startups Mentored</p>
                    </div>
                  )}
                  {initiative?.students && (
                    <div>
                      <p className="text-2xl font-bold text-green-400">{initiative?.students}</p>
                      <p className="text-sm text-gray-400">Students Trained</p>
                    </div>
                  )}
                  {initiative?.workshops && (
                    <div>
                      <p className="text-2xl font-bold text-purple-400">{initiative?.workshops}</p>
                      <p className="text-sm text-gray-400">Workshops Conducted</p>
                    </div>
                  )}
                  {initiative?.frequency && (
                    <div>
                      <p className="text-lg font-bold text-yellow-400">{initiative?.frequency}</p>
                      <p className="text-sm text-gray-400">Frequency</p>
                    </div>
                  )}
                  {initiative?.hours && (
                    <div>
                      <p className="text-2xl font-bold text-indigo-400">{initiative?.hours}</p>
                      <p className="text-sm text-gray-400">Mentoring Hours</p>
                    </div>
                  )}
                  {initiative?.placements && (
                    <div>
                      <p className="text-2xl font-bold text-pink-400">{initiative?.placements}</p>
                      <p className="text-sm text-gray-400">Placement Rate</p>
                    </div>
                  )}
                  {initiative?.businesses && (
                    <div>
                      <p className="text-2xl font-bold text-cyan-400">{initiative?.businesses}</p>
                      <p className="text-sm text-gray-400">Businesses Reached</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 mx-auto">
              <Icon name="Heart" size={20} />
              <span>Join Our Community Initiatives</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GujaratFocusSection;