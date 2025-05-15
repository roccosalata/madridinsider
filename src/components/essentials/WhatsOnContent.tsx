
import React from 'react';
import { Link } from 'react-router-dom';

const WhatsOnContent = () => {
  return (
    <div>
      <p className="mb-4">Find the latest events and happenings in Madrid.</p>
      <Link to="/madrid-now" className="text-madrid-red hover:underline">
        Visit Madrid Now for current events and calendar
      </Link>
    </div>
  );
};

export default WhatsOnContent;
