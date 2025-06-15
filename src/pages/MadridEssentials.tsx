
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import CategoryHubCard from '@/components/CategoryHubCard';
import { Info, Map, CreditCard, HeartHandshake, Phone, Globe } from 'lucide-react';

const MadridEssentials = () => {
  const essentialTopics = [
    {
      title: "Tourist Offices",
      link: "/madrid-essentials/tourist-offices",
      icon: HeartHandshake,
      description: "Find maps, guides, and expert advice for your trip."
    },
    {
      title: "Madrid Card",
      link: "/madrid-essentials/madrid-card",
      icon: CreditCard,
      description: "Get access to museums and attractions with this tourist pass."
    },
    {
      title: "Transport & Maps",
      link: "/madrid-essentials/transport-maps",
      icon: Map,
      description: "Navigate the city with ease using public transport."
    },
    {
      title: "Emergency Contacts",
      link: "/madrid-essentials/emergency",
      icon: Phone,
      description: "Emergency numbers, police stations, and other key contacts."
    },
    {
      title: "Embassies & Consulates",
      link: "/madrid-essentials/embassies",
      icon: Globe,
      description: "Contact information for foreign embassies in Madrid."
    },
    {
      title: "General Information",
      link: "/madrid-essentials/general-info",
      icon: Info,
      description: "Safety tips, local customs, weather, history, and more."
    },
  ];

  return (
    <Layout>
      <HeroSection 
        title="Madrid Essentials" 
        subtitle="Your tourist starting point: Essential information, maps, emergency contacts, and first-timer tips for visiting Madrid." 
      />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Essential Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {essentialTopics.map((sub) => {
            const IconComponent = sub.icon;
            return (
              <CategoryHubCard
                key={sub.link}
                title={sub.title}
                link={sub.link}
                icon={<IconComponent className="h-8 w-8 mb-2 text-madrid-red" />}
                description={sub.description}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default MadridEssentials;
