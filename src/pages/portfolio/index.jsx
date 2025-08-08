import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectCard from './components/ProjectCard';
import FilterBar from './components/FilterBar';
import ProjectModal from './components/ProjectModal';
import StatsSection from './components/StatsSection';
import IndustryShowcase from './components/IndustryShowcase';

const Portfolio = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedTechnology, setSelectedTechnology] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Mock Projects Data
  const projects = [
    {
      id: 1,
      title: "Smart Textile Export Platform",
      description: "Comprehensive e-commerce platform connecting Rajkot textile manufacturers with global buyers, featuring real-time inventory, automated quotations, and multi-currency support.",
      fullDescription: `A revolutionary B2B e-commerce platform designed specifically for Gujarat's textile export industry. The platform bridges the gap between local manufacturers and international buyers, providing a seamless digital marketplace with advanced features tailored to textile business needs.

The solution includes sophisticated inventory management, automated quotation systems, multi-language support, and integrated logistics tracking. Built with scalability in mind, the platform handles thousands of product listings and concurrent users while maintaining optimal performance.`,
      client: "Gujarat Textile Exporters Association",
      industry: "textile",
      type: "e-commerce",
      image: "https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Stripe", "Socket.io"],
      timeline: "8 months",
      teamSize: 6,
      status: "completed",
      hasLiveDemo: true,
      metrics: [
        { label: "Revenue Increase", value: 250, type: "percentage" },
        { label: "Global Reach", value: 45, type: "countries" },
        { label: "Order Processing", value: 75, type: "percentage" },
        { label: "Cost Reduction", value: 40, type: "percentage" }
      ],
      challenge: `The textile export industry in Rajkot faced significant challenges in reaching global markets. Traditional methods of business development were time-consuming and limited in scope. Manufacturers struggled with manual quotation processes, inventory tracking, and communication barriers with international buyers.`,
      solution: `We developed a comprehensive B2B platform that automates the entire export process. The solution includes AI-powered product matching, automated quotation generation, real-time inventory synchronization, and integrated communication tools with multi-language support.`,
      implementationSteps: [
        "Market research and requirement analysis with 50+ textile exporters",
        "Platform architecture design with scalability and security focus",
        "Development of core modules: inventory, quotations, buyer matching",
        "Integration with payment gateways and logistics partners",
        "Comprehensive testing with real export scenarios",
        "Phased rollout with training and ongoing support"
      ],
      testimonial: {
        content: "This platform transformed our export business completely. We\'ve connected with buyers from 45 countries and increased our revenue by 250%. The automated quotation system alone saves us 20 hours per week.",
        author: "Rajesh Patel",
        position: "Managing Director, Patel Textiles"
      }
    },
    {
      id: 2,
      title: "Chemical Inventory Management System",
      description: "Advanced inventory management system for chemical manufacturing companies with safety compliance, batch tracking, and automated reorder functionality.",
      fullDescription: `A sophisticated inventory management system specifically designed for the chemical manufacturing industry. The system addresses the unique challenges of chemical inventory management including safety compliance, batch tracking, expiration monitoring, and regulatory reporting.

Built with safety as the primary concern, the system includes comprehensive safety data sheet management, automated compliance reporting, and real-time monitoring of hazardous materials. The solution integrates with existing ERP systems and provides detailed analytics for inventory optimization.`,
      client: "Rajkot Chemical Industries Ltd",
      industry: "chemical",
      type: "web-application",
      image: "https://images.pixabay.com/photo/2017/09/07/08/54/money-2724241_1280.jpg",
      technologies: ["Python", "Django", "PostgreSQL", "Redis", "Docker"],
      timeline: "6 months",
      teamSize: 4,
      status: "completed",
      hasLiveDemo: false,
      metrics: [
        { label: "Inventory Accuracy", value: 99.5, type: "percentage" },
        { label: "Compliance Score", value: 100, type: "percentage" },
        { label: "Cost Savings", value: 15, type: "currency" },
        { label: "Processing Time", value: 60, type: "percentage" }
      ],
      challenge: `Chemical manufacturing requires strict inventory control due to safety regulations and material compatibility issues. The client was managing inventory manually, leading to compliance risks, overstocking, and potential safety hazards.`,
      solution: `We developed a comprehensive inventory management system with built-in safety protocols, automated compliance checking, and intelligent reorder algorithms. The system includes barcode scanning, batch tracking, and integration with safety management systems.`,
      implementationSteps: [
        "Safety requirement analysis and regulatory compliance study",
        "Database design for chemical properties and compatibility matrix",
        "Development of core inventory modules with safety checks",
        "Integration with existing ERP and safety management systems",
        "Comprehensive testing with actual chemical inventory data",
        "Staff training and system deployment with safety protocols"
      ],
      testimonial: {
        content: "The system has revolutionized our inventory management. We\'ve achieved 100% compliance with safety regulations and reduced inventory costs by ₹15 lakhs annually. The automated alerts have prevented several potential safety incidents.",
        author: "Dr. Amit Shah",
        position: "Plant Manager, Rajkot Chemical Industries"
      }
    },
    {
      id: 3,
      title: "Local Services Mobile App",
      description: "On-demand service booking app connecting Rajkot residents with local service providers including plumbers, electricians, cleaners, and home maintenance.",
      fullDescription: `A comprehensive mobile application that revolutionizes how residents of Rajkot access local services. The app connects customers with verified service providers across multiple categories, ensuring quality service delivery with transparent pricing and real-time tracking.

The platform includes advanced features like service provider verification, real-time GPS tracking, in-app payments, rating systems, and customer support. Built with a focus on the local market, the app supports multiple languages and local payment methods.`,
      client: "Rajkot Municipal Corporation",
      industry: "startup",
      type: "mobile-app",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
      technologies: ["Flutter", "Firebase", "Node.js", "MongoDB", "Razorpay"],
      timeline: "10 months",
      teamSize: 5,
      status: "ongoing",
      hasLiveDemo: true,
      metrics: [
        { label: "Active Users", value: 25000, type: "number" },
        { label: "Service Providers", value: 1200, type: "number" },
        { label: "Bookings/Month", value: 8500, type: "number" },
        { label: "User Satisfaction", value: 4.7, type: "rating" }
      ],
      challenge: `Residents of Rajkot struggled to find reliable local service providers, often relying on word-of-mouth recommendations. Service providers lacked a platform to reach customers efficiently, and there was no standardized pricing or quality assurance.`,
      solution: `We created a comprehensive mobile app that connects customers with verified service providers. The solution includes real-time booking, GPS tracking, secure payments, and a robust rating system to ensure quality service delivery.`,
      implementationSteps: [
        "Market research with 500+ residents and 200+ service providers",
        "App design with focus on local user preferences and behaviors",
        "Development of customer and service provider mobile applications",
        "Implementation of verification system and quality controls",
        "Integration with local payment systems and logistics",
        "Beta testing with 100 users and iterative improvements"
      ],
      testimonial: {
        content: "This app has made finding reliable service providers so easy. I've used it for plumbing, electrical work, and house cleaning. The service providers are verified and the pricing is transparent. Highly recommended!",author: "Priya Sharma",position: "Resident, Rajkot"
      }
    },
    {
      id: 4,
      title: "Healthcare Management Portal",description: "Comprehensive patient management system for multi-specialty hospitals with appointment scheduling, electronic health records, and telemedicine capabilities.",
      fullDescription: `A complete healthcare management solution designed for multi-specialty hospitals and clinics. The system streamlines patient care through integrated modules for appointment management, electronic health records, billing, pharmacy management, and telemedicine services.

The platform ensures HIPAA compliance and includes advanced features like AI-powered diagnosis assistance, automated appointment reminders, and comprehensive reporting for hospital administration. The system supports multiple user roles and provides seamless integration with existing hospital infrastructure.`,
      client: "Rajkot Medical Center",industry: "healthcare",type: "web-application",image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
      technologies: ["React", "Node.js", "PostgreSQL", "Socket.io", "AWS", "Twilio"],
      timeline: "12 months",teamSize: 8,status: "completed",
      hasLiveDemo: false,
      metrics: [
        { label: "Patient Records", value: 50000, type: "number" },
        { label: "Appointment Efficiency", value: 85, type: "percentage" },
        { label: "Paper Reduction", value: 90, type: "percentage" },
        { label: "Patient Satisfaction", value: 4.8, type: "rating" }
      ],
      challenge: `The hospital was managing patient records manually, leading to inefficiencies, data loss risks, and poor patient experience. Appointment scheduling was chaotic, and there was no integrated system for different departments.`,
      solution: `We developed a comprehensive healthcare management system that digitizes all patient interactions. The solution includes electronic health records, automated appointment scheduling, telemedicine capabilities, and integrated billing systems.`,
      implementationSteps: [
        "Healthcare workflow analysis and compliance requirement study","System architecture design with security and scalability focus","Development of core modules: patient records, appointments, billing","Integration with existing medical equipment and systems","Staff training and phased deployment across departments","Ongoing support and system optimization based on usage patterns"
      ],
      testimonial: {
        content: "The system has transformed our hospital operations. Patient wait times have reduced by 40%, and our staff can now focus more on patient care rather than paperwork. The telemedicine feature has been particularly valuable during the pandemic.",author: "Dr. Kavita Patel",position: "Chief Medical Officer, Rajkot Medical Center"
      }
    },
    {
      id: 5,
      title: "Educational Learning Platform",description: "Interactive online learning platform for engineering colleges with virtual classrooms, assignment management, and student progress tracking.",
      fullDescription: `A comprehensive e-learning platform designed specifically for engineering education. The system provides virtual classrooms, interactive content delivery, assignment management, and detailed analytics for student progress tracking.

The platform includes features like live video lectures, interactive whiteboards, collaborative project spaces, and automated grading systems. Built to handle thousands of concurrent users, the system ensures seamless learning experiences for both students and faculty.`,
      client: "Gujarat Technological University",industry: "education",type: "web-application",image: "https://images.pixabay.com/photo/2016/11/19/14/00/code-1839406_1280.jpg",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC", "AWS", "Redis"],
      timeline: "9 months",teamSize: 7,status: "completed",
      hasLiveDemo: true,
      metrics: [
        { label: "Active Students", value: 15000, type: "number" },
        { label: "Course Completion", value: 92, type: "percentage" },
        { label: "Faculty Adoption", value: 95, type: "percentage" },
        { label: "Learning Efficiency", value: 65, type: "percentage" }
      ],
      challenge: `Traditional classroom-based engineering education was limiting student access to quality resources and expert faculty. The university needed a scalable solution to deliver consistent education quality across multiple campuses.`,
      solution: `We created an interactive learning platform with virtual classrooms, multimedia content delivery, and comprehensive student tracking. The system includes collaboration tools, automated assessments, and detailed analytics for continuous improvement.`,
      implementationSteps: [
        "Educational requirement analysis with faculty and students","Platform design focusing on user experience and scalability","Development of core learning modules and assessment tools","Integration with university\'s existing student information system","Pilot testing with select courses and iterative improvements","Full deployment with comprehensive training for faculty and students"
      ],
      testimonial: {
        content: "This platform has revolutionized how we deliver engineering education. Students are more engaged, and we can track their progress in real-time. The virtual labs feature has been particularly impressive for practical learning.",author: "Prof. Rajesh Kumar",position: "Dean of Engineering, GTU"
      }
    },
    {
      id: 6,
      title: "Manufacturing ERP System",description: "Complete enterprise resource planning solution for manufacturing companies with production planning, quality control, and supply chain management.",
      fullDescription: `A comprehensive ERP solution tailored for manufacturing industries in Gujarat. The system integrates all business processes including production planning, inventory management, quality control, financial management, and supply chain optimization.

The platform provides real-time visibility into manufacturing operations, automated workflow management, and detailed reporting for informed decision-making. Built with industry-specific requirements, the system handles complex manufacturing scenarios and regulatory compliance.`,
      client: "Rajkot Engineering Works",industry: "manufacturing",type: "web-application",image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      technologies: ["Java", "Spring Boot", "Oracle", "Angular", "Docker"],
      timeline: "14 months",teamSize: 10,status: "completed",
      hasLiveDemo: false,
      metrics: [
        { label: "Production Efficiency", value: 35, type: "percentage" },
        { label: "Inventory Optimization", value: 25, type: "percentage" },
        { label: "Quality Improvement", value: 40, type: "percentage" },
        { label: "Cost Reduction", value: 20, type: "percentage" }
      ],
      challenge: `The manufacturing company was using disparate systems for different operations, leading to data silos, inefficient processes, and lack of real-time visibility into operations. Manual processes were causing delays and quality issues.`,
      solution: `We implemented a comprehensive ERP system that integrates all manufacturing processes. The solution provides real-time production monitoring, automated quality checks, intelligent inventory management, and comprehensive financial reporting.`,
      implementationSteps: [
        "Comprehensive business process analysis and requirement gathering","ERP system design with modular architecture for scalability","Development of manufacturing-specific modules and workflows","Data migration from legacy systems with minimal downtime","Extensive testing with real production scenarios","Phased deployment with comprehensive training and support"
      ],
      testimonial: {
        content: "The ERP system has transformed our manufacturing operations. We\'ve achieved 35% improvement in production efficiency and 25% reduction in inventory costs. The real-time visibility has enabled better decision-making at all levels.",author: "Suresh Patel",position: "Operations Director, Rajkot Engineering Works"
      }
    }
  ];

  // Filter projects based on search and filters
  useEffect(() => {
    let filtered = projects;

    // Search filter
    if (searchTerm) {
      filtered = filtered?.filter(project =>
        project?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        project?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        project?.client?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        project?.technologies?.some(tech => tech?.toLowerCase()?.includes(searchTerm?.toLowerCase()))
      );
    }

    // Industry filter
    if (selectedIndustry !== 'all') {
      filtered = filtered?.filter(project => project?.industry === selectedIndustry);
    }

    // Technology filter
    if (selectedTechnology !== 'all') {
      filtered = filtered?.filter(project =>
        project?.technologies?.some(tech => tech?.toLowerCase()?.includes(selectedTechnology?.toLowerCase()))
      );
    }

    // Type filter
    if (selectedType !== 'all') {
      filtered = filtered?.filter(project => project?.type === selectedType);
    }

    setFilteredProjects(filtered);
  }, [searchTerm, selectedIndustry, selectedTechnology, selectedType]);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleRequestSimilar = (project) => {
    // In a real app, this would open a contact form or redirect to contact page
    alert(`Request submitted for a project similar to "${project?.title}". Our team will contact you within 24 hours.`);
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedIndustry('all');
    setSelectedTechnology('all');
    setSelectedType('all');
  };

  const handleIndustryFilter = (industry) => {
    setSelectedIndustry(industry);
    // Scroll to projects section
    document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Portfolio - Red Hand Solutions | Digital Transformation Success Stories</title>
        <meta name="description" content="Explore our portfolio of 150+ successful digital transformation projects across manufacturing, healthcare, education, and startups in Gujarat. See how we've helped businesses achieve 300% average ROI." />
        <meta name="keywords" content="portfolio, case studies, digital transformation, web development, mobile apps, Gujarat, Rajkot, success stories" />
      </Helmet>
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-secondary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Award" size={16} />
              <span>150+ Projects Delivered</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Success Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover how we've transformed businesses across Gujarat with cutting-edge digital solutions. 
              From textile exporters to healthcare providers, see the measurable impact of our work.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                variant="default"
                size="lg"
                iconName="Play"
                iconPosition="left"
                iconSize={20}
                className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90"
              >
                Watch Success Stories
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                iconSize={20}
              >
                Download Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsSection />
        </div>
      </section>
      {/* Industry Showcase */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <IndustryShowcase onIndustryFilter={handleIndustryFilter} />
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects-section" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive portfolio of digital transformation projects. 
              Filter by industry, technology, or project type to find relevant examples.
            </p>
          </div>

          {/* Filter Bar */}
          <FilterBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedIndustry={selectedIndustry}
            onIndustryChange={setSelectedIndustry}
            selectedTechnology={selectedTechnology}
            onTechnologyChange={setSelectedTechnology}
            selectedType={selectedType}
            onTypeChange={setSelectedType}
            onClearFilters={handleClearFilters}
            totalProjects={projects?.length}
            filteredCount={filteredProjects?.length}
          />

          {/* Projects Grid */}
          {filteredProjects?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects?.map((project) => (
                <ProjectCard
                  key={project?.id}
                  project={project}
                  onViewDetails={handleViewDetails}
                  onRequestSimilar={handleRequestSimilar}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Search" size={32} className="text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No Projects Found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search criteria or clearing the filters.
              </p>
              <Button
                variant="outline"
                onClick={handleClearFilters}
                iconName="RefreshCw"
                iconPosition="left"
                iconSize={16}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join 120+ businesses that have transformed their operations with our digital solutions. 
            Let's discuss how we can help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              variant="default"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              iconSize={20}
              className="bg-white text-secondary hover:bg-white/90"
              onClick={() => window.open('https://calendly.com/redhand-solution/30min', '_blank')}
            >
              Schedule Free Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="MessageSquare"
              iconPosition="left"
              iconSize={20}
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.open('https://calendly.com/redhand-solution/30min', '_blank')}
            >
              Discuss Your Project
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="/assets/images/RHS Logo (Edited).png"
                  alt="Red Hand Solutions Logo"
                  className="w-12 h-12 object-contain rounded-lg shadow-brand bg-white"
                  style={{ maxWidth: '48px', maxHeight: '48px' }}
                />
                <div>
                  <h3 className="text-xl font-bold">Red Hand Solutions</h3>
                  <p className="text-sm opacity-80">Digital Innovation</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 mb-6 max-w-md">
                Transforming businesses across Gujarat with cutting-edge digital solutions. 
                Your success is our innovation.
              </p>
              <div className="flex space-x-4">
                <Icon name="Facebook" size={20} className="hover:text-secondary cursor-pointer transition-brand" />
                <Icon name="Twitter" size={20} className="hover:text-secondary cursor-pointer transition-brand" />
                <Icon name="Linkedin" size={20} className="hover:text-secondary cursor-pointer transition-brand" />
                <Icon name="Instagram" size={20} className="hover:text-secondary cursor-pointer transition-brand" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/about-us" className="hover:text-secondary transition-brand">About Us</a></li>
                <li><a href="/services-overview" className="hover:text-secondary transition-brand">Services</a></li>
                <li><a href="/portfolio" className="hover:text-secondary transition-brand">Portfolio</a></li>
                <li><a href="/contact-consultation" className="hover:text-secondary transition-brand">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Rajkot, Gujarat, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+91 6352412728</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>redhand.solution@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
            <p>&copy; {new Date()?.getFullYear()} Red Hand Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onRequestSimilar={handleRequestSimilar}
      />
    </div>
  );
};

export default Portfolio;