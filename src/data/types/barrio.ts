
export interface Barrio {
  name: string;
  description: string;
  character: string;
  priceLevel: 'Very Low' | 'Low' | 'Medium' | 'High' | 'Very High';
  safety: string;
  bestFor: string[];
  metroStations: string[];
  highlights: string[];
  warnings?: string[];
}
