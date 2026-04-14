# 🚀 Victor Kauê — Portfolio Pro Max

> Portfólio de alta performance com estética **Cyber-Editorial**, desenvolvido para destacar competências em engenharia de software e design de interfaces premium.

![React 19](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

## 💎 Visão Geral (The Pro Max Experience)

Este projeto não é apenas um site pessoal, mas uma demonstração técnica de arquitetura moderna. Migrado de uma estrutura estática para um ecossistema **React 19 + TypeScript**, o portfólio foca em:

- **Performance Extrema**: Build ultrarrapido via Vite.
- **Estética Editorial**: Tipografia pesada (`Syne`), grid brutalista e glassmorphism refinado.
- **Experiência Fluida**: Micro-interações baseadas em scroll e transições de estado inteligentes.

---

## ✨ Funcionalidades Core

### 1. Morphing Navbar
Uma navegação inteligente que transiciona de largura total (intro) para um formato de **Pílula Flutuante** ao rolar a página, utilizando curvas de transição `cubic-bezier` para um feedback orgânico.

### 2. ColorBends Dynamic Background
Um sistema de fundo de baixa latência que utiliza **fractal noise SVG** e gradientes radiais animados, criando profundidade visual sem o overhead de bibliotecas 3D pesadas.

### 3. Responsive Snap Carousel
O catálogo de projetos utiliza um sistema de **Snap Alignment** nativo para mobile, garantindo que a navegação por gestos seja fluida e que os cards estejam sempre perfeitamente centrados.

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia | Benefício |
| --- | --- | --- |
| **Núcleo** | React 19 | Hooks modernos e renderização otimizada. |
| **Tipagem** | TypeScript | Robustez, Intellisense e segurança no código. |
| **Estilização** | Tailwind CSS v4 | CSS-first config, utilitários rápidos e variáveis de tema nativas. |
| **Animações** | Framer Motion | Revelações on-scroll e orquestração de micro-animações. |
| **Ícones** | Lucide / Bootstrap | Iconografia consistente e semântica. |

---

## 🏗️ Estrutura do Projeto

```text
meu_portifolio/
├── src/
│   ├── components/
│   │   ├── layout/      # Navbar, Footer, Preloader
│   │   └── ui/          # Elementos reutilizáveis (Botões, Cards)
│   ├── data/            # JSONs de conteúdo (Projetos, Formação)
│   ├── hooks/           # Lógica de Scroll e Interação
│   ├── pages/           # Home, Sobre, Projetos, etc.
│   └── styles/          # Tokens, Variáveis e CSS Global
├── public/              # Assets estáticos (Imagens, PDFs)
├── vite.config.ts       # Configuração do Pipeline
└── tailwind.config.js   # (Integrado via @tailwindcss/vite)
```

---

## 🚀 Como Rodar Localmente

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.

```bash
# 1. Clone o repositório
git clone https://github.com/Victorkaue333/Portifolio-VictorKaue.git

# 2. Entre na pasta
cd Portifolio-VictorKaue

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:3000`.

---

## 🎨 Identidade Visual

- **Primary**: Midnight Indigo (`#0B1220`)
- **Accent**: Electric Amber (`#F59E0B`)
- **Surface**: Glassmorphism (Blur 24px)
- **Typo Primary**: Syne (Bold/ExtraBold)
- **Typo Secondary**: DM Sans (Regular/Medium)

---

👨‍💻 Desenvolvido com foco em excelência técnica por **Victor Kauê**.