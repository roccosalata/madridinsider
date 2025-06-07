
import React from 'react';
import MuseumCard from './MuseumCard';
import ArtDistricts from './ArtDistricts';
import MuseumTips from './MuseumTips';
import MuseumResources from './MuseumResources';
import { museums, artDistricts } from '@/data/museumsData';

const MuseumsHub = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-3xl font-bold mb-4">Madrid Museums & Galleries Hub</h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Discover Madrid's incredible art scene, from world-renowned museums to contemporary galleries. 
          Home to some of the world's most important art collections and vibrant modern art districts.
        </p>
      </section>

      {/* Major Museums Grid */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Major Museums & Cultural Sites</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {museums.map((museum, index) => (
            <MuseumCard key={index} {...museum} />
          ))}
        </div>
      </section>

      <ArtDistricts districts={artDistricts} />
      <MuseumTips />
      <MuseumResources />
    </div>
  );
};

export default MuseumsHub;
