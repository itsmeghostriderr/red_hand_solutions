import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OfficeLocation = () => {
  const officeDetails = {
    address: "Red Hand Solutions Pvt. Ltd.\nTech Hub, 3rd Floor, Kalawad Road\nRajkot, Gujarat 360005, India",
    phone: "+91 6352412728",
    email: "redhand.solution@gmail.com",
    coordinates: "22.3039,70.8022", // Rajkot coordinates
    businessHours: [
      { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
      { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
      { day: "Sunday", hours: "Closed" }
    ],
    landmarks: [
      "Near Rajkot Railway Station (2.5 km)",
      "Opposite SBI Main Branch",
      "Behind McDonald\'s Kalawad Road",
      "Free parking available"
    ]
  };

  const handleGetDirections = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${officeDetails?.coordinates}`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleCallOffice = () => {
    window.open(`tel:${officeDetails?.phone?.replace(/\s/g, '')}`);
  };

  const handleEmailOffice = () => {
    window.open(`mailto:${officeDetails?.email}`);
  };

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of Rajkot, our modern office is equipped with the latest technology and a welcoming environment for client meetings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Office Information */}
            <div className="space-y-6">
              {/* Address Card */}
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                  <Icon name="MapPin" size={20} className="mr-2 text-secondary" />
                  Office Address
                </h3>
                <div className="space-y-4">
                  <div className="whitespace-pre-line text-foreground leading-relaxed">
                    {officeDetails?.address}
                  </div>
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                    <Button
                      variant="default"
                      className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90"
                      iconName="Navigation"
                      iconPosition="left"
                      iconSize={16}
                      onClick={handleGetDirections}
                    >
                      Get Directions
                    </Button>
                    <Button
                      variant="outline"
                      iconName="Copy"
                      iconPosition="left"
                      iconSize={16}
                      onClick={() => navigator.clipboard?.writeText(officeDetails?.address)}
                    >
                      Copy Address
                    </Button>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                  <Icon name="Phone" size={20} className="mr-2 text-secondary" />
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Icon name="Phone" size={16} className="text-muted-foreground" />
                      <span className="text-foreground">{officeDetails?.phone}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="Phone"
                      iconPosition="left"
                      iconSize={14}
                      onClick={handleCallOffice}
                    >
                      Call
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Icon name="Mail" size={16} className="text-muted-foreground" />
                      <span className="text-foreground">{officeDetails?.email}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="Mail"
                      iconPosition="left"
                      iconSize={14}
                      onClick={handleEmailOffice}
                    >
                      Email
                    </Button>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                  <Icon name="Clock" size={20} className="mr-2 text-secondary" />
                  Business Hours
                </h3>
                <div className="space-y-3">
                  {officeDetails?.businessHours?.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{schedule?.day}</span>
                      <span className="text-muted-foreground">{schedule?.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-success/10 border border-success/20 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-success" />
                    <span className="text-success text-sm font-medium">
                      Currently Open - We're available to help!
                    </span>
                  </div>
                </div>
              </div>

              {/* Landmarks */}
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                  <Icon name="MapPin" size={20} className="mr-2 text-secondary" />
                  Nearby Landmarks
                </h3>
                <div className="space-y-3">
                  {officeDetails?.landmarks?.map((landmark, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Icon name="Navigation2" size={14} className="text-accent" />
                      <span className="text-foreground text-sm">{landmark}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-6">
              {/* Interactive Map */}
              <div className="bg-muted/30 border border-border rounded-xl overflow-hidden">
                <div className="h-96 relative">
                  <iframe
                    width="100%"
                    height="100%"
                    loading="lazy"
                    title="Red Hand Solutions Office Location"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${officeDetails?.coordinates}&z=15&output=embed`}
                    className="border-0"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-brand">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-secondary rounded-full animate-pulse-slow"></div>
                      <span className="text-sm font-medium text-primary">Red Hand Solutions</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Features */}
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                  <Icon name="Building" size={20} className="mr-2 text-secondary" />
                  Office Facilities
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Wifi" size={16} className="text-accent" />
                    <span className="text-sm text-foreground">High-Speed WiFi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Car" size={16} className="text-accent" />
                    <span className="text-sm text-foreground">Free Parking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Coffee" size={16} className="text-accent" />
                    <span className="text-sm text-foreground">Refreshments</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Monitor" size={16} className="text-accent" />
                    <span className="text-sm text-foreground">Presentation Setup</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Shield" size={16} className="text-accent" />
                    <span className="text-sm text-foreground">Secure Environment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" size={16} className="text-accent" />
                    <span className="text-sm text-foreground">Meeting Rooms</span>
                  </div>
                </div>
              </div>

              {/* Visit CTA */}
              <div className="bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Calendar" size={32} color="white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Schedule an Office Visit
                </h3>
                <p className="text-muted-foreground mb-6">
                  Experience our workspace and meet our team in person. We'd love to show you around and discuss your project over coffee.
                </p>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                  <Button
                    variant="default"
                    className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90"
                    iconName="Calendar"
                    iconPosition="left"
                    iconSize={16}
                  >
                    Book Office Visit
                  </Button>
                  <Button
                    variant="outline"
                    iconName="Video"
                    iconPosition="left"
                    iconSize={16}
                  >
                    Virtual Tour
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocation;