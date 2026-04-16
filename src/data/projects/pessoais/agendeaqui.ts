import type { Project } from '../../../types';

export const agendeaqui: Project = {
  id: 'agendeaqui',
  slug: 'agendeaqui',
  title: 'AgendeAqui',
  shortDescription: 'Plataforma web para gestão de agendamentos.',
  detailedDescription:
    'Aplicação web desenvolvida em Django para autenticar usuários, organizar horários e centralizar o fluxo de agendamentos.',
  description:
    'Plataforma web desenvolvida em Django para gestão de agendamentos, autenticação de usuários e organização de horários e espaços.',
  image: '/images/fotos-projetos-pessoais/agendeaqui/agendeaqui.png',
  github: 'https://github.com/Victorkaue333/AgendeAqui',
  detailPath: '/projetos/agendeaqui',
  technologies: ['Django', 'PostgreSQL', 'Bootstrap'],
  stack: ['Python', 'Django', 'PostgreSQL', 'Bootstrap'],
  features: ['Autenticação de usuários', 'Agenda por horários', 'Painel administrativo'],
  category: 'pessoal',
  summary: {
    problema: 'Dificuldade no gerenciamento de espaços acadêmicos e conflitos de horários',
    solucao: 'Sistema centralizado com fluxos de aprovação e controle de permissões',
    stack: 'Django 5 e PostgreSQL',
  },
  detailed_info: {
    desafio: 'Prevenir conflitos de reserva e gerir permissões granulares entre professores e coordenação.',
    solucao: 'Desenvolvimento de uma plataforma robusta com calendário interativo e automação de notificações.',
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
  screenshots: [
    '/images/fotos-projetos-pessoais/agendeaqui/agendeaqui.png',
    '/images/fotos-projetos-pessoais/agendeaqui/1.jpg',
    '/images/fotos-projetos-pessoais/agendeaqui/2.jpg',
    '/images/fotos-projetos-pessoais/agendeaqui/3.jpg',
    '/images/fotos-projetos-pessoais/agendeaqui/4.jpg',
    '/images/fotos-projetos-pessoais/agendeaqui/5.jpg',
    '/images/fotos-projetos-pessoais/agendeaqui/6.jpg',
    '/images/fotos-projetos-pessoais/agendeaqui/7.jpg',
  ],
};
