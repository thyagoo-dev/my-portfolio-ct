import { useState, useEffect } from 'react';
import { FloatingLines } from '../../ui/FloatingLines/FloatingLines';
import './Preloader.css';

interface PreloaderProps {
  duration?: number;
}

export function Preloader({ duration = 2000 }: PreloaderProps) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setLoading(true);
    setProgress(0);
    
    const interval = 10; // Update every 10ms
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + step;
      });
    }, interval);

    const fadeOutTimer = setTimeout(() => {
      setLoading(false);
    }, duration + 500); // Wait for transition after 100%

    return () => {
      clearInterval(timer);
      clearTimeout(fadeOutTimer);
    };
  }, [duration]);

  if (!loading) return null;

  return (
    <div className={`preloader-wrapper ${progress === 100 ? 'fading' : ''}`} aria-label="Carregando">
      {/* Background Effect */}
      <FloatingLines />

      <div className="preloader-overlay" />

      <div className="preloading-stage">
        <div className="preloader-logo-group">
          <div className="logo-v" data-text="V">
            V
            <span className="v-glitch-1">V</span>
            <span className="v-glitch-2">V</span>
          </div>
          <div className="logo-k" data-text="K">
            K
            <span className="k-glitch-1">K</span>
            <span className="k-glitch-2">K</span>
          </div>
        </div>

        <div className="preloader-progress-container">
          <div className="progress-top-info">
            <span className="loading-status">SINCRONIZANDO</span>
            <span className="loading-percent">{Math.round(progress)}%</span>
          </div>

          <div className="progress-bar-track">
            <div
              className="progress-bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="loading-footer-text">
            VISUAL KINETIC FLOW
          </div>
        </div>
      </div>
    </div>
  );
}
