import { useState, useEffect } from 'react';
import { Award, Filter } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { certificates, certificateCategories } from '../../data/certificates';
import { Reveal } from '../../components/ui/Reveal/Reveal';
import './Certificados.css';

export default function Certificados() {
  const [activeCategory, setActiveCategory] = useState('todos');
  useScrollReveal();

  useEffect(() => {
    document.title = 'Certificados — Victor Kauê';
  }, []);

  const filtered = activeCategory === 'todos' 
    ? certificates 
    : certificates.filter(c => c.category === activeCategory);

  return (
    <main className="page-certificados">
      <section className="content-section">
        <div className="container">
          <div className="section-header reveal-on-scroll">
            <h1 className="section-title">
              <Award size={28} />
              Certificados
            </h1>
            <p className="section-subtitle">Minhas conquistas e especializações técnicas.</p>
          </div>

          {/* FILTERS */}
          <div className="cert-filters reveal-on-scroll">
            <div className="filter-icon"><Filter size={18} /></div>
            <div className="filter-options">
              {certificateCategories.map((cat) => (
                <button
                  key={cat.id}
                  className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* GRID */}
          <div className="cert-grid">
            {filtered.map((cert) => (
              <Reveal key={cert.id} delay={0.1}>
                <div className="cert-card">
                  <div className="cert-image">
                    <img src={cert.image} alt={cert.title} loading="lazy" />
                    <div className="cert-overlay">
                      <span>Clique para ver</span>
                    </div>
                  </div>
                  <div className="cert-info">
                    <span className="cert-issuer">{cert.issuer}</span>
                    <h3 className="cert-title">{cert.title}</h3>
                    <div className="cert-badge">{cert.category}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="no-results">
              <p>Nenhum certificado encontrado para esta categoria.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
