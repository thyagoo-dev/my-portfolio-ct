import type { Project } from '../../../types';

export const vksoftware: Project = {
  id: 'vksoftware',
  slug: 'vksoftware',
  title: 'VK Software',
  shortDescription: 'Web app institucional com design system.',
  detailedDescription:
    'Plataforma web com identidade visual própria e estrutura escalável para evolução de produtos digitais.',
  description: 'Web App e plataforma da empresa VK Software com design system próprio.',
  image: '/images/fotos-projetos-reais/vksoftware/1.png',
  detailPath: '/projetos/vksoftware',
  technologies: ['Web App', 'Design System', 'Escalabilidade'],
  stack: ['React', 'TypeScript', 'CSS'],
  features: ['Design system', 'Arquitetura escalável', 'Experiência de marca'],
  category: 'real',
  summary: {
    problema: 'Ausência de uma plataforma unificada e escalável para a marca',
    solucao: 'SaaS/Web App com design system próprio e arquitetura moderna',
    stack: 'React, TypeScript e CSS',
  },
  detailed_info: {
    desafio: 'Construir uma base tecnológica sólida que permita a criação rápida de novos produtos digitais.',
    solucao: 'Uso de React com TypeScript e um Design System baseado em tokens CSS.',
    impacto: 'Plataforma escalável e com identidade visual consistente em todos os pontos de contato.',
    arquitetura: {
      frontend: 'React 19 + TypeScript',
      api: 'Integrações Externas',
      banco: 'Não aplicável / Local Storage',
    },
    decisoes: {
      autenticacao: 'Em implementação',
      backend: 'Serverless / API Routes',
      deploy: 'Vercel para CI/CD contínuo',
      banco: 'Nenhum por enquanto',
    },
    tech_v2: [
      { name: 'React', icon: 'devicon-react-original colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'Vite', icon: 'devicon-vite-plain colored' },
      { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    ],
  },
  screenshots: [
    '/images/fotos-projetos-reais/vksoftware/1.png',
    '/images/fotos-projetos-reais/vksoftware/2.png',
    '/images/fotos-projetos-reais/vksoftware/3.png',
    '/images/fotos-projetos-reais/vksoftware/4.png',
    '/images/fotos-projetos-reais/vksoftware/5.png',
    '/images/fotos-projetos-reais/vksoftware/6.png',
    '/images/fotos-projetos-reais/vksoftware/7.png',
    '/images/fotos-projetos-reais/vksoftware/8.png',
    '/images/fotos-projetos-reais/vksoftware/9.png',
    '/images/fotos-projetos-reais/vksoftware/10.png',
    '/images/fotos-projetos-reais/vksoftware/11.png',
  ],
};
