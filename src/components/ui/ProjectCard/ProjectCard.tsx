import {
    FiBarChart2,
    FiCalendar,
    FiChevronRight,
    FiCloud,
    FiCode,
    FiCpu,
    FiExternalLink,
    FiGithub,
    FiGlobe,
    FiLayers,
    FiLayout,
    FiPackage,
    FiSearch,
    FiSmartphone,
    FiTrendingUp,
    FiZap,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import type { Project } from '../../../types';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  withReveal?: boolean;
}

const techIconMap: Record<string, any> = {
  React: 'devicon-react-original colored',
  TypeScript: 'devicon-typescript-plain colored',
  Vite: 'devicon-vitejs-plain colored',
  CSS: 'devicon-css3-plain colored',
  Django: 'devicon-django-plain colored',
  PostgreSQL: 'devicon-postgresql-plain colored',
  Bootstrap: 'devicon-bootstrap-plain colored',
  Python: 'devicon-python-plain colored',
  MySQL: 'devicon-mysql-plain colored',
  SQLite: 'devicon-sqlite-plain colored',
  HTML5: 'devicon-html5-plain colored',
  JavaScript: 'devicon-javascript-plain colored',

  IA: FiCpu,
  'AutomaÃ§Ã£o': FiZap,
  'Automação': FiZap,
  Automacao: FiZap,
  Responsivo: FiSmartphone,
  SaaS: FiCloud,
  SEO: FiSearch,
  Eventos: FiCalendar,
  'Controle de Estoque': FiPackage,
  'Landing Page': FiLayout,
  'Front-end': FiCode,
  'ConversÃ£o': FiTrendingUp,
  'Conversão': FiTrendingUp,
  Conversao: FiTrendingUp,
  'Web App': FiGlobe,
  'Sistema Web': FiGlobe,
  'Design System': FiLayers,
  Escalabilidade: FiBarChart2,
};

function TechIcon({ name }: { name: string }) {
  const iconComponent = techIconMap[name];

  if (!iconComponent) return <span className="project-tag-text">{name}</span>;

  if (typeof iconComponent === 'string') {
    return <i className={`${iconComponent} tech-icon-dev`} title={name} />;
  }

  const Icon = iconComponent;
  return <Icon size={20} className="tech-icon-lucide" title={name} />;
}

export function ProjectCard({ project, withReveal = true }: ProjectCardProps) {
  const projectTitle = project.title || 'Projeto em atualizacao';
  const projectDescription =
    project.description || project.shortDescription || 'Descricao em atualizacao.';
  const projectTechnologies =
    Array.isArray(project.technologies) && project.technologies.length > 0
      ? project.technologies
      : project.stack && project.stack.length > 0
      ? project.stack
      : ['Stack em atualizacao'];
  const detailPath = project.detailPath || `/projetos/${project.slug || project.id}`;
  const imageSrc = project.image || '/images/placeholders/project-placeholder.svg';
  const githubUrl = project.github || 'https://github.com/Victorkaue333';

  return (
    <div className={`project-card ${withReveal ? 'reveal-on-scroll' : ''}`} id={`project-${project.id}`}>
      <Link to={detailPath} className="project-card-link">
        <div className="project-image">
          <img
            src={imageSrc}
            alt={projectTitle}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.src = '/images/placeholders/project-placeholder.svg';
            }}
          />
          <div className="project-overlay">
            <span className="project-overlay-text">
              Ver detalhes <FiChevronRight size={16} />
            </span>
          </div>
        </div>

        <div className="project-info">
          <h3 className="project-title">{projectTitle}</h3>

          <div className="project-tags">
            {projectTechnologies.slice(0, 5).map((tech: string) => (
              <div key={tech} className="project-tag-icon-wrapper" title={tech}>
                <TechIcon name={tech} />
              </div>
            ))}
            {projectTechnologies.length > 5 && (
              <span className="project-tag-more">+{projectTechnologies.length - 5}</span>
            )}
          </div>

          <div className="project-author">
            <img src="/images/eu/victor.webp" alt="Victor Kauê" className="author-avatar" />
            <span className="author-name">Victor Kauê</span>
          </div>

          <p className="project-desc">{projectDescription}</p>
        </div>
      </Link>

      <div className="project-footer">
        {project.online && (
          <a href={project.online} target="_blank" rel="noopener noreferrer" className="footer-action-link">
            Ver projeto <FiExternalLink size={14} />
          </a>
        )}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon-link"
          aria-label="GitHub Repository"
        >
          <FiGithub size={18} />
        </a>
      </div>
    </div>
  );
}
