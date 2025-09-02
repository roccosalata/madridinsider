import React, { useState } from 'react';
import { Button } from './ui/button';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Stay Updated with Madrid Insider</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
          Get weekly updates on new guides, hidden gems, and insider tips delivered straight to your inbox.
        </p>
        
        <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 px-6 py-4 rounded-l-full border-0 text-madrid-dark focus:outline-none focus:ring-2 focus:ring-madrid-gold"
          />
          <Button
            type="submit"
            className="bg-madrid-gold hover:bg-madrid-gold/90 text-madrid-dark font-semibold px-8 rounded-r-full rounded-l-none"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;