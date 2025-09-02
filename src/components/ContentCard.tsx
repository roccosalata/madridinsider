import React from 'react';

interface ContentCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
  href?: string;
}

const ContentCard = ({ title, description, image, category, readTime, href = "#" }: ContentCardProps) => {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-lg card-hover">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-madrid-dark mb-3">{title}</h3>
        <p className="text-madrid-gray mb-4 leading-relaxed">{description}</p>
        <div className="flex justify-between items-center text-sm font-semibold text-primary">
          <span>{category}</span>
          <span>{readTime}</span>
        </div>
      </div>
    </article>
  );
};

export default ContentCard;