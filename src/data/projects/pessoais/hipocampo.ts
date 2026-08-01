import type { Project } from '../../../types';

export const hipocampo: Project = {
  id: 'hipocampo',
  slug: 'hipocampo',
  title: 'Hipocampo',
  shortDescription: 'Workspace modular pessoal e local-first.',
  detailedDescription:
    'O Hipocampo é uma alternativa pessoal e autoral ao Notion e ao Obsidian. A aplicação reúne documentos, agenda, quadro Kanban, metas, notas rápidas e atalhos em uma interface modular e altamente customizável. A proposta é combinar a flexibilidade de organização visual com a autonomia e o foco em conhecimento pessoal, adaptados ao fluxo de trabalho do usuário.',
  description:
    'Workspace "local-first" construído com React 19 que integra dashboard modular, editor de textos rico (TipTap), calendário e Kanban em um único ambiente. Os dados de trabalho são mantidos de forma persistente e rápida no navegador do usuário, com autenticação segura via Auth0.',
  image: '/images/fotos-projetos-pessoais/hipocampo/capa.webp',
  github: 'https://github.com/SEU_USUARIO_GITHUB/hipocampo',
  detailPath: '/projetos/hipocampo',
  technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Auth0'],
  stack: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Vite', 'TipTap'],
  features: ['Dashboard modular arrastável', 'Editor de texto rico', 'Calendário & Kanban', 'Persistência Local-First'],
  category: 'pessoal',
  summary: {
    problema: 'Ferramentas de produtividade genéricas e descentralizadas que não se adaptam perfeitamente a fluxos de trabalho altamente pessoais.',
    solucao: 'Criação de um ecossistema modular próprio que unifica notas, planejamento e execução com respostas instantâneas (sem dependência de banco remoto).',
    stack: 'React 19, Zustand e Tailwind CSS',
  },
  detailed_info: {
    desafio: 'Desenvolver um dashboard arrastável (drag-and-drop) e um editor de texto robusto (rich-text) gerenciando estados complexos exclusivamente no frontend.',
    solucao: 'Utilização do Zustand para dividir a lógica em múltiplos stores persistentes (app, agenda, UI, commands) e adoção das bibliotecas dnd-kit e TipTap para interações avançadas.',
    impacto: 'Um ambiente de produtividade rápido, livre de latência de rede, focado na experiência do usuário e com layout altamente adaptável.',
    arquitetura: {
      frontend: 'React 19 + TypeScript + Zustand',
      api: 'N/A (Local-First)',
      banco: 'LocalStorage',
    },
    decisoes: {
      autenticacao: 'Integração com Auth0',
      backend: 'N/A',
      deploy: 'Vercel / Local',
      banco: 'Persistência via middleware do Zustand',
    },
    tech_v2: [
      { name: 'React', icon: 'devicon-react-original colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    ],
  },
  screenshots: [
    '/images/fotos-projetos-pessoais/hipocampo/capa.webp',
    '/images/fotos-projetos-pessoais/hipocampo/1.webp',
    '/images/fotos-projetos-pessoais/hipocampo/2.webp',
    '/images/fotos-projetos-pessoais/hipocampo/3.webp',
  ],
};