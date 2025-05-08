
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection = ({ title, subtitle, ctaText, ctaLink }: HeroSectionProps) => {
  return (
    <div className="hero-section relative min-h-[70vh] flex items-center justify-center text-center px-4">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{title}</h1>
        <p className="text-lg md:text-xl text-white/90 mb-8">{subtitle}</p>
        {ctaText && ctaLink && (
          <Link to={ctaLink}>
            <Button className="bg-madrid-red hover:bg-madrid-red/90 text-white font-medium px-6 py-2 rounded-md transition-colors text-base">
              {ctaText}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
