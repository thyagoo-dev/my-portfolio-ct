import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FiArrowLeft, FiArrowRight, FiCheckCircle, FiCpu, FiDatabase,
  FiExternalLink, FiGithub, FiLayout,
} from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../../components/ui/Button/Button';
import { TechGlyph } from '../../components/ui/TechIcon/TechIcon';
import { projects } from '../../data/projects';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useSeo } from '../../hooks/useSeo';
import { ProjectCarousel } from '../../components/ui/ProjectCarousel/ProjectCarousel';
import './ProjetoDetalhe.css';

/** Iniciais do título para o monograma (fallback quando não há screenshot/logo). */
function projectInitials(title: string): string {
  const words = title.replace(/[—–-].*$/, '').trim().split(/\s+/).filter(Boolean);
  return (words.slice(0, 2).map((w) => w[0]).join('') || '?').toUpperCase();
}

export default function ProjetoDetalhe() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id || p.slug === id);
  useScrollReveal();

  useSeo({
    title: project ? `${project.title} — Victor Kauê` : t('seo.notFoundTitle'),
    description: project ? (project.shortDescription || project.description) : t('seo.notFoundDesc'),
    path: `/projetos/${id ?? ''}`,
    image: project?.image,
    noindex: !project,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <main className="page-projeto-detalhe">
        <div className="container pd-notfound">
          <h1>{t('projectDetail.notFoundTitle')}</h1>
          <p>{t('projectDetail.notFoundText')}</p>
          <Button href="/projetos" variant="secondary">
            <FiArrowLeft size={18} />
            {t('projectDetail.back')}
          </Button>
        </div>
      </main>
    );
  }

  const detailed = project.detailed_info;
  const title = project.title || 'Projeto em atualização';
  const lead = project.shortDescription || project.description || 'Descrição em atualização.';
  const techs = project.technologies?.length ? project.technologies : project.stack ?? [];
  const heroTechs = techs.slice(0, 6);
  const extraTechs = Math.max(0, techs.length - heroTechs.length);
  const github = project.github || 'https://github.com/Victorkaue333';

  const hasShots = !!project.screenshots && project.screenshots.length > 0;
  const isPlaceholder = !project.image || project.image.includes('placeholder');

  const story = detailed
    ? [
        { key: 'challenge', label: t('projectDetail.challenge'), text: detailed.desafio },
        { key: 'solution', label: t('projectDetail.solution'), text: detailed.solucao },
        { key: 'impact', label: t('projectDetail.impact'), text: detailed.impacto },
      ]
    : [];

  return (
    <main className="page-projeto-detalhe">
      <div className="container">
        <Link to="/projetos" className="back-link">
          <FiArrowLeft size={18} />
          {t('projectDetail.back')}
        </Link>

        {/* ===== HERO ===== */}
        <section className="pd-hero">
          <div className="pd-hero-text">
            <span className="project-category-badge">
              {project.category === 'pessoal'
                ? t('projectDetail.categoryPersonal')
                : t('projectDetail.categoryReal')}
            </span>
            <h1>{title}</h1>
            <p className="pd-lead">{lead}</p>

            <div className="pd-stack">
              {heroTechs.map((tech) => (
                <span className="pd-stack-chip" key={tech}>
                  <TechGlyph name={tech} size={18} />
                  <span>{tech}</span>
                </span>
              ))}
              {extraTechs > 0 && <span className="pd-stack-chip pd-stack-more">+{extraTechs}</span>}
            </div>

            <div className="pd-actions">
              <Button href={github} target="_blank" rel="noopener noreferrer" variant="secondary">
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
        </section>

        {/* ===== SHOWCASE (visual full-width, entre texto e história) ===== */}
        <section className="pd-showcase reveal-on-scroll">
          <div className="pd-showcase-inner">
            <div className="pd-visual-glow" aria-hidden="true" />
            {hasShots ? (
              <ProjectCarousel images={project.screenshots!} title={title} />
            ) : isPlaceholder ? (
              <div className="pd-monogram" aria-hidden="true">{projectInitials(title)}</div>
            ) : (
              <div className="pd-logo-frame">
                <img src={project.image} alt={title} loading="lazy" />
              </div>
            )}
          </div>
        </section>

        {detailed && (
          <>
            {/* ===== HISTÓRIA (Desafio → Solução → Impacto) ===== */}
            <section className="pd-story reveal-on-scroll">
              {story.map((s) => (
                <article
                  key={s.key}
                  className={`pd-story-item ${s.key === 'impact' ? 'is-impact' : ''}`}
                >
                  <span className="pd-eyebrow">{s.label}</span>
                  <p className="pd-story-text">{s.text}</p>
                </article>
              ))}
            </section>

            {/* ===== FEATURES ===== */}
            {project.features && project.features.length > 0 && (
              <section className="pd-section reveal-on-scroll">
                <h2 className="pd-section-title">{t('projectDetail.features')}</h2>
                <div className="features-list-grid">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="feature-item-detail">
                      <FiCheckCircle size={16} className="feature-check" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ===== SOB O CAPÔ (técnico, secundário) ===== */}
            <section className="pd-tech-block reveal-on-scroll">
              <h2 className="pd-section-title">{t('projectDetail.projectDetails')}</h2>

              <div className="pd-subsection">
                <h3 className="pd-subtitle">{t('projectDetail.architecture')}</h3>
                <div className="architecture-flow">
                  <div className="arch-node">
                    <div className="node-icon"><FiLayout size={24} /></div>
                    <span>{t('projectDetail.frontend')}</span>
                    <small>{detailed.arquitetura.frontend}</small>
                  </div>
                  <div className="arch-arrow"><FiArrowRight size={24} /></div>
                  <div className="arch-node">
                    <div className="node-icon"><FiCpu size={24} /></div>
                    <span>{t('projectDetail.apiBackend')}</span>
                    <small>{detailed.arquitetura.api}</small>
                  </div>
                  <div className="arch-arrow"><FiArrowRight size={24} /></div>
                  <div className="arch-node">
                    <div className="node-icon"><FiDatabase size={24} /></div>
                    <span>{t('projectDetail.database')}</span>
                    <small>{detailed.arquitetura.banco}</small>
                  </div>
                </div>
              </div>

              <div className="pd-subsection">
                <h3 className="pd-subtitle">{t('projectDetail.stackDecisions')}</h3>
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

              <div className="pd-subsection">
                <h3 className="pd-subtitle">{t('projectDetail.techUsed')}</h3>
                <div className="tech-v2-grid">
                  {detailed.tech_v2.map((tech) => (
                    <div className="tech-card-v2" key={tech.name}>
                      <TechGlyph name={tech.name} size={26} />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        <div className="pd-final-cta">
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
    </main>
  );
}
