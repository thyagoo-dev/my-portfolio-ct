import type { Project } from '../../../types';

export const saberesInterculturais: Project = {
  id: 'saberes-interculturais',
  slug: 'saberes-interculturais',
  title: 'Saberes Interculturais de Itaparica',
  shortDescription: 'Portal de divulgação cultural e educacional.',
  detailedDescription:
    'Site de extensão voltado a saberes interculturais e valorização cultural dos povos indígenas de Itaparica.',
  description:
    'Site de divulgação de projeto de extensão voltado aos saberes interculturais, práticas corporais e valorização cultural dos povos indígenas de Itaparica.',
  image: '/images/fotos-projetos-pessoais/saberes-interculturais/saberes-interculturais.webp',
  github: 'https://github.com/Victorkaue333/saberes-interculturais-itaparica',
  detailPath: '/projetos/saberes-interculturais',
  technologies: ['Django', 'SQLite', 'Responsivo'],
  stack: ['Python', 'Django', 'SQLite', 'HTML/CSS'],
  features: ['Conteúdo institucional', 'Navegação responsiva', 'Divulgação de projeto'],
  category: 'pessoal',
  summary: {
    problema: 'Invisibilidade de saberes tradicionais e projetos de extensão indígenas',
    solucao: 'Portal institucional de valorização cultural com design modular',
    stack: 'HTML, CSS e Bootstrap 5',
  },
  detailed_info: {
    desafio: 'Organizar uma vasta gama de conteúdos culturais e acadêmicos em uma interface leve.',
    solucao: 'Desenvolvimento modular de CSS e navegação intuitiva focada no conteúdo visual.',
    impacto: 'Maior alcance do projeto de extensão e preservação digital de saberes tradicionais.',
    arquitetura: {
      frontend: 'Arquitetura CSS Modular',
      api: 'Dados estáticos estruturados',
      banco: 'Não aplicável (Assets locais)',
    },
    decisoes: {
      autenticacao: 'Não aplicável',
      backend: 'Front-end estático otimizado',
      deploy: 'Netlify / GitHub Pages',
      banco: 'Não aplicável',
    },
    tech_v2: [
      { name: 'HTML5', icon: 'devicon-html5-plain colored' },
      { name: 'CSS3', icon: 'devicon-css3-plain colored' },
      { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    ],
  },
};
