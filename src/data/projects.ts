import type { Project } from '../types';
import { yugiohMultiverse } from './projects/pessoais/yugioh-multiverse';
import { meuPortfolio } from './projects/pessoais/meu-portfolio';
import { multiverseProtocol } from './projects/pessoais/multiverse-protocol';
import { hipocampo } from './projects/pessoais/hipocampo';
import { mofidax } from './projects/pessoais/mofidax';

import { meuIfce } from './projects/profissionais/meu-ifce';

// ALTERE AQUI PARA O SEU GITHUB REAl
const DEFAULT_GITHUB_PROFILE = 'https://github.com/thyagoo-dev';
const DEFAULT_PROJECT_IMAGE = '/images/placeholders/project-placeholder.svg';

const rawProjects: Project[] = [
  
  // projetos pessoais
  meuPortfolio,
  hipocampo,
  mofidax,
  yugiohMultiverse,
  multiverseProtocol,
  
  // projetos profissionais
  meuIfce,

];

function normalizeProject(project: Project): Project {
  const safeId = project.id || 'projeto-sem-id';
  const safeTitle = project.title?.trim() || 'Projeto em atualização';
  const safeDescription =
    project.description?.trim() ||
    project.shortDescription?.trim() ||
    'Descrição em atualização. Em breve mais detalhes deste projeto.';
  const safeTechnologies =
    Array.isArray(project.technologies) && project.technologies.length > 0
      ? project.technologies
      : project.stack && project.stack.length > 0
      ? project.stack
      : ['Stack em atualização'];
  const safeSlug = project.slug || safeId;

  return {
    ...project,
    id: safeId,
    slug: safeSlug,
    title: safeTitle,
    description: safeDescription,
    image: project.image || DEFAULT_PROJECT_IMAGE,
    github: project.github || DEFAULT_GITHUB_PROFILE,
    detailPath: project.detailPath || `/projetos/${safeSlug}`,
    technologies: safeTechnologies,
  };
}

export const projects: Project[] = rawProjects.map(normalizeProject);
export const featuredProjects = projects.filter((p) => p.category === 'pessoal').slice(0, 6);