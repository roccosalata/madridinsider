
export interface EmergencyContact {
  service: string;
  phone: string;
  description: string;
}

export interface PoliceContact {
  type: string;
  location?: string;
  phone: string;
}

export interface PoliceStation {
  name: string;
  address: string;
  phone: string;
  district: string;
}

export const emergencyContacts: EmergencyContact[] = [
  {
    service: "Emergency Services (Police, Fire, Ambulance)",
    phone: "112",
    description: "General emergency number for all services"
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
    service: "Medical Emergency",
    phone: "061",
    description: "Medical emergencies and ambulance services"
  }
];

export const policeContacts: PoliceContact[] = [
  {
    type: "Emergency",
    phone: "112"
  },
  {
    type: "National Police",
    phone: "091"
  },
  {
    type: "Municipal Police",
    phone: "092"
  }
];

export const policeStations: PoliceStation[] = [
  {
    name: "Comisaría Centro",
    address: "Calle de Leganitos, 19, 28013 Madrid",
    phone: "+34 91 548 7900",
    district: "Centro"
  },
  {
    name: "Comisaría Salamanca",
    address: "Calle de Núñez de Balboa, 78, 28006 Madrid",
    phone: "+34 91 562 8400",
    district: "Salamanca"
  }
];
