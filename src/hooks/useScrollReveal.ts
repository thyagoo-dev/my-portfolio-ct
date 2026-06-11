import { useEffect, useRef, useCallback } from 'react';

export function useScrollReveal(deps: readonly unknown[] = []) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    document.documentElement.classList.add('has-scroll-reveal');

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el, i) => {
      (el as HTMLElement).style.setProperty('--reveal-delay', `${i * 70}ms`);
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  const revealRef = useCallback((node: HTMLElement | null) => {
    if (node && observerRef.current) {
      node.classList.add('reveal-on-scroll');
      observerRef.current.observe(node);
    }
  }, []);

  return { revealRef };
}
