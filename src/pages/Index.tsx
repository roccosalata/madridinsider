const mainCategories = [
  {
    title: "Madrid Essentials",
    description: "Your starting point: Immediate needs, general information, and practical tips for visitors.",
    imageUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=1000&auto=format&fit=crop", // Placeholder
    link: "/madrid-essentials",
    icon: <Compass className="h-6 w-6" />,
    subcategories: [
      { title: "Getting Around", link: "/madrid-essentials/getting-around" },
      { title: "Money & Banking", link: "/madrid-essentials/money-banking" },
      { title: "Communication", link: "/madrid-essentials/communication" },
      { title: "Basic Spanish Phrases", link: "/madrid-essentials/basic-spanish-phrases" },
      { title: "Safety Tips", link: "/madrid-essentials/safety-tips" },
      { title: "Tourist Information Centers", link: "/madrid-essentials/tourist-information-centers" },
      { title: "City Layout & Key Areas", link: "/madrid-essentials/city-layout" },
    ],
  },
  {
    title: "Living in Madrid",
    description: "Essential information and resources for residents, students, and expats.",
    imageUrl: "https://images.unsplash.com/photo-1551896235-94561d5d3fcc?q=80&w=1000&auto=format&fit=crop", // Placeholder
    link: "/living-in-madrid",
    icon: <Home className="h-6 w-6" />,
    subcategories: [
      { title: "Accommodation", link: "/living-in-madrid/accommodation" },
      { title: "Visas & Residency", link: "/living-in-madrid/visas-residency" },
      { title: "Working in Madrid", link: "/living-in-madrid/working" },
      { title: "Studying in Madrid", link: "/living-in-madrid/studying" },
      { title: "Healthcare", link: "/living-in-madrid/healthcare" },
      { title: "Opening a Bank Account", link: "/living-in-madrid/banking" },
      { title: "Utilities", link: "/living-in-madrid/utilities" },
      { title: "Spanish Bureaucracy & Paperwork", link: "/living-in-madrid/bureaucracy" },
    ],
  },
  {
    title: "See & Do",
    description: "Discover Madrid's attractions, activities, neighborhoods, and experiences.",
    imageUrl: "https://images.unsplash.com/photo-1577782853630-673eafa2c209?q=80&w=1000&auto=format&fit=crop", // Placeholder
    link: "/see-do",
    icon: <Star className="h-6 w-6" />,
    subcategories: [
      { title: "Attractions & Landmarks", link: "/see-do/attractions-landmarks" },
      { title: "Neighborhood Guides", link: "/see-do/neighborhood-guides" },
      { title: "Day Trips from Madrid", link: "/see-do/day-trips" },
      { title: "Activities & Experiences", link: "/see-do/activities-experiences" },
      { title: "Shopping", link: "/see-do/shopping" },
      { title: "Sports & Recreation", link: "/see-do/sports-recreation" },
    ],
  },
  {
    title: "Eat & Drink",
    description: "A guide to Madrid's vibrant culinary scene, from tapas to nightlife.",
    imageUrl: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?q=80&w=1000&auto=format&fit=crop", // Placeholder
    link: "/eat-drink",
    icon: <Utensils className="h-6 w-6" />,
    subcategories: [
      { title: "Restaurants", link: "/eat-drink/restaurants" },
      { title: "Tapas Bars", link: "/eat-drink/tapas-bars" },
      { title: "Cafes & Bakeries", link: "/eat-drink/cafes-bakeries" },
      { title: "Markets", link: "/eat-drink/markets" },
      { title: "Madrid Specialties", link: "/eat-drink/madrid-specialties" },
      { title: "Nightlife", link: "/eat-drink/nightlife" },
    ],
  },
  {
    title: "Arts & Culture / Entertainment",
    description: "Explore Madrid's museums, galleries, live performances, and events.",
    imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=1000&auto=format&fit=crop", // Placeholder
    link: "/arts-culture-entertainment",
    icon: <div className="flex space-x-1">
      <Calendar className="h-5 w-5" />
      <Clock className="h-5 w-5" />
      <CloudSun className="h-5 w-5" />
    </div>, // Using combined icons for now
    subcategories: [
      { title: "Museums & Galleries", link: "/arts-culture-entertainment/museums-galleries" },
      { title: "Live Music & Concerts", link: "/arts-culture-entertainment/live-music-concerts" },
      { title: "Theater & Performances", link: "/arts-culture-entertainment/theater-performances" },
      { title: "Cinema", link: "/arts-culture-entertainment/cinema" },
      { title: "Events & Festivals", link: "/arts-culture-entertainment/events-festivals" }, // This can link to Madrid Now content
    ],
  },
];
