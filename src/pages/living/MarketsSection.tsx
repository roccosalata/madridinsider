
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MarketsSection = () => (
  <section id="markets" className="mb-12 scroll-mt-20">
    <h2 className="text-3xl font-bold mb-6">Markets</h2>
    <div className="space-y-8">
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
  </section>
);

export default MarketsSection;
