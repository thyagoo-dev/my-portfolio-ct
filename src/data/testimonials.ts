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
 * Conteúdo placeholder — substituir por feedback real de clientes.
 */
export const testimonials: Testimonial[] = [
  {
    id: 'ye-vida',
    name: 'Equipe Ye Vida',
    role: {
      pt: 'Startup de saúde',
      en: 'Health startup',
    },
    quote: {
      pt: 'Entrega consistente e comunicação clara em cada etapa. O backend ficou sólido e fácil de evoluir.',
      en: 'Consistent delivery and clear communication at every step. The backend turned out solid and easy to evolve.',
    },
    initials: 'YV',
  },
  {
    id: 'mega',
    name: 'Mega Eletrônicos',
    role: {
      pt: 'E-commerce',
      en: 'E-commerce',
    },
    quote: {
      pt: 'Resolveu um problema de integração que travava nosso fluxo há meses. Rápido, direto e sem enrolação.',
      en: 'Solved an integration problem that had been blocking our flow for months. Fast, direct and no fuss.',
    },
    initials: 'ME',
  },
  {
    id: 'freela',
    name: 'Cliente Freelance',
    role: {
      pt: 'Projeto sob demanda',
      en: 'On-demand project',
    },
    quote: {
      pt: 'Transformou uma ideia vaga em um produto no ar. Cumpriu o prazo e ainda deu suporte depois do deploy.',
      en: 'Turned a vague idea into a live product. Met the deadline and still supported it after deploy.',
    },
    initials: 'CF',
  },
];
