import type { Project } from '../types';

const DEFAULT_GITHUB_PROFILE = 'https://github.com/Victorkaue333';
const DEFAULT_PROJECT_IMAGE = '/images/placeholders/project-placeholder.svg';

const rawProjects: Project[] = [
  {
    id: 'meu-portifolio',
    slug: 'meu-portifolio',
    title: 'Meu Portifolio',
    shortDescription: 'Portifolio pessoal premium com React e TypeScript.',
    detailedDescription:
      'Projeto desenvolvido para apresentar meu trabalho, projetos e posicionamento profissional como desenvolvedor backend/full-stack.',
    description:
      'Projeto desenvolvido para apresentar meu trabalho, projetos e posicionamento profissional como desenvolvedor backend/full-stack.',
    image: '/images/fotos-projetos-pessoais/vk-portifolio/victor_kaue.png',
    github: 'https://github.com/Victorkaue333/meu_portifolio',
    online: 'https://victor-kaue.vercel.app/',
    detailPath: '/projetos/meu-portifolio',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
    stack: ['React', 'TypeScript', 'Vite', 'CSS'],
    features: ['Layout responsivo', 'i18n PT/EN', 'Animacoes com Framer Motion'],
    category: 'pessoal',
    summary: {
      problema: 'Posicionamento tecnico pouco claro',
      solucao: 'Vitrine profissional objetiva e escalavel',
      stack: 'React e TypeScript',
    },
    detailed_info: {
      desafio:
        'Criar uma interface interativa que entregasse experiencia premium em desktop e mobile.',
      solucao:
        'Desenvolvimento de portfolio com React 19, TypeScript e CSS moderno, com foco em acessibilidade, responsividade e manutenibilidade.',
      impacto:
        'Melhor posicionamento profissional, demonstrando capacidade técnica e qualidade visual em um unico produto.',
      arquitetura: {
        frontend: 'React + TypeScript',
        api: 'Dados estaticos tipados',
        banco: 'Assets locais',
      },
      decisoes: {
        autenticacao: 'Nao aplicavel (portfolio publico)',
        backend: 'Dados desacoplados em camada data',
        deploy: 'Vercel com pipeline de build',
        banco: 'Nao aplicavel',
      },
      tech_v2: [
        { name: 'HTML5', icon: 'devicon-html5-plain colored' },
        { name: 'CSS3', icon: 'devicon-css3-plain colored' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
        { name: 'React', icon: 'devicon-react-original colored' },
      ],
    },
  },
  {
    id: 'agendeaqui',
    slug: 'agendeaqui',
    title: 'AgendeAqui',
    shortDescription: 'Plataforma web para gestão de agendamentos.',
    detailedDescription:
      'Aplicacao web desenvolvida em Django para autenticar usuarios, organizar horarios e centralizar o fluxo de agendamentos.',
    description:
      'Plataforma web desenvolvida em Django para gestão de agendamentos, autenticacao de usuarios e organizacao de horarios e espacos.',
    image: '/images/fotos-projetos-pessoais/agendeaqui/agendeaqui.png',
    github: 'https://github.com/Victorkaue333/AgendeAqui',
    detailPath: '/projetos/agendeaqui',
    technologies: ['Django', 'PostgreSQL', 'Bootstrap'],
    stack: ['Python', 'Django', 'PostgreSQL', 'Bootstrap'],
    features: ['Autenticacao de usuarios', 'Agenda por horarios', 'Painel administrativo'],
    category: 'pessoal',
    summary: {
      problema: 'Agendamentos descentralizados',
      solucao: 'Fluxo unico com autenticacao e gestão de slots',
      stack: 'Django + PostgreSQL',
    },
  },
  {
    id: 'oliveira-kids',
    slug: 'oliveira-kids',
    title: 'Oliveira Kids',
    shortDescription: 'Controle de tempo de brinquedos eletricos.',
    detailedDescription:
      'Sistema para controlar tempo de uso de carrinhos eletricos com operacao visual, reduzindo erros em atendimento presencial.',
    description:
      'Sistema desenvolvido para controlar de forma simples, rapida e visual o tempo de uso de carrinhos eletricos e a operacao do atendimento.',
    image: '/images/fotos-projetos-pessoais/oliveira-kids/oliveira-kids.png',
    github: 'https://github.com/Victorkaue333/OliveiraKids',
    detailPath: '/projetos/oliveira-kids',
    technologies: ['Python', 'Django', 'MySQL'],
    stack: ['Python', 'Django', 'MySQL'],
    features: ['Controle de tempo', 'Painel operacional', 'Fluxo simplificado'],
    category: 'pessoal',
    summary: {
      problema: 'Controle manual de tempo de uso',
      solucao: 'Painel visual para operacao diaria',
      stack: 'Python, Django e MySQL',
    },
  },
  {
    id: 'transcritor-de-entrevistas',
    slug: 'transcritor-de-entrevistas',
    title: 'Transcritor de Entrevistas',
    shortDescription: 'Transcricao automatica de audio para texto.',
    detailedDescription:
      'Ferramenta para acelerar analise de entrevistas, automatizando transcricao e organizacao de conteudo textual.',
    description:
      'Aplicativo desenvolvido para transcrever entrevistas de forma automatica, facilitando a analise e organizacao dos dados coletados.',
    image: '/images/fotos-projetos-pessoais/transcritor-de-entrevistas/Transcritor_de_Entrevistas.png',
    github: 'https://github.com/Victorkaue333/transcritor-de-entrevistas',
    detailPath: '/projetos/transcritor-de-entrevistas',
    technologies: ['Python', 'IA', 'Automação'],
    stack: ['Python', 'Speech-to-Text', 'NLP'],
    features: ['Transcricao automatica', 'Organizacao de dados', 'Apoio a pesquisa'],
    category: 'pessoal',
    summary: {
      problema: 'Analise lenta de entrevistas',
      solucao: 'Transcricao automatica para acelerar pesquisa',
      stack: 'Python + IA',
    },
  },
  {
    id: 'saberes-interculturais',
    slug: 'saberes-interculturais',
    title: 'Saberes Interculturais de Itaparica',
    shortDescription: 'Portal de divulgacao cultural e educacional.',
    detailedDescription:
      'Site de extensao voltado a saberes interculturais e valorizacao cultural dos povos indigenas de Itaparica.',
    description:
      'Site de divulgacao de projeto de extensao voltado aos saberes interculturais, praticas corporais e valorizacao cultural dos povos indigenas de Itaparica.',
    image: '/images/fotos-projetos-pessoais/saberes-interculturais/saberes-interculturais.png',
    github: 'https://github.com/Victorkaue333/saberes-interculturais-itaparica',
    detailPath: '/projetos/saberes-interculturais',
    technologies: ['Django', 'SQLite', 'Responsivo'],
    stack: ['Python', 'Django', 'SQLite', 'HTML/CSS'],
    features: ['Conteudo institucional', 'Navegacao responsiva', 'Divulgacao de projeto'],
    category: 'pessoal',
    summary: {
      problema: 'Baixa visibilidade do projeto',
      solucao: 'Portal de divulgacao com navegacao acessivel',
      stack: 'Django e frontend responsivo',
    },
  },
  {
    id: 'sigref',
    slug: 'sigref',
    title: 'SIGREF',
    shortDescription: 'Sistema de gestão educacional.',
    detailedDescription:
      'Sistema para organizacao de demandas escolares e processos administrativos da gerencia regional.',
    description:
      'Sistema de gestão educacional para a Gerencia Regional de Educacao, com foco em organizacao de demandas escolares e processos administrativos.',
    image: '/images/fotos-projetos-reais/sigref/sigrefsemfundo.png',
    detailPath: '/projetos/sigref',
    technologies: ['Django', 'MySQL', 'SaaS'],
    stack: ['Python', 'Django', 'MySQL'],
    features: ['gestão escolar', 'Fluxo administrativo', 'Sistema web corporativo'],
    category: 'real',
  },
  {
    id: 'ntidi',
    slug: 'ntidi',
    title: 'NTIDI',
    shortDescription: 'Ecossistema web institucional e interno.',
    detailedDescription:
      'Conjunto de paginas e sistemas internos desenvolvidos para a operacao digital da empresa.',
    description:
      'Ecossistema web da empresa NTIDI, incluindo site institucional e sistemas internos desenvolvidos com Django.',
    image: '/images/fotos-projetos-reais/ntidi/NTIDI.jpg',
    detailPath: '/projetos/ntidi',
    technologies: ['Django', 'Bootstrap', 'SEO'],
    stack: ['Python', 'Django', 'Bootstrap'],
    features: ['Site institucional', 'SEO tecnico', 'Sistemas internos'],
    category: 'real',
  },
  {
    id: 'maratonatech',
    slug: 'maratonatech',
    title: 'MaratonaTech',
    shortDescription: 'gestão de eventos de pitch e votacao online.',
    detailedDescription:
      'Plataforma para cadastro de apresentacoes, acompanhamento de rodadas e votacao digital.',
    description:
      'Plataforma web para gestão de eventos de pitch, incluindo cadastro de apresentacoes e sistema de votacao online.',
    image: '/images/fotos-projetos-reais/maratonatech/MaratonaTech.png',
    detailPath: '/projetos/maratonatech',
    technologies: ['Python', 'Django', 'Eventos'],
    stack: ['Python', 'Django'],
    features: ['Cadastro de pitch', 'gestão de eventos', 'Votacao online'],
    category: 'real',
  },
  {
    id: 'va-suplementos',
    slug: 'va-suplementos',
    title: 'VA Suplementos',
    shortDescription: 'Sistema para estoque e vendas.',
    detailedDescription:
      'Aplicacao de controle operacional para fluxo de estoque e vendas no contexto de suplementos.',
    description: 'Sistema web para controle de estoque e gestão de vendas de suplementos.',
    image: '/images/fotos-projetos-reais/va_suplementos/va_suplementos.png',
    detailPath: '/projetos/va-suplementos',
    technologies: ['Python', 'Sistema Web', 'Controle de Estoque'],
    stack: ['Python', 'Django', 'SQLite'],
    features: ['Controle de estoque', 'Registro de vendas', 'Painel operacional'],
    category: 'real',
  },
  {
    id: 'queelvra',
    slug: 'queelvra',
    title: 'Queelvra',
    shortDescription: 'Landing page orientada a conversao.',
    detailedDescription:
      'Pagina comercial com foco em performance, design objetivo e captura de leads.',
    description: 'Landing page de alta conversao para divulgacao de servicos.',
    image: '/images/fotos-projetos-reais/queelvra/queelvra.png',
    detailPath: '/projetos/queelvra',
    technologies: ['Landing Page', 'Front-end', 'Conversão'],
    stack: ['HTML', 'CSS', 'JavaScript'],
    features: ['Copy comercial', 'CTA estrategico', 'Layout de conversao'],
    category: 'real',
  },
  {
    id: 'vksoftware',
    slug: 'vksoftware',
    title: 'VK Software',
    shortDescription: 'Web app institucional com design system.',
    detailedDescription:
      'Plataforma web com identidade visual propria e estrutura escalavel para Evolução de produtos digitais.',
    description: 'Web App e plataforma da empresa VK Software com design system proprio.',
    image: '/images/fotos-projetos-reais/vksoftware/1.png',
    detailPath: '/projetos/vksoftware',
    technologies: ['Web App', 'Design System', 'Escalabilidade'],
    stack: ['React', 'TypeScript', 'CSS'],
    features: ['Design system', 'Arquitetura escalavel', 'Experiencia de marca'],
    category: 'real',
  },
];

function normalizeProject(project: Project): Project {
  const safeId = project.id || 'projeto-sem-id';
  const safeTitle = project.title?.trim() || 'Projeto em atualizacao';
  const safeDescription =
    project.description?.trim() ||
    project.shortDescription?.trim() ||
    'Descricao em atualizacao. Em breve mais detalhes deste projeto.';
  const safeTechnologies =
    Array.isArray(project.technologies) && project.technologies.length > 0
      ? project.technologies
      : project.stack && project.stack.length > 0
      ? project.stack
      : ['Stack em atualizacao'];
  const safeSlug = project.slug || safeId;

  return {
    ...project,
    id: safeId,
    slug: safeSlug,
    title: safeTitle,
    description: safeDescription,
    image: project.image || DEFAULT_PROJECT_IMAGE,
    github: project.github || DEFAULT_GITHUB_PROFILE,
    detailPath: project.detailPath || `/projetos/${safeSlug}`,
    technologies: safeTechnologies,
  };
}

export const projects: Project[] = rawProjects.map(normalizeProject);
export const featuredProjects = projects.filter((p) => p.category === 'pessoal').slice(0, 6);

