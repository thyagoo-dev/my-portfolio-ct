import { Link } from 'react-router-dom';
import { 
  FiGithub, 
  FiExternalLink, 
  FiChevronRight, 
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
import './ProjectCard.css';

interface ProjectCardProps {
  project: any;
  withReveal?: boolean;
}

const techIconMap: Record<string, any> = {
  // DevIcons (CSS classes)
  'React': 'devicon-react-original colored',
  'TypeScript': 'devicon-typescript-plain colored',
  'Vite': 'devicon-vitejs-plain colored',
  'CSS': 'devicon-css3-plain colored',
  'Django': 'devicon-django-plain colored',
  'PostgreSQL': 'devicon-postgresql-plain colored',
  'Bootstrap': 'devicon-bootstrap-plain colored',
  'Python': 'devicon-python-plain colored',
  'MySQL': 'devicon-mysql-plain colored',
  'SQLite': 'devicon-sqlite-plain colored',
  'HTML5': 'devicon-html5-plain colored',
  'JavaScript': 'devicon-javascript-plain colored',
  
  // React Icons (Feather)
  'IA': FiCpu,
  'Automação': FiZap,
  'Responsivo': FiSmartphone,
  'SaaS': FiCloud,
  'SEO': FiSearch,
  'Eventos': FiCalendar,
  'Controle de Estoque': FiPackage,
  'Landing Page': FiLayout,
  'Front-end': FiCode,
  'Conversão': FiTrendingUp,
  'Web App': FiGlobe,
  'Sistema Web': FiGlobe,
  'Design System': FiLayers,
  'Escalabilidade': FiBarChart2,
};

function TechIcon({ name }: { name: string }) {
  const IconComponent = techIconMap[name];
  
  if (!IconComponent) return <span className="project-tag-text">{name}</span>;
  
  if (typeof IconComponent === 'string') {
    return <i className={`${IconComponent} tech-icon-dev`} title={name} />;
  }
  
  return <IconComponent size={20} className="tech-icon-lucide" title={name} />;
}

export function ProjectCard({ project, withReveal = true }: ProjectCardProps) {
  return (
    <div className={`project-card ${withReveal ? 'reveal-on-scroll' : ''}`} id={`project-${project.id}`}>
      <Link to={project.detailPath} className="project-card-link">
        <div className="project-image">
          <img src={project.image} alt={project.title} loading="lazy" />
          <div className="project-overlay">
            <span className="project-overlay-text">Ver detalhes <FiChevronRight size={16} /></span>
          </div>
        </div>
        
        <div className="project-info">
          <h3 className="project-title">{project.title}</h3>
          
          <div className="project-tags">
            {project.technologies.slice(0, 5).map((tech: string) => (
              <div key={tech} className="project-tag-icon-wrapper" title={tech}>
                <TechIcon name={tech} />
              </div>
            ))}
            {project.technologies.length > 5 && (
              <span className="project-tag-more">+{project.technologies.length - 5}</span>
            )}
          </div>

          <div className="project-author">
            <img src="/images/eu/victor.webp" alt="Victor Kauê" className="author-avatar" />
            <span className="author-name">Victor Kauê</span>
          </div>

          <p className="project-desc">{project.description}</p>
        </div>
      </Link>

      <div className="project-footer">
        {project.online && (
          <a href={project.online} target="_blank" rel="noopener noreferrer" className="footer-action-link">
            Ver projeto <FiExternalLink size={14} />
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="footer-icon-link" aria-label="GitHub Repository">
            <FiGithub size={18} />
          </a>
        )}
      </div>
    </div>
  );
}
