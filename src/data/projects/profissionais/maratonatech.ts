import type { Project } from '../../../types';

export const maratonatech: Project = {
  id: 'maratonatech',
  slug: 'maratonatech',
  title: 'MaratonaTech',
  shortDescription: 'Gestão de eventos de pitch e votação online.',
  detailedDescription:
    'Plataforma para cadastro de apresentações, acompanhamento de rodadas e votação digital.',
  description:
    'Plataforma web para gestão de eventos de pitch, incluindo cadastro de apresentações e sistema de votação online.',
  image: '/images/fotos-projetos-reais/maratonatech/MaratonaTech.png',
  detailPath: '/projetos/maratonatech',
  technologies: ['Python', 'Django', 'Eventos'],
  stack: ['Python', 'Django'],
  features: ['Cadastro de pitch', 'Gestão de eventos', 'Votação online'],
  category: 'real',
  summary: {
    problema: 'Dificuldade em organizar votações e pitches em tempo real em eventos',
    solucao: 'Plataforma digital para cadastro de apresentações e sistema de votação online',
    stack: 'Python e Django',
  },
};
