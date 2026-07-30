import React from 'react';
import { ChevronDown } from 'lucide-react';
import { PROJECTS } from '../data/projects';

const getProjectImg = (proj) => {
  const raw = proj.image || (proj.images && proj.images[0]) || '';
  return raw.startsWith('public/') ? raw.replace('public/', '/') : raw;
};

export default function LandingSection({ isActive, onExploreClick }) {
  const transitionClass = isActive ? 'view-active' : 'view-hidden-up';

  // Quadruple projects array to create a continuous, seamless infinite loop
  const marqueeItems = [...PROJECTS, ...PROJECTS, ...PROJECTS, ...PROJECTS];

  return (
    <section
      className={`view-section landing-section ${transitionClass}`}
      data-testid="landing-section"
      aria-hidden={!isActive}
    >
      <div className="contour-lines-bg" aria-hidden="true" />
      <div className="contour-lines-spotlight" aria-hidden="true" />
      <div className="landing-content">
        <h1 className="tagline">
          Innovating geospatial solutions that
        </h1>
        <a href="https://git.io/typing-svg" className="typing-svg-link">
          <img src="https://readme-typing-svg.demolab.com?font=Merriweather&weight=800&size=36&duration=2500&pause=1000&color=E36414&center=true&vCenter=true&random=true&width=800&height=50&lines=bring+location+intelligence+to+life;bridge+the+digital+gap;build+smarter+cities" alt="Typing SVG" className="typing-svg-img" />
        </a>
        <p className="summary">
          Hi, I'm Justin. I work at the intersection of design, urban planning, and spatial science.
          Currently building a climate risk analytical tool for insurance industry leaders.
        </p>

        {/* Moving Horizontal Project Icons Marquee Carousel */}
        <div className="landing-carousel-block" data-testid="landing-carousel-block">
          <div className="landing-marquee-track">
            {marqueeItems.map((proj, idx) => (
              <div
                key={`${proj.id}-${idx}`}
                className="landing-icon-item"
                title={proj.title}
              >
                <img
                  src={getProjectImg(proj)}
                  alt={proj.title}
                  className="landing-icon-img"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="scroll-hint-btn"
          onClick={onExploreClick}
          aria-label="Navigate to projects section"
          tabIndex={isActive ? 0 : -1}
        >
          <span>Scroll or click to explore projects</span>
          <ChevronDown size={20} />
        </button>
      </div>
    </section>
  );
}
