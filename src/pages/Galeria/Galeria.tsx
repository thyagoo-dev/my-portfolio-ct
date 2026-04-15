import { useEffect } from 'react';
import { Images } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Galeria() {
  useScrollReveal();
  useEffect(() => { document.title = 'Galeria — Victor Kauê'; }, []);

  const albums = [
    { title: 'Eventos e Palestras', images: [] as string[] },
    { title: 'Equipe e Trabalho', images: [] as string[] },
  ];

  return (
    <main style={{ paddingTop: '8rem' }}>
      <section className="content-section">
        <div className="container">
          <h1 className="section-title"><Images size={28} /> Galeria</h1>
          <p className="section-subtitle">Momentos registrados durante minha trajetória.</p>
          {albums.map((album) => (
            <div key={album.title} className="about-section reveal-on-scroll">
              <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{album.title}</h2>
              <p style={{ color: 'var(--text-muted-color)' }}>
                Em breve — novas fotos serão adicionadas aqui.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
