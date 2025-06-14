
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import AccommodationSection from './living/AccommodationSection';
import PaperworkSection from './living/PaperworkSection';
import ShoppingServicesSection from './living/ShoppingServicesSection';
import WorkResidencySection from './living/WorkResidencySection';
import TalentAgenciesSection from './living/TalentAgenciesSection';
import InternshipsSection from './living/InternshipsSection';
import BankingFinancesSection from './living/BankingFinancesSection';
import ConnectivityHomeSection from './living/ConnectivityHomeSection';
import HealthcareGuideSection from './living/HealthcareGuideSection';
import EducationChildcareSection from './living/EducationChildcareSection';
import WorkingInMadridSection from './living/WorkingInMadridSection';
import StudentLifeSection from './living/StudentLifeSection';
import CommunityIntegrationSection from './living/CommunityIntegrationSection';
import ReligionsFaithsSection from './living/ReligionsFaithsSection';
import DailyNecessitiesSection from './living/DailyNecessitiesSection';

const LivingMadridPage: React.FC = () => {
  return (
    <Layout>
      <HeroSection
        title="Living in Madrid"
        subtitle="Your guide to making Madrid your home, from settling in to daily life."
      />
      <div className="container mx-auto py-12 px-4">
        <AccommodationSection />
        <PaperworkSection />
        <ShoppingServicesSection />
        <WorkResidencySection />
        <TalentAgenciesSection />
        <InternshipsSection />
        <BankingFinancesSection />
        <ConnectivityHomeSection />
        <HealthcareGuideSection />
        <EducationChildcareSection />
        <WorkingInMadridSection />
        <StudentLifeSection />
        <CommunityIntegrationSection />
        <ReligionsFaithsSection />
        <DailyNecessitiesSection />
      </div>
    </Layout>
  );
};

export default LivingMadridPage;
