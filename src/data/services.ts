import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 'backend',
    title: 'Desenvolvimento Backend',
    description: 'Construção de regras de negócio consistentes, autenticação segura e modelagem de dados orientada à escala.',
    icon: 'server',
    features: [
      'APIs REST escaláveis',
      'Autenticação e autorização',
      'Modelagem de dados',
      'Integração entre sistemas',
    ],
  },
  {
    id: 'fullstack',
    title: 'Desenvolvimento Full Stack',
    description: 'Soluções web completas, da interface ao servidor, com Django, Bootstrap e deploy automatizado.',
    icon: 'layers',
    features: [
      'Interfaces dinâmicas e responsivas',
      'Backend robusto com Django',
      'Deploy com Docker e CI/CD',
      'Banco de dados PostgreSQL/MySQL',
    ],
  },
  {
    id: 'sistemas',
    title: 'Sistemas Empresariais',
    description: 'Experiência em projetos reais com entrega ponta a ponta, do planejamento ao deploy em ambiente de produção.',
    icon: 'building-2',
    features: [
      'Planejamento e levantamento de requisitos',
      'Arquitetura limpa e escalável',
      'Entrega incremental',
      'Documentação técnica',
    ],
  },
];
