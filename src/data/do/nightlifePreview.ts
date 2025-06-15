
import React from 'react';
import { Wine, Music2, Moon, GlassWater } from 'lucide-react';

export interface PreviewItem {
  icon: React.ReactElement;
  text: string;
}

export const nightlifePreview: PreviewItem[] = [
  {
    icon: <GlassWater className="h-4 w-4" />,
    text: "Cocktail Bars & Lounges",
  },
  {
    icon: <Music2 className="h-4 w-4" />,
    text: "Live Music Venues",
  },
  {
    icon: <Moon className="h-4 w-4" />,
    text: "Night Clubs & Dancing",
  },
  {
    icon: <Wine className="h-4 w-4" />,
    text: "Rooftop Terraces",
  },
];
