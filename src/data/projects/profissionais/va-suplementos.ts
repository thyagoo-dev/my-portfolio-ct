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
};
