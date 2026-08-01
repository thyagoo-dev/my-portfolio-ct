import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 'backend',
    title: 'Desenvolvimento Backend',
    description: 'Construção de regras de negócio consistentes, estruturação de APIs e modelagem de dados orientada à eficiência.',
    icon: 'server',
    features: [
      'Desenvolvimento de APIs REST',
      'Lógica de negócios com Java e Node.js',
      'Modelagem e gerenciamento de banco de dados SQL',
      'Integração segura entre sistemas',
    ],
  },
  {
    id: 'fullstack',
    title: 'Desenvolvimento Full Stack',
    description: 'Soluções web abrangentes, desde a criação de interfaces de usuário dinâmicas até a estruturação do servidor.',
    icon: 'layers',
    features: [
      'Interfaces responsivas com HTML5, CSS3 e JavaScript',
      'Conhecimentos e aplicação de conceitos de Web 3.0',
      'Controle de versão e colaboração com Git e GitHub',
      'Manutenção e escalabilidade de sistemas web',
    ],
  },
  {
    id: 'infraestrutura-suporte',
    title: 'Infraestrutura e Suporte',
    description: 'Apoio técnico qualificado focado na resolução de problemas, manutenção de sistemas e fundamentos de redes.',
    icon: 'building-2',
    features: [
      'Suporte Técnico N1/N2 e Troubleshooting ágil',
      'Fundamentos práticos de Infraestrutura de Redes 5G',
      'Conhecimentos sólidos em TCP/IP e DHCP/DNS',
      'Atendimento operacional focado na resolução',
    ],
  },
];