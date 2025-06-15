export interface PlaceOfWorship {
  name: string;
  religion: string;
  address: string;
  phone?: string;
  website?: string;
  notes?: string;
}

export const religions: PlaceOfWorship[] = [
  {
    name: "St. George's Anglican Church",
    religion: "Anglican/Episcopal",
    address: "Nuñez de Balboa, 43 (Metro: Serrano)",
    phone: "91 576 5109",
    website: "https://www.stgeorgesmadrid.com",
    notes: "Part of the British Embassy"
  },
  {
    name: "Community Church of Madrid",
    religion: "Christian (Interdenominational)",
    address: "Calle de la Viña, 3 (Metro: Metropolitano)",
    phone: "655 031 857",
    website: "http://www.communitychurchmadrid.org",
    notes: "Services on Sundays at 11 a.m."
  },
  {
    name: "Madrid Presbyterian Church",
    religion: "Presbyterian",
    address: "Apartado 168 (Las Rozas)",
    phone: "916 302 258",
    website: "http://www.madridpres.org",
    notes: "Christ-centered & Biblically Reformed Ministry. Contact: MPM@MadridPres.org"
  },
  {
    name: "Madrid International Church",
    religion: "Christian",
    address: "Matilde Hernandez, 31, Bajo B (Metro: Oporto)",
    phone: "626 621 734",
    website: "http://www.madridinternationalchurch.net",
    notes: "Services on Sundays at 11:30am."
  },
  {
    name: "Immanuel Baptist Church",
    religion: "Baptist",
    address: "Hernandez de Tejada, 4 (Metro: Arturo Soria)",
    phone: "914 074 347",
    website: "http://www.ibcmadrid.com"
  },
  {
    name: "Mountainview International Church",
    religion: "Christian",
    address: "Contact for location details.",
    phone: "916 303 189",
    website: "http://www.mountainview-church.com",
    notes: "Email: troy@mountainview-church.com"
  },
  {
    name: "Chapel of Our Lady of Mercy",
    religion: "Catholic",
    address: "Dracena, 23 (Metro: Pio XII)",
    phone: "91 416 9009",
    notes: "Mass offered in English"
  },
  {
    name: "Synagogue Beth Yaacov",
    religion: "Judaism",
    address: "Balmes, 3 (Metro: Iglesias)",
    phone: "91 445 9843",
    notes: "Main Orthodox synagogue in Madrid."
  },
  {
    name: "Islamic Cultural Center of Madrid",
    religion: "Islam",
    address: "Salvador de Madariaga, 4 (Metro: Barrio de la Concepcion)",
    phone: "91 326 2610",
    notes: "Also known as the M-30 Mosque."
  },
  {
    name: "Mokusan Zen Dojo",
    religion: "Buddhism (Zen)",
    address: "Madera, 25 (Metro: Noviciado)",
    phone: "91 522 7138 / 659 771 040"
  }
];
