
import React from 'react';
import EmergencyInfo from '@/components/healthcare/EmergencyInfo';
import MedicalCareAccess from '@/components/healthcare/MedicalCareAccess';
import HealthcareServices from '@/components/healthcare/HealthcareServices';
import DoctorVisitGuide from '@/components/healthcare/DoctorVisitGuide';
import ProviderList from '@/components/healthcare/ProviderList';
import { majorHospitals, privateClinics, dentistClinics, englishSpeakingDoctors, drugStores } from '@/data/healthcareData';
import ImmunizationCenters from '@/components/healthcare/ImmunizationCenters';
import HealthcareNotes from '@/components/healthcare/HealthcareNotes';
import { Hospital, Stethoscope, Smile, Pill } from 'lucide-react';

const HealthcareSection = () => (
  <section id="healthcare" className="scroll-mt-20">
    <h2 className="text-3xl font-bold mb-6">Healthcare in Madrid</h2>
    <p className="text-lg text-gray-700 mb-8">
      A comprehensive guide to navigating the healthcare system in Madrid, from emergency services and insurance to finding doctors and pharmacies.
    </p>
    
    <EmergencyInfo />
    <MedicalCareAccess />
    <HealthcareServices />
    <HealthcareNotes />
    <DoctorVisitGuide />
    
    <ProviderList 
      title="Major Public & Private Hospitals" 
      providers={majorHospitals}
      icon={<Hospital className="h-6 w-6 text-madrid-red" />}
    />
    <ProviderList 
      title="Private Clinics" 
      providers={privateClinics}
      icon={<Stethoscope className="h-6 w-6 text-madrid-red" />}
    />
    <ProviderList 
      title="English-Speaking Doctors" 
      providers={englishSpeakingDoctors}
      icon={<Stethoscope className="h-6 w-6 text-madrid-red" />}
    />
    <ProviderList 
      title="Dentists" 
      providers={dentistClinics}
      icon={<Smile className="h-6 w-6 text-madrid-red" />}
    />
    <ImmunizationCenters />
    <ProviderList 
      title="24-Hour Pharmacies & Drugstores" 
      providers={drugStores}
      icon={<Pill className="h-6 w-6 text-madrid-red" />}
    />

  </section>
);

export default HealthcareSection;
