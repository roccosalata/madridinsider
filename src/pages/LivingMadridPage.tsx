
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import PageNavigatorDropdown from '@/components/PageNavigatorDropdown';
import AccommodationSection from './living/AccommodationSection';
import BankingFinancesSection from './living/BankingFinancesSection';
import CommunityIntegrationSection from './living/CommunityIntegrationSection';
import ConnectivityHomeSection from './living/ConnectivityHomeSection';
import EducationChildcareSection from './living/EducationChildcareSection';
import HealthcareGuideSection from './living/HealthcareGuideSection';
import InternshipsSection from './living/InternshipsSection';
import MarketsSection from './living/MarketsSection';
import PaperworkSection from './living/PaperworkSection';
import PostalServicesSection from './living/PostalServicesSection';
import ReligionsFaithsSection from './living/ReligionsFaithsSection';
import ShoppingServicesSection from './living/ShoppingServicesSection';
import StudentLifeSection from './living/StudentLifeSection';
import TalentAgenciesSection from './living/TalentAgenciesSection';
import WorkingInMadridSection from './living/WorkingInMadridSection';

const LivingMadridPage: React.FC = () => {
  return (
    <Layout>
      <HeroSection
        title="Living in Madrid"
        subtitle="Your guide to making Madrid your home, from settling in to daily life."
      />
      <div className="container mx-auto py-12 px-4">
        <div className="mb-8">
            <PageNavigatorDropdown categoryTitle="Living in Madrid" />
        </div>
        <div className="space-y-16">
          <PaperworkSection />
          <AccommodationSection />
          <BankingFinancesSection />
          <HealthcareGuideSection />
          <ConnectivityHomeSection />
          <WorkingInMadridSection />
          <EducationChildcareSection />
          <ShoppingServicesSection />
          <MarketsSection />
          <PostalServicesSection />
          <ReligionsFaithsSection />
          <StudentLifeSection />
          <CommunityIntegrationSection />
          <InternshipsSection />
          <TalentAgenciesSection />
        </div>
      </div>
    </Layout>
  );
};

export default LivingMadridPage;
