
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CategoryLinkProps {
  to: string;
  title: string;
  description: string;
}

const CategoryLink = ({ to, title, description }: CategoryLinkProps) => (
  <Link to={to} className="no-underline">
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="text-madrid-red">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  </Link>
);

export default CategoryLink;
