import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TimelineSection = () => {
  const [activeYear, setActiveYear] = useState(2018);

  const timelineData = [
    {
      year: 2018,
      title: "Foundation in Rajkot",
      description: "Red Hand Solutions was founded with a vision to bridge the technology gap for Gujarat businesses. Started with a team of 3 passionate developers in a small office in Rajkot.",
      icon: "Rocket",
      color: "red",
      achievements: [
        "Established company in Rajkot",
        "First 5 clients onboarded",
        "Focus on web development"
      ]
    },
    {
      year: 2019,
      title: "Expansion & Growth",
      description: "Expanded our service offerings to include mobile app development and cloud solutions. Team grew to 8 members with specialized expertise.",
      icon: "TrendingUp",
      color: "blue",
      achievements: [
        "Mobile app development services launched",
        "Team expanded to 8 members",
        "First enterprise client acquired"
      ]
    },
    {
      year: 2020,
      title: "Digital Transformation Era",
      description: "During the pandemic, we helped 50+ businesses transition to digital platforms. Introduced AI and automation services to our portfolio.",
      icon: "Cpu",
      color: "green",
      achievements: [
        "50+ digital transformation projects",
        "AI & automation services introduced",
        "Remote work infrastructure established"
      ]
    },
    {
      year: 2021,
      title: "Technology Partnerships",
      description: "Formed strategic partnerships with AWS, Google Cloud, and Microsoft. Achieved certifications and became authorized solution providers.",
      icon: "Handshake",
      color: "purple",
      achievements: [
        "AWS Partnership established",
        "Google Cloud certification achieved",
        "Microsoft Azure solutions provider"
      ]
    },
    {
      year: 2022,
      title: "Industry Recognition",
      description: "Recognized as \'Best IT Solutions Provider in Gujarat\' by Gujarat IT Association. Expanded to serve clients across Western India.",
      icon: "Award",
      color: "yellow",
      achievements: [
        "Gujarat IT Association award",
        "100+ projects completed",
        "Western India market expansion"
      ]
    },
    {
      year: 2023,
      title: "Innovation Hub",
      description: "Established R&D division focusing on emerging technologies like blockchain, IoT, and machine learning. Team reached 20+ professionals.",
      icon: "Lightbulb",
      color: "indigo",
      achievements: [
        "R&D division established",
        "Blockchain solutions launched",
        "IoT and ML expertise developed"
      ]
    },
    {
      year: 2024,
      title: "Market Leadership",
      description: "Became Gujarat's leading IT solutions provider with 200+ successful projects. Launched startup incubation program to support local entrepreneurs.",
      icon: "Crown",
      color: "red",
      achievements: [
        "200+ projects milestone",
        "Startup incubation program",
        "Market leadership position"
      ]
    }
  ];

  const getColorClasses = (color, isActive = false) => {
    const colors = {
      red: isActive ? 'bg-red-600 text-white' : 'bg-red-100 text-red-600 hover:bg-red-200',
      blue: isActive ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600 hover:bg-blue-200',
      green: isActive ? 'bg-green-600 text-white' : 'bg-green-100 text-green-600 hover:bg-green-200',
      purple: isActive ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-600 hover:bg-purple-200',
      yellow: isActive ? 'bg-yellow-600 text-white' : 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200',
      indigo: isActive ? 'bg-indigo-600 text-white' : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
    };
    return colors?.[color] || colors?.red;
  };

  const activeData = timelineData?.find(item => item?.year === activeYear);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Journey of
            <span className="block text-gradient bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              Innovation & Growth
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a small startup in Rajkot to Gujarat's trusted IT partner, discover the milestones that shaped our journey and the vision that drives us forward.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {timelineData?.map((item, index) => (
              <motion.button
                key={item?.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                onClick={() => setActiveYear(item?.year)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  getColorClasses(item?.color, activeYear === item?.year)
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span className="font-medium">{item?.year}</span>
              </motion.button>
            ))}
          </div>

          {/* Active Timeline Content */}
          <motion.div
            key={activeYear}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-brand-lg border border-gray-200 overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    getColorClasses(activeData?.color, true)
                  }`}>
                    <Icon name={activeData?.icon} size={24} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">{activeData?.year}</h3>
                    <p className="text-lg text-gray-600">{activeData?.title}</p>
                  </div>
                </div>

                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  {activeData?.description}
                </p>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Achievements</h4>
                  {activeData?.achievements?.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-center space-x-3"
                    >
                      <div className={`w-2 h-2 rounded-full ${
                        activeData?.color === 'red' ? 'bg-red-600' :
                        activeData?.color === 'blue' ? 'bg-blue-600' :
                        activeData?.color === 'green' ? 'bg-green-600' :
                        activeData?.color === 'purple' ? 'bg-purple-600' :
                        activeData?.color === 'yellow'? 'bg-yellow-600' : 'bg-indigo-600'
                      }`}></div>
                      <span className="text-gray-700">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Visual */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-8 lg:p-12 flex items-center justify-center">
                <div className="relative">
                  <div className={`absolute inset-0 rounded-2xl blur-xl opacity-30 ${
                    activeData?.color === 'red' ? 'bg-red-600' :
                    activeData?.color === 'blue' ? 'bg-blue-600' :
                    activeData?.color === 'green' ? 'bg-green-600' :
                    activeData?.color === 'purple' ? 'bg-purple-600' :
                    activeData?.color === 'yellow'? 'bg-yellow-600' : 'bg-indigo-600'
                  }`}></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-brand">
                    <div className="text-center">
                      <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 ${
                        getColorClasses(activeData?.color, true)
                      }`}>
                        <Icon name={activeData?.icon} size={32} />
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">{activeData?.year}</h4>
                      <p className="text-gray-600 font-medium">{activeData?.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;