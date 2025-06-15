export interface DirectoryCategory {
  title: string;
  introduction?: string;
  subcategories?: DirectorySubcategory[];
}

export interface DirectorySubcategory {
  title: string;
  content?: string;
  items?: any[];
}

export const directoryData: Record<string, Record<string, DirectoryCategory>> = {
  'living-in-madrid': {
    'accommodation': {
      title: 'Finding Accommodation',
      introduction: 'Information about finding accommodation in Madrid is coming soon.'
    },
    'paperwork-formalities': {
      title: 'Paperwork & Formalities',
      introduction: 'Information about paperwork and formalities is coming soon.'
    },
    'work-residency': {
      title: 'Work & Residency',
      introduction: 'Information about work and residency is coming soon.'
    },
    'talent-agencies': {
      title: 'Talent Agencies',
      introduction: 'A list of talent and casting agencies in Madrid for actors, models, and other professionals in the audiovisual industry.'
    },
    'internships': {
      title: 'Internships',
      introduction: 'Information about internships is coming soon.'
    },
    'banking-finances': {
      title: 'Banking & Finances',
      introduction: 'Information about banking and finances is coming soon.'
    },
    'connectivity-home-services': {
      title: 'Connectivity & Home Services',
      introduction: 'Information about connectivity and home services is coming soon.'
    },
    'healthcare-guide': {
      title: 'Healthcare Guide',
      introduction: 'Information about healthcare is coming soon.'
    },
    'education-childcare': {
      title: 'Education & Childcare',
      introduction: 'Information about education and childcare is coming soon.'
    },
    'working-in-madrid': {
      title: 'Working in Madrid',
      introduction: 'Information about working in Madrid is coming soon.'
    },
    'student-life': {
      title: 'Student Life',
      introduction: 'Information about student life is coming soon.'
    },
    'community-integration': {
      title: 'Community & Integration',
      introduction: 'Find ways to meet new people, join communities, and feel at home in Madrid. This section covers language exchanges, places of worship, and other opportunities to integrate into local life.'
    },
    'daily-necessities-services': {
      title: 'Daily Necessities & Services',
      introduction: 'Information about daily necessities and services is coming soon.'
    }
  }
};
