export interface Project {
  id: string;
  slug?: string;
  title: string;
  shortDescription?: string;
  detailedDescription?: string;
  description: string;
  image: string;
  github?: string;
  online?: string;
  detailPath: string;
  stack?: string[];
  features?: string[];
  technologies: string[];
  category: 'pessoal' | 'real';
  summary?: {
    problema: string;
    solucao: string;
    stack: string;
  };
  detailed_info?: {
    desafio: string;
    solucao: string;
    impacto: string;
    arquitetura: {
      frontend: string;
      api: string;
      banco: string;
    };
    decisoes: {
      autenticacao: string;
      backend: string;
      deploy: string;
      banco: string;
    };
    tech_v2: {
      name: string;
      icon: string;
      color?: string;
    }[];
  };
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  type: 'current' | 'past';
  icon: string;
  achievements: string[];
  description?: string;
}

export interface Education {
  id: string;
  institution: string;
  course: string;
  period: string;
  icon: string;
}

export interface ExpertiseCategory {
  title: string;
  items: ExpertiseItem[];
}

export interface ExpertiseItem {
  name: string;
  icon: string;
  iconType: 'devicon' | 'lucide' | 'svg';
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  category: string;
  image?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  detail: string;
  iconType: 'react' | 'lucide' | 'bootstrap';
}

export interface ContactFormData {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

export interface GalleryAlbum {
  id: string;
  title: string;
  images: { src: string; alt: string }[];
}

export interface KpiItem {
  value: string;
  label: string;
}

export interface ResultItem {
  value: string;
  label: string;
}
