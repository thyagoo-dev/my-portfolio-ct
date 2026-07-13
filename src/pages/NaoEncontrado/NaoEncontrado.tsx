import { useTranslation } from 'react-i18next';
import { FiCompass } from 'react-icons/fi';
import { Button } from '../../components/ui/Button/Button';
import { PageHero } from '../../components/ui/PageHero/PageHero';
import { useSeo } from '../../hooks/useSeo';
import './NaoEncontrado.css';

export default function NaoEncontrado() {
  const { t } = useTranslation();

  useSeo({
    title: t('seo.notFoundTitle'),
    description: t('seo.notFoundDesc'),
    path: '/404',
    noindex: true,
  });

  return (
    <main className="page-404">
      <section className="content-section">
        <div className="container">
          <PageHero
            titleMain="404 —"
            titleAccent="Página não encontrada"
            subtitle="A página que você procura não existe ou foi movida. Vamos te levar de volta ao caminho certo."
            icon={<FiCompass size={22} />}
          />
          <div className="notfound-actions">
            <Button href="/" variant="primary">Voltar para a Home</Button>
            <Button href="/projetos" variant="outline">Ver projetos</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
