import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const FilterBar = ({ 
  searchTerm, 
  onSearchChange, 
  selectedIndustry, 
  onIndustryChange, 
  selectedTechnology, 
  onTechnologyChange, 
  selectedType, 
  onTypeChange,
  onClearFilters,
  totalProjects,
  filteredCount
}) => {
  const industries = [
    { value: 'all', label: 'All Industries' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'retail', label: 'Retail & E-commerce' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'education', label: 'Education' },
    { value: 'finance', label: 'Finance' },
    { value: 'logistics', label: 'Logistics' },
    { value: 'textile', label: 'Textile' },
    { value: 'chemical', label: 'Chemical' },
    { value: 'startup', label: 'Startups' }
  ];

  const technologies = [
    { value: 'all', label: 'All Technologies' },
    { value: 'react', label: 'React' },
    { value: 'nodejs', label: 'Node.js' },
    { value: 'python', label: 'Python' },
    { value: 'flutter', label: 'Flutter' },
    { value: 'php', label: 'PHP' },
    { value: 'mysql', label: 'MySQL' },
    { value: 'mongodb', label: 'MongoDB' },
    { value: 'aws', label: 'AWS' },
    { value: 'firebase', label: 'Firebase' }
  ];

  const projectTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'web-application', label: 'Web Application' },
    { value: 'mobile-app', label: 'Mobile App' },
    { value: 'e-commerce', label: 'E-commerce' },
    { value: 'cms', label: 'CMS' },
    { value: 'api', label: 'API Development' },
    { value: 'integration', label: 'System Integration' }
  ];

  const hasActiveFilters = selectedIndustry !== 'all' || selectedTechnology !== 'all' || selectedType !== 'all' || searchTerm;

  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Input
            type="search"
            placeholder="Search projects by name, client, or description..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e?.target?.value)}
            className="pl-10"
          />
          <Icon 
            name="Search" 
            size={18} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
          />
        </div>
      </div>
      {/* Filter Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Industry Filter */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Industry</label>
          <select
            value={selectedIndustry}
            onChange={(e) => onIndustryChange(e?.target?.value)}
            className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-brand"
          >
            {industries?.map((industry) => (
              <option key={industry?.value} value={industry?.value}>
                {industry?.label}
              </option>
            ))}
          </select>
        </div>

        {/* Technology Filter */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Technology</label>
          <select
            value={selectedTechnology}
            onChange={(e) => onTechnologyChange(e?.target?.value)}
            className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-brand"
          >
            {technologies?.map((tech) => (
              <option key={tech?.value} value={tech?.value}>
                {tech?.label}
              </option>
            ))}
          </select>
        </div>

        {/* Project Type Filter */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Project Type</label>
          <select
            value={selectedType}
            onChange={(e) => onTypeChange(e?.target?.value)}
            className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-brand"
          >
            {projectTypes?.map((type) => (
              <option key={type?.value} value={type?.value}>
                {type?.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Results Summary & Clear Filters */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-medium text-foreground">{filteredCount}</span> of{' '}
          <span className="font-medium text-foreground">{totalProjects}</span> projects
        </div>
        
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            iconName="X"
            iconPosition="left"
            iconSize={14}
          >
            Clear Filters
          </Button>
        )}
      </div>
    </div>
  );
};

export default FilterBar;