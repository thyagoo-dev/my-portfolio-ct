# shadcn/ui Adoption Map

## Estado Atual

- Stack: Vite, React, TypeScript e Tailwind CSS 4.
- Configuracao adicionada: `components.json`, alias `@/*`, `src/lib/utils.ts`, tokens shadcn em `src/styles/global.css`.
- Componente shadcn instalado: `src/components/ui/button.tsx`.
- Componentes de marca preservados: os componentes atuais em pastas PascalCase continuam funcionando, por exemplo `src/components/ui/Button/Button.tsx`.

## Regras de Uso

- Use shadcn/ui para controles reutilizaveis, acessibilidade, estados e composicao de UI.
- Preserve componentes customizados quando eles carregam identidade visual forte, animacao autoral ou logica especifica do portfolio.
- Migre por fluxo, nao por pasta inteira: cada migracao deve ter validacao visual em desktop e mobile.
- Imports novos de shadcn devem usar `@/components/ui/<component>`.
- O `Button` atual e o `button.tsx` do shadcn coexistem. Ao migrar, trate isso explicitamente para evitar imports ambiguos.

## Prioridade 1 - Alto Retorno e Baixo Risco

| Area | Arquivos | shadcn/ui indicado | Uso recomendado |
| --- | --- | --- | --- |
| Botao base para novos fluxos | `src/components/ui/button.tsx`, `src/components/ui/Button/Button.tsx` | `button` | Usar shadcn para novos controles padrao; manter o Button atual onde houver animacao com Framer Motion e identidade visual ja validada. |
| Formulario de contato | `src/pages/Contato/Contato.tsx`, `src/pages/Contato/Contato.css` | `input`, `textarea`, `label`, `field`, `progress`, `alert` | Padronizar campos, barra de progresso e mensagem de sucesso. Bom candidato para primeira migracao real. |
| Filtros de projetos | `src/pages/Projetos/Projetos.tsx`, `src/pages/Projetos/Projetos.css` | `toggle-group`, `button`, `badge` | Trocar os botoes de filtro por `ToggleGroup` ou `Button` com `aria-pressed`. |
| Filtros de certificados | `src/pages/Certificados/Certificados.tsx`, `src/pages/Certificados/Certificados.css` | `toggle-group`, `badge`, `empty` | Padronizar filtros, contador de resultados e estado vazio. |
| Cards repetidos | `src/components/ui/ProjectCard/ProjectCard.tsx`, `src/pages/Servicos/Servicos.tsx`, `src/pages/Certificados/Certificados.tsx` | `card`, `badge`, `separator` | Migrar estrutura de container/conteudo mantendo classes de marca quando necessario. |

## Prioridade 2 - Ganho de Acessibilidade e Composicao

| Area | Arquivos | shadcn/ui indicado | Uso recomendado |
| --- | --- | --- | --- |
| Lightbox e carrossel de projetos | `src/components/ui/ProjectCarousel/ProjectCarousel.tsx` | `dialog`, `carousel`, `button`, `tooltip`, `aspect-ratio` | Substituir o modal manual por `Dialog`; avaliar `Carousel` se a dependencia adicional compensar. |
| Navbar desktop | `src/components/Layout/Navbar/Navbar.tsx` | `navigation-menu`, `button`, `tooltip` | Usar para menus futuros e controles como idioma/CV; manter layout atual enquanto a navegacao for simples. |
| Navbar mobile | `src/components/Layout/Navbar/MobileNavbar.tsx` | `button`, `tooltip`, `navigation-menu` | Melhorar estados acessiveis dos itens; `Sheet` so vale se virar menu lateral. |
| Sidebar da pagina Sobre | `src/pages/Sobre/Sobre.tsx` | `button`, `tabs`, `scroll-area`, `card` | Transformar navegacao de secoes em tabs/controle acessivel se o comportamento deixar de ser apenas scroll. |
| Projeto detalhe | `src/pages/ProjetoDetalhe/ProjetoDetalhe.tsx` | `badge`, `card`, `breadcrumb`, `separator`, `button` | Padronizar badges, cards de detalhes, back link e acoes. |

## Prioridade 3 - Polimento e Estados

| Area | Arquivos | shadcn/ui indicado | Uso recomendado |
| --- | --- | --- | --- |
| Loaders e placeholders | `src/App.tsx`, `src/components/Layout/NavigationLoader/NavigationLoader.tsx`, `src/components/Layout/FirstVisitLoader/FirstVisitLoader.tsx` | `spinner`, `skeleton`, `progress` | Usar `Spinner/Skeleton` para estados de carregamento de conteudo; manter loaders autorais de transicao se forem parte da marca. |
| Botao voltar ao topo | `src/components/Layout/BackToTop/BackToTop.tsx` | `button`, `tooltip` | Usar `Button` icon-only com tooltip. |
| Status vazio/erro | `src/pages/Projetos/Projetos.tsx`, `src/pages/Certificados/Certificados.tsx`, `src/pages/ProjetoDetalhe/ProjetoDetalhe.tsx`, `src/pages/Sobre/Sobre.tsx` | `alert`, `empty`, `button` | Padronizar mensagens de erro, vazio e fallback de GitHub stats. |
| Tags e tecnologia | `src/components/ui/ProjectCard/ProjectCard.tsx`, `src/pages/Sobre/Sobre.tsx`, `src/pages/ProjetoDetalhe/ProjetoDetalhe.tsx` | `badge`, `tooltip`, `hover-card` | Melhorar labels de stack, tecnologias e icones com tooltip/hover card. |
| Conteudo em listas | `src/pages/Servicos/Servicos.tsx`, `src/pages/Sobre/Sobre.tsx` | `card`, `separator`, `accordion` | `Accordion` apenas se houver conteudo expansivel; caso contrario `Card` e `Separator` bastam. |

## Manter Customizado

- `src/components/ui/FloatingLines/FloatingLines.tsx`: cena Three.js de marca.
- `src/components/ui/ColorBends/ColorBends.tsx`: efeito visual proprio.
- `src/components/ui/Counter/Counter.tsx`: animacao numerica com Framer Motion.
- `src/components/ui/TechIcon/TechIcon.tsx`: resolucao especifica de icones de stack.
- `src/components/ui/TechMarquee/TechMarquee.tsx`: marquee visual de tecnologias.
- `src/components/ui/Reveal/Reveal.tsx`: wrapper local de animacao.
- `src/components/ui/PageHero/PageHero.tsx`: composicao visual de topo das paginas.

## Componentes shadcn para Adicionar Quando Migrar

```bash
npx shadcn@latest add input textarea label field progress alert
npx shadcn@latest add toggle-group badge card separator empty
npx shadcn@latest add dialog tooltip aspect-ratio skeleton spinner
npx shadcn@latest add navigation-menu tabs scroll-area breadcrumb
```

## Sequencia Recomendada

1. Migrar `Contato` para `Input`, `Textarea`, `Label`, `Field`, `Progress` e `Alert`.
2. Migrar filtros de `Projetos` e `Certificados` para `ToggleGroup`.
3. Migrar `ProjectCard`, cards de servicos e cards de certificados para `Card`/`Badge`.
4. Migrar lightbox do `ProjectCarousel` para `Dialog`.
5. Avaliar navbar/sidebars depois das telas principais estarem consistentes.
