
export interface MadridSpecialty {
  name: string;
  description: string;
  whereToFind: string[];
  price: string;
  vegetarian?: boolean;
  mustTry: boolean;
}

export const madridSpecialties: MadridSpecialty[] = [
  {
    name: "Cocido Madrileño",
    description: "Traditional chickpea stew with meat and vegetables, served in three courses",
    whereToFind: ["Taberna La Bola", "Malacatín", "Casa Carola"],
    price: "€20-30",
    mustTry: true
  },
  {
    name: "Callos a la Madrileña",
    description: "Tripe stew with chorizo and blood sausage - not for everyone but authentically Madrid",
    whereToFind: ["Casa Lucio", "Taberna Agrado", "El Landó"],
    price: "€12-18",
    mustTry: false
  },
  {
    name: "Huevos Estrellados",
    description: "Fried eggs over crispy potatoes, often with jamón ibérico",
    whereToFind: ["Casa Lucio", "Taberna Real", "La Sanabresa"],
    price: "€8-15",
    mustTry: true
  },
  {
    name: "Bocadillo de Calamares",
    description: "Fried squid sandwich - Madrid's most famous street food",
    whereToFind: ["La Campana", "Los Gallos", "Bar Postas"],
    price: "€3-5",
    mustTry: true
  },
  {
    name: "Torrijas",
    description: "Spanish French toast, especially popular during Easter",
    whereToFind: ["Malacatín", "Casa Labra", "El Madroño"],
    price: "€4-7",
    mustTry: true
  },
  {
    name: "Patatas Bravas",
    description: "Crispy potatoes with spicy tomato sauce and aioli",
    whereToFind: ["Everywhere - each bar has their own version"],
    price: "€4-8",
    mustTry: true
  },
  {
    name: "Jamón Ibérico",
    description: "Premium cured ham from acorn-fed pigs",
    whereToFind: ["Museo del Jamón", "Casa Mingo", "Lateral"],
    price: "€18-35 per plate",
    mustTry: true
  },
  {
    name: "Gazpacho",
    description: "Cold tomato soup, perfect for hot summer days",
    whereToFind: ["Most restaurants (seasonal)", "Taberna del Alabardero"],
    price: "€6-10",
    vegetarian: true,
    mustTry: true
  }
];
