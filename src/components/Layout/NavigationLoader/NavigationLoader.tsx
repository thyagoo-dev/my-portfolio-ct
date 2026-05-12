import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './NavigationLoader.css';

type Phase = 'idle' | 'cover' | 'reveal';

export function NavigationLoader() {
  const location = useLocation();
  const [phase, setPhase] = useState<Phase>('idle');
  const isFirst = useRef(true);
  const t1 = useRef<ReturnType<typeof setTimeout> | null>(null);
  const t2 = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isFirst.current) { isFirst.current = false; return; }
    if (t1.current) clearTimeout(t1.current);
    if (t2.current) clearTimeout(t2.current);

    setPhase('cover');
    t1.current = setTimeout(() => setPhase('reveal'), 380);
    t2.current = setTimeout(() => setPhase('idle'), 780);

    return () => {
      if (t1.current) clearTimeout(t1.current);
      if (t2.current) clearTimeout(t2.current);
    };
  }, [location.key]);

  return (
    <AnimatePresence>
      {phase !== 'idle' && (
        <motion.div
          className="nav-curtain"
          initial={{ scaleY: 0 }}
          animate={phase === 'cover' ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{
            duration: phase === 'cover' ? 0.32 : 0.36,
            ease: [0.76, 0, 0.24, 1],
          }}
          style={{ originY: phase === 'cover' ? 0 : 1 }}
        >
          <div className="nav-curtain-arc" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
