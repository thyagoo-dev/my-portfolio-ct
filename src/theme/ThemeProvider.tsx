import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'portfolio-theme';

interface ThemeContextValue {
  theme: Theme;
  setTheme: (next: Theme, origin?: HTMLElement | null) => void;
  toggleTheme: (origin?: HTMLElement | null) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readStored(): Theme {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === 'light' || v === 'dark') return v;
  } catch {
    /* storage bloqueado */
  }
  return 'dark'; // padrão do site é dark
}

function applyThemeClass(theme: Theme) {
  document.documentElement.classList.toggle('light', theme === 'light');
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(readStored);

  // Garante que a classe reflita o estado no mount (o script inline no index.html
  // já aplica antes da 1ª pintura para evitar flash).
  useEffect(() => {
    applyThemeClass(theme);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const setTheme = useCallback((next: Theme, origin?: HTMLElement | null) => {
    const apply = () => {
      applyThemeClass(next);
      setThemeState(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignora */
      }
    };

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => { ready: Promise<void>; finished: Promise<void> };
    };

    // Sem View Transitions API ou reduced-motion → troca direta
    if (typeof doc.startViewTransition !== 'function' || reduce) {
      apply();
      return;
    }

    // Origem do círculo = centro do botão que disparou
    const rect = origin?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const y = rect ? rect.top + rect.height / 2 : 0;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    // Remove camadas pesadas (grão 400%×400%) do snapshot → evita travar
    const root = document.documentElement;
    root.classList.add('vt-active');

    // Chamar como método de `doc` mantém o `this` (evita "Illegal invocation")
    const transition = doc.startViewTransition(apply);

    transition.finished.finally(() => root.classList.remove('vt-active'));

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 500,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
          pseudoElement: '::view-transition-new(root)',
        },
      );
    });
  }, []);

  const toggleTheme = useCallback(
    (origin?: HTMLElement | null) => setTheme(theme === 'dark' ? 'light' : 'dark', origin),
    [theme, setTheme],
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme deve ser usado dentro de <ThemeProvider>');
  return ctx;
}
