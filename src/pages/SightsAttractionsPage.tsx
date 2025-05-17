// src/pages/SightsAttractionsPage.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // For a "Back" link
import SightCard from '../components/SightCard';
import { sights as sightsData } from '../data/sightsData'; // Import your data
import './SightsAttractionsPage.css'; // We'll create this CSS

const SightsAttractionsPage: React.FC = () => {
  return (
    <div className="sights-attractions-page">
      <header className="page-header-sub">
        <Link to="/see-do-explore" className="back-link">← Back to See, Do & Explore</Link>
        <h1>Sights & Attractions</h1>
        <p>Discover Madrid's iconic landmarks, historical sites, beautiful parks, world-class museums, and more.</p>
      </header>

      {/* Optional: Filters or sort options could go here later */}

      <div className="sights-list">
        {sightsData.length > 0 ? (
          sightsData.map(sight => (
            <SightCard key={sight.id} sight={sight} />
          ))
        ) : (
          <p>No sights and attractions listed yet. Please check back soon!</p>
        )}
      </div>
    </div>
  );
};

export default SightsAttractionsPage;
