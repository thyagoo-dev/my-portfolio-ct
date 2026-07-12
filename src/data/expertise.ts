import type { ExpertiseCategory } from '../types';

export const expertise: ExpertiseCategory[] = [
  {
    title: 'Linguagens e Tecnologias',
    items: [
      { name: 'Python', icon: 'devicon-python-plain colored', iconType: 'devicon' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored', iconType: 'devicon' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored', iconType: 'devicon' },
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored', iconType: 'devicon' },
      { name: 'PHP', icon: 'devicon-php-plain colored', iconType: 'devicon' },
      { name: 'HTML5', icon: 'devicon-html5-plain colored', iconType: 'devicon' },
      { name: 'CSS3', icon: 'devicon-css3-plain colored', iconType: 'devicon' },
      { name: 'SQL', icon: 'devicon-mysql-plain colored', iconType: 'devicon' },
    ],
  },
  {
    title: 'Frameworks/Bibliotecas',
    items: [
      { name: 'React', icon: 'devicon-react-original colored', iconType: 'devicon' },
      { name: 'Next.js', icon: 'devicon-nextjs-plain', iconType: 'devicon' },
      { name: 'Nest.js', icon: 'devicon-nestjs-plain colored', iconType: 'devicon' },
      { name: 'Django', icon: 'devicon-django-plain colored', iconType: 'devicon' },
      { name: 'Laravel', icon: 'devicon-laravel-plain colored', iconType: 'devicon' },
      { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored', iconType: 'devicon' },
    ],
  },
  {
    title: 'Bancos de dados',
    items: [
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored', iconType: 'devicon' },
      { name: 'MySQL', icon: 'devicon-mysql-plain colored', iconType: 'devicon' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain colored', iconType: 'devicon' },
    ],
  },
  {
    title: 'CI/CD & DevOps',
    items: [
      { name: 'Docker', icon: 'devicon-docker-plain colored', iconType: 'devicon' },
      { name: 'GitHub Actions', icon: 'devicon-github-original colored', iconType: 'devicon' },
      { name: 'Gunicorn', icon: 'devicon-python-plain colored', iconType: 'devicon' },
      { name: 'Nginx', icon: 'devicon-nginx-original colored', iconType: 'devicon' },
      { name: 'Git', icon: 'devicon-git-plain colored', iconType: 'devicon' },
    ],
  },
  {
    title: 'Ferramentas',
    items: [
      { name: 'VS Code', icon: 'devicon-vscode-plain colored', iconType: 'devicon' },
      { name: 'DBeaver', icon: '', iconType: 'svg' },
      { name: 'Bruno', icon: '', iconType: 'svg' },
      { name: 'GitHub', icon: 'devicon-github-original colored', iconType: 'devicon' },
    ],
  },
];
