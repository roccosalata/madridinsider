
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import SalsaClubsSection from '@/components/nightlife/SalsaClubsSection';
import NightClubsSection from '@/components/nightlife/NightClubsSection';
import BarsAndCafesSection from '@/components/nightlife/BarsAndCafesSection';
import TerracesSection from '@/components/nightlife/TerracesSection';

const Nightlife = () => {
  return (
    <Layout>
      <HeroSection
        title="Nightlife & Bars"
        subtitle="Discover Madrid's vibrant nightlife, from energetic salsa clubs to trendy bars and super-clubs."
      />
      
      <div className="container mx-auto py-12 px-4 space-y-16">
        <SalsaClubsSection />
        <NightClubsSection />
        <BarsAndCafesSection />
        <TerracesSection />
      </div>
    </Layout>
  );
};

export default Nightlife;
