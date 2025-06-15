
import React from "react";
import { religions } from "@/data/placesOfWorship";
import PlacesOfWorshipList from "@/components/PlacesOfWorshipList";

const ReligionsFaithsSection = () => (
  <section id="religions-faiths" className="mb-12 scroll-mt-20">
    <h2 className="text-3xl font-bold mb-6">Religions & Faiths</h2>
    {religions.length > 0 ? (
      <PlacesOfWorshipList places={religions} />
    ) : (
      <p>Information about religions and faiths is coming soon.</p>
    )}
  </section>
);

export default ReligionsFaithsSection;
