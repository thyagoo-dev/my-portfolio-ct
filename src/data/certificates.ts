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
  }
];

export const certificateCategories = [
  { id: 'todos', label: 'Todos' },
  { id: 'programacao', label: 'Programação' },
  { id: 'backend', label: 'Back-end' },
  { id: 'infra', label: 'Infra/DevOps' },
  { id: 'dados', label: 'Banco de Dados' }
];
