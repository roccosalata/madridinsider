
import React from "react";
import { directoryData } from "@/data/directoryData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { talentAgencies } from "@/data/living/talentAgencies";
import TalentAgenciesList from "@/components/living/work/TalentAgenciesList";
import { Globe, Mail, Phone } from "lucide-react";

const workingInMadridData = directoryData['living-in-madrid']?.['working-in-madrid'];
const internshipsData = directoryData['living-in-madrid']?.['internships'];

const WorkingInMadridSection = () => (
  <section id="work" className="mb-12 scroll-mt-20">
    <h2 className="text-3xl font-bold mb-6">Work & Professional Life</h2>
    
    <div className="space-y-8">
      <Card>
        <CardHeader><CardTitle>Working in Madrid</CardTitle></CardHeader>
        <CardContent>
          {workingInMadridData ? (
            <p>{(workingInMadridData as any).introduction}</p>
          ) : (
            <p>Information about working in Madrid is coming soon.</p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Internships</CardTitle></CardHeader>
        <CardContent>
          <p className="text-sm text-red-600 mb-4">
            Disclaimer: Internship regulations and availability can change. Always consult official sources and relevant organizations for the latest information.
          </p>
          {internshipsData ? (
            <p>{(internshipsData as any).introduction}</p>
          ) : (
            <p>Information about internships is coming soon.</p>
          )}
        </CardContent>
      </Card>

      <TalentAgenciesList agencies={talentAgencies} />

      <Card>
        <CardHeader><CardTitle>Journalism / Writing</CardTitle></CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold text-madrid-red mb-2">Freelance Resources & Links</h4>
            <div className="space-y-2 text-sm text-gray-700">
                <p className="font-bold">Freelance Spain</p>
                <p>Helpful website full of information and links about the media and other resources in Madrid and the rest of Spain.</p>
                <a href="http://www.spainview.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <Globe className="h-4 w-4 flex-shrink-0" />
                    <span>www.spainview.com</span>
                </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-madrid-red mb-2">ITS</h4>
            <div className="space-y-2 text-sm text-gray-700">
                <p>Writer / Researcher needed to write World Reports.</p>
                <p>Please contact Cristina Davies for more information.</p>
                <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span>607-551-255</span>
                </p>
                <a href="mailto:cristinadavies@its-group.co.uk" className="flex items-center gap-2 text-blue-600 hover:underline">
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <span>cristinadavies@its-group.co.uk</span>
                </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default WorkingInMadridSection;
