
export interface Sight {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  address?: string;
  hours?: string;
  website?: string;
  imageUrl?: string;
  tags?: string[];
}

export const sights: Sight[] = [
  {
    id: "prado-museum",
    name: "Prado Museum",
    category: "Museum",
    shortDescription: "One of the world's premier art galleries, featuring masterpieces by Velázquez, Goya, and El Greco.",
    address: "Calle de Ruiz de Alarcón, 23, 28014 Madrid",
    hours: "Monday to Saturday 10:00-20:00, Sunday 10:00-19:00",
    website: "https://www.museodelprado.es",
    imageUrl: "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=1000&auto=format&fit=crop",
    tags: ["Art", "Culture", "Must-see"]
  },
  {
    id: "retiro-park",
    name: "Retiro Park",
    category: "Park",
    shortDescription: "Madrid's most famous park, perfect for strolling, boating, and enjoying outdoor activities.",
    address: "Plaza de la Independencia, 7, 28001 Madrid",
    hours: "Daily 6:00-24:00",
    imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=1000&auto=format&fit=crop",
    tags: ["Nature", "Recreation", "Family-friendly"]
  },
  {
    id: "royal-palace",
    name: "Royal Palace of Madrid",
    category: "Historic Site",
    shortDescription: "The official residence of the Spanish royal family, featuring stunning architecture and gardens.",
    address: "Calle de Bailén, s/n, 28071 Madrid",
    hours: "Daily 10:00-18:00 (October-March), 10:00-20:00 (April-September)",
    website: "https://www.patrimonionacional.es",
    imageUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=1000&auto=format&fit=crop",
    tags: ["Historic", "Architecture", "Must-see"]
  }
];
