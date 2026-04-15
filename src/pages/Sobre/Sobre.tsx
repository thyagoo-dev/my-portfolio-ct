import { useEffect, useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Award, 
  MapPin, 
  Github, 
  Linkedin, 
  Mail, 
  Calendar,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { experiences } from '../../data/experiences';
import { education } from '../../data/education';
import { expertise } from '../../data/expertise';
import { socialLinks } from '../../data/social';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Button } from '../../components/ui/Button/Button';
import './Sobre.css';

export default function Sobre() {
  const [activeSection, setActiveSection] = useState('intro');
  const [githubStatsError, setGithubStatsError] = useState(false);
  useScrollReveal();

  useEffect(() => {
    document.title = 'Sobre — Victor Kauê';
  }, []);

  const menuItems = [
    { id: 'intro', label: 'Introdução', icon: <Sparkles size={16} /> },
    { id: 'role', label: 'Função Atual', icon: <Briefcase size={16} /> },
    { id: 'experience', label: 'Experiência', icon: <Briefcase size={16} /> },
    { id: 'education', label: 'Formação', icon: <GraduationCap size={16} /> },
    { id: 'certs', label: 'Certificações', icon: <Award size={16} /> },
    { id: 'expertise', label: 'Expertise Técnica', icon: <Code2 size={16} /> },
    { id: 'github', label: 'GitHub', icon: <Github size={16} /> },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <main className="page-sobre">
      <div className="container">
        <div className="about-layout">
          
          {/* ========== SIDEBAR ========== */}
          <aside className="about-sidebar">
            <div className="sidebar-sticky">
              <div className="profile-card reveal-on-scroll">
                <div className="profile-image-container">
                  <div className="profile-glow" aria-hidden="true" />
                  <img src="/images/eu/victor.webp" alt="Victor Kauê" className="profile-photo" />
                </div>
                
                <h1 className="sidebar-name">Victor Kauê</h1>
                <h2 className="sidebar-role">Desenvolvedor Full Stack</h2>

                <div className="sidebar-pills">
                  <div className="sidebar-pill">
                    <MapPin size={14} />
                    <span>Itacuruba, PE — Brasil</span>
                  </div>
                </div>

                <div className="lang-toggle-container">
                  <button className="lang-btn">English</button>
                  <button className="lang-btn active">Português</button>
                </div>

                <nav className="sidebar-nav">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                      onClick={() => scrollToSection(item.id)}
                    >
                      <span className="nav-dot" />
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* ========== MAIN CONTENT ========== */}
          <div className="about-main-content">
            
            {/* CALL TO ACTION HEADER */}
            <div className="content-header reveal-on-scroll">
              <a href="https://wa.me/5587981677005" target="_blank" rel="noopener noreferrer" className="header-cta">
                <Calendar size={16} />
                Agendar uma chamada
                <ChevronRight size={16} />
              </a>
              <h2 className="main-title">Victor Kauê</h2>
              <h3 className="main-subtitle">Desenvolvedor Full Stack</h3>

              <div className="social-quick-links">
                {socialLinks.filter(s => ['GitHub', 'LinkedIn', 'Email'].includes(s.name)).map(link => (
                  <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="social-btn">
                    {link.name === 'GitHub' && <Github size={16} />}
                    {link.name === 'LinkedIn' && <Linkedin size={16} />}
                    {link.name === 'Email' && <Mail size={16} />}
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* INTRODUÇÃO */}
            <section id="intro" className="about-content-section reveal-on-scroll">
              <p className="intro-text">
                Sou desenvolvedor com foco em backend e sistemas web, formado em Desenvolvimento de
                Sistemas e atualmente graduando em Gestão da Tecnologia da Informação. Atuo no
                desenvolvimento de APIs, regras de negócio, modelagem de dados, interface web e deploy, sempre
                com foco em arquitetura limpa, segurança e valor de negócio. Atualmente trabalho na NTIDI
                criando soluções para sistemas web da empresa, utilizando Django e MySQL, com uma abordagem
                orientada a resultados.
              </p>
            </section>

            {/* DIFERENCIAIS */}
            <section id="role" className="about-content-section reveal-on-scroll">
              <h2 className="section-title">
                <Sparkles size={24} />
                Diferenciais
              </h2>
              <div className="diferenciais-grid">
                <div className="diferencial-card">
                  <h3>Backend Especializado</h3>
                  <p>Construção de regras de negócio consistentes, autenticação segura e modelagem de dados orientada a escala.</p>
                </div>
                <div className="diferencial-card">
                  <h3>APIs Escaláveis</h3>
                  <p>Desenvolvimento de APIs REST com foco em performance, integração entre sistemas e manutenção de longo prazo.</p>
                </div>
                <div className="diferencial-card">
                  <h3>Sistemas Empresariais</h3>
                  <p>Experiência em projetos reais com entrega ponta a ponta, do planejamento ao deploy em ambiente de produção.</p>
                </div>
              </div>
            </section>

            {/* EXPERIÊNCIA */}
            <section id="experience" className="about-content-section reveal-on-scroll">
              <h2 className="section-title">
                <Briefcase size={24} />
                Experiência Profissional
              </h2>
              <div className="experience-timeline">
                {experiences.map((exp) => (
                  <div className="experience-block" key={exp.id}>
                    <div className="exp-dot" />
                    <div className="exp-header">
                      <h3>{exp.title}</h3>
                      <span className="exp-period">{exp.period}</span>
                    </div>
                    <p className="exp-company">{exp.company} — {exp.location}</p>
                    {exp.description && <p className="exp-desc">{exp.description}</p>}
                    {exp.achievements.length > 0 && (
                      <ul className="exp-list">
                        {exp.achievements.map((a, i) => <li key={i}>{a}</li>)}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* FORMAÇÕES */}
            <section id="education" className="about-content-section reveal-on-scroll">
              <h2 className="section-title">
                <GraduationCap size={24} />
                Formações
              </h2>
              <div className="education-list">
                {education.map((edu) => (
                  <div className="education-item-row" key={edu.id}>
                    <div className="edu-icon"><GraduationCap size={20} /></div>
                    <div className="edu-info">
                      <h3>{edu.course}</h3>
                      <p>{edu.institution} — {edu.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* EXPERTISE TÉCNICA */}
            <section id="expertise" className="about-content-section reveal-on-scroll">
              <h2 className="section-title">
                <Code2 size={24} />
                Expertise Técnica
              </h2>
              <div className="expertise-grid">
                {expertise.map((cat) => (
                  <div className="expertise-box" key={cat.title}>
                    <h4 className="expertise-title">{cat.title}</h4>
                    <div className="expertise-tags">
                      {cat.items.map((item) => (
                        <div className="tech-tag" key={item.name}>
                          {item.iconType === 'devicon' && <i className={item.icon} />}
                          <span>{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* GITHUB */}
            <section id="github" className="about-content-section reveal-on-scroll">
              <h2 className="section-title">
                <Github size={24} />
                GitHub Stats
              </h2>
              {!githubStatsError ? (
                <div className="github-stats-container">
                  <a href="https://github.com/Victorkaue333" target="_blank" rel="noopener noreferrer" className="github-card-link">
                    <img
                      src="https://github-readme-stats.vercel.app/api?username=Victorkaue333&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0B1220&title_color=F59E0B&icon_color=F59E0B&text_color=F3F4F6"
                      alt="GitHub Stats"
                      className="github-img"
                      onError={() => setGithubStatsError(true)}
                    />
                  </a>
                  <a href="https://github.com/Victorkaue333" target="_blank" rel="noopener noreferrer" className="github-card-link">
                    <img
                      src="https://github-readme-stats.vercel.app/api/top-langs/?username=Victorkaue333&layout=compact&theme=tokyonight&hide_border=true&bg_color=0B1220&title_color=F59E0B&text_color=F3F4F6"
                      alt="Top Languages"
                      className="github-img"
                      onError={() => setGithubStatsError(true)}
                    />
                  </a>
                </div>
              ) : (
                <div className="github-fallback-card">
                  <p>Confira minhas atividades diretamente no meu perfil:</p>
                  <Button href="https://github.com/Victorkaue333" variant="outline" external>
                    <Github size={18} />
                    Ver GitHub
                  </Button>
                </div>
              )}
            </section>

            <div className="view-more-action">
              <Button href="/projetos" variant="primary">
                Ver meus projetos
                <ChevronRight size={18} />
              </Button>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
