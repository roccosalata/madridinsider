
import React from "react";
import { directoryData } from "@/data/directoryData";

const paperworkData = directoryData['living-in-madrid']?.['paperwork-formalities'];

const PaperworkSection = () => (
  <section id="paperwork" className="mb-12 scroll-mt-20">
    <h2 className="text-3xl font-bold mb-6">Paperwork & NIE/TIE</h2>
    {paperworkData ? (
      <div>
        <p>{(paperworkData as any).introduction}</p>
      </div>
    ) : (
      <p>Information about paperwork and formalities is coming soon.</p>
    )}
  </section>
);

export default PaperworkSection;
