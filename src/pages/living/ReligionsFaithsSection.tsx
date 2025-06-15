
import React from "react";
import { religions } from "@/data/placesOfWorship";
import PlacesOfWorshipList from "@/components/PlacesOfWorshipList";

const ReligionsFaithsSection = () => (
  <section className="mb-12">
    <h2 className="text-3xl font-bold mb-6">Religions & Faiths</h2>
    {religions.length > 0 ? (
      <PlacesOfWorshipList places={religions} />
    ) : (
      <p>Information about religions and faiths is coming soon.</p>
    )}
  </section>
);

export default ReligionsFaithsSection;
