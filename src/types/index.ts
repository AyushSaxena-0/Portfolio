export interface Project {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  technologies: string[];
  architecture: {
    overview: string;
    components: { name: string; description: string; tech: string }[];
    flowSteps: string[];
  };
  metrics: { label: string; value: string }[];
  githubUrl: string;
  demoUrl: string;
  caseStudyUrl?: string;
  badge: string;
  accentColor: 'blue' | 'teal' | 'indigo';
  mockupType: 'rag' | 'audio' | 'security' | 'video';
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verifyUrl: string;
  skills: string[];
  icon: string;
}

export interface TechCategory {
  name: string;
  description: string;
  skills: { name: string; level: string; icon: string; highlight?: boolean }[];
}

export interface PinnedRepo {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  languageColor: string;
  url: string;
}
