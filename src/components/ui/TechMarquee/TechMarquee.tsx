import { motion } from 'framer-motion';
import { expertise } from '../../../data/expertise';
import { TechGlyph, hasTechIcon } from '../TechIcon/TechIcon';
import './TechMarquee.css';

export function TechMarquee() {
  // Flatten all tech items — descarta itens sem ícone (evita buracos no loop)
  const allTech = expertise.flatMap(cat => cat.items).filter(t => hasTechIcon(t.name));

  // Duplicate items to ensure smooth infinite loop
  const marqueeItems = [...allTech, ...allTech];

  return (
    <section className="tech-marquee-section">
      <div className="marquee-container">
        <div className="marquee-row">
          <motion.div 
            className="marquee-track"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {marqueeItems.map((tech, i) => (
              <div key={`${tech.name}-${i}`} className="marquee-item">
                <TechGlyph name={tech.name} size={40} className="tech-icon" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
