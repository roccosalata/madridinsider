import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import PlacesOfWorshipList from '@/components/PlacesOfWorshipList';
import { essentialsData } from '@/data/essentialsData';
import { directoryData } from '@/data/directoryData';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const LivingMadridPage: React.FC = () => {
  const religionsData = essentialsData.religions || [];
  const accommodationData = directoryData['living-in-madrid']?.['accommodation'];
  const paperworkData = directoryData['living-in-madrid']?.['paperwork-formalities'];
  const workResidencyData = directoryData['living-in-madrid']?.['work-residency'];
  const talentAgenciesData = directoryData['living-in-madrid']?.['talent-agencies'];
  const internshipsData = directoryData['living-in-madrid']?.['internships'];
  const bankingFinancesData = directoryData['living-in-madrid']?.['banking-finances'];
  const connectivityHomeServicesData = directoryData['living-in-madrid']?.['connectivity-home-services'];
  const healthcareGuideData = directoryData['living-in-madrid']?.['healthcare-guide'];
  const educationChildcareData = directoryData['living-in-madrid']?.['education-childcare'];
  const workingInMadridData = directoryData['living-in-madrid']?.['working-in-madrid'];
  const studentLifeData = directoryData['living-in-madrid']?.['student-life'];
  const communityIntegrationData = directoryData['living-in-madrid']?.['community-integration'];
  const dailyNecessitiesData = directoryData['living-in-madrid']?.['daily-necessities-services'];

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
          {accommodationData ? (
            <div>
              <p>{(accommodationData as any).introduction}</p>
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
              <p>{(paperworkData as any).introduction}</p>
            </div>
          ) : (
            <p>Information about paperwork and formalities is coming soon.</p>
          )}
        </section>

        {/* Shopping & Services Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Shopping & Essential Services</h2>
          <Card>
            <CardHeader>
              <CardTitle>Daily Shopping & Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Find essential shops and services for daily life in Madrid, including optical shops, 
                bookstores, international groceries, hair salons, and more.
              </p>
              <Link 
                to="/living-in-madrid/shopping-services" 
                className="inline-flex items-center text-madrid-red hover:text-madrid-red/80 font-medium"
              >
                View Shopping & Services Guide →
              </Link>
            </CardContent>
          </Card>
        </section>

        {/* Work & Residency Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Work & Residency</h2>
          <p className="text-sm text-red-600 mb-4">
            Disclaimer: Visa and residency information can change frequently. Always consult official government sources for the most up-to-date requirements.
          </p>
          {workResidencyData ? (
            <div>
              <p>{(workResidencyData as any).introduction}</p>
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
              <p>{(talentAgenciesData as any).introduction}</p>
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
              <p>{(internshipsData as any).introduction}</p>
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
              <p>{(bankingFinancesData as any).introduction}</p>
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
              <p>{(connectivityHomeServicesData as any).introduction}</p>
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
              <p>{(healthcareGuideData as any).introduction}</p>
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
              <p>{(educationChildcareData as any).introduction}</p>
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
              <p>{(workingInMadridData as any).introduction}</p>
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
              <p>{(studentLifeData as any).introduction}</p>
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
              <p>{(communityIntegrationData as any).introduction}</p>
            </div>
          ) : (
            <p>Information about community and integration is coming soon.</p>
          )}
        </section>

        {/* Religions & Faiths Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Religions & Faiths</h2>
          {religionsData.length > 0 ? (
            <PlacesOfWorshipList places={religionsData} />
          ) : (
            <p>Information about religions and faiths is coming soon.</p>
          )}
        </section>

         {/* Daily Necessities & Services Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Daily Necessities & Services</h2>
          {dailyNecessitiesData ? (
            <div>
              <p>{(dailyNecessitiesData as any).introduction}</p>
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
