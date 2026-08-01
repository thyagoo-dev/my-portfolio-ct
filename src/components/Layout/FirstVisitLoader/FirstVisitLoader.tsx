import { useEffect, useState } from 'react';
import './FirstVisitLoader.css';

const STORAGE_KEY = 'ct_visited';

function safeGet(key: string): string | null {
  try { return localStorage.getItem(key); } catch { return null; }
}
function safeSet(key: string, value: string): void {
  try { localStorage.setItem(key, value); } catch { /* storage bloqueado — ignora */ }
}

export function FirstVisitLoader() {
  const [visible, setVisible] = useState(() => !safeGet(STORAGE_KEY));
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const fadeTimer = setTimeout(() => setFading(true), 500);
    const hideTimer = setTimeout(() => {
      safeSet(STORAGE_KEY, '1');
      setVisible(false);
    }, 800);
    return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer); };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className={`fvl-overlay ${fading ? 'fvl-fade' : ''}`} aria-hidden="true">
      <div className="fvl-arc" />
    </div>
  );
}
