import type { Project } from '../../../types';

export const sigref: Project = {
  id: 'sigref',
  slug: 'sigref',
  title: 'SIGREF',
  shortDescription: 'Sistema de gestão educacional.',
  detailedDescription:
    'Sistema para organização de demandas escolares e processos administrativos da gerência regional.',
  description:
    'Sistema de gestão educacional para a Gerência Regional de Educação, com foco em organização de demandas escolares e processos administrativos.',
  image: '/images/fotos-projetos-reais/sigref/sigrefsemfundo.png',
  detailPath: '/projetos/sigref',
  technologies: ['Django', 'MySQL', 'SaaS'],
  stack: ['Python', 'Django', 'MySQL'],
  features: ['Gestão escolar', 'Fluxo administrativo', 'Sistema web corporativo'],
  category: 'real',
  summary: {
    problema: 'Processos administrativos escolares descentralizados e manuais',
    solucao: 'Sistema web centralizado para gestão de demandas e fluxos educacionais',
    stack: 'Python, Django e MySQL',
  },
};
