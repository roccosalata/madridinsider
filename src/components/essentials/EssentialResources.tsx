
import React from 'react';
import TouristOffices from './TouristOffices';
import UsefulApps from './UsefulApps';
import TouristCards from './TouristCards';

const EssentialResources = () => {
  return (
    <>
      <h3 className="text-2xl font-semibold mb-6">Essential Resources</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <TouristOffices />
        <UsefulApps />
        <TouristCards />
      </div>
    </>
  );
};

export default EssentialResources;
