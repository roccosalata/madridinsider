
// This file contains all the directory categories and subcategories for the Madrid Insider website

export interface PlaceOfWorship {
 name: string;
 denomination?: string;
 address: string;
 phone?: string;
 website?: string;
 notes?: string;
}
export const directoryData: {
  "Madrid Life": {
    "Accommodation": [
      "1 or More Weeks: Rooms in Shared Flats Booking",
      "A Do it Yourself Guide",
      "Apart-Hotels",
      "Hostels",
      "Hotels",
    ],
    "Paperwork & Administration": [
      "USA Citizens in Spain",
      "Visa: UK",
      "Visa: USA",
      "Banks",
    ],
    "Student Life": [
      "Bilingual / English Schools",
      "1st & 2nd English Language Certificate",
      "Language Schools",
      "Escuela Oficial de Idiomas",
      "Teacher Training",
      "Language Exchanges",
      "Libraries",
      "Film & Theater",
    ],
    "Work & Residency": [
      "English Teacher Agencies",
      "Teach in Spain",
      "English Teacher Advice", // Moved from both original "Work Opportunities" and "Teaching"
      "Aupair",
      "Internships",
      "Journalism / Writing",
      "Film Resources",
      "Hostess / Azafatas",
      "Talent Agencies",
    ],
    "General Information": [
      "Areas / Barrios",
      "Links",
      "Message Boards",
      "Translating"
    ],
    "Community & Culture": [
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
        notes: "Serving Madrid`s International English Speaking Community with a Christ centered & Biblically Reformed Ministry. Rev. JT Campbell Jr., Pastor. Email: MPM@MadridPres.org",
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
    ]
  },
 "Getting Around": {
    "Travel & Transport": [
      "Airport (Madrid Barajas)",
      "Airport Shuttle Service",
      "Major Airlines",
      "Bus Stations / Companies",
      "Buses (General)",
      "Buses from Madrid to...",
      "Driving",
      "Metro Madrid",
      "Taxi Cab Companies",
      "Taxis: Basic Guideline",
      "Trains",
      "Eurail Passes",
      "Luggage Storage",
    ],
  },
 "See, Do & Explore": {
    "Sightseeing": [
      "Bus Tours",
      "Madrid Card",
      "Tourist Offices (Madrid)",
      "Tours (Other)",
      "Walking & Seg Tours",
      "Cool Neighborhoods",
      "Parks, Gardens, etc.",
      "Places of Interest",
      "Teleferico (Sky Lift)",
    ],
    "Arts & Entertainment": [
      "Bullfights",
      "Flamenco Shows",
      "Magic & Comedy",
      "Theater (live)",
      "Theater (live) - Alternative",
      "Museums: El Prado",
      "Museums: Reina Sofia",
      "Museums: Thyssen",
      "Photo Galleries",
      "IMAX / Planetarium",
      "Movie Titles",
      "Outdoor Summer Movies",
      "Version Original Cinemas",
      "Production Services",
      "Radio (English)",
    ],
    "Socializing & Fun": [
      "Night Clubs & Dancing",
      "Salsa Dancing",
      "Theme Parks",
      "Zoo / Aquarium",
    ],
    "Sports & Recreation": [
      "Basketball (Baloncesto)",
      "Soccer (Football)",
      "Bikes (Cycling)",
      "Boating",
      "Bowling",
      "Golf",
      "Pool (Billiards)",
      "Skating",
      "Skiing / Snowboarding",
      "Tennis",
      "Swimming Pools",
      "Water Parks",
    ],
  },
 "Eat & Drink": {
    "Food & Drink": [
      "Menu del dia for €6 to €10",
      "Diners",
      "Vegetarian Food",
      "Bars, Cafés & Cocktails",
      "Health Food Stores",
    ],
  },
 "Health & Medical": { // Added Health & Medical section with subcategories
    "Emergency Services": [
      "Emergency Number (112)",
      "Medical Emergencies",
      "Police",
      "Fire Department"
    ],
    "Hospitals & Clinics": [
      "Finding a Hospital or Clinic",
      "List of Hospitals (Public and Private)",
      "International Clinics"
    ],
    "Pharmacies": [
      "Finding a Pharmacy (Farmacia)",
      "24-hour Pharmacies",
      "What to buy at a Spanish Pharmacy"
    ],
    "Specialists": [
      "Finding a Medical Specialist",
      "Dentists",
      "Optometrists"
    ],
    "Health Insurance": ["Health Insurance Options for Residents", "Travel Insurance for Visitors"],
    "Other Health Information": ["Vaccinations", "Common Health Concerns in Spain", "Health and Wellness Resources"],
  },
};
