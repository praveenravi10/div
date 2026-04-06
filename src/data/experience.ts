import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Front End Developer',
    company: 'SBNA Software Solutions Pvt. Ltd.',
    location: 'Coimbatore, TN, India',
    startDate: 'Oct 2023',
    endDate: 'Present',
    description: [
      'Engineered a React customer widget using ACS SDK for WebRTC-based video calling and live chat.',
      'Improved video call quality, reducing average latency by 10% through targeted optimizations.',
      'Architected a multi-tenant admin portal with a reusable ag-Grid wrapper, Axios interceptor pipeline for JWT authentication, and role-based dynamic sidebar menus driven by backend API data.',
      'Designed a React admin dashboard for managing card deals, approval workflows, economic analysis, and rebate grid calculations.',
      'Integrated .NET Core REST APIs with JWT authentication, dynamic variables, payment term summaries, and Mastercard data processing.',
      'Built modular UI using Redux + Context API, MUI DataGrid, form validation, and multi-language support.',
      'Optimized application performance using lazy loading, memoization, and efficient state management, improving overall responsiveness and user experience.',
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
