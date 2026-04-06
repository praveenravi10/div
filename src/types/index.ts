// ─── Project Types ───────────────────────────────────────────────
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  category: ProjectCategory;
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  featured: boolean;
  year: number;
}

export type ProjectCategory = 'all' | 'frontend' | 'fullstack' | 'webrtc' | 'ui';

// ─── Skill Types ─────────────────────────────────────────────────
export interface Skill {
  name: string;
  level: number; // 0–100
  icon?: string;
  category: SkillCategory;
  color?: string;
}

export type SkillCategory = 'frontend' | 'backend' | 'tools' | 'webrtc';

// ─── Experience Types ────────────────────────────────────────────
export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  tech: string[];
  type: 'full-time' | 'contract' | 'freelance' | 'internship';
}

// ─── Contact Form Types ──────────────────────────────────────────
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// ─── Toast Types ─────────────────────────────────────────────────
export type ToastVariant = 'success' | 'error' | 'info' | 'warning';

export interface Toast {
  id: string;
  message: string;
  variant: ToastVariant;
  duration?: number;
}

// ─── Theme Types ─────────────────────────────────────────────────
export type Theme = 'dark' | 'light';
