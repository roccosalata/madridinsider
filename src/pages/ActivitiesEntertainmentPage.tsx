// src/pages/ActivitiesEntertainmentPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import ActivityCard from '../components/ActivityCard';
import { activities as activitiesData } from '../data/activitiesData'; // Import your data
import './ActivitiesEntertainmentPage.css'; // We'll create this

const ActivitiesEntertainmentPage: React.FC = () => {
  return (
    <div className="activities-entertainment-page">
      <header className="page-header-sub">
        <Link to="/see-do-explore" className="back-link">← Back to See, Do & Explore</Link>
        <h1>Activities & Entertainment</h1>
        <p>Immerse yourself in Madrid's vibrant culture with exciting shows, engaging tours, and unique local experiences.</p>
      </header>

      <div className="activities-list">
        {activitiesData.length > 0 ? (
          activitiesData.map(activity => (
            <ActivityCard key={activity.id} activity={activity} />
          ))
        ) : (
          <p>No activities and entertainment options listed yet. Please check back soon!</p>
        )}
      </div>
    </div>
  );
};

export default ActivitiesEntertainmentPage;
