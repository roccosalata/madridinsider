
export interface FilmResource {
  name: string;
  description?: string;
  address?: string;
  metro?: string;
  website?: string;
  phone?: string;
  email?: string;
}

export const filmResources: FilmResource[] = [
  {
    name: "FAPAE",
    description: "Federación de Asociaciones de Productores Audiovisuales Españoles",
    website: "www.fapae.es",
  },
  {
    name: "ECAM",
    address: "Junan de Orduña, 3, Ciudad del Imagen, Pozuelo de Alarcón",
    website: "www.ecam.es",
    phone: "91 512 1074",
  },
  {
    name: "TAI",
    address: "Serrano Anguita, 10",
    metro: "Alonso Martinez",
    website: "www.escuelatai.com",
    phone: "91 447 2055",
  },
  {
    name: "Séptima Ars",
    address: "Fuente del Saz, 5",
    metro: "Conch Espina",
    website: "www.septima-ars.com",
    phone: "91 457 2311 / 91 457 7973",
  },
  {
    name: "Centro Cultural de Conde Duque",
    address: "Conde Duque, 9-11",
    metro: "Arguelles / San Bernardo",
    phone: "91 588 5834",
  },
  {
    name: "Film Business School",
    address: "Velázquez, 14, Bajo-D",
    metro: "Velázquez",
    email: "fbs@mediaschool.org",
    phone: "91 575 9583",
  },
  {
    name: "Ocho y Medio",
    address: "Martin de los Heros, 11",
    metro: "Plaza España",
    website: "www.ochoymedio.com",
    phone: "91 559 0628",
  },
  {
    name: "Unión de Actores",
    address: "Marques de Valdeiglesias, 5, 1º",
    metro: "Banco de España",
    website: "www.uniondeactores.com",
    phone: "91 523 0547",
  },
  {
    name: "Audio Contact International",
    address: "Pl de Matute, 12",
    metro: "Anton Martin",
    phone: "91 521 2229",
  },
];
