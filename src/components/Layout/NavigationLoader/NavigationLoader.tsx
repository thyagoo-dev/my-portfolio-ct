import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './NavigationLoader.css';

export function NavigationLoader() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const isFirst = useRef(true);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isFirst.current) { isFirst.current = false; return; }
    if (hideTimer.current) clearTimeout(hideTimer.current);

    setVisible(true);
    hideTimer.current = setTimeout(() => setVisible(false), 420);

    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [location.key]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="nav-progress"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.16, ease: 'easeOut' }}
          aria-hidden="true"
        />
      )}
    </AnimatePresence>
  );
}
