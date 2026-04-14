import { useState, useEffect } from 'react';
import './Preloader.css';

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader" aria-label="Carregando">
      <div className="preloader-content">
        <div className="preloader-logo">VK</div>
        <div className="preloader-spinner" />
      </div>
    </div>
  );
}
