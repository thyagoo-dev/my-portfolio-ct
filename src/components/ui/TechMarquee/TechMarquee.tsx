import { expertise } from '../../../data/expertise';
import { TechGlyph, hasTechIcon } from '../TechIcon/TechIcon';
import './TechMarquee.css';

export function TechMarquee() {
  // Flatten all tech items — descarta itens sem ícone (evita buracos no loop)
  const allTech = expertise.flatMap(cat => cat.items).filter(t => hasTechIcon(t.name));

  // Duplica os itens: a animação CSS desloca -50% para o loop ser contínuo
  const marqueeItems = [...allTech, ...allTech];

  return (
    <section className="tech-marquee-section">
      <div className="marquee-container">
        <div className="marquee-row">
          <div className="marquee-track" aria-hidden="true">
            {marqueeItems.map((tech, i) => (
              <div key={`${tech.name}-${i}`} className="marquee-item">
                <TechGlyph name={tech.name} size={40} className="tech-icon" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
