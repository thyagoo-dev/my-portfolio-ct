import { Link } from 'react-router-dom';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { navLinks, socialLinks, footerTech } from '../../../data/social';
import './Footer.css';

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const socialIconMap = {
    mail: FiMail,
    linkedin: FiLinkedin,
    github: FiGithub,
    whatsapp: FaWhatsapp,
  } as const;

  const navKeyByPath = {
    '/': 'home',
    '/sobre': 'about',
    '/projetos': 'projects',
    '/servicos': 'services',
    '/certificados': 'certificates',
    '/contato': 'contact',
  } as const;

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <span>Victor</span>
              <span>Kaue</span>
            </Link>
            <p>
              Desenvolvedor backend/full-stack com foco em sistemas web escalaveis, Python e Django.
              Solucoes pensadas com logica e entregues com consistencia.
            </p>
            <div className="footer-contact-icons">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className={s.name.toLowerCase()}
                >
                  {(() => {
                    const Icon = socialIconMap[s.icon as keyof typeof socialIconMap] || FiMail;
                    return <Icon size={16} aria-hidden="true" />;
                  })()}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-nav">
            <p className="footer-label">Navegacao</p>
            <ul>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{t(`nav.${navKeyByPath[link.path as keyof typeof navKeyByPath] || 'home'}`)}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-tech">
            <p className="footer-label">Stack Principal</p>
            <ul className="footer-tech-badges">
              {footerTech.map((tech) => (
                <li key={tech.name}>
                  <i className={tech.icon} />
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Victor Kaue - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
