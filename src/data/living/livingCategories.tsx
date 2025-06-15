
import React from 'react';
import { Home, FileText, Landmark, HeartPulse, Wifi, Briefcase, School, ShoppingCart, Store, Mail, Church, GraduationCap, Users, Clipboard, Star, ClipboardList } from 'lucide-react';

export const livingCategories = [
  {
    slug: 'paperwork',
    title: 'Paperwork & NIE/TIE',
    link: '/living-in-madrid/paperwork',
    icon: FileText,
    description: "Navigate the necessary paperwork for living in Madrid, including NIE/TIE applications."
  },
  {
    slug: 'accommodation',
    title: 'Finding Accommodation',
    link: '/living-in-madrid/accommodation',
    icon: Home,
    description: "Tips and resources for finding apartments, rooms, and long-term housing."
  },
  {
    slug: 'banking',
    title: 'Banking & Finances',
    link: '/living-in-madrid/banking',
    icon: Landmark,
    description: "Guide to opening a bank account and managing your finances in Spain."
  },
  {
    slug: 'healthcare',
    title: 'Healthcare Guide',
    link: '/living-in-madrid/healthcare',
    icon: HeartPulse,
    description: "An overview of the Spanish healthcare system, including public and private options."
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
    title: 'Working in Madrid',
    link: '/living-in-madrid/work',
    icon: Briefcase,
    description: "Information on finding a job and navigating the work culture in Madrid."
  },
  {
    slug: 'education',
    title: 'Education & Schools',
    link: '/living-in-madrid/education',
    icon: School,
    description: "Find information about schools, universities, and childcare options."
  },
  {
    slug: 'shopping-services',
    title: 'Shopping & Services',
    link: '/living-in-madrid/shopping-services',
    icon: ShoppingCart,
    description: 'A guide to various shopping and daily services available in the city.'
  },
  {
    slug: 'markets',
    title: 'Markets',
    link: '/living-in-madrid/markets',
    icon: Store,
    description: 'Explore Madrid’s flea markets and vibrant food markets.'
  },
  {
    slug: 'postal-services',
    title: 'Postal Services',
    link: '/living-in-madrid/postal-services',
    icon: Mail,
    description: 'Learn about mail services, post offices, and sending packages.'
  },
  {
    slug: 'religions-faiths',
    title: 'Religions & Faiths',
    link: '/living-in-madrid/religions-faiths',
    icon: Church,
    description: 'Find places of worship and information about different religious communities.'
  },
  {
    slug: 'student-life',
    title: 'Student Life',
    link: '/living-in-madrid/student-life',
    icon: GraduationCap,
    description: 'A guide for students on living, studying, and socializing in Madrid.'
  },
  {
    slug: 'community-integration',
    title: 'Community & Integration',
    link: '/living-in-madrid/community-integration',
    icon: Users,
    description: 'Tips for meeting people, joining communities, and integrating into Madrid life.'
  },
  {
    slug: 'internships',
    title: 'Internships',
    link: '/living-in-madrid/internships',
    icon: Clipboard,
    description: 'Information about finding and securing internships in Madrid.'
  },
  {
    slug: 'talent-agencies',
    title: 'Talent Agencies',
    link: '/living-in-madrid/talent-agencies',
    icon: Star,
    description: 'A list of talent agencies for actors, models, and performers.'
  },
  {
    slug: 'daily-necessities-services',
    title: 'Daily Necessities & Services',
    link: '/living-in-madrid/daily-necessities-services',
    icon: ClipboardList,
    description: "Find information on daily services, from groceries to laundromats."
  },
];
