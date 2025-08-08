import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import InteractiveDemoSection from './components/InteractiveDemoSection';
import DevelopmentProcessSection from './components/DevelopmentProcessSection';
import TechnologyStackSection from './components/TechnologyStackSection';
import IndustrySolutionsSection from './components/IndustrySolutionsSection';
import AppStoreSuccessSection from './components/AppStoreSuccessSection';
import ConsultationProcessSection from './components/ConsultationProcessSection';
import MaintenancePackagesSection from './components/MaintenancePackagesSection';

const MobileAppDevelopment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <InteractiveDemoSection />
        <DevelopmentProcessSection />
        <TechnologyStackSection />
        <IndustrySolutionsSection />
        <AppStoreSuccessSection />
        <ConsultationProcessSection />
        <MaintenancePackagesSection />
      </main>
    </div>
  );
};

export default MobileAppDevelopment;