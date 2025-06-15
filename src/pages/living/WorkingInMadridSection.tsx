
import React from "react";
import { directoryData } from "@/data/directoryData";

const workingInMadridData = directoryData['living-in-madrid']?.['working-in-madrid'];

const WorkingInMadridSection = () => (
  <section id="work" className="mb-12 scroll-mt-20">
    <h2 className="text-3xl font-bold mb-6">Working in Madrid</h2>
    {workingInMadridData ? (
      <div>
        <p>{(workingInMadridData as any).introduction}</p>
      </div>
    ) : (
      <p>Information about working in Madrid is coming soon.</p>
    )}
  </section>
);

export default WorkingInMadridSection;
