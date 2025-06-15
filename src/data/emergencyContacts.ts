
export interface EmergencyContact {
  service: string;
  phone: string;
  description: string;
}

export interface ImportantContact {
  service: string;
  phone: string;
  address?: string;
  description?: string;
}

export interface PoliceStation {
  name: string;
  address: string;
  phone: string;
  district: string;
}

export interface LostPropertyOffice {
    name: string;
    address: string;
    phone: string;
}

export const emergencyContacts: EmergencyContact[] = [
  {
    service: "General Emergencies (Police, Fire, Ambulance, SAMUR)",
    phone: "112",
    description: "Main emergency number for any situation. Tourist helpline and public safety."
  },
  {
    service: "Medical Emergencies (Insalud, UVI-MOVIL)",
    phone: "061",
    description: "For medical emergencies and ambulance services."
  },
  {
    service: "National Police",
    phone: "091",
    description: "For crime reporting and general police matters"
  },
  {
    service: "Municipal Police",
    phone: "092",
    description: "For local issues and traffic matters"
  },
  {
    service: "Fire Department (Bomberos)",
    phone: "080",
    description: "For fires and rescue."
  },
  {
    service: "Civil Guard (Guardia Civil)",
    phone: "062",
    description: "Covers rural areas and communities."
  },
];

export const otherImportantContacts: ImportantContact[] = [
    { service: "Ambulances (Plaza Legazpi, 7)", phone: "91 588 4400" },
    { service: "Red Cross Ambulances (Cruz Roja)", phone: "91 522 2222" },
    { service: "SASU Ambulances", phone: "91 355 1039" },
    { service: "Civil Guard (General)", phone: "91 534 0200" },
    { service: "Civil Protection (Protección Civil)", phone: "91 580 5289" },
    { service: "Poison Control Center", phone: "91 562 0420", description: "Instituto de Toxicología, Luis Cabrera, 9 (24 Hrs.)" },
    { service: "Theft Reports", phone: "900 100 333" }
];

export const policeStations: PoliceStation[] = [
  {
    name: "Police Station (Centro)",
    address: "Luna, 29 (Metro: Callao)",
    phone: "91 541 7160",
    district: "Centro"
  },
  {
    name: "Police Station (Huertas)",
    address: "Huertas, 76 (Metro: Anton Martin)",
    phone: "91 249 0994",
    district: "Huertas"
  },
  {
    name: "Police Station (Chamberí)",
    address: "Rafael Calvo, 33 (Metro: Iglesias)",
    phone: "91 322 3266",
    district: "Chamberí"
  },
  {
    name: "Police Station (Sol)",
    address: "Sol Metro - Carretas Exit",
    phone: "91 521 0911",
    district: "Sol"
  }
];

export const lostPropertyOffices: LostPropertyOffice[] = [
    {
        name: "Lost & Found Office 1",
        address: "Plaza Legazpi, 7 (Metro: Legazpi)",
        phone: "91 588 4348"
    },
    {
        name: "Lost & Found Office 2",
        address: "Paseo Molino, 7",
        phone: "91 527 9590"
    }
];
