import type { Project } from '../../../types';

export const oliveiraKids: Project = {
  id: 'oliveira-kids',
  slug: 'oliveira-kids',
  title: 'Oliveira Kids',
  shortDescription: 'Controle de tempo de brinquedos elétricos.',
  detailedDescription:
    'Sistema para controlar tempo de uso de carrinhos elétricos com operação visual, reduzindo erros em atendimento presencial.',
  description:
    'Sistema desenvolvido para controlar de forma simples, rápida e visual o tempo de uso de carrinhos elétricos e a operação do atendimento.',
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
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'HTMX', icon: 'devicon-html5-plain' },
    ],
  },
};
