// src/components/ActivityCard.tsx
import React from 'react';
import { Activity } from '../data/activitiesData'; // Adjust path if needed
import './ActivityCard.css'; // We'll create this

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  return (
    <div className="activity-card">
      {activity.imageUrl && (
        <div className="activity-card-image-container">
          <img src={activity.imageUrl} alt={activity.name} className="activity-card-image" />
        </div>
      )}
      <div className="activity-card-content">
        <h3>{activity.name}</h3>
        <p className="activity-card-type">Type: {activity.type}</p>
        <p className="activity-card-description">{activity.shortDescription}</p>
        {activity.location && <p className="activity-card-info"><strong>Location:</strong> {activity.location}</p>}
        {activity.duration && <p className="activity-card-info"><strong>Duration:</strong> {activity.duration}</p>}
        {activity.priceRange && <p className="activity-card-info"><strong>Price:</strong> {activity.priceRange}</p>}
        {activity.website && (
          <p className="activity-card-website">
            <a href={activity.website} target="_blank" rel="noopener noreferrer">
              More Info / Book
            </a>
          </p>
        )}
        {activity.tags && activity.tags.length > 0 && (
          <div className="activity-card-tags">
            {activity.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityCard;
