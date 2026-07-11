# ARCHITECTURE

Arquitetura e decisões estruturais. Decisões detalhadas em [DECISIONS.md](DECISIONS.md).

## Visão geral

Aplicação **front-end estática (SPA)**, sem backend. Todo o conteúdo é
compilado a partir de dados TypeScript versionados no repositório e servido
como arquivos estáticos pela Vercel. Não há chamadas de API em runtime nem
banco de dados.

## Diagrama de componentes

```
┌──────────────────────────────────────────────────────────────┐
│                        Navegador (cliente)                     │
│                                                                │
│   index.html ──▶ main.tsx ──▶ App.tsx (BrowserRouter)          │
│                                   │                            │
│        ┌──────────────────────────┼───────────────────────┐   │
│        │ Layout persistente        │  Rotas (lazy)          │   │
│        │ Navbar / Footer /         │  /          Home       │   │
│        │ MobileNavbar / BackToTop  │  /sobre     Sobre      │   │
│        │ FloatingLines (3D)        │  /projetos  Projetos   │   │
│        │ Loaders / ScrollToTop     │  /projetos/:id Detalhe │   │
│        └──────────────────────────┤  /servicos  Servicos   │   │
│                                    │  /certificados         │   │
│   i18next (PT/EN) ◀── localStorage │  /contato   Contato    │   │
│                                    └───────────────────────┘   │
│                                                                │
│   Fonte de dados: src/data/*.ts  (import estático, bundled)    │
└───────────────┬────────────────────────────────┬──────────────┘
                │ deep-link                       │ links externos
                ▼                                 ▼
          WhatsApp (wa.me)              GitHub / LinkedIn / CDN devicon
```

Integração externa **em build-time** (não runtime):

```
scripts/enrich-projects.mjs ──▶ raw.githubusercontent.com (READMEs)
                            └──▶ src/data/projects.enrichment.json
```

## Camadas e responsabilidades

### Apresentação (`src/pages/`, `src/components/`)
- `pages/` — uma pasta por rota; cada página monta seções e consome dados.
- `components/Layout/` — chrome persistente (Navbar, Footer, loaders, scroll).
- `components/ui/` — blocos reutilizáveis (Button, PageHero, ProjectCard,
  ProjectCarousel, TechMarquee, Counter, 3D: Hero3D/FloatingLines).
- Estilo: Tailwind 4 + CSS por componente + tokens em `styles/variables.css`.

### Estado / infraestrutura de cliente
- Roteamento SPA com `react-router-dom` (lazy loading + `Suspense` por rota).
- i18n com `i18next` + `react-i18next`; idioma persiste em `localStorage`
  (`portfolio-lang`).
- Animações com `framer-motion` (transições de página em `AnimatePresence`).
- Hooks locais em `src/hooks/` (ex.: `useScrollPosition`, `useLanguage`).

### Dados (`src/data/`)
- Conteúdo como módulos TypeScript tipados (não há fetch em runtime).
- `projects.ts` agrega arquivos de `projects/pessoais/` e
  `projects/profissionais/`, normaliza e exporta `projects` e `featuredProjects`.
- Demais: `experiences.ts`, `education.ts`, `expertise.ts`, `services.ts`,
  `social.ts`, `certificates.ts`.
- Contratos em `src/types/index.ts`.

### Infraestrutura
- Build: Vite 6 (`tsc -b` + `vite build`), code-splitting por rota e
  `manualChunks` para vendors (react, motion, i18n, icons).
- Deploy: Vercel (estático). Ver [DEPLOY.md](DEPLOY.md).

## Integrações externas

| Integração | Momento | Uso |
| --- | --- | --- |
| WhatsApp `wa.me` | Runtime | Deep-link do formulário de contato. |
| GitHub / LinkedIn / e-mail | Runtime | Links sociais e repositórios. |
| CDN devicon (jsdelivr) | Runtime | Ícones de tecnologias (README e UI). |
| `raw.githubusercontent.com` | Build-time | Enriquecimento de projetos (script opcional). |

## Decisões-chave

- **Sem backend**: portfólio é conteúdo estático → menor custo, superfície de
  ataque mínima, deploy trivial.
- **Conteúdo como código**: dados em `.ts` versionados dão type-safety e
  histórico via git, ao custo de exigir redeploy para editar conteúdo.
- **Contato via WhatsApp**: evita servidor de e-mail/anti-spam; canal direto.
- **SPA + lazy routes**: navegação fluida com bundle inicial enxuto.

Justificativas completas em [DECISIONS.md](DECISIONS.md).
