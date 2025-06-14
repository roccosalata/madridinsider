
import React from "react";
import { Link } from "react-router-dom";

interface CategoryHubCardProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  link: string;
}

const CategoryHubCard = ({ icon, title, description, link }: CategoryHubCardProps) => (
  <div className="flex flex-col h-full border border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow text-left">
    <Link to={link} className="flex-1 flex flex-col items-start p-6 no-underline group">
      <div className="mb-4 text-madrid-red">{icon}</div>
      <h3 className="font-semibold text-xl mb-2 group-hover:text-madrid-red transition-colors">{title}</h3>
      {description && (
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
      )}
      <span className="inline-flex items-center mt-auto text-madrid-red font-medium hover:underline">
        Explore {title}
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  </div>
);

export default CategoryHubCard;
