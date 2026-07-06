# Story UI-003: Remover recorte visual dos elementos revelados

## Status

Ready for Review

## User Story

Como visitante do portfolio, quero que botoes, cards, sombras e elementos animados nao parecam presos dentro de uma caixa invisivel para que as telas fiquem mais naturais e polidas.

## Acceptance Criteria

- [x] Elementos renderizados pelo wrapper `Reveal` nao devem ter sombras, bordas ou hover visualmente recortados por um retangulo invisivel.
- [x] A animacao de entrada deve continuar funcionando.
- [x] A mudanca deve ser aplicada de forma centralizada para corrigir as telas afetadas sem refatorar componentes de conteudo.
- [x] As validacoes disponiveis devem ser executadas ou registradas.

## Tasks

- [x] Ajustar o wrapper `Reveal` para nao aplicar clipping visual por padrao.
- [x] Validar build.
- [x] Atualizar File List e status.

## Dev Notes

- Causa provavel: `src/components/ui/Reveal/Reveal.tsx` usa `overflow: hidden` no wrapper de animacao.
- Esse wrapper envolve botoes sociais, cards de diferenciais, cards de projetos e outros blocos em varias telas.

## Validation

- `npm run build`: passou.
- `npm run lint`: indisponivel; script `lint` nao existe em `package.json`.
- `npm run typecheck`: indisponivel; script `typecheck` nao existe em `package.json`.
- `npm test`: indisponivel; script `test` nao existe em `package.json`.

## File List

- `docs/stories/fix-reveal-clipping.md`
- `src/components/ui/Reveal/Reveal.tsx`
