import { lazy, Suspense, type CSSProperties } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Layout/Navbar/Navbar';
import { Footer } from './components/Layout/Footer/Footer';
import { BackToTop } from './components/Layout/BackToTop/BackToTop';
import ScrollToTop from './components/Layout/ScrollToTop/ScrollToTop';
import { MobileNavbar } from './components/Layout/Navbar/MobileNavbar';
import { FirstVisitLoader } from './components/Layout/FirstVisitLoader/FirstVisitLoader';
import { NavigationLoader } from './components/Layout/NavigationLoader/NavigationLoader';
import './App.css';

const Home = lazy(() => import('./pages/Home/Home'));
const Sobre = lazy(() => import('./pages/Sobre/Sobre'));
const Projetos = lazy(() => import('./pages/Projetos/Projetos'));
const ProjetoDetalhe = lazy(() => import('./pages/ProjetoDetalhe/ProjetoDetalhe'));
const Servicos = lazy(() => import('./pages/Servicos/Servicos'));
const Certificados = lazy(() => import('./pages/Certificados/Certificados'));
const Contato = lazy(() => import('./pages/Contato/Contato'));
const NaoEncontrado = lazy(() => import('./pages/NaoEncontrado/NaoEncontrado'));

// Accent (cor) do loader por rota — arc muda de cor conforme a página.
const ROUTE_ACCENTS: Record<string, string> = {
  '/': '#ff7a00',            // Home — laranja da marca
  '/sobre': '#4f9dff',       // Sobre — azul
  '/projetos': '#a06bff',    // Projetos — roxo
  '/servicos': '#22c39a',    // Serviços — verde/teal
  '/certificados': '#ffb020',// Certificados — âmbar
  '/contato': '#ff5a7a',     // Contato — rosa
};

function accentFor(pathname: string): string {
  const seg = pathname === '/' ? '/' : '/' + pathname.split('/')[1];
  return ROUTE_ACCENTS[seg] ?? '#ff7a00';
}

function PageLoader({ accent }: { accent: string }) {
  return (
    <div className="page-loader-wrapper" aria-hidden="true">
      <div
        className="nav-loader-arc"
        style={{ '--loader-accent': accent } as CSSProperties}
      />
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();
  const accent = accentFor(location.pathname);

  return (
    <>
      <NavigationLoader />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className="page-motion-wrapper"
        >
          <Suspense fallback={<PageLoader accent={accent} />}>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/projetos" element={<Projetos />} />
              <Route path="/projetos/:id" element={<ProjetoDetalhe />} />
              <Route path="/servicos" element={<Servicos />} />
              <Route path="/certificados" element={<Certificados />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="*" element={<NaoEncontrado />} />
            </Routes>
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <FirstVisitLoader />
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />
      <MobileNavbar />
      <BackToTop />
    </BrowserRouter>
  );
}
