
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinned } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface MapHubLinkProps {
  variant?: 'default' | 'compact';
  className?: string;
}

const MapHubLink = ({ variant = 'default', className = '' }: MapHubLinkProps) => {
  if (variant === 'compact') {
    return (
      <Link to="/transport?tab=maps" className={`inline-flex items-center text-madrid-red hover:underline ${className}`}>
        <MapPinned className="h-4 w-4 mr-1" />
        <span>Madrid Maps Hub</span>
      </Link>
    );
  }
  
  return (
    <Card className={`bg-madrid-red/10 ${className}`}>
      <CardContent className="pt-6">
        <div className="flex items-center gap-3 mb-4">
          <MapPinned className="h-5 w-5 text-madrid-red" />
          <h3 className="font-bold text-xl">Madrid Maps Hub</h3>
        </div>
        <p className="mb-4">Find all the maps you need to navigate Madrid like a local, including metro maps, neighborhood guides, and interactive city maps.</p>
        <Button asChild>
          <Link to="/transport?tab=maps">Explore Maps</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default MapHubLink;
