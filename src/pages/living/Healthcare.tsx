
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Stethoscope, Smile } from 'lucide-react';

import EmergencyInfo from '@/components/healthcare/EmergencyInfo';
import MedicalCareAccess from '@/components/healthcare/MedicalCareAccess';
import HealthcareServices from '@/components/healthcare/HealthcareServices';
import ProviderList from '@/components/healthcare/ProviderList';
import DoctorVisitGuide from '@/components/healthcare/DoctorVisitGuide';
import ImmunizationCenters from '@/components/healthcare/ImmunizationCenters';
import HealthcareNotes from '@/components/healthcare/HealthcareNotes';

import { 
  majorHospitals, 
  privateClinics, 
  englishSpeakingDoctors, 
  dentistClinics 
} from '@/data/healthcareData';

const Healthcare = () => {
  return (
    <Layout>
      <HeroSection
        title="Healthcare in Madrid"
        subtitle="Complete guide to healthcare services, medical insurance, and finding doctors as a Madrid resident"
      />
      
      <div className="container mx-auto py-12 px-4">
        <EmergencyInfo />
        <MedicalCareAccess />
        <HealthcareServices />
        
        <ProviderList 
          title="English-Speaking Doctors"
          providers={englishSpeakingDoctors}
          icon={<Stethoscope className="h-6 w-6 text-madrid-red" />}
        />
        
        <ProviderList 
          title="Major Public Hospitals"
          providers={majorHospitals}
        />
        
        <ProviderList 
          title="Private Clinics & Medical Centers"
          providers={privateClinics}
        />
        
        <ProviderList 
          title="Dental Clinics"
          providers={dentistClinics}
          icon={<Smile className="h-6 w-6 text-madrid-red" />}
        />
        
        <DoctorVisitGuide />
        <ImmunizationCenters />
        <HealthcareNotes />
      </div>
    </Layout>
  );
};

export default Healthcare;
