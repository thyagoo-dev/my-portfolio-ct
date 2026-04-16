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
      problema: 'Dificuldade no gerenciamento de espacos academicos e conflitos de horários',
      solucao: 'Sistema centralizado com fluxos de aprovacao e controle de permissoes',
      stack: 'Django 5 e PostgreSQL',
    },
    detailed_info: {
      desafio: 'Prevenir conflitos de reserva e gerir permissões granulares entre professores e coordenação.',
      solucao: 'Desenvolvimento de uma plataforma robusta com calendario interativo e automação de notificações.',
      impacto: 'Gestão transparente e eficiente do uso de salas de aula no ambiente acadêmico.',
      arquitetura: {
        frontend: 'Django Templates + Bootstrap 5',
        api: 'Arquitetura Monolítica (MVT)',
        banco: 'PostgreSQL estruturado',
      },
      decisoes: {
        autenticacao: 'Módulo nativo de Auth do Django',
        backend: 'Django Framework (Python)',
        deploy: 'Servidor local/Cloud Linux',
        banco: 'PostgreSQL para robustez de dados',
      },
      tech_v2: [
        { name: 'Python', icon: 'devicon-python-plain colored' },
        { name: 'Django', icon: 'devicon-django-plain colored' },
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
        { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
      ],
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
      problema: 'Controle manual e visual impreciso do tempo de uso de carrinhos',
      solucao: 'Dashboard em tempo real com status visual por cores e HTMX',
      stack: 'Python, Django e HTMX',
    },
    detailed_info: {
      desafio: 'Criar um painel de controle de tempo real altamente visual que funcione sem refresh de página.',
      solucao: 'Integração de HTMX para atualizações dinâmicas de cronômetros e cards de status vibrantes.',
      impacto: 'Redução drástica de erros operacionais e melhoria na experiência do cliente final.',
      arquitetura: {
        frontend: 'HTMX + CSS customizado',
        api: 'Server-side rendering (Django)',
        banco: 'SQLite com histórico de sessões',
      },
      decisoes: {
        autenticacao: 'Login simples para operadores',
        backend: 'Django (Lógica de cronometragem)',
        deploy: 'Instância Cloud / Tablet local',
        banco: 'Camada de persistência para relatórios',
      },
      tech_v2: [
        { name: 'Python', icon: 'devicon-python-plain colored' },
        { name: 'Django', icon: 'devicon-django-plain colored' },
        { name: 'Javascript', icon: 'devicon-javascript-plain colored' },
        { name: 'HTMX', icon: 'devicon-html5-plain' },
      ],
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
      problema: 'Processo lento e cansativo de transcrição manual de audios académicos',
      solucao: 'Automação via IA com Whisper e identificação de falantes via PyAnnote',
      stack: 'Python + OpenAI Whisper',
    },
    detailed_info: {
      desafio: 'Processar grandes volumes de áudio com precisão e diferenciar múltiplas vozes automaticamente.',
      solucao: 'Implementação de serviços de IA assíncronos integrados a um player web sincronizado.',
      impacto: 'Economia de centenas de horas de trabalho manual para pesquisadores e jornalistas.',
      arquitetura: {
        frontend: 'JS Vanilla (Player customizado)',
        api: 'FastAPI (Python)',
        banco: 'JSON Estruturado / File System',
      },
      decisoes: {
        autenticacao: 'Nao necessária (uso local/ferramenta)',
        backend: 'FastAPI para processamento assíncrono',
        deploy: 'Localhost / Servidor com GPU',
        banco: 'Saídas em SRT, JSON e TXT',
      },
      tech_v2: [
        { name: 'Python', icon: 'devicon-python-plain colored' },
        { name: 'FastAPI', icon: 'devicon-fastapi-plain colored' },
        { name: 'Pytorch', icon: 'devicon-pytorch-original colored' },
        { name: 'Whisper', icon: 'devicon-python-plain' },
      ],
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
      problema: 'Invisibilidade de saberes tradicionais e projetos de extensao indigenas',
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
        banco: 'Nao aplicável (Assets locais)',
      },
      decisoes: {
        autenticacao: 'Nao aplicável',
        backend: 'Front-end estático otimizado',
        deploy: 'Netlify / GitHub Pages',
        banco: 'Nao aplicável',
      },
      tech_v2: [
        { name: 'HTML5', icon: 'devicon-html5-plain colored' },
        { name: 'CSS3', icon: 'devicon-css3-plain colored' },
        { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
        { name: 'Javascript', icon: 'devicon-javascript-plain colored' },
      ],
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
    summary: {
      problema: 'Processos administrativos escolares descentralizados e manuais',
      solucao: 'Sistema web centralizado para gestão de demandas e fluxos educacionais',
      stack: 'Python, Django e MySQL',
    },
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
    summary: {
      problema: 'Necessidade de presença digital e ferramentas de gestão interna',
      solucao: 'Ecossistema web completo com site institucional e sistemas administrativos',
      stack: 'Python, Django e Bootstrap',
    },
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
    summary: {
      problema: 'Dificuldade em organizar votações e pitches em tempo real em eventos',
      solucao: 'Plataforma digital para cadastro de apresentações e sistema de votação online',
      stack: 'Python e Django',
    },
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
    summary: {
      problema: 'Falta de controle automatizado de vendas e estoque de suplementos',
      solucao: 'Aplicação web para registro de transações e monitoramento de inventário',
      stack: 'Python, Django e SQLite',
    },
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
    summary: {
      problema: 'Baixa conversão de visitantes interessados nos serviços',
      solucao: 'Landing page otimizada com foco em UX e gatilhos de conversão',
      stack: 'HTML, CSS e JavaScript',
    },
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
    summary: {
      problema: 'Ausência de uma plataforma unificada e escalável para a marca',
      solucao: 'SaaS/Web App com design system próprio e arquitetura moderna',
      stack: 'React, TypeScript e CSS',
    },
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

