import type { Language } from '../hooks/useLanguage';

export interface Testimonial {
  id: string;
  name: string;
  role: Record<Language, string>;
  quote: Record<Language, string>;
  /** Iniciais para o avatar quando não há foto. */
  initials: string;
}

/**
 * Depoimentos exibidos na página de Serviços.
 * Atualmente vazio pois não há projetos de clientes finalizados.
 * O componente de UI deve ocultar a seção de depoimentos caso este array esteja vazio.
 */
export const testimonials: Testimonial[] = [];