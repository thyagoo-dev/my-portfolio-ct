import { useEffect, useState } from 'react';
import './FirstVisitLoader.css';

const STORAGE_KEY = 'vk_visited';

export function FirstVisitLoader() {
  const [visible, setVisible] = useState(() => !localStorage.getItem(STORAGE_KEY));
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const fadeTimer = setTimeout(() => setFading(true), 1400);
    const hideTimer = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, '1');
      setVisible(false);
    }, 1900);
    return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer); };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className={`fvl-overlay ${fading ? 'fvl-fade' : ''}`} aria-hidden="true">
      <div className="fvl-arc" />
    </div>
  );
}
