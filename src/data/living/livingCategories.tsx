
import React from 'react';
import { Home, FileText, Landmark, HeartPulse, Wifi, Briefcase, School, ShoppingCart, Store, Church, Users } from 'lucide-react';

export const livingCategories = [
  {
    slug: 'community-integration',
    title: 'Community & Integration',
    link: '/living-in-madrid/community-integration',
    icon: Users,
    description: 'Tips for meeting people, joining communities, and integrating into Madrid life.'
  },
  {
    slug: 'shopping-services',
    title: 'Shops & Services',
    link: '/living-in-madrid/shopping-services',
    icon: ShoppingCart,
    description: 'Essential shops, markets, postal services, and other services for daily life in Madrid.'
  },
  {
    slug: 'healthcare',
    title: 'Healthcare Guide',
    link: '/living-in-madrid/healthcare',
    icon: HeartPulse,
    description: "An overview of the Spanish healthcare system, including public and private options."
  },
  {
    slug: 'banking',
    title: 'Banking & Finances',
    link: '/living-in-madrid/banking',
    icon: Landmark,
    description: "Guide to opening a bank account and managing your finances in Spain."
  },
  {
    slug: 'utilities',
    title: 'Internet & Utilities',
    link: '/living-in-madrid/utilities',
    icon: Wifi,
    description: "Setting up internet, electricity, gas, and water services in your new home."
  },
  {
    slug: 'work',
    title: 'Work & Professional Life',
    link: '/living-in-madrid/work',
    icon: Briefcase,
    description: "Information on finding a job, internships, and navigating the work culture in Madrid."
  },
  {
    slug: 'education',
    title: 'Education & Student Life',
    link: '/living-in-madrid/education',
    icon: School,
    description: "Find information about schools, universities, childcare options, and student life."
  },
  {
    slug: 'religions-faiths',
    title: 'Religions & Faiths',
    link: '/living-in-madrid/religions-faiths',
    icon: Church,
    description: 'Find places of worship and information about different religious communities.'
  },
  {
    slug: 'accommodation',
    title: 'Finding Accommodation',
    link: '/living-in-madrid/accommodation',
    icon: Home,
    description: "Tips and resources for finding apartments, rooms, and long-term housing."
  },
  {
    slug: 'paperwork',
    title: 'Paperwork & NIE/TIE',
    link: '/living-in-madrid/paperwork',
    icon: FileText,
    description: "Navigate the necessary paperwork for living in Madrid, including NIE/TIE applications."
  },
];
