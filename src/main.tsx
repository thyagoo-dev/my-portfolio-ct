import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './i18n';
import '@fontsource-variable/syne';
import '@fontsource-variable/dm-sans';
import '@fontsource/orbitron/800.css';
import 'devicon/devicon.min.css';
import './styles/variables.css';
import './styles/reset.css';
import './styles/global.css';
import './styles/animations.css';

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
