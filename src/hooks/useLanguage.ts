import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export type Language = 'pt' | 'en';

const STORAGE_KEY = 'portfolio-lang';

function normalizeLanguage(value: string | undefined): Language {
  return value?.toLowerCase().startsWith('en') ? 'en' : 'pt';
}

export function useLanguage() {
  const { i18n } = useTranslation();

  const lang = useMemo(() => normalizeLanguage(i18n.resolvedLanguage || i18n.language), [i18n.language, i18n.resolvedLanguage]);

  const setLanguage = useCallback(
    async (next: Language) => {
      if (next === lang) return;
      await i18n.changeLanguage(next);
      localStorage.setItem(STORAGE_KEY, next);
    },
    [i18n, lang]
  );

  const toggleLanguage = useCallback(async () => {
    const next: Language = lang === 'pt' ? 'en' : 'pt';
    await i18n.changeLanguage(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, [i18n, lang]);

  return { lang, setLanguage, toggleLanguage };
}
