import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ProcessVisualization = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 1,
      title: "Discovery & Consultation",
      description: "We analyze your business needs, goals, and technical requirements through detailed consultation sessions.",
      icon: "Search",
      duration: "1-2 weeks",
      deliverables: ["Requirements Document", "Technical Specification", "Project Roadmap"]
    },
    {
      id: 2,
      title: "Strategy & Planning",
      description: "Our team creates a comprehensive strategy with timeline, resource allocation, and technology stack selection.",
      icon: "Target",
      duration: "1 week",
      deliverables: ["Project Plan", "Architecture Design", "Resource Allocation"]
    },
    {
      id: 3,
      title: "Design & Prototyping",
      description: "We create wireframes, mockups, and interactive prototypes to visualize the final solution.",
      icon: "Palette",
      duration: "2-3 weeks",
      deliverables: ["UI/UX Design", "Interactive Prototype", "Design System"]
    },
    {
      id: 4,
      title: "Development & Testing",
      description: "Our developers build your solution using agile methodology with continuous testing and quality assurance.",
      icon: "Code",
      duration: "4-12 weeks",
      deliverables: ["Working Solution", "Test Reports", "Documentation"]
    },
    {
      id: 5,
      title: "Deployment & Launch",
      description: "We deploy your solution to production environment with proper monitoring and performance optimization.",
      icon: "Rocket",
      duration: "1 week",
      deliverables: ["Live Application", "Deployment Guide", "Performance Report"]
    },
    {
      id: 6,
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and maintenance to ensure your solution continues to perform optimally.",
      icon: "Shield",
      duration: "Ongoing",
      deliverables: ["24/7 Support", "Regular Updates", "Performance Monitoring"]
    }
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">Our Proven Process</h3>
        <p className="text-muted-foreground">From consultation to delivery and beyond</p>
      </div>
      {/* Desktop Process Flow */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-border">
            <div 
              className="h-full bg-gradient-to-r from-secondary to-accent transition-all duration-1000"
              style={{ width: `${(activeStep / (processSteps?.length - 1)) * 100}%` }}
            ></div>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-6 gap-4">
            {processSteps?.map((step, index) => (
              <div 
                key={step?.id}
                className="relative cursor-pointer"
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Step Circle */}
                <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center mb-4 transition-all duration-300 ${
                  index <= activeStep
                    ? 'bg-gradient-to-br from-secondary to-accent border-accent text-white' :'bg-card border-border text-muted-foreground hover:border-accent'
                }`}>
                  <Icon name={step?.icon} size={20} />
                </div>

                {/* Step Content */}
                <div className="text-center">
                  <h4 className={`font-semibold text-sm mb-1 transition-colors duration-300 ${
                    index <= activeStep ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {step?.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">{step?.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Step Details */}
        <div className="mt-8 p-6 bg-muted/50 rounded-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                {processSteps?.[activeStep]?.title}
              </h4>
              <p className="text-muted-foreground text-sm">
                {processSteps?.[activeStep]?.description}
              </p>
            </div>
            <div>
              <h5 className="font-medium text-foreground mb-2">Key Deliverables:</h5>
              <ul className="space-y-1">
                {processSteps?.[activeStep]?.deliverables?.map((deliverable, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm">
                    <Icon name="Check" size={14} color="var(--color-success)" />
                    <span className="text-muted-foreground">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Process Flow */}
      <div className="lg:hidden space-y-4">
        {processSteps?.map((step, index) => (
          <div 
            key={step?.id}
            className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
              index === activeStep
                ? 'border-accent bg-accent/5' :'border-border bg-card hover:border-accent/50'
            }`}
            onClick={() => setActiveStep(index)}
          >
            <div className="flex items-start space-x-4">
              <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                index === activeStep
                  ? 'bg-gradient-to-br from-secondary to-accent border-accent text-white' :'bg-card border-border text-muted-foreground'
              }`}>
                <Icon name={step?.icon} size={18} />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-foreground text-sm">{step?.title}</h4>
                  <span className="text-xs text-muted-foreground">{step?.duration}</span>
                </div>
                
                {index === activeStep && (
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">{step?.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {step?.deliverables?.map((deliverable, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-success/10 text-success text-xs rounded-md"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessVisualization;