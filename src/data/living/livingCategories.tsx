
import React from 'react';
import { Home, FileText, Landmark, HeartPulse, Wifi, Briefcase, School, ShoppingCart, Store, Church, Users, Settings } from 'lucide-react';

export const livingCategories = [
  {
    slug: 'essential-services',
    title: 'Paperwork & Essential Services',
    link: '/living-in-madrid/essential-services',
    icon: Settings,
    description: 'Banking, utilities, housing, and the crucial NIE/TIE paperwork to get you started.'
  },
  {
    slug: 'healthcare',
    title: 'Healthcare in Madrid',
    link: '/living-in-madrid/healthcare',
    icon: HeartPulse,
    description: 'A complete guide to public and private healthcare, doctors, and pharmacies in Madrid.'
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
];
