import type { ExpertiseCategory } from '../types';

// Ícones são resolvidos por nome em TechIcon (TECH_ICONS) — sem classes devicon.
export const expertise: ExpertiseCategory[] = [
  {
    title: 'Linguagens e Tecnologias',
    items: [
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Node.js' },
      { name: 'PHP' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'SQL' },
    ],
  },
  {
    title: 'Frameworks/Bibliotecas',
    items: [
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Nest.js' },
      { name: 'Django' },
      { name: 'Laravel' },
      { name: 'Bootstrap' },
    ],
  },
  {
    title: 'Bancos de dados',
    items: [{ name: 'PostgreSQL' }, { name: 'MySQL' }, { name: 'MongoDB' }],
  },
  {
    title: 'CI/CD & DevOps',
    items: [
      { name: 'Docker' },
      { name: 'GitHub Actions' },
      { name: 'Gunicorn' },
      { name: 'Nginx' },
      { name: 'Git' },
    ],
  },
  {
    title: 'Ferramentas',
    items: [{ name: 'VS Code' }, { name: 'DBeaver' }, { name: 'Bruno' }, { name: 'GitHub' }],
  },
];
