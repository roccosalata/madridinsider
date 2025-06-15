
import React from "react";
import { directoryData } from "@/data/directoryData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { talentAgencies } from "@/data/living/talentAgencies";
import TalentAgenciesList from "@/components/living/work/TalentAgenciesList";
import { Globe, Mail, Phone, MapPin, User } from "lucide-react";
import { internshipOpportunities } from "@/data/living/internshipOpportunities";
import { filmResources } from "@/data/living/filmResources";

const workingInMadridData = directoryData['living-in-madrid']?.['working-in-madrid'];

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
          <div className="space-y-6">
            {internshipOpportunities.map((opportunity, index) => (
              <div key={index} className="py-4 border-b last:border-b-0">
                <h4 className="font-semibold text-madrid-red mb-2">{opportunity.name}</h4>
                <div className="space-y-1 text-sm text-gray-700">
                  {opportunity.description && <p>{opportunity.description}</p>}
                  {opportunity.address && <p className="flex items-start gap-2"><MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" /><span>{opportunity.address}</span></p>}
                  {opportunity.contactPerson && <p className="flex items-center gap-2"><User className="h-4 w-4 flex-shrink-0" />{opportunity.contactPerson}</p>}
                  {opportunity.phone && <p className="flex items-center gap-2"><Phone className="h-4 w-4 flex-shrink-0" />{opportunity.phone}</p>}
                  {opportunity.email && <a href={`mailto:${opportunity.email}`} className="flex items-center gap-2 text-blue-600 hover:underline"><Mail className="h-4 w-4 flex-shrink-0" />{opportunity.email}</a>}
                  {opportunity.website && <a href={!opportunity.website.startsWith('http') ? `http://${opportunity.website}` : opportunity.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline"><Globe className="h-4 w-4 flex-shrink-0" />{opportunity.website}</a>}
                  {opportunity.notes && <p className="text-sm text-blue-600 font-medium mt-2">{opportunity.notes}</p>}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <TalentAgenciesList agencies={talentAgencies} />

      <Card>
        <CardHeader><CardTitle>Film & TV Resources</CardTitle></CardHeader>
        <CardContent>
          <div className="space-y-6">
            {filmResources.map((resource, index) => (
              <div key={index} className="py-4 border-b last:border-b-0">
                <h4 className="font-semibold text-madrid-red mb-2">{resource.name}</h4>
                <div className="space-y-1 text-sm text-gray-700">
                  {resource.description && <p>{resource.description}</p>}
                  {resource.address && <p className="flex items-start gap-2"><MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" /><span>{resource.address}{resource.metro && ` (Metro: ${resource.metro})`}</span></p>}
                  {resource.phone && <p className="flex items-center gap-2"><Phone className="h-4 w-4 flex-shrink-0" />{resource.phone}</p>}
                  {resource.email && <a href={`mailto:${resource.email}`} className="flex items-center gap-2 text-blue-600 hover:underline"><Mail className="h-4 w-4 flex-shrink-0" />{resource.email}</a>}
                  {resource.website && <a href={!resource.website.startsWith('http') ? `http://${resource.website}` : resource.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline"><Globe className="h-4 w-4 flex-shrink-0" />{resource.website}</a>}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

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

      <Card>
        <CardHeader><CardTitle>Hostess / Azafatas</CardTitle></CardHeader>
        <CardContent>
            <div>
              <h4 className="font-semibold text-madrid-red mb-2">Azafatas & Promotoras</h4>
              <div className="space-y-2 text-sm text-gray-700">
                  <p>Portal de azafatas y promotoras.</p>
                  <p>National directory of agencies.</p>
                  <a href="http://www.azafatasypromotoras.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
                      <Globe className="h-4 w-4 flex-shrink-0" />
                      <span>www.azafatasypromotoras.com</span>
                  </a>
              </div>
            </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default WorkingInMadridSection;
