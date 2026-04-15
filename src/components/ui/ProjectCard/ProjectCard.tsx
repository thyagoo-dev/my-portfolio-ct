import { Link } from 'react-router-dom';
import type { Project } from '../../../types';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={project.detailPath} className="project-card reveal-on-scroll" id={`project-${project.id}`}>
      <div className="project-image">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="project-overlay">
          <span className="project-overlay-text">Ver detalhes →</span>
        </div>
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tags">
          {project.technologies.map((tech) => (
            <span key={tech} className="project-tag">{tech}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
