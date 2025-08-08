import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ComparisonTool = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [activeComparison, setActiveComparison] = useState('features');

  const services = [
    {
      id: 'web-development',
      name: 'Web Development',
      icon: 'Globe',
      price: '₹2,50,000',
      timeline: '8-12 weeks',
      bestFor: 'Businesses needing online presence',
      features: [
        'Responsive Design',
        'SEO Optimization',
        'Content Management',
        'E-commerce Integration',
        'Analytics Setup',
        'Security Implementation'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB'],
      support: '24/7 Support',
      maintenance: 'Monthly Updates',
      scalability: 'High',
      complexity: 'Medium'
    },
    {
      id: 'mobile-app',
      name: 'Mobile App Development',
      icon: 'Smartphone',
      price: '₹4,50,000',
      timeline: '12-16 weeks',
      bestFor: 'Customer engagement & retention',
      features: [
        'Cross-platform Development',
        'Push Notifications',
        'Offline Functionality',
        'App Store Optimization',
        'User Analytics',
        'Social Integration'
      ],
      technologies: ['React Native', 'Flutter', 'Firebase', 'AWS'],
      support: '24/7 Support',
      maintenance: 'Bi-weekly Updates',
      scalability: 'Very High',
      complexity: 'High'
    },
    {
      id: 'cloud-solutions',
      name: 'Cloud Solutions',
      icon: 'Cloud',
      price: '₹3,00,000',
      timeline: '6-10 weeks',
      bestFor: 'Scalability & cost optimization',
      features: [
        'Cloud Migration',
        'Auto Scaling',
        'Backup & Recovery',
        'Security Compliance',
        'Performance Monitoring',
        'Cost Optimization'
      ],
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
      support: '24/7 Monitoring',
      maintenance: 'Continuous Updates',
      scalability: 'Unlimited',
      complexity: 'High'
    },
    {
      id: 'digital-marketing',
      name: 'Digital Marketing',
      icon: 'TrendingUp',
      price: '₹1,50,000',
      timeline: '4-6 weeks',
      bestFor: 'Brand awareness & lead generation',
      features: [
        'SEO Optimization',
        'Social Media Marketing',
        'PPC Campaigns',
        'Content Marketing',
        'Email Marketing',
        'Analytics & Reporting'
      ],
      technologies: ['Google Ads', 'Facebook Ads', 'Analytics', 'CRM'],
      support: 'Business Hours',
      maintenance: 'Weekly Reports',
      scalability: 'Medium',
      complexity: 'Low'
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting',
      icon: 'Users',
      price: '₹1,00,000',
      timeline: '2-4 weeks',
      bestFor: 'Strategic planning & optimization',
      features: [
        'Technology Assessment',
        'Strategic Planning',
        'Process Optimization',
        'Security Audit',
        'Training & Support',
        'Implementation Guidance'
      ],
      technologies: ['Various', 'Custom', 'Enterprise', 'Open Source'],
      support: 'Consultation Hours',
      maintenance: 'Quarterly Reviews',
      scalability: 'Consultative',
      complexity: 'Variable'
    }
  ];

  const comparisonCategories = [
    { id: 'features', name: 'Features', icon: 'List' },
    { id: 'technologies', name: 'Technologies', icon: 'Code' },
    { id: 'details', name: 'Details', icon: 'Info' }
  ];

  const toggleService = (serviceId) => {
    setSelectedServices(prev => {
      if (prev?.includes(serviceId)) {
        return prev?.filter(id => id !== serviceId);
      } else if (prev?.length < 3) {
        return [...prev, serviceId];
      }
      return prev;
    });
  };

  const selectedServiceData = services?.filter(service => 
    selectedServices?.includes(service?.id)
  );

  return (
    <div className="bg-card border border-border rounded-xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">Service Comparison Tool</h3>
        <p className="text-muted-foreground">Compare up to 3 services to find the perfect fit for your business</p>
      </div>
      {/* Service Selection */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-foreground mb-4">Select Services to Compare</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {services?.map((service) => (
            <button
              key={service?.id}
              onClick={() => toggleService(service?.id)}
              disabled={!selectedServices?.includes(service?.id) && selectedServices?.length >= 3}
              className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                selectedServices?.includes(service?.id)
                  ? 'border-accent bg-accent/10 text-accent'
                  : selectedServices?.length >= 3
                  ? 'border-border bg-muted/50 text-muted-foreground cursor-not-allowed'
                  : 'border-border bg-card hover:border-accent/50 text-foreground hover:bg-accent/5'
              }`}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  selectedServices?.includes(service?.id)
                    ? 'bg-accent text-white' :'bg-muted text-muted-foreground'
                }`}>
                  <Icon name={service?.icon} size={24} />
                </div>
                <span className="text-sm font-medium text-center">{service?.name}</span>
              </div>
            </button>
          ))}
        </div>
        
        {selectedServices?.length > 0 && (
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              {selectedServices?.length}/3 services selected
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedServices([])}
              iconName="X"
              iconPosition="left"
              iconSize={14}
            >
              Clear All
            </Button>
          </div>
        )}
      </div>
      {/* Comparison Results */}
      {selectedServiceData?.length > 0 && (
        <div>
          {/* Comparison Category Tabs */}
          <div className="flex space-x-1 mb-6 bg-muted p-1 rounded-lg">
            {comparisonCategories?.map((category) => (
              <button
                key={category?.id}
                onClick={() => setActiveComparison(category?.id)}
                className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeComparison === category?.id
                    ? 'bg-card text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name={category?.icon} size={16} />
                <span>{category?.name}</span>
              </button>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-2 font-semibold text-foreground">Service</th>
                  {selectedServiceData?.map((service) => (
                    <th key={service?.id} className="text-center py-4 px-2 min-w-48">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                          <Icon name={service?.icon} size={24} color="white" />
                        </div>
                        <span className="font-semibold text-foreground">{service?.name}</span>
                        <span className="text-sm text-muted-foreground">{service?.bestFor}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {activeComparison === 'features' && (
                  <>
                    <tr className="border-b border-border">
                      <td className="py-3 px-2 font-medium text-foreground">Key Features</td>
                      {selectedServiceData?.map((service) => (
                        <td key={service?.id} className="py-3 px-2">
                          <ul className="space-y-1">
                            {service?.features?.slice(0, 4)?.map((feature, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-sm">
                                <Icon name="Check" size={12} color="var(--color-success)" />
                                <span className="text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                            {service?.features?.length > 4 && (
                              <li className="text-xs text-accent">+{service?.features?.length - 4} more</li>
                            )}
                          </ul>
                        </td>
                      ))}
                    </tr>
                  </>
                )}

                {activeComparison === 'technologies' && (
                  <tr className="border-b border-border">
                    <td className="py-3 px-2 font-medium text-foreground">Tech Stack</td>
                    {selectedServiceData?.map((service) => (
                      <td key={service?.id} className="py-3 px-2">
                        <div className="flex flex-wrap gap-1">
                          {service?.technologies?.map((tech, idx) => (
                            <span 
                              key={idx}
                              className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                )}

                {activeComparison === 'details' && (
                  <>
                    <tr className="border-b border-border">
                      <td className="py-3 px-2 font-medium text-foreground">Starting Price</td>
                      {selectedServiceData?.map((service) => (
                        <td key={service?.id} className="py-3 px-2 text-center">
                          <span className="text-lg font-bold text-secondary">{service?.price}</span>
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-2 font-medium text-foreground">Timeline</td>
                      {selectedServiceData?.map((service) => (
                        <td key={service?.id} className="py-3 px-2 text-center">
                          <span className="text-sm text-muted-foreground">{service?.timeline}</span>
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-2 font-medium text-foreground">Scalability</td>
                      {selectedServiceData?.map((service) => (
                        <td key={service?.id} className="py-3 px-2 text-center">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            service?.scalability === 'Unlimited' || service?.scalability === 'Very High' ?'bg-success/10 text-success'
                              : service?.scalability === 'High' ?'bg-accent/10 text-accent' :'bg-warning/10 text-warning'
                          }`}>
                            {service?.scalability}
                          </span>
                        </td>
                      ))}
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90"
              iconName="MessageCircle"
              iconPosition="left"
            >
              Discuss Selected Services
            </Button>
            <Button
              variant="outline"
              iconName="Download"
              iconPosition="left"
            >
              Download Comparison
            </Button>
          </div>
        </div>
      )}
      {selectedServices?.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="GitCompare" size={32} color="var(--color-muted-foreground)" />
          </div>
          <h4 className="text-lg font-medium text-foreground mb-2">Start Comparing</h4>
          <p className="text-muted-foreground">Select services above to see detailed comparisons</p>
        </div>
      )}
    </div>
  );
};

export default ComparisonTool;