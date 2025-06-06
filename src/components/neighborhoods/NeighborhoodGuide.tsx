
import React from 'react';

const NeighborhoodGuide = () => {
  const livingGuide = [
    {
      category: "Best for Families",
      areas: ["Salamanca", "Chamberí", "Moncloa", "Hortaleza", "Suburbs (Majadahonda, Pozuelo)"],
      reasons: ["Good schools", "Parks nearby", "Safe streets", "Family amenities", "Larger apartments with garages"]
    },
    {
      category: "Best for Students",
      areas: ["Malasaña", "Lavapiés", "Moncloa", "Chamberí", "Centro"],
      reasons: ["Affordable rent", "University proximity", "Young atmosphere", "Cheap dining", "Cultural activities"]
    },
    {
      category: "Best for Professionals",
      areas: ["Salamanca", "Chamberí", "Chamartín", "Sol/Centro", "Las Cortes"],
      reasons: ["Business district access", "Good transport", "Professional services", "Networking opportunities"]
    },
    {
      category: "Best for Nightlife",
      areas: ["Malasaña", "Chueca", "La Latina", "Huertas", "Gran Vía"],
      reasons: ["Bar density", "Late hours", "Variety of venues", "Walking distance", "Party atmosphere"]
    },
    {
      category: "Budget-Friendly Areas",
      areas: ["Arganzuela", "Cuatro Caminos/Tetuán", "Lavapiés", "Barrio del Pilar", "Fuencarral"],
      reasons: ["Low rent prices", "Good value", "Authentic local life", "Growing areas", "Transport connections"]
    },
    {
      category: "Tourist & Short-term Stay",
      areas: ["Sol", "Centro", "Huertas", "La Latina", "Opera"],
      reasons: ["Central location", "Tourist attractions", "Easy navigation", "Cultural activities", "Transport hubs"]
    }
  ];

  return (
    <section className="bg-slate-50 p-6 rounded-lg">
      <h3 className="font-bold text-xl mb-4">Neighborhood Selection Guide</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {livingGuide.map((guide, index) => (
          <div key={index} className="bg-white p-4 rounded-md">
            <h4 className="font-semibold mb-2 text-madrid-red">{guide.category}</h4>
            <div className="mb-3">
              <strong className="text-sm">Recommended areas:</strong>
              <p className="text-sm text-gray-600 mt-1">{guide.areas.join(", ")}</p>
            </div>
            <ul className="text-sm space-y-1">
              {guide.reasons.map((reason, i) => (
                <li key={i} className="text-gray-600">• {reason}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NeighborhoodGuide;
