
import React from "react";
import { essentialsData } from "@/data/essentialsData";
import PlacesOfWorshipList from "@/components/PlacesOfWorshipList";

const religionsData = essentialsData.religions || [];

const ReligionsFaithsSection = () => (
  <section className="mb-12">
    <h2 className="text-3xl font-bold mb-6">Religions & Faiths</h2>
    {religionsData.length > 0 ? (
      <PlacesOfWorshipList places={religionsData} />
    ) : (
      <p>Information about religions and faiths is coming soon.</p>
    )}
  </section>
);

export default ReligionsFaithsSection;
