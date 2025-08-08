import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsSection = () => {
  const stats = [
    {
      icon: 'CheckCircle',
      value: '150+',
      label: 'Projects Completed',
      description: 'Successfully delivered across industries'
    },
    {
      icon: 'Users',
      value: '120+',
      label: 'Happy Clients',
      description: 'Businesses transformed digitally'
    },
    {
      icon: 'Award',
      value: '98%',
      label: 'Success Rate',
      description: 'Projects delivered on time & budget'
    },
    {
      icon: 'TrendingUp',
      value: '300%',
      label: 'Average ROI',
      description: 'Return on investment for clients'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-secondary/5 to-accent/5 rounded-xl p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Our Track Record Speaks
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Over 8 years of delivering exceptional digital solutions across Gujarat and beyond. 
          Here's what we've achieved together with our clients.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats?.map((stat, index) => (
          <div
            key={index}
            className="text-center p-6 bg-card rounded-xl border border-border hover:shadow-brand transition-brand group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-brand">
              <Icon name={stat?.icon} size={24} color="white" />
            </div>
            <div className="text-3xl font-bold text-secondary mb-2">
              {stat?.value}
            </div>
            <div className="text-lg font-semibold text-foreground mb-2">
              {stat?.label}
            </div>
            <div className="text-sm text-muted-foreground">
              {stat?.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;