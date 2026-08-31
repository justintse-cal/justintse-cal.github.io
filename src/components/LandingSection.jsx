import React from 'react';
import { ChevronDown } from 'lucide-react';
import ThreeDMarquee from './ThreeDMarquee';

export default function LandingSection({ isActive, onExploreClick }) {
  const transitionClass = isActive ? 'view-active' : 'view-hidden-up';

  return (
    <section
      className={`view-section landing-section ${transitionClass}`}
      data-testid="landing-section"
      aria-hidden={!isActive}
    >
      {/* Background Topography Lines */}
      <div className="contour-lines-bg" aria-hidden="true" />

      {/* 3D Marquee Background */}
      <ThreeDMarquee />

      {/* Semi-transparent to transparent black color gradient overlay */}
      <div className="landing-marquee-overlay" aria-hidden="true" />

      {/* Hero Content */}
      <div className="landing-grid">
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
      </div>
    </section>
  );
}
