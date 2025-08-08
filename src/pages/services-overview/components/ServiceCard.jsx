import React, { useState } from 'react';

import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative group bg-card border border-border rounded-xl p-6 transition-all duration-500 hover:shadow-brand-lg hover:-translate-y-2 ${
        index % 2 === 0 ? 'lg:translate-y-4' : 'lg:-translate-y-4'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      {/* Service Icon */}
      <div className="relative mb-6">
        <div className={`w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-500 ${
          isHovered 
            ? 'bg-gradient-to-br from-secondary to-accent shadow-brand-lg scale-110' 
            : 'bg-muted'
        }`}>
          <Icon 
            name={service?.icon} 
            size={32} 
            color={isHovered ? 'white' : 'var(--color-foreground)'} 
            className="transition-all duration-500"
          />
        </div>
        {service?.isPopular && (
          <div className="absolute -top-2 -right-2 bg-brand-red text-white text-xs px-2 py-1 rounded-full font-medium">
            Popular
          </div>
        )}
      </div>
      {/* Service Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
          <span className="group-hover:text-accent group-hover:underline transition-all duration-300 cursor-pointer">{service?.title}</span>
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {service?.description}
        </p>

        {/* Technology Stack */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {service?.technologies?.slice(0, 4)?.map((tech, idx) => (
              <span 
                key={idx}
                className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
            {service?.technologies?.length > 4 && (
              <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md">
                +{service?.technologies?.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Service Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center">
            <div className="text-lg font-bold text-foreground">{service?.timeline}</div>
            <div className="text-xs text-muted-foreground">Timeline</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-secondary">₹{service?.startingPrice}</div>
            <div className="text-xs text-muted-foreground">Starting from</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
        <Button
            variant="default"
            size="sm"
            className="flex-1 bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90"
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={16}
            onClick={() => window.location.href = '/contact-consultation'}
        >
            Learn More
        </Button>
          <Button
            variant="outline"
            size="sm"
            iconName="Calculator"
            iconSize={16}
            onClick={() => {
              const el = document.getElementById('roi-calculator-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            ROI
          </Button>
        </div>
      </div>
      {/* Hover Preview */}
      <div className={`absolute inset-0 bg-card border border-border rounded-xl p-6 transition-all duration-500 ${
        isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-foreground">Quick Preview</h4>
            <Icon name="Eye" size={20} color="var(--color-accent)" />
          </div>
          
          <div className="space-y-3 flex-1">
            {service?.features?.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <Icon name="Check" size={16} color="var(--color-success)" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-border">
            <div className="text-sm text-muted-foreground mb-2">Recent Success:</div>
            <div className="text-sm font-medium text-foreground">{service?.recentSuccess}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;