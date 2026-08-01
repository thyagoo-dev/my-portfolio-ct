import type { Project } from '../../../types';

export const meuIfce: Project = {
  id: 'meu-ifce',
  slug: 'meu-ifce',
  title: 'MeuIFCE',
  shortDescription: 'Plataforma unificada para dados acadêmicos e serviços do refeitório.',
  detailedDescription:
    'Interface web desenvolvida em Next.js para o ecossistema Meu-IFCE. O projeto visa integrar dados acadêmicos e serviços do refeitório do Instituto Federal do Ceará (IFCE) em uma plataforma única, oferecendo uma experiência de uso intuitiva e moderna para os estudantes.',
  description:
    'Plataforma estudantil que centraliza informações acadêmicas e o sistema do refeitório. Construída com Next.js e TypeScript, foca em performance e usabilidade para facilitar o dia a dia dos alunos da instituição.',
  image: '/images/fotos-projetos-reais/meu-ifce/capa.webp',
  github: 'https://github.com/thyagoo-dev/meu-ifce',
  detailPath: '/projetos/meu-ifce',
  technologies: ['Next.js', 'TypeScript', 'React', 'Front-end'],
  stack: ['Next.js', 'TypeScript', 'React'],
  features: ['Integração acadêmica', 'Gestão de refeitório', 'Interface responsiva'],
  category: 'real',
  summary: {
    problema: 'Informações acadêmicas e serviços essenciais (como o refeitório) fragmentados e com interfaces pouco otimizadas.',
    solucao: 'Criação de um portal front-end unificado, rápido e focado na experiência do estudante.',
    stack: 'Next.js e TypeScript',
  },
  detailed_info: {
    desafio: 'Desenvolver uma interface moderna e acessível que consiga consumir e apresentar dados do ecossistema educacional de forma clara.',
    solucao: 'Utilização do Next.js para garantir roteamento rápido e renderização otimizada, aliado ao TypeScript para segurança na tipagem.',
    impacto: 'Melhoria na qualidade de vida digital dos estudantes do IFCE, facilitando consultas e o acesso aos serviços do campus.',
    arquitetura: {
      frontend: 'Next.js (App Router) + TypeScript',
      api: 'Consumo de APIs do ecossistema Meu-IFCE',
      banco: 'N/A (Front-end)',
    },
    decisoes: {
      autenticacao: 'Integração com o sistema acadêmico',
      backend: 'N/A',
      deploy: 'Vercel',
      banco: 'N/A',
    },
    tech_v2: [
      { name: 'Next.js', icon: 'devicon-nextjs-plain colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'React', icon: 'devicon-react-original colored' },
    ],
  },
  screenshots: [
    '/images/fotos-projetos-reais/meu-ifce/capa.webp',
    '/images/fotos-projetos-reais/meu-ifce/1.webp',
  ],
};