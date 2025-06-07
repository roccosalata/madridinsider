
import { Barrio } from '../types/barrio';

export const northernBarrios: Barrio[] = [
  {
    name: "Barrio del Pilar",
    description: "A residential area with reasonable rents and one of Madrid's few shopping malls/centers 'La Vaguada.'",
    character: "Suburban residential, family-oriented, quiet",
    priceLevel: "Medium",
    safety: "Very safe, family area",
    bestFor: ["Families", "Shopping", "Quiet living", "Budget-conscious residents"],
    metroStations: ["Barrio del Pilar"],
    highlights: ["La Vaguada shopping center", "Family-friendly", "Affordable housing", "Good schools nearby"]
  },
  {
    name: "Chamartín",
    description: "A well communicated area with prices that range from medium to high.",
    character: "Business district, well-connected, upscale residential",
    priceLevel: "High",
    safety: "Very safe, business area",
    bestFor: ["Business professionals", "Train travelers", "Upper-middle class families"],
    metroStations: ["Alfonso XII", "Prosperidad", "República Argentina"],
    highlights: ["Excellent transport connections", "Business district", "Modern buildings", "Train station proximity"]
  },
  {
    name: "Chamberí",
    description: "A typical student area, very central and well communicated, with lots of old apartments, most of which have been renovated recently.",
    character: "Student-friendly, central, renovated historic buildings",
    priceLevel: "Medium",
    safety: "Very safe, well-patrolled",
    bestFor: ["Students", "Young professionals", "Those wanting central location"],
    metroStations: ["Alonso Cano", "Bilbao", "Iglesia"],
    highlights: ["Central location", "Renovated apartments", "Student atmosphere", "Good transport", "Local restaurants"]
  },
  {
    name: "Cuatro Caminos / Tetuán",
    description: "Cheap and not far from el Parque del Retiro, well communicated. However, being relatively inexpensive, it's home to many immigrants and can be conflictive, particularly at night.",
    character: "Multicultural, affordable, working class, diverse",
    priceLevel: "Low",
    safety: "Exercise caution at night, generally safe during day",
    bestFor: ["Budget living", "Multicultural experience", "Students", "Young immigrants"],
    metroStations: ["Cuatro Caminos", "Tetuán"],
    highlights: ["Very affordable", "Near Retiro Park", "Good transport", "Multicultural food"],
    warnings: ["Can be conflictive at night", "Less tourist-friendly"]
  },
  {
    name: "Fuencarral",
    description: "To the North of Madrid, not central, but prices are not terribly high, and it is a safe area. Not far from Barrio del Pilar.",
    character: "Suburban, safe, residential, northern location",
    priceLevel: "Medium",
    safety: "Very safe area",
    bestFor: ["Families", "Safe living", "Moderate budgets", "Suburban lifestyle"],
    metroStations: ["Fuencarral", "Herrera Oria"],
    highlights: ["Safe environment", "Reasonable prices", "Residential feel", "Family-friendly"]
  }
];
