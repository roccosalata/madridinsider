
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ShoppingServicesSection = () => (
  <section className="mb-12">
    <h2 className="text-3xl font-bold mb-6">Shops & Essential Services</h2>
    <Card>
      <CardHeader>
        <CardTitle>Shops & Services</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">
          Find essential shops and services for daily life in Madrid, including locksmiths, optical shops, 
          bookstores, international groceries, hair salons, and more.
        </p>
        <Link 
          to="/living-in-madrid/shopping-services" 
          className="inline-flex items-center text-madrid-red hover:text-madrid-red/80 font-medium"
        >
          View Shops & Services Guide →
        </Link>
      </CardContent>
    </Card>
  </section>
);

export default ShoppingServicesSection;
