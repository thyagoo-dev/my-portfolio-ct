import type { Project } from '../../../types';

export const meuPortfolio: Project = {
  id: 'meu-portfolio',
  slug: 'meu-portfolio',
  title: 'Portfólio Web Pessoal',
  shortDescription: 'Portfólio pessoal premium com React e TypeScript.',
  detailedDescription:
    'Projeto desenvolvido para apresentar meu trabalho, projetos e posicionamento profissional como desenvolvedor backend/full-stack.',
  description:
    'Projeto desenvolvido para apresentar meu trabalho, projetos e posicionamento profissional como desenvolvedor backend/full-stack.',
  image: '/images/fotos-projetos-pessoais/vk-portifolio/victor_kaue.png',
  github: 'https://github.com/Victorkaue333/meu_portifolio',
  online: 'https://victor-kaue.vercel.app/',
  detailPath: '/projetos/meu-portfolio',
  technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
  stack: ['React', 'TypeScript', 'Vite', 'CSS'],
  features: ['Layout responsivo', 'i18n PT/EN', 'Animações com Framer Motion'],
  category: 'pessoal',
  summary: {
    problema: 'Posicionamento técnico pouco claro',
    solucao: 'Vitrine profissional objetiva e escalável',
    stack: 'React e TypeScript',
  },
  detailed_info: {
    desafio:
      'Criar uma interface interativa que entregasse experiência premium em desktop e mobile.',
    solucao:
      'Desenvolvimento de portfólio com React 19, TypeScript e CSS moderno, com foco em acessibilidade, responsividade e manutenibilidade.',
    impacto:
      'Melhor posicionamento profissional, demonstrando capacidade técnica e qualidade visual em um único produto.',
    arquitetura: {
      frontend: 'React + TypeScript',
      api: 'Dados estáticos tipados',
      banco: 'Assets locais',
    },
    decisoes: {
      autenticacao: 'Não aplicável (portfólio público)',
      backend: 'Dados desacoplados em camada data',
      deploy: 'Vercel com pipeline de build',
      banco: 'Não aplicável',
    },
    tech_v2: [
      { name: 'HTML5', icon: 'devicon-html5-plain colored' },
      { name: 'CSS3', icon: 'devicon-css3-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'React', icon: 'devicon-react-original colored' },
    ],
  },
};
