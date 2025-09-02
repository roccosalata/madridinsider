
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import CategoryNavigation from '@/components/CategoryNavigation';
import ContentCard from '@/components/ContentCard';
import NewsletterSection from '@/components/NewsletterSection';
import { Button } from '@/components/ui/button';
import { Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'planning', label: 'Trip Planning' },
  { id: 'neighborhoods', label: 'Neighborhoods' },
  { id: 'food', label: 'Food & Drink' },
  { id: 'culture', label: 'Arts & Culture' },
  { id: 'itineraries', label: 'Itineraries' },
];

const contentData = {
  planning: {
    sections: [
      {
        title: 'Before You Arrive',
        cards: [
          {
            title: 'Best Time to Visit',
            description: 'Seasonal guide to Madrid\'s weather, events, and crowd levels',
            image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            category: 'Planning',
            readTime: '5 min read'
          },
          {
            title: 'Budget Planning',
            description: 'Daily cost estimates and money-saving tips for Madrid',
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1611&q=80',
            category: 'Planning',
            readTime: '7 min read'
          },
          {
            title: 'Transportation Guide',
            description: 'Navigating Madrid\'s metro, buses, taxis, and bike shares',
            image: 'https://images.unsplash.com/photo-1593537612373-cc3610f5a04a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            category: 'Planning',
            readTime: '10 min read'
          }
        ]
      },
      {
        title: 'Accommodation',
        cards: [
          {
            title: 'Where to Stay',
            description: 'Best neighborhoods for different travel styles and budgets',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            category: 'Accommodation',
            readTime: '8 min read'
          },
          {
            title: 'Hotel Recommendations',
            description: 'Top-rated hotels across different price ranges',
            image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80',
            category: 'Accommodation',
            readTime: '6 min read'
          }
        ]
      }
    ]
  },
  neighborhoods: {
    sections: [
      {
        title: 'Central Districts',
        cards: [
          {
            title: 'Sol-Gran Vía',
            description: 'Madrid\'s bustling heart with shopping, entertainment, and history',
            image: 'https://images.unsplash.com/photo-1629968417850-afdfa5e87b4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
            category: 'Central',
            readTime: '9 min read'
          },
          {
            title: 'La Latina',
            description: 'Historic streets, tapas bars, and Sunday flea market',
            image: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            category: 'Central',
            readTime: '7 min read'
          },
          {
            title: 'Lavapiés',
            description: 'Multicultural and bohemian neighborhood with diverse food scene',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            category: 'Central',
            readTime: '8 min read'
          }
        ]
      },
      {
        title: 'Trendy Areas',
        cards: [
          {
            title: 'Malasaña',
            description: 'Alternative culture, vintage shops, and vibrant nightlife',
            image: 'https://images.unsplash.com/photo-1574705398180-0c7da4dc5c32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            category: 'Trendy',
            readTime: '8 min read'
          },
          {
            title: 'Chueca',
            description: 'LGBTQ+ friendly neighborhood with chic boutiques and cafes',
            image: 'https://images.unsplash.com/photo-1616387330735-887b94ff7e33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            category: 'Trendy',
            readTime: '6 min read'
          },
          {
            title: 'Salamanca',
            description: 'Upscale district with luxury shopping and fine dining',
            image: 'https://images.unsplash.com/photo-1581873374393-499e7c6d9a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            category: 'Trendy',
            readTime: '7 min read'
          }
        ]
      }
    ]
  },
  food: {
    sections: [
      {
        title: 'Tapas Culture',
        cards: [
          {
            title: 'Tapas Etiquette',
            description: 'How to order and enjoy tapas like a local',
            image: 'https://images.unsplash.com/photo-1559847844-d721426d1f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            category: 'Tapas',
            readTime: '5 min read'
          },
          {
            title: 'Best Tapas Bars',
            description: 'Top spots for authentic Spanish tapas in La Latina',
            image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            category: 'Tapas',
            readTime: '8 min read'
          }
        ]
      }
    ]
  },
  culture: {
    sections: [
      {
        title: 'Museums & Galleries',
        cards: [
          {
            title: 'Prado Museum',
            description: 'World-class art collection and masterpieces',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            category: 'Museums',
            readTime: '12 min read'
          }
        ]
      }
    ]
  },
  itineraries: {
    sections: [
      {
        title: 'Themed Routes',
        cards: [
          {
            title: 'First-Time Visitor',
            description: 'Essential sights and experiences for Madrid newcomers',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            category: 'Itinerary',
            readTime: '15 min read'
          }
        ]
      }
    ]
  }
};

const IndexPage = () => {
  const [activeCategory, setActiveCategory] = useState('planning');
  
  return (
    <Layout>
      {/* Hero Section */}
      <header className="madrid-hero min-h-screen flex flex-col text-white">
        <nav className="flex justify-between items-center p-6 container mx-auto">
          <Link to="/" className="flex items-center text-3xl font-bold">
            <Building className="h-8 w-8 text-madrid-gold mr-3" />
            Madrid Insider
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <a href="#planning" className="hover:text-madrid-gold transition-colors">Planning</a>
            <a href="#neighborhoods" className="hover:text-madrid-gold transition-colors">Neighborhoods</a>
            <a href="#food" className="hover:text-madrid-gold transition-colors">Food & Drink</a>
            <a href="#culture" className="hover:text-madrid-gold transition-colors">Arts & Culture</a>
            <a href="#itineraries" className="hover:text-madrid-gold transition-colors">Itineraries</a>
          </div>
        </nav>
        
        <div className="flex-1 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-shadow-2xl">
            Discover the Real Madrid
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90">
            Your insider's guide to Spain's vibrant capital - from hidden gems to local favorites
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 text-lg rounded-full"
          >
            <a href="#explore">Start Exploring</a>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-20 px-6" id="explore">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-primary mb-6">Madrid Insider Guides</h2>
          <p className="text-lg text-madrid-gray max-w-3xl mx-auto">
            Explore our comprehensive guides to make the most of your Madrid experience
          </p>
        </div>
        
        <CategoryNavigation 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        {/* Content Sections */}
        <div className="space-y-16">
          {contentData[activeCategory]?.sections.map((section, sectionIndex) => (
            <section key={sectionIndex}>
              <h3 className="text-3xl font-bold text-madrid-red-dark mb-8 pb-4 border-b-2 border-madrid-gold">
                {section.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.cards.map((card, cardIndex) => (
                  <ContentCard key={cardIndex} {...card} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <NewsletterSection />
    </Layout>
  );
};

export default IndexPage;

