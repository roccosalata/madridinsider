
import React from "react";
import { directoryData } from "@/data/directoryData";

const educationChildcareData = directoryData['living-in-madrid']?.['education-childcare'];

const EducationChildcareSection = () => (
  <section id="education" className="mb-12 scroll-mt-20">
    <h2 className="text-3xl font-bold mb-6">Education & Schools</h2>
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
