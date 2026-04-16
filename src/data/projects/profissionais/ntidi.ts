import type { Project } from '../../../types';

export const ntidi: Project = {
  id: 'ntidi',
  slug: 'ntidi',
  title: 'NTIDI',
  shortDescription: 'Ecossistema web institucional e interno.',
  detailedDescription:
    'Conjunto de páginas e sistemas internos desenvolvidos para a operação digital da empresa.',
  description:
    'Ecossistema web da empresa NTIDI, incluindo site institucional e sistemas internos desenvolvidos com Django.',
  image: '/images/fotos-projetos-reais/ntidi/NTIDI.jpg',
  detailPath: '/projetos/ntidi',
  technologies: ['Django', 'Bootstrap', 'SEO'],
  stack: ['Python', 'Django', 'Bootstrap'],
  features: ['Site institucional', 'SEO técnico', 'Sistemas internos'],
  category: 'real',
  summary: {
    problema: 'Necessidade de presença digital e ferramentas de gestão interna',
    solucao: 'Ecossistema web completo com site institucional e sistemas administrativos',
    stack: 'Python, Django e Bootstrap',
  },
  detailed_info: {
    desafio: 'Desenvolver uma identidade digital sólida integrada a sistemas de gestão de leads e processos internos.',
    solucao: 'Criação de um site institucional de alta performance com painel administrativo Django customizado.',
    impacto: 'Aumento na captura de leads e automação de processos internos de gerenciamento de dados.',
    arquitetura: {
      frontend: 'HTML5/CSS3 + Bootstrap 5',
      api: 'Django Framework (Python)',
      banco: 'PostgreSQL / SQLite',
    },
    decisoes: {
      autenticacao: 'Dashboard administrativo nativo',
      backend: 'Django para segurança e rapidez',
      deploy: 'Heroku / VPS Dedicada',
      banco: 'PostgreSQL estruturado',
    },
    tech_v2: [
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'Django', icon: 'devicon-django-plain colored' },
      { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
      { name: 'SEO', icon: 'devicon-google-plain colored' },
    ],
  },
};
