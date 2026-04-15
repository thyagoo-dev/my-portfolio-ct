import { useEffect } from 'react';
import { FiArrowRight, FiCheckCircle, FiCpu, FiDatabase, FiLayout } from 'react-icons/fi';
import { Button } from '../../components/ui/Button/Button';
import { PageHero } from '../../components/ui/PageHero/PageHero';
import { Reveal } from '../../components/ui/Reveal/Reveal';
import './Servicos.css';

export default function Servicos() {
  useEffect(() => {
    document.title = 'Servicos - Victor Kauê';
  }, []);

  return (
    <main className="page-servicos">
      <section className="services-hero content-section">
        <div className="container">
          <PageHero
            titleMain="Servicos &"
            titleAccent="Especialidades"
            subtitle="Construindo sistemas robustos, escalaveis e de alta performance com foco absoluto na regra de negocio e eficiencia tecnica."
            icon={<FiDatabase size={22} />}
          />
        </div>

        <div className="container">
          <div className="services-grid">
            <Reveal delay={0.1}>
              <div className="service-card featured">
                <div className="service-icon">
                  <FiLayout />
                </div>
                <h3>Desenvolvimento Web</h3>
                <p>Criacao de sites modernos, responsivos e otimizados para SEO e performance.</p>
                <ul>
                  <li><FiCheckCircle /> Landing Pages</li>
                  <li><FiCheckCircle /> Portfolios</li>
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
                <p>Desenvolvimento de dashboards e paineis administrativos para gestão de dados.</p>
                <ul>
                  <li><FiCheckCircle /> Automacao de Processos</li>
                  <li><FiCheckCircle /> Integracao de APIs</li>
                  <li><FiCheckCircle /> gestão de Inventario</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="service-card">
                <div className="service-icon">
                  <FiCpu />
                </div>
                <h3>Consultoria Tech</h3>
                <p>Orientacao especializada para escolher a melhor stack para seu projeto.</p>
                <ul>
                  <li><FiCheckCircle /> Code Review</li>
                  <li><FiCheckCircle /> Otimizacao de Performance</li>
                  <li><FiCheckCircle /> Estrategia Digital</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="services-approach content-section">
        <div className="container">
          <div className="approach-content">
            <h2 className="section-title">Como eu trabalho</h2>
            <div className="steps-v2">
              <div className="step-v2">
                <span className="step-num">01</span>
                <h4>Planejamento</h4>
                <p>Entendimento total do seu negocio e objetivos do projeto.</p>
              </div>
              <div className="step-v2">
                <span className="step-num">02</span>
                <h4>Design & UX</h4>
                <p>Criacao de interfaces intuitivas e visualmente impactantes.</p>
              </div>
              <div className="step-v2">
                <span className="step-num">03</span>
                <h4>Desenvolvimento</h4>
                <p>Transformacao do design em codigo limpo, rapido e escalavel.</p>
              </div>
              <div className="step-v2">
                <span className="step-num">04</span>
                <h4>Lancamento</h4>
                <p>Deploy e acompanhamento inicial para garantir o sucesso.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
