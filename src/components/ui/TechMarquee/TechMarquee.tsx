import { expertise } from '../../../data/expertise';
import { TechGlyph, hasTechIcon } from '../TechIcon/TechIcon';
import './TechMarquee.css';

export function TechMarquee() {
  // Flatten all tech items — descarta itens sem ícone (evita buracos no loop)
  const allTech = expertise.flatMap(cat => cat.items).filter(t => hasTechIcon(t.name));

  // Divide em duas linhas para o efeito de rolagem oposta
  const half = Math.ceil(allTech.length / 2);
  const rowTop = allTech.slice(0, half);
  const rowBottom = allTech.slice(half);

  // Duplica os itens de cada linha: a animação CSS desloca -50% para o loop ser contínuo
  const buildRow = (items: typeof allTech) => [...items, ...items];

  const renderTrack = (items: typeof allTech, extraClass: string) => (
    <div className="marquee-row">
      <div className={`marquee-track ${extraClass}`} aria-hidden="true">
        {buildRow(items).map((tech, i) => (
          <div key={`${tech.name}-${i}`} className="marquee-item">
            <TechGlyph name={tech.name} size={40} className="tech-icon" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="tech-marquee-section">
      <div className="marquee-container">
        {renderTrack(rowTop, 'marquee-track--ltr')}
        {renderTrack(rowBottom, 'marquee-track--rtl')}
      </div>
    </section>
  );
}
