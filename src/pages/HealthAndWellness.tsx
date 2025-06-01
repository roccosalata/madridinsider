import React from 'react';
import Layout from '../components/Layout';
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
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm mb-6">
          <div className="p-5">
            <h3 className="font-bold text-lg mb-4">Emergency Medical Contacts</h3>
            <ul>
              {emergencyMedicalContacts.map((contact, index) => (
                <li key={index} className="mb-2">
                  <strong>{contact.type}:</strong> {contact.phone}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Medical Facilities */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm mb-6">
          <div className="p-5">
            <h3 className="font-bold text-lg mb-4">Medical Facilities</h3>
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
          </div>
        </div>

        {/* Wellness & Fitness */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm mb-6">
          <div className="p-5">
            <h3 className="font-bold text-lg mb-4">Wellness & Fitness</h3>
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
          </div>
        </div>

        {/* Other Health Information */}
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm mb-6">
          <div className="p-5">
            <h3 className="font-bold text-lg mb-4">Other Health Information</h3>
            <ul>
              {otherHealthInfo.map((info, index) => (
                <li key={index} className="mb-2">
                  <strong>{info.type}:</strong> {info.notes}
                  {info.phone && <span> - {info.phone}</span>}
                  {info.location && <span> - {info.location}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HealthAndWellness;
