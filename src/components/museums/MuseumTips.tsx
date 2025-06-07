
import React from 'react';
import { Calendar, Star, Clock } from 'lucide-react';

const MuseumTips = () => {
  return (
    <section className="bg-slate-50 p-6 rounded-lg">
      <h3 className="font-bold text-xl mb-4">Museum Tips & Passes</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold mb-3">Madrid Museum Pass</h4>
          <ul className="text-sm space-y-1">
            <li className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-madrid-red" />
              <span>€32 for 1 year, skip-the-line access</span>
            </li>
            <li className="flex items-center gap-2">
              <Star className="h-4 w-4 text-madrid-red" />
              <span>Includes 50+ museums and cultural sites</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-madrid-red" />
              <span>Valid for multiple visits within the year</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Free Museum Hours</h4>
          <ul className="text-sm space-y-1">
            <li>• Prado: Mon-Sat 18:00-20:00, Sun 17:00-19:00</li>
            <li>• Reina Sofía: Mon & Wed-Sat 19:00-21:00, Sun 13:30-19:00</li>
            <li>• Many smaller museums free on Sundays</li>
            <li>• EU citizens under 25 get free entry to major museums</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MuseumTips;
