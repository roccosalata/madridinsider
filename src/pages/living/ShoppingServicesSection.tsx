
import React from "react";
import CategoryHubCard from '@/components/CategoryHubCard';
import { shopCategories } from '@/data/shops';
import PostAndMailInfo from "@/components/PostAndMailInfo";
import { postAndMailInfo } from "@/data/postalServices";

const ShoppingServicesSection = () => (
  <section id="shopping-services" className="mb-12 scroll-mt-20">
    <h2 className="text-3xl font-bold mb-6">Shops & Services</h2>
    <p className="mb-8 text-center text-lg text-gray-600">Essential shops and services for daily life in Madrid.</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {shopCategories.map(category => (
        <CategoryHubCard
          key={category.title}
          title={category.title}
          link={category.link}
          icon={category.icon}
        />
      ))}
    </div>
    <div className="mt-16">
        <h3 className="text-3xl font-bold mb-6 text-center">Postal Services</h3>
        <PostAndMailInfo info={postAndMailInfo} />
    </div>
  </section>
);

export default ShoppingServicesSection;
