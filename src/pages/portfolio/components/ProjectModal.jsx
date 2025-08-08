import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose, onRequestSimilar }) => {
  if (!isOpen || !project) return null;

  const formatMetric = (value, type) => {
    if (type === 'percentage') return `${value}%`;
    if (type === 'currency') return `₹${value}L`;
    if (type === 'time') return `${value} months`;
    return value;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-card border border-border rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-brand-lg">
          {/* Header */}
          <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground">{project?.title}</h2>
              <p className="text-muted-foreground">{project?.client} • {project?.industry}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-brand"
            >
              <Icon name="X" size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Project Image */}
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
              <Image
                src={project?.image}
                alt={project?.title}
                className="w-full h-full object-cover"
              />
              {project?.hasLiveDemo && (
                <div className="absolute top-4 right-4">
                  <Button
                    variant="default"
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="left"
                    iconSize={16}
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20"
                    onClick={() => window.open('https://calendly.com/redhand-solution/meeting', '_blank')}
                  >
                    View Live Demo
                  </Button>
                </div>
              )}
            </div>

            {/* Project Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h3 className="text-xl font-semibold text-foreground mb-4">Project Overview</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project?.fullDescription}
                </p>

                {/* Challenge */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <Icon name="AlertTriangle" size={20} className="mr-2 text-warning" />
                    Challenge
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {project?.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <Icon name="Lightbulb" size={20} className="mr-2 text-accent" />
                    Solution
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {project?.solution}
                  </p>
                </div>

                {/* Implementation Process */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <Icon name="Settings" size={20} className="mr-2 text-secondary" />
                    Implementation Process
                  </h4>
                  <div className="space-y-3">
                    {project?.implementationSteps?.map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-muted-foreground">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Project Details */}
                <div className="bg-muted rounded-xl p-4">
                  <h4 className="font-semibold text-foreground mb-4">Project Details</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Timeline</span>
                      <span className="text-sm font-medium text-foreground">{project?.timeline}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Team Size</span>
                      <span className="text-sm font-medium text-foreground">{project?.teamSize} members</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Status</span>
                      <span className={`text-sm font-medium capitalize ${
                        project?.status === 'completed' ? 'text-success' : 
                        project?.status === 'ongoing' ? 'text-warning' : 'text-muted-foreground'
                      }`}>
                        {project?.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="bg-muted rounded-xl p-4">
                  <h4 className="font-semibold text-foreground mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project?.technologies?.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="bg-muted rounded-xl p-4">
                  <h4 className="font-semibold text-foreground mb-4">Key Results</h4>
                  <div className="space-y-4">
                    {project?.metrics?.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-secondary">
                          {formatMetric(metric?.value, metric?.type)}
                        </div>
                        <div className="text-sm text-muted-foreground">{metric?.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Client Testimonial */}
            {project?.testimonial && (
              <div className="bg-gradient-to-r from-secondary/5 to-accent/5 rounded-xl p-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Quote" size={20} color="white" />
                  </div>
                  <div>
                    <blockquote className="text-foreground italic mb-4 text-lg leading-relaxed">
                      "{project?.testimonial?.content}"
                    </blockquote>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                        <Icon name="User" size={16} />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{project?.testimonial?.author}</p>
                        <p className="text-sm text-muted-foreground">{project?.testimonial?.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                onClick={() => onRequestSimilar(project)}
                iconName="MessageSquare"
                iconPosition="left"
                iconSize={16}
                className="flex-1"
              >
                Request Similar Project
              </Button>
              {project?.hasLiveDemo && (
                <Button
                  variant="outline"
                  iconName="ExternalLink"
                  iconPosition="left"
                  iconSize={16}
                  className="flex-1"
                >
                  View Live Demo
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;