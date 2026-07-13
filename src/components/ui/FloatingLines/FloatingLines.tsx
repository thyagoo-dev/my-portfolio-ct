import React, { useEffect, useRef } from 'react';

/**
 * Linhas onduladas animadas com brilho (fundo). Reescrito de three.js/R3F
 * para Canvas 2D — mesmo visual, sem o bundle de ~1 MB do WebGL.
 * Respeita prefers-reduced-motion e pausa quando a aba fica oculta.
 */
const LINE_COLOR = '255, 122, 0'; // laranja da marca (rgb)

export const FloatingLines: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

    let width = 0;
    let height = 0;
    // mouse normalizado [0,1], origem no canto inferior-esquerdo (como no shader)
    const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
    let raf = 0;
    let running = true;
    let startTime: number | null = null;

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resize();

    const onPointerMove = (e: PointerEvent) => {
      mouse.tx = e.clientX / window.innerWidth;
      mouse.ty = 1 - e.clientY / window.innerHeight;
    };

    const drawFrame = (elapsed: number) => {
      ctx.clearRect(0, 0, width, height);
      const aspect = width / Math.max(height, 1);
      const isMobile = width <= 768;
      const maxLines = isMobile ? 6 : 10;
      const verticalScale = isMobile ? 0.18 : 0.12;

      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;

      ctx.lineCap = 'round';
      ctx.shadowColor = `rgba(${LINE_COLOR}, 0.9)`;

      const step = Math.max(4, Math.round(width / 220));

      for (let i = 1; i <= maxLines; i++) {
        const t = elapsed * 0.15 + i * 1.5;
        const offset = (i - maxLines * 0.5) * verticalScale;
        const alpha = Math.min(0.5, 0.55 / i);

        ctx.beginPath();
        for (let px = 0; px <= width; px += step) {
          const stx = px / width;
          const posx = stx * aspect;
          let y = 0.5 + Math.sin(posx * (0.4 + i * 0.05) + t) * 0.2;
          y += Math.sin(posx * 2.0 - t * 0.5) * 0.08;

          const lineY = y + offset;
          const dMouse = Math.hypot(stx - mouse.x, lineY - mouse.y);
          const mouseEffect = smoothstep(0.5, 0.0, dMouse);
          const bend = Math.sin(stx * 2.0 + elapsed) * mouseEffect * 0.15;

          const yNorm = lineY + bend;
          const pyPixel = (1 - yNorm) * height;
          if (px === 0) ctx.moveTo(px, pyPixel);
          else ctx.lineTo(px, pyPixel);
        }
        ctx.strokeStyle = `rgba(${LINE_COLOR}, ${alpha})`;
        ctx.lineWidth = isMobile ? 1 : 1.4;
        ctx.shadowBlur = isMobile ? 8 : 12;
        ctx.stroke();
      }
      ctx.shadowBlur = 0;
    };

    const loop = (now: number) => {
      if (!running) return;
      if (startTime === null) startTime = now;
      drawFrame((now - startTime) / 1000);
      raf = requestAnimationFrame(loop);
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!reduceMotion) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);

    if (reduceMotion) {
      drawFrame(0); // um quadro estático
    } else {
      raf = requestAnimationFrame(loop);
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="floating-lines-container"
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}
