
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const venues = [
  {
    name: "Houdini Sala de Magia",
    address: "Garcia Luna, 13 (Metro: Cruz del Rayo)",
    website: "https://www.houdinimadrid.com",
    phones: ["91 416 4274", "91 448 9458"],
  },
  {
    name: "Giggling Guiri Comedy Club",
    address: "Teatro Alfil - Pez, 10 (Metro: Noviciado)",
    website: "https://www.comedyinspain.com",
  },
  {
    name: "Magnus Bar",
    address: "San Marcos, 28 (Metro: Chueca)",
    hours: "Thurs, Fri & Sun: Midnight-2am",
  }
];

const MagicComedyCard = () => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-lg">
        <Sparkles className="h-5 w-5 text-madrid-red" />
        Magic &amp; Comedy Clubs
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-sm mb-2">
        Madrid features a vibrant magic and comedy scene. Here are some recommended clubs and venues:
      </p>
      <div className="space-y-3">
        {venues.map(venue => (
          <div key={venue.name} className="border rounded px-3 py-2 bg-muted/50">
            <div className="font-medium">{venue.name}</div>
            <div className="text-xs">{venue.address}</div>
            {venue.hours && <div className="text-xs">Hours: {venue.hours}</div>}
            {venue.website && (
              <div className="text-xs">
                <a href={venue.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {venue.website.replace(/^https?:\/\//, "")}
                </a>
              </div>
            )}
            {venue.phones && <div className="text-xs">Tel.: {venue.phones.join(", ")}</div>}
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default MagicComedyCard;
