import type { SocialLink } from '../types';

export const socialLinks: SocialLink[] = [
  {
    name: 'Email',
    url: 'mailto:kaue.alves.pg@gmail.com',
    icon: 'mail',
    detail: 'kaue.alves.pg@gmail.com',
    iconType: 'react',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/victor-kaue-419926364/',
    icon: 'linkedin',
    detail: 'Victor Kauê',
    iconType: 'react',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Victorkaue333',
    icon: 'github',
    detail: 'Victorkaue333',
    iconType: 'react',
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/5587981677005',
    icon: 'whatsapp',
    detail: '(87) 98167-7005',
    iconType: 'react',
  },
];

export const navLinks = [
  { label: 'Inicio', path: '/' },
  { label: 'Sobre', path: '/sobre' },
  { label: 'Projetos', path: '/projetos' },
  { label: 'Servicos', path: '/servicos' },
  { label: 'Certificados', path: '/certificados' },
  { label: 'Contato', path: '/contato' },
];

export const footerTech = [
  { name: 'Python', icon: 'devicon-python-plain colored' },
  { name: 'Django', icon: 'devicon-django-plain colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'REST API', icon: 'devicon-fastapi-plain colored' },
  { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
  { name: 'Docker', icon: 'devicon-docker-plain colored' },
];
