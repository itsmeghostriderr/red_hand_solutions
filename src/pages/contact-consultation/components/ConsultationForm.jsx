import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    preferredContact: '',
    meetingType: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-app', label: 'Mobile App Development' },
    { value: 'ecommerce', label: 'E-commerce Solution' },
    { value: 'custom-software', label: 'Custom Software' },
    { value: 'ui-ux-design', label: 'UI/UX Design' },
    { value: 'digital-marketing', label: 'Digital Marketing' },
    { value: 'consulting', label: 'Technology Consulting' },
    { value: 'other', label: 'Other' }
  ];

  const budgetRanges = [
    { value: '50000-100000', label: '₹50,000 - ₹1,00,000' },
    { value: '100000-300000', label: '₹1,00,000 - ₹3,00,000' },
    { value: '300000-500000', label: '₹3,00,000 - ₹5,00,000' },
    { value: '500000-1000000', label: '₹5,00,000 - ₹10,00,000' },
    { value: '1000000+', label: '₹10,00,000+' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  const timelines = [
    { value: 'urgent', label: 'Urgent (Within 1 month)' },
    { value: '1-3-months', label: '1-3 months' },
    { value: '3-6-months', label: '3-6 months' },
    { value: '6-12-months', label: '6-12 months' },
    { value: 'flexible', label: 'Flexible timeline' }
  ];

  const contactPreferences = [
    { value: 'phone', label: 'Phone Call' },
    { value: 'email', label: 'Email' },
    { value: 'whatsapp', label: 'WhatsApp' },
    { value: 'video-call', label: 'Video Call' }
  ];

  const meetingTypes = [
    { value: 'in-person', label: 'In-person (Rajkot Office)' },
    { value: 'video-call', label: 'Video Call (Google Meet/Zoom)' },
    { value: 'phone-call', label: 'Phone Call' },
    { value: 'no-preference', label: 'No Preference' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]{10,}$/?.test(formData?.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData?.projectType) {
      newErrors.projectType = 'Please select a project type';
    }

    if (!formData?.description?.trim()) {
      newErrors.description = 'Project description is required';
    } else if (formData?.description?.trim()?.length < 20) {
      newErrors.description = 'Please provide more details (minimum 20 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: '',
        preferredContact: '',
        meetingType: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-success to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
              <Icon name="CheckCircle" size={40} color="white" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Thank You for Your Interest!
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We've received your consultation request and will get back to you within 24 hours. Our team is excited to discuss your project and help bring your vision to life.
            </p>
            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-primary mb-4">What happens next?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={16} className="text-accent" />
                  <span className="text-sm">We'll review your requirements within 2 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={16} className="text-accent" />
                  <span className="text-sm">Our expert will contact you to schedule a consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="FileText" size={16} className="text-accent" />
                  <span className="text-sm">We'll prepare a customized proposal for your project</span>
                </div>
              </div>
            </div>
            <Button
              variant="default"
              className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90"
              iconName="ArrowLeft"
              iconPosition="left"
              onClick={() => setIsSubmitted(false)}
            >
              Submit Another Request
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Schedule Your Free Consultation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell us about your project and we'll provide expert guidance, timeline estimates, and a customized solution proposal at no cost.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="bg-muted/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-primary mb-6 flex items-center">
                <Icon name="User" size={20} className="mr-2" />
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData?.name}
                  onChange={handleInputChange}
                  error={errors?.name}
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  placeholder="your.email@company.com"
                  value={formData?.email}
                  onChange={handleInputChange}
                  error={errors?.email}
                  required
                />
                <Input
                  label="Phone Number"
                  type="tel"
                  name="phone"
                  placeholder="+91 6352412728"
                  value={formData?.phone}
                  onChange={handleInputChange}
                  error={errors?.phone}
                  required
                />
                <Input
                  label="Company Name"
                  type="text"
                  name="company"
                  placeholder="Your company name (optional)"
                  value={formData?.company}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="bg-muted/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-primary mb-6 flex items-center">
                <Icon name="Briefcase" size={20} className="mr-2" />
                Project Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Select
                  label="Project Type"
                  placeholder="Select project type"
                  options={projectTypes}
                  value={formData?.projectType}
                  onChange={(value) => handleSelectChange('projectType', value)}
                  error={errors?.projectType}
                  required
                />
                <Select
                  label="Budget Range"
                  placeholder="Select budget range"
                  options={budgetRanges}
                  value={formData?.budget}
                  onChange={(value) => handleSelectChange('budget', value)}
                />
                <Select
                  label="Timeline"
                  placeholder="Select timeline"
                  options={timelines}
                  value={formData?.timeline}
                  onChange={(value) => handleSelectChange('timeline', value)}
                />
                <Select
                  label="Preferred Contact Method"
                  placeholder="How should we contact you?"
                  options={contactPreferences}
                  value={formData?.preferredContact}
                  onChange={(value) => handleSelectChange('preferredContact', value)}
                />
              </div>
              <div className="mb-6">
                <Select
                  label="Meeting Preference"
                  placeholder="Select meeting type"
                  options={meetingTypes}
                  value={formData?.meetingType}
                  onChange={(value) => handleSelectChange('meetingType', value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Description *
                </label>
                <textarea
                  name="description"
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  placeholder="Please describe your project requirements, goals, and any specific features you need. The more details you provide, the better we can assist you."
                  value={formData?.description}
                  onChange={handleInputChange}
                />
                {errors?.description && (
                  <p className="text-destructive text-sm mt-1">{errors?.description}</p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="button"
                variant="default"
                size="lg"
                loading={isSubmitting}
                className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white shadow-brand-lg px-12 py-4"
                iconName="Send"
                iconPosition="right"
                iconSize={20}
                onClick={() => window.open('https://calendly.com/redhand-solution/meeting', '_blank')}
              >
                {isSubmitting ? 'Submitting...' : 'Schedule Free Consultation'}
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                No spam, no obligations. We respect your privacy and will only use your information to discuss your project.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;