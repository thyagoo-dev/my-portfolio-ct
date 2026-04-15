import { FiChevronUp } from 'react-icons/fi';
import { useScrollPosition } from '../../../hooks/useScrollPosition';

export function BackToTop() {
  const { scrollY } = useScrollPosition(300);
  const visible = scrollY > 300;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`back-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '48px',
        height: '48px',
        borderRadius: '999px',
        background: 'var(--gradient-primary)',
        border: '1px solid rgba(245, 158, 11, 0.6)',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 999,
        boxShadow: '0 8px 20px rgba(245, 158, 11, 0.3)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <FiChevronUp size={22} />
    </button>
  );
}
