
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import TabSections from '@/components/essentials/TabSections';
import RelatedCategories from '@/components/essentials/RelatedCategories';
import { embassies } from '../data/essentialsData'; // Import embassies data
// Import the new PlacesOfWorshipList component
import PlacesOfWorshipList from '@/components/PlacesOfWorshipList';


const MadridEssentials = () => {
  return (
    <Layout>
      <HeroSection 
        title="Madrid Essentials" 
        subtitle="Your starting point: What's new, current events, key maps, city layout, and first-timer tips for Madrid." 
      />
      
      <div className="container mx-auto px-4 py-8">
        <TabSections />
        
        <div className="my-12">
          <h2 className="text-2xl font-bold mb-6">Maps & Navigation</h2>
          <MapHubLink />
        </div>
        
        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6">Emergencies</h2>
          {/* TODO: Import emergencyContacts from essentialsData */}
 {/* TODO: Create and use a component to display emergency contacts */}
          {/* <EmergencyContactList contacts={emergencyContacts} /> */}
        </section>

        <section className="my-12">
          <h2 className="text-2xl font-bold mb-6">Embassies</h2>
          {/* Assuming embassies is imported or defined elsewhere if not from essentialsData */}
          {/* <EmbassyList embassies={embassies} /> */}
 <p className="mb-4">Find contact information for embassies of several countries in Madrid. This information is loaded from <code>src/data/essentialsData.ts</code>.
          </p>
            Consider creating a dedicated component (similar to <code>EmergencyContactList</code>) to display the list of embassies in a formatted way.
 <p className="mb-4">
            Embassies ask you to register with them if you are staying for an extended period of time. Apart from the benefits of official protection this gives you, keeping in touch with your agency can also be a source of information about job opportunities as well as a means of keeping on top of news from home. Contact your embassy with the info above as it can be the easiest way to answer all of your questions about documentation, what to do in an emergency, useful contacts etc.
 </p>

        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Post Office & Mail</h2>
          <Card> {/* Card wrapper for structure */}
            <CardContent className="pt-6"> {/* CardContent for padding */}
              {/* Replace paragraph with PostAndMailInfo component */}
            </CardContent>
          </Card>
        </section>


        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Local Police Stations</h2>
          <Card>
            <CardContent className="pt-6">
              <p>Here you can find information about local police stations and other relevant contacts in Madrid, loaded from our essentials data.</p>
            </CardContent>
          </Card>
        </section>

        <RelatedCategories />
      </div>
    </Layout>
  );
};

export default MadridEssentials;
