
import React from 'react';
import { Activity } from '../data/activitiesData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  return (
    <Card className="h-full">
      {activity.imageUrl && (
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <img 
            src={activity.imageUrl} 
            alt={activity.name} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-lg">{activity.name}</CardTitle>
        <p className="text-sm text-gray-600">{activity.category}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-4">{activity.shortDescription}</p>
        
        {activity.address && (
          <p className="text-sm mb-2">
            <strong>Address:</strong> {activity.address}
          </p>
        )}
        
        {activity.hours && (
          <p className="text-sm mb-2">
            <strong>Hours:</strong> {activity.hours}
          </p>
        )}
        
        {activity.price && (
          <p className="text-sm mb-2">
            <strong>Price:</strong> {activity.price}
          </p>
        )}
        
        {activity.website && (
          <p className="text-sm mb-4">
            <a 
              href={activity.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              More Info / Book
            </a>
          </p>
        )}
        
        {activity.tags && activity.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {activity.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
