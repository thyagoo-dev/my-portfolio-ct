import type { ExperienceGroup } from '../types';

/**
 * Experiência profissional.
 * Ordem: mais recente primeiro.
 */
export const experiences: ExperienceGroup[] = [
  {
    id: 'inova-tecnologia',
    company: 'Inova Tecnologia em Serviços Ltda',
    roles: [
      {
        title: 'Auxiliar Administrativo e Operacional',
        employmentType: 'Temporário',
        period: 'set 2024 - out 2024',
        duration: '2 meses',
        location: 'Iguatu, CE, Brasil',
        workMode: 'Presencial',
        description:
          'Suporte operacional ao TRE-CE nas Eleições 2024: organização, testes e preparação das urnas eletrônicas antes do pleito; entrega dos equipamentos às escolas (locais de votação); plantão no dia da eleição para suporte técnico e resolução de problemas.',
        activities: [
          'Organização, testes e preparação de hardware das urnas eletrônicas',
          'Logística e entrega segura dos equipamentos aos locais de votação',
          'Plantão presencial para suporte técnico e resolução imediata de falhas no dia do pleito',
        ],
        skills: ['Suporte Técnico', 'Operações', 'Logística', 'Resolução de Problemas', 'Hardware'],
      },
    ],
  },
];