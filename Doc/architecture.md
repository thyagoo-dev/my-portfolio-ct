# Arquitetura do Projeto (Architecture)

Este projeto segue uma estrutura modular e escalável, inspirada nos princípios de **Arquitetura Limpa** (Clean Architecture) e **Desenvolvimento Orientado a Componentes** (CDD).

## 📂 Estrutura de Pastas (Root)
- **`dist/`**: Pasta de distribuição (build final). Ignorada pelo Git.
- **`Doc/`**: Documentação técnica do projeto.
- **`public/`**: Ativos estáticos (imagens, PDFs, backgrounds) servidos diretamente.
- **`src/`**: Código-fonte principal da aplicação.

## 🏗️ Organização do `src/`

### 1. `components/`
Dividido em dois níveis de responsabilidade:
- **`Layout/`**: Componentes estruturais e globais (Navbar, Footer, Preloader, ScrollToTop).
- **`ui/`**: Componentes atômicos e reutilizáveis (Button, Counter, Reveal, TechIcon, Hero3D). Seguem o padrão de isolamento estético.

### 2. `pages/`
Cada página possui sua própria pasta contendo o arquivo `.tsx` e sua folha de estilo `.css` específica, garantindo que o CSS não "vaze" para outras partes do site.

### 3. `data/`
Centraliza toda a informação estática do site (listas de projetos, habilidades, textos de experiências). Isso permite atualizar o conteúdo do site sem mexer na lógica dos componentes.

### 4. `styles/`
- **`variables.css`**: Design Tokens (cores, raios, transições).
- **`global.css`**: Estilos básicos e tipografia.
- **`animations.css`**: Definições globais de animações Keyframes.

### 5. `hooks/` & `types/`
- **Hooks**: Lógica compartilhada (ex: detecção de scroll, gerenciamento de idioma).
- **Types**: Definições de interfaces TypeScript para garantir segurança em todo o projeto.

## 🎨 Padrões de Design
- **Componentes Puros**: A maioria dos componentes na pasta `ui` recebe dados via props e não tem estado global, facilitando o teste e reuso.
- **Efeito Glassmorphism**: Uso consistente de `backdrop-filter` e bordas semitransparentes para a estética premium.
- **Lazy Loading**: Imagens e componentes pesados são carregados sob demanda para otimizar o LCP (Largest Contentful Paint).
