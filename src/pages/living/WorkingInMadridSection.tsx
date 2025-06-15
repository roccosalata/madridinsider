
```typescript
import React from "react";
import { directoryData } from "@/data/directoryData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { talentAgencies } from "@/data/living/talentAgencies";
import TalentAgenciesList from "@/components/living/work/TalentAgenciesList";

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
    </div>
  </section>
);

export default WorkingInMadridSection;
```
