
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const ShoppingHub = () => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-madrid-red">
          <ShoppingBag className="h-6 w-6" />
          <span className="text-xl">Shopping</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col">
        <p className="text-gray-700 mb-4">
          From luxury brands on the Golden Mile to unique boutiques and bustling markets.
        </p>
        <Button asChild variant="outline" className="w-full mt-auto">
          <Link to="/do-in-madrid/shopping" className="flex items-center justify-center gap-2">
            Explore Shopping <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ShoppingHub;
