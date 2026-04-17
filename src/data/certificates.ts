import { Certificate } from '../types';

export const certificates: Certificate[] = [
  {
    id: 'js-40h',
    title: 'Programming Using JavaScript',
    issuer: 'Curso em Vídeo',
    category: 'programacao',
    image: '/images/certificados/javascript-40h.webp'
  },
  {
    id: 'python-intro',
    title: 'Python Essentials 1',
    issuer: 'Cisco Networking Academy',
    category: 'backend',
    image: '/images/certificados/python-essentials.webp'
  },
  {
    id: 'django-full',
    title: 'Desenvolvimento Web com Django',
    issuer: 'Udemy',
    category: 'backend',
    image: '/images/certificados/django-web.webp'
  },
  {
    id: 'docker-fund',
    title: 'Docker Fundamentals',
    issuer: 'Digital Innovation One',
    category: 'infra',
    image: '/images/certificados/docker.webp'
  },
  {
    id: 'sql-master',
    title: 'SQL Masterclass',
    issuer: 'Alura',
    category: 'dados',
    image: '/images/certificados/sql.webp'
  },
  {
    id: 'wp-oficina',
    title: 'Desenvolvimento de sites com Wordpress',
    issuer: 'Oficina Workshop',
    category: 'programacao',
    pdf: '/Certificados/pdfs/Oficina_Workshop - Oficina_ Desenvolvimento de sites com Wordpress.pdf',
    image: '/Certificados/pdfs/fotos/Oficina_Workshop - Oficina_ Desenvolvimento de sites com Wordpress.png'
  },
  {
    id: 'canva-oficina',
    title: 'Design com Canva',
    issuer: 'Oficina Workshop',
    category: 'design',
    pdf: '/Certificados/pdfs/Oficina_Workshop - Oficina_ Design com Canva.pdf',
    image: '/Certificados/pdfs/fotos/Oficina_Workshop - Oficina_ Design com Canva.png'
  },
  {
    id: 'jogos-minicurso',
    title: 'Aprendendo a Programar Jogos',
    issuer: 'Minicurso / Workshop',
    category: 'programacao',
    pdf: '/Certificados/pdfs/Workshop - Minicurso - Aprendendo a Programar Jogos.pdf',
    image: '/Certificados/pdfs/fotos/Workshop - Minicurso - Aprendendo a Programar Jogos.png'
  },
  {
    id: 'pm-canvas-workshop',
    title: 'Planejamento de Projetos com PM Canvas',
    issuer: 'Workshop',
    category: 'gestao',
    pdf: '/Certificados/pdfs/Workshop - Planejamento de Projetos com PM Canvas.pdf',
    image: '/Certificados/pdfs/fotos/Workshop - Planejamento de Projetos com PM Canvas.png'
  }
];

export const certificateCategories = [
  { id: 'todos', label: 'Todos' },
  { id: 'programacao', label: 'Programação' },
  { id: 'backend', label: 'Back-end' },
  { id: 'infra', label: 'Infra/DevOps' },
  { id: 'dados', label: 'Banco de Dados' },
  { id: 'design', label: 'Design & UI' },
  { id: 'gestao', label: 'Gestão & Metodologias' }
];
