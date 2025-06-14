
import React from "react";
import { directoryData } from "@/data/directoryData";

const healthcareGuideData = directoryData['living-in-madrid']?.['healthcare-guide'];

const HealthcareGuideSection = () => (
  <section className="mb-12">
    <h2 className="text-3xl font-bold mb-6">Healthcare Guide</h2>
    {healthcareGuideData ? (
      <div>
        <p>{(healthcareGuideData as any).introduction}</p>
      </div>
    ) : (
      <p>Information about healthcare is coming soon.</p>
    )}
  </section>
);

export default HealthcareGuideSection;
