
import React from "react";
import { directoryData } from "@/data/directoryData";

const workResidencyData = directoryData['living-in-madrid']?.['work-residency'];

const WorkResidencySection = () => (
  <section className="mb-12">
    <h2 className="text-3xl font-bold mb-6">Work & Residency</h2>
    <p className="text-sm text-red-600 mb-4">
      Disclaimer: Visa and residency information can change frequently. Always consult official government sources for the most up-to-date requirements.
    </p>
    {workResidencyData ? (
      <div>
        <p>{(workResidencyData as any).introduction}</p>
        {(workResidencyData as any).usaCitizens && (
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Information for USA Citizens</h3>
            <p>{(workResidencyData as any).usaCitizens.details}</p>
          </div>
        )}
        {(workResidencyData as any).ukCitizens && (
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Information for UK Citizens</h3>
            <p>{(workResidencyData as any).ukCitizens.details}</p>
          </div>
        )}
      </div>
    ) : (
      <p>Information about work and residency is coming soon.</p>
    )}
  </section>
);

export default WorkResidencySection;
