
import React from "react";
import { directoryData } from "@/data/directoryData";

const accommodationData = directoryData['living-in-madrid']?.['accommodation'];

const AccommodationSection = () => (
  <section id="accommodation" className="mb-12 scroll-mt-20">
    <h2 className="text-3xl font-bold mb-6">Finding Accommodation</h2>
    {accommodationData ? (
      <div>
        <p>{(accommodationData as any).introduction}</p>
      </div>
    ) : (
      <p>Information about finding accommodation is coming soon.</p>
    )}
  </section>
);

export default AccommodationSection;
