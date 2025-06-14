import { Stethoscope, Heart, Pill, Building2, Smile } from 'lucide-react';

export const healthcareServices = [
  {
    title: "Public Healthcare System",
    icon: Heart,
    description: "Understanding Spain's Sistema Nacional de Salud for residents.",
    items: [
      "EU citizens entitled to free medical care with E111 form or EHIC",
      "Registration with local health center (Centro de Salud)",
      "Getting your health card (Tarjeta Sanitaria Individual)",
      "Assigning a family doctor (Médico de Familia)",
      "Specialist referrals and appointments"
    ]
  },
  {
    title: "Private Healthcare",
    icon: Building2,
    description: "Private medical insurance and healthcare providers.",
    items: [
      "Sanitas - comprehensive coverage",
      "Adeslas - wide network of providers",
      "DKV - international coverage options",
      "Asisa - local and national plans",
      "Less waiting time, English-speaking doctors available"
    ]
  },
  {
    title: "Medical Specialists",
    icon: Stethoscope,
    description: "Finding doctors and medical specialists in Madrid.",
    items: [
      "English-speaking doctors available",
      "General practitioners and family medicine",
      "Specialists: cardiology, dermatology, gynecology",
      "Mental health: psychologists and psychiatrists"
    ]
  },
  {
    title: "Pharmacies & Medications",
    icon: Pill,
    description: "Prescription drugs, pharmacies, and medical supplies.",
    items: [
      "24-hour pharmacy locations (green cross sign)",
      "Many medicines available without prescription",
      "Well-trained pharmacists provide helpful advice",
      "Prescription (receta) required for some medications"
    ]
  }
];

export const majorHospitals = [
  { name: "Hospital Universitario La Paz", address: "Paseo de la Castellana, 261", phone: "91 727 7000", metro: "Begonia" },
  { name: "Hospital Clínico San Carlos", address: "Professor Martin Lagos, s/n", phone: "91 330 3000", metro: "Moncloa" },
  { name: "Hospital Ramón y Cajal", address: "Colmenar Viejo Road, km 9,100", phone: "91 336 8000", metro: "Ramon y Cajal" },
  { name: "Hospital Gregorio Marañón", address: "Doctor Esquerdo, 46", phone: "91 586 8000", metro: "Retiro District" },
  { name: "Hospital 12 de Octubre", address: "Cordoba Avenue", phone: "91 390 8000", metro: "Carambanchel/Latina/Usera" },
  { name: "Hospital de la Princesa", address: "Diego de Leon, 63", phone: "91 520 2200", metro: "Diego de Leon" }
];

export const privateClinics = [
  { name: "British American Medical Unit", address: "Conde de Aranda, 1", phone: "914-351-823", metro: "Retiro", note: "English-speaking doctors" },
  { name: "Ruber International Hospital", address: "Juan Bravo, 49", phone: "914-026-100", metro: "Diego de Leon" },
  { name: "Clínica de Nuestra Señora de la Concepción", address: "Avda de los Reyes Católicos, 2", phone: "91 550 4800", note: "Jiménez Díaz Foundation" },
  { name: "Clínica Amessco", address: "José Abascal, 48, 7º", phone: "914-412-655", note: "Mon-Fri 9am-2pm, 4-9pm" }
];

export const dentistClinics = [
  {
    name: "Dental Clinic Del Rey",
    address: "Calle Potosí 2, 28016 Madrid",
    phone: "91 344 19 61",
    email: "info@dentalclinicmadrid.com",
    website: "www.dentalclinicmadrid.com",
    note: "Registered with British, American, Canadian and Australian Embassies. Aesthetic Dentistry, Implants, Orthodontics"
  },
  {
    name: "Clínica Dental Cisne",
    address: "Magallanes, 18",
    phone: "914-463-221 / 661-857-170",
    metro: "Quevedo",
    note: "Dr. Ian Daniel, BDS. Complete spectrum of care, US-trained dental hygienist"
  },
  {
    name: "Clínica Plaza Prosperidad",
    address: "Plaza Prosperidad Nº 3, 2-B",
    phone: "91 415 8197",
    metro: "Prosperidad (Line 4)",
    website: "www.clinicadentalplazaprosperidad.com",
    note: "English speaking dentist trained in the United States"
  },
  {
    name: "Clínica Cloe",
    address: "Contact for location",
    website: "www.clinicacloe.com",
    note: "Modern clinic with American dentist, very reasonable prices. Featured on Sensodyne adverts"
  },
  {
    name: "Dr. Richard Klein / Clínica Benalal",
    address: "Paseo Castellana, 15, Bajo B",
    phone: "91 310 5152",
    email: "drklein@dentalimplant.net"
  },
  {
    name: "Clínica Dental Vilaboa",
    address: "Hermosilla, 31, 1º ext izq",
    phone: "915-765-429",
    note: "Dras Deborah and Beatriz Vilaboa"
  }
];

export const drugStores = [
  { name: "24-Hour Pharmacy", address: "Mayor, 13" },
  { name: "24-Hour Pharmacy", address: "Bailen, 16" },
  { name: "24-Hour Pharmacy", address: "Mayor, 59" },
  { name: "24-Hour Pharmacy", address: "Atocha, 46" },
  { name: "24-Hour Pharmacy", address: "Velazquez, 30" },
  { name: "24-Hour Pharmacy", address: "Velazquez, 70" },
  { name: "24-Hour Pharmacy", address: "Goya, 12" },
  { name: "24-Hour Pharmacy", address: "Goya, 89" },
  { name: "Farmacia de Guardia", website: "www.canaldefarmacia.com", note: "Check website to confirm which pharmacy is on duty." }
];

export const englishSpeakingDoctors = [
  {
    name: "Dr. M. Franzreb Corbelletti",
    specialty: "General Practitioner, Orthopedics and Traumatology",
    address: "Castellana 171, Lower Left",
    phone: "914491957",
    email: "info@drmarcofranzreb.com",
    website: "www.drmarcofranzreb.com"
  },
  {
    name: "Dr. Manuel Ortiz-Villajos, MD",
    specialty: "Family Medicine, Psychosomatic Medicine",
    address: "Paseo de la Habana, 17 - 1º B",
    phone: "91 562 56 38 / 648 76 64 64",
    email: "drmortizvillajosmd@yahoo.es",
    note: "Bilingual, recommended by US Embassy, house calls available"
  },
  {
    name: "Dr. Ruben Borras",
    specialty: "General Practitioner and Family Medicine",
    address: "Claudio Coello, 117",
    phone: "91 576 9901 / 91 576 9902"
  }
];
