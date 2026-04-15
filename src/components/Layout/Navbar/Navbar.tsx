import { NavLink, Link } from 'react-router-dom';
import {
  FiDownload,
  FiGlobe,
  FiHome,
  FiUser,
  FiBriefcase,
  FiLayers,
  FiAward,
  FiMail,
} from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { useScrollPosition } from '../../../hooks/useScrollPosition';
import { navLinks } from '../../../data/social';
import { useLanguage } from '../../../hooks/useLanguage';
import './Navbar.css';

const navIconByPath = {
  '/': FiHome,
  '/sobre': FiUser,
  '/projetos': FiBriefcase,
  '/servicos': FiLayers,
  '/certificados': FiAward,
  '/contato': FiMail,
} as const;

const navKeyByPath = {
  '/': 'home',
  '/sobre': 'about',
  '/projetos': 'projects',
  '/servicos': 'services',
  '/certificados': 'certificates',
  '/contato': 'contact',
} as const;

export function Navbar() {
  const { t } = useTranslation();
  const { scrolled } = useScrollPosition(60);
  const { lang, toggleLanguage } = useLanguage();

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="main-navbar" aria-label="Navegação principal">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" aria-label="Victor Kaue - Página inicial">
          <span className="logo-white">Victor</span>
          <span className="logo-orange"> Kaue</span>
        </Link>

        <div className="nav-menu-wrapper">
          <ul className="nav-menu">
            {navLinks.map((link) => {
              const Icon = navIconByPath[link.path as keyof typeof navIconByPath] || FiHome;
              const navKey = navKeyByPath[link.path as keyof typeof navKeyByPath] || 'home';
              const label = t(`nav.${navKey}`);

              return (
                <li key={link.path}>
                  <NavLink to={link.path} end={link.path === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
                    <Icon size={15} aria-hidden="true" />
                    <span>{label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="navbar-actions">
          <button className="btn-lang" onClick={toggleLanguage} aria-label="Trocar idioma / Change language">
            <FiGlobe size={14} aria-hidden="true" />
            {lang === 'pt' ? 'EN' : 'PT'}
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
        </div>
      </div>
    </nav>
  );
}
