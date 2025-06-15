
import React from "react";
import { directoryData } from "@/data/directoryData";
import LanguageExchangeSection from "@/components/living/education/LanguageExchangeSection";
import ReligionsFaithsSection from "@/pages/living/ReligionsFaithsSection";

const communityIntegrationData = directoryData['living-in-madrid']?.['community-integration'];

const CommunityIntegrationSection = () => (
  <section id="community-integration" className="mb-12 scroll-mt-20">
    <h2 className="text-3xl font-bold mb-6">Community & Integration</h2>
    <div className="space-y-8">
      {communityIntegrationData && (
          <p className="text-lg text-gray-700">{(communityIntegrationData as any).introduction}</p>
      )}

      <LanguageExchangeSection />
      <ReligionsFaithsSection />
    </div>
  </section>
);

export default CommunityIntegrationSection;
