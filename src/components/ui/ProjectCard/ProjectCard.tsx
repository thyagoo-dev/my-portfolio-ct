import { Link } from 'react-router-dom';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';
import type { Project } from '../../../types';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card reveal-on-scroll" id={`project-${project.id}`}>
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
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="project-tag">{tech}</span>
            ))}
            {project.technologies.length > 4 && (
              <span className="project-tag-more">+{project.technologies.length - 4}</span>
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
