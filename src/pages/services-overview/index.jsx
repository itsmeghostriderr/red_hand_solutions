import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ServiceCard from './components/ServiceCard';
import ErrorBoundary from '../../components/ErrorBoundary';
import ProcessVisualization from './components/ProcessVisualization';
import ROICalculator from './components/ROICalculator';
import ComparisonTool from './components/ComparisonTool';
import ClientSuccessMetrics from './components/ClientSuccessMetrics';

const ServicesOverview = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      description: `Modern, responsive websites built with cutting-edge technologies like React and Next.js. 
      Optimized for Indian market needs with multilingual support, payment gateway integration, and mobile-first design approach.`,
      icon: 'Globe',
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'TypeScript'],
      timeline: '8-12 weeks',
      startingPrice: '2,50,000',
      category: 'development',
      isPopular: true,
      features: [
        'Responsive Design',
        'SEO Optimization',
        'Content Management System',
        'E-commerce Integration',
        'Payment Gateway Setup',
        'Analytics & Reporting'
      ],
      recentSuccess: 'Increased online sales by 300% for Gujarat Textiles Ltd'
    },
    {
      id: 'mobile-app',
      title: 'Mobile App Development',
      description: `Cross-platform mobile applications for iOS and Android using React Native and Flutter. 
      Focus on user experience, performance optimization, and seamless integration with existing business systems.`,
      icon: 'Smartphone',
      technologies: ['React Native', 'Flutter', 'Firebase', 'AWS', 'Redux', 'GraphQL'],
      timeline: '12-16 weeks',
      startingPrice: '4,50,000',
      category: 'development',
      isPopular: false,
      features: [
        'Cross-platform Development',
        'Push Notifications',
        'Offline Functionality',
        'App Store Optimization',
        'User Analytics',
        'Social Media Integration'
      ],
      recentSuccess: 'Achieved 150% user retention for Rajkot Food Chain app'
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: `Scalable cloud infrastructure using AWS and Azure. Migration services, auto-scaling, 
      backup solutions, and cost optimization specifically designed for growing Gujarat businesses.`,
      icon: 'Cloud',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
      timeline: '6-10 weeks',
      startingPrice: '3,00,000',
      category: 'infrastructure',
      isPopular: false,
      features: [
        'Cloud Migration',
        'Auto Scaling',
        'Backup & Recovery',
        'Security Compliance',
        'Performance Monitoring',
        'Cost Optimization'
      ],
      recentSuccess: 'Reduced infrastructure costs by 60% for Ahmedabad Logistics'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: `Comprehensive digital marketing strategies including SEO, social media management, 
      and PPC campaigns tailored for regional markets with focus on local customer acquisition.`,
      icon: 'TrendingUp',
      technologies: ['Google Ads', 'Facebook Ads', 'Analytics', 'SEMrush', 'Mailchimp', 'HubSpot'],
      timeline: '4-6 weeks',
      startingPrice: '1,50,000',
      category: 'marketing',
      isPopular: true,
      features: [
        'SEO Optimization',
        'Social Media Marketing',
        'PPC Campaign Management',
        'Content Marketing',
        'Email Marketing',
        'Analytics & Reporting'
      ],
      recentSuccess: 'Generated 400% more leads for Surat Diamond Export'
    },
    {
      id: 'it-consulting',
      title: 'IT Consulting',
      description: `Strategic IT consulting services including technology assessment, digital transformation planning, 
      and implementation guidance for businesses looking to modernize their operations.`,
      icon: 'Users',
      technologies: ['Enterprise Solutions', 'Custom Frameworks', 'Open Source', 'Legacy Systems'],
      timeline: '2-4 weeks',
      startingPrice: '1,00,000',
      category: 'consulting',
      isPopular: false,
      features: [
        'Technology Assessment',
        'Strategic Planning',
        'Process Optimization',
        'Security Audit',
        'Training & Support',
        'Implementation Guidance'
      ],
      recentSuccess: 'Streamlined operations for 25+ businesses in Gujarat'
    }
  ];

  const filterCategories = [
    { id: 'all', name: 'All Services', icon: 'Grid3X3' },
    { id: 'development', name: 'Development', icon: 'Code' },
    { id: 'infrastructure', name: 'Infrastructure', icon: 'Server' },
    { id: 'marketing', name: 'Marketing', icon: 'Megaphone' },
    { id: 'consulting', name: 'Consulting', icon: 'Users' }
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services?.filter(service => service?.category === activeFilter);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
            <Icon name="Zap" size={32} color="white" />
          </div>
          <h2 className="text-xl font-semibold text-foreground mb-2">Loading Services</h2>
          <p className="text-muted-foreground">Preparing our comprehensive solutions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Sparkles" size={16} />
              <span>Comprehensive IT Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Services That Transform
              <span className="block text-gradient">Your Business</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              From web development to cloud solutions, we offer a complete suite of IT services 
              designed to accelerate your business growth in the digital age.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 shadow-brand-lg"
                iconName="Calendar"
                iconPosition="left"
                onClick={() => window.open('https://calendly.com/redhand-solution/30min', '_blank')}
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Play"
                iconPosition="left"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">120+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-warning mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Filters */}
      <section className="py-8 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {filterCategories?.map((category) => (
              <button
                key={category?.id}
                onClick={() => setActiveFilter(category?.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeFilter === category?.id
                    ? 'bg-gradient-to-r from-secondary to-accent text-white shadow-brand'
                    : 'bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent'
                }`}
              >
                <Icon name={category?.icon} size={16} />
                <span>{category?.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-16" id="roi-calculator-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {activeFilter === 'all' ? 'All Services' : filterCategories?.find(cat => cat?.id === activeFilter)?.name}
            </h2>
            <p className="text-muted-foreground">
              {filteredServices?.length} service{filteredServices?.length !== 1 ? 's' : ''} available
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(!filteredServices || filteredServices.length === 0) ? (
              <div className="col-span-full text-center text-muted-foreground py-8">
                No services available at this time. Please check back later.
              </div>
            ) : (
              filteredServices.map((service, index) => {
                if (!service || !service.id || !service.title || !service.icon) {
                  return (
                    <div key={service?.id || index} className="p-4 bg-yellow-100 text-yellow-800 rounded shadow">
                      Service information is incomplete.
                    </div>
                  );
                }
                return <ServiceCard key={service.id} service={service} index={index} />;
              })
            )}
          </div>
        </div>
      </section>
      {/* Process Visualization */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProcessVisualization />
        </div>
      </section>
      {/* ROI Calculator */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ROICalculator />
        </div>
      </section>
      {/* Comparison Tool */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ComparisonTool />
        </div>
      </section>
      {/* Client Success Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ClientSuccessMetrics />
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-secondary/10 via-accent/5 to-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how our services can help you achieve your goals. 
            Get a free consultation and custom proposal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 shadow-brand-lg"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={() => window.open('https://calendly.com/redhand-solution/30min', '_blank')}
            >
              Start Free Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              onClick={() => window.open('https://calendly.com/redhand-solution/30min', '_blank')}
            >
              Schedule Meeting
            </Button>
            <Link to="/portfolio">
              <Button
                variant="outline"
                size="lg"
                iconName="Eye"
                iconPosition="left"
              >
                View Our Work
              </Button>
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} color="var(--color-success)" />
              <span>100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} color="var(--color-accent)" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={16} color="var(--color-warning)" />
              <span>Industry Certified</span>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img
                src="/assets/images/RHS Logo (Edited).png"
                alt="Red Hand Solutions Logo"
                className="w-10 h-10 object-contain rounded-lg shadow-brand bg-white"
                style={{ maxWidth: '40px', maxHeight: '40px' }}
              />
              <span className="text-lg font-bold text-foreground">Red Hand Solutions</span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © {new Date()?.getFullYear()} Red Hand Solutions. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground">
                Transforming businesses across Gujarat with innovative IT solutions.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesOverview;