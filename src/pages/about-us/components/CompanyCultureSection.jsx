import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CompanyCultureSection = () => {
  const [activeTab, setActiveTab] = useState('office');

  const cultureHighlights = [
    {
      title: "Innovation-First Mindset",
      description: "We encourage experimentation and creative problem-solving. Every team member is empowered to propose new ideas and solutions.",
      icon: "Lightbulb",
      color: "yellow"
    },
    {
      title: "Collaborative Environment",
      description: "Cross-functional teams work together seamlessly, sharing knowledge and supporting each other to achieve common goals.",
      icon: "Users",
      color: "blue"
    },
    {
      title: "Continuous Learning",
      description: "We invest in our team's growth through training programs, certifications, and conference attendance to stay ahead of technology trends.",
      icon: "BookOpen",
      color: "green"
    },
    {
      title: "Work-Life Balance",
      description: "Flexible working hours, remote work options, and wellness programs ensure our team maintains a healthy work-life balance.",
      icon: "Heart",
      color: "red"
    }
  ];

  const officeGallery = [
    {
      title: "Modern Workspace",
      description: "Our Rajkot office features open collaborative spaces, modern workstations, and comfortable meeting rooms designed for productivity.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
    },
    {
      title: "Innovation Lab",
      description: "Dedicated space for R&D activities, prototyping, and testing new technologies with state-of-the-art equipment.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
    },
    {
      title: "Collaboration Zones",
      description: "Informal meeting areas and brainstorming spaces that foster creativity and spontaneous discussions.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop"
    },
    {
      title: "Recreation Area",
      description: "Relaxation zone with games, comfortable seating, and refreshment facilities for team bonding and stress relief.",
      image: "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=600&h=400&fit=crop"
    }
  ];

  const teamEvents = [
    {
      title: "Annual Tech Summit",
      description: "Our flagship event bringing together the entire team to share knowledge, celebrate achievements, and plan for the future.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      date: "December 2023"
    },
    {
      title: "Quarterly Team Outings",
      description: "Regular team building activities including adventure trips, cultural events, and recreational activities across Gujarat.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop",
      date: "Every Quarter"
    },
    {
      title: "Innovation Hackathons",
      description: "Internal hackathons where teams compete to develop innovative solutions, fostering creativity and technical excellence.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
      date: "Bi-annual"
    },
    {
      title: "Client Appreciation Events",
      description: "Special events to celebrate successful project completions and strengthen relationships with our valued clients.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop",
      date: "Project Milestones"
    }
  ];

  const clientMeetings = [
    {
      title: "Project Kickoff Meetings",
      description: "Face-to-face meetings with clients to understand requirements, set expectations, and build strong working relationships.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
    },
    {
      title: "Progress Review Sessions",
      description: "Regular client meetings to demonstrate progress, gather feedback, and ensure alignment with project goals.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
    },
    {
      title: "Solution Demonstrations",
      description: "Interactive sessions where we showcase developed solutions and train client teams on new systems and processes.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop"
    },
    {
      title: "Strategic Consulting Sessions",
      description: "High-level meetings with client leadership to discuss technology strategy, digital transformation roadmaps, and future opportunities.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
    }
  ];

  const tabs = [
    { id: 'office', label: 'Office Spaces', icon: 'Building', data: officeGallery },
    { id: 'events', label: 'Team Events', icon: 'Calendar', data: teamEvents },
    { id: 'meetings', label: 'Client Meetings', icon: 'Users', data: clientMeetings }
  ];

  const getColorClasses = (color) => {
    const colors = {
      yellow: 'from-yellow-500 to-yellow-600',
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      red: 'from-red-500 to-red-600'
    };
    return colors?.[color] || colors?.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
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
            Our Company
            <span className="block text-gradient bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              Culture & Values
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Red Hand Solutions, we've built more than just a company—we've created a community of passionate professionals who believe in the power of technology to transform businesses and lives.
          </p>
        </motion.div>

        {/* Culture Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {cultureHighlights?.map((highlight, index) => (
            <motion.div
              key={highlight?.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${getColorClasses(highlight?.color)} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={highlight?.icon} size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{highlight?.title}</h3>
              <p className="text-gray-600 leading-relaxed">{highlight?.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Photo Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-brand-lg border border-gray-200 overflow-hidden"
        >
          <div className="p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Behind the Scenes at Red Hand Solutions
            </h3>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab?.id
                      ? 'bg-gradient-to-r from-red-600 to-blue-600 text-white shadow-brand'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon name={tab?.icon} size={18} />
                  <span>{tab?.label}</span>
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {tabs?.find(tab => tab?.id === activeTab)?.data?.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group relative overflow-hidden rounded-2xl shadow-brand hover:shadow-brand-lg transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={item?.image}
                      alt={item?.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h4 className="text-xl font-bold mb-2">{item?.title}</h4>
                      <p className="text-gray-200 text-sm leading-relaxed">{item?.description}</p>
                      {item?.date && (
                        <div className="flex items-center space-x-2 mt-3">
                          <Icon name="Calendar" size={14} className="text-gray-300" />
                          <span className="text-gray-300 text-sm">{item?.date}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Company Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Culture in Numbers</h3>
            <p className="text-gray-300 text-lg">The metrics that reflect our commitment to excellence and team satisfaction</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Smile" size={24} />
              </div>
              <h4 className="text-3xl font-bold mb-2">95%</h4>
              <p className="text-gray-300">Employee Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={24} />
              </div>
              <h4 className="text-3xl font-bold mb-2">2.5</h4>
              <p className="text-gray-300">Years Avg. Tenure</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={24} />
              </div>
              <h4 className="text-3xl font-bold mb-2">40+</h4>
              <p className="text-gray-300">Team Events/Year</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="BookOpen" size={24} />
              </div>
              <h4 className="text-3xl font-bold mb-2">100+</h4>
              <p className="text-gray-300">Training Hours/Employee</p>
            </div>
          </div>
        </motion.div>

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-2xl p-8 lg:p-12 border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Want to Be Part of Our Story?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our team of passionate professionals and help us continue building innovative solutions that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 justify-center">
                <Icon name="Users" size={20} />
                <span>View Open Positions</span>
              </button>
              <button
                className="bg-white border-2 border-gray-300 hover:border-blue-600 text-gray-900 hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 justify-center"
                onClick={() => window.open('mailto:redhand.solution@gmail.com?subject=Resume%20for%20Job%20Application')}
              >
                <Icon name="Mail" size={20} />
                <span>Send Your Resume</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyCultureSection;