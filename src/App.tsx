import { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Layout/Navbar/Navbar';
import { Footer } from './components/Layout/Footer/Footer';
import { BackToTop } from './components/Layout/BackToTop/BackToTop';
import { Preloader } from './components/Layout/Preloader/Preloader';
import ScrollToTop from './components/Layout/ScrollToTop/ScrollToTop';
import { MobileNavbar } from './components/Layout/Navbar/MobileNavbar';
import { FloatingLines } from './components/ui/FloatingLines/FloatingLines';
import './App.css';

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

function TransitionManager() {
  const location = useLocation();
  const [mountKey, setMountKey] = useState(0);
  const [duration, setDuration] = useState(2000);

  useEffect(() => {
    // Determine duration: 2s for first load, 800ms for transitions
    const isFirstLoad = mountKey === 0;
    setDuration(isFirstLoad ? 2000 : 800);
    
    // Explicitly update key to force remount of Preloader
    setMountKey(prev => prev + 1);
  }, [location.pathname]);

  return <Preloader key={mountKey} duration={duration} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <TransitionManager />
      <FloatingLines />
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
