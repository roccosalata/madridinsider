typescriptreact
import React from 'react';
import Layout from '@/components/Layout'; // Adjust the import path as necessary

const PracticalInformationPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Practical Information</h1>
        <p className="text-lg mb-12">
          Find essential practical information for navigating Madrid, including useful contacts, services, and resources.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Tourist Offices</h2>
          <p>Content for Tourist Offices will be added from existing files.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Useful Apps</h2>
          <p>Content for Useful Apps will be added from existing files.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Embassies and Consulates</h2>
          <p>Content for Embassies and Consulates will be added from existing files (likely from `EmbassyList.tsx`).</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Emergency Contacts</h2>
          <p>Content for Emergency Contacts will be added from existing files (likely from `EmergencyContactList.tsx`).</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Police Contacts</h2>
          <p>Content for Police Contacts will be added from existing files (likely from `PoliceContactList.tsx`).</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Post and Mail Services</h2>
          <p>Content for Post and Mail Services will be added from existing files (likely from `PostAndMailInfo.tsx`).</p>
        </section>

        {/* Add other relevant sections as identified */}
      </div>
    </Layout>
  );
};

export default PracticalInformationPage;