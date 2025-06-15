
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Music } from "lucide-react";

const venues = [
  {
    name: "Las Carboneras",
    address: "Pl. Conde de Miranda, 1 (Metro: Sol)",
    hours: "Mon-Thurs 9pm-10:30pm; Fri-Sat 8:30pm-11pm",
    phone: "91 542 8677",
    website: null,
  },
  {
    name: "Cardamomo",
    address: "Calle de Echegaray, 15",
    hours: "22:30 to 3:30",
    phone: "91 369 0757",
    website: "http://www.cardamomo.es",
  },
  {
    name: "El Juglar",
    address: "Lavapies, 37 (Metro: Lavapies)",
    hours: "Sundays: 10pm; Classes available",
    phone: "91 528 4381",
    website: null,
    email: "anaccarrasco@hotmail.com"
  },
  {
    name: "Clan",
    address: "Ribera de Curtidores, 30 (Metro: Embajadores)",
    hours: "Mon-Thurs call for hours, Fri & Sat 13:00-3:00; Sun from noon",
    phone: "91 528 84 01",
    website: "http://www.osclan.com/",
  },
  {
    name: "Cafe de Chinitas",
    address: "Torija, 7 (Metro: Santo Domingo)",
    hours: "From 9:30pm",
    phone: "915-471-502",
    website: null,
  },
  {
    name: "Las Tablas. Nuevo Espacio Escenico",
    address: "Plaza España, 9 (Metro: Plaza España)",
    hours: "Mon-Sun 7pm-1am",
    phone: "91 542 0520",
    website: "https://lastablasmadrid.com",
  },
  {
    name: "Casa Patas",
    address: "Cañizares, 10 (Metro: Anton Martin)",
    hours: "From 8pm",
    phone: "913-690-496",
    website: null,
  },
  {
    name: "Sala Axarquña",
    address: "Calavatra, 32 (Metro: La Latina / Puerta Toledo)",
    hours: "From 9:30pm",
    phone: "913-666-603",
    website: null,
  },
  {
    name: "Corral de la Moreria",
    address: "Moreria, 17 (Metro: Opera)",
    hours: "From 9:30pm",
    phone: "913-658-446",
    website: null,
  },
  {
    name: "Sala Tribueñe",
    address: "Sancho Davila, 31-33 (Metro: Ventas / Manuel Becerra)",
    hours: "Wed-Sat from 11pm",
    phone: "91 298 1395",
    website: "http://www.flamencology.com",
  },
  {
    name: "Corral de la Pacheca",
    address: "Juan Ramon Jimenez, 26 (Metro: Cuzco)",
    hours: "From 9pm",
    phone: "913-592-660",
    website: "http://www.corraldelapacheca.com",
  },
  {
    name: "Torres Bermejas",
    address: "Mesonero Romanos, 11 (Metro: Gran Via)",
    hours: "From 9:30pm",
    phone: "915-323-322",
    website: null,
  }
];

const FlamencoVenuesCard = () => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-lg">
        <Music className="h-5 w-5 text-madrid-red" />
        Flamenco Shows &amp; Tablaos – Live Venues
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm mb-2">Madrid is the world capital of Flamenco! Below are some highly recommended venues for music, dance, and tapas:</p>
      <div className="space-y-3">
        {venues.map(venue => (
          <div key={venue.name} className="border rounded px-3 py-2 bg-muted/50">
            <div className="font-medium">{venue.name}</div>
            <div className="text-xs">{venue.address}</div>
            {venue.hours && <div className="text-xs">Hours: {venue.hours}</div>}
            {venue.phone && <div className="text-xs">Tel.: {venue.phone}</div>}
            {venue.website && (
              <div className="text-xs">
                <a href={venue.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {venue.website.replace(/^https?:\/\//, "")}
                </a>
              </div>
            )}
            {venue.email && <div className="text-xs">Email: <a href={`mailto:${venue.email}`} className="text-blue-600 hover:underline">{venue.email}</a></div>}
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default FlamencoVenuesCard;
