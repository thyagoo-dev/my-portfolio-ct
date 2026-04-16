import React from 'react';
import {
  FiCpu,
  FiZap,
  FiSmartphone,
  FiCloud,
  FiSearch,
  FiCalendar,
  FiPackage,
  FiLayout,
  FiCode,
  FiTrendingUp,
  FiGlobe,
  FiLayers,
  FiBarChart2
} from 'react-icons/fi';

const techIconMap: Record<string, any> = {
  // Devicons
  React: 'devicon-react-original colored',
  TypeScript: 'devicon-typescript-plain colored',
  Vite: 'devicon-vitejs-plain colored',
  CSS: 'devicon-css3-plain colored',
  CSS3: 'devicon-css3-plain colored',
  Django: 'devicon-django-plain colored',
  PostgreSQL: 'devicon-postgresql-plain colored',
  Bootstrap: 'devicon-bootstrap-plain colored',
  Python: 'devicon-python-plain colored',
  MySQL: 'devicon-mysql-plain colored',
  SQLite: 'devicon-sqlite-plain colored',
  HTML5: 'devicon-html5-plain colored',
  HTML: 'devicon-html5-plain colored',
  JavaScript: 'devicon-javascript-plain colored',
  Git: 'devicon-git-plain colored',
  Docker: 'devicon-docker-plain colored',
  Node: 'devicon-nodejs-plain colored',
  'Node.js': 'devicon-nodejs-plain colored',

  // Lucide/Feather Icons for abstract concepts
  IA: FiCpu,
  'Automação': FiZap,
  Automacao: FiZap,
  Responsivo: FiSmartphone,
  SaaS: FiCloud,
  SEO: FiSearch,
  Eventos: FiCalendar,
  'Controle de Estoque': FiPackage,
  'Landing Page': FiLayout,
  'Front-end': FiCode,
  'Conversão': FiTrendingUp,
  Conversao: FiTrendingUp,
  'Web App': FiGlobe,
  'Sistema Web': FiGlobe,
  'Design System': FiLayers,
  Escalabilidade: FiBarChart2,
};

interface TechIconProps {
  name: string;
  size?: number;
  showName?: boolean;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ 
  name, 
  size = 20, 
  showName = false,
  className = "" 
}) => {
  const iconComponent = techIconMap[name];

  if (!iconComponent) {
    return <span className={`tech-tag-fallback ${className}`}>{name}</span>;
  }

  if (typeof iconComponent === 'string') {
    return (
      <div className={`tech-icon-wrapper ${className}`} title={name}>
        <i className={`${iconComponent} tech-icon-dev`} style={{ fontSize: size }} />
        {showName && <span className="tech-icon-name">{name}</span>}
      </div>
    );
  }

  const Icon = iconComponent;
  return (
    <div className={`tech-icon-wrapper ${className}`} title={name}>
      <Icon size={size} className="tech-icon-lucide" />
      {showName && <span className="tech-icon-name">{name}</span>}
    </div>
  );
};
