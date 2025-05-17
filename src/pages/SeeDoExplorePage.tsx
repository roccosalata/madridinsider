// src/pages/SeeDoExplorePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './SeeDoExplorePage.css'; // We'll create this CSS file

const SeeDoExplorePage: React.FC = () => {
  return (
    <div className="see-do-explore-page">
      <header className="page-header">
        <h1>See, Do & Explore Madrid</h1>
        <p>Discover the best of Madrid, from iconic landmarks and world-class museums to vibrant activities and captivating entertainment.</p>
      </header>

      <div className="sub-categories-nav">
        <Link to="/see-do-explore/sights-attractions" className="sub-category-card">
          <div className="card-image sights-bg"></div>
          <h2>Sights & Attractions</h2>
          <p>Explore Madrid's famous landmarks, historical sites, beautiful parks, and renowned museums.</p>
        </Link>

        <Link to="/see-do-explore/activities-entertainment" className="sub-category-card">
          <div className="card-image activities-bg"></div>
          <h2>Activities & Entertainment</h2>
          <p>Experience the vibrant culture with flamenco shows, guided tours, cooking classes, and more.</p>
        </Link>
      </div>
    </div>
  );
};

export default SeeDoExplorePage;
