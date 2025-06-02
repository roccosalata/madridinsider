
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
    address: "Calle de Núñez de Balboa, 43, 28001 Madrid",
    phone: "+34 91 576 5109",
    website: "https://www.stgeorgesmadrid.com",
    notes: "English-speaking congregation"
  },
  {
    name: "Madrid Islamic Cultural Center",
    religion: "Islam",
    address: "Calle de Salvador de Madariaga, s/n, 28027 Madrid",
    phone: "+34 91 326 2610",
    notes: "Main mosque in Madrid"
  },
  {
    name: "Synagogue Beth Yaacov",
    religion: "Judaism",
    address: "Calle de Balmes, 3, 28010 Madrid",
    phone: "+34 91 445 9843",
    notes: "Orthodox synagogue"
  }
];
