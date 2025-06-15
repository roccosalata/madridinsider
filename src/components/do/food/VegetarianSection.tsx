
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Vegan, Clock, Phone, Mail, Globe, MapPin, ArrowRight } from 'lucide-react';
import { vegetarianRestaurants } from '@/data/do/food/vegetarianRestaurants';

const VegetarianSection = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
        <Vegan className="h-8 w-8 text-madrid-red" />
        Vegetarian Restaurants & Grocery Stores
      </h2>
       <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-12">Vegetarian food is gaining more and more popularity in Madrid. Recently, more and more restaurants that promote vegetarian cuisine have opened and offer elaborately prepared recipes which yield innovative and very tasty dishes combining basic ingredients such as fresh fruits, vegetables, seitan or tofu.</p>
       <div className="text-center mb-12">
        <Button asChild>
          <Link to="/living-in-madrid/shopping-services/health-food-stores" className="flex items-center">
            Find Health Food & Grocery Stores
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {vegetarianRestaurants.map(item => (
          <Card key={item.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader><CardTitle>{item.name}</CardTitle></CardHeader>
            <CardContent className="flex-grow space-y-2 text-sm text-gray-600">
              {item.address && <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-madrid-red" /> {item.address}</p>}
              {item.description && <p className="text-gray-700 mb-2">{item.description}</p>}
              {item.hours && <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-madrid-red" /> {item.hours}</p>}
              {item.phone && <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-madrid-red" /> {item.phone}</p>}
              {item.email && <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-madrid-red" /> <a href={`mailto:${item.email}`} className="text-madrid-red hover:underline">{item.email}</a></p>}
              {item.website && <p className="flex items-center gap-2"><Globe className="h-4 w-4 text-madrid-red" /> <a href={`http://${item.website}`} target="_blank" rel="noopener noreferrer" className="text-madrid-red hover:underline">{item.website}</a></p>}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default VegetarianSection;
