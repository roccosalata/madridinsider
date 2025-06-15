
import React from "react";
import { directoryData } from "@/data/directoryData";

const internshipsData = directoryData['living-in-madrid']?.['internships'];

const InternshipsSection = () => (
  <section id="internships" className="mb-12 scroll-mt-20">
    <h2 className="text-3xl font-bold mb-6">Internships</h2>
    <p className="text-sm text-red-600 mb-4">
      Disclaimer: Internship regulations and availability can change. Always consult official sources and relevant organizations for the latest information.
    </p>
    {internshipsData ? (
      <div>
        <p>{(internshipsData as any).introduction}</p>
      </div>
    ) : (
      <p>Information about internships is coming soon.</p>
    )}
  </section>
);

export default InternshipsSection;
