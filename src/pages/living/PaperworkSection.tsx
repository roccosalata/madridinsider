
import React from "react";
import { directoryData } from "@/data/directoryData";

const paperworkData = directoryData['living-in-madrid']?.['paperwork-formalities'];

const PaperworkSection = () => (
  <section className="mb-12">
    <h2 className="text-3xl font-bold mb-6">Paperwork & Formalities (NIE, TIE, etc.)</h2>
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
