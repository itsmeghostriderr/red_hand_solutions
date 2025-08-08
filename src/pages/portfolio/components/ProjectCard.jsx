import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails, onRequestSimilar }) => {
  const formatMetric = (value, type) => {
    if (type === 'percentage') return `${value}%`;
    if (type === 'currency') return `₹${value}L`;
    if (type === 'time') return `${value} months`;
    return value;
  };

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-brand hover:shadow-brand-lg transition-brand group">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-brand"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Project Type Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
            {project?.type}
          </span>
        </div>

        {/* Live Demo Badge */}
        {project?.hasLiveDemo && (
          <div className="absolute top-4 right-4">
            <div className="flex items-center space-x-1 px-2 py-1 bg-success text-success-foreground text-xs font-medium rounded-full">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span>Live</span>
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-brand">
          <div className="flex space-x-2">
            {project?.hasLiveDemo && (
              <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-brand">
                <Icon name="ExternalLink" size={16} color="white" />
              </button>
            )}
            <button 
              onClick={() => onViewDetails(project)}
              className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-brand"
            >
              <Icon name="Eye" size={16} color="white" />
            </button>
          </div>
        </div>
      </div>
      {/* Project Content */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-brand">
            {project?.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {project?.description}
          </p>
        </div>

        {/* Client Info */}
        <div className="flex items-center space-x-3 mb-4 p-3 bg-muted rounded-lg">
          <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
            <Icon name="Building2" size={16} color="white" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">{project?.client}</p>
            <p className="text-xs text-muted-foreground">{project?.industry}</p>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project?.technologies?.slice(0, 4)?.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded-md"
              >
                {tech}
              </span>
            ))}
            {project?.technologies?.length > 4 && (
              <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-md">
                +{project?.technologies?.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {project?.metrics?.slice(0, 2)?.map((metric, index) => (
            <div key={index} className="text-center p-3 bg-surface rounded-lg">
              <div className="text-lg font-bold text-secondary">
                {formatMetric(metric?.value, metric?.type)}
              </div>
              <div className="text-xs text-muted-foreground">{metric?.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline & Status */}
        <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Icon name="Calendar" size={14} />
            <span>{project?.timeline}</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className={`w-2 h-2 rounded-full ${
              project?.status === 'completed' ? 'bg-success' : 
              project?.status === 'ongoing' ? 'bg-warning' : 'bg-muted'
            }`} />
            <span className="capitalize">{project?.status}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(project)}
            iconName="FileText"
            iconPosition="left"
            iconSize={14}
            className="flex-1"
          >
            Case Study
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => window.open('https://calendly.com/redhand-solution/meeting', '_blank')}
            iconName="MessageSquare"
            iconPosition="left"
            iconSize={14}
            className="flex-1"
          >
            Request Similar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;