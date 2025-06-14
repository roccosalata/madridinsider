
import { Cable } from "lucide-react";

export interface Park {
  id: string;
  name: string;
  address?: string;
  description: string;
  phone?: string;
  hours?: string;
  isSpecial?: boolean; // For things like the teleferico link
}

export const parksData: Park[] = [
  {
    id: "casa-de-campo",
    name: "Casa de Campo",
    address: "Casa de Campo Park (Metro: Lago / Casa de Campo)",
    description: "Covering an area of 1,800 hectares, this is the most important open green space in Madrid. Originally created as a hunting ground in 1560 by King Philip II, it was opened to the public in 1931 and is a favorite place for the city's residents to go and relax. Visitors can arrive by cable car, take a trip on the lake and enjoy one of the best views out over the city. A theme park and a Zoo can also be found here."
  },
  {
    id: "retiro-park",
    name: "Retiro Park",
    address: "(Metro: Retiro / Ibiza)",
    description: "The park was originally the garden of the Buen Retiro Palace, which belonged to Philip IV and was completed in 1635. It is the city's most important historical, artistic park and is especially lively on Sunday mornings.",
    hours: "Oct. - May: 6am-10pm"
  },
  {
    id: "royal-botanical-gardens",
    name: "Royal Botanical Gardens",
    address: "Pl. de Murillo, 2 (Metro: Atocha)",
    description: "This garden forms part of the historical site of Madrid of the Bourbons, and is an example of the monarchy at the time of the Enlightenment.",
    hours: "10am-Sunset",
    phone: "914-203-017"
  },
  {
    id: "parque-del-oeste",
    name: "Parque del Oeste / West Park",
    address: "Paseo del Pintor Rosales, S/N (Metro: Moncloa / Arguelles)",
    description: "English landscape style garden, designed by Cecilio Rodriguez at the start of the 20th century."
  },
  {
    id: "jardines-sabatini",
    name: "Jardines de Sabatini",
    address: "Bailen, (Metro: Opera)",
    description: "Geometrically laid out, the privileged location of these gardens offers visitors a magnificent view of the neighboring Royal Palace. They get their name from the Italian architect who designed them and occupy the area originally intended for the Palace stables."
  },
  {
    id: "campo-del-moro",
    name: "Jardines del Campo del Moro (Palacio Real)",
    address: "Paseo Virgen del Puerto (Metro: Principe Pio)",
    description: "These romantic gardens surrounding the Royal Palace were designed in the English landscape style and featured two ornamental fountains, Los Tritones (The Newts) and Las Conchas (The Shells). Broad avenues lead to the western facade of the Palace."
  },
  {
    id: "juan-carlos-i-park",
    name: "Juan Carlos I Park",
    address: "Glorieta de Don Juan de Borbon, S/N (Metro: Campo de las Unidas)",
    description: "Activities in the park: Train journey and trip along the river in a catamaran. Tuesday to Friday in the evening. Saturdays, Sundays and public holidays in the morning and afternoon. Visitors can also fly kites, use remote-controlled boats on the river, and go fishing."
  },
  {
    id: "el-capricho",
    name: "El Capricho",
    address: "Alameda de Osuna (Metro: Canillejas / Campo de las Unidas)",
    description: "With its romantic atmosphere and French flavor, this 18th century garden is one of Madrid's hidden treasures. Its Baroque layout includes a number of squares and fountains and offers the visitor a number of unexpected delights."
  },
  {
    id: "greenhouse-atocha",
    name: "Greenhouse in Atocha Station",
    address: "Glorieta de Atocha, S/N (Metro: Atocha Renfe)",
    description: "One of the most pleasant areas in the city, where travelers and passers-by meet, which could be the ideal resting place after doing the ART WALK."
  },
  {
    id: "crystal-palace-arganzuela",
    name: "Crystal Palace de la Arganzuela",
    address: "Paseo de la Chopera, 10 (Metro: Legazpi)",
    description: "It is 8,400 square meters and gives visitors the feeling of being in a huge greenhouse.",
    hours: "Sat., Sun. & Holiday: 11am-9pm / Closed Mon.",
    phone: "915-886-137"
  },
  {
    id: "estufa-fria",
    name: "Estufa Fria / Green House",
    address: "Near Avenida de Portugal",
    description: "Plants from the Madrid area coexist in this beautiful habitat. Umbraculum, medicinal and ornamental plants, etc., with different on-going and temporary exhibitions.",
    hours: "Tues. - Sun.: 10am-2pm & 5pm-9pm",
    phone: "917-210-079"
  },
  {
    id: "berlin-park",
    name: "Berlin Park",
    address: "Plaza Virgen de Guadalupe, s/n (Metro: Concha Espina)",
    description: ""
  },
  {
    id: "dehesa-de-la-villa",
    name: "Dehesa de la Villa Park",
    address: "Dehesa de la Villa Road (Metro: Moncloa / University City)",
    description: ""
  },
  {
    id: "gardens-of-discovery",
    name: "Gardens of Discovery",
    address: "Plaza de Colon, s/n (Metro: Serrano / Colon)",
    description: ""
  },
  {
    id: "enrique-d-almonte",
    name: "Enrique D' Almonte Park",
    address: "Near O'Donnell / Manuel Becerra",
    description: ""
  }
];
