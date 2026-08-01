# DEPLOY

Processo de publicação. O projeto é estático (SPA) e é hospedado na **Vercel**.

## Ambientes

| Ambiente | Origem | URL |
| --- | --- | --- |
| Produção | branch `online` (deploy Vercel) | https://cicero-thyago.vercel.app/ |
| Preview | qualquer branch / PR | URL de preview gerada pela Vercel |
| Local | `npm run dev` | http://localhost:3000 |

> Branch principal deste repositório para produção: `online`. Ajuste na Vercel
> se a convenção mudar.

## Pipeline

Deploy contínuo via integração GitHub ↔ Vercel:

```
git push (online) ──▶ Vercel detecta ──▶ npm install ──▶ npm run build ──▶ publica dist/
```

- **Build command:** `npm run build` (`tsc -b && vite build`)
- **Output directory:** `dist`
- **Install command:** `npm install`
- **Node:** compatível com Vite 6 (Node 18+; preferir LTS atual).

## Passo a passo — deploy

1. Garantir build local limpo: `npm run build` (sem erros de tipo).
2. (Opcional) `npm run preview` e validar visualmente.
3. Commit seguindo Conventional Commits.
4. Push para `online` → Vercel faz build e publica automaticamente.
5. Conferir a URL de produção e o log de build na Vercel.

Deploy manual alternativo (Vercel CLI): `vercel` (preview) / `vercel --prod`.

## Roteamento SPA — rewrite obrigatório

O app usa `BrowserRouter`. Sem rewrite, acessar/atualizar rotas profundas
(ex.: `/projetos/agendeaqui`) retorna 404. Garantir que todas as rotas caiam no
`index.html`. Se necessário, criar `vercel.json` na raiz:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

> Hoje não há `vercel.json` no repositório — a Vercel aplica o fallback de SPA
> automaticamente em projetos Vite. Adicione o arquivo acima se observar 404 em
> rotas diretas.

## Rollback

1. **Via dashboard Vercel:** Deployments → selecionar um deploy anterior estável
   → **Promote to Production** (rollback instantâneo, sem rebuild).
2. **Via git:** reverter o commit problemático (`git revert <sha>`) e push para
   `online` → novo build limpo.

Preferir "Promote" para restauração imediata; usar `git revert` para corrigir a
história de forma definitiva.

## Checklist pós-deploy

- [ ] Home carrega e transições funcionam.
- [ ] Rota direta de detalhe de projeto abre sem 404.
- [ ] Toggle PT/EN persiste após reload.
- [ ] Formulário de contato abre o WhatsApp.
- [ ] Download do CV e PDFs de certificados acessíveis.
- [ ] Sem erros no console; Lighthouse dentro do alvo (≥ 90).

## Padrão

Segue o DEPLOY_STANDARD do time: build reprodutível, deploy automático por push,
rollback por promoção de deploy anterior, e verificação por checklist.
