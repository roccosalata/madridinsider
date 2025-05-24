// src/components/EmergencyContactList.tsx
import React from 'react';
import { EmergencyContact } from '../data/essentialsData';

interface EmergencyContactListProps {
  contacts: EmergencyContact[];
}

const EmergencyContactList: React.FC<EmergencyContactListProps> = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          <strong>{contact.type}:</strong> {contact.phone}
        </li>
      ))}
    </ul>
  );
};

export default EmergencyContactList;