
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import CategoryHubCard from '@/components/CategoryHubCard';
import EnglishRadioCard from "@/components/essentials/EnglishRadioCard";
import { Briefcase, Map, CreditCard, HeartHandshake, ShieldCheck, Users, CloudSun, Building, Phone } from 'lucide-react';

const MadridEssentials = () => {
  const essentialTopics = [
    {
      title: "Tourist Offices",
      link: "/essentials/tourist-offices",
      icon: HeartHandshake,
      description: "Find maps, guides, and expert advice for your trip."
    },
    {
      title: "Madrid Card",
      link: "/essentials/madrid-card",
      icon: CreditCard,
      description: "Get access to museums and attractions with this tourist pass."
    },
    {
      title: "Transport & Maps",
      link: "/essentials/transport-maps",
      icon: Map,
      description: "Navigate the city with ease using public transport."
    },
    {
      title: "Essential Services & Contacts",
      link: "/madrid-essentials/general-info#services",
      icon: Phone,
      description: "Emergency numbers, lost & found, and other key contacts."
    },
    {
      title: "Safety & Security",
      link: "/madrid-essentials/general-info#safety",
      icon: ShieldCheck,
      description: "Tips to stay safe and be aware of your surroundings."
    },
    {
      title: "Culture & Etiquette",
      link: "/madrid-essentials/general-info#culture",
      icon: Users,
      description: "Learn about local customs, siesta, tipping, and more."
    },
    {
      title: "Weather & Climate",
      link: "/madrid-essentials/general-info#weather",
      icon: CloudSun,
      description: "What to expect from Madrid's weather year-round."
    },
    {
      title: "About Madrid",
      link: "/madrid-essentials/general-info#about",
      icon: Building,
      description: "A brief history of Spain's vibrant capital city."
    },
    {
      title: "Professional Services",
      link: "/madrid-essentials/general-info#professional-services",
      icon: Briefcase,
      description: "Find event planners, tour services, and more."
    },
  ];

  return (
    <Layout>
      <HeroSection 
        title="Madrid Essentials" 
        subtitle="Your tourist starting point: Essential information, maps, emergency contacts, and first-timer tips for visiting Madrid." 
      />
      <div className="container mx-auto px-4 py-12">
        <div className="mb-6 max-w-2xl mx-auto">
          <EnglishRadioCard />
        </div>
        <h2 className="text-3xl font-bold mb-8 text-center">Essential Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {essentialTopics.map((sub) => {
            const Icon = sub.icon;
            return (
              <CategoryHubCard
                key={sub.link}
                title={sub.title}
                link={sub.link}
                icon={<Icon className="h-8 w-8 mb-2 text-madrid-red" />}
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
