
import React from "react";
import { directoryData } from "@/data/directoryData";

const dailyNecessitiesData = directoryData['living-in-madrid']?.['daily-necessities-services'];

const DailyNecessitiesSection = () => (
  <section id="daily-necessities-services" className="mb-12 scroll-mt-20">
    <h2 className="text-3xl font-bold mb-6">Daily Necessities & Services</h2>
    {dailyNecessitiesData ? (
      <div>
        <p>{(dailyNecessitiesData as any).introduction}</p>
      </div>
    ) : (
      <p>Information about daily necessities and services is coming soon.</p>
    )}
  </section>
);

export default DailyNecessitiesSection;
