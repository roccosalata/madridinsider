// src/components/SightCard.tsx
import React from 'react';
import { Sight } from '../data/sightsData'; // Adjust path if your data file is elsewhere
import './SightCard.css'; // We'll create this CSS file

interface SightCardProps {
  sight: Sight;
}

const SightCard: React.FC<SightCardProps> = ({ sight }) => {
  return (
    <div className="sight-card">
      {sight.imageUrl && (
        <div className="sight-card-image-container">
          <img src={sight.imageUrl} alt={sight.name} className="sight-card-image" />
        </div>
      )}
      <div className="sight-card-content">
        <h3>{sight.name}</h3>
        <p className="sight-card-category">Category: {sight.category}</p>
        <p className="sight-card-description">{sight.shortDescription}</p>
        {sight.address && <p className="sight-card-info"><strong>Address:</strong> {sight.address}</p>}
        {sight.hours && <p className="sight-card-info"><strong>Hours:</strong> {sight.hours}</p>}
        {sight.website && (
          <p className="sight-card-website">
            <a href={sight.website} target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </p>
        )}
        {sight.tags && sight.tags.length > 0 && (
          <div className="sight-card-tags">
            {sight.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SightCard;
