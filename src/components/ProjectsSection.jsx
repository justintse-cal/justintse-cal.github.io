import React, { useState, useEffect } from 'react';
import DetailPanel from './DetailPanel';
import ProjectCarousel from './ProjectCarousel';
import { PROJECTS, getProjectsByTheme, getActiveProject } from '../data/projects';
import { ArrowLeft } from 'lucide-react';

export default function ProjectsSection({ isActive, selectedTheme, onBackToThemes }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Reset active slide index when theme changes
  useEffect(() => {
    setActiveIndex(0);
  }, [selectedTheme]);

  const filteredProjects = getProjectsByTheme(PROJECTS, selectedTheme);
  const safeActiveIndex =
    filteredProjects.length > 0 && activeIndex < filteredProjects.length
      ? activeIndex
      : 0;
  const activeProject = getActiveProject(filteredProjects, safeActiveIndex);
  const transitionClass = isActive ? 'view-active' : 'view-hidden-down';

  return (
    <section
      className={`view-section projects-section ${transitionClass}`}
      data-testid="projects-section"
      aria-hidden={!isActive}
    >
      {/* Background Topography Lines */}
      <div className="contour-lines-bg" aria-hidden="true" />

      {/* Main Project Section Content */}
      <div className="projects-row-main">
        <div className="projects-header-nav">
          <button
            type="button"
            className="back-to-themes-btn"
            onClick={onBackToThemes}
            data-testid="back-to-themes-btn"
            tabIndex={isActive ? 0 : -1}
          >
            <ArrowLeft size={16} />
            <span>Back to Themes</span>
          </button>
        </div>

        <DetailPanel project={activeProject} />
        <ProjectCarousel
          projects={filteredProjects}
          activeIndex={safeActiveIndex}
          onActiveIndexChange={(newIndex) => setActiveIndex(newIndex)}
        />
      </div>
    </section>
  );
}
