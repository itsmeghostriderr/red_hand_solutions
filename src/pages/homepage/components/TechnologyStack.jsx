import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechnologyStack = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const technologies = {
    frontend: {
      title: "Frontend Development",
      icon: "Monitor",
      color: "from-blue-500 to-blue-600",
      techs: [
        { name: "React.js", proficiency: 95, icon: "⚛️", description: "Modern UI development" },
        { name: "Next.js", proficiency: 90, icon: "▲", description: "Full-stack React framework" },
        { name: "Vue.js", proficiency: 85, icon: "💚", description: "Progressive framework" },
        { name: "Angular", proficiency: 80, icon: "🅰️", description: "Enterprise applications" },
        { name: "TypeScript", proficiency: 88, icon: "📘", description: "Type-safe JavaScript" },
        { name: "Tailwind CSS", proficiency: 92, icon: "🎨", description: "Utility-first CSS" }
      ]
    },
    backend: {
      title: "Backend Development",
      icon: "Server",
      color: "from-green-500 to-green-600",
      techs: [
        { name: "Node.js", proficiency: 93, icon: "🟢", description: "JavaScript runtime" },
        { name: "Python", proficiency: 88, icon: "🐍", description: "Versatile programming" },
        { name: "Java", proficiency: 85, icon: "☕", description: "Enterprise solutions" },
        { name: "PHP", proficiency: 82, icon: "🐘", description: "Web development" },
        { name: "Express.js", proficiency: 90, icon: "🚀", description: "Node.js framework" },
        { name: "Django", proficiency: 86, icon: "🎸", description: "Python web framework" }
      ]
    },
    mobile: {
      title: "Mobile Development",
      icon: "Smartphone",
      color: "from-purple-500 to-purple-600",
      techs: [
        { name: "React Native", proficiency: 92, icon: "📱", description: "Cross-platform apps" },
        { name: "Flutter", proficiency: 88, icon: "🦋", description: "Google\'s UI toolkit" },
        { name: "iOS Native", proficiency: 85, icon: "🍎", description: "Swift development" },
        { name: "Android Native", proficiency: 87, icon: "🤖", description: "Kotlin/Java apps" },
        { name: "Ionic", proficiency: 80, icon: "⚡", description: "Hybrid app development" },
        { name: "Xamarin", proficiency: 75, icon: "🔷", description: "Microsoft framework" }
      ]
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: "Cloud",
      color: "from-orange-500 to-orange-600",
      techs: [
        { name: "AWS", proficiency: 90, icon: "☁️", description: "Amazon Web Services" },
        { name: "Azure", proficiency: 85, icon: "🔵", description: "Microsoft Cloud" },
        { name: "Docker", proficiency: 88, icon: "🐳", description: "Containerization" },
        { name: "Kubernetes", proficiency: 82, icon: "⚙️", description: "Container orchestration" },
        { name: "Jenkins", proficiency: 86, icon: "🔧", description: "CI/CD automation" },
        { name: "Terraform", proficiency: 80, icon: "🏗️", description: "Infrastructure as code" }
      ]
    }
  };

  const categories = Object.keys(technologies);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-red-600">Technology Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge technologies and frameworks we master to deliver exceptional digital solutions
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories?.map((category) => {
            const tech = technologies?.[category];
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold transition-brand ${
                  activeCategory === category
                    ? `bg-gradient-to-r ${tech?.color} text-white shadow-brand`
                    : 'bg-white text-gray-600 hover:bg-gray-100 shadow-sm'
                }`}
              >
                <Icon name={tech?.icon} size={20} />
                <span>{tech?.title}</span>
              </button>
            );
          })}
        </div>

        {/* Technology Grid */}
        <div className="bg-white rounded-3xl p-8 shadow-brand">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies?.[activeCategory]?.techs?.map((tech, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-brand transition-brand"
              >
                {/* Tech Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{tech?.icon}</span>
                    <div>
                      <h3 className="font-bold text-gray-900 group-hover:text-red-600 transition-brand">
                        {tech?.name}
                      </h3>
                      <p className="text-sm text-gray-500">{tech?.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-600">{tech?.proficiency}%</div>
                    <div className="text-xs text-gray-500">Proficiency</div>
                  </div>
                </div>

                {/* Proficiency Bar */}
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`bg-gradient-to-r ${technologies?.[activeCategory]?.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${tech?.proficiency}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Beginner</span>
                    <span>Expert</span>
                  </div>
                </div>

                {/* Experience Indicator */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex space-x-1">
                    {[...Array(5)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className={`${
                          i < Math.floor(tech?.proficiency / 20)
                            ? 'text-yellow-400 fill-current' :'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">
                    {tech?.proficiency >= 90 ? 'Expert' : tech?.proficiency >= 80 ? 'Advanced' : 'Intermediate'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">25+</div>
            <div className="text-gray-600">Technologies Mastered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">150+</div>
            <div className="text-gray-600">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">8+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">99%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;