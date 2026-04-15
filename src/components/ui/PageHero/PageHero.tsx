import type { ReactNode } from 'react';
import './PageHero.css';

interface PageHeroProps {
  titleMain: string;
  titleAccent: string;
  subtitle: string;
  icon?: ReactNode;
}

export function PageHero({ titleMain, titleAccent, subtitle, icon }: PageHeroProps) {
  return (
    <header className="page-hero-header reveal-on-scroll">
      <div className="page-hero-title-wrap">
        {icon ? <span className="page-hero-icon">{icon}</span> : null}
        <h1 className="page-hero-title">
          <span className="page-hero-main">{titleMain}</span>
          <span className="page-hero-accent">{titleAccent}</span>
        </h1>
      </div>
      <p className="page-hero-subtitle">{subtitle}</p>
    </header>
  );
}
