import { Skill } from '@/types';

export const skills: Skill[] = [
  // Frontend
  { name: 'React.js', level: 92, category: 'frontend', color: '#61DAFB' },
  { name: 'TypeScript', level: 88, category: 'frontend', color: '#3178C6' },
  { name: 'JavaScript', level: 90, category: 'frontend', color: '#F7DF1E' },
  { name: 'HTML5 / CSS3', level: 90, category: 'frontend', color: '#E34F26' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend', color: '#38BDF8' },
  { name: 'Bootstrap', level: 80, category: 'frontend', color: '#7952B3' },
  { name: 'Redux', level: 85, category: 'frontend', color: '#764ABC' },

  // Tools & State
  { name: 'Git (GitHub / GitLab)', level: 88, category: 'tools', color: '#F05032' },
  { name: 'Docker (Basic)', level: 55, category: 'tools', color: '#2496ED' },
  { name: 'CI/CD Basics', level: 60, category: 'tools', color: '#0A0A0A' },
  { name: 'Vite / Webpack', level: 78, category: 'tools', color: '#BD34FE' },

  // Backend
  { name: 'Node.js (Express)', level: 70, category: 'backend', color: '#339933' },
  { name: 'PostgreSQL', level: 68, category: 'backend', color: '#336791' },
  { name: 'MongoDB', level: 65, category: 'backend', color: '#47A248' },
  { name: 'REST APIs', level: 88, category: 'backend', color: '#0052CC' },
];

export const skillCategories = [
  { value: 'frontend', label: 'Frontend' },
  { value: 'tools', label: 'Tools & DevOps' },
  { value: 'backend', label: 'Backend' },
] as const;
