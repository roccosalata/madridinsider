
import React from "react";
import { directoryData } from "@/data/directoryData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BilingualSchoolsSection from "@/components/living/education/BilingualSchoolsSection";
import LanguageSchoolsSection from "@/components/living/education/LanguageSchoolsSection";
import TeacherTrainingSection from "@/components/living/education/TeacherTrainingSection";
import LibrariesSection from "@/components/living/education/LibrariesSection";
import FilmTheaterSchoolsSection from "@/components/living/education/FilmTheaterSchoolsSection";

const educationChildcareData = directoryData['living-in-madrid']?.['education-childcare'];
const studentLifeData = directoryData['living-in-madrid']?.['student-life'];

const EducationChildcareSection = () => (
  <section id="education" className="mb-12 scroll-mt-20">
    <h2 className="text-3xl font-bold mb-6">Education & Student Life</h2>
    <div className="space-y-8">
      <Card>
        <CardHeader><CardTitle>Education & Schools</CardTitle></CardHeader>
        <CardContent>
          {educationChildcareData ? (
            <p>{(educationChildcareData as any).introduction}</p>
          ) : (
            <p>Information about education and childcare is coming soon.</p>
          )}
        </CardContent>
      </Card>

      <BilingualSchoolsSection />
      <LanguageSchoolsSection />
      <TeacherTrainingSection />
      <FilmTheaterSchoolsSection />
      <LibrariesSection />
      
      <Card>
        <CardHeader><CardTitle>Student Life</CardTitle></CardHeader>
        <CardContent>
          {studentLifeData ? (
            <p>{(studentLifeData as any).introduction}</p>
          ) : (
            <p>Information about student life is coming soon.</p>
          )}
        </CardContent>
      </Card>
    </div>
  </section>
);

export default EducationChildcareSection;
