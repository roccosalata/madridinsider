import React from 'react';
import { Compass, Home } from 'lucide-react'; // Import necessary icons
// We keep the import of Layout as the page should still be wrapped in the layout
import Layout from '@/components/Layout';

const mainCategories = [
  {
    title: "Madrid Essentials",
    description: "Essential information for tourists visiting Madrid.",
    imageUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=1000&auto=format&fit=crop", // Placeholder
    link: "/madrid-essentials",
    icon: <Compass className="h-6 w-6" />,
    // subcategories will be defined elsewhere or on the category page
    subcategories: []
  },
  {
    title: "Living in Madrid",
    description: "Essential information and resources for residents, students, and expats.",
    imageUrl: "https://images.unsplash.com/photo-1551896235-94561d5d3fcc?q=80&w=1000&auto=format&fit=crop", // Placeholder
    link: "/living-in-madrid",
    icon: <Home className="h-6 w-6" />, // Using Home icon, can change later
    subcategories: []
  },
  {
    title: "See in Madrid",
    description: "Explore the sights and attractions of Madrid.",
    imageUrl: "https://images.unsplash.com/photo-1577782853630-673eafa2c209?q=80&w=1000&auto=format&fit=crop", // Placeholder, can be updated
    link: "/see-in-madrid",
    icon: null, // Placeholder for icon
    subcategories: []
  },
  {
    title: "DO",
    description: "Find activities and experiences in Madrid.",
    imageUrl: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?q=80&w=1000&auto=format&fit=crop", // Placeholder, can be updated
    link: "/do-in-madrid",
    icon: null, // Placeholder for icon
    subcategories: []
  },
  {
    title: "Madrid Now",
    description: "Latest events and happenings in Madrid.",
    imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=1000&auto=format&fit=crop", // Placeholder, can be updated
    link: "/madrid-now",
    icon: null, // Placeholder for icon
    subcategories: []
  },
];

// This is the main component for your homepage
const IndexPage = () => {
  return (
    // Wrap the content intended for the homepage within the Layout component
    <Layout>
      <h1>Welcome to Madrid Insider</h1>
      <h2>Explore our categories:</h2>
      <ul>
        {mainCategories.map(category => (
          <li key={category.title}>
            <a href={category.link}>{category.title}</a>
          </li>
        ))}
      </ul>
    </Layout>
  );
};
export default IndexPage; // Export the component as the default export

export { mainCategories };