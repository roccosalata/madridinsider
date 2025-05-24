// src/data/healthAndWellnessData.ts

export interface MedicalFacility {
  type: 'Hospital' | 'Clinic' | 'Doctor' | 'Specialist' | 'Dentist' | 'Drug Store' | 'Medical Care';
  name?: string;
  location: string;
  phone?: string;
  notes?: string; // e.g., specialization, hours, appointment info
}

export interface WellnessCenter {
  type: 'Health Club' | 'Gym' | 'Yoga Studio';
  name: string;
  location: string;
  phone?: string;
  website?: string;
  notes?: string; // e.g., class types, facilities
}

export interface OtherHealthInfo {
  type: 'Immunizations' | 'Health Food Store' | 'Vegetarian Food';
  name?: string; // Name of store/restaurant if applicable
  location?: string; // Specific location or general area
  notes?: string; // e.g., what to expect for immunizations, types of food
  phone?: string;
  website?: string;
}

export interface EmergencyMedicalContact {
  type: string; // e.g., 'Medical Emergencies (Insalud)', 'Ambulances'
  phone: string;
  notes?: string; // e.g., specific service or location
}

export const medicalFacilities: MedicalFacility[] = [
  {
    type: 'Hospital',
    name: 'Hospital Universitario La Paz',
    location: 'Paseo de la Castellana, 261, 28046 Madrid',
    phone: '91 727 7000',
  },
  {
    type: 'Hospital',
    name: 'Hospital General Universitario Gregorio Marañón',
    location: 'Calle del Dr. Esquerdo, 46, 28007 Madrid',
    phone: '91 586 8000',
  },
  {
    type: 'Clinic',
    name: 'Clínica Universidad de Navarra',
    location: 'Calle del Diego Salvador, 10, 28006 Madrid',
    phone: '91 353 1920',
  },
  // TODO: Add more hospitals and clinics
  {
    type: 'Doctor',
    location: 'Various locations',
    notes: 'Finding a general practitioner (medico de cabecera) may require registering with the public health system (if eligible) or finding a private doctor.',
  },
  // TODO: Add specific recommendations for English-speaking doctors if available
  {
    type: 'Dentist',
    location: 'Various locations',
    notes: 'Dental care is generally private in Spain. Many clinics are available.',
  },
  // TODO: Add specific recommendations for dentists if available
  {
    type: 'Drug Store',
    location: 'Found throughout the city (look for a green cross sign)',
    notes: 'Pharmacies (Farmacias) provide medications and often basic health advice. Some are open 24 hours (de guardia).',
  },
  {
    type: 'Medical Care',
    location: 'Various locations',
    notes: 'Includes walk-in clinics (urgencias de atención primaria) for non-life-threatening issues and appointments with specialists.',
  },
];

export const wellnessCenters: WellnessCenter[] = [
  {
    type: 'Health Club',
    name: 'Go fit', // Example name
    location: 'Various locations across Madrid',
    website: 'https://www.gofit.es/',
    notes: 'Chain of large gyms with various facilities and classes.',
  },
  {
    type: 'Gym',
    name: 'Basic-Fit', // Example name
    location: 'Various locations across Madrid',
    website: 'https://www.basic-fit.com/es-es/',
    notes: 'Budget-friendly gym chain.',
  },
  {
    type: 'Yoga Studio',
    name: 'El Gong', // Example name
    location: 'Calle de la Palma, 59, 28015 Madrid', // Example location
    website: 'https://www.elgong.es/',
    notes: 'Offers various yoga styles.',
  },
  // TODO: Add more health clubs, gyms, and yoga studios
];

export const otherHealthInfo: OtherHealthInfo[] = [
  {
    type: 'Immunizations',
    location: 'International Vaccination Center (Centro de Vacunación Internacional)',
    notes: 'Required or recommended vaccinations for travel may be obtained here. Appointments usually needed.',
    phone: '91 370 0000', // Example phone number
    // TODO: Find actual phone and location if possible
  },
  {
    type: 'Health Food Store',
    location: 'Various locations',
    notes: 'Tiendas de productos naturales or herbolarios offer organic and health food products. Also relevant for healthy eating.',
  },
  {
    type: 'Vegetarian Food',
    location: 'Various restaurants and shops',
    notes: 'Madrid has many restaurants and shops offering vegetarian and vegan options. Also relevant for healthy eating.',
  },
];

export const emergencyMedicalContacts: EmergencyMedicalContact[] = [
  {
    type: 'Medical Emergencies (Insalud)',
    phone: '061',
    notes: 'For urgent medical assistance.',
  },
  {
    type: 'General Emergencies (Includes Medical)',
    phone: '112',
    notes: 'Pan-European emergency number. Can connect to ambulance services.',
  },
  {
    type: 'SAMUR (Servicio de Asistencia Municipal de Urgencia y Rescate)',
    phone: '112',
    notes: 'Madrid\'s municipal emergency medical service.',
  },
   {
    type: 'Ambulances (Cruz Roja)',
    phone: '91 522 2222',
    notes: 'Red Cross Ambulances.',
  },
   {
    type: 'Ambulances (SASU)',
    phone: '91 355 1039',
    notes: 'Another ambulance service.',
  },
   {
    type: 'UVI-MOVIL',
    phone: '061',
    notes: 'Mobile Intensive Care Unit (often accessed via 061).',
  },
  {
    type: 'Poison Control Center (Instituto de Toxicologia)',
    phone: '915 620 420',
    notes: 'For suspected poisoning cases.',
  },
];