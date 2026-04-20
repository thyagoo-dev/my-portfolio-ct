# Elementos 3D (3D Elements):

Este portfólio utiliza uma camada visual 3D de alta performance para criar uma atmosfera imersiva sem comprometer o carregamento da página.

## 🛠️ Tecnologias Utilizadas:

- **Three.js**: A engine base para renderização.
- **React Three Fiber (R3F)**: Ponte declarativa entre React e Three.js.
- **@react-three/drei**: Facilitadores para geometrias complexas e efeitos de material.

## 🌌 Implementação Principal (`Hero3D`)

### 1. Sistema de Partículas (`ParticleField`):

- **Configuração**: 3000 pontos gerados em coordenadas esféricas.
- **Material**: `PointMaterial` com `AdditiveBlending` para um efeito de brilho suave e cor âmbar (`#f59e0b`).
- **Animação**: Rotação contínua nos eixos X e Y controlada via `useFrame` para garantir suavidade (60 FPS).

### 2. Geometria Orgânica (`OrganicSphere`):

- **Geometria**: `SphereGeometry`.
- **Material**: `MeshDistortMaterial`.
- **Efeito**: Distorção dinâmica que cria um aspecto "fluido" e moderno, representando a adaptabilidade no desenvolvimento.

### 3. Formas Flutuantes (`FloatingShapes`):

- Composto por geometrias de octaedro e toros flutuando em posições aleatórias.
- Utiliza o helper `Float` do Drei para simular levitação natural com variação de intensidade e rotação.

## 🚀 Performance e Otimização:

Para garantir que o 3D não prejudique a experiência do usuário:

- **Z-Index**: O canvas 3D está em uma camada inferior (`zIndex: 0`) para não interferir na interatividade do texto.
- **Luzes Controladas**: Uso limitado de `AmbientLight` e `PointLight` para reduzir o cálculo de sombras.
- **Opacidade**: O container 3D tem opacidade reduzida (`0.6`) para garantir a legibilidade do conteúdo sobreposto.
- **Pointer Events**: `pointer-events: none` aplicado ao container para evitar que o Canvas roube cliques ou interações do mouse destinadas aos botões de CTA.