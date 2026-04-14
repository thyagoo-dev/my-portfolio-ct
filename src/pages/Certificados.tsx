import { useEffect } from 'react';
import { Award } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Certificados() {
  useScrollReveal();
  useEffect(() => { document.title = 'Certificados — Victor Kauê'; }, []);

  return (
    <main style={{ paddingTop: '8rem' }}>
      <section className="content-section">
        <div className="container">
          <h1 className="section-title"><Award size={28} /> Certificados</h1>
          <p className="section-subtitle">Certificações e cursos concluídos ao longo da minha jornada.</p>
          <p className="text-center" style={{ color: 'var(--text-muted-color)', marginTop: '3rem' }}>
            Em breve — os certificados serão listados aqui com filtros por categoria.
          </p>
        </div>
      </section>
    </main>
  );
}
