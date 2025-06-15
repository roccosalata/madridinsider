
export interface InternshipOpportunity {
  name: string;
  description: string;
  website?: string;
  phone?: string;
  address?: string;
  email?: string;
  notes?: string;
  contactPerson?: string;
}

export const internshipOpportunities: InternshipOpportunity[] = [
  {
    name: "Eurointerns",
    description: "Internship programs for learners of Spanish and French.",
    website: "www.eurointerns.com",
    phone: "Tel/fax: (34) 667-838-136; (34) 91-544-4147",
    address: "Calle Gaztambide, 26, 2º - B, 28015 Madrid, Spain"
  },
  {
    name: "Hot English Magazine / Español Ya!",
    description: "Interns (un-paid work) Centrally-located, Madrid-based company seeks interns. The ideal candidate will speak some English and Spanish and be prepared to work hard and to learn. Duration: 2 months to one year. Design / Web Design Intern. Admin / Marketing. A great opportunity to see how a business operates.",
    email: "intern@hotenglishmagazine.com",
    notes: "Quote Design or Admin",
    phone: "91 455 0273"
  },
  {
    name: "In Madrid: Internships",
    description: "If you have an interest in journalism and can spare an hour a day, why not apply for an internship with In Madrid? You will be responsible for fact checking, photo editing, page layout using quark, proofreading and subediting. To apply for a position, send your CV and a writing sample.",
    email: "editor@in-madrid.com",
    website: "www.in-madrid.com"
  },
  {
    name: "J&J Books & Coffee: Internships",
    description: "See their website and contact them for available positions.",
    address: "Espiritu Santo, 47 (Metro: Noviciado)",
    website: "www.jandjbooksandcoffee.com",
    phone: "91 521 8576"
  },
  {
    name: "Map Magazine",
    description: "See their website and write map.director@gmail.com for positions and start dates.",
    address: "Correo, 4, 2-4 (Metro: Sol)",
    website: "www.mapmadrid.com",
    email: "map.director@gmail.com",
  },
  {
    name: "BEST Programs",
    description: "We find 3 month training internships in Spanish firms for university students and post graduates in all sectors. BEST Programs: To improve your linguistic and professional competence in Spain and Belgium. Job Training and Language Learning in Practical Settings in Europe.",
    address: "Solano 11, 3º - C (Pozuelo de Alarcón)",
    contactPerson: "Jill Arcaro-Gordon, Directora",
    phone: "Tel/fax: (34)-91-518-7110; Cell: (34)-637-543-900",
    website: "www.bestprograms.org",
    email: "best@bestprograms.org"
  },
  {
    name: "TCS",
    description: "Company specialized in helping students find internships in Spanish companies.",
    address: "Hilarión Eslava, 38 (Metro: Moncloa)",
    contactPerson: "Esther Rodriguez",
    phone: "Tel-Fax: (34) 915-449-428",
    website: "www.tcs-fss.com",
    email: "tcs@ran.es"
  },
];
