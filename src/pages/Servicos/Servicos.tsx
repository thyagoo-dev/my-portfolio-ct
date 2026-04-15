import { useEffect } from 'react';
import { FiDatabase, FiCpu, FiLayout, FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { Button } from '../../components/ui/Button/Button';
import { Reveal } from '../../components/ui/Reveal/Reveal';
import './Servicos.css';

export default function Servicos() {
  useEffect(() => {
    document.title = 'Serviços — Victor Kauê';
  }, []);

  return (
    <main className="page-servicos">
      <section className="services-hero content-section">
        <div className="container text-center reveal-on-scroll">
          <h1 className="section-title" style={{ justifyContent: 'center' }}>
            <FiDatabase size={28} />
            Nossos Serviços
          </h1>
          <p className="section-subtitle">Soluções completas para seu negócio decolar.</p>
        </div>

        <div className="container">
          <div className="services-grid">
            <Reveal delay={0.1}>
              <div className="service-card featured">
                <div className="service-icon">
                  <FiLayout />
                </div>
                <h3>Desenvolvimento Web</h3>
                <p>Criação de sites modernos, responsivos e otimizados para SEO e performance.</p>
                <ul>
                  <li><FiCheckCircle /> Landing Pages</li>
                  <li><FiCheckCircle /> Portfólios</li>
                  <li><FiCheckCircle /> E-commerces</li>
                </ul>
                <Button href="/contato" variant="primary">
                  Saber mais <FiArrowRight />
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="service-card">
                <div className="service-icon">
                  <FiDatabase />
                </div>
                <h3>Sistemas Customizados</h3>
                <p>Desenvolvimento de Dashboards e painéis administrativos para gestão de dados.</p>
                <ul>
                  <li><FiCheckCircle /> Automação de Processos</li>
                  <li><FiCheckCircle /> Integração de APIs</li>
                  <li><FiCheckCircle /> Gestão de Inventário</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="service-card">
                <div className="service-icon">
                  <FiCpu />
                </div>
                <h3>Consultoria Tech</h3>
                <p>Orientação especializada para escolher a melhor stack para seu projeto.</p>
                <ul>
                  <li><FiCheckCircle /> Code Review</li>
                  <li><FiCheckCircle /> Otimização de Performance</li>
                  <li><FiCheckCircle /> Estratégia Digital</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ADDITIONAL INFO */}
      <section className="services-approach content-section">
        <div className="container">
          <div className="approach-content">
            <h2 className="section-title">Como eu trabalho</h2>
            <div className="steps-v2">
              <div className="step-v2">
                <span className="step-num">01</span>
                <h4>Planejamento</h4>
                <p>Entendimento total do seu negócio e objetivos do projeto.</p>
              </div>
              <div className="step-v2">
                <span className="step-num">02</span>
                <h4>Design & UX</h4>
                <p>Criação de interfaces intuitivas e visualmente impactantes.</p>
              </div>
              <div className="step-v2">
                <span className="step-num">03</span>
                <h4>Desenvolvimento</h4>
                <p>Transformação do design em código limpo, rápido e escalável.</p>
              </div>
              <div className="step-v2">
                <span className="step-num">04</span>
                <h4>Lançamento</h4>
                <p>Deploy e acompanhamento inicial para garantir o sucesso.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
