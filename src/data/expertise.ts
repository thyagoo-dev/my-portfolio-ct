import type { ExpertiseCategory } from '../types';

// Ícones são resolvidos por nome em TechIcon (TECH_ICONS) — sem classes devicon.
export const expertise: ExpertiseCategory[] = [
  {
    title: 'Linguagens e Tecnologias',
    items: [
      { name: 'Java' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'SQL' },
    ],
  },
  {
    title: 'Frameworks/Bibliotecas',
    items: [
      { name: 'Spring Boot' },
      { name: 'React' },
      { name: 'Node.js' },
    ],
  },
  {
    title: 'Bancos de dados',
    items: [
      { name: 'PostgreSQL' }, 
      { name: 'MySQL' }
    ],
  },
  {
    title: 'CI/CD & DevOps',
    items: [
      { name: 'Git' },
      { name: 'GitHub Actions' },
      { name: 'Docker' },
    ],
  },
  {
    title: 'Web 3.0 & Especialidades',
    items: [
      { name: 'Blockchain' }, 
      { name: 'Web 3.0' }, 
      { name: 'Extensões de Navegador' }
    ],
  },
  {
    title: 'Ferramentas',
    items: [
      { name: 'VS Code' }, 
      { name: 'GitHub' }, 
      { name: 'Figma' }
    ],
  },
];