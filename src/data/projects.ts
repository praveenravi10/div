import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'smartbridgecx',
    title: 'SmartBridgeCX — AI-Powered Contact Center',
    description:
      'React customer widget using ACS SDK for WebRTC-based video calling and live chat, with a multi-tenant admin portal featuring ag-Grid, JWT auth, and role-based dynamic menus.',
    longDescription:
      'Engineered a React customer widget using ACS SDK for WebRTC-based video calling and live chat. Improved video call quality by reducing average latency by 10%. Architected a multi-tenant admin portal with a reusable ag-Grid wrapper, Axios interceptor pipeline for JWT authentication, and role-based dynamic sidebar menus driven by backend API data. Optimized performance using lazy loading, memoization, and efficient state management.',
    tech: ['React', 'TypeScript', 'ACS SDK', 'WebRTC', 'ag-Grid', 'Axios', 'JWT', 'Node.js'],
    category: 'frontend',
    featured: true,
    year: 2024,
  },
  {
    id: 'fifth-third',
    title: 'Fifth Third — Commercial Finance Application',
    description:
      'React admin dashboard for managing card deals, approval workflows, economic analysis, and rebate grid calculations with .NET Core REST API integration.',
    longDescription:
      'Designed a React admin dashboard for managing card deals, approval workflows, economic analysis, and rebate grid calculations. Integrated .NET Core REST APIs with JWT authentication, dynamic variables, payment term summaries, and Mastercard data processing. Built modular UI using Redux + Context API, MUI DataGrid, form validation, and multi-language support.',
    tech: ['React', 'TypeScript', 'Redux', 'Context API', 'MUI DataGrid', '.NET Core', 'JWT'],
    category: 'frontend',
    featured: true,
    year: 2024,
  },
  {
    id: 'ott-platform',
    title: 'OTT — Streaming Platform',
    description:
      'Scalable UI components for video browsing, playback, and content discovery with REST API integrations and cross-device performance optimizations.',
    longDescription:
      'Built scalable UI components for video browsing, playback, and content discovery. Consumed REST APIs for content management, metadata fetching, and video playback services. Enhanced cross-device performance, ensuring a smooth and consistent experience on web and mobile.',
    tech: ['React', 'JavaScript', 'TypeScript', 'REST APIs', 'Tailwind CSS', 'Bootstrap'],
    category: 'frontend',
    featured: true,
    year: 2023,
  },
];

export const projectCategories = [
  { value: 'all', label: 'All Projects' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'fullstack', label: 'Full Stack' },
  { value: 'ui', label: 'UI Systems' },
] as const;
