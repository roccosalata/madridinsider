import React from 'react';
import { PoliceContact } from '../data/essentialsData';

interface PoliceContactListProps {
  contacts: PoliceContact[];
}

const PoliceContactList: React.FC<PoliceContactListProps> = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          <strong>{contact.type}:</strong> {contact.location && `${contact.location} - `}{contact.phone}
        </li>
      ))}
    </ul>
  );
};

export default PoliceContactList;