
import React from 'react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ContentCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  icon?: React.ReactNode;
}

const ContentCard = ({ title, description, imageUrl, link, icon }: ContentCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link to={link} className="block">
        <AspectRatio ratio={16 / 9}>
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </AspectRatio>
      </Link>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          {icon && <div className="text-madrid-red">{icon}</div>}
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-madrid-red font-medium hover:underline"
        >
          Learn more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ContentCard;
