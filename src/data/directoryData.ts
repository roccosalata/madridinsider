
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
      introduction: 'Information about talent agencies is coming soon.'
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
      introduction: 'Information about community and integration is coming soon.'
    },
    'daily-necessities-services': {
      title: 'Daily Necessities & Services',
      introduction: 'Information about daily necessities and services is coming soon.'
    }
  }
};
