
import React from 'react';
import BullfightsCard from './BullfightsCard';
import FlamencoVenuesCard from './FlamencoVenuesCard';

const SpanishExperiencesSection = () => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-2 text-center">Authentic Spanish Experiences</h2>
      <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
        Immerse yourself in Spain's most iconic cultural traditions right in the heart of Madrid.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <BullfightsCard />
        <FlamencoVenuesCard />
      </div>
    </div>
  );
};

export default SpanishExperiencesSection;
