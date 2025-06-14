
import React from 'react';
import { Clock } from 'lucide-react';

interface MadridNowSectionProps {
  madridTime: string;
  madridDate: string;
}

const MadridNowSection = ({ madridTime, madridDate }: MadridNowSectionProps) => {
  return (
    <div className="bg-gradient-to-r from-madrid-red to-red-600 rounded-xl p-6 text-white max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <Clock className="h-6 w-6" />
            Madrid Now
          </h2>
          <p className="text-white/90">Current time in Madrid</p>
        </div>
        <div className="text-center md:text-right">
          <div className="text-3xl font-bold">{madridTime}</div>
          <div className="text-white/90">{madridDate}</div>
          <div className="text-sm text-white/75 mt-1">CET/CEST</div>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-white/20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          <a href="/madrid-now/weather" className="hover:text-white/80 transition-colors">
            📊 Weather Today
          </a>
          <a href="/madrid-now/events" className="hover:text-white/80 transition-colors">
            🎭 Current Events
          </a>
          <a href="/madrid-now/transport" className="hover:text-white/80 transition-colors">
            🚇 Transport Updates
          </a>
          <a href="/madrid-now" className="hover:text-white/80 transition-colors font-medium">
            View All →
          </a>
        </div>
      </div>
    </div>
  );
};

export default MadridNowSection;
