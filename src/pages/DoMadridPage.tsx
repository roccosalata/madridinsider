typescriptreact
import React from 'react';
import Layout from '@/components/Layout'; // Assuming you have a Layout component
import HeroSection from '@/components/HeroSection'; // Assuming you have a HeroSection component
import ActivityCard from '../components/ActivityCard'; // Import the ActivityCard component
import { activities as activitiesData } from '../data/activitiesData'; // Import your activities data
import { Card, CardContent } from '@/components/ui/card'; // Assuming you use Shadcn UI cards

const SportsAndRecreationContent: React.FC = () => {
  const sports = [
    "Basketball",
    "Bikes / Cycling",
    "Boating",
    "Bowling",
    "Cricket",
    "Golf",
    "Ice Skating",
    "Pool / Billiards",
    "Race Karts",
    "Rugby",
    "Running",
    "Skiing / Snowboarding",
    "Soccer / Football",
    "Swimming Pools",
    "Tennis",
    "Volleyball"
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Sports & Recreation</h2>
      <Card>
        <CardContent className="pt-6">
          <p className="text-lg mb-6">Discover the various sports and recreation opportunities available in Madrid.</p>
          <ul>
            {sports.map(sport => (
              <li key={sport} className="mb-4">
                <h3 className="text-2xl font-semibold mb-2">{sport}</h3>
                <p>Details for {sport} are coming soon.</p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};


const DoMadridPage: React.FC = () => {
  return (
    <Layout>
      <HeroSection
        title="Do Madrid"
        subtitle="Experience the vibrant activities and entertainment options in Madrid"
      />

      <div className="container mx-auto py-12 px-4">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Activities & Entertainment</h2>
          <p className="text-lg mb-8">Immerse yourself in Madrid's vibrant culture with exciting shows, engaging tours, and unique local experiences.</p>

          <div className="activities-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activitiesData.length > 0 ? (
              activitiesData.map(activity => (
                <ActivityCard key={activity.id} activity={activity} />
              ))
            ) : (
              <p>No activities and entertainment options listed yet. Please check back soon!</p>
            )}
          </div>
        </section>

        <SportsAndRecreationContent />

      </div>
    </Layout>
  );
};

export default DoMadridPage;