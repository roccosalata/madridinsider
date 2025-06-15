
import React from "react";
import { directoryData } from "@/data/directoryData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Globe } from "lucide-react";

const educationChildcareData = directoryData['living-in-madrid']?.['education-childcare'];
const studentLifeData = directoryData['living-in-madrid']?.['student-life'];

const bilingualSchools = [
  {
    name: "American School of Madrid",
    address: "Carretera de Humera, Km 2, 28023 Aravaca, Madrid",
    phone: "917-401-900"
  },
  {
    name: "British Institute School",
    address: "Martinez Campos, 31, 28010 Madrid",
    phone: "913-373-596"
  },
  {
    name: "Colegio Everest",
    address: "Urb. Monteclaro, Ctra. Pozuelo-Majadahonda, 28223 Madrid",
    phone: "917-994-899"
  },
  {
    name: "Hastings Infant School",
    address: "Paseo de la Habana, 204, 28036 Madrid",
    phone: "913-590-621"
  },
  {
    name: "Numont P.N.E.U. Madrid",
    address: "Parma, 16, 28043 Madrid",
    phone: "913-002-431"
  },
  {
    name: "Hastings Junior & Secondary School",
    address: "Azulinas, 8, 28036 Madrid",
    phone: "913-599-913"
  },
  {
    name: "Runnymede College",
    address: "Salvia, 30, La Moraleja, Alcobendas, 28109 Madrid",
    phone: "916-508-302"
  },
  {
    name: "St. Charles College",
    address: "Guadalquivir, 16, 28002 Madrid",
    phone: "915-634-078"
  },
  {
    name: "St. Michael's School",
    address: "Avda. Victoria, 96, 28023 Madrid",
    phone: "913-077-174"
  },
  {
    name: "St. Anne's School",
    address: "Pinar, 22, 28006 Madrid",
    phone: "915-612-717"
  },
  {
    name: "St. Anne's Kindergarten & Junior School",
    address: "Alfonso XIII, 162, 28016 Madrid",
    phone: "913-459-060"
  },
  {
    name: "International Primary School",
    address: "Rosa Jardon, 3, 28016 Madrid",
    phone: "913-592-121"
  },
  {
    name: "Kensington School (Bilingual)",
    address: "Avda. de Bularas, 2, Los Alamos de Bularas, Pozuelo de Alarcón, 28224 Madrid",
    phone: "917-154-797"
  },
  {
    name: "King's College: The British School of Madrid",
    address: "Ada del los Andes, 35 Soto de Viñuelas, 28761 Madrid",
    phone: "918-034-800",
    website: "www.kingsgroup.org"
  },
  {
    name: "English Montessori School",
    address: "Avda. de la Salle, s/n, 28023 Madrid",
    phone: "913-572-667"
  },
  {
    name: "King's Infant School",
    address: "Prieto Ureña, 9 - 11, Chamartín, 28016 Madrid",
    phone: "913-505-843",
    website: "www.kingsgroup.org"
  },
  {
    name: "International College in Spain",
    address: "Vereda Norte, 3, La Moraleja, Alcobendas, 28109 Madrid",
    phone: "916-502-398"
  },
  {
    name: "King's College School",
    address: "Paseo de Alcobendas, 5, La Moraleja, 28109 Madrid",
    phone: "916-585-540",
    website: "www.kingsgroup.org"
  },
  {
    name: "Study Center Foundation",
    address: "Valentin Robledo, 2, Pozuelo de Alarcon, 28224 Madrid",
    phone: "917-155-138"
  }
];

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

      <Card>
        <CardHeader>
          <CardTitle>Bilingual & English Schools</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-6">
            Madrid offers many excellent bilingual and English-language schools for international families and expats. 
            Here's a comprehensive list of schools offering English-language education:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {bilingualSchools.map((school, index) => (
              <div key={index} className="p-4 border rounded-lg bg-gray-50">
                <h4 className="font-semibold text-lg mb-2">{school.name}</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>{school.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span>{school.phone}</span>
                  </div>
                  {school.website && (
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 flex-shrink-0" />
                      <span>{school.website}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
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
