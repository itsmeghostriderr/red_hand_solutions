import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const QuoteCalculator = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    projectType: '',
    complexity: '',
    features: [],
    timeline: '',
    support: ''
  });

  const [estimatedCost, setEstimatedCost] = useState({
    min: 0,
    max: 0,
    timeline: '',
    breakdown: []
  });

  const [showResults, setShowResults] = useState(false);

  const projectTypes = [
    { value: 'website', label: 'Business Website', basePrice: 25000 },
    { value: 'ecommerce', label: 'E-commerce Store', basePrice: 75000 },
    { value: 'web-app', label: 'Web Application', basePrice: 150000 },
    { value: 'mobile-app', label: 'Mobile App', basePrice: 200000 },
    { value: 'custom-software', label: 'Custom Software', basePrice: 300000 }
  ];

  const complexityLevels = [
    { value: 'basic', label: 'Basic', multiplier: 1 },
    { value: 'intermediate', label: 'Intermediate', multiplier: 1.5 },
    { value: 'advanced', label: 'Advanced', multiplier: 2.2 },
    { value: 'enterprise', label: 'Enterprise', multiplier: 3 }
  ];

  const additionalFeatures = [
    { value: 'cms', label: 'Content Management System', price: 15000 },
    { value: 'payment-gateway', label: 'Payment Gateway Integration', price: 20000 },
    { value: 'user-auth', label: 'User Authentication System', price: 25000 },
    { value: 'api-integration', label: 'Third-party API Integration', price: 30000 },
    { value: 'admin-panel', label: 'Admin Dashboard', price: 35000 },
    { value: 'mobile-responsive', label: 'Mobile Responsive Design', price: 10000 },
    { value: 'seo-optimization', label: 'SEO Optimization', price: 15000 },
    { value: 'analytics', label: 'Analytics Integration', price: 8000 },
    { value: 'social-login', label: 'Social Media Login', price: 12000 },
    { value: 'multi-language', label: 'Multi-language Support', price: 25000 }
  ];

  const timelines = [
    { value: '1-month', label: '1 Month (Rush)', multiplier: 1.3 },
    { value: '2-3-months', label: '2-3 Months (Standard)', multiplier: 1 },
    { value: '3-6-months', label: '3-6 Months (Relaxed)', multiplier: 0.9 },
    { value: '6-months+', label: '6+ Months (Extended)', multiplier: 0.8 }
  ];

  const supportOptions = [
    { value: 'basic', label: '3 Months Basic Support', price: 5000 },
    { value: 'standard', label: '6 Months Standard Support', price: 12000 },
    { value: 'premium', label: '12 Months Premium Support', price: 25000 },
    { value: 'enterprise', label: '24/7 Enterprise Support', price: 50000 }
  ];

  const handleSelectChange = (field, value) => {
    setSelectedOptions(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFeatureToggle = (featureValue) => {
    setSelectedOptions(prev => ({
      ...prev,
      features: prev?.features?.includes(featureValue)
        ? prev?.features?.filter(f => f !== featureValue)
        : [...prev?.features, featureValue]
    }));
  };

  const calculateEstimate = () => {
    if (!selectedOptions?.projectType || !selectedOptions?.complexity) {
      return;
    }

    const projectType = projectTypes?.find(p => p?.value === selectedOptions?.projectType);
    const complexity = complexityLevels?.find(c => c?.value === selectedOptions?.complexity);
    const timeline = timelines?.find(t => t?.value === selectedOptions?.timeline) || { multiplier: 1 };
    const support = supportOptions?.find(s => s?.value === selectedOptions?.support) || { price: 0 };

    let basePrice = projectType?.basePrice * complexity?.multiplier;
    
    // Add features cost
    const featuresPrice = selectedOptions?.features?.reduce((total, featureValue) => {
      const feature = additionalFeatures?.find(f => f?.value === featureValue);
      return total + (feature ? feature?.price : 0);
    }, 0);

    // Apply timeline multiplier
    const timelineAdjustedPrice = (basePrice + featuresPrice) * timeline?.multiplier;
    
    // Add support cost
    const totalPrice = timelineAdjustedPrice + support?.price;

    // Calculate range (±20%)
    const minPrice = Math.round(totalPrice * 0.8);
    const maxPrice = Math.round(totalPrice * 1.2);

    // Create breakdown
    const breakdown = [
      { item: `${projectType?.label} (${complexity?.label})`, cost: Math.round(basePrice) },
      ...(featuresPrice > 0 ? [{ item: 'Additional Features', cost: featuresPrice }] : []),
      ...(timeline?.multiplier !== 1 ? [{ item: 'Timeline Adjustment', cost: Math.round((basePrice + featuresPrice) * (timeline?.multiplier - 1)) }] : []),
      ...(support?.price > 0 ? [{ item: support?.label, cost: support?.price }] : [])
    ];

    setEstimatedCost({
      min: minPrice,
      max: maxPrice,
      timeline: timeline?.label || '2-3 Months',
      breakdown
    });

    setShowResults(true);
  };

  useEffect(() => {
    if (selectedOptions?.projectType && selectedOptions?.complexity) {
      calculateEstimate();
    }
  }, [selectedOptions]);

  const resetCalculator = () => {
    setSelectedOptions({
      projectType: '',
      complexity: '',
      features: [],
      timeline: '',
      support: ''
    });
    setShowResults(false);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Project Cost Calculator
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get an instant estimate for your project. Our transparent pricing helps you plan your budget with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-primary mb-6 flex items-center">
                <Icon name="Calculator" size={20} className="mr-2" />
                Project Configuration
              </h3>

              <div className="space-y-6">
                {/* Project Type */}
                <Select
                  label="Project Type"
                  placeholder="Select your project type"
                  options={projectTypes?.map(p => ({ value: p?.value, label: p?.label }))}
                  value={selectedOptions?.projectType}
                  onChange={(value) => handleSelectChange('projectType', value)}
                  required
                />

                {/* Complexity */}
                <Select
                  label="Complexity Level"
                  placeholder="Select complexity level"
                  options={complexityLevels?.map(c => ({ value: c?.value, label: c?.label }))}
                  value={selectedOptions?.complexity}
                  onChange={(value) => handleSelectChange('complexity', value)}
                  required
                />

                {/* Additional Features */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Additional Features
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {additionalFeatures?.map((feature) => (
                      <div
                        key={feature?.value}
                        className={`p-3 border rounded-lg cursor-pointer transition-brand ${
                          selectedOptions?.features?.includes(feature?.value)
                            ? 'border-accent bg-accent/10' :'border-border hover:border-accent/50'
                        }`}
                        onClick={() => handleFeatureToggle(feature?.value)}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{feature?.label}</span>
                          <span className="text-xs text-muted-foreground">+₹{feature?.price?.toLocaleString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <Select
                  label="Project Timeline"
                  placeholder="Select timeline"
                  options={timelines?.map(t => ({ value: t?.value, label: t?.label }))}
                  value={selectedOptions?.timeline}
                  onChange={(value) => handleSelectChange('timeline', value)}
                />

                {/* Support */}
                <Select
                  label="Support Package"
                  placeholder="Select support package"
                  options={supportOptions?.map(s => ({ value: s?.value, label: s?.label }))}
                  value={selectedOptions?.support}
                  onChange={(value) => handleSelectChange('support', value)}
                />

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  <Button
                    variant="outline"
                    onClick={resetCalculator}
                    iconName="RotateCcw"
                    iconPosition="left"
                    iconSize={16}
                  >
                    Reset
                  </Button>
                  <Button
                    variant="default"
                    onClick={calculateEstimate}
                    className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90"
                    iconName="Calculator"
                    iconPosition="left"
                    iconSize={16}
                  >
                    Calculate
                  </Button>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-primary mb-6 flex items-center">
                <Icon name="TrendingUp" size={20} className="mr-2" />
                Cost Estimate
              </h3>

              {showResults ? (
                <div className="space-y-6">
                  {/* Price Range */}
                  <div className="text-center bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg p-6">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      ₹{estimatedCost?.min?.toLocaleString()} - ₹{estimatedCost?.max?.toLocaleString()}
                    </div>
                    <div className="text-muted-foreground">
                      Estimated project cost
                    </div>
                    <div className="flex items-center justify-center mt-4 text-sm text-muted-foreground">
                      <Icon name="Clock" size={16} className="mr-2" />
                      Timeline: {estimatedCost?.timeline}
                    </div>
                  </div>

                  {/* Cost Breakdown */}
                  <div>
                    <h4 className="font-semibold text-primary mb-4">Cost Breakdown</h4>
                    <div className="space-y-3">
                      {estimatedCost?.breakdown?.map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                          <span className="text-sm text-foreground">{item?.item}</span>
                          <span className="font-medium text-primary">₹{item?.cost?.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-start space-x-2">
                      <Icon name="Info" size={16} className="text-accent mt-0.5" />
                      <div className="text-sm text-muted-foreground">
                        <p className="font-medium mb-1">Important Note:</p>
                        <p>This is an estimated cost based on typical project requirements. Final pricing may vary based on specific needs, integrations, and customizations. Contact us for a detailed quote.</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="space-y-3">
                    <Button
                      variant="default"
                      fullWidth
                      className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90"
                      iconName="MessageCircle"
                      iconPosition="left"
                      iconSize={16}
                    >
                      Discuss This Quote
                    </Button>
                    <Button
                      variant="outline"
                      fullWidth
                      iconName="Download"
                      iconPosition="left"
                      iconSize={16}
                    >
                      Download Estimate
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Calculator" size={32} className="text-muted-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    Configure Your Project
                  </h4>
                  <p className="text-muted-foreground">
                    Select your project type and complexity to see an instant cost estimate.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Pricing Transparency */}
          <div className="mt-12 bg-card border border-border rounded-xl p-6">
            <h3 className="text-xl font-semibold text-primary mb-6 text-center">
              Why Choose Our Transparent Pricing?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Eye" size={24} color="white" />
                </div>
                <h4 className="font-semibold text-primary mb-2">No Hidden Costs</h4>
                <p className="text-sm text-muted-foreground">
                  All costs are clearly outlined upfront with detailed breakdowns.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={24} color="white" />
                </div>
                <h4 className="font-semibold text-primary mb-2">Fixed Price Guarantee</h4>
                <p className="text-sm text-muted-foreground">
                  Once agreed, the price remains fixed throughout the project.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={24} color="white" />
                </div>
                <h4 className="font-semibold text-primary mb-2">Value for Money</h4>
                <p className="text-sm text-muted-foreground">
                  Competitive pricing with premium quality and ongoing support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCalculator;