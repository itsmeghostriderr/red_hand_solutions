import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import MissionValuesSection from './components/MissionValuesSection';
import TeamSection from './components/TeamSection';
import GujaratFocusSection from './components/GujaratFocusSection';
import CompanyCultureSection from './components/CompanyCultureSection';
import TrustIndicatorsSection from './components/TrustIndicatorsSection';
import GrowthMetricsSection from './components/GrowthMetricsSection';

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>Red Hand Solutions | Gujarat's Leading IT Solutions Provider</title>
        <meta 
          name="description" 
          content="Learn about Red Hand Solutions' journey from a Rajkot startup to Gujarat's trusted IT partner. Discover our mission, values, expert team, and commitment to transforming businesses through innovative technology solutions." 
        />
        <meta name="keywords" content="Red Hand Solutions, About Us, IT Company Gujarat, Rajkot IT Services, Technology Solutions, Digital Transformation, Gujarat Business" />
        <meta property="og:title" content="About Red Hand Solutions - Your Trusted IT Partner in Gujarat" />
        <meta property="og:description" content="From our roots in Rajkot to serving businesses across Gujarat, discover how Red Hand Solutions became the region's leading IT solutions provider with 200+ successful projects." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about-us" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <HeroSection />
        
        {/* Interactive Timeline */}
        <TimelineSection />
        
        {/* Mission & Values */}
        <MissionValuesSection />
        
        {/* Team Showcase */}
        <TeamSection />
        
        {/* Gujarat Focus */}
        <GujaratFocusSection />
        
        {/* Company Culture */}
        <CompanyCultureSection />
        
        {/* Trust Indicators */}
        <TrustIndicatorsSection />
        
        {/* Growth Metrics */}
        <GrowthMetricsSection />
      </div>
    </>
  );
};

export default AboutUs;