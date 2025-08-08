import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Prayag Sapariya",
      position: "Founder & CEO",
      experience: "12+ Years",
      image: "https://res.cloudinary.com/dzgte50ye/image/upload/v1754633464/Passport_uyupab.jpg",
      specializations: ["Strategic Planning", "Business Development", "Client Relations", "Technology Vision"],
      certifications: ["MBA - IIM Ahmedabad", "AWS Solutions Architect", "Google Cloud Professional"],
      bio: `Prayag founded Red Hand Solutions with a vision to democratize technology access for Gujarat businesses. With over 12 years of experience in IT consulting and business development, he has led the company from a 3-person startup to Gujarat's leading IT solutions provider.\n\nHis expertise in strategic planning and deep understanding of the local business landscape has been instrumental in building long-term client relationships and driving sustainable growth.`,
      achievements: [
        "Founded Red Hand Solutions in 2018",
        "Led 200+ successful project deliveries",
        "Established partnerships with AWS, Google Cloud, Microsoft",
        "Recognized as \'IT Entrepreneur of the Year\' by Gujarat IT Association"
      ],
      contact: {
        email: "prayag.rhs@gmail.com",
        linkedin: "https://www.linkedin.com/in/prayag-sapariya-499010247/"
      }
    },
    {
      id: 2,
      name: "Priyansh Baldha",
      position: "CTO & Lead Architect",
      experience: "10+ Years",
      image: "https://res.cloudinary.com/dzgte50ye/image/upload/v1754633464/PB-Web_rah4ds.jpg",
      specializations: ["System Architecture", "Cloud Solutions", "AI/ML Implementation", "DevOps"],
      certifications: ["AWS Solutions Architect Professional", "Google Cloud Architect", "Microsoft Azure Expert"],
      bio: `Priyansh leads our technical vision and ensures that Red Hand Solutions stays at the forefront of technology innovation. With a Master's in Computer Science from NIT Surat and extensive experience in enterprise architecture, she has designed scalable solutions for clients across various industries.\n\nHer expertise in cloud technologies and emerging tech like AI/ML has enabled our clients to achieve significant competitive advantages through digital transformation.`,
      achievements: [
        "Architected 150+ cloud migration projects",
        "Led AI/ML implementation for 25+ clients",
        "Established DevOps practices reducing deployment time by 70%",
        "Speaker at Gujarat Tech Summit 2023"
      ],
      contact: {
        email: "priyansh.rhs@gmail.com",
        linkedin: "https://www.linkedin.com/in/priyansh-baldha-b37817225/"
      }
    },
    {
      id: 3,
      name: "Aryan Virani",
      position: "Head of Development",
      experience: "8+ Years",
      image: "https://res.cloudinary.com/dzgte50ye/image/upload/v1754633464/Asv-W_v722rc.jpg",
      specializations: ["Full-Stack Development", "Mobile Apps", "Web Applications", "API Development"],
      certifications: ["React Certified Developer", "Node.js Professional", "MongoDB Certified"],
      bio: `Aryan oversees all development activities and ensures code quality across projects. With expertise in modern web technologies and mobile app development, he has successfully delivered complex applications for clients ranging from startups to large enterprises.\n\nHis focus on clean code practices and agile methodologies has resulted in highly maintainable and scalable applications that continue to serve our clients' evolving needs.`,
      achievements: [
        "Led development of 100+ web applications",
        "Built 50+ mobile apps with 4.8+ app store ratings",
        "Implemented microservices architecture for enterprise clients",
        "Mentored 15+ junior developers"
      ],
      contact: {
        email: "aryan.rhsolution@gmail.com",
        linkedin: "https://www.linkedin.com/in/aryanvirani-rhs"
      }
    },
    {
      id: 4,
      name: "Sneha Mehta",
      position: "UI/UX Design Lead",
      experience: "6+ Years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      specializations: ["User Experience Design", "Interface Design", "Design Systems", "User Research"],
      certifications: ["Google UX Design Certificate", "Adobe Certified Expert", "Figma Professional"],
      bio: `Sneha brings creativity and user-centric thinking to every project. With a background in design and psychology, she ensures that all our solutions are not just functional but also intuitive and engaging for end users.\n\nHer research-driven approach to design has resulted in applications with exceptional user satisfaction scores and has helped our clients achieve better user engagement and conversion rates.`,
      achievements: [
        "Designed interfaces for 80+ applications",
        "Improved user engagement by 45% on average",
        "Established design system used across all projects",
        "Won \'Best UI/UX Design\' at Gujarat Design Awards 2023"
      ],
      contact: {
        email: "sneha@redhandsolutions.com",
        linkedin: "linkedin.com/in/snehamehta-rhs"
      }
    },
    {
      id: 5,
      name: "Kiran Patel",
      position: "DevOps & Security Lead",
      experience: "7+ Years",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      specializations: ["DevOps Automation", "Cloud Security", "Infrastructure Management", "CI/CD Pipelines"],
      certifications: ["AWS DevOps Professional", "Certified Kubernetes Administrator", "CISSP"],
      bio: `Kiran ensures that our applications are not only well-built but also secure and efficiently deployed. His expertise in DevOps practices and security has enabled our clients to achieve faster time-to-market while maintaining the highest security standards.\n\nHis implementation of automated deployment pipelines and security best practices has resulted in 99.9% uptime for client applications and zero security incidents.`,
      achievements: [
        "Implemented CI/CD for 120+ projects",
        "Achieved 99.9% uptime across all client applications",
        "Reduced deployment time from hours to minutes",
        "Established security protocols with zero breaches"
      ],
      contact: {
        email: "kiran@redhandsolutions.com",
        linkedin: "linkedin.com/in/kiranpatel-rhs"
      }
    },
    {
      id: 6,
      name: "Ravi Kumar",
      position: "Business Analyst & PM",
      experience: "9+ Years",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      specializations: ["Project Management", "Business Analysis", "Agile Methodologies", "Client Communication"],
      certifications: ["PMP Certified", "Scrum Master", "Business Analysis Professional"],
      bio: `Ravi bridges the gap between business requirements and technical implementation. With extensive experience in project management and business analysis, he ensures that every project is delivered on time, within budget, and exceeds client expectations.\n\nHis systematic approach to project management and excellent communication skills have resulted in 98% client satisfaction rate and long-term partnerships with key clients.`,
      achievements: [
        "Managed 150+ projects with 98% success rate",
        "Implemented Agile practices across all teams",
        "Achieved average project delivery 15% ahead of schedule",
        "Maintained 98% client satisfaction rating"
      ],
      contact: {
        email: "ravi@redhandsolutions.com",
        linkedin: "linkedin.com/in/ravikumar-rhs"
      }
    }
  ];

  const closeModal = () => {
    setSelectedMember(null);
  };

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
            Meet Our
            <span className="block text-gradient bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
              Expert Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of technology experts, designers, and strategists brings together decades of experience to deliver exceptional results for our clients.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers?.map((member, index) => (
            <motion.div
              key={member?.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-brand border border-gray-200 overflow-hidden hover:shadow-brand-lg transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={member?.image}
                  alt={member?.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full bg-white/90 backdrop-blur-sm text-gray-900 py-2 px-4 rounded-lg font-medium hover:bg-white transition-colors duration-200">
                    View Full Profile
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member?.name}</h3>
                <p className="text-red-600 font-medium mb-2">{member?.position}</p>
                <p className="text-gray-600 text-sm mb-4">{member?.experience}</p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-900">Specializations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member?.specializations?.slice(0, 3)?.map((spec, specIndex) => (
                      <span
                        key={specIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
                      >
                        {spec}
                      </span>
                    ))}
                    {member?.specializations?.length > 3 && (
                      <span className="bg-red-100 text-red-600 px-2 py-1 rounded-md text-xs">
                        +{member?.specializations?.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Our Team by Numbers</h3>
            <p className="text-gray-300 text-lg">The expertise and experience that drives our success</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={24} />
              </div>
              <h4 className="text-3xl font-bold mb-2">25+</h4>
              <p className="text-gray-300">Team Members</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={24} />
              </div>
              <h4 className="text-3xl font-bold mb-2">50+</h4>
              <p className="text-gray-300">Certifications</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} />
              </div>
              <h4 className="text-3xl font-bold mb-2">150+</h4>
              <p className="text-gray-300">Years Combined Experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" size={24} />
              </div>
              <h4 className="text-3xl font-bold mb-2">98%</h4>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Team Member Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
              >
                <Icon name="X" size={20} />
              </button>

              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <Image
                    src={selectedMember?.image}
                    alt={selectedMember?.name}
                    className="w-full h-96 lg:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl font-bold mb-2">{selectedMember?.name}</h3>
                    <p className="text-xl text-red-300">{selectedMember?.position}</p>
                    <p className="text-gray-300">{selectedMember?.experience}</p>
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">About</h4>
                    <div className="text-gray-700 leading-relaxed space-y-3">
                      {selectedMember?.bio?.split('\n\n')?.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember?.specializations?.map((spec, index) => (
                        <span
                          key={index}
                          className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Certifications</h4>
                    <ul className="space-y-2">
                      {selectedMember?.certifications?.map((cert, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <Icon name="CheckCircle" size={16} className="text-green-600" />
                          <span className="text-gray-700">{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {selectedMember?.achievements?.map((achievement, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Icon name="Star" size={16} className="text-yellow-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-4">
                    <button
                      className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                      onClick={() => window.open(`mailto:${selectedMember?.contact?.email}`)}
                    >
                      <Icon name="Mail" size={16} />
                      <span>Contact</span>
                    </button>
                    <button
                      className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                      onClick={() => {
                        let url = selectedMember?.contact?.linkedin;
                        if (url && !url.startsWith('http')) url = 'https://' + url;
                        window.open(url, '_blank');
                      }}
                    >
                      <Icon name="Linkedin" size={16} />
                      <span>LinkedIn</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default TeamSection;