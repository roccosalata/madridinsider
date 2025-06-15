
import React from 'react';
import { CirclePlay, TreePine, Bike, Dumbbell } from 'lucide-react';

export interface PreviewItem {
  icon: React.ReactElement;
  text: string;
}

export const sportsPreview: PreviewItem[] = [
  {
    icon: <CirclePlay className="h-4 w-4" />,
    text: "Real Madrid & Atlético Matches",
  },
  {
    icon: <TreePine className="h-4 w-4" />,
    text: "Parks & Outdoor Activities",
  },
  {
    icon: <Bike className="h-4 w-4" />,
    text: "Cycling & Running Paths",
  },
  {
    icon: <Dumbbell className="h-4 w-4" />,
    text: "Gyms & Wellness Centers",
  },
];
