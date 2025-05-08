
import { Link } from 'react-router-dom';

interface ContentCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ContentCard = ({ title, description, imageUrl, link }: ContentCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
      <Link to={link}>
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover" 
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
          <div className="mt-4">
            <span className="text-madrid-red font-medium text-sm">Read more →</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ContentCard;
