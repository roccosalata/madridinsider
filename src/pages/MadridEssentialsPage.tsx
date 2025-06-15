
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import AboutMadridInfo from '@/components/essentials/AboutMadridInfo';
import CultureEtiquetteInfo from '@/components/essentials/CultureEtiquetteInfo';
import EssentialServices from '@/components/essentials/EssentialServices';
import ProfessionalServicesInfo from '@/components/essentials/ProfessionalServicesInfo';
import SafetyInfo from '@/components/essentials/SafetyInfo';
import WeatherInfo from '@/components/essentials/WeatherInfo';

const MadridEssentialsPage: React.FC = () => {
  return (
    <Layout>
      <HeroSection
        title="Madrid Essentials"
        subtitle="Your starting point: What's new, current events, key maps, city layout, and first-timer tips for Madrid."
      />
      
      <div className="container mx-auto px-4 py-8 space-y-8">
        <EssentialServices />
        <SafetyInfo />
        <CultureEtiquetteInfo />
        <WeatherInfo />
        <AboutMadridInfo />
        <ProfessionalServicesInfo />
      </div>
    </Layout>
  );
};

export default MadridEssentialsPage;
