
import { ReactNode } from 'react';

interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
  link?: string;
}

const Feature = ({ icon, title, description, link }: FeatureProps) => {
  const content = (
    <div className="flex flex-col items-center text-center p-4 h-full">
      <div className="text-madrid-red mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
      {link && (
        <div className="mt-4">
          <span className="text-madrid-red hover:underline font-medium">
            Learn more →
          </span>
        </div>
      )}
    </div>
  );

  if (link) {
    return (
      <a href={link} className="block h-full hover:shadow-lg transition-shadow rounded-lg">
        {content}
      </a>
    );
  }

  return <div className="h-full">{content}</div>;
};

interface FeatureSectionProps {
  title?: string;
  subtitle?: string;
  features: Array<{
    icon: ReactNode;
    title: string;
    description: string;
    link?: string;
  }>;
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

const FeatureSection = ({ 
  title, 
  subtitle,
  features, 
  columns = 4,
  className = "py-12 bg-gray-50"
}: FeatureSectionProps) => {
  const gridClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  }[columns];

  return (
    <section className={className}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl font-bold mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className={`grid ${gridClass} gap-6`}>
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              link={feature.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
