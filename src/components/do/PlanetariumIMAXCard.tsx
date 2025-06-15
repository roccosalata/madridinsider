
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Telescope } from "lucide-react";

const PlanetariumIMAXCard = () => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-lg">
        <Telescope className="h-5 w-5 text-madrid-red" />
        Planetarium &amp; IMAX Madrid
      </CardTitle>
    </CardHeader>
    <CardContent>
      <h4 className="font-semibold">Planetario de Madrid</h4>
      <ul className="text-sm mb-2">
        <li>Parque Tierno Galvan, 28045 (Metro: Mendez Alvaro)</li>
        <li>Modern exhibitions and Cosmos observation for all ages.</li>
        <li>Tues-Fri: 5:30 PM &amp; 6:45 PM; Sat/Sun/Holidays: 11:30 AM, 12:45 PM, 5:30 PM, 6:45 PM, 8:00 PM</li>
        <li>Closed Mondays</li>
        <li><a href="https://www.planetmad.es" target="_blank" rel="noopener" className="text-blue-600 hover:underline">planetmad.es</a></li>
        <li>Tel. 914-673-898</li>
      </ul>
      <h4 className="font-semibold mt-3">IMAX Madrid</h4>
      <ul className="text-sm mb-2">
        <li>Parque Tierno Galvan, Meneses, S/N, 28045 (Metro: Mendez Alvaro)</li>
        <li>The most advanced Large Scale Cinema in history. Three projection systems: Imax, Omnimax, Imax 3D</li>
        <li>11:00 AM - 10:15 PM, open year round</li>
        <li><a href="https://www.imaxmadrid.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline">imaxmadrid.com</a>; Email: imaxmdr@imaxmadrid.com</li>
        <li>Tel. 914-674-800</li>
      </ul>
    </CardContent>
  </Card>
);

export default PlanetariumIMAXCard;
