
import React from "react";
import { directoryData } from "@/data/directoryData";

const communityIntegrationData = directoryData['living-in-madrid']?.['community-integration'];

const CommunityIntegrationSection = () => (
  <section id="community-integration" className="mb-12 scroll-mt-20">
    <h2 className="text-3xl font-bold mb-6">Community & Integration</h2>
    {communityIntegrationData ? (
      <div>
        <p>{(communityIntegrationData as any).introduction}</p>
      </div>
    ) : (
      <p>Information about community and integration is coming soon.</p>
    )}
  </section>
);

export default CommunityIntegrationSection;
