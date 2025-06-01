import React from 'react';
import Layout from '../components/Layout';
import ContentCard from '../components/ContentCard';
import { 
  medicalFacilities, 
  wellnessCenters, 
  otherHealthInfo, 
  emergencyMedicalContacts,
  MedicalFacility,
  WellnessCenter,
  OtherHealthInfo,
  EmergencyMedicalContact
} from '@/data/healthAndWellnessData';

interface HealthCategory {
  category: string;
  items: any[];
  type: string;
}

const HealthAndWellness: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Health & Wellness</h1>

        {/* Emergency Medical Contacts */}
        {emergencyMedicalContacts && emergencyMedicalContacts.length > 0 && (
          <ContentCard 
            title="Emergency Medical Contacts"
            content={
              <ul>
                {emergencyMedicalContacts.map((contact, index) => (
                  <li key={index} className="mb-2">
                    <strong>{contact.type}:</strong> {contact.phone}
                  </li>
                ))}
              </ul>
            }
          />
        )}

        {/* Medical Facilities */}
        {medicalFacilities && medicalFacilities.length > 0 && (
          <ContentCard 
            title="Medical Facilities"
            content={
              <ul>
                {medicalFacilities.map((facility, index) => (
                  <li key={index} className="mb-2">
                    <strong>{facility.name}</strong> ({facility.type})
                    {facility.location && <span> - {facility.location}</span>}
                    {facility.phone && <span> - {facility.phone}</span>}
                    {facility.notes && <span> ({facility.notes})</span>}
                  </li>
                ))}
              </ul>
            }
          />
        )}

        {/* Wellness & Fitness */}
        {wellnessCenters && wellnessCenters.length > 0 && (
          <ContentCard 
            title="Wellness & Fitness"
            content={
              <ul>
                {wellnessCenters.map((center, index) => (
                  <li key={index} className="mb-2">
                    <strong>{center.name}</strong> ({center.type})
                    {center.location && <span> - {center.location}</span>}
                    {center.phone && <span> - {center.phone}</span>}
                    {center.website && (
                      <span> - <a href={center.website} target="_blank" rel="noopener noreferrer">{center.website}</a></span>
                    )}
                  </li>
                ))}
              </ul>
            }
          />
        )}

        {/* Other Health Information */}
        {otherHealthInfo && otherHealthInfo.length > 0 && (
          <ContentCard 
            title="Other Health Information"
            content={
              <ul>
                {otherHealthInfo.map((info, index) => (
                  <li key={index} className="mb-2">
                    <strong>{info.type}:</strong> {info.notes}
                    {info.phone && <span> - {info.phone}</span>}
                    {info.location && <span> - {info.location}</span>}
                  </li>
                ))}
              </ul>
            }
          />
        )}
      </div>
    </Layout>
  );
};

export default HealthAndWellness;
