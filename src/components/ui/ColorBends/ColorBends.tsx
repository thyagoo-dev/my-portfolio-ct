import React from 'react';
import './ColorBends.css';

export const ColorBends: React.FC = () => {
  return (
    <div className="color-bends-container">
      <div className="bends-surface">
        <div className="bend-item bend-1" />
        <div className="bend-item bend-2" />
        <div className="bend-item bend-3" />
        <div className="bend-item bend-4" />
      </div>

      {/* SVG Filter for the distortion effect */}
      <svg className="bends-filter-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="color-bend-filter">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.015" 
              numOctaves="3" 
              seed="5" 
            />
            <feDisplacementMap 
              in="SourceGraphic" 
              scale="120" 
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
