import type { Project } from '../../../types';

export const vaSuplementos: Project = {
  id: 'va-suplementos',
  slug: 'va-suplementos',
  title: 'VA Suplementos',
  shortDescription: 'Sistema para estoque e vendas.',
  detailedDescription:
    'Aplicação de controle operacional para fluxo de estoque e vendas no contexto de suplementos.',
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
  detailed_info: {
    desafio: 'Desenvolver um sistema de controle de baixo custo e alta eficiência para operação local.',
    solucao: 'Uso de Django com SQLite para uma entrega rápida e manutenção simplificada.',
    impacto: 'Redução de perdas de estoque e organização financeira clara para o negócio.',
    arquitetura: {
      frontend: 'HTML/CSS + Bootstrap',
      api: 'Django (Python)',
      banco: 'SQLite para simplicidade',
    },
    decisoes: {
      autenticacao: 'Login administrativo Django',
      backend: 'Django Framework',
      deploy: 'Hospedagem compartilhada econômica',
      banco: 'SQLite pela portabilidade do projeto',
    },
    tech_v2: [
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'Django', icon: 'devicon-django-plain colored' },
      { name: 'SQLite', icon: 'devicon-sqlite-plain colored' },
      { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
    ],
  },
};
