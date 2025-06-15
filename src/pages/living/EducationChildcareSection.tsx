import React from "react";
import { directoryData } from "@/data/directoryData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Globe, Mail, FileText } from "lucide-react";

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

const teacherTrainingCenters = [
  {
    name: "EBC Int. TEFL Certificate",
    address: "Orense, 16, 2-E (Metro: Santiago Bernabeu)",
    phone: "915-553-975",
    fax: "770-21-12",
    website: "www.ebc-tefl-course.com",
    email: "tefl@ebcidiomas.com",
    description: "The EBC International TEFL Certificate qualifies you to teach English as a foreign language to business professionals, adults and younger people. Come and join us in our teaching adventure: study abroad, work abroad, teach abroad."
  },
  {
    name: "Canterbury",
    address: "Augusto Figueroa, 47, 1, 1 (Metro: Gran Via)",
    phone: "915-229-898",
    website: "www.canterburyenglish.com",
    email: "canterbury@canterburyenglish.com",
    description: "Canterbury English is a professional association of professors and students from all over the world. Canterbury English will provide successful graduates of our program the possibility of working up to 20-25 hours/week teaching English, if they so desire. Utilizing \"FLEX\" scheduling, Canterbury accommodates the needs of our participants and provides them with the maximum flexibility necessary to balance their time between studying, traveling, and working."
  }
];

const teacherTrainingResources = [
  "www.windsorschools.co.uk/tefl_tesol_madrid.html",
  "www.oxfordtefl.com",
  "www.ihmadrid.com/english.htm",
  "www.cactuslanguage.com",
  "www.eslcafe.com",
  "www.marksesl.com",
  "www.expatriatecafe.com",
  "www.eslteachersboard.com",
  "www.spainexchange.com",
  "www.goabroad.com",
  "www.tefl.com",
  "www.eviews.net/references.html"
];

const libraries = [
  { name: "Acuña", address: "Calle Quintana 9, MADRID", phone: "91 541 36 19" },
  { name: "Aluche", address: "Calle Camarera 10, MADRID", phone: "91 719 89 96" },
  { 
    name: "Biblioteca Nacional", 
    address: "Paseo Recoletos 20, MADRID", 
    phone: "91 580 78 00",
    website: "www.bne.es",
    email: "webmaster@bne.es"
  },
  { name: "Buenavista", address: "Avenida de los Toreros 5, MADRID", phone: "91 361 42 68" },
  { name: "Canillejas", address: "Calle Musas 11, MADRID", phone: "91 741 18 60" },
  { name: "Canillejas", address: "Calle Boltaña 27, MADRID", phone: "91 588 80 89" },
  { name: "Carabanchel", address: "Calle Hermanos del Moral 15, MADRID", phone: "91 472 60 64" },
  { name: "Central", address: "Calle Conde Duque 9, MADRID", phone: "91 588 57 15" },
  { name: "Central", address: "Calle Felipe el Hermoso 4, MADRID", phone: "91 445 97 82" },
  { name: "Chamartín", address: "Calle Mantuano 51, MADRID", phone: "91 416 67 85" },
  { name: "Ciudad Lineal", address: "Calle Hermanos García Noblejas 2, MADRID", phone: "91 588 75 66" },
  { name: "Concha Espina", address: "Calle Núñez de Balboa 95, MADRID", phone: "91 435 94 70" },
  { name: "Eugenia del Montijo", address: "Calle Eugenia de Montijo 105, MADRID", phone: "91 508 80 15" },
  { name: "Fuencarral - Rafael Alberti", address: "Calle Sangenjo 36, MADRID", phone: "91 731 95 52" },
  { name: "Hortaleza", address: "Calle Abertura s/n, MADRID", phone: "91 763 09 31" },
  { name: "Huerta de la Salud", address: "Calle Mar de las Antillas 9, MADRID", phone: "91 764 52 43" },
  { name: "Islas Filipinas", address: "Calle Nuestra Señora del Valle 2, MADRID", phone: "91 403 63 22" },
  { name: "Latina - Antonio Mingote", address: "Avenida Rafael Finat 51, MADRID", phone: "91 509 36 25" },
  { name: "Mateo Inurria", address: "Calle Manuel Ferrero 1, MADRID", phone: "91 350 31 50" },
  { name: "Menéndez Pelayo", address: "Plaza América Española 2, MADRID", phone: "91 725 57 01" },
  { name: "Moratalaz", address: "Calle Corregidor Alonso Tobar s/n, MADRID", phone: "91 439 46 88" },
  { name: "Moratalaz", address: "Plaza Corregidor Alonso de Aguilar 8, MADRID", phone: "91 437 65 65" },
  { name: "Orcasitas", address: "Avenida Rafaela Ibarra s/n, MADRID", phone: "91 341 68 26" },
  { name: "Orcasur", address: "Plaza del Pueblo 2, MADRID", phone: "91 317 86 45" },
  { name: "Pan Bendito", address: "Camino Viejo de Leganés 188, MADRID", phone: "91 560 05 90" },
  { name: "Pedro Salinas", address: "Glorieta Puerta de Toledo 1, MADRID", phone: "91 366 54 07" },
  { name: "Pío Baroja", address: "Calle Arganda 12, MADRID", phone: "91 474 16 03" },
  { name: "Portazgo", address: "Calle Risco de Peloche 14, MADRID", phone: "91 478 21 82" },
  { name: "Pozo del Tío Raimundo", address: "Avenida Las Glorietas 19, MADRID", phone: "91 507 07 34" },
  { name: "Retiro", address: "Calle Doctor Esquerdo 189, MADRID", phone: "91 501 91 46" },
  { name: "Ruiz Egea", address: "Calle Raimundo Fernández Villaverde 6, MADRID", phone: "91 534 90 29" },
  { name: "Salamanca", address: "Calle Azcona 42, MADRID", phone: "91 726 37 01" },
  { name: "San Blas", address: "Calle Arcos de Jalón 20, MADRID", phone: "91 306 56 41" },
  { name: "Tetuán", address: "Calle Viña Virgen 2, MADRID", phone: "91 588 66 36" },
  { name: "Usera", address: "Paseo Santa María de la Cabeza 115, MADRID", phone: "91 792 43 27" },
  { name: "Vaguada", address: "Avenida Monforte de Lemos 36, MADRID", phone: "91 588 68 91" },
  { name: "Vallecas", address: "Calle Puerto Monasterio 1, MADRID", phone: "91 588 60 51" },
  { name: "Vallecas", address: "Calle Extremeños 5, MADRID", phone: "91 303 31 95" },
  { name: "Vallecas Villa", address: "Calle Monte Aya 12, MADRID", phone: "91 777 13 96" },
  { name: "Vicálvaro", address: "Calle Villardondiego 36, MADRID", phone: "91 776 82 11" }
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
        <CardHeader>
          <CardTitle>Teacher Training & TEFL Certification</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-6">
            For those interested in teaching English in Madrid, there are several TEFL certification programs and resources available:
          </p>
          <div className="space-y-6">
            {teacherTrainingCenters.map((center, index) => (
              <div key={index} className="p-4 border rounded-lg bg-gray-50">
                <h4 className="font-semibold text-lg mb-3">{center.name}</h4>
                <p className="text-gray-700 mb-4 text-sm">{center.description}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>{center.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span>{center.phone}</span>
                  </div>
                  {center.fax && (
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 flex-shrink-0" />
                      <span>Fax: {center.fax}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 flex-shrink-0" />
                    <span>{center.website}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <span>{center.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <h5 className="font-semibold mb-4">Additional TEFL Resources</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {teacherTrainingResources.map((resource, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                  <Globe className="h-3 w-3 flex-shrink-0" />
                  <span>{resource}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Libraries</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-6">
            Madrid has an extensive network of public libraries throughout the city. Here's a comprehensive list of libraries 
            where you can study, access books and resources, and often find free internet access:
          </p>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {libraries.map((library, index) => (
              <div key={index} className="p-3 border rounded-lg bg-gray-50">
                <h4 className="font-semibold text-base mb-2">{library.name}</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-3 w-3 mt-0.5 flex-shrink-0" />
                    <span>{library.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-3 w-3 flex-shrink-0" />
                    <span>{library.phone}</span>
                  </div>
                  {library.website && (
                    <div className="flex items-center gap-2">
                      <Globe className="h-3 w-3 flex-shrink-0" />
                      <span>{library.website}</span>
                    </div>
                  )}
                  {library.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="h-3 w-3 flex-shrink-0" />
                      <span>{library.email}</span>
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
