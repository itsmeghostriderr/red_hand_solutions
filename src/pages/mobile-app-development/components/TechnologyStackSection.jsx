import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TechnologyStackSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const technologyCategories = {
    frontend: {
      title: 'Frontend Development',
      description: 'Modern frameworks and tools for creating exceptional user interfaces',
      icon: 'Smartphone',
      color: 'from-blue-600 to-purple-600',
      technologies: [
        {
          name: 'React Native',
          description: 'Cross-platform mobile development with native performance',
          proficiency: 95,
          projects: 120,
          icon: 'Layers',
          features: ['Hot Reload', 'Native Modules', 'Code Reusability', 'Performance']
        },
        {
          name: 'Flutter',
          description: 'Google\'s UI toolkit for beautiful, natively compiled applications',
          proficiency: 88,
          projects: 45,
          icon: 'Zap',
          features: ['Single Codebase', 'Fast Development', 'Custom Widgets', 'Hot Reload']
        },
        {
          name: 'Swift (iOS)',
          description: 'Native iOS development for optimal performance and user experience',
          proficiency: 92,
          projects: 80,
          icon: 'Apple',
          features: ['Native Performance', 'iOS Guidelines', 'App Store Optimization', 'Latest Features']
        },
        {
          name: 'Kotlin (Android)',
          description: 'Modern Android development with enhanced productivity',
          proficiency: 90,
          projects: 85,
          icon: 'Smartphone',
          features: ['Jetpack Compose', 'Material Design', 'Kotlin Coroutines', 'Android X']
        }
      ]
    },
    backend: {
      title: 'Backend Development',
      description: 'Robust server-side solutions and API development',
      icon: 'Server',
      color: 'from-green-600 to-teal-600',
      technologies: [
        {
          name: 'Node.js',
          description: 'JavaScript runtime for scalable server-side applications',
          proficiency: 93,
          projects: 150,
          icon: 'Code',
          features: ['Express.js', 'RESTful APIs', 'Real-time Apps', 'Microservices']
        },
        {
          name: 'Python Django',
          description: 'High-level Python framework for rapid development',
          proficiency: 87,
          projects: 65,
          icon: 'Database',
          features: ['Admin Panel', 'ORM', 'Security', 'Scalability']
        },
        {
          name: 'Firebase',
          description: 'Google\'s platform for mobile and web application development',
          proficiency: 91,
          projects: 95,
          icon: 'Cloud',
          features: ['Real-time Database', 'Authentication', 'Cloud Functions', 'Analytics']
        },
        {
          name: 'AWS Services',
          description: 'Comprehensive cloud computing platform for scalable solutions',
          proficiency: 85,
          projects: 70,
          icon: 'CloudLightning',
          features: ['EC2', 'Lambda', 'RDS', 'S3 Storage']
        }
      ]
    },
    database: {
      title: 'Database Solutions',
      description: 'Efficient data storage and management systems',
      icon: 'Database',
      color: 'from-orange-600 to-red-600',
      technologies: [
        {
          name: 'MongoDB',
          description: 'NoSQL database for flexible and scalable data storage',
          proficiency: 89,
          projects: 110,
          icon: 'Database',
          features: ['Document Storage', 'Horizontal Scaling', 'Flexible Schema', 'Aggregation']
        },
        {
          name: 'PostgreSQL',
          description: 'Advanced open-source relational database system',
          proficiency: 86,
          projects: 75,
          icon: 'HardDrive',
          features: ['ACID Compliance', 'JSON Support', 'Full-text Search', 'Extensions']
        },
        {
          name: 'Redis',
          description: 'In-memory data structure store for caching and sessions',
          proficiency: 82,
          projects: 60,
          icon: 'Zap',
          features: ['Caching', 'Session Storage', 'Pub/Sub', 'Data Structures']
        },
        {
          name: 'SQLite',
          description: 'Lightweight database engine for mobile applications',
          proficiency: 94,
          projects: 130,
          icon: 'Smartphone',
          features: ['Embedded Database', 'Zero Configuration', 'Cross-platform', 'ACID Transactions']
        }
      ]
    },
    tools: {
      title: 'Development Tools',
      description: 'Essential tools and platforms for efficient development workflow',
      icon: 'Settings',
      color: 'from-purple-600 to-pink-600',
      technologies: [
        {
          name: 'Git & GitHub',
          description: 'Version control and collaborative development platform',
          proficiency: 96,
          projects: 200,
          icon: 'GitBranch',
          features: ['Version Control', 'Collaboration', 'CI/CD', 'Code Review']
        },
        {
          name: 'Docker',
          description: 'Containerization platform for consistent deployment',
          proficiency: 83,
          projects: 55,
          icon: 'Package',
          features: ['Containerization', 'Microservices', 'Scalability', 'DevOps']
        },
        {
          name: 'Figma',
          description: 'Collaborative design tool for UI/UX development',
          proficiency: 88,
          projects: 140,
          icon: 'Palette',
          features: ['Design Systems', 'Prototyping', 'Collaboration', 'Developer Handoff']
        },
        {
          name: 'Postman',
          description: 'API development and testing platform',
          proficiency: 91,
          projects: 180,
          icon: 'Send',
          features: ['API Testing', 'Documentation', 'Monitoring', 'Collaboration']
        }
      ]
    }
  };

  const categories = Object.keys(technologyCategories);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Code" size={16} />
            <span>Technology Stack</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Cutting-Edge
            <span className="block text-gradient bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Technologies We Use
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage the latest technologies and frameworks to build robust, scalable, and high-performance mobile applications that meet modern business requirements.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories?.map((category) => {
            const categoryData = technologyCategories?.[category];
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? `bg-gradient-to-r ${categoryData?.color} text-white shadow-brand`
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <Icon name={categoryData?.icon} size={20} />
                <span className="font-medium">{categoryData?.title}</span>
              </button>
            );
          })}
        </div>

        {/* Technology Grid */}
        <div className="mb-16">
          <div className={`text-center mb-12 p-8 bg-gradient-to-r ${technologyCategories?.[activeCategory]?.color} rounded-3xl text-white`}>
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Icon name={technologyCategories?.[activeCategory]?.icon} size={32} />
              <h3 className="text-3xl font-bold">{technologyCategories?.[activeCategory]?.title}</h3>
            </div>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              {technologyCategories?.[activeCategory]?.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {technologyCategories?.[activeCategory]?.technologies?.map((tech, index) => (
              <div
                key={tech?.name}
                className="bg-white rounded-2xl shadow-brand hover:shadow-brand-lg transition-all duration-300 p-8 group"
              >
                {/* Technology Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${technologyCategories?.[activeCategory]?.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon name={tech?.icon} size={28} color="white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 group-hover:text-secondary transition-colors">
                        {tech?.name}
                      </h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{tech?.projects}+ projects</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {tech?.description}
                </p>

                {/* Proficiency Bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Proficiency</span>
                    <span className="text-sm font-bold text-secondary">{tech?.proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`bg-gradient-to-r ${technologyCategories?.[activeCategory]?.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${tech?.proficiency}%` }}
                    ></div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {tech?.features?.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Comparison */}
        <div className="bg-white rounded-3xl shadow-brand-lg p-8 lg:p-12 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Why We Choose These Technologies
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={32} color="white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Performance</h4>
              <p className="text-gray-600">
                Selected technologies ensure optimal performance, fast loading times, and smooth user experiences across all devices.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} color="white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Security</h4>
              <p className="text-gray-600">
                Enterprise-grade security features and best practices to protect your app and user data from potential threats.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={32} color="white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Scalability</h4>
              <p className="text-gray-600">
                Future-proof architecture that grows with your business, handling increased users and feature requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Integration Showcase */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Seamless Integrations</h3>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              We integrate with popular third-party services and APIs to enhance your app's functionality
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'Payment Gateways', icon: 'CreditCard' },
              { name: 'Social Media', icon: 'Share2' },
              { name: 'Analytics', icon: 'BarChart3' },
              { name: 'Push Notifications', icon: 'Bell' },
              { name: 'Maps & Location', icon: 'MapPin' },
              { name: 'Cloud Storage', icon: 'Cloud' }
            ]?.map((integration, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-white/20 transition-all duration-300">
                  <Icon name={integration?.icon} size={24} className="text-white" />
                </div>
                <div className="text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                  {integration?.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-secondary/5 to-accent/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help Choosing the Right Technology?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our technical experts can help you select the perfect technology stack for your specific project requirements and business goals.
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
                Consult Our Experts
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
              >
                Technology Comparison Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStackSection;