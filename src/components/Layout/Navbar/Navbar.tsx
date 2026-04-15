import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useScrollPosition } from '../../../hooks/useScrollPosition';
import { navLinks } from '../../../data/social';
import { FiDownload } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

export function Navbar() {
  const { t, i18n } = useTranslation();
  const { scrolled } = useScrollPosition(60);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="main-navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" aria-label="Victor Kauê — Página inicial">
          <span className="logo-white">Victor</span>
          <span className="logo-orange"> Kauê</span>
        </Link>

        <div className={`nav-menu-wrapper ${menuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {t(`nav.${link.path === '/' ? 'home' : link.path.substring(1)}`)}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-actions">
          <button 
            className="btn-lang" 
            onClick={toggleLanguage}
            aria-label="Trocar idioma / Change language"
          >
            {i18n.language === 'pt' ? 'EN' : 'PT'}
          </button>

          <a
            href="/docs/Curriculo/Curriculo_Victor_Kaue.pdf"
            className="btn-cv"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t('nav.downloadCV')}
          >
            <FiDownload size={14} />
            {t('nav.downloadCV')}
          </a>

          <button
            className={`mobile-menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
