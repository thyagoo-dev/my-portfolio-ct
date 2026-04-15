import { NavLink } from 'react-router-dom';
import { FiHome, FiUser, FiBriefcase, FiLayers, FiMail, FiAward } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import './MobileNavbar.css';

export function MobileNavbar() {
  const { t } = useTranslation();

  const navItems = [
    { path: '/', icon: <FiHome />, label: t('nav.home') },
    { path: '/sobre', icon: <FiUser />, label: t('nav.about') },
    { path: '/projetos', icon: <FiBriefcase />, label: t('nav.projects') },
    { path: '/servicos', icon: <FiLayers />, label: t('nav.services') },
    { path: '/certificados', icon: <FiAward />, label: t('nav.certificates') },
    { path: '/contato', icon: <FiMail />, label: t('nav.contact') },
  ];

  return (
    <nav className="mobile-navbar" aria-label="Navegação mobile">
      <div className="mobile-nav-container">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
            aria-label={item.label}
          >
            <span className="mobile-nav-icon">{item.icon}</span>
            <span className="mobile-nav-label">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}