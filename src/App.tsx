import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Layout/Navbar/Navbar';
import { Footer } from './components/Layout/Footer/Footer';
import { BackToTop } from './components/Layout/BackToTop/BackToTop';
import ScrollToTop from './components/Layout/ScrollToTop/ScrollToTop';
import { MobileNavbar } from './components/Layout/Navbar/MobileNavbar';
import { FirstVisitLoader } from './components/Layout/FirstVisitLoader/FirstVisitLoader';
import './App.css';

const FloatingLines = lazy(() =>
  import('./components/ui/FloatingLines/FloatingLines').then(m => ({ default: m.FloatingLines }))
);

const Home = lazy(() => import('./pages/Home/Home'));
const Sobre = lazy(() => import('./pages/Sobre/Sobre'));
const Projetos = lazy(() => import('./pages/Projetos/Projetos'));
const ProjetoDetalhe = lazy(() => import('./pages/ProjetoDetalhe/ProjetoDetalhe'));
const Servicos = lazy(() => import('./pages/Servicos/Servicos'));

const Certificados = lazy(() => import('./pages/Certificados/Certificados'));
const Contato = lazy(() => import('./pages/Contato/Contato'));

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
      <ScrollToTop />
      <Suspense fallback={null}>
        <FloatingLines />
      </Suspense>
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/projetos/:id" element={<ProjetoDetalhe />} />
          <Route path="/servicos" element={<Servicos />} />

          <Route path="/certificados" element={<Certificados />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Suspense>
      <Footer />
      <MobileNavbar />
      <BackToTop />
    </BrowserRouter>
  );
}
