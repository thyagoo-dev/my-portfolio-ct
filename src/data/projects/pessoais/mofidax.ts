import type { Project } from '../../../types';

export const mofidax: Project = {
  id: 'mofidax',
  slug: 'mofidax',
  title: 'Mofidax',
  shortDescription: 'PWA de alta performance para processamento de imagens 100% local.',
  detailedDescription:
    'Progressive Web App (PWA) de altíssima performance para processamento de imagens diretamente no navegador. Construído com foco absoluto em privacidade e velocidade, o sistema utiliza Web Workers e a Canvas API para realizar operações complexas sem enviar um único byte para servidores externos.',
  description:
    'Aplicativo focado em compressão perceptual, conversão de formatos, redimensionamento e recortes complexos. Todo o processamento ocorre no lado do cliente (Client-Side), garantindo uma ferramenta rápida, offline-first e intuitiva para otimizar arquivos com eficiência e controle total de dados.',
  image: '/images/fotos-projetos-pessoais/mofidax/capa.webp',
  github: 'https://github.com/thyagoo-dev/mofidax',
  detailPath: '/projetos/mofidax',
  // CORREÇÃO: Usando apenas os nomes base para que os ícones renderizem corretamente no card
  technologies: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
  stack: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Framer Motion'],
  features: ['Compressão inteligente', 'Conversão universal', 'Recorte interativo', 'Offline-First'],
  category: 'pessoal',
  summary: {
    problema: 'Dependência de ferramentas baseadas em nuvem que comprometem a privacidade dos dados e exigem conexão com a internet.',
    solucao: 'Processamento computacional transferido integralmente para o dispositivo do usuário (Client-Side Processing) via Web Workers.',
    stack: 'React 19, TypeScript e Tailwind CSS v4',
  },
  detailed_info: {
    desafio: 'Manipular matrizes pesadas de pixels sem congelar a interface (Main Thread) e gerenciar a memória para evitar vazamentos (Memory Leaks) ao usar Blobs.',
    solucao: 'Isolamento de cálculos em um Worker dedicado e implementação de ciclos de vida estritos com revogação automática de ObjectURLs (URL.revokeObjectURL).',
    impacto: 'Substituição segura e ultra-rápida de ferramentas na nuvem, mantendo a UI rodando a 60 FPS e preservando a RAM do dispositivo.',
    arquitetura: {
      frontend: 'React 19 + TypeScript + Zustand',
      api: 'N/A (Processamento 100% Client-Side)',
      banco: 'LocalStorage (Histórico de Sessão)',
    },
    decisoes: {
      autenticacao: 'Não necessária (Foco absoluto em privacidade e uso local)',
      backend: 'Substituído por Web Workers e OffscreenCanvas',
      deploy: 'GitHub Pages',
      banco: 'Cache local via Zustand Persist Middleware',
    },
    tech_v2: [
      { name: 'React', icon: 'devicon-react-original colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    ],
  },
  screenshots: [
    '/images/fotos-projetos-pessoais/mofidax/capa.webp',
    '/images/fotos-projetos-pessoais/mofidax/1.webp',
    '/images/fotos-projetos-pessoais/mofidax/2.webp',
    '/images/fotos-projetos-pessoais/mofidax/3.webp',
    '/images/fotos-projetos-pessoais/mofidax/4.webp'
  ],
};