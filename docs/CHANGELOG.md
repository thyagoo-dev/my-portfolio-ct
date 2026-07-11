# CHANGELOG

Histórico de mudanças por versão. Formato baseado em
[Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/); versionamento
[SemVer](https://semver.org/lang/pt-BR/). Mais recente no topo.

Tipos: **Adicionado**, **Alterado**, **Corrigido**, **Removido**.

---

## [Não lançado]

### Adicionado
- Documentação padrão do projeto: `PROJECT_CONTEXT.md`, `CLAUDE.md` (raiz) e
  `docs/` com `PRD`, `ARCHITECTURE`, `API`, `DATABASE`, `DEPLOY`,
  `ENVIRONMENT`, `DECISIONS` e `CHANGELOG`.
- Índice de documentação no `README.md`.

## [2.0.0] — 2026

Versão atual do `package.json`. Reescrita do portfólio como SPA moderna.

### Adicionado
- SPA em React 19 + TypeScript + Vite 6 com roteamento (react-router-dom 7) e
  lazy loading por rota.
- Páginas: Home, Sobre, Projetos, Detalhe de Projeto, Serviços, Certificados,
  Contato.
- Internacionalização PT/EN (i18next) com persistência em `localStorage`.
- Animações com framer-motion e elementos 3D (three / @react-three/fiber).
- Conteúdo tipado em `src/data/` (projetos pessoais e profissionais,
  experiências, formação, certificados, serviços, links sociais).
- Formulário de contato via deep-link de WhatsApp.
- Script `projects:enrich` para enriquecer projetos a partir de READMEs do GitHub.
- SEO básico com Open Graph e Twitter Card; tema dark premium com design tokens.
- Deploy estático na Vercel.

---

## Como manter

A cada release, criar uma seção `## [X.Y.Z] — AAAA-MM-DD` acima da anterior,
mover os itens de **[Não lançado]** para ela e alinhar a versão do
`package.json`. Agrupar por tipo de mudança.

> Entradas anteriores à v2.0.0 não foram registradas neste changelog.
