
import React from "react";
import { directoryData } from "@/data/directoryData";

const connectivityHomeServicesData = directoryData['living-in-madrid']?.['connectivity-home-services'];

const ConnectivityHomeSection = () => (
  <section id="utilities" className="mb-12 scroll-mt-20">
    <h2 className="text-3xl font-bold mb-6">Internet & Utilities</h2>
    {connectivityHomeServicesData ? (
      <div>
        <p>{(connectivityHomeServicesData as any).introduction}</p>
      </div>
    ) : (
      <p>Information about connectivity and home services is coming soon.</p>
    )}
  </section>
);

export default ConnectivityHomeSection;
