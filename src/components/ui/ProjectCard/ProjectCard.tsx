import { Link } from 'react-router-dom';
import { 
  Github, 
  ExternalLink, 
  ChevronRight, 
  Brain, 
  Zap, 
  Smartphone, 
  Cloud, 
  Search, 
  Calendar, 
  Package, 
  Layout, 
  Code2, 
  TrendingUp, 
  Globe, 
  Palette, 
  BarChart3 
} from 'lucide-react';
import './ProjectCard.css';

// ... interface unchanged ...

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
  
  // Lucide Icons (React Components)
  'IA': Brain,
  'Automação': Zap,
  'Responsivo': Smartphone,
  'SaaS': Cloud,
  'SEO': Search,
  'Eventos': Calendar,
  'Controle de Estoque': Package,
  'Landing Page': Layout,
  'Front-end': Code2,
  'Conversão': TrendingUp,
  'Web App': Globe,
  'Sistema Web': Globe,
  'Design System': Palette,
  'Escalabilidade': BarChart3,
};

function TechIcon({ name }: { name: string }) {
  const icon = techIconMap[name];
  
  if (!icon) return <span className="project-tag-text">{name}</span>;
  
  if (typeof icon === 'string') {
    return <i className={`${icon} tech-icon-dev`} title={name} />;
  }
  
  const LucideIcon = icon;
  return <LucideIcon size={20} className="tech-icon-lucide" title={name} />;
}

export function ProjectCard({ project, withReveal = true }: ProjectCardProps) {
  return (
    <div className={`project-card ${withReveal ? 'reveal-on-scroll' : ''}`} id={`project-${project.id}`}>
      <Link to={project.detailPath} className="project-card-link">
        <div className="project-image">
          <img src={project.image} alt={project.title} loading="lazy" />
          <div className="project-overlay">
            <span className="project-overlay-text">Ver detalhes <ChevronRight size={16} /></span>
          </div>
        </div>
        
        <div className="project-info">
          <h3 className="project-title">{project.title}</h3>
          
          <div className="project-tags">
            {project.technologies.slice(0, 5).map((tech) => (
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
            Ver projeto <ExternalLink size={14} />
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="footer-icon-link" aria-label="GitHub Repository">
            <Github size={18} />
          </a>
        )}
      </div>
    </div>
  );
}
