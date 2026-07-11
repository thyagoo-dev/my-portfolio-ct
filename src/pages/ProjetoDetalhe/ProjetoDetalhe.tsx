import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {FiArrowLeft,FiArrowRight,FiCheckCircle,FiCpu,FiDatabase,FiExternalLink,FiGithub,FiLayout,FiTarget,FiZap,FiList,FiInfo} from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../../components/ui/Button/Button';
import { TechIcon, TechGlyph } from '../../components/ui/TechIcon/TechIcon';
import { projects } from '../../data/projects';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { ProjectCarousel } from '../../components/ui/ProjectCarousel/ProjectCarousel';
import './ProjetoDetalhe.css';

export default function ProjetoDetalhe() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id || p.slug === id);
  useScrollReveal();

  useEffect(() => {
    document.title = project ? `${project.title} - Victor Kauê` : t('projectDetail.notFoundTitle');
    window.scrollTo(0, 0);
  }, [project, t]);

  if (!project) {
    return (
      <main style={{ paddingTop: '10rem', textAlign: 'center' }}>
        <div className="container">
          <h1>{t('projectDetail.notFoundTitle')}</h1>
          <p style={{ margin: '1rem 0 2rem', color: 'var(--text-muted-color)' }}>
            {t('projectDetail.notFoundText')}
          </p>
          <Button href="/projetos" variant="secondary">
            <FiArrowLeft size={18} />
            {t('projectDetail.back')}
          </Button>
        </div>
      </main>
    );
  }

  const detailed = project.detailed_info;
  const projectTitle = project.title || 'Projeto em atualizacao';
  const projectDescription =
    project.description || project.shortDescription || 'Descrição em atualização.';
  const projectTechnologies =
    Array.isArray(project.technologies) && project.technologies.length > 0
      ? project.technologies
      : project.stack && project.stack.length > 0
      ? project.stack
      : ['Stack em atualizacao'];
  const projectGithub = project.github || 'https://github.com/Victorkaue333';
  const carouselImages = project.screenshots && project.screenshots.length > 0 
    ? project.screenshots 
    : [project.image || '/images/placeholders/project-placeholder.svg'];

  return (
    <main className="page-projeto-detalhe">
      <section className="projeto-hero">
        <div className="container">
          <Link to="/projetos" className="back-link">
            <FiArrowLeft size={18} />
            {t('projectDetail.back')}
          </Link>

          <div className="projeto-header">
            <div className="projeto-header-text">
              <span className="project-category-badge">
                {project.category === 'pessoal' ? t('projectDetail.categoryPersonal') : t('projectDetail.categoryReal')}
              </span>
              <h1>{projectTitle}</h1>
              <p className="projeto-desc">{projectDescription}</p>

              <div className="project-tags">
                {projectTechnologies.map((tech) => (
                  <TechIcon key={tech} name={tech} size={24} className="project-tag-icon" />
                ))}
              </div>

              <div className="projeto-actions">
                <Button href={projectGithub} target="_blank" rel="noopener noreferrer" variant="secondary">
                  <FiGithub size={18} />
                  {t('projectDetail.viewCode')}
                </Button>
                {project.online && (
                  <Button href={project.online} target="_blank" rel="noopener noreferrer" variant="primary">
                    <FiExternalLink size={18} />
                    {t('projectDetail.viewOnline')}
                  </Button>
                )}
              </div>
            </div>
            <div className="projeto-header-image">
              <div className="image-glow" />
              <ProjectCarousel images={carouselImages} title={projectTitle} />
            </div>
          </div>

          {detailed && (
            <div className="projeto-extended-info">
              <div className="info-section reveal-on-scroll">
                <h2 className="detail-section-title"><FiInfo size={20} /> {t('projectDetail.detailedDesc')}</h2>
                <p className="detail-text">{detailed.solucao}</p>
              </div>

              {project.features && project.features.length > 0 && (
                 <div className="info-section reveal-on-scroll">
                    <h2 className="detail-section-title"><FiList size={20} /> {t('projectDetail.features')}</h2>
                    <div className="features-list-grid">
                        {project.features.map((feature, idx) => (
                            <div key={idx} className="feature-item-detail">
                                <FiCheckCircle size={16} className="feature-check" />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
              )}

              <div className="info-section reveal-on-scroll">
                <h2 className="detail-section-title">{t('projectDetail.projectDetails')}</h2>
                <div className="details-grid-custom">
                  <div className="detail-card-item">
                    <div className="card-icon">
                      <FiTarget size={20} />
                    </div>
                    <div className="card-text">
                      <h4 className="card-title-main">{t('projectDetail.challenge')}</h4>
                      <p>{detailed.desafio}</p>
                    </div>
                  </div>
                  <div className="detail-card-item">
                    <div className="card-icon">
                      <FiZap size={20} />
                    </div>
                    <div className="card-text">
                      <h4 className="card-title-main">{t('projectDetail.solution')}</h4>
                      <p>{detailed.solucao}</p>
                    </div>
                  </div>
                  <div className="detail-card-item">
                    <div className="card-icon">
                      <FiCheckCircle size={20} />
                    </div>
                    <div className="card-text">
                      <h4 className="card-title-main">{t('projectDetail.impact')}</h4>
                      <p>{detailed.impacto}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="info-section architecture-section reveal-on-scroll">
                <h2 className="detail-section-title">{t('projectDetail.architecture')}</h2>
                <div className="architecture-flow">
                  <div className="arch-node">
                    <div className="node-icon">
                      <FiLayout size={24} />
                    </div>
                    <span>{t('projectDetail.frontend')}</span>
                    <small>{detailed.arquitetura.frontend}</small>
                  </div>
                  <div className="arch-arrow">
                    <FiArrowRight size={24} />
                  </div>
                  <div className="arch-node">
                    <div className="node-icon">
                      <FiCpu size={24} />
                    </div>
                    <span>{t('projectDetail.apiBackend')}</span>
                    <small>{detailed.arquitetura.api}</small>
                  </div>
                  <div className="arch-arrow">
                    <FiArrowRight size={24} />
                  </div>
                  <div className="arch-node">
                    <div className="node-icon">
                      <FiDatabase size={24} />
                    </div>
                    <span>{t('projectDetail.database')}</span>
                    <small>{detailed.arquitetura.banco}</small>
                  </div>
                </div>
              </div>

              <div className="info-section reveal-on-scroll">
                <h2 className="detail-section-title">{t('projectDetail.stackDecisions')}</h2>
                <div className="decisions-grid">
                  <div className="decision-item">
                    <span className="decision-label">{t('projectDetail.authLabel')}:</span> {detailed.decisoes.autenticacao}
                  </div>
                  <div className="decision-item">
                    <span className="decision-label">{t('projectDetail.backendLabel')}:</span> {detailed.decisoes.backend}
                  </div>
                  <div className="decision-item">
                    <span className="decision-label">{t('projectDetail.deployLabel')}:</span> {detailed.decisoes.deploy}
                  </div>
                  <div className="decision-item">
                    <span className="decision-label">{t('projectDetail.dbLabel')}:</span> {detailed.decisoes.banco}
                  </div>
                </div>
              </div>

              <div className="info-section reveal-on-scroll">
                <h3 className="tech-section-subtitle">{t('projectDetail.techUsed')}</h3>
                <div className="tech-v2-grid">
                  {detailed.tech_v2.map((tech) => (
                    <div className="tech-card-v2" key={tech.name}>
                      <TechGlyph name={tech.name} size={26} />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {!detailed && project.summary && (
            <div className="projeto-summary-fallback reveal-on-scroll">
               <h2 className="detail-section-title"><FiInfo size={20} /> {t('projectDetail.summaryTitle')}</h2>
               <div className="summary-cards-grid">
                  <div className="summary-card">
                    <span className="summary-label">{t('projectDetail.problem')}:</span>
                    <p>{project.summary.problema}</p>
                  </div>
                  <div className="summary-card">
                    <span className="summary-label">{t('projectDetail.solution')}:</span>
                    <p>{project.summary.solucao}</p>
                  </div>
                  <div className="summary-card">
                    <span className="summary-label">{t('projectDetail.stackLabel')}:</span>
                    <p>{project.summary.stack}</p>
                  </div>
               </div>

               {project.features && project.features.length > 0 && (
                 <div className="info-section" style={{marginTop: '3rem'}}>
                    <h3 className="tech-section-subtitle" style={{textAlign: 'left', marginBottom: '1.5rem'}}>{t('projectDetail.mainFeatures')}</h3>
                    <div className="features-list-grid">
                        {project.features.map((feature, idx) => (
                            <div key={idx} className="feature-item-detail">
                                <FiCheckCircle size={16} className="feature-check" />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
              )}
            </div>
          )}

          <div className="final-project-action">
            {project.online ? (
              <Button href={project.online} target="_blank" rel="noopener noreferrer" variant="primary">
                {t('projectDetail.accessFull')}
                <FiExternalLink size={20} />
              </Button>
            ) : (
              <Button href="/contato" variant="primary">
                {t('projectDetail.talkAbout')}
                <FiCheckCircle size={20} />
              </Button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
