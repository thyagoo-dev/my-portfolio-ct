import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'ifsertao-moodle',
    title: 'Desenvolvedor Web Full Stack PHP/MOODLE - EXTENSIONISTA',
    company: 'Instituto Federal de Educação, Ciência e Tecnologia do Sertão Pernambucano',
    period: 'fev 2026 - atual',
    location: 'Floresta, PE · Híbrido',
    type: 'current',
    icon: 'monitor-smartphone',
    achievements: [
      'Desenvolvimento e customização da plataforma Moodle utilizando PHP e MySQL',
      'Implementação de funcionalidades de gamificação para aumentar o engajamento dos usuários',
      'Integração e personalização da interface da plataforma para melhoria da experiência do usuário',
      'Participação no planejamento técnico e definição de requisitos do sistema',
      'Otimização de funcionalidades e melhorias de desempenho da plataforma',
      'Apoio na estruturação de soluções voltadas ao ensino híbrido e aprendizagem digital',
    ],
    description: 'Atuei no desenvolvimento de uma plataforma de cursos abertos (MOOC) para o Instituto Federal do Sertão Pernambucano – Campus Floresta, utilizando Moodle com foco em gamificação e melhoria do engajamento da comunidade externa.',
  },
  {
    id: 'ntidi',
    title: 'Desenvolvedor Full Stack Júnior',
    company: 'NTIDI - Next Technology Innovations Digital Technology',
    period: 'jun 2025 - atual',
    location: 'Brasília, DF · Remoto',
    type: 'current',
    icon: 'monitor-smartphone',
    achievements: [
      'Desenvolvimento do ecossistema web da empresa com Django e MySQL',
      'Criação de interfaces dinâmicas em HTML, CSS, JavaScript e Bootstrap',
      'Deploy e infraestrutura com Docker, GitHub Actions, Gunicorn e Nginx',
      'Implementação de APIs REST, autenticação e comunicação entre serviços',
    ],
  },
  {
    id: 'vksoftware',
    title: 'Fundador e Desenvolvedor Full Stack',
    company: 'VK Software',
    period: 'dez 2025 - atual',
    location: 'Remoto',
    type: 'current',
    icon: 'monitor-smartphone',
    achievements: [
      'Desenvolvedor Full Stack freelancer com foco em Python (Django) e PHP (Laravel)',
      'Experiência no desenvolvimento de front-end com HTML, CSS, JavaScript e Bootstrap',
      'Trabalho com bancos de dados como PostgreSQL, MySQL e MongoDB, utilizando Git e Docker',
    ],
  },
  {
    id: 'ifsertao-django',
    title: 'Desenvolvedor Web Full Stack DJANGO - EXTENSIONISTA',
    company: 'Instituto Federal de Educação, Ciência e Tecnologia do Sertão Pernambucano',
    period: 'ago 2025 - fev 2026',
    location: 'Floresta, PE · Híbrido',
    type: 'past',
    icon: 'monitor-smartphone',
    achievements: [
      'Desenvolvimento da plataforma Maratona Pitch durante a SNCT',
      'Desenvolvimento do ecossistema web utilizando Python (Django), MySQL e PostgreSQL',
      'Criação de interfaces dinâmicas e responsivas com HTML, CSS, JavaScript e Bootstrap',
      'Desenvolvimento do sistema de votação online com validação e controle de participantes',
    ],
  },
  {
    id: 'gre-estagio',
    title: 'Estagiário em Desenvolvimento Web e Suporte Técnico',
    company: 'Gerência Regional de Educação do Sertão do Submédio do São Francisco',
    period: 'mai 2025 - ago 2025',
    location: 'Floresta, PE · Presencial',
    type: 'past',
    icon: 'monitor-smartphone',
    achievements: [
      'Planejamento e desenvolvimento de soluções web em equipe',
      'Desenvolvimento front-end e back-end com HTML, CSS, JavaScript, Python e Django',
      'Desenvolvimento do sistema SIGREF para gestão de demandas escolares',
      'Suporte técnico ao setor de CTI, abertura de chamados via GLPI',
    ],
  },
  {
    id: 'cnpq',
    title: 'Bolsista de Projeto Financiado pela CNPq',
    company: 'CNPq',
    period: 'set 2024 - set 2025',
    location: 'Floresta, PE · Híbrido',
    type: 'past',
    icon: 'graduation-cap',
    achievements: [
      'Pesquisa vinculada ao projeto "Saberes Interculturais dos Povos Indígenas de Itaparica"',
      'Sistematização de informações sobre práticas culturais e corporais indígenas',
      'Produção de materiais voltados à integração entre conhecimentos acadêmicos e saberes tradicionais',
    ],
  },
];

export const currentRoles = experiences.filter(e => e.type === 'current');
export const pastExperiences = experiences.filter(e => e.type === 'past');
