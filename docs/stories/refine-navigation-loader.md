# Story UI-002: Refinar loader entre paginas

## Status

Ready for Review

## User Story

Como visitante do portfolio, quero que a transicao entre paginas seja discreta e fluida para que a navegacao nao pareca uma tela de carregamento pesada.

## Acceptance Criteria

- [x] O loader entre rotas nao deve ocupar a tela inteira.
- [x] A transicao deve preservar a animacao de pagina existente.
- [x] O indicador de navegacao deve ser visualmente alinhado ao tema escuro/laranja.
- [x] A animacao deve respeitar `prefers-reduced-motion`.
- [x] As validacoes disponiveis devem ser executadas ou registradas.

## Tasks

- [x] Substituir cortina fullscreen por indicador superior discreto.
- [x] Ajustar CSS do loader para nao bloquear interacao.
- [x] Validar build.
- [x] Atualizar File List e status.

## Dev Notes

- O problema relatado esta em `src/components/Layout/NavigationLoader/NavigationLoader.tsx`.
- O app ja usa `AnimatePresence` e `motion.div` em `src/App.tsx` para transicao de pagina.
- Escopo: ajuste visual/comportamental do loader entre rotas, sem alterar rotas ou conteudo das paginas.

## Validation

- `npm run build`: passou.
- `npm run lint`: indisponivel; script `lint` nao existe em `package.json`.
- `npm run typecheck`: indisponivel; script `typecheck` nao existe em `package.json`.
- `npm test`: indisponivel; script `test` nao existe em `package.json`.

## File List

- `docs/stories/refine-navigation-loader.md`
- `src/components/Layout/NavigationLoader/NavigationLoader.tsx`
- `src/components/Layout/NavigationLoader/NavigationLoader.css`
