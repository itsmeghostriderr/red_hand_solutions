import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ClientSuccessMetrics = () => {
  const [animatedValues, setAnimatedValues] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  const metrics = [
    {
      id: 'projects',
      title: 'Projects Completed',
      value: 150,
      suffix: '+',
      icon: 'CheckCircle',
      color: 'success',
      description: 'Successfully delivered projects across Gujarat'
    },
    {
      id: 'clients',
      title: 'Happy Clients',
      value: 120,
      suffix: '+',
      icon: 'Users',
      color: 'accent',
      description: 'Businesses transformed with our solutions'
    },
    {
      id: 'revenue',
      title: 'Client Revenue Increase',
      value: 250,
      suffix: '%',
      icon: 'TrendingUp',
      color: 'secondary',
      description: 'Average revenue growth for our clients'
    },
    {
      id: 'satisfaction',
      title: 'Client Satisfaction',
      value: 98,
      suffix: '%',
      icon: 'Star',
      color: 'warning',
      description: 'Client satisfaction rate based on feedback'
    }
  ];

  const successStories = [
    {
      client: "Gujarat Textiles Ltd",
      service: "Web Development",
      improvement: "300% increase in online orders",
      timeframe: "6 months",
      icon: "Globe"
    },
    {
      client: "Rajkot Food Chain",
      service: "Mobile App",
      improvement: "150% customer retention",
      timeframe: "4 months",
      icon: "Smartphone"
    },
    {
      client: "Ahmedabad Logistics",
      service: "Cloud Solutions",
      improvement: "60% cost reduction",
      timeframe: "3 months",
      icon: "Cloud"
    },
    {
      client: "Surat Diamond Export",
      service: "Digital Marketing",
      improvement: "400% lead generation",
      timeframe: "8 months",
      icon: "TrendingUp"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('metrics-section');
    if (element) observer?.observe(element);

    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      metrics?.forEach((metric) => {
        let start = 0;
        const end = metric?.value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setAnimatedValues(prev => ({ ...prev, [metric?.id]: end }));
            clearInterval(timer);
          } else {
            setAnimatedValues(prev => ({ ...prev, [metric?.id]: Math.floor(start) }));
          }
        }, 16);
      });
    }
  }, [isVisible]);

  const getColorClasses = (color) => {
    const colorMap = {
      success: 'text-success bg-success/10 border-success/20',
      accent: 'text-accent bg-accent/10 border-accent/20',
      secondary: 'text-secondary bg-secondary/10 border-secondary/20',
      warning: 'text-warning bg-warning/10 border-warning/20'
    };
    return colorMap?.[color] || colorMap?.accent;
  };

  return (
    <div id="metrics-section" className="space-y-8">
      {/* Main Metrics */}
      <div className="bg-card border border-border rounded-xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">Our Track Record</h3>
          <p className="text-muted-foreground">Proven results that speak for themselves</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics?.map((metric) => (
            <div key={metric?.id} className="text-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border-2 ${getColorClasses(metric?.color)}`}>
                <Icon name={metric?.icon} size={28} />
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl font-bold text-foreground">
                  {animatedValues?.[metric?.id] || 0}{metric?.suffix}
                </div>
                <h4 className="font-semibold text-foreground">{metric?.title}</h4>
                <p className="text-sm text-muted-foreground">{metric?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Success Stories */}
      <div className="bg-card border border-border rounded-xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">Client Success Stories</h3>
          <p className="text-muted-foreground">Real results from real businesses in Gujarat</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {successStories?.map((story, index) => (
            <div 
              key={index}
              className="p-6 bg-muted/30 border border-border rounded-lg hover:shadow-brand transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={story?.icon} size={24} color="white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{story?.client}</h4>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {story?.timeframe}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-2">{story?.service}</p>
                  
                  <div className="flex items-center space-x-2">
                    <Icon name="TrendingUp" size={16} color="var(--color-success)" />
                    <span className="text-sm font-medium text-success">{story?.improvement}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Industry Recognition */}
      <div className="bg-gradient-to-br from-secondary/5 to-accent/5 border border-border rounded-xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">Industry Recognition</h3>
          <p className="text-muted-foreground">Trusted by businesses across Gujarat</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-card border border-border rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Award" size={24} color="var(--color-secondary)" />
            </div>
            <h4 className="font-semibold text-foreground mb-1">Best IT Solutions</h4>
            <p className="text-sm text-muted-foreground">Gujarat Tech Awards 2023</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-card border border-border rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Shield" size={24} color="var(--color-accent)" />
            </div>
            <h4 className="font-semibold text-foreground mb-1">ISO Certified</h4>
            <p className="text-sm text-muted-foreground">Quality Management</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-card border border-border rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Users" size={24} color="var(--color-success)" />
            </div>
            <h4 className="font-semibold text-foreground mb-1">Top Employer</h4>
            <p className="text-sm text-muted-foreground">Rajkot IT Sector 2023</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-card border border-border rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Zap" size={24} color="var(--color-warning)" />
            </div>
            <h4 className="font-semibold text-foreground mb-1">Innovation Leader</h4>
            <p className="text-sm text-muted-foreground">Digital Gujarat Summit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSuccessMetrics;