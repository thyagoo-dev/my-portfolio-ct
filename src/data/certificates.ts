import { Certificate } from '../types';

export const certificates: Certificate[] = [
  {
    id: 'tic29-web3',
    title: 'Capacitação em TIC 29 - Web 3.0',
    issuer: 'MCTI / Softex',
    category: 'programacao',
    pdf: '/Certificados/pdfs/TIC_29_Web3.pdf',
    image: '/Certificados/pdfs/fotos/TIC_29_Web3.webp'
  },
  {
    id: 'full-stack-avanti',
    title: 'Desenvolvimento Full Stack',
    issuer: 'Capacita Brasil / Avanti',
    category: 'programacao',
    pdf: '/Certificados/pdfs/Desenvolvimento_Full_Stack.pdf',
    image: '/Certificados/pdfs/fotos/Desenvolvimento_Full_Stack.webp'
  },
  {
    id: 'infraestrutura-5g',
    title: 'Infraestrutura de Redes 5G',
    issuer: 'Capacita Brasil / IFCE',
    category: 'infraestrutura',
    pdf: '/Certificados/pdfs/Infraestrutura_Redes_5G.pdf',
    image: '/Certificados/pdfs/fotos/Infraestrutura_Redes_5G.webp'
  },
  {
    id: 'programador-sistemas',
    title: 'Programador de Sistemas',
    issuer: 'Senac Ceará',
    category: 'programacao',
    pdf: '/Certificados/pdfs/Programador_de_Sistemas.pdf',
    image: '/Certificados/pdfs/fotos/Programador_de_Sistemas.webp'
  },
  {
    id: 'assistente-ti',
    title: 'Assistente de Tecnologias da Informação',
    issuer: 'Senac Ceará',
    category: 'suporte',
    pdf: '/Certificados/pdfs/Assistente_de_TI.pdf',
    image: '/Certificados/pdfs/fotos/Assistente_de_TI.webp'
  },
  {
    id: 'java-irede',
    title: 'Desenvolvimento Java',
    issuer: 'Capacita Brasil / IREDE',
    category: 'programacao',
    pdf: '/Certificados/pdfs/Desenvolvimento_Java.pdf',
    image: '/Certificados/pdfs/fotos/Desenvolvimento_Java.webp'
  }
];

export const certificateCategories = [
  { id: 'todos', label: 'Todos' },
  { id: 'programacao', label: 'Programação' },
  { id: 'infraestrutura', label: 'Infraestrutura e Redes' },
  { id: 'suporte', label: 'Suporte e TI' }
];