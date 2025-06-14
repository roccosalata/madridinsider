
import React from "react";
import { directoryData } from "@/data/directoryData";

const talentAgenciesData = directoryData['living-in-madrid']?.['talent-agencies'];

const TalentAgenciesSection = () => (
  <section className="mb-12">
    <h2 className="text-3xl font-bold mb-6">Talent Agencies</h2>
    {talentAgenciesData ? (
      <div>
        <p>{(talentAgenciesData as any).introduction}</p>
      </div>
    ) : (
      <p>Information about talent agencies is coming soon.</p>
    )}
  </section>
);

export default TalentAgenciesSection;
