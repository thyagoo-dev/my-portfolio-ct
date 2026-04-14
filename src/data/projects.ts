import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'meu-portifolio',
    title: 'Meu Portfólio',
    description: 'Projeto desenvolvido para apresentar meu trabalho, projetos e posicionamento profissional como desenvolvedor backend/full-stack.',
    image: '/images/fotos-projetos-pessoais/vk-portifolio/victor_kaue.png',
    github: 'https://github.com/Victorkaue333/meu_portifolio',
    online: 'https://victor-kaue.vercel.app/',
    detailPath: '/projetos/meu-portifolio',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
    category: 'pessoal',
    summary: {
      problema: 'Posicionamento técnico pouco claro',
      solucao: 'Arquitetura de vitrine com seções objetivas',
      stack: 'React (v19) e TypeScript',
    },
    detailed_info: {
      desafio: 'Criar uma interface em que fosse totalmente interativa e que proporcionasse uma experiência agradável ao usuário.',
      solucao: 'Desenvolvimento de um portfólio pessoal utilizando React 19, TypeScript e CSS Moderno, garantindo responsividade, acessibilidade e interatividade de alto nível.',
      impacto: 'Aumento da visibilidade e reconhecimento profissional através de uma vitrine tecnológica robusta.',
      arquitetura: {
        frontend: 'React + TS',
        api: 'JSON Static',
        banco: 'Local Assets'
      },
      decisoes: {
        autenticacao: 'Não aplicável (Portfólio Público)',
        backend: 'Lógica desacoplada em hooks e data files para fácil manutenção.',
        deploy: 'Vercel para CI/CD automatizado e performance global via CDN.',
        banco: 'Modelagem de dados tipada em TypeScript focada em integridade.'
      },
      tech_v2: [
        { name: 'HTML5', icon: 'devicon-html5-plain colored' },
        { name: 'CSS3', icon: 'devicon-css3-plain colored' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
        { name: 'React', icon: 'devicon-react-original colored' }
      ]
    }
  },
  {
    id: 'agendeaqui',
    title: 'AgendeAqui',
    description: 'Plataforma web desenvolvida em Django para gestão de agendamentos, autenticação de usuários e organização de horários e espaços.',
    image: '/images/fotos-projetos-pessoais/agendeaqui/agendeaqui.png',
    github: 'https://github.com/Victorkaue333/AgendeAqui',
    detailPath: '/projetos/agendeaqui',
    technologies: ['Django', 'PostgreSQL', 'Bootstrap'],
    category: 'pessoal',
    summary: {
      problema: 'Agendamentos descentralizados',
      solucao: 'Fluxo único com autenticação e gestão de slots',
      stack: 'Django + PostgreSQL',
    },
  },
  {
    id: 'oliveira-kids',
    title: 'Oliveira Kids',
    description: 'Sistema desenvolvido para controlar de forma simples, rápida e visual o tempo de uso de carrinhos elétricos e a operação do atendimento.',
    image: '/images/fotos-projetos-pessoais/oliveira-kids/oliveira-kids.png',
    github: 'https://github.com/Victorkaue333/OliveiraKids',
    detailPath: '/projetos/oliveira-kids',
    technologies: ['Python', 'Django', 'MySQL'],
    category: 'pessoal',
    summary: {
      problema: 'Controle manual de tempo de uso',
      solucao: 'Painel visual para operação diária',
      stack: 'Python, Django e MySQL',
    },
  },
  {
    id: 'transcritor-de-entrevistas',
    title: 'Transcritor de Entrevistas',
    description: 'Aplicativo desenvolvido para transcrever entrevistas de forma automática, facilitando a análise e organização dos dados coletados.',
    image: '/images/fotos-projetos-pessoais/transcritor-de-entrevistas/Transcritor_de_Entrevistas.png',
    github: 'https://github.com/Victorkaue333/transcritor-de-entrevistas',
    detailPath: '/projetos/transcritor-de-entrevistas',
    technologies: ['Python', 'IA', 'Automação'],
    category: 'pessoal',
    summary: {
      problema: 'Análise lenta de entrevistas',
      solucao: 'Transcrição automática para acelerar pesquisa',
      stack: 'Python + IA',
    },
  },
  {
    id: 'saberes-interculturais',
    title: 'Saberes Interculturais de Itaparica',
    description: 'Site de divulgação de projeto de extensão voltado aos saberes interculturais, práticas corporais e valorização cultural dos povos indígenas de Itaparica.',
    image: '/images/fotos-projetos-pessoais/saberes-interculturais/saberes-interculturais.png',
    github: 'https://github.com/Victorkaue333/saberes-interculturais-itaparica',
    detailPath: '/projetos/saberes-interculturais',
    technologies: ['Django', 'SQLite', 'Responsivo'],
    category: 'pessoal',
    summary: {
      problema: 'Baixa visibilidade do projeto',
      solucao: 'Portal de divulgação com navegação acessível',
      stack: 'Django e frontend responsivo',
    },
  },
  {
    id: 'sigref',
    title: 'SIGREF',
    description: 'Sistema de gestão educacional para a Gerência Regional de Educação, com foco em organização de demandas escolares e processos administrativos.',
    image: '/images/fotos-projetos-reais/sigref/sigref.png',
    detailPath: '/projetos/sigref',
    technologies: ['Django', 'MySQL', 'SaaS'],
    category: 'real',
  },
  {
    id: 'ntidi',
    title: 'NTIDI',
    description: 'Ecossistema web da empresa NTIDI, incluindo site institucional e sistemas internos desenvolvidos com Django.',
    image: '/images/fotos-projetos-reais/ntidi/ntidi.png',
    detailPath: '/projetos/ntidi',
    technologies: ['Django', 'Bootstrap', 'SEO'],
    category: 'real',
  },
  {
    id: 'maratonatech',
    title: 'MaratonaTech',
    description: 'Plataforma web para gestão de eventos de pitch, incluindo cadastro de apresentações e sistema de votação online.',
    image: '/images/fotos-projetos-reais/maratonatech/maratonatech.png',
    detailPath: '/projetos/maratonatech',
    technologies: ['Python', 'Django', 'Eventos'],
    category: 'real',
  },
  {
    id: 'va-suplementos',
    title: 'VA Suplementos',
    description: 'Sistema web para controle de estoque e gestão de vendas de suplementos.',
    image: '/images/fotos-projetos-reais/va-suplementos/va-suplementos.png',
    detailPath: '/projetos/va-suplementos',
    technologies: ['Python', 'Sistema Web', 'Controle de Estoque'],
    category: 'real',
  },
  {
    id: 'queelvra',
    title: 'Queelvra',
    description: 'Landing page de alta conversão para divulgação de serviços.',
    image: '/images/fotos-projetos-reais/queelvra/queelvra.png',
    detailPath: '/projetos/queelvra',
    technologies: ['Landing Page', 'Front-end', 'Conversão'],
    category: 'real',
  },
  {
    id: 'vksoftware',
    title: 'VK Software',
    description: 'Web App e plataforma da empresa VK Software com design system próprio.',
    image: '/images/fotos-projetos-reais/vksoftware/vksoftware.png',
    detailPath: '/projetos/vksoftware',
    technologies: ['Web App', 'Design System', 'Escalabilidade'],
    category: 'real',
  },
];

export const featuredProjects = projects.filter(p => p.category === 'pessoal').slice(0, 4);
