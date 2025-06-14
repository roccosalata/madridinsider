export interface SightseeingAttraction {
  id: string;
  name: string;
  category: 'Historic Sites' | 'Religious Sites' | 'Viewpoints' | 'Markets' | 'Palaces' | 'Theaters' | 'Plazas';
  description: string;
  address: string;
  metroStations: string[];
  openingHours?: string;
  phone?: string;
  admissionFees?: string;
  specialNotes?: string;
  neighborhood: string;
  highlights: string[];
}

export const madridAttractions: SightseeingAttraction[] = [
  {
    id: "royal-palace",
    name: "Royal Palace and Royal Armoury",
    category: "Palaces",
    description: "Home to the Kings of Spain from Carlos III all the way through to Alfonso XIII, Madrid´s Royal Palace is now open to anyone who wants to take a trip through Spanish history. Visitors can wander through the many rooms, enjoying the beautiful architecture and the art collection still housed here.",
    address: "Calle de Bailén, s/n",
    metroStations: ["Opera"],
    openingHours: "Daily 10:00-18:00 (Oct-Mar), 10:00-20:00 (Apr-Sep)",
    specialNotes: "Closed during state ceremonies. Check calendar online.",
    neighborhood: "Opera",
    highlights: ["Royal Armory collection", "Throne Room", "Stradivarius Room", "Spanish history"]
  },
  {
    id: "basilica-san-francisco",
    name: "Basilica de San Francisco",
    category: "Religious Sites",
    description: "This basilica represents the transition from baroque to neoclassicism. It boasts a magnificent cupola, considered to be one of the most impressive of the 18th century (1760).",
    address: "Plaza de San Francisco el Grande, S/N",
    metroStations: ["La Latina"],
    openingHours: "Tuesday-Saturday: 11:00-12:30 & 16:00-18:30",
    phone: "913-653-800",
    neighborhood: "La Latina",
    highlights: ["Magnificent 18th-century cupola", "Baroque to neoclassical transition", "Historical architecture"]
  },
  {
    id: "catedral-almudena",
    name: "Catedral de Nuestra Señora de la Almudena",
    category: "Religious Sites", 
    description: "Madrid's cathedral stands in the extension of Plaza de la Armeria next to the Royal Palace.",
    address: "Bailén, S/N",
    metroStations: ["Opera"],
    openingHours: "9:00-21:00",
    phone: "915-422-200",
    neighborhood: "Opera",
    highlights: ["Adjacent to Royal Palace", "Neo-Gothic architecture", "City's main cathedral"]
  },
  {
    id: "plaza-mayor",
    name: "Plaza Mayor",
    category: "Plazas",
    description: "A square with porticoes built between 1617 and 1919. The two most representative buildings are the Casa de la Panadería (Bakers' Guild) and Casa de la Carnicería (Butchers' Guild). In the center stands a statue of Philip III.",
    address: "Plaza Mayor",
    metroStations: ["Sol", "La Latina"],
    neighborhood: "Centro",
    highlights: ["Casa de la Panadería", "Casa de la Carnicería", "Statue of Philip III", "Historic porticoes"]
  },
  {
    id: "el-rastro",
    name: "El Rastro",
    category: "Markets",
    description: "The open air flea market with the longest tradition. All kinds of items at real bargains and antiques at stalls and auction galleries.",
    address: "Ribera de Curtidores & surrounding streets",
    metroStations: ["Tirso de Molina", "Puerta de Toledo"],
    openingHours: "Every Sunday morning. Shops also open on working days",
    neighborhood: "La Latina",
    highlights: ["Historic flea market", "Antiques and bargains", "Traditional Sunday market", "Local atmosphere"]
  },
  {
    id: "teatro-real",
    name: "Teatro Real",
    category: "Theaters",
    description: "Neoclassical building built during the reign of Isabel II (1850) and rebuilt in 1997.",
    address: "Plaza de Oriente, S/N",
    metroStations: ["Opera"],
    openingHours: "Visits - Individuals: Tuesday-Friday 13:00, Weekends & Holidays: 11:30-13:30. Groups by appointment",
    phone: "915-160-660",
    neighborhood: "Opera",
    highlights: ["Neoclassical architecture", "Isabel II era", "Opera house", "Plaza de Oriente location"]
  },
  {
    id: "faro-moncloa",
    name: "Faro de Moncloa",
    category: "Viewpoints",
    description: "General view of Madrid from a height of 92m.",
    address: "Confluencia de la Av. de los Reyes Católicos con La Pl. del Arco de la Victoria",
    metroStations: ["Moncloa"],
    openingHours: "10:00-14:00 & 17:00-19:00. Weekends: 10:30-17:30. Closed Mondays",
    phone: "915-448-104",
    neighborhood: "Moncloa",
    highlights: ["92m height", "Panoramic city views", "Observation tower", "City landmarks viewing"]
  }
];

export const touristServices = [
  {
    name: "Madrid Card",
    description: "Official tourist card providing free entry to major museums and attractions, plus discounts",
    benefits: ["Free museum entry", "Public transport", "Discounts at restaurants", "Skip-the-line access"]
  },
  {
    name: "Tourist Offices",
    description: "Official information points throughout the city",
    locations: ["Plaza Mayor", "Adolfo Suárez Madrid-Barajas Airport", "Atocha Station", "Reina Sofía Museum"]
  }
];

export const getAttractionsByCategory = (category: SightseeingAttraction['category']) => {
  return madridAttractions.filter(attraction => attraction.category === category);
};

export const getAttractionsByNeighborhood = (neighborhood: string) => {
  return madridAttractions.filter(attraction => 
    attraction.neighborhood.toLowerCase().includes(neighborhood.toLowerCase())
  );
};
