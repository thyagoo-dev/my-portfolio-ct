import { useState, useEffect } from 'react';
import { FiFolder, FiAlertCircle } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import { ProjectCard } from '../../components/ui/ProjectCard/ProjectCard';
import { PageHero } from '../../components/ui/PageHero/PageHero';
import { projects } from '../../data/projects';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Projetos.css';

export default function Projetos() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<'todos' | 'pessoal' | 'real'>('todos');
  useScrollReveal();

  useEffect(() => {
    document.title = 'Projetos — Victor Kauê';
  }, []);

  const filtered = filter === 'todos' ? projects : projects.filter((p) => p.category === filter);

  return (
    <main className="page-projetos">
      <section className="content-section">
        <div className="container">
          <PageHero
            titleMain="Projetos &"
            titleAccent="Soluções Reais"
            subtitle="Cases pessoais e profissionais construídos com foco em arquitetura, performance e valor de negócio do briefing ao deploy."
            icon={<FiFolder size={22} />}
          />

          <div className="projects-filter-container">
            {(['todos', 'pessoal', 'real'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`filter-btn ${filter === f ? 'active' : ''}`}
              >
                {t(`projects.categories.${f === 'todos' ? 'all' : f === 'pessoal' ? 'personal' : 'real'}`)}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="no-projects-found">
              <FiAlertCircle size={32} />
              <p>{t('projects.noFound')}</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
