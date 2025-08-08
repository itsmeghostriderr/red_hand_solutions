import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DevelopmentProcessSection = () => {
  const [activePhase, setActivePhase] = useState(0);

  const processPhases = [
    {
      id: 'ideation',
      title: 'Ideation & Strategy',
      duration: '1-2 weeks',
      description: 'We start by understanding your business goals, target audience, and market requirements to create a comprehensive app strategy.',
      activities: [
        'Business requirement analysis',
        'Market research & competitor analysis',
        'Target audience identification',
        'Feature prioritization',
        'Technical feasibility study',
        'Project roadmap creation'
      ],
      deliverables: [
        'Project Requirements Document',
        'Market Analysis Report',
        'Technical Architecture Plan',
        'Project Timeline & Milestones'
      ],
      icon: 'Lightbulb',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50'
    },
    {
      id: 'design',
      title: 'UI/UX Design',
      duration: '2-4 weeks',
      description: 'Our design team creates intuitive and engaging user experiences that align with your brand and user expectations.',
      activities: [
        'User persona development',
        'Information architecture',
        'Wireframing & prototyping',
        'Visual design creation',
        'Design system development',
        'Usability testing'
      ],
      deliverables: [
        'User Journey Maps',
        'Interactive Prototypes',
        'Visual Design Mockups',
        'Design System Guidelines'
      ],
      icon: 'Palette',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'development',
      title: 'Development Sprints',
      duration: '6-12 weeks',
      description: 'Agile development approach with regular sprints, ensuring transparency and flexibility throughout the development process.',
      activities: [
        'Sprint planning & setup',
        'Frontend development',
        'Backend API development',
        'Database design & implementation',
        'Third-party integrations',
        'Code reviews & optimization'
      ],
      deliverables: [
        'Working App Builds',
        'API Documentation',
        'Database Schema',
        'Integration Reports'
      ],
      icon: 'Code',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'testing',
      title: 'Testing & QA',
      duration: '2-3 weeks',
      description: 'Comprehensive testing across devices, platforms, and scenarios to ensure your app performs flawlessly.',
      activities: [
        'Functional testing',
        'Performance testing',
        'Security testing',
        'Device compatibility testing',
        'User acceptance testing',
        'Bug fixing & optimization'
      ],
      deliverables: [
        'Test Reports',
        'Performance Metrics',
        'Security Audit Report',
        'Device Compatibility Matrix'
      ],
      icon: 'Shield',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50'
    },
    {
      id: 'deployment',
      title: 'App Store Submission',
      duration: '1-2 weeks',
      description: 'We handle the complete app store submission process, ensuring compliance with guidelines and optimal store presence.',
      activities: [
        'App store preparation',
        'Metadata optimization',
        'Screenshot & video creation',
        'App store submission',
        'Review process management',
        'Launch coordination'
      ],
      deliverables: [
        'App Store Listings',
        'Launch Strategy',
        'Marketing Assets',
        'Post-Launch Support Plan'
      ],
      icon: 'Rocket',
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50'
    },
    {
      id: 'maintenance',
      title: 'Maintenance & Support',
      duration: 'Ongoing',
      description: 'Continuous support and maintenance to keep your app updated, secure, and performing at its best.',
      activities: [
        'Performance monitoring',
        'Bug fixes & updates',
        'OS compatibility updates',
        'Security patches',
        'Feature enhancements',
        'Analytics & reporting'
      ],
      deliverables: [
        'Monthly Performance Reports',
        'Update Releases',
        'Security Reports',
        'Enhancement Recommendations'
      ],
      icon: 'Settings',
      color: 'from-gray-500 to-slate-500',
      bgColor: 'bg-gray-50'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="GitBranch" size={16} />
            <span>Development Process</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Proven
            <span className="block text-gradient bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Development Methodology
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a structured, agile approach to mobile app development, ensuring transparency, quality, and timely delivery at every stage.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-secondary to-accent rounded-full hidden lg:block"></div>

          {/* Process Steps */}
          <div className="space-y-12 lg:space-y-16">
            {processPhases?.map((phase, index) => (
              <div
                key={phase?.id}
                className={`relative cursor-pointer transition-all duration-500 ${
                  activePhase === index ? 'transform scale-105' : ''
                }`}
                onClick={() => setActivePhase(index)}
              >
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Content Side */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2 lg:text-right' : ''}`}>
                    <div className={`inline-block p-8 bg-white rounded-2xl shadow-brand hover:shadow-brand-lg transition-all duration-300 ${
                      activePhase === index ? 'ring-2 ring-secondary' : ''
                    }`}>
                      <div className={`flex items-center space-x-4 mb-4 ${
                        index % 2 === 1 ? 'lg:flex-row-reverse lg:space-x-reverse' : ''
                      }`}>
                        <div className={`w-16 h-16 bg-gradient-to-br ${phase?.color} rounded-2xl flex items-center justify-center`}>
                          <Icon name={phase?.icon} size={28} color="white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{phase?.title}</h3>
                          <div className="text-secondary font-semibold">{phase?.duration}</div>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {phase?.description}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-secondary text-secondary hover:bg-secondary hover:text-white"
                        iconName="ChevronRight"
                        iconPosition="right"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden lg:flex justify-center">
                    <div className={`w-8 h-8 rounded-full border-4 border-white shadow-brand transition-all duration-300 ${
                      activePhase === index 
                        ? `bg-gradient-to-br ${phase?.color} scale-125` 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}></div>
                  </div>

                  {/* Visual Side */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className={`${phase?.bgColor} rounded-2xl p-8 h-64 flex items-center justify-center`}>
                      <div className="text-center">
                        <div className={`w-24 h-24 bg-gradient-to-br ${phase?.color} rounded-3xl flex items-center justify-center mx-auto mb-4 animate-float`}>
                          <Icon name={phase?.icon} size={40} color="white" />
                        </div>
                        <div className="text-lg font-semibold text-gray-700">Phase {index + 1}</div>
                        <div className="text-sm text-gray-500">{phase?.duration}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Phase View */}
        <div className="bg-white rounded-3xl shadow-brand-lg overflow-hidden">
          <div className={`${processPhases?.[activePhase]?.bgColor} p-8 border-b`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${processPhases?.[activePhase]?.color} rounded-2xl flex items-center justify-center`}>
                  <Icon name={processPhases?.[activePhase]?.icon} size={28} color="white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">{processPhases?.[activePhase]?.title}</h3>
                  <div className="text-lg text-secondary font-semibold">{processPhases?.[activePhase]?.duration}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Phase</div>
                <div className="text-2xl font-bold text-gray-900">{activePhase + 1}/6</div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Activities */}
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Key Activities</h4>
                <div className="space-y-4">
                  {processPhases?.[activePhase]?.activities?.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      </div>
                      <span className="text-gray-700 leading-relaxed">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Deliverables</h4>
                <div className="space-y-4">
                  {processPhases?.[activePhase]?.deliverables?.map((deliverable, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                      <Icon name="FileText" size={20} className="text-secondary flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200">
              <Button
                variant="outline"
                onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
                disabled={activePhase === 0}
                iconName="ChevronLeft"
                iconPosition="left"
              >
                Previous Phase
              </Button>

              <div className="flex space-x-2">
                {processPhases?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActivePhase(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activePhase === index ? 'bg-secondary scale-125' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  ></button>
                ))}
              </div>

              <Button
                variant="outline"
                onClick={() => setActivePhase(Math.min(processPhases?.length - 1, activePhase + 1))}
                disabled={activePhase === processPhases?.length - 1}
                iconName="ChevronRight"
                iconPosition="right"
              >
                Next Phase
              </Button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-secondary to-accent rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your App Development Journey?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a customized development plan that fits your timeline and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-secondary hover:bg-gray-100"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Strategy Session
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
                iconName="Download"
                iconPosition="left"
              >
                Download Process Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcessSection;