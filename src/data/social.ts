import type { SocialLink } from '../types';

export const socialLinks: SocialLink[] = [
  {
    name: 'Email',
    url: 'mailto:kaue.alves.pg@gmail.com',
    icon: 'bi bi-envelope-fill',
    detail: 'kaue.alves.pg@gmail.com',
    iconType: 'bootstrap',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/victor-kau%C3%AA-419926364/',
    icon: 'bi bi-linkedin',
    detail: 'Victor Kauê',
    iconType: 'bootstrap',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Victorkaue333',
    icon: 'bi bi-github',
    detail: 'Victorkaue333',
    iconType: 'bootstrap',
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/5587981677005',
    icon: 'bi bi-whatsapp',
    detail: '(87) 98167-7005',
    iconType: 'bootstrap',
  },
];

export const navLinks = [
  { label: 'Início', path: '/' },
  { label: 'Sobre', path: '/sobre' },
  { label: 'Projetos', path: '/projetos' },
  { label: 'Serviços', path: '/servicos' },
  { label: 'Galeria', path: '/galeria' },
  { label: 'Certificados', path: '/certificados' },
  { label: 'Contato', path: '/contato' },
];

export const footerTech = [
  { name: 'Python', icon: 'devicon-python-plain colored' },
  { name: 'Django', icon: 'devicon-django-plain colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'REST API', icon: 'bi bi-diagram-3' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
  { name: 'Docker', icon: 'devicon-docker-plain colored' },
];
