import { useState, useEffect } from 'react';
import { FiAward, FiFilter } from 'react-icons/fi';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { certificates, certificateCategories } from '../../data/certificates';
import { PageHero } from '../../components/ui/PageHero/PageHero';
import { Reveal } from '../../components/ui/Reveal/Reveal';
import './Certificados.css';

export default function Certificados() {
  const [activeCategory, setActiveCategory] = useState('todos');
  useScrollReveal();

  useEffect(() => {
    document.title = 'Certificados - Victor Kaue';
  }, []);

  const filtered = activeCategory === 'todos'
    ? certificates
    : certificates.filter((c) => c.category === activeCategory);

  return (
    <main className="page-certificados">
      <section className="content-section">
        <div className="container">
          <PageHero
            titleMain="Certificados &"
            titleAccent="Evolucao Continua"
            subtitle="Formacao tecnica orientada a pratica, validando competencias em backend, dados, DevOps e desenvolvimento web moderno."
            icon={<FiAward size={22} />}
          />

          <div className="cert-filters reveal-on-scroll">
            <div className="filter-icon"><FiFilter size={18} /></div>
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
