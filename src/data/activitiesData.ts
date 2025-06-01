
export interface Activity {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  address?: string;
  hours?: string;
  website?: string;
  imageUrl?: string;
  tags?: string[];
  price?: string;
}

export const activities: Activity[] = [
  {
    id: "flamenco-show",
    name: "Traditional Flamenco Show",
    category: "Entertainment",
    shortDescription: "Experience authentic Spanish flamenco with passionate dancing, guitar, and singing.",
    address: "Various venues throughout Madrid",
    hours: "Evening shows typically 20:00-22:00",
    imageUrl: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?q=80&w=1000&auto=format&fit=crop",
    tags: ["Culture", "Music", "Dance", "Evening"],
    price: "€25-50"
  },
  {
    id: "tapas-tour",
    name: "Madrid Tapas Walking Tour",
    category: "Food & Drink",
    shortDescription: "Discover Madrid's best tapas bars and traditional Spanish cuisine with a local guide.",
    hours: "Daily tours at 18:00",
    imageUrl: "https://images.unsplash.com/photo-1551896235-94561d5d3fcc?q=80&w=1000&auto=format&fit=crop",
    tags: ["Food", "Walking", "Local Experience"],
    price: "€35-60"
  },
  {
    id: "city-bike-tour",
    name: "Madrid City Bike Tour",
    category: "Outdoor Activities",
    shortDescription: "Explore Madrid's highlights on two wheels with this guided bicycle tour.",
    hours: "Daily at 10:00 and 15:00",
    imageUrl: "https://images.unsplash.com/photo-1558618047-fd3c60444949?q=80&w=1000&auto=format&fit=crop",
    tags: ["Cycling", "Sightseeing", "Active"],
    price: "€25-40"
  }
];
