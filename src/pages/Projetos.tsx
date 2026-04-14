import { useState, useEffect } from 'react';
import { FolderGit2 } from 'lucide-react';
import { ProjectCard } from '../components/ui/ProjectCard';
import { projects } from '../data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Projetos.css';

export default function Projetos() {
  const [filter, setFilter] = useState<'todos' | 'pessoal' | 'real'>('todos');
  useScrollReveal();

  useEffect(() => {
    document.title = 'Projetos — Victor Kauê';
  }, []);

  const filtered = filter === 'todos' ? projects : projects.filter((p) => p.category === filter);

  return (
    <main style={{ paddingTop: '8rem' }}>
      <section className="content-section">
        <div className="container">
          <h1 className="section-title">
            <FolderGit2 size={28} />
            Meus Projetos
          </h1>
          <p className="section-subtitle">Projetos pessoais e profissionais desenvolvidos do zero ao deploy.</p>

          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            {(['todos', 'pessoal', 'real'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: '0.55rem 1.2rem',
                  borderRadius: '999px',
                  border: '1px solid',
                  borderColor: filter === f ? 'rgba(245,158,11,0.8)' : 'rgba(255,255,255,0.15)',
                  background: filter === f ? 'linear-gradient(135deg, rgba(245,158,11,0.97), rgba(217,119,6,0.93))' : 'rgba(255,255,255,0.05)',
                  color: '#FFF',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                {f === 'todos' ? 'Todos' : f === 'pessoal' ? 'Pessoais' : 'Profissionais'}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center" style={{ color: 'var(--text-muted-color)', marginTop: '3rem' }}>
              Nenhum projeto encontrado nessa categoria.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
