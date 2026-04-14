import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import { BackToTop } from './components/Layout/BackToTop';
import { Preloader } from './components/Layout/Preloader';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const Sobre = lazy(() => import('./pages/Sobre'));
const Projetos = lazy(() => import('./pages/Projetos'));
const ProjetoDetalhe = lazy(() => import('./pages/ProjetoDetalhe'));
const Servicos = lazy(() => import('./pages/Servicos'));
const Galeria = lazy(() => import('./pages/Galeria'));
const Certificados = lazy(() => import('./pages/Certificados'));
const Contato = lazy(() => import('./pages/Contato'));

function PageLoader() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
    }}>
      <div style={{
        width: '36px',
        height: '36px',
        border: '3px solid rgba(245, 158, 11, 0.2)',
        borderTopColor: '#F59E0B',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Preloader />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/projetos/:id" element={<ProjetoDetalhe />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/certificados" element={<Certificados />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Suspense>
      <Footer />
      <BackToTop />
    </BrowserRouter>
  );
}
