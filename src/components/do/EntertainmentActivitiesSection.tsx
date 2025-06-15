
import React from 'react';
import PlanetariumIMAXCard from './PlanetariumIMAXCard';
import MagicComedyCard from './MagicComedyCard';

const EntertainmentActivitiesSection = () => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-2 text-center">Entertainment & Activities</h2>
      <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
        Discover unique entertainment options from science to comedy throughout Madrid.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PlanetariumIMAXCard />
        <MagicComedyCard />
      </div>
    </div>
  );
};

export default EntertainmentActivitiesSection;
