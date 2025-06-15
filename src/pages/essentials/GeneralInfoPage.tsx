
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import AboutMadridInfo from '@/components/essentials/AboutMadridInfo';
import CultureEtiquetteInfo from '@/components/essentials/CultureEtiquetteInfo';
import ProfessionalServicesInfo from '@/components/essentials/ProfessionalServicesInfo';
import SafetyInfo from '@/components/essentials/SafetyInfo';
import WeatherInfo from '@/components/essentials/WeatherInfo';
import MessageBoardsInfo from '@/components/essentials/MessageBoardsInfo';

const GeneralInfoPage: React.FC = () => {
  return (
    <Layout>
      <HeroSection
        title="General Information"
        subtitle="Key insights for your visit: from local customs and safety tips to weather and history."
      />
      
      <div className="container mx-auto px-4 py-12 space-y-12">
        <SafetyInfo />
        <CultureEtiquetteInfo />
        <WeatherInfo />
        <AboutMadridInfo />
        <ProfessionalServicesInfo />
        <MessageBoardsInfo />
      </div>
    </Layout>
  );
};

export default GeneralInfoPage;
