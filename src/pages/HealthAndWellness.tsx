import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { directoryData } from '@/data/directoryData';

import Layout from '../components/Layout'; // Assuming a Layout component for consistent page structure
import ContentCard from '../components/ContentCard'; // Assuming a ContentCard component for displaying sections

const HealthAndWellness: React.FC = () => {
  const healthData: HealthCategory[] = [
    // You'll need to structure your healthAndWellnessData.ts
    // to export an array of categories like this, or adjust
    // this component to match your data structure.
    // For now, assuming healthAndWellnessData.ts exports
    // arrays like medicalFacilities, wellnessCenters, etc.
    // and you might want to group them here for display.
    // Example structure if you adjust healthAndWellnessData.ts:
    /*
    {
      category: 'Medical Facilities',
      items: medicalFacilities, // Array of MedicalFacility objects
      type: 'medicalFacility' // Discriminator for rendering logic
    },
    {
      category: 'Wellness & Fitness',
      items: wellnessCenters, // Array of WellnessCenter objects
      type: 'wellnessCenter'
    },
    // Add other categories as needed
    */
  ];

  // Placeholder data structure assumption if healthAndWellnessData.ts
  // exports individual arrays (adjust based on actual export)
  const medicalFacilities: MedicalFacility[] = []; // Assume data is imported here
  const wellnessCenters: WellnessCenter[] = []; // Assume data is imported here
  const otherHealthInfo: OtherHealthInfo[] = []; // Assume data is imported here
  const emergencyMedicalContacts: EmergencyMedicalContact[] = []; // Assume data is imported here

  // You'll need to add actual data imports here based on healthAndWellnessData.ts exports
  // Example:
  // import { medicalFacilities, wellnessCenters, ... } from '../data/healthAndWellnessData';

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Health & Wellness</h1>

        {/* Render Emergency Medical Contacts */}
        {emergencyMedicalContacts && emergencyMedicalContacts.length > 0 && (
          <ContentCard title="Emergency Medical Contacts">
            <ul>
              {emergencyMedicalContacts.map((contact, index) => (
                <li key={index} className="mb-2">
                  <strong>{contact.type}:</strong> {contact.phone}
                </li>
              ))}
            </ul>
          </ContentCard>
        )}

        {/* Render Medical Facilities */}
        {medicalFacilities && medicalFacilities.length > 0 && (
          <ContentCard title="Medical Facilities">
            <ul>
              {medicalFacilities.map((facility, index) => (
                <li key={index} className="mb-2">
                  <strong>{facility.name}</strong> ({facility.type})
                  {facility.address && <span> - {facility.address}</span>}
                  {facility.phone && <span> - {facility.phone}</span>}
                  {facility.notes && <span> ({facility.notes})</span>}
                </li>
              ))}
            </ul>
          </ContentCard>
        )}

        {/* Render Wellness & Fitness */}
        {wellnessCenters && wellnessCenters.length > 0 && (
          <ContentCard title="Wellness & Fitness">
            <ul>
              {wellnessCenters.map((center, index) => (
                <li key={index} className="mb-2">
                  <strong>{center.name}</strong> ({center.type})
                  {center.address && <span> - {center.address}</span>}
                  {center.phone && <span> - {center.phone}</span>}
                  {center.website && (
                    <span> - <a href={center.website} target="_blank" rel="noopener noreferrer">{center.website}</a></span>
                  )}
                </li>
              ))}
            </ul>
          </ContentCard>
        )}

        {/* Render Other Health Information */}
        {otherHealthInfo && otherHealthInfo.length > 0 && (
           <ContentCard title="Other Health Information">
           {/* You'll need to adjust rendering based on the structure of OtherHealthInfo */}
            <ul>
              {otherHealthInfo.map((info, index) => (
                <li key={index} className="mb-2">
                  <strong>{info.title}:</strong> {info.description}
                  {info.phone && <span> - {info.phone}</span>}
                  {info.address && <span> - {info.address}</span>}
                   {info.notes && <span> ({info.notes})</span>}
                </li>
              ))}
            </ul>
          </ContentCard>
        )}

        {/* You might need to add sections for Immunizations, Health Food Stores, etc.
            depending on how you structured healthAndWellnessData.ts
        */}

      </div>
    </Layout>
  );
};

export default HealthAndWellness;