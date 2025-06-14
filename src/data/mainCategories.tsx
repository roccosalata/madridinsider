import { Compass, Home, Eye, Activity, Clock } from 'lucide-react';

export interface MainCategory {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  icon: React.ReactNode;
  subcategories: Array<{
    title: string;
    link: string;
    icon?: React.ReactNode;
  }>;
}

export const mainCategories: MainCategory[] = [
  {
    title: "Madrid Essentials",
    description: "Essential information for tourists and first-time visitors to Madrid.",
    imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=800&auto=format&fit=crop",
    link: "/madrid-essentials",
    icon: <Compass className="h-6 w-6" aria-hidden="true" />,
    subcategories: [
      { title: "Getting Started Guide", link: "/madrid-essentials/getting-started" },
      { title: "Transport & Maps", link: "/madrid-essentials/transport-maps" },
      { title: "Weather & Climate", link: "/madrid-essentials/weather" },
      { title: "Currency & Money", link: "/madrid-essentials/currency" },
      { title: "Language Basics", link: "/madrid-essentials/language" },
      { title: "Safety Tips", link: "/madrid-essentials/safety" },
      { title: "Emergency Contacts", link: "/madrid-essentials/emergency" },
      { title: "Tourist Information", link: "/madrid-essentials/tourist-info" }
    ]
  },
  {
    title: "Living in Madrid",
    description: "Practical information for residents, students, and expats making Madrid their home.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop",
    link: "/living-in-madrid",
    icon: <Home className="h-6 w-6" aria-hidden="true" />,
    subcategories: [
      { title: "Paperwork & NIE/TIE", link: "/living-in-madrid/paperwork" },
      { title: "Finding Accommodation", link: "/living-in-madrid/accommodation" },
      { title: "Banking & Finances", link: "/living-in-madrid/banking" },
      { title: "Healthcare", link: "/living-in-madrid/healthcare" },
      { title: "Internet & Utilities", link: "/living-in-madrid/utilities" },
      { title: "Working in Madrid", link: "/living-in-madrid/work" },
      { title: "Education & Schools", link: "/living-in-madrid/education" }
    ]
  },
  {
    title: "See in Madrid",
    description: "Discover Madrid's incredible sights, from world-class museums to hidden architectural gems.",
    imageUrl: "https://images.unsplash.com/photo-1577782853630-673eafa2c209?q=80&w=800&auto=format&fit=crop",
    link: "/see-in-madrid",
    icon: <Eye className="h-6 w-6" aria-hidden="true" />,
    subcategories: [
      { title: "Museums & Galleries", link: "/see-in-madrid/museums" },
      { title: "Royal Sites & Palaces", link: "/see-in-madrid/sightseeing" },
      { title: "Historic Sites & Monuments", link: "/see-in-madrid/sightseeing" },
      { title: "Parks & Gardens", link: "/see-in-madrid/parks" },
      { title: "Neighborhoods Guide", link: "/see-in-madrid/neighborhoods" },
      { title: "Viewpoints & Rooftops", link: "/see-in-madrid/sightseeing" }
    ]
  },
  {
    title: "Do in Madrid",
    description: "Experience Madrid's vibrant culture through food, nightlife, shopping, entertainment, and wellness activities.",
    imageUrl: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?q=80&w=800&auto=format&fit=crop",
    link: "/do-in-madrid",
    icon: <Activity className="h-6 w-6" aria-hidden="true" />,
    subcategories: [
      { title: "Food & Dining", link: "/do-in-madrid/food-drink" },
      { title: "Nightlife & Bars", link: "/do-in-madrid/nightlife" },
      { title: "Shopping Districts", link: "/do-in-madrid/shopping" },
      { title: "Markets & Flea Markets", link: "/do-in-madrid/markets" },
      { title: "Entertainment & Shows", link: "/do-in-madrid/entertainment" },
      { title: "Sports & Recreation", link: "/do-in-madrid/sports" },
      { title: "Yoga & Wellness Activities", link: "/do-in-madrid/yoga-wellness" },
      { title: "Health Clubs & Gyms", link: "/do-in-madrid/yoga-wellness" },
      { title: "Health Food Stores", link: "/do-in-madrid/food-drink" },
      { title: "Vegetarian Food", link: "/do-in-madrid/food-drink" }
    ]
  },
  {
    title: "Madrid Now",
    description: "Current events, weather, and what's happening in Madrid right now.",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    link: "/madrid-now",
    icon: <Clock className="h-6 w-6" aria-hidden="true" />,
    subcategories: [
      { title: "Weather Today", link: "/madrid-now/weather-today" },
      { title: "Current Events", link: "/madrid-now/current-events" },
      { title: "What's On", link: "/madrid-now/whats-on" },
      { title: "Live Updates", link: "/madrid-now/live-updates" }
    ]
  }
];
