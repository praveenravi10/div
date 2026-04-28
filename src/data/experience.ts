import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Associate Software Engineer',
    company: 'SBNA Software Solutions Pvt. Ltd.',
    location: 'Coimbatore, TN, India',
    startDate: 'Oct 2023',
    endDate: 'Apr 2026',
    description: [
      'Developed and maintained scalable frontend features using React, improving application performance by 30%.',
      'Directly collaborated with clients to gather functional and UI requirements.',
      'Created an AI-powered React.js contact center interface with multi-channel chat/call support.',
      'Architected multi-tenant admin portal with reusable ag-Grid components, Axios JWT interceptor pipeline, and role-based dynamic sidebar menus.',
      'Integrated Microsoft Graph API for Teams call handling and messaging workflows.',
      'Built and enhanced an OTT streaming platform application using React.',
      'Designed and developed React admin dashboard for card deals, approval workflows, economic analysis, and rebate grid calculations.',
    ],
    tech: ['React', 'TypeScript', 'Redux', 'ACS SDK', 'WebRTC', 'ag-Grid', 'MUI', 'Node.js', '.NET Core'],
    type: 'full-time',
  },
  {
    id: 'exp-2',
    role: 'Front End Developer',
    company: 'Byzero Technologies',
    location: 'Erode, TN, India',
    startDate: 'Jun 2022',
    endDate: 'Sep 2023',
    description: [
      'Built scalable UI components for video browsing, playback, and content discovery on an OTT streaming platform.',
      'Consumed REST APIs for content management, metadata fetching, and video playback services.',
      'Enhanced cross-device performance, ensuring a smooth and consistent experience on web and mobile.',
      'Implemented responsive layouts and optimized Core Web Vitals via code splitting and lazy loading.',
    ],
    tech: ['React', 'JavaScript', 'TypeScript', 'REST APIs', 'Tailwind CSS', 'Bootstrap'],
    type: 'full-time',
  },
];
