import { useEffect } from 'react';
import { Database, Cpu, Layout, CheckCircle2, ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { FloatingLines } from '../components/ui/FloatingLines';
import './Servicos.css';

export default function Servicos() {
  useEffect(() => { 
    document.title = 'Serviços — Victor Kauê'; 
    window.scrollTo(0, 0);
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'server': return <Database size={32} />;
      case 'layers': return <Cpu size={32} />;
      default: return <Layout size={32} />;
    }
  };

  return (
    <main className="servicos-page">
      <FloatingLines />
      
      <section className="servicos-hero">
        <div className="container">
          <Reveal>
            <div className="page-badge">Expertise Técnica</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="page-title">Soluções que escalam <br/><span className="accent-text">com o seu negócio.</span></h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="page-subtitle">
              Transformo requisitos complexos em arquiteturas limpas, 
              utilizando as melhores práticas de desenvolvimento backend e full-stack.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="services-showcase">
        <div className="container">
          <div className="services-detailed-grid">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={0.1 * i} yOffset={40}>
                <div className="service-premium-card">
                  <div className="s-card-glow"></div>
                  <div className="s-card-header">
                    <div className="s-icon-wrapper">
                      {getIcon(s.icon)}
                    </div>
                    <span className="s-number">0{i + 1}</span>
                  </div>
                  
                  <h2 className="s-title">{s.title}</h2>
                  <p className="s-description">{s.description}</p>
                  
                  <div className="s-divider"></div>
                  
                  <ul className="s-features-list">
                    {s.features.map((feature, idx) => (
                      <li key={idx} className="s-feature-item">
                        <CheckCircle2 size={16} className="s-check-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="s-card-footer">
                    <Button href="/contato" variant="ghost" className="s-cta">
                      Saber mais <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.5} width="100%">
            <div className="servicos-cta-box">
              <div className="cta-content">
                <h2>Pronto para tirar sua ideia do papel?</h2>
                <p>Vamos conversar sobre como eu posso ajudar tecnicamente no seu próximo grande projeto.</p>
              </div>
              <Button href="/contato" variant="primary">
                Agendar Consultoria Técnica
                <ArrowRight size={18} />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
