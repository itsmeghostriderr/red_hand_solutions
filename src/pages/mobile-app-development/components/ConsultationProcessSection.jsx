import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ConsultationProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    appType: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const consultationSteps = [
    {
      id: 'initial-consultation',
      title: 'Initial Consultation',
      duration: '30-45 minutes',
      description: 'Free discovery session to understand your business goals, target audience, and app requirements.',
      icon: 'MessageCircle',
      color: 'from-blue-600 to-purple-600',
      activities: [
        'Business requirement analysis',
        'Target audience identification',
        'Competitive landscape review',
        'Initial feature discussion',
        'Budget and timeline planning',
        'Technology recommendation'
      ],
      outcome: 'Clear understanding of your app vision and preliminary project scope'
    },
    {
      id: 'market-analysis',
      title: 'Market Analysis',
      duration: '3-5 days',
      description: 'Comprehensive market research specific to Gujarat and your target industry.',
      icon: 'BarChart3',
      color: 'from-green-600 to-teal-600',
      activities: [
        'Gujarat market research',
        'Industry trend analysis',
        'Competitor feature analysis',
        'User behavior study',
        'Pricing strategy research',
        'Regulatory compliance review'
      ],
      outcome: 'Detailed market analysis report with actionable insights'
    },
    {
      id: 'technical-assessment',
      title: 'Technical Assessment',
      duration: '2-3 days',
      description: 'Technical feasibility study and architecture planning for your app requirements.',
      icon: 'Settings',
      color: 'from-orange-600 to-red-600',
      activities: [
        'Technical feasibility analysis',
        'Architecture planning',
        'Technology stack selection',
        'Integration requirements',
        'Scalability planning',
        'Security assessment'
      ],
      outcome: 'Technical specification document and development roadmap'
    },
    {
      id: 'proposal-presentation',
      title: 'Proposal Presentation',
      duration: '1-2 hours',
      description: 'Detailed project proposal presentation with timeline, budget, and deliverables.',
      icon: 'Presentation',
      color: 'from-purple-600 to-pink-600',
      activities: [
        'Project scope presentation',
        'Timeline and milestone review',
        'Budget breakdown discussion',
        'Team introduction',
        'Contract terms review',
        'Next steps planning'
      ],
      outcome: 'Comprehensive project proposal and signed agreement'
    }
  ];

  const marketAnalysisAreas = [
    {
      title: 'Gujarat Business Landscape',
      description: 'Understanding local business culture, preferences, and market dynamics',
      icon: 'MapPin',
      insights: [
        'Local business practices and preferences',
        'Regional payment method preferences',
        'Language and cultural considerations',
        'Seasonal business patterns'
      ]
    },
    {
      title: 'Competitive Analysis',
      description: 'Detailed analysis of existing solutions and market gaps',
      icon: 'Target',
      insights: [
        'Direct and indirect competitors',
        'Feature gap analysis',
        'Pricing strategy comparison',
        'User experience benchmarking'
      ]
    },
    {
      title: 'User Research',
      description: 'Understanding your target audience behavior and preferences',
      icon: 'Users',
      insights: [
        'User persona development',
        'Usage pattern analysis',
        'Pain point identification',
        'Feature prioritization'
      ]
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Calendar" size={16} />
            <span>Consultation Process</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Strategic App Development
            <span className="block text-gradient bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Consultation Process
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive consultation process ensures we understand your business needs and create the perfect mobile app strategy for the Gujarat market.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          {/* Step Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {consultationSteps?.map((step, index) => (
              <button
                key={step?.id}
                onClick={() => {
                  setActiveStep(index);
                  if (step?.id === 'initial-consultation') {
                    window.open('https://calendly.com/redhand-solution/30min', '_blank');
                  }
                }}
                className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeStep === index
                    ? `bg-gradient-to-r ${step?.color} text-white shadow-brand`
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <Icon name={step?.icon} size={20} />
                <span className="font-medium">Step {index + 1}</span>
              </button>
            ))}
          </div>

          {/* Active Step Details */}
          <div className="bg-white rounded-3xl shadow-brand-lg overflow-hidden">
            {/* Step Header */}
            <div className={`bg-gradient-to-r ${consultationSteps?.[activeStep]?.color} p-8 lg:p-12 text-white`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                    <Icon name={consultationSteps?.[activeStep]?.icon} size={32} />
                  </div>
                  <div>
                    <div className="text-sm opacity-80 mb-1">Step {activeStep + 1} of {consultationSteps?.length}</div>
                    <h3 className="text-3xl font-bold">{consultationSteps?.[activeStep]?.title}</h3>
                    <div className="text-lg opacity-90">{consultationSteps?.[activeStep]?.duration}</div>
                  </div>
                </div>
                <div className="hidden lg:block text-right">
                  <div className="text-6xl font-bold opacity-20">{String(activeStep + 1)?.padStart(2, '0')}</div>
                </div>
              </div>
              <p className="text-xl opacity-90 mt-6 max-w-3xl">
                {consultationSteps?.[activeStep]?.description}
              </p>
            </div>

            {/* Step Content */}
            <div className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Activities */}
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">What We'll Cover</h4>
                  <div className="space-y-4">
                    {consultationSteps?.[activeStep]?.activities?.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="CheckCircle" size={16} className="text-secondary" />
                        </div>
                        <span className="text-gray-700 leading-relaxed">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcome */}
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Expected Outcome</h4>
                  <div className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon name="Target" size={24} className="text-secondary" />
                      </div>
                      <div>
                        <h5 className="text-xl font-semibold text-gray-900 mb-3">Deliverable</h5>
                        <p className="text-gray-700 leading-relaxed">
                          {consultationSteps?.[activeStep]?.outcome}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between mt-8">
                    <Button
                      variant="outline"
                      onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                      disabled={activeStep === 0}
                      iconName="ChevronLeft"
                      iconPosition="left"
                    >
                      Previous
                    </Button>
                    <div className="flex space-x-2">
                      {consultationSteps?.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveStep(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            activeStep === index ? 'bg-secondary scale-125' : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                        ></button>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => setActiveStep(Math.min(consultationSteps?.length - 1, activeStep + 1))}
                      disabled={activeStep === consultationSteps?.length - 1}
                      iconName="ChevronRight"
                      iconPosition="right"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Market Analysis Deep Dive */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Gujarat Market Analysis</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our market analysis goes beyond generic research to provide insights specific to Gujarat's business environment
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {marketAnalysisAreas?.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-brand hover:shadow-brand-lg transition-all duration-300 p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mb-6">
                  <Icon name={area?.icon} size={28} color="white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{area?.title}</h4>
                <p className="text-gray-600 mb-6">{area?.description}</p>
                <div className="space-y-3">
                  {area?.insights?.map((insight, insightIndex) => (
                    <div key={insightIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{insight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Consultation Booking Form */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form Header */}
            <div>
              <h3 className="text-3xl font-bold mb-6">Book Your Free Consultation</h3>
              <p className="text-xl opacity-90 mb-8">
                Ready to discuss your mobile app project? Schedule a free consultation with our experts and get started on your app development journey.
              </p>

              {/* Benefits */}
              <div className="space-y-4">
                {[
                  'Free 45-minute strategy session',
                  'Market analysis and competitive insights',
                  'Technology recommendations',
                  'Budget and timeline estimation',
                  'No obligation project proposal'
                ]?.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-green-400 flex-shrink-0" />
                    <span className="opacity-90">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} className="text-secondary" />
                    <span>+91 6352412728</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={20} className="text-secondary" />
                    <span>redhand.solution@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" size={20} className="text-secondary" />
                    <span>Rajkot, Gujarat, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    type="text"
                    name="name"
                    value={formData?.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder-white/60"
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData?.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder-white/60"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    value={formData?.phone}
                    onChange={handleInputChange}
                    placeholder="+91 6352412728"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder-white/60"
                  />
                  <Input
                    label="Company Name"
                    type="text"
                    name="company"
                    value={formData?.company}
                    onChange={handleInputChange}
                    placeholder="Your company"
                    className="bg-white/10 border-white/20 text-white placeholder-white/60"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    label="App Type"
                    type="text"
                    name="appType"
                    value={formData?.appType}
                    onChange={handleInputChange}
                    placeholder="E-commerce, Healthcare, etc."
                    className="bg-white/10 border-white/20 text-white placeholder-white/60"
                  />
                  <Input
                    label="Budget Range"
                    type="text"
                    name="budget"
                    value={formData?.budget}
                    onChange={handleInputChange}
                    placeholder="₹2L - ₹5L"
                    className="bg-white/10 border-white/20 text-white placeholder-white/60"
                  />
                </div>

                <Input
                  label="Project Timeline"
                  type="text"
                  name="timeline"
                  value={formData?.timeline}
                  onChange={handleInputChange}
                  placeholder="3-6 months"
                  className="bg-white/10 border-white/20 text-white placeholder-white/60"
                />

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Project Description
                  </label>
                  <textarea
                    name="description"
                    value={formData?.description}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Tell us about your app idea and requirements..."
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  fullWidth
                  className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white shadow-brand"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Schedule Free Consultation
                </Button>

                <p className="text-sm opacity-70 text-center">
                  We'll respond within 2 hours during business hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationProcessSection;