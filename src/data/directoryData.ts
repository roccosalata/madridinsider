
// This file contains all the directory categories and subcategories for the Madrid Insider website

export interface PlaceOfWorship {
 name: string;
 denomination?: string;
 address: string;
 phone?: string;
 website?: string;
 notes?: string;
}

export const directoryData = {
  "Madrid Essentials": {
    "First-Timer Information": [
      "Essential Tips for Visitors",
      "Getting Oriented in Madrid",
      "Basic Spanish Phrases",
      "Currency & Money Exchange",
      "Tipping Culture",
      "Business Hours & Holidays",
    ],
    "Maps & Navigation": [
      "Metro Map & Guide",
      "Bus Routes",
      "Walking Maps",
      "Neighborhood Maps",
      "Tourist Maps",
    ],
    "Weather & Best Time to Visit": [
      "Seasonal Weather Guide",
      "What to Pack",
      "Best Months to Visit",
      "Seasonal Events",
    ],
    "Emergency & Safety": [
      "Emergency Contacts (112)",
      "Police Stations",
      "Hospitals & Medical",
      "Embassy Contacts",
      "Tourist Police",
    ],
    "Essential Services": [
      "Post Office & Mail",
      "Internet & WiFi",
      "Phone & SIM Cards",
      "Currency Exchange",
    ],
  },
  "Living in Madrid": {
    "Accommodation": [
      "Finding an Apartment",
      "Shared Flats & Rooms",
      "Student Housing",
      "Temporary Accommodation",
      "Real Estate Agencies",
    ],
    "Paperwork & Legal": [
      "NIE Number Application",
      "TIE Card (Residence)",
      "Social Security Registration",
      "Tax Registration",
      "Work Permits",
      "EU Citizens Guide",
      "Non-EU Citizens Guide",
    ],
    "Banking & Finances": [
      "Opening a Bank Account",
      "Spanish Banks Comparison",
      "Credit Cards",
      "Money Transfers",
      "Tax Obligations",
    ],
    "Healthcare System": [
      "Public Healthcare Registration",
      "Private Healthcare Options",
      "Finding a Doctor",
      "Pharmacies Guide",
      "Emergency Medical Care",
    ],
    "Education & Childcare": [
      "Public Schools",
      "Private & International Schools",
      "University Information",
      "Daycare & Nurseries",
      "After-School Activities",
    ],
    "Working in Madrid": [
      "Job Search Resources",
      "Teaching English",
      "Freelancing & Autonomo",
      "Workplace Culture",
      "Networking Events",
    ],
    "Daily Life Services": [
      "Internet & Utilities Setup",
      "Mobile Phone Plans",
      "Home Services",
      "Shopping for Essentials",
      "Public Transport Passes",
    ],
    "Community & Integration": [
      "Expat Communities",
      "Language Exchange",
      "Cultural Integration",
      "Social Groups & Meetups",
      {
        name: "British Embassy Church (St. George's)",
        denomination: "Anglican",
        address: "Nuñez de Balboa, 43 (Metro: Serrano)",
        phone: "91 576 5109",
      },
      {
        name: "Community Church of Madrid",
        denomination: "Community Church",
        address: "Calle de la Viña, 3 (Metro: Metropolitano)",
        notes: "Sundays at 11 a.m.",
        website: "https://www.communitychurchmadrid.org",
        phone: "655-031-857",
      },
      {
        name: "Madrid Presbyterian Church",
        denomination: "Presbyterian",
        address: "Apartado 168 (Las Rozas)",
        notes: "Serving Madrid's International English Speaking Community with a Christ centered & Biblically Reformed Ministry. Rev. JT Campbell Jr., Pastor. Email: MPM@MadridPres.org",
        phone: "916-302-258",
        website: "https://www.madridpres.org",
      },
      {
        name: "Madrid International Church",
        denomination: "International Christian",
        address: "Matilde Hernandez, 31, Bajo B (Metro: Oporto)",
        notes: "Sundays at 11:30am.",
        website: "https://www.madridinternationalchurch.net",
        phone: "626 621 734",
      },
    ],
  },
  "See in Madrid": {
    "Iconic Sights & Landmarks": [
      "Royal Palace",
      "Prado Museum",
      "Retiro Park",
      "Plaza Mayor",
      "Puerta del Sol",
      "Temple of Debod",
      "Almudena Cathedral",
    ],
    "Museums & Galleries": [
      "Prado Museum",
      "Reina Sofia Museum", 
      "Thyssen Museum",
      "Archaeological Museum",
      "Naval Museum",
      "Art Galleries",
    ],
    "Parks & Green Spaces": [
      "Retiro Park",
      "Casa de Campo",
      "Madrid Rio",
      "El Capricho Park",
      "Juan Carlos I Park",
    ],
    "Architecture & Buildings": [
      "Historic Architecture",
      "Modern Buildings",
      "Religious Buildings",
      "Government Buildings",
    ],
    "Neighborhoods Guide": [
      "Centro/Sol",
      "Malasaña",
      "Chueca", 
      "La Latina",
      "Salamanca",
      "Barrio de las Letras",
    ],
    "Day Trips from Madrid": [
      "Toledo",
      "Segovia", 
      "El Escorial",
      "Aranjuez",
      "Alcalá de Henares",
    ],
  },
  "Do in Madrid": {
    "Entertainment & Culture": [
      "Flamenco Shows",
      "Theater & Concerts",
      "Live Music Venues",
      "Comedy Shows",
      "Cinema & Movies",
    ],
    "Sports & Recreation": [
      "Football (Real Madrid/Atletico)",
      "Basketball",
      "Tennis",
      "Golf",
      "Swimming",
      "Cycling",
      "Running Routes",
    ],
    "Shopping": [
      "Shopping Districts", 
      "Markets & Flea Markets",
      "Department Stores",
      "Local Crafts",
      "Fashion & Clothing",
    ],
    "Nightlife & Social": [
      "Bars & Pubs",
      "Nightclubs",
      "Rooftop Bars",
      "Wine Bars",
      "Beer Gardens",
    ],
    "Food & Dining": [
      "Traditional Spanish Cuisine",
      "International Restaurants",
      "Tapas Bars",
      "Fine Dining",
      "Casual Dining",
      "Food Markets",
    ],
    "Health & Wellness": [
      "Gyms & Fitness",
      "Spas & Wellness Centers",
      "Yoga & Meditation",
      "Medical Services",
      "Pharmacies",
    ],
    "Transportation": [
      "Metro System",
      "Bus Routes",
      "Taxi Services",
      "Car Rental",
      "Bike Sharing",
      "Airport Transport",
    ],
  },
  "Madrid Now": {
    "Current Events & What's On": [
      "Today's Events",
      "This Week in Madrid",
      "Festival Calendar",
      "Concert Listings",
      "Theater Shows",
      "Art Exhibitions",
    ],
    "Time & Weather": [
      "Current Time in Madrid",
      "Weather Forecast",
      "Seasonal Information",
      "Best Times to Visit",
    ],
    "News & Updates": [
      "Local News",
      "Transportation Updates",
      "Construction & Closures",
      "Emergency Notices",
    ],
    "Temporary Information": [
      "Holiday Hours",
      "Special Events",
      "Limited Time Offers",
      "Seasonal Activities",
    ],
  },
};
