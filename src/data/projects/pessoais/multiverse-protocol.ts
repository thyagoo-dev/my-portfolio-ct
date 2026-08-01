import type { Project } from '../../../types';

export const multiverseProtocol: Project = {
  id: 'multiverse-protocol',
  slug: 'multiverse-protocol',
  title: 'Multiverse Protocol',
  shortDescription: 'Contratos inteligentes Web3 com ERC-20, ERC-721, Staking e DAO na Sepolia.',
  detailedDescription:
    'O Multiverse Protocol é um ecossistema descentralizado de jogos e coleções digitais. A solução permite que os jogadores possuam NFTs únicos que representam personagens ou itens raros, depositem esses NFTs em staking para ganhar recompensas em tokens MVT e participem da governança do protocolo votando em propostas. Este projeto foi desenvolvido como parte do programa Residência em TIC 29 (Web 3.0).',
  description:
    'Ecossistema Web3 completo composto por 4 contratos inteligentes interligados. Jogadores possuem NFTs, fazem staking integrado com oráculos da Chainlink para recompensas dinâmicas e participam da governança descentralizada através de uma DAO.',
  image: '/images/fotos-projetos-pessoais/multiverse-protocol/capa.webp',
  github: 'https://github.com/thyagoo-dev/multiverse-protocol',
  detailPath: '/projetos/multiverse-protocol',
  technologies: ['Solidity', 'JavaScript', 'TypeScript', 'Blockchain'],
  stack: ['Solidity', 'Hardhat', 'Ethers.js', 'OpenZeppelin', 'Chainlink'],
  features: ['Minting de NFTs (ERC-721)', 'Staking dinâmico', 'Governança (DAO)', 'Oráculos Chainlink'],
  category: 'pessoal',
  summary: {
    problema: 'Falta de interação dinâmica e sistemas de governança robustos em jogos baseados em blockchain.',
    solucao: 'Desenvolvimento de uma arquitetura modular de contratos inteligentes interligados (Tokens, NFTs, Staking e DAO).',
    stack: 'Solidity, Hardhat e Ethers.js',
  },
  detailed_info: {
    desafio: 'Garantir a segurança dos ativos no staking e integrar dados do mundo real de forma confiável usando oráculos.',
    solucao: 'Implementação de padrões de segurança da OpenZeppelin (ReentrancyGuard, Ownable) e uso do Price Feed da Chainlink para ajustar recompensas baseadas no preço do ETH/USD.',
    impacto: 'Criação de um ecossistema seguro e descentralizado implantado com sucesso na testnet Sepolia como entrega do programa Residência em TIC 29.',
    arquitetura: {
      frontend: 'Script de simulação (ethers.js)',
      api: 'Contratos Inteligentes (EVM)',
      banco: 'Blockchain (Ethereum Testnet)',
    },
    decisoes: {
      autenticacao: 'Wallets Web3 (Chaves Criptográficas)',
      backend: 'Solidity 0.8.28 (Target: Cancun)',
      deploy: 'Ethereum Sepolia Testnet',
      banco: 'Ledger distribuído imutável',
    },
    tech_v2: [
      { name: 'Solidity', icon: 'devicon-solidity-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    ],
  },
  screenshots: [
    '/images/fotos-projetos-pessoais/multiverse-protocol/capa.webp',
    '/images/fotos-projetos-pessoais/multiverse-protocol/1.webp',
  ],
};