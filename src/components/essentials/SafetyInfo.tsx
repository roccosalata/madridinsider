
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, AlertTriangle, HeartPulse, UserCheck, PhoneCall, MoonStar } from 'lucide-react';
import { safetyTips } from '@/data/practicalInfoData';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const SafetyInfo = () => {
    const getIcon = (category: string) => {
        switch (category.toLowerCase()) {
            case 'pickpocketing': return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
            case 'scams': return <UserCheck className="h-5 w-5 text-orange-500" />;
            case 'emergency': return <PhoneCall className="h-5 w-5 text-red-500" />;
            case 'night safety': return <MoonStar className="h-5 w-5 text-blue-500" />;
            case 'health': return <HeartPulse className="h-5 w-5 text-green-500" />;
            default: return <ShieldCheck className="h-5 w-5" />;
        }
    }

    return (
        <Card id="safety">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5" />
                    Safety & Security
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-gray-600 mb-4">
                    Madrid is a relatively safe city, but like any major European capital, it's wise to be aware of your surroundings. Here are some tips to ensure a safe and enjoyable visit.
                </p>
                <Accordion type="single" collapsible className="w-full">
                    {safetyTips.map((category) => (
                        <AccordionItem value={category.category} key={category.category}>
                            <AccordionTrigger className="font-semibold hover:no-underline">
                                <div className="flex items-center gap-3">
                                    {getIcon(category.category)}
                                    {category.category}
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <ul className="list-disc space-y-2 pl-6 text-gray-600">
                                    {category.tips.map((tip, index) => (
                                        <li key={index}>{tip}</li>
                                    ))}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
    );
}

export default SafetyInfo;
