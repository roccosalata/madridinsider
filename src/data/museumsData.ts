
import { Palette, MapPin } from 'lucide-react';

export interface Museum {
  title: string;
  description: string;
  icon: React.ElementType;
  address: string;
  hours: string;
  admission: string;
  highlights: string[];
  specialNote?: string;
}

export interface ArtDistrict {
  name: string;
  description: string;
  walkingTime?: string;
  highlights?: string[];
}

export const museums: Museum[] = [
  {
    title: "Prado Museum",
    description: "World's premier collection of European art, featuring masterpieces by Velázquez, Goya, and El Greco.",
    icon: Palette,
    address: "Calle de Ruiz de Alarcón, 23",
    hours: "Mon-Sat 10:00-20:00, Sun 10:00-19:00",
    admission: "€15 (Free Mon-Sat 18:00-20:00, Sun 17:00-19:00)",
    highlights: [
      "Las Meninas by Velázquez",
      "Goya's Black Paintings",
      "The Garden of Earthly Delights by Bosch"
    ],
    specialNote: "Book online to skip queues. Free entry for EU citizens under 25."
  },
  {
    title: "Reina Sofía Museum",
    description: "Spain's national museum of contemporary art, home to Picasso's Guernica and modern Spanish masterpieces.",
    icon: Palette,
    address: "Calle de Santa Isabel, 52",
    hours: "Mon, Wed-Sat 10:00-21:00, Sun 10:00-19:00 (Closed Tue)",
    admission: "€12 (Free Mon, Wed-Sat 19:00-21:00, Sun 13:30-19:00)",
    highlights: [
      "Guernica by Picasso",
      "Works by Dalí and Miró",
      "Contemporary Spanish artists"
    ],
    specialNote: "Free for EU citizens under 25 and over 65."
  },
  {
    title: "Thyssen-Bornemisza Museum",
    description: "Completes Madrid's Golden Triangle, featuring an exceptional private collection spanning 700 years of art.",
    icon: Palette,
    address: "Paseo del Prado, 8",
    hours: "Tue-Sun 10:00-19:00 (Closed Mon)",
    admission: "€13 (Reduced €9)",
    highlights: [
      "Impressionist and Post-Impressionist works",
      "American paintings collection",
      "Medieval to contemporary art"
    ],
    specialNote: "Monday free for residents of Madrid region with ID."
  },
  {
    title: "Royal Palace",
    description: "Official residence of Spanish royalty with stunning baroque architecture and opulent royal apartments.",
    icon: MapPin,
    address: "Calle de Bailén, s/n",
    hours: "Daily 10:00-18:00 (Oct-Mar), 10:00-20:00 (Apr-Sep)",
    admission: "€13 (EU citizens €7, Free for EU under 25)",
    highlights: [
      "Royal Armory collection",
      "Throne Room",
      "Stradivarius Room"
    ],
    specialNote: "Closed during state ceremonies. Check calendar online."
  }
];

export const artDistricts: ArtDistrict[] = [
  {
    name: "Art Golden Triangle",
    description: "Prado, Reina Sofía, and Thyssen-Bornemisza museums",
    walkingTime: "15 minutes between all three"
  },
  {
    name: "Malasaña Art Scene",
    description: "Contemporary galleries and street art",
    highlights: ["Independent galleries", "Street art tours", "Artist studios"]
  },
  {
    name: "Chueca Galleries",
    description: "Modern art spaces and design studios",
    highlights: ["Design galleries", "Photography exhibitions", "Fashion art"]
  }
];
