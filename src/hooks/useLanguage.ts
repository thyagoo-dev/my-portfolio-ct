import { useState, useCallback } from 'react';

type Language = 'pt' | 'en';

export function useLanguage() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-lang');
    return (saved === 'en' ? 'en' : 'pt') as Language;
  });

  const toggleLanguage = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'pt' ? 'en' : 'pt';
      localStorage.setItem('portfolio-lang', next);
      return next;
    });
  }, []);

  return { lang, toggleLanguage };
}
