
import React from 'react';
import { Button } from '@/components/ui/button';

const MuseumResources = () => {
  return (
    <section className="border-t pt-6">
      <h3 className="font-bold text-xl mb-4">Museum Resources</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button variant="outline" className="w-full">Madrid Museums Official App</Button>
        <Button variant="outline" className="w-full">Art Route Maps PDF</Button>
        <Button variant="outline" className="w-full">Gallery Opening Times</Button>
      </div>
    </section>
  );
};

export default MuseumResources;
