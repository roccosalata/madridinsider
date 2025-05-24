// src/components/EmbassyList.tsx
import React from 'react';
import { Embassy } from '../data/essentialsData'; // Adjust path if needed
import './EmbassyList.css'; // We'll create this CSS file

interface EmbassyListProps {
  embassies: Embassy[];
}

const EmbassyList: React.FC<EmbassyListProps> = ({ embassies }) => {
  return (
    <ul className="embassy-list">
      {embassies.map(embassy => (
        <li key={embassy.country} className="embassy-item">
          <h3>{embassy.country} Embassy</h3>
          {embassy.address && <p><strong>Address:</strong> {embassy.address}</p>}
          {embassy.phone && <p><strong>Phone:</strong> {embassy.phone}</p>}
          {embassy.website && (
            <p>
              <strong>Website:</strong> <a href={embassy.website} target="_blank" rel="noopener noreferrer">{embassy.website}</a>
            </p>
          )}
        </li>
      ))}
    </ul>
  );
};

export default EmbassyList;