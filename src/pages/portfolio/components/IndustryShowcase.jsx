import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const IndustryShowcase = ({ onIndustryFilter }) => {
  const industries = [
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      icon: 'Factory',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
      projectCount: 25,
      description: 'ERP systems, inventory management, and production optimization solutions',
      featured: 'Smart Factory Management System for Rajkot Steel Industries'
    },
    {
      id: 'retail',
      name: 'Retail & E-commerce',
      icon: 'ShoppingCart',
      image: 'https://images.pixabay.com/photo/2017/12/26/09/15/woman-3040029_1280.jpg',
      projectCount: 32,
      description: 'Online stores, POS systems, and customer management platforms',
      featured: 'Multi-vendor E-commerce Platform for Gujarat Textile Exporters'
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      icon: 'Heart',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56',
      projectCount: 18,
      description: 'Patient management, telemedicine, and healthcare analytics',
      featured: 'Digital Health Records System for Rajkot Medical Center'
    },
    {
      id: 'education',
      name: 'Education',
      icon: 'GraduationCap',
      image: 'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg',
      projectCount: 22,
      description: 'Learning management systems, student portals, and online education',
      featured: 'Virtual Learning Platform for Gujarat Engineering Colleges'
    },
    {
      id: 'finance',
      name: 'Finance',
      icon: 'TrendingUp',
      image: 'https://images.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg',
      projectCount: 15,
      description: 'Banking solutions, fintech apps, and financial analytics',
      featured: 'Digital Banking Platform for Regional Cooperative Bank'
    },
    {
      id: 'startup',
      name: 'Startups',
      icon: 'Rocket',
      image: 'https://images.unsplash.com/photo-1553484771-371a605b060b',
      projectCount: 38,
      description: 'MVP development, scalable platforms, and growth solutions',
      featured: 'Food Delivery App for Local Rajkot Restaurants'
    }
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Industries We Serve
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From traditional manufacturing to cutting-edge startups, we've delivered 
          digital solutions across diverse industries in Gujarat and beyond.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries?.map((industry) => (
          <div
            key={industry?.id}
            onClick={() => onIndustryFilter(industry?.id)}
            className="group cursor-pointer bg-card border border-border rounded-xl overflow-hidden hover:shadow-brand-lg transition-brand"
          >
            {/* Industry Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={industry?.image}
                alt={industry?.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-brand"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Industry Icon */}
              <div className="absolute top-4 left-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Icon name={industry?.icon} size={24} color="white" />
                </div>
              </div>

              {/* Project Count */}
              <div className="absolute top-4 right-4">
                <div className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
                  {industry?.projectCount} Projects
                </div>
              </div>

              {/* Industry Name */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white mb-2">
                  {industry?.name}
                </h3>
                <p className="text-white/80 text-sm">
                  {industry?.description}
                </p>
              </div>
            </div>

            {/* Industry Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-2">Featured Project</h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {industry?.featured}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  View all projects
                </span>
                <Icon 
                  name="ArrowRight" 
                  size={16} 
                  className="text-secondary group-hover:translate-x-1 transition-brand" 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryShowcase;