typescriptreact
import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Card, CardContent } from '@/components/ui/card';
import { directoryData } from '@/data/directoryData'; // Assuming this might be useful later
import EmbassyList from '../components/EmbassyList'; // Import EmbassyList component
import EmergencyContactList from '../components/EmergencyContactList'; // Import EmergencyContactList component
import PoliceContactList from '../components/PoliceContactList'; // Import PoliceContactList component
import PostAndMailInfo from '../components/PostAndMailInfo'; // Import PostAndMailInfo component

const MadridEssentialsPage = () => {
  // Placeholder for potential state management if needed
  const [essentialsData, setEssentialsData] = useState<any>(null); // Assuming a structure for essentials data

  // Placeholder for fetching data if needed
  // useEffect(() => {
  //   // Fetch or load data here
  // }, []);

  const madridCardInfo = {
    benefits: [
      "Free entry to 60+ museums and attractions",
      "Unlimited use of public transport (including airport transfer)",
      "Discounts on tours, shops, and restaurants",
      "Fast track entry at selected attractions"
    ],
    included: [
      " Prado Museum",
      " Reina Sofía Museum",
      " Thyssen-Bornemisza Museum",
      " Royal Palace of Madrid",
      " Santiago Bernabéu Stadium Tour (Real Madrid)",
      " Teleférico (Cable Car)",
      " Guided tours of the city"
    ],
    discounts: [
      "Flamenco shows",
      "Shopping outlets",
      "Restaurants",
      "Bike rentals"
    ],
    contact: {
      website: "www.madridcard.com",
      phone: "+34 91 588 1636" // Example phone number, confirm actual number
    }
  };


  return (
    <Layout>
      <HeroSection
        title="Madrid Essentials"
        subtitle="Your guide to must-know information for visiting Madrid."
      />

      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Madrid at a Glance</h1>

        {/* Quick Facts Section */}
        <section className="mb-12">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Quick Facts</h2>
              <p>
                {/* Placeholder for Quick Facts content - will be migrated from Essentials.tsx */}
                Information about Madrid's population, language, currency, time zone, etc. goes here.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Best Time to Visit Section */}
        <section className="mb-12">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Best Time to Visit</h2>
              <p>
                {/* Placeholder for Best Time to Visit content - will be migrated from Essentials.tsx */}
                Information about seasonal weather, peak seasons, and ideal times to visit goes here.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Essential Resources Section */}
        <section className="mb-12">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Essential Resources</h2>
              <p>
                {/* Placeholder for Essential Resources content - will be migrated */}
                Information on useful websites, apps, and other resources for visitors and residents.
              </p>
            </CardContent>
          </Card>
        </section>

         {/* Essential Tips Section */}
         <section className="mb-12">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Essential Tips</h2>
              <p>
                {/* Placeholder for Essential Tips content - will be migrated */}
                Practical advice for navigating Madrid, local customs, safety tips, etc.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Madrid Card Section */}
        <section className="mb-12">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Madrid Card: The Tourist Card</h2>
              <p className="mb-4">
                The Madrid Card is an official tourist pass that offers great value and convenience for exploring the city.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Benefits:</h3>
                  <ul className="list-disc pl-5">
                    {madridCardInfo.benefits.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Included with the card (examples):</h3>
                  <ul className="list-disc pl-5">
                    {madridCardInfo.included.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                 <div>
                  <h3 className="text-xl font-semibold mb-2">Discounts on:</h3>
                  <ul className="list-disc pl-5">
                    {madridCardInfo.discounts.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                 <div>
                  <h3 className="text-xl font-semibold mb-2">Contact Information:</h3>
                   <p><strong>Website:</strong> <a href={`https://${madridCardInfo.contact.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{madridCardInfo.contact.website}</a></p>
                   <p><strong>Phone:</strong> {madridCardInfo.contact.phone}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Embassies and Consulates Section */}
        <section className="mb-12">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Embassies and Consulates</h2>
              {/* Assume essentialsData has an 'embassies' array */}
              {essentialsData?.embassies ? (
                <EmbassyList embassies={essentialsData.embassies} />
              ) : (
                <p>Loading embassy information or no data available.</p>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Emergency Contacts Section */}
        <section className="mb-12">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Emergency Contacts</h2>
               {/* Assume essentialsData has an 'emergencyContacts' array */}
              {essentialsData?.emergencyContacts ? (
                 <EmergencyContactList contacts={essentialsData.emergencyContacts} />
               ) : (
                 <p>Loading emergency contact information or no data available.</p>
               )}
            </CardContent>
          </Card>
        </section>

        {/* Police Contacts Section */}
         <section className="mb-12">
           <Card>
             <CardContent className="pt-6">
               <h2 className="text-2xl font-semibold mb-4">Police Contacts</h2>
                {/* Assume essentialsData has a 'policeContacts' array */}
               {essentialsData?.policeContacts ? (
                  <PoliceContactList contacts={essentialsData.policeContacts} />
                ) : (
                  <p>Loading police contact information or no data available.</p>
                )}
             </CardContent>
           </Card>
         </section>

        {/* Post and Mail Services Section */}
        <section className="mb-12">
           <Card>
             <CardContent className="pt-6">
               <h2 className="text-2xl font-semibold mb-4">Post and Mail Services</h2>
                {/* Assume essentialsData has post and mail information */}
               {essentialsData?.postAndMail ? (
                  <PostAndMailInfo info={essentialsData.postAndMail} />
                ) : (
                  <p>Loading post and mail information or no data available.</p>
                )}
             </CardContent>
           </Card>
         </section>

      </div>
    </Layout>
  );
};

export default MadridEssentialsPage;