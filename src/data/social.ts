import type { SocialLink } from '../types';

export const socialLinks: SocialLink[] = [
  {
    name: 'Email',
    url: 'mailto:c.thyago.of@gmail.com',
    icon: 'mail',
    detail: 'c.thyago.of@gmail.com',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/thyagoodev/',
    icon: 'linkedin',
    detail: 'Cicero Thyago',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/thyagoo-dev',
    icon: 'github',
    detail: 'thyagoo-dev',
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/5588988723523',
    icon: 'whatsapp',
    detail: '(88) 98872-3523',
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
