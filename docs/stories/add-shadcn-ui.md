# Story UI-001: Integrar shadcn/ui ao portfolio

## Status

Ready for Review

## User Story

Como mantenedor do portfolio, quero o shadcn/ui configurado no projeto Vite + React + Tailwind para reutilizar componentes acessiveis e mapeados sem substituir a identidade visual atual de uma vez.

## Acceptance Criteria

- [x] O projeto deve ter a configuracao base do shadcn/ui para Vite, TypeScript e Tailwind 4.
- [x] O alias `@/*` deve funcionar no TypeScript e no Vite.
- [x] Deve existir um helper `cn` em `src/lib/utils.ts`.
- [x] Os tokens shadcn devem apontar para a paleta escura/laranja existente.
- [x] Deve existir um mapa documentando telas/componentes candidatos ao shadcn/ui.
- [x] As validacoes disponiveis do projeto devem ser executadas ou registradas como indisponiveis.

## Tasks

- [x] Instalar dependencias base do shadcn/ui.
- [x] Criar `components.json`.
- [x] Configurar aliases de importacao.
- [x] Configurar estilos globais do shadcn/ui.
- [x] Criar mapa de adocao por componente/tela.
- [x] Rodar quality gates disponiveis.

## Dev Notes

- Fonte de orientacao: documentacao oficial do shadcn/ui para Vite e instalacao manual.
- Escopo desta story: infraestrutura e mapeamento. Migracoes visuais devem ser feitas em stories separadas para evitar regressao de layout.
- O portfolio ja possui componentes de marca em `src/components/ui`; a integracao deve conviver com eles.
- O componente shadcn instalado nesta story foi `button`, disponivel em `@/components/ui/button`.

## Validation

- `npm run build`: passou.
- `npx shadcn@latest info`: passou; reconheceu Vite, Tailwind v4, alias `@` e componente `button`.
- `npm run lint`: indisponivel; script `lint` nao existe em `package.json`.
- `npm run typecheck`: indisponivel; script `typecheck` nao existe em `package.json`.
- `npm test`: indisponivel; script `test` nao existe em `package.json`.

## File List

- `docs/stories/add-shadcn-ui.md`
- `docs/architecture/shadcn-ui-map.md`
- `components.json`
- `package.json`
- `package-lock.json`
- `src/components/ui/button.tsx`
- `src/lib/utils.ts`
- `src/styles/global.css`
- `tsconfig.json`
- `tsconfig.app.json`
- `vite.config.ts`
