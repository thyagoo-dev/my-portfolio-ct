import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { 
  FiArrowLeft, 
  FiExternalLink, 
  FiGithub, 
  FiTarget, 
  FiZap, 
  FiCheckCircle, 
  FiDatabase, 
  FiCpu, 
  FiLayout,
  FiArrowRight
} from 'react-icons/fi';
import { projects } from '../../data/projects';
import { Button } from '../../components/ui/Button/Button';
import './ProjetoDetalhe.css';

export default function ProjetoDetalhe() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    document.title = project ? `${project.title} — Victor Kauê` : 'Projeto não encontrado';
    window.scrollTo(0, 0);
  }, [project]);

  if (!project) {
    return (
      <main style={{ paddingTop: '10rem', textAlign: 'center' }}>
        <div className="container">
          <h1>Projeto não encontrado</h1>
          <p style={{ margin: '1rem 0 2rem', color: 'var(--text-muted-color)' }}>O projeto que você procura não existe.</p>
          <Button href="/projetos" variant="secondary">
            <FiArrowLeft size={18} />
            Voltar aos projetos
          </Button>
        </div>
      </main>
    );
  }

  const detailed = project.detailed_info;

  return (
    <main className="page-projeto-detalhe">
      <section className="projeto-hero">
        <div className="container">
          <Link to="/projetos" className="back-link">
            <FiArrowLeft size={18} />
            Voltar aos projetos
          </Link>

          <div className="projeto-header">
            <div className="projeto-header-text">
              <span className="project-category-badge">{project.category === 'pessoal' ? 'Projeto Pessoal' : 'Projeto Real / Empresa'}</span>
              <h1>{project.title}</h1>
              <p className="projeto-desc">{project.description}</p>
              
              <div className="project-tags">
                {project.technologies.map((tech) => (
                  <span key={tech} className="project-tag">{tech}</span>
                ))}
              </div>

              <div className="projeto-actions">
                {project.github && (
                  <Button href={project.github} target="_blank" rel="noopener noreferrer" variant="secondary">
                    <FiGithub size={18} />
                    Ver código
                  </Button>
                )}
                {project.online && (
                  <Button href={project.online} target="_blank" rel="noopener noreferrer" variant="primary">
                    <FiExternalLink size={18} />
                    Ver online
                  </Button>
                )}
              </div>
            </div>
            <div className="projeto-header-image">
              <div className="image-glow" />
              <img src={project.image} alt={project.title} />
            </div>
          </div>

          {/* DESCRIÇÃO E DETALHES */}
          {detailed && (
            <div className="projeto-extended-info">
              <div className="info-section reveal-on-scroll">
                <h2 className="detail-section-title">Descrição</h2>
                <p className="detail-text">{project.description}</p>
              </div>

              <div className="info-section reveal-on-scroll">
                <h2 className="detail-section-title">Detalhes do Projeto</h2>
                <div className="details-grid-custom">
                  <div className="detail-card-item">
                    <div className="card-icon"><FiTarget size={20} /></div>
                    <div className="card-text">
                      <h4 className="card-title-main">Desafio</h4>
                      <p>{detailed.desafio}</p>
                    </div>
                  </div>
                  <div className="detail-card-item">
                    <div className="card-icon"><FiZap size={20} /></div>
                    <div className="card-text">
                      <h4 className="card-title-main">Solução</h4>
                      <p>{detailed.solucao}</p>
                    </div>
                  </div>
                  <div className="detail-card-item">
                    <div className="card-icon"><FiCheckCircle size={20} /></div>
                    <div className="card-text">
                      <h4 className="card-title-main">Impacto</h4>
                      <p>{detailed.impacto}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ARQUITETURA VISUAL */}
              <div className="info-section architecture-section reveal-on-scroll">
                <h2 className="detail-section-title">Arquitetura</h2>
                <div className="architecture-flow">
                  <div className="arch-node">
                    <div className="node-icon"><FiLayout size={24} /></div>
                    <span>Frontend</span>
                    <small>{detailed.arquitetura.frontend}</small>
                  </div>
                  <div className="arch-arrow"><FiArrowRight size={24} /></div>
                  <div className="arch-node">
                    <div className="node-icon"><FiCpu size={24} /></div>
                    <span>API / Backend</span>
                    <small>{detailed.arquitetura.api}</small>
                  </div>
                  <div className="arch-arrow"><FiArrowRight size={24} /></div>
                  <div className="arch-node">
                    <div className="node-icon"><FiDatabase size={24} /></div>
                    <span>Banco de Dados</span>
                    <small>{detailed.arquitetura.banco}</small>
                  </div>
                </div>
              </div>

              {/* STACK E DECISÕES */}
              <div className="info-section reveal-on-scroll">
                <h2 className="detail-section-title">Stack e Decisões</h2>
                <div className="decisions-grid">
                  <div className="decision-item">
                    <span className="decision-label">Autenticação:</span> {detailed.decisoes.autenticacao}
                  </div>
                  <div className="decision-item">
                    <span className="decision-label">Back-end:</span> {detailed.decisoes.backend}
                  </div>
                  <div className="decision-item">
                    <span className="decision-label">Deploy:</span> {detailed.decisoes.deploy}
                  </div>
                  <div className="decision-item">
                    <span className="decision-label">Banco:</span> {detailed.decisoes.banco}
                  </div>
                </div>
              </div>

              {/* TECNOLOGIAS USADAS */}
              <div className="info-section reveal-on-scroll">
                <h3 className="tech-section-subtitle">Tecnologias Usadas</h3>
                <div className="tech-v2-grid">
                  {detailed.tech_v2.map((tech) => (
                    <div className="tech-card-v2" key={tech.name}>
                      <i className={tech.icon} />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="final-project-action">
            {project.online ? (
              <Button href={project.online} target="_blank" rel="noopener noreferrer" variant="primary">
                Acessar Projeto Completo
                <FiExternalLink size={20} />
              </Button>
            ) : (
              <Button href="/contato" variant="primary">
                Fale comigo sobre este projeto
                <FiCheckCircle size={20} />
              </Button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
