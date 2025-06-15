
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import CategoryCard from '@/components/CategoryCard';
import MadridNowSection from '@/components/MadridNowSection';
import { mainCategories } from '@/data/mainCategories';
import { format } from 'date-fns';

const HERO_BG =
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1600&q=80"; // Scenic Madrid option

const IndexPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);
  
  const madridTime = format(currentTime, 'HH:mm');
  const madridDate = format(currentTime, 'EEEE, MMMM d');
  
  console.log('Index page rendering successfully with updated categories');
  
  return (
    <Layout>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-madrid-red text-white px-4 py-2 rounded-md z-50">
        Skip to main content
      </a>
      
      <div
        className="relative py-16"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/40 pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-2xl">
              Welcome to Madrid Insider
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90 drop-shadow-lg">
              Your comprehensive English-language directory for Madrid - whether you're visiting for a few days or making Madrid your home.
            </p>
          </div>
          <MadridNowSection madridTime={madridTime} madridDate={madridDate} />
        </div>
      </div>
      
      <main id="main-content" className="container mx-auto py-12 px-4">
        <section aria-label="Main categories" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mainCategories.filter(category => category.title !== "Madrid Now").map(category => (
            <CategoryCard key={category.title} category={category} />
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;
export { mainCategories };

