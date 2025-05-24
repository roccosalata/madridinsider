import React from 'react';
import Layout from '@/components/Layout'; // Assuming you have a Layout component
import { Card, CardContent } from '@/components/ui/card'; // Assuming you use Shadcn UI cards

const SportsAndRecreationPage: React.FC = () => {
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
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Sports & Recreation</h1>

        <section className="mb-12">
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg mb-6">Discover the various sports and recreation opportunities available in Madrid.</p>
              <ul>
                {sports.map(sport => (
                  <li key={sport} className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">{sport}</h2>
                    <p>Details for {sport} are coming soon.</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default SportsAndRecreationPage;