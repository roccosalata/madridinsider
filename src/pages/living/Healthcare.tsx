
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Stethoscope, Smile, Pill } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
  dentistClinics,
  drugStores
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
          title="24-Hour Drug Stores / Farmacias"
          providers={drugStores}
          icon={<Pill className="h-6 w-6 text-madrid-red" />}
        />

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Central Nacional de Información del Medicamento</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 text-sm text-gray-600">
                <p className="mb-2">For hard to find medications and their equivalent in Spain.</p>
                <p><strong>Ministry:</strong> Ministerio de Sanidad</p>
                <p><strong>Address:</strong> Paseo del Prado, 18-20</p>
                <p><strong>Phone:</strong> 91 596 4332</p>
                <p><strong>Website:</strong> <a href="http://www.msc.es" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.msc.es</a></p>
              </div>
            </CardContent>
          </Card>
        </section>
        
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
