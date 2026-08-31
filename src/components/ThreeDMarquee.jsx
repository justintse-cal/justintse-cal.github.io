import React from 'react';
import { PROJECTS } from '../data/projects';

const getProjectImg = (proj) => {
  const raw = proj.image || (proj.images && proj.images[0]) || '';
  return raw.startsWith('public/') ? raw.replace('public/', '/') : raw;
};

export default function ThreeDMarquee({ projects = PROJECTS }) {
  // Create 4 multi-direction scrolling columns
  const colCount = 4;
  const columns = Array.from({ length: colCount }, (_, colIdx) => {
    return projects.filter((_, itemIdx) => itemIdx % colCount === colIdx);
  });

  return (
    <div
      className="three-d-marquee-wrapper"
      data-testid="landing-carousel-block"
    >
      <div className="three-d-marquee-grid">
        {columns.map((colProjects, colIndex) => {
          const isEven = colIndex % 2 === 0;
          // Duplicate items to ensure seamless infinite scroll loop
          const colItems = [...colProjects, ...colProjects, ...colProjects];

          return (
            <div
              key={colIndex}
              className={`three-d-marquee-col ${isEven ? 'marquee-col-up' : 'marquee-col-down'}`}
            >
              <div className="three-d-marquee-track">
                {colItems.map((proj, idx) => (
                  <div key={`${proj.id}-${idx}`} className="three-d-marquee-card">
                    <img
                      src={getProjectImg(proj)}
                      alt={proj.title}
                      className="three-d-marquee-img"
                      loading="eager"
                      decoding="async"
                    />
                    <div className="three-d-marquee-card-overlay">
                      <span className="three-d-marquee-card-title">
                        {proj.shortTitle || proj.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
