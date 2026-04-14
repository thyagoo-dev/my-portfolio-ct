# Comandos Frequentes do Projeto

Aqui estão os principais comandos utilizados no terminal para rodar, testar e compilar o seu portfólio (React 19 + TypeScript + Vite):

### Inicialização e Dependências
```bash
# Instala as dependências do projeto (execute sempre que baixar algo novo)
npm install
```

### Ambiente de Desenvolvimento
```bash
# Inicia o servidor local de desenvolvimento (exposto para a rede se quiser testar no celular)
npx vite --host
```

### Verificação de Tipos (TypeScript)
```bash
# Checa se o código não tem erros no TypeScript (bom rodar antes do build para confirmar que não vai quebrar)
npx tsc -b
```

### Build para Produção
```bash
# Gera os arquivos otimizados e minificados para deploy (ex: Vercel) na pasta /dist
npx vite build
```

---
*Este arquivo serve como um cheat sheet rápido. Pode deixá-lo aqui na raiz sempre que precisar consultar!*
