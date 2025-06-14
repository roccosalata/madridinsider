
import React from "react";
import { directoryData } from "@/data/directoryData";

const connectivityHomeServicesData = directoryData['living-in-madrid']?.['connectivity-home-services'];

const ConnectivityHomeSection = () => (
  <section className="mb-12">
    <h2 className="text-3xl font-bold mb-6">Connectivity & Home Services</h2>
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
