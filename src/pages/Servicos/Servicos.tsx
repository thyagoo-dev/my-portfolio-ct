import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FiArrowRight, FiCheckCircle, FiCpu, FiDatabase, FiLayout } from 'react-icons/fi';
import { Button } from '../../components/ui/Button/Button';
import { PageHero } from '../../components/ui/PageHero/PageHero';
import { Reveal } from '../../components/ui/Reveal/Reveal';
import './Servicos.css';

export default function Servicos() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('servicos.docTitle');
  }, [t]);

  return (
    <main className="page-servicos">
      <section className="services-hero content-section">
        <div className="container">
          <PageHero
            titleMain={t('servicos.heroMain')}
            titleAccent={t('servicos.heroAccent')}
            subtitle={t('servicos.heroSubtitle')}
            icon={<FiDatabase size={22} />}
          />
        </div>

        <div className="container">
          <div className="services-grid">
            <Reveal delay={0.1}>
              <div className="service-card">
                <div className="service-icon">
                  <FiDatabase />
                </div>
                <h3>{t('servicos.card1Title')}</h3>
                <p>{t('servicos.card1Desc')}</p>
                <ul>
                  <li><FiCheckCircle /> {t('servicos.card1Item1')}</li>
                  <li><FiCheckCircle /> {t('servicos.card1Item2')}</li>
                  <li><FiCheckCircle /> {t('servicos.card1Item3')}</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="service-card featured">
                <div className="service-icon">
                  <FiLayout />
                </div>
                <h3>{t('servicos.card2Title')}</h3>
                <p>{t('servicos.card2Desc')}</p>
                <ul>
                  <li><FiCheckCircle /> {t('servicos.card2Item1')}</li>
                  <li><FiCheckCircle /> {t('servicos.card2Item2')}</li>
                  <li><FiCheckCircle /> {t('servicos.card2Item3')}</li>
                </ul>
                <Button href="/contato" variant="primary">
                  {t('servicos.card2Cta')} <FiArrowRight />
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="service-card">
                <div className="service-icon">
                  <FiCpu />
                </div>
                <h3>{t('servicos.card3Title')}</h3>
                <p>{t('servicos.card3Desc')}</p>
                <ul>
                  <li><FiCheckCircle /> {t('servicos.card3Item1')}</li>
                  <li><FiCheckCircle /> {t('servicos.card3Item2')}</li>
                  <li><FiCheckCircle /> {t('servicos.card3Item3')}</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="services-approach content-section">
        <div className="container">
          <div className="approach-content">
            <h2 className="section-title">{t('servicos.approachTitle')}</h2>
            <div className="steps-v2">
              <div className="step-v2">
                <span className="step-num">01</span>
                <h4>{t('servicos.step1Title')}</h4>
                <p>{t('servicos.step1Desc')}</p>
              </div>
              <div className="step-v2">
                <span className="step-num">02</span>
                <h4>{t('servicos.step2Title')}</h4>
                <p>{t('servicos.step2Desc')}</p>
              </div>
              <div className="step-v2">
                <span className="step-num">03</span>
                <h4>{t('servicos.step3Title')}</h4>
                <p>{t('servicos.step3Desc')}</p>
              </div>
              <div className="step-v2">
                <span className="step-num">04</span>
                <h4>{t('servicos.step4Title')}</h4>
                <p>{t('servicos.step4Desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
