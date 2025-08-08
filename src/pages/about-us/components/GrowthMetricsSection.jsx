import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const GrowthMetricsSection = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    teamSize: 0,
    experience: 0
  });

  const finalValues = {
    projects: 200,
    clients: 85,
    teamSize: 25,
    experience: 6
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalValues)?.map(key => {
      const increment = finalValues?.[key] / steps;
      let currentValue = 0;

      return setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValues?.[key]) {
          currentValue = finalValues?.[key];
          clearInterval(intervals?.find(interval => interval === this));
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }));
      }, stepDuration);
    });

    return () => {
      intervals?.forEach(interval => clearInterval(interval));
    };
  }, []);

  const growthTimeline = [
    {
      year: "2018",
      title: "Foundation Year",
      metrics: {
        projects: 5,
        clients: 3,
        teamSize: 3,
        revenue: "₹2L"
      },
      highlights: [
        "Company established in Rajkot",
        "First web development projects",
        "Local client base development"
      ]
    },
    {
      year: "2019",
      title: "Early Growth",
      metrics: {
        projects: 15,
        clients: 8,
        teamSize: 6,
        revenue: "₹8L"
      },
      highlights: [
        "Mobile app development services",
        "First enterprise client",
        "Team expansion"
      ]
    },
    {
      year: "2020",
      title: "Digital Transformation",
      metrics: {
        projects: 35,
        clients: 18,
        teamSize: 10,
        revenue: "₹18L"
      },
      highlights: [
        "COVID-19 digital solutions",
        "Cloud services introduction",
        "Remote work capabilities"
      ]
    },
    {
      year: "2021",
      title: "Technology Partnerships",
      metrics: {
        projects: 65,
        clients: 32,
        teamSize: 15,
        revenue: "₹35L"
      },
      highlights: [
        "AWS & Google Cloud partnerships",
        "AI/ML services launch",
        "Gujarat market expansion"
      ]
    },
    {
      year: "2022",
      title: "Industry Recognition",
      metrics: {
        projects: 120,
        clients: 55,
        teamSize: 20,
        revenue: "₹65L"
      },
      highlights: [
        "Best IT Solutions Provider award",
        "100+ projects milestone",
        "Western India expansion"
      ]
    },
    {
      year: "2023",
      title: "Innovation Hub",
      metrics: {
        projects: 170,
        clients: 70,
        teamSize: 23,
        revenue: "₹95L"
      },
      highlights: [
        "R&D division establishment",
        "Blockchain solutions",
        "Startup incubation program"
      ]
    },
    {
      year: "2024",
      title: "Market Leadership",
      metrics: {
        projects: 200,
        clients: 85,
        teamSize: 25,
        revenue: "₹1.2Cr"
      },
      highlights: [
        "200+ projects completed",
        "Market leadership position",
        "Community initiatives expansion"
      ]
    }
  ];

  const keyMetrics = [
    {
      title: "Project Success Rate",
      value: "98%",
      description: "Projects delivered on time and within budget",
      icon: "Target",
      color: "green",
      trend: "+2% from last year"
    },
    {
      title: "Client Retention Rate",
      value: "95%",
      description: "Clients who continue working with us year over year",
      icon: "Heart",
      color: "red",
      trend: "+5% from last year"
    },
    {
      title: "Average Project Value",
      value: "₹6L",
      description: "Average value of projects delivered to clients",
      icon: "TrendingUp",
      color: "blue",
      trend: "+25% from last year"
    },
    {
      title: "Team Satisfaction",
      value: "95%",
      description: "Employee satisfaction and engagement score",
      icon: "Smile",
      color: "purple",
      trend: "+3% from last year"
    }
  ];

  const technologyAdoption = [
    {
      category: "Cloud Technologies",
      technologies: ["AWS", "Google Cloud", "Microsoft Azure", "Docker", "Kubernetes"],
      adoptionRate: 95,
      projects: 150
    },
    {
      category: "Frontend Technologies",
      technologies: ["React", "Vue.js", "Angular", "Next.js", "TypeScript"],
      adoptionRate: 90,
      projects: 180
    },
    {
      category: "Backend Technologies",
      technologies: ["Node.js", "Python", "Java", "PHP", "MongoDB"],
      adoptionRate: 88,
      projects: 170
    },
    {
      category: "Emerging Technologies",
      technologies: ["AI/ML", "Blockchain", "IoT", "AR/VR", "Microservices"],
      adoptionRate: 75,
      projects: 45
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: 'from-green-500 to-green-600',
      red: 'from-red-500 to-red-600',
      blue: 'from-blue-500 to-blue-600',
      purple: 'from-purple-500 to-purple-600'
    };
    return colors?.[color] || colors?.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
            Our Growth
            <span className="block text-gradient bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              Journey in Numbers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a small startup to Gujarat's leading IT solutions provider, our growth story is reflected in the numbers that matter most to our clients and team.
          </p>
        </motion.div>

        {/* Current Metrics Counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-white mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Current Achievements</h3>
            <p className="text-gray-300 text-lg">Real-time metrics showcasing our current position in the market</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Briefcase" size={28} className="text-white" />
              </div>
              <h4 className="text-4xl font-bold mb-2">{counters?.projects}+</h4>
              <p className="text-gray-300 text-lg">Projects Completed</p>
              <p className="text-gray-400 text-sm mt-1">Across various industries</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={28} className="text-white" />
              </div>
              <h4 className="text-4xl font-bold mb-2">{counters?.clients}+</h4>
              <p className="text-gray-300 text-lg">Happy Clients</p>
              <p className="text-gray-400 text-sm mt-1">Across Gujarat & India</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="UserCheck" size={28} className="text-white" />
              </div>
              <h4 className="text-4xl font-bold mb-2">{counters?.teamSize}+</h4>
              <p className="text-gray-300 text-lg">Team Members</p>
              <p className="text-gray-400 text-sm mt-1">Expert professionals</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Calendar" size={28} className="text-white" />
              </div>
              <h4 className="text-4xl font-bold mb-2">{counters?.experience}+</h4>
              <p className="text-gray-300 text-lg">Years Experience</p>
              <p className="text-gray-400 text-sm mt-1">In the industry</p>
            </div>
          </div>
        </motion.div>

        {/* Growth Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Year-over-Year Growth Timeline
          </h3>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 to-blue-500 rounded-full"></div>
            
            <div className="space-y-12">
              {growthTimeline?.map((milestone, index) => (
                <motion.div
                  key={milestone?.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-full max-w-md ${
                    index % 2 === 0 ? 'mr-8' : 'ml-8'
                  }`}>
                    <div className="bg-white rounded-2xl shadow-brand border border-gray-200 p-6 hover:shadow-brand-lg transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                          {milestone?.year?.slice(-2)}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">{milestone?.title}</h4>
                          <p className="text-gray-600">{milestone?.year}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center bg-gray-50 rounded-lg p-3">
                          <p className="text-2xl font-bold text-red-600">{milestone?.metrics?.projects}</p>
                          <p className="text-sm text-gray-600">Projects</p>
                        </div>
                        <div className="text-center bg-gray-50 rounded-lg p-3">
                          <p className="text-2xl font-bold text-blue-600">{milestone?.metrics?.clients}</p>
                          <p className="text-sm text-gray-600">Clients</p>
                        </div>
                        <div className="text-center bg-gray-50 rounded-lg p-3">
                          <p className="text-2xl font-bold text-green-600">{milestone?.metrics?.teamSize}</p>
                          <p className="text-sm text-gray-600">Team Size</p>
                        </div>
                        <div className="text-center bg-gray-50 rounded-lg p-3">
                          <p className="text-2xl font-bold text-purple-600">{milestone?.metrics?.revenue}</p>
                          <p className="text-sm text-gray-600">Revenue</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {milestone?.highlights?.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-blue-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-red-500 rounded-full"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Key Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Key Performance Indicators
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics?.map((metric, index) => (
              <motion.div
                key={metric?.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-brand border border-gray-200 p-6 hover:shadow-brand-lg transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(metric?.color)} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={metric?.icon} size={24} className="text-white" />
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900 mb-2">{metric?.value}</h4>
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">{metric?.title}</h5>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{metric?.description}</p>
                  <div className="flex items-center justify-center space-x-1">
                    <Icon name="TrendingUp" size={14} className="text-green-500" />
                    <span className="text-green-600 text-sm font-medium">{metric?.trend}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Adoption */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-brand-lg border border-gray-200 p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Technology Adoption & Expertise</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our continuous investment in learning and adopting new technologies keeps us at the forefront of innovation.
            </p>
          </div>

          <div className="space-y-8">
            {technologyAdoption?.map((category, index) => (
              <motion.div
                key={category?.category}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-900">{category?.category}</h4>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-red-600">{category?.adoptionRate}%</p>
                    <p className="text-sm text-gray-600">Adoption Rate</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${category?.adoptionRate}%` }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-red-500 to-blue-500 h-3 rounded-full"
                    ></motion.div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {category?.technologies?.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 text-sm">
                  Used in <span className="font-semibold text-gray-900">{category?.projects}+</span> projects
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GrowthMetricsSection;