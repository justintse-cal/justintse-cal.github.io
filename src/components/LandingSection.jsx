import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { PROJECTS } from '../data/projects';

const getProjectImg = (proj) => {
  const raw = proj.image || (proj.images && proj.images[0]) || '';
  return raw.startsWith('public/') ? raw.replace('public/', '/') : raw;
};

export default function LandingSection({ isActive, onExploreClick }) {
  const transitionClass = isActive ? 'view-active' : 'view-hidden-up';

  // Currently popped random card index
  const [poppedIndex, setPoppedIndex] = useState(0);

  // Pick a random project index every 3 seconds
  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setPoppedIndex((prev) => {
        let next;
        do {
          next = Math.floor(Math.random() * PROJECTS.length);
        } while (next === prev && PROJECTS.length > 1);
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isActive]);

  const totalProjects = PROJECTS.length;

  return (
    <section
      className={`view-section landing-section ${transitionClass}`}
      data-testid="landing-section"
      aria-hidden={!isActive}
    >
      <div className="contour-lines-bg" aria-hidden="true" />
      <div className="contour-lines-spotlight" aria-hidden="true" />

      <div className="landing-grid">
        {/* Left Column: Hero Content */}
        <div className="landing-col-left">
          <h1 className="tagline">
            Innovating geospatial solutions that
          </h1>

          <a href="https://git.io/typing-svg" className="typing-svg-link">
            <img
              src="https://readme-typing-svg.demolab.com?font=Merriweather&weight=400&size=60&duration=2500&pause=1000&color=E36414&center=false&vCenter=true&random=true&width=800&height=64&lines=bring+location+intelligence;bridge+the+digital+gap;build+smarter+cities"
              alt="Typing SVG"
              className="typing-svg-img"
            />
          </a>

          <p className="summary">
            Hi, I'm Justin. I work at the intersection of design, urban planning, and spatial science.
            Currently building a climate risk analytical tool for insurance industry leaders.
          </p>

          <button
            type="button"
            className="scroll-hint-btn"
            onClick={onExploreClick}
            aria-label="Navigate to projects section"
            tabIndex={isActive ? 0 : -1}
          >
            <span>Scroll, swipe or tap to explore</span>
            <ChevronDown size={20} />
          </button>
        </div>

        {/* Right Column: Realistic Deep Axonometric 3D Cube Container */}
        <div
          className="landing-col-right"
          data-testid="landing-carousel-block"
        >
          <div className="axonometric-viewport">
            <div className="axonometric-box">
              {/* 3D Cube Glass Floor & Enclosing 3D Glass Walls */}
              <div className="box-floor" aria-hidden="true" />
              <div className="box-wall-back" aria-hidden="true" />
              <div className="box-wall-left" aria-hidden="true" />
              <div className="box-wall-right" aria-hidden="true" />

              {/* Upright Cards Deeply Enclosed Inside the Box Floor */}
              <div className="box-cards-single-column">
                {PROJECTS.map((proj, idx) => {
                  const isPopped = poppedIndex === idx;

                  // Spacing along depth axis
                  const depthOffset = (idx - (totalProjects / 2)) * 18;

                  // Resting cards sit cleanly on the box floor (+15px)
                  // Popped cards lift high UP (-150px) out of the box
                  const popLiftY = isPopped ? -200 : 15;
                  const popLiftZ = isPopped ? 50 : 0;

                  return (
                    <div
                      key={proj.id}
                      className={`axonometric-card ${isPopped ? 'is-popped' : ''}`}
                      style={{
                        transform: `rotateX(-90deg) translate3d(0px, ${popLiftY}px, ${depthOffset + popLiftZ}px)`,
                        zIndex: isPopped ? 300 : 10 + idx,
                      }}
                      title={proj.title}
                    >
                      <div className="axonometric-card-image-wrap">
                        <img
                          src={getProjectImg(proj)}
                          alt={proj.title}
                          className="axonometric-card-img"
                          loading="eager"
                          decoding="async"
                        />
                        <div className="axonometric-card-overlay">
                          <h4 className="axonometric-card-title">{proj.shortTitle || proj.title}</h4>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Front Glass Facade Wall (renders in front of resting cards) */}
              <div className="box-wall-front" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}







