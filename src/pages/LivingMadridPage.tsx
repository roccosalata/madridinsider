import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import PlacesOfWorshipList from '@/components/PlacesOfWorshipList';
import { placesOfWorship } from '@/data/essentialsData';
import { directoryData } from '@/data/directoryData';

const LivingMadridPage: React.FC = () => {
  // Assuming directoryData and essentialsData contain the relevant information
  // You might need to adjust how data is accessed based on your data structure

  const accommodationData = directoryData['living-in-madrid']?.['accommodation']; // Example: Accessing accommodation data
  const paperworkData = directoryData['living-in-madrid']?.['paperwork-formalities']; // Example: Accessing paperwork data
  const workResidencyData = directoryData['living-in-madrid']?.['work-residency']; // Example: Accessing work/residency data
  const talentAgenciesData = directoryData['living-in-madrid']?.['talent-agencies']; // Example: Accessing talent agencies data
  const internshipsData = directoryData['living-in-madrid']?.['internships']; // Example: Accessing internships data
  const bankingFinancesData = directoryData['living-in-madrid']?.['banking-finances']; // Example: Accessing banking data
  const connectivityHomeServicesData = directoryData['living-in-madrid']?.['connectivity-home-services']; // Example: Accessing connectivity data
  const healthcareGuideData = directoryData['living-in-madrid']?.['healthcare-guide']; // Example: Accessing healthcare data
  const educationChildcareData = directoryData['living-in-madrid']?.['education-childcare']; // Example: Accessing education data
  const workingInMadridData = directoryData['living-in-madrid']?.['working-in-madrid']; // Example: Accessing working data
  const studentLifeData = directoryData['living-in-madrid']?.['student-life']; // Example: Accessing student life data
  const communityIntegrationData = directoryData['living-in-madrid']?.['community-integration']; // Example: Accessing community data
  const dailyNecessitiesData = directoryData['living-in-madrid']?.['daily-necessities-services']; // Example: Accessing daily necessities data


  return (
    <Layout>
      <HeroSection
        title="Living in Madrid"
        subtitle="Your guide to making Madrid your home, from settling in to daily life."
      />

      <div className="container mx-auto py-12 px-4">
        {/* Accommodation Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Finding Accommodation</h2>
          {/* Render accommodation data here */}
           {accommodationData ? (
            <div>
              {/* Example rendering - adjust based on actual data structure */}
              <p>{(accommodationData as any).introduction}</p>
              {/* Add more rendering based on accommodationData structure */}
            </div>
          ) : (
            <p>Information about finding accommodation is coming soon.</p>
          )}
        </section>

        {/* Paperwork & Formalities Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Paperwork & Formalities (NIE, TIE, etc.)</h2>
           {paperworkData ? (
            <div>
              {/* Example rendering - adjust based on actual data structure */}
              <p>{(paperworkData as any).introduction}</p>
              {/* Add more rendering based on paperworkData structure */}
            </div>
          ) : (
            <p>Information about paperwork and formalities is coming soon.</p>
          )}
        </section>

        {/* Work & Residency Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Work & Residency</h2>
          <p className="text-sm text-red-600 mb-4">
            Disclaimer: Visa and residency information can change frequently. Always consult official government sources for the most up-to-date requirements.
          </p>
           {workResidencyData ? (
            <div>
              {/* Example rendering - adjust based on actual data structure */}
              <p>{(workResidencyData as any).introduction}</p>
               {/* Add sections for USA and UK citizens if data exists */}
              {(workResidencyData as any).usaCitizens && (
                <div className="mt-4">
                   <h3 className="text-xl font-semibold mb-2">Information for USA Citizens</h3>
                   <p>{(workResidencyData as any).usaCitizens.details}</p>
                </div>
              )}
               {(workResidencyData as any).ukCitizens && (
                <div className="mt-4">
                   <h3 className="text-xl font-semibold mb-2">Information for UK Citizens</h3>
                   <p>{(workResidencyData as any).ukCitizens.details}</p>
                </div>
              )}
               {/* Add more rendering based on workResidencyData structure */}
            </div>
          ) : (
            <p>Information about work and residency is coming soon.</p>
          )}
        </section>

         {/* Talent Agencies Section */}
         <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Talent Agencies</h2>
           {talentAgenciesData ? (
            <div>
               {/* Example rendering - adjust based on actual data structure */}
               <p>{(talentAgenciesData as any).introduction}</p>
              {/* Add more rendering based on talentAgenciesData structure */}
            </div>
          ) : (
            <p>Information about talent agencies is coming soon.</p>
          )}
        </section>

         {/* Internships Section */}
         <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Internships</h2>
           <p className="text-sm text-red-600 mb-4">
            Disclaimer: Internship regulations and availability can change. Always consult official sources and relevant organizations for the latest information.
          </p>
           {internshipsData ? (
            <div>
              {/* Example rendering - adjust based on actual data structure */}
               <p>{(internshipsData as any).introduction}</p>
               {/* Add more rendering based on internshipsData structure */}
            </div>
          ) : (
            <p>Information about internships is coming soon.</p>
          )}
        </section>

         {/* Banking & Finances Section */}
         <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Banking & Finances</h2>
           {bankingFinancesData ? (
            <div>
               {/* Example rendering - adjust based on actual data structure */}
               <p>{(bankingFinancesData as any).introduction}</p>
               {/* Add more rendering based on bankingFinancesData structure */}
            </div>
          ) : (
            <p>Information about banking and finances is coming soon.</p>
          )}
        </section>

        {/* Connectivity & Home Services Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Connectivity & Home Services</h2>
           {connectivityHomeServicesData ? (
            <div>
              {/* Example rendering - adjust based on actual data structure */}
               <p>{(connectivityHomeServicesData as any).introduction}</p>
              {/* Add more rendering based on connectivityHomeServicesData structure */}
            </div>
          ) : (
            <p>Information about connectivity and home services is coming soon.</p>
          )}
        </section>

        {/* Healthcare Guide Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Healthcare Guide</h2>
           {healthcareGuideData ? (
            <div>
              {/* Example rendering - adjust based on actual data structure */}
               <p>{(healthcareGuideData as any).introduction}</p>
              {/* Add more rendering based on healthcareGuideData structure */}
            </div>
          ) : (
            <p>Information about healthcare is coming soon.</p>
          )}
        </section>

        {/* Education & Childcare Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Education & Childcare</h2>
           {educationChildcareData ? (
            <div>
              {/* Example rendering - adjust based on actual data structure */}
               <p>{(educationChildcareData as any).introduction}</p>
              {/* Add more rendering based on educationChildcareData structure */}
            </div>
          ) : (
            <p>Information about education and childcare is coming soon.</p>
          )}
        </section>

        {/* Working in Madrid Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Working in Madrid</h2>
           {workingInMadridData ? (
            <div>
              {/* Example rendering - adjust based on actual data structure */}
               <p>{(workingInMadridData as any).introduction}</p>
              {/* Add more rendering based on workingInMadridData structure */}
            </div>
          ) : (
            <p>Information about working in Madrid is coming soon.</p>
          )}
        </section>

        {/* Student Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Student Life</h2>
           {studentLifeData ? (
            <div>
              {/* Example rendering - adjust based on actual data structure */}
               <p>{(studentLifeData as any).introduction}</p>
              {/* Add more rendering based on studentLifeData structure */}
            </div>
          ) : (
            <p>Information about student life is coming soon.</p>
          )}
        </section>

        {/* Community & Integration Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Community & Integration</h2>
           {communityIntegrationData ? (
            <div>
              {/* Example rendering - adjust based on actual data structure */}
               <p>{(communityIntegrationData as any).introduction}</p>
              {/* Add more rendering based on communityIntegrationData structure */}
            </div>
          ) : (
            <p>Information about community and integration is coming soon.</p>
          )}
        </section>

        {/* Religions & Faiths Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Religions & Faiths</h2>
          {placesOfWorship.length > 0 ? (
            <PlacesOfWorshipList places={placesOfWorship} />
          ) : (
            <p>Information about religions and faiths is coming soon.</p>
          )}
        </section>

         {/* Daily Necessities & Services Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Daily Necessities & Services</h2>
           {dailyNecessitiesData ? (
            <div>
              {/* Example rendering - adjust based on actual data structure */}
               <p>{(dailyNecessitiesData as any).introduction}</p>
              {/* Add more rendering based on dailyNecessitiesData structure */}
            </div>
          ) : (
            <p>Information about daily necessities and services is coming soon.</p>
          )}
        </section>

      </div>
    </Layout>
  );
};

export default LivingMadridPage;
