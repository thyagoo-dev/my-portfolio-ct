# Como dividir seu CSS de forma organizada

Este guia e para sair de `css/style.css` unico para uma estrutura modular, facil de manter e escalar.

## 1) Estrutura recomendada

```txt
css/
  main.css
  base/
    variables.css
    reset.css
    typography.css
    utilities.css
    animations.css
  layout/
    container.css
    navbar.css
    sections.css
    footer.css
  components/
    buttons.css
    cards.css
    project-card.css
    carousel.css
    modal.css
    tags.css
  pages/
    home.css
    galeria.css
    certificados.css
    projeto-detalhe.css
  responsive/
    tablet.css
    mobile.css
```

## 2) Arquivo de entrada (`main.css`)

Centralize a ordem da cascata em um unico arquivo:

```css
/* css/main.css */
@import url("./base/variables.css");
@import url("./base/reset.css");
@import url("./base/typography.css");
@import url("./base/utilities.css");
@import url("./base/animations.css");

@import url("./layout/container.css");
@import url("./layout/navbar.css");
@import url("./layout/sections.css");
@import url("./layout/footer.css");

@import url("./components/buttons.css");
@import url("./components/cards.css");
@import url("./components/project-card.css");
@import url("./components/carousel.css");
@import url("./components/modal.css");
@import url("./components/tags.css");

@import url("./pages/home.css");
@import url("./pages/galeria.css");
@import url("./pages/certificados.css");
@import url("./pages/projeto-detalhe.css");

@import url("./responsive/tablet.css");
@import url("./responsive/mobile.css");
```

Depois troque no HTML:

```html
<link rel="stylesheet" href="css/main.css">
```

E nas paginas internas:

```html
<link rel="stylesheet" href="../css/main.css">
```

## 3) Mapeamento do seu `style.css` atual

Use este mapeamento para extrair blocos aos poucos:

- `:root`, tema, reset global -> `base/variables.css` e `base/reset.css`
- tipografia, `body`, helpers (`.text-center`, etc) -> `base/typography.css` e `base/utilities.css`
- navbar, menu mobile -> `layout/navbar.css`
- `.container`, espacamentos de secao -> `layout/container.css` e `layout/sections.css`
- botoes (`.btn*`) -> `components/buttons.css`
- cards gerais (`.about-card`, `.service-card`, etc) -> `components/cards.css`
- projetos (`.projects-*`, `.project-card*`) -> `components/project-card.css`
- carrosseis (`.photo-carousel`, `.carousel-*`) -> `components/carousel.css`
- modal (`.modal*`) -> `components/modal.css`
- home (`#inicio`, `#sobre`, `#projetos`, `#servicos`, etc) -> `pages/home.css`
- paginas de detalhe de projeto (`.paper-section`, `.paper-box`, `.project-architecture`) -> `pages/projeto-detalhe.css`
- media queries -> `responsive/tablet.css` e `responsive/mobile.css`

## 4) Processo de migracao sem quebrar

1. Criar `css/main.css` com os imports.
2. Criar os arquivos vazios das pastas acima.
3. Copiar 1 bloco por vez de `style.css` para o arquivo correto.
4. Testar no navegador apos cada bloco.
5. So depois remover o bloco antigo de `style.css`.
6. Quando terminar tudo, arquivar/remover `style.css`.

Regra pratica: nao mover varios blocos de uma vez.

## 5) Padrao de organizacao por arquivo

Dentro de cada arquivo, mantenha esta ordem:

1. bloco base do componente
2. estados (`:hover`, `.active`, `.scrolled`, etc)
3. variacoes/modificadores
4. media queries locais (se houver)

Exemplo:

```css
.project-card { ... }
.project-card:hover { ... }
.project-card--featured { ... }
@media (max-width: 768px) { .project-card { ... } }
```

## 6) Convencoes para manter qualidade

- Evite IDs para estilo (use classes).
- Evite estilos inline no HTML.
- Nomeie classes por responsabilidade (`service-card`, `project-architecture`).
- Um arquivo por dominio visual (nao misturar navbar com carousel).
- Seletor curto e especifico (evitar cascata profunda).

## 7) Checklist final

- [ ] Todas as paginas carregam `main.css`
- [ ] Nenhum estilo critico ficou no `style.css`
- [ ] Menu mobile, carrosseis e modal funcionando
- [ ] Desktop e mobile sem regressao visual
- [ ] Sem duplicacao de regras entre arquivos

---

Se quiser, no proximo passo eu posso aplicar essa modularizacao no seu projeto ja com a primeira fase pronta (base + layout + components principais).
