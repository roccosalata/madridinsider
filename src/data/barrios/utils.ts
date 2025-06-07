
import { Barrio } from '../types/barrio';
import { centralBarrios } from './centralBarrios';
import { northernBarrios } from './northernBarrios';
import { otherBarrios } from './otherBarrios';

export const madridBarrios: Barrio[] = [
  ...centralBarrios,
  ...northernBarrios,
  ...otherBarrios
];

export const getBarriosByPriceLevel = (priceLevel: Barrio['priceLevel']) => {
  return madridBarrios.filter(barrio => barrio.priceLevel === priceLevel);
};

export const getBarriosForStudents = () => {
  return madridBarrios.filter(barrio => 
    barrio.bestFor.some(purpose => 
      purpose.toLowerCase().includes('student') || 
      purpose.toLowerCase().includes('university')
    )
  );
};

export const getSafeBarrios = () => {
  return madridBarrios.filter(barrio => 
    barrio.safety.toLowerCase().includes('safe') || 
    barrio.safety.toLowerCase().includes('very safe')
  );
};
