
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Radio } from "lucide-react";

const EnglishRadioCard = () => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-lg">
        <Radio className="h-5 w-5 text-madrid-red" />
        English-language Radio in Madrid
      </CardTitle>
    </CardHeader>
    <CardContent>
      <h3 className="font-semibold text-base mb-1">Madrid Live (in English) ― Radio Circulo</h3>
      <p className="text-sm">A dynamic half-hour of arts &amp; entertainment, presented by Ann Bateson.</p>
      <ul className="text-sm mb-2">
        <li><strong>Broadcast live:</strong> Tues 6:30pm</li>
        <li><strong>Repeat:</strong> Weds 9:30am</li>
        <li><strong>Frequency:</strong> 100.4 FM</li>
        <li>
          <a href="https://www.circulobellasartes.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener">
            circulobellasartes.com
          </a>
        </li>
        <li><strong>Email:</strong> madridlive@wanadoo.es</li>
      </ul>
    </CardContent>
  </Card>
);

export default EnglishRadioCard;
