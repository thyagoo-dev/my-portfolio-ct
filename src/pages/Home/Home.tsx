import { useEffect } from 'react';
import { 
  FiArrowRight, 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiDatabase, 
  FiCpu, 
  FiActivity,
  FiZap,
  FiLayout,
  FiTrendingUp
} from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { featuredProjects } from '../../data/projects';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Button } from '../../components/ui/Button/Button';
import { Reveal } from '../../components/ui/Reveal/Reveal';
import { ColorBends } from '../../components/ui/ColorBends/ColorBends';
import { ProjectCard } from '../../components/ui/ProjectCard/ProjectCard';
import { FloatingLines } from '../../components/ui/FloatingLines/FloatingLines';
import './Home.css';

export default function Home() {
  const { t } = useTranslation();
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
    { id: 'backend', icon: <FiDatabase size={24} />, title: t('about.highlights.backend'), desc: t('about.highlights.backendDesc') },
    { id: 'api', icon: <FiCpu size={24} />, title: t('about.highlights.api'), desc: t('about.highlights.apiDesc') },
    { id: 'fullstack', icon: <FiLayout size={24} />, title: t('about.highlights.enterprise'), desc: t('about.highlights.enterpriseDesc') }
  ];

  return (
    <main className="home">
      
      {/* ========== HERO SECTION (PRO MAX) ========== */}
      <section id="inicio" className="hero">
        <FloatingLines />
        <div className="container hero-container">
          <div className="hero-content">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="hero-title-main"
            >
              <span className="title-white">{t('hero.role')}</span>
              <span className="title-gray">{t('hero.tech')}</span>
              <span className="title-orange">{t('hero.subtech')}</span>
            </motion.h1>

            <Reveal delay={0.3}>
              <p className="hero-description">
                {t('hero.description')}
              </p>
            </Reveal>

            <div className="hero-actions">
              <Reveal delay={0.5}>
                <Button href="/sobre" variant="primary">
                  {t('hero.cta')}
                  <FiArrowRight size={18} />
                </Button>
              </Reveal>
              <Reveal delay={0.6}>
                <div className="hero-socials">
                  <a href="https://github.com/Victorkaue333" target="_blank" rel="noopener noreferrer" className="social-icon github" aria-label="GitHub"><FiGithub size={20} /></a>
                  <a href="https://linkedin.com/in/victorkaue" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" aria-label="LinkedIn"><FiLinkedin size={20} /></a>
                  <a href="mailto:kaue.alves.pg@gmail.com" className="social-icon email" aria-label="Email"><FiMail size={20} /></a>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-container reveal-on-scroll">
              <div className="photo-ring" />
              <div className="photo-ring inner" />
              <div className="glass-overlay" />
              <img src="/images/eu/victorkaue.png" alt="Victor Kauê" className="hero-image" />
            </div>
          </div>
        </div>
      </section>

      {/* ========== RESULTS STRIP (PRO MAX) ========== */}
      <section className="results-strip">
        <div className="container">
          <div className="results-inner">
            <div className="results-badge">
              <FiTrendingUp size={16} /> Impacto Real
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
            <h2 className="section-title"><FiActivity /> {t('about.highlights.title')}</h2>
            <p className="section-subtitle">Onde a lógica encontra a performance para criar valor.</p>
          </div>

          <div className="services-grid">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={i * 0.2} width="100%" height="100%">
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
              <h2 className="section-title"><FiZap /> Projetos em Destaque</h2>
              <Button href="/projetos" variant="ghost">{t('common.viewAll')} <FiArrowRight size={18} /></Button>
            </div>
            <p className="section-subtitle">Uma amostra do que eu construo com foco em escalabilidade.</p>
          </div>

          <div className="projects-carousel-container">
            <div className="projects-pro-list">
              {featuredProjects.map((project, i) => (
                <Reveal key={project.id} delay={i * 0.15} width="100%" height="100%" className="project-carousel-item">
                  <ProjectCard project={project} withReveal={false} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
