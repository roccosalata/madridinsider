
import { Barrio } from '../types/barrio';

export const otherBarrios: Barrio[] = [
  {
    name: "Arganzuela",
    description: "An old, traditionally working class area in the South of the city with very reasonable rents, but not very attractive from the touristy point of view.",
    character: "Traditional working class, affordable, residential",
    priceLevel: "Low",
    safety: "Generally safe, residential area",
    bestFor: ["Budget living", "Authentic local life", "Young professionals starting out"],
    metroStations: ["Delicias", "Legazpi"],
    highlights: ["Very affordable rent", "Traditional Madrid atmosphere", "Good transport connections", "Local markets"]
  },
  {
    name: "Hortaleza",
    description: "A little far from Parque del Retiro but good for students with families looking for residential area - apartments usually have garages and swimming pools.",
    character: "Residential, family-oriented, suburban amenities",
    priceLevel: "Medium",
    safety: "Very safe, residential",
    bestFor: ["Families with children", "Students with families", "Those wanting amenities"],
    metroStations: ["Arturo Soria", "Mar de Cristal"],
    highlights: ["Apartments with garages", "Swimming pools", "Residential atmosphere", "Family-friendly", "Calle Arturo Soria shopping"]
  },
  {
    name: "Moncloa",
    description: "One of the areas favored by students in the capital. Large number of university and postgraduate students live and socialize there. Very well communicated thanks to the Moncloa bus terminal.",
    character: "University area, student-focused, well-connected",
    priceLevel: "Medium",
    safety: "Very safe, university area",
    bestFor: ["University students", "Postgraduate students", "Academic life", "Budget-conscious students"],
    metroStations: ["Moncloa", "Ciudad Universitaria"],
    highlights: ["University proximity", "Student community", "Bus terminal", "Academic atmosphere", "Student prices", "Faro de Moncloa viewpoint"]
  },
  {
    name: "Prosperidad",
    description: "Near Barrio Salamanca and quite reasonably priced, except for new buildings which tend to be more expensive.",
    character: "Residential, accessible, mixed pricing",
    priceLevel: "Medium",
    safety: "Very safe area",
    bestFor: ["Moderate budgets", "Residential living", "Good transport access"],
    metroStations: ["Avenida de América", "Alfonso XIII", "Cartagena"],
    highlights: ["Near Salamanca district", "Good transport", "Reasonable prices", "Residential feel"]
  }
];
