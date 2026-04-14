import { Link } from 'react-router-dom';
import { navLinks, socialLinks, footerTech } from '../../data/social';
import './Footer.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <span className="logo-icon">VK</span>
              <span>Victor</span>
              <span>Kauê</span>
            </Link>
            <p>
              Desenvolvedor backend/full-stack com foco em sistemas web escaláveis, Python e
              Django. Soluções pensadas com lógica e entregues com consistência.
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
                  <i className={s.iconType === 'bootstrap' ? s.icon : `bi bi-${s.icon}`} />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-nav">
            <p className="footer-label">Navegação</p>
            <ul>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
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
          <p>© {year} Victor Kauê — Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
