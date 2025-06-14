
import React from "react";
import { directoryData } from "@/data/directoryData";

const educationChildcareData = directoryData['living-in-madrid']?.['education-childcare'];

const EducationChildcareSection = () => (
  <section className="mb-12">
    <h2 className="text-3xl font-bold mb-6">Education & Childcare</h2>
    {educationChildcareData ? (
      <div>
        <p>{(educationChildcareData as any).introduction}</p>
      </div>
    ) : (
      <p>Information about education and childcare is coming soon.</p>
    )}
  </section>
);

export default EducationChildcareSection;
