
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MapPin, Globe, Mail, FileText } from "lucide-react";

const languageSchools = [
  {
    name: "Academia Contacto",
    address: "Mayor, 18, 5 Izqda. (Metro: Sol)",
    phone: "913-642-454",
    website: "www.academiacontacto.com",
    email: "hola@academiacontacto.com"
  },
  {
    name: "AIL Madrid - Academia Internacional de Lenguas",
    address: "Nuñez de Balboa 17, 2ºD",
    phone: "917-256-350",
    website: "www.ailmadrid.com/spanish-courses/spanish_courses"
  },
  {
    name: "ACE, Corporate Language Training",
    phone: "913-530-045",
    email: "ace.informacion@oise.com"
  },
  {
    name: "Acento Español",
    address: "Mayor, 4, 6-9 (Metro: Sol)",
    phone: "915-213-676",
    fax: "915-317-112",
    website: "www.acentoespanol.com",
    email: "info@acentoespanol.com"
  },
  {
    name: "Actual Plus School",
    address: "Gran Via, 71, 1 (Metro: Plaza España)",
    phone: "915-475-608"
  },
  {
    name: "Advanced Institute",
    address: "Fernandez de los Ríos, 75 (Metro: Arguelles / Moncloa / Islas Filipinas)",
    phone: "915-431-992"
  },
  {
    name: "Alba Language Consulting",
    address: "Av. Pio XII",
    phone: "913-596-016 / 607-645-086",
    website: "www.albalanguage.com",
    email: "info@albalanguage.com"
  },
  {
    name: "Alea Idiomas",
    address: "Alfonso XII, 24, B dcha (Metro: Retiro / Atocha Renfe)",
    phone: "915-240-800"
  },
  {
    name: "American Language Academy",
    address: "Rodriguez San Pedro, 2 6 PL. OF. 9 (Metro: San Bernardo / Quevedo)",
    phone: "914-453-196 / 914-455-511 / 914-455-800",
    website: "www.americanlanguage.es",
    email: "ala@americanlanguage.es"
  },
  {
    name: "Arriba",
    address: "Gran Vía, 68 5-A (Metro: Plaza España)",
    phone: "915-475-608",
    fax: "915-479-471",
    email: "aarriba@ctv.es"
  },
  {
    name: "Aula Cero",
    address: "Emilio Jimenez Millas, 2, 6-B (Metro: Plaza de España)",
    phone: "915-424-285",
    website: "www.aulacero.com",
    email: "aulacero@retemail.es"
  },
  {
    name: "Bridge-Linguatec",
    address: "Serrano, 4 (Metro: Retiro / Serrano)",
    phone: "1-800-724-4210 (USA)",
    website: "www.bridgelinguatec.com",
    email: "admissions@bridgelinguatec.com"
  },
  {
    name: "C.E.E. Idiomas",
    address: "Carmen, 6 (Metro: Sol)",
    phone: "915-220-472 / 915-211-004 / 915-221-857 / 915-313-854",
    email: "cee1@arrakis.es"
  },
  {
    name: "C.P.I. Idiomas",
    address: "Puerta del Sol, 4, 5-A (Metro: Sol)",
    phone: "917-010-618",
    website: "www.cpi-vamos.com"
  },
  {
    name: "Canterbury English / Garcia Lorca",
    address: "Augosto Figueroa (Metro: Chueca)",
    website: "www.canterburyenglish.com"
  },
  {
    name: "Carpe Diem",
    address: "Fuencarral, 13, 1 (Metro: Gran Via)",
    phone: "915-223-122",
    fax: "915-328-509",
    website: "www.carpemadrid.com",
    email: "info@carpemadrid.com"
  },
  {
    name: "Centro de Lenguage Ortega y Gasset",
    address: "José Ortega y Gasset, 86, 4 Dcha (Metro: Lista)",
    phone: "914-010-317 / 914-029-018",
    email: "cogasset@wanadoo.es"
  },
  {
    name: "Ceran Lingua International",
    phone: "958-228-172",
    website: "www.ceran.com",
    email: "customer@ceran.com"
  },
  {
    name: "Club Ivy",
    address: "Monte Esquinza, 26-28 (Metro: Alonso Martinez)",
    phone: "913-191-107 / 913-191-075",
    email: "ematamoros@clubivy.com"
  },
  {
    name: "Culturesp",
    address: "Puerto Rico, 11 (Metro: Colombia)",
    phone: "619-343-081",
    website: "www.culturesp.com",
    email: "culturesp@culturesp.com"
  },
  {
    name: "Don Quijote",
    address: "Virgen de los peligros, 9, 1º (Metro: Gran Via)",
    phone: "923-27-72-00",
    website: "www.donquijote.org"
  },
  {
    name: "EBC Idiomas",
    address: "Juan Hurtado de Mendoza, 5 6-D (Metro: Cuzco)",
    phone: "915-553-975",
    fax: "770-21-12",
    website: "www.ebcidiomas.com",
    email: "ebc@ebcidiomas.com"
  },
  {
    name: "Elemadrid",
    address: "Serrano, 4 (Metro: Retiro / Serrano)",
    phone: "914-324-540",
    website: "www.elemadrid.com",
    email: "email@elemadrid.com"
  },
  {
    name: "Emerson Languages",
    address: "Plaza Bami 1, 28017, Madrid",
    phone: "91-404-12-90",
    website: "www.emersonlanguages.com"
  },
  {
    name: "Enforex Spanish Language Schools",
    address: "Alberto Aguilera, 26 (Metro: San Bernardo)",
    phone: "915-943-776",
    website: "www.enforex.com",
    email: "spanish@enforex.es"
  },
  {
    name: "Escuela Garrigó",
    address: "Principe, 8 3 Izqda. (Metro: Sol / Sevilla)",
    phone: "915-599-578 / 609-144-608"
  },
  {
    name: "Escuela Internacional",
    address: "Talamanca, 10 (Alcalá de Henares (Madrid))",
    phone: "918-831-264"
  },
  {
    name: "Escuela Oficial de Idiomas de Madrid",
    address: "Jesús Maestro, s/n, 28003 Madrid (Metro: Islas Filipinas / Guzman el Bueno)",
    phone: "915-335-802 / 915-335-803 / 915-335-804 / 915-335-805",
    fax: "915-335-331",
    website: "www.eoidiomas.com",
    email: "eoimadridjm@eoidiomas.com",
    description: "Answering Machine: 915-549-977 / 915-549-894. That's English Tel: 915-334-047. First & Second cycle English language Certificates. Call in February for the test in June."
  },
  {
    name: "Eureka, Academia de Español",
    address: "Arenal, 26 3-D (Metro: Sol / Opera)",
    phone: "915-488-640",
    fax: "915-482-580",
    website: "www.eureka-madrid.com",
    email: "eureka@eureka-madrid.com"
  },
  {
    name: "Formula Sí",
    address: "Velázquez, 3, 1 (Metro: Retiro / Velázquez)",
    phone: "915-767-453",
    fax: "915-773-655",
    website: "www.formula-si.com",
    email: "info@formula-si.com"
  },
  {
    name: "Goethe Institut",
    address: "Zurbaran, 21 (Metro: Alonso Martinez)",
    phone: "913-913-944"
  },
  {
    name: "Hispania Center",
    address: "Carretas, 14, 4-B (Metro: Sol)",
    phone: "915-231-493"
  },
  {
    name: "Hyland Language Centre",
    address: "Serrano, 19 (Metro: Colon)",
    phone: "914-319-757"
  },
  {
    name: "Iberenglish",
    address: "Mundillo, 3 (Metro: Valdeacederas)",
    phone: "619-453-215 / 913-152-143",
    website: "www.iberenglish.com",
    email: "info@iberenglish.com"
  },
  {
    name: "Idioma Fluido",
    phone: "915-430-993 / 669-154-325",
    email: "idiomafluido@hotmail.com"
  },
  {
    name: "Idiomas Seif",
    address: "Gran Via, 50, 1-Izq. (Metro: Callao / Santo Domingo)",
    phone: "91-548-7592",
    email: "idiomasseif@telefonica.net"
  },
  {
    name: "InHispania",
    address: "Montera, 10-12 1-1 (Metro: Sol / Gran Vía)",
    phone: "915-212-231",
    website: "www.inhispania.com",
    email: "info@inhispania.com"
  },
  {
    name: "Instituto Britanico",
    address: "Miguel Angel, 1 Dpdo (Metro: Ruben Dario)",
    phone: "913-373-501"
  },
  {
    name: "Institut Francais",
    address: "Marques de la Ensenada, 12 (Metro: Alonso Martinez)",
    phone: "917-004-800"
  },
  {
    name: "Instituto Hernán Cortés",
    address: "Díez Porlier, 41",
    phone: "915-634-601"
  },
  {
    name: "International House",
    address: "Zurbano, 8 (Metro: Alonso Martinez)",
    phone: "913-101-314",
    website: "www.ihmadrid.com",
    email: "spanish@ihmadrid.com"
  },
  {
    name: "Language Destinations",
    address: "Serrano (Metro: Gregorio Marañon)",
    phone: "915-046-932 / 660-635-509",
    email: "info@languagedestinations.com"
  },
  {
    name: "Language Studies International",
    address: "Luchana, 31, 1 (Metro: Bilbao)",
    phone: "914-460-999",
    website: "www.lsi.edu",
    email: "mad@lsi.edu"
  },
  {
    name: "Madrid University / Spanish Courses",
    address: "Calle de los Pirineos, 55, 28040 Madrid",
    phone: "(+34) 952-222-998",
    website: "http://www.madrid-university.es/",
    email: "info@madrid-university.es"
  },
  {
    name: "O.I.S.E, Español intensivo",
    address: "Juan Hurtado de Mendoza 17 Posterior",
    phone: "913-530-045",
    website: "www.oise-intensive-spanish.com",
    email: "madrid@oise.com"
  },
  {
    name: "One to One",
    address: "Tutor, 25 (Metro: Plaza España)",
    phone: "915-593-129 / 915-593-567",
    website: "www.es-onetoone.com",
    email: "onetoone@es-onetoone.com"
  },
  {
    name: "Paraninfo",
    address: "Princesa, 70 (Metro: Arguelles)",
    phone: "915-433-139",
    website: "www.paraninfo.com/spanish_for_foreigners_in_madrid",
    email: "paraninfo@paraninfo.com"
  },
  {
    name: "Plus Idiomas",
    address: "Arenal, 21, 6 (Metro: Sol / Opera)",
    phone: "915-481-116",
    website: "www.madridplus.es",
    email: "info@madridplus.es"
  },
  {
    name: "Sí.la.bas",
    address: "Cardenal Cisneros, 82 (Metro: Quevedo / Iglesia / Canal)",
    phone: "915-939-066",
    website: "www.academiasilabas.com",
    email: "silabas@inicia.es"
  },
  {
    name: "Spanish in the World",
    address: "Baltasar Gracián, 4 (Metro: San Bernardo)",
    phone: "915-943-776",
    website: "www.spanishintheworld.com",
    email: "info@spanishintheworld.com"
  },
  {
    name: "Spanish for Foreigners",
    phone: "616-554-966 / 914-026-855",
    email: "nacho@interlink.es"
  },
  {
    name: "Tandem",
    address: "Marqués de Cubas, 8",
    phone: "915-322-715",
    website: "www.tandem-madrid.com",
    email: "info@tandem-madrid.com"
  },
  {
    name: "Todo Espanol",
    address: "Gral Diaz Porlier, 1 (Metro: Goya)",
    phone: "914-354-238"
  },
  {
    name: "Versus Hispania",
    address: "Paseo de la Chopera, 311 porterior, local 3 (Alcobendas)",
    phone: "917-738-302 / 914-841-727 / 669-586-954 / 636-053-913",
    website: "www.versushispania.com",
    email: "versus@versushispania.com"
  }
];

const languageSchoolResources = [
  "www.boalingua.com/learn-spanish-in-spain.htm",
  "www.cervantes.es"
];

const LanguageSchoolsSection: React.FC = () => (
  <Card>
    <CardHeader>
      <CardTitle>Language Schools</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-700 mb-6">
        Madrid has numerous language schools offering Spanish courses for foreigners as well as other language instruction. 
        Whether you're looking to learn Spanish, improve your language skills, or teach languages, here are comprehensive options:
      </p>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {languageSchools.map((school, index) => (
          <div key={index} className="p-3 border rounded-lg bg-gray-50 flex flex-col h-full">
            <h4 className="font-semibold text-base mb-2">{school.name}</h4>
            {(school as any).description && (
              <p className="text-sm text-gray-700 mb-3 flex-grow">{(school as any).description}</p>
            )}
            <div className="space-y-1 text-sm text-gray-600 mt-auto">
              {school.address && (
                <div className="flex items-start gap-2">
                  <MapPin className="h-3 w-3 mt-0.5 flex-shrink-0" />
                  <span>{school.address}</span>
                </div>
              )}
              {school.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="h-3 w-3 flex-shrink-0" />
                  <span>{school.phone}</span>
                </div>
              )}
              {school.fax && (
                <div className="flex items-center gap-2">
                  <FileText className="h-3 w-3 flex-shrink-0" />
                  <span>Fax: {school.fax}</span>
                </div>
              )}
              {school.website && (
                <div className="flex items-center gap-2">
                  <Globe className="h-3 w-3 flex-shrink-0" />
                  <a href={`http://${school.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline break-all">{school.website}</a>
                </div>
              )}
              {school.email && (
                <div className="flex items-center gap-2">
                  <Mail className="h-3 w-3 flex-shrink-0" />
                  <a href={`mailto:${school.email}`} className="hover:underline break-all">{school.email}</a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <h5 className="font-semibold mb-4">Additional Language Learning Resources</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {languageSchoolResources.map((resource, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
              <Globe className="h-3 w-3 flex-shrink-0" />
              <a href={`http://${resource}`} target="_blank" rel="noopener noreferrer" className="hover:underline break-all">{resource}</a>
            </div>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);

export default LanguageSchoolsSection;
