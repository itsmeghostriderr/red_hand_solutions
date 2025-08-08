import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ROICalculator = () => {
  const [formData, setFormData] = useState({
    serviceType: '',
    businessSize: '',
    currentRevenue: '',
    projectBudget: '',
    timeframe: ''
  });
  
  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const serviceOptions = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-app', label: 'Mobile App Development' },
    { value: 'cloud-solutions', label: 'Cloud Solutions' },
    { value: 'digital-marketing', label: 'Digital Marketing' },
    { value: 'it-consulting', label: 'IT Consulting' }
  ];

  const businessSizeOptions = [
    { value: 'startup', label: 'Startup (1-10 employees)' },
    { value: 'small', label: 'Small Business (11-50 employees)' },
    { value: 'medium', label: 'Medium Business (51-200 employees)' },
    { value: 'large', label: 'Large Enterprise (200+ employees)' }
  ];

  const timeframeOptions = [
    { value: '6', label: '6 months' },
    { value: '12', label: '1 year' },
    { value: '24', label: '2 years' },
    { value: '36', label: '3 years' }
  ];

  const calculateROI = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const revenue = parseFloat(formData?.currentRevenue) || 0;
      const budget = parseFloat(formData?.projectBudget) || 0;
      const months = parseInt(formData?.timeframe) || 12;
      
      // ROI calculation based on service type and business size
      const multipliers = {
        'web-development': { startup: 2.5, small: 3.2, medium: 4.1, large: 5.0 },
        'mobile-app': { startup: 3.0, small: 3.8, medium: 4.5, large: 5.5 },
        'cloud-solutions': { startup: 2.2, small: 2.8, medium: 3.5, large: 4.2 },
        'digital-marketing': { startup: 3.5, small: 4.2, medium: 5.0, large: 6.0 },
        'it-consulting': { startup: 2.0, small: 2.5, medium: 3.0, large: 3.8 }
      };
      
      const multiplier = multipliers?.[formData?.serviceType]?.[formData?.businessSize] || 2.5;
      const monthlyIncrease = (revenue * 0.15 * multiplier) / 12; // 15% base increase
      const totalIncrease = monthlyIncrease * months;
      const roi = ((totalIncrease - budget) / budget) * 100;
      const paybackPeriod = budget / monthlyIncrease;
      
      setResults({
        totalIncrease: Math.round(totalIncrease),
        monthlyIncrease: Math.round(monthlyIncrease),
        roi: Math.round(roi),
        paybackPeriod: Math.round(paybackPeriod * 10) / 10,
        projectedRevenue: Math.round(revenue + totalIncrease)
      });
      
      setIsCalculating(false);
    }, 2000);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setResults(null);
  };

  const isFormValid = Object.values(formData)?.every(value => value !== '');

  return (
    <div className="bg-card border border-border rounded-xl p-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Calculator" size={32} color="white" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">ROI Calculator</h3>
        <p className="text-muted-foreground">Calculate your potential return on investment</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-6">
          <Select
            label="Service Type"
            placeholder="Select a service"
            options={serviceOptions}
            value={formData?.serviceType}
            onChange={(value) => handleInputChange('serviceType', value)}
            required
          />

          <Select
            label="Business Size"
            placeholder="Select your business size"
            options={businessSizeOptions}
            value={formData?.businessSize}
            onChange={(value) => handleInputChange('businessSize', value)}
            required
          />

          <Input
            label="Current Annual Revenue (₹)"
            type="number"
            placeholder="e.g., 5000000"
            value={formData?.currentRevenue}
            onChange={(e) => handleInputChange('currentRevenue', e?.target?.value)}
            required
          />

          <Input
            label="Project Budget (₹)"
            type="number"
            placeholder="e.g., 500000"
            value={formData?.projectBudget}
            onChange={(e) => handleInputChange('projectBudget', e?.target?.value)}
            required
          />

          <Select
            label="ROI Timeframe"
            placeholder="Select timeframe"
            options={timeframeOptions}
            value={formData?.timeframe}
            onChange={(value) => handleInputChange('timeframe', value)}
            required
          />

          <Button
            variant="default"
            fullWidth
            loading={isCalculating}
            disabled={!isFormValid}
            onClick={calculateROI}
            className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90"
            iconName="TrendingUp"
            iconPosition="left"
          >
            {isCalculating ? 'Calculating...' : 'Calculate ROI'}
          </Button>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {results ? (
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground mb-4">Your ROI Projection</h4>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-success/10 border border-success/20 rounded-lg text-center">
                  <div className="text-2xl font-bold text-success">{results?.roi}%</div>
                  <div className="text-sm text-muted-foreground">ROI</div>
                </div>
                
                <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg text-center">
                  <div className="text-2xl font-bold text-accent">{results?.paybackPeriod}</div>
                  <div className="text-sm text-muted-foreground">Months to Break Even</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm text-muted-foreground">Monthly Revenue Increase</span>
                  <span className="font-semibold text-foreground">₹{results?.monthlyIncrease?.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm text-muted-foreground">Total Revenue Increase</span>
                  <span className="font-semibold text-success">₹{results?.totalIncrease?.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm text-muted-foreground">Projected Annual Revenue</span>
                  <span className="font-semibold text-foreground">₹{results?.projectedRevenue?.toLocaleString()}</span>
                </div>
              </div>

              <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Icon name="Info" size={16} color="var(--color-warning)" className="mt-0.5" />
                  <div className="text-sm">
                    <p className="text-warning font-medium mb-1">Disclaimer</p>
                    <p className="text-muted-foreground">
                      These calculations are estimates based on industry averages and past client results. 
                      Actual ROI may vary based on implementation, market conditions, and business execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
                <Icon name="BarChart3" size={32} color="var(--color-muted-foreground)" />
              </div>
              <h4 className="text-lg font-medium text-foreground mb-2">Ready to Calculate?</h4>
              <p className="text-muted-foreground text-sm">
                Fill in your business details to see your potential ROI
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;