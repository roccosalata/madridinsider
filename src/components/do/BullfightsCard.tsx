
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Ticket } from "lucide-react";

const BullfightsCard = () => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-lg">
        <Ticket className="h-5 w-5 text-madrid-red" />
        Bullfights – Plaza de Toros de las Ventas
      </CardTitle>
    </CardHeader>
    <CardContent>
      <h3 className="font-semibold text-base mb-1">Plaza de Toros Monumental de las Ventas</h3>
      <p className="text-sm mb-2">
        Spain’s most iconic bullring hosting regular bullfights, especially during San Isidro festival (spring). Tickets can be hard to get for the biggest festivals, plan ahead!
      </p>
      <ul className="text-sm mb-2">
        <li><strong>Address:</strong> Alcala, 237 (Metro: Ventas)</li>
        <li><strong>Website:</strong> <a href="https://www.las-ventas.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener">www.las-ventas.com</a></li>
        <li><strong>Phone:</strong> 91 356 2200</li>
      </ul>
    </CardContent>
  </Card>
);

export default BullfightsCard;
