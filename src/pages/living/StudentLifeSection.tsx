
import React from "react";
import { directoryData } from "@/data/directoryData";

const studentLifeData = directoryData['living-in-madrid']?.['student-life'];

const StudentLifeSection = () => (
  <section className="mb-12">
    <h2 className="text-3xl font-bold mb-6">Student Life</h2>
    {studentLifeData ? (
      <div>
        <p>{(studentLifeData as any).introduction}</p>
      </div>
    ) : (
      <p>Information about student life is coming soon.</p>
    )}
  </section>
);

export default StudentLifeSection;
