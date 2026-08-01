import type { Project } from '../../../types';

export const yugiohMultiverse: Project = {
  id: 'yugioh-multiverse',
  slug: 'yugioh-multiverse',
  title: 'Yu-Gi-Oh! Multiverse',
  shortDescription: 'Plataforma web para catalogar personagens e séries da franquia Yu-Gi-Oh!.',
  detailedDescription:
    'Projeto web focado em responsividade (mobile-first) desenvolvido para mapear e centralizar as informações sobre os personagens e o vasto universo de séries do Yu-Gi-Oh!, utilizando versionamento contínuo no GitHub.',
  description:
    'Plataforma front-end criada para organizar e apresentar o catálogo de personagens e séries da franquia Yu-Gi-Oh!. O foco principal é garantir uma experiência visual fluida e adaptável a qualquer dispositivo.',
  image: '/images/fotos-projetos-pessoais/yugioh-multiverse/capa.webp',
  github: 'https://github.com/thyagoo-dev/yugioh-multiverse',
  detailPath: '/projetos/yugioh-multiverse',
  technologies: ['HTML5', 'CSS3', 'JavaScript'],
  stack: ['HTML', 'CSS', 'JavaScript'],
  features: ['Catálogo de personagens', 'Design Mobile-First', 'Interface Responsiva'],
  category: 'pessoal',
  summary: {
    problema: 'Falta de um catálogo moderno e centralizado para os fãs consultarem as diversas séries e personagens da franquia.',
    solucao: 'Criação de uma interface visualmente agradável e mobile-first, facilitando a navegação rápida e leitura das informações.',
    stack: 'HTML, CSS e JavaScript',
  },
  detailed_info: {
    desafio: 'Organizar uma grande quantidade de dados e imagens da franquia garantindo um desempenho rápido e uma navegação intuitiva em telas menores.',
    solucao: 'Adoção rigorosa da abordagem mobile-first durante a estilização com CSS e componentização estrutural do HTML.',
    impacto: 'Um catálogo interativo, leve e de fácil acesso para a comunidade e jogadores.',
    arquitetura: {
      frontend: 'HTML5, CSS3 moderno e JavaScript',
      api: 'N/A (Estrutura Front-end)',
      banco: 'N/A',
    },
    decisoes: {
      autenticacao: 'N/A',
      backend: 'N/A',
      deploy: 'GitHub Pages / Vercel',
      banco: 'N/A',
    },
    tech_v2: [
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'HTML5', icon: 'devicon-html5-plain colored' },
      { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    ],
  },
  screenshots: [
    '/images/fotos-projetos-pessoais/yugioh-multiverse/capa.webp',
    '/images/fotos-projetos-pessoais/yugioh-multiverse/1.webp',
    '/images/fotos-projetos-pessoais/yugioh-multiverse/2.webp',
  ],
};