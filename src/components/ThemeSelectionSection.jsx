import React from 'react';
import { THEMES } from '../utils/viewTransition';

const THEME_BG_IMAGES = [
  '/img/APA2.jpg',
  '/img/1980.jpg',
  '/img/applications.jpg',
];

export default function ThemeSelectionSection({ isActive, isPast, onSelectTheme }) {
  const transitionClass = isActive
    ? 'view-active'
    : isPast
    ? 'view-hidden-up'
    : 'view-hidden-down';

  return (
    <section
      className={`view-section theme-selection-section ${transitionClass}`}
      data-testid="theme-selection-section"
      aria-hidden={!isActive}
    >
      <div className="theme-selection-container">
        <p className="theme-selection-subheading">
          Select a domain to explore featured work
        </p>

        <div className="theme-columns-grid-minimal">
          {THEMES.map((themeName, idx) => (
            <button
              key={themeName}
              type="button"
              className={`theme-column-minimal theme-col-${idx + 1} ${
                isActive ? `stagger-col-${idx + 1}` : ''
              }`}
              onClick={() => onSelectTheme(themeName)}
              data-testid={`theme-col-${idx + 1}`}
              tabIndex={isActive ? 0 : -1}
            >
              <div
                className="theme-col-bg-image"
                style={{ backgroundImage: `url(${THEME_BG_IMAGES[idx]})` }}
                aria-hidden="true"
              />
              <div className="theme-col-overlay" aria-hidden="true" />
              <h3 className="theme-title-minimal">{themeName}</h3>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
