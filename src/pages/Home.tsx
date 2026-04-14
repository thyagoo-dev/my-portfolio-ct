import { useEffect } from 'react';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  Database, 
  Cpu, 
  ChevronRight,
  TrendingUp,
  Cpu as Chip,
  Flame,
  Layout
} from 'lucide-react';
import { motion } from 'framer-motion';
import { featuredProjects } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { ColorBends } from '../components/ui/ColorBends';
import './Home.css';

export default function Home() {
  useScrollReveal();

  useEffect(() => {
    document.title = 'Victor Kauê — Desenvolvedor Full Stack';
  }, []);

  const results = [
    { value: '30%', label: 'Crescimento em Performance' },
    { value: '25+', label: 'APIs Escaláveis Criadas' },
    { value: '10+', label: 'Sistemas em Produção' },
  ];

  const services = [
    { id: 'backend', icon: <Database size={24} />, title: 'Arquitetura Backend', desc: 'Sistemas robustos com Python/Django e modelagem otimizada.' },
    { id: 'api', icon: <Cpu size={24} />, title: 'Engenharia de APIs', desc: 'Integrações escaláveis seguindo o padrão REST e Clean Architecture.' },
    { id: 'fullstack', icon: <Layout size={24} />, title: 'Sistemas Fullstack', desc: 'Soluções ponta a ponta com foco total na regra de negócio.' }
  ];

  return (
    <main className="home">
      
      {/* ========== HERO SECTION (PRO MAX) ========== */}
      <section id="inicio" className="hero">
        <ColorBends />
        <div className="container hero-container">
          <div className="hero-content">
            <Reveal delay={0.1}>
              <div className="hero-status">
                <span className="pulse-dot"></span>
                Disponível para novos projetos
              </div>
            </Reveal>

            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Desenvolvedor Python <br />
              <span className="accent-text">APIs e sistemas web com Django.</span>
            </motion.h1>

            <Reveal delay={0.3}>
              <p className="hero-description">
                Foco em performance e manutenção. Entrego software confiável 
                para processos críticos, da regra de negócio ao deploy em produção.
              </p>
            </Reveal>

            <div className="hero-actions">
              <Reveal delay={0.5}>
                <Button href="/sobre" variant="primary">
                  Conheça minha jornada
                  <ArrowRight size={18} />
                </Button>
              </Reveal>
              <Reveal delay={0.6}>
                <div className="hero-socials">
                  <a href="https://github.com/Victorkaue333" target="_blank" rel="noopener noreferrer" className="social-icon github" aria-label="GitHub"><Github size={20} /></a>
                  <a href="https://linkedin.com/in/victorkaue" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" aria-label="LinkedIn"><Linkedin size={20} /></a>
                  <a href="mailto:kaue.alves.pg@gmail.com" className="social-icon email" aria-label="Email"><Mail size={20} /></a>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-container reveal-on-scroll">
              <div className="photo-ring" />
              <div className="photo-ring inner" />
              <img src="/images/eu/victor.webp" alt="Victor Kauê" className="hero-image" />
              
            </div>
          </div>
        </div>
      </section>

      {/* ========== RESULTS STRIP (PRO MAX) ========== */}
      <section className="results-strip">
        <div className="container">
          <div className="results-inner">
            <div className="results-badge">
              <TrendingUp size={16} /> Impacto Real
            </div>
            <div className="results-grid">
              {results.map((res, i) => (
                <Reveal key={i} delay={i * 0.1} yOffset={20}>
                  <div className="result-item">
                    <span className="result-value">{res.value}</span>
                    <span className="result-label">{res.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES (PRO MAX) ========== */}
      <section id="servicos" className="home-services">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <h2 className="section-title"><Chip /> Especialidades</h2>
            <p className="section-subtitle">Onde a lógica encontra a performance para criar valor.</p>
          </div>

          <div className="services-grid">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={i * 0.2}>
                <div className="service-pro-card">
                  <div className="service-icon-box">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROJECTS (PRO MAX) ========== */}
      <section id="projetos" className="home-projects">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <div className="header-top">
              <h2 className="section-title"><Flame /> Projetos em Destaque</h2>
              <Button href="/projetos" variant="ghost">Ver todos <ArrowRight size={18} /></Button>
            </div>
            <p className="section-subtitle">Uma amostra do que eu construo com foco em escalabilidade.</p>
          </div>

          <div className="projects-carousel-container">
            <div className="projects-pro-list">
              {featuredProjects.map((project, i) => (
                <Reveal key={project.id} delay={i * 0.15}>
                  <div className="project-pro-card">
                    <div className="p-image-box">
                      <img src={project.image} alt={project.title} />
                    </div>
                    <div className="p-content-box">
                      <span className="p-category">{project.category === 'pessoal' ? 'Portfólio' : 'Case Real'}</span>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="p-tags">
                        {project.technologies.slice(0, 3).map(t => <span key={t} className="p-tag">{t}</span>)}
                      </div>
                      <Button href={project.detailPath} variant="ghost" className="p-link">
                        Explorar Arquitetura <ChevronRight size={16} />
                      </Button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
