import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { navLinks } from '../../data/social';
import { Download } from 'lucide-react';
import './Navbar.css';

export function Navbar() {
  const { scrolled } = useScrollPosition(60);
  const [menuOpen, setMenuOpen] = useState(false);

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
          <span>Victor Kauê</span>
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
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-actions">
          <a
            href="/docs/Curriculo/Curriculo_Victor_Kaue.pdf"
            className="btn-cv"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Baixar currículo"
          >
            <Download size={14} />
            Baixar CV
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
