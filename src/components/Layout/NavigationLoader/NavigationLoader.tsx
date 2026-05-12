import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './NavigationLoader.css';

export function NavigationLoader() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisible(true);
    timerRef.current = setTimeout(() => setVisible(false), 600);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [location.key]);

  if (!visible) return null;

  return (
    <div className="nav-loader-overlay" aria-hidden="true">
      <div className="nav-loader-arc" />
    </div>
  );
}
