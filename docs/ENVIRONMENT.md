# ENVIRONMENT

Configuração de ambiente. Espelha o `.env.example`. **Nunca contém segredos reais.**

## Resumo

**O aplicativo não usa variáveis de ambiente em runtime.** Não há nenhuma
referência a `import.meta.env.VITE_*` no código-fonte — todo o conteúdo é
estático e compilado no bundle. Para rodar, buildar e publicar o portfólio,
**nenhuma variável precisa ser configurada.**

## Variáveis do aplicativo

| Nome | Descrição | Obrigatória | Onde obter |
| --- | --- | --- | --- |
| — | O app não consome variáveis de ambiente. | Não | — |

Valores hoje "configuráveis" estão hard-coded como constantes de código, não como env:

| Constante | Local | Valor |
| --- | --- | --- |
| Telefone do WhatsApp | `src/pages/Contato/Contato.tsx` | `5588988723523` |
| Perfil GitHub padrão | `src/data/projects.ts` | `https://github.com/thyagoo-dev` |
| Porta do dev server | `vite.config.ts` | `3000` |

Se no futuro algum valor precisar variar por ambiente, expor via
`import.meta.env.VITE_*` (Vite só injeta variáveis com prefixo `VITE_`) e
documentar aqui.

## ⚠️ Sobre os arquivos `.env` / `.env.example` atuais

Os arquivos `.env` e `.env.example` presentes na raiz **não pertencem a este
projeto**. São resíduos do instalador "Synkra AIOX" (chaves de LLM, Supabase,
Railway, etc.) e **não são lidos pelo app**. O `.gitignore` já ignora `.env`
(o segredo não é commitado), mas o `.env.example` versionado é enganoso.

**Recomendação:** substituir o conteúdo do `.env.example` por um placeholder
honesto deste projeto, por exemplo:

```dotenv
# Este projeto é uma SPA estática e não requer variáveis de ambiente.
# Adicione variáveis VITE_* aqui apenas se/quando o código passar a consumi-las.
# Ex.:
# VITE_WHATSAPP_PHONE=5587981774951
```

> Não removi/reescrevi esses arquivos automaticamente para não alterar
> configuração de tooling externo sem sua confirmação. Decisão registrada em
> [DECISIONS.md](DECISIONS.md) (ADR-0002).

## Regras

- Segredos reais **nunca** vão para o repositório nem para arquivos de dados
  (`src/data/*`), pois o bundle é público.
- `VITE_*` são embutidas no build → tratar como **públicas**, jamais colocar
  chave sensível ali.
- Configuração de deploy (build/output) fica na Vercel, não em env do app. Ver
  [DEPLOY.md](DEPLOY.md).
