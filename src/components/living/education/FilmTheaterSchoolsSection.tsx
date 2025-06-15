
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MapPin, Globe, Mail, Film, Theater } from 'lucide-react';

const schools = [
  {
    name: "ECAM",
    address: "Junan de Orduña, 3, Ciudad del Imagen, Pozuelo de Alarcón",
    website: "www.ecam.es",
    phone: "91 512 1074"
  },
  {
    name: "TAI",
    address: "Serrano Anguita, 10 (Metro: Alonso Martinez)",
    website: "www.escuelatai.com",
    phone: "91 447 2055"
  },
  {
    name: "Séptima Ars",
    address: "Fuente del Saz, 5 (Metro: Conch Espina)",
    website: "www.septima-ars.com",
    phone: ["91 457 2311", "91 457 7973"]
  },
  {
    name: "Film Business School",
    address: "Velázquez, 14, Bajo-D (Metro: Velázquez)",
    email: "fbs@mediaschool.org",
    phone: "91 575 9583"
  },
  {
    name: "Plot Point School of Acting for Film and TV",
    address: "Ercilla, 29 (Metro: Embajadores)",
    description: "This acting school offers three-day seminars for free. Here you'll learn how to move in front of the camera as well as certain basics of acting. The objective is to familiarize aspiring actors with the Plot Point methodology.",
    website: "www.plotpoint.org",
    phone: "91 474 9765"
  },
  {
    name: "Cuarta Pared",
    address: "Ercilla, 17 (Metro: Embajadores)",
    description: "It's not too late - you can still be a star. But you might check out acting class before packing for Hollywood. Prestigious Madrid theater and acting school Cuarta Pared offers several courses that vary in levels of intensity: some are serious three year programs, others are short seminars. You will learn training, improv, dramatic play and, you know, how to act natural.",
    phone: "91 517 2317"
  },
  {
    name: "El Almadén",
    address: "Almadén, 1 (Metro: Atocha / Anton Martin)",
    description: "El Almadén (Centro de Formación Actoral) aims to be a non-snooty establishment. Courses are geared towards ordinary people who may be a little shy and wish to try acting for their own personal development rather than with sights set on becoming the next Javier Bardem. Its range of classes stretches to musical instrument lessons and group singing classes.",
    phone: "91 429 3704",
    website: "www.elalmaden.com"
  },
  {
    name: "Centro Cultural de Conde Duque",
    address: "Conde Duque, 9-11 (Metro: Arguelles / San Bernardo)",
    phone: "91 588 5834"
  },
  {
    name: "Ocho y Medio",
    address: "Martin de los Heros, 11 (Metro: Plaza España)",
    website: "www.ochoymedio.com",
    phone: "91 559 0628"
  },
  {
    name: "Unión de Actores",
    address: "Marques de Valdeiglesias, 5, 1º (Metro: Banco de España)",
    website: "www.uniondeactores.com",
    phone: "91 523 0547"
  },
  {
    name: "FAPAE",
    description: "Federación de Asociaciones de Productores Audiovisuales Españoles",
    website: "www.fapae.es"
  },
  {
    name: "Audio Contact International",
    address: "Pl de Matute, 12 (Metro: Anton Martin)",
    phone: "91 521 2229"
  }
];

const FilmTheaterSchoolsSection: React.FC = () => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Film className="h-6 w-6" />
        <Theater className="h-6 w-6" />
        Film & Theater Schools
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-700 mb-6">
        Madrid has a thriving film and theater scene, with numerous schools offering courses for aspiring actors, directors, and technicians. Here are some of the most notable institutions.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {schools.map((school, index) => (
          <div key={index} className="p-4 border rounded-lg bg-gray-50 flex flex-col h-full">
            <h4 className="font-semibold text-lg mb-2">{school.name}</h4>
            {school.description && (
              <p className="text-sm text-gray-700 mb-3 flex-grow">{school.description}</p>
            )}
            <div className="space-y-2 text-sm text-gray-600 mt-auto">
              {school.address && (
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>{school.address}</span>
                </div>
              )}
              {school.phone && (
                Array.isArray(school.phone) ? (
                  school.phone.map((p, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Phone className="h-4 w-4 flex-shrink-0" />
                      <span>{p}</span>
                    </div>
                  ))
                ) : (
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span>{school.phone}</span>
                  </div>
                )
              )}
              {school.website && (
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 flex-shrink-0" />
                  <a href={`http://${school.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{school.website}</a>
                </div>
              )}
              {school.email && (
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <a href={`mailto:${school.email}`} className="hover:underline">{school.email}</a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default FilmTheaterSchoolsSection;
