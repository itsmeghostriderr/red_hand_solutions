import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const contactMethods = [
    {
      id: 1,
      icon: "Phone",
      title: "Call Us Directly",
      description: "Speak with our experts immediately",
      primary: "+91 6352412728",
      secondary: "+91 87654 32109",
      action: "Call Now",
      color: "from-green-500 to-green-600",
      available: "24/7 Available"
    },
    {
      id: 2,
      icon: "MessageCircle",
      title: "WhatsApp Chat",
      description: "Quick responses via WhatsApp",
      primary: "+91 6352412728",
      secondary: "Business Account Verified",
      action: "Chat on WhatsApp",
      color: "from-green-400 to-green-500",
      available: "Instant Response"
    },
    {
      id: 3,
      icon: "Mail",
      title: "Email Support",
      description: "Detailed project discussions",
      primary: "redhand.solution@gmail.com",
      secondary: "projects@redhandsolutions.com",
      action: "Send Email",
      color: "from-blue-500 to-blue-600",
      available: "24h Response"
    },
    {
      id: 4,
      icon: "Calendar",
      title: "Schedule Meeting",
      description: "Book a consultation slot",
      primary: "In-person or Video Call",
      secondary: "30-60 minute sessions",
      action: "Book Meeting",
      color: "from-purple-500 to-purple-600",
      available: "Flexible Timing"
    },
    {
      id: 5,
      icon: "MessageSquare",
      title: "Live Chat",
      description: "Real-time technical support",
      primary: "Technical Experts Online",
      secondary: "Mon-Sat: 9 AM - 8 PM",
      action: "Start Chat",
      color: "from-orange-500 to-orange-600",
      available: "Business Hours"
    },
    {
      id: 6,
      icon: "MapPin",
      title: "Visit Our Office",
      description: "Meet us in person",
      primary: "Rajkot, Gujarat",
      secondary: "Free parking available",
      action: "Get Directions",
      color: "from-red-500 to-red-600",
      available: "Mon-Sat: 10 AM - 7 PM"
    }
  ];

  const handleContactAction = (method) => {
    switch (method?.icon) {
      case "Phone":
        window.open(`tel:${method?.primary?.replace(/\s/g, '')}`);
        break;
      case "MessageCircle":
        window.open(`https://wa.me/${method?.primary?.replace(/[^\d]/g, '')}`);
        break;
      case "Mail":
        window.open(`mailto:${method?.primary}`);
        break;
      case "Calendar":
        window.open('https://calendly.com/redhand-solution/30min', '_blank');
        break;
      default:
        console.log(`${method?.title} clicked`);
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Multiple Ways to Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred communication method. We're here to help you succeed with personalized support and expert guidance.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactMethods?.map((method) => (
            <div
              key={method?.id}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-brand-lg transition-brand group"
            >
              {/* Icon & Badge */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${method?.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-brand`}>
                  <Icon name={method?.icon} size={24} color="white" />
                </div>
                <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full">
                  {method?.available}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-primary mb-2">
                {method?.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {method?.description}
              </p>

              {/* Contact Details */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-success" />
                  <span className="text-sm font-medium text-foreground">
                    {method?.primary}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Info" size={16} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {method?.secondary}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <Button
                variant="outline"
                fullWidth
                className="group-hover:bg-primary group-hover:text-primary-foreground transition-brand"
                iconName="ArrowRight"
                iconPosition="right"
                iconSize={16}
                onClick={() => handleContactAction(method)}
              >
                {method?.action}
              </Button>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 rounded-xl p-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center animate-pulse-slow">
              <Icon name="Zap" size={32} color="white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-primary mb-2">
            Need Urgent Support?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            For existing clients with critical issues, our emergency support team is available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="default"
              className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90"
              iconName="Phone"
              iconPosition="left"
              iconSize={16}
              onClick={() => window.open('tel:+917226802978')}
            >
              Emergency: +91 72268 02978
            </Button>
            <Button
              variant="outline"
              iconName="Mail"
              iconPosition="left"
              iconSize={16}
              onClick={() => window.open('mailto:contact.redhandsolution@gmail.com')}
            >
              contact.redhandsolution@gmail.com
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;