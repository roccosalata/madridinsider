
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';

const PracticalInformation: React.FC = () => {
  return (
    <Layout>
      <HeroSection
        title="Practical Information"
        subtitle="Essential practical information for your Madrid visit"
      />
      <div className="container mx-auto py-12 px-4">
        <p>Practical information content coming soon.</p>
      </div>
    </Layout>
  );
};

export default PracticalInformation;
