import type { Project } from '../../../types';

export const transcritorEntrevistas: Project = {
  id: 'transcritor-de-entrevistas',
  slug: 'transcritor-de-entrevistas',
  title: 'Transcritor de Entrevistas',
  shortDescription: 'Transcrição automática de áudio para texto.',
  detailedDescription:
    'Ferramenta para acelerar análise de entrevistas, automatizando transcrição e organização de conteúdo textual.',
  description:
    'Aplicativo desenvolvido para transcrever entrevistas de forma automática, facilitando a análise e organização dos dados coletados.',
  image: '/images/fotos-projetos-pessoais/transcritor-de-entrevistas/Transcritor_de_Entrevistas.webp',
  github: 'https://github.com/Victorkaue333/transcritor-de-entrevistas',
  detailPath: '/projetos/transcritor-de-entrevistas',
  technologies: ['Python', 'IA', 'Automação'],
  stack: ['Python', 'Speech-to-Text', 'NLP'],
  features: ['Transcrição automática', 'Organização de dados', 'Apoio à pesquisa'],
  category: 'pessoal',
  summary: {
    problema: 'Processo lento e cansativo de transcrição manual de áudios acadêmicos',
    solucao: 'Automação via IA com Whisper e identificação de falantes via PyAnnote',
    stack: 'Python + OpenAI Whisper',
  },
  detailed_info: {
    desafio: 'Processar grandes volumes de áudio com precisão e diferenciar múltiplas vozes automaticamente.',
    solucao: 'Implementação de serviços de IA assíncronos integrados a um player web sincronizado.',
    impacto: 'Economia de centenas de horas de trabalho manual para pesquisadores e jornalistas.',
    arquitetura: {
      frontend: 'JavaScript Vanilla (Player customizado)',
      api: 'FastAPI (Python)',
      banco: 'JSON Estruturado / File System',
    },
    decisoes: {
      autenticacao: 'Não necessária (uso local/ferramenta)',
      backend: 'FastAPI para processamento assíncrono',
      deploy: 'Localhost / Servidor com GPU',
      banco: 'Saídas em SRT, JSON e TXT',
    },
    tech_v2: [
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'FastAPI', icon: 'devicon-fastapi-plain colored' },
      { name: 'PyTorch', icon: 'devicon-pytorch-original colored' },
      { name: 'Whisper', icon: 'devicon-python-plain' },
    ],
  },
};
