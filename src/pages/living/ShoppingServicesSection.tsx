
import React from "react";
import CategoryHubCard from '@/components/CategoryHubCard';
import { shopCategories } from '@/data/shops';
import PostAndMailInfo from "@/components/PostAndMailInfo";
import { postAndMailInfo } from "@/data/postalServices";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ShoppingServicesSection = () => (
  <section id="shopping-services" className="mb-12 scroll-mt-20">
    <h2 className="text-3xl font-bold mb-6">Shops & Services</h2>
    <p className="mb-8 text-center text-lg text-gray-600">Essential shops, markets, and services for daily life in Madrid.</p>
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
        <h3 className="text-3xl font-bold mb-6 text-center">Markets</h3>
        <div className="space-y-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                  <CardTitle>Flea Markets</CardTitle>
              </CardHeader>
              <CardContent>
                  <p>Discover unique finds and local treasures at Madrid's flea markets. The most famous is El Rastro, held every Sunday, where you can find everything from antiques and vintage clothing to handmade crafts.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                  <CardTitle>Food Markets</CardTitle>
              </CardHeader>
              <CardContent>
                  <p>Explore Madrid's vibrant food markets for fresh produce, gourmet delights, and local flavors. Popular markets include Mercado de San Miguel for tapas and Mercado de la Cebada for a more traditional experience.</p>
              </CardContent>
            </Card>
        </div>
    </div>

    <div className="mt-16">
        <h3 className="text-3xl font-bold mb-6 text-center">Postal Services</h3>
        <PostAndMailInfo info={postAndMailInfo} />
    </div>
  </section>
);

export default ShoppingServicesSection;
